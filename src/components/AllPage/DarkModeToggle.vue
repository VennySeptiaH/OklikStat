<template>
  <div class="fixed bottom-4 right-4 z-[99999]" style="z-index:99999;">
    <!-- Floating Button -->
    <button
      @click="toggleChat"
      class="w-12 h-12 rounded-full bg-blue-600 text-white text-xl shadow-md transform transition-transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
      aria-label="Toggle chat"
    >
      <i :class="isOpen ? 'fas fa-times' : 'fas fa-comment-dots'" class="text-base"></i>
    </button>

    <!-- Chatbot Popup -->
    <transition name="chat-popup">
      <div
        v-if="isOpen"
        class="absolute bottom-14 right-0 w-64 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden"
        style="height: 380px;"
      >
        <!-- Header -->
        <div class="bg-blue-600 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center text-sm">📊</div>
            <div>
              <p class="text-white text-sm font-semibold leading-none">Asisten PST BPS Kab. Blitar</p>
              <p class="text-white/75 text-xs mt-0.5">● Online</p>
            </div>
          </div>
          <button @click="isOpen = false" class="text-white/80 hover:text-white text-lg leading-none">✕</button>
        </div>

        <!-- Messages Area -->
        <div class="flex-1 overflow-y-auto p-2 space-y-2" ref="messagesArea">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex"
            :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div
              class="max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed"
              :class="message.role === 'user'
                ? 'bg-blue-600 text-white rounded-br-md'
                : 'bg-gray-100 text-gray-800 rounded-bl-md'"
            >
              <div class="message-content" v-html="formatText(message.text)"></div>
            </div>
          </div>

          <!-- Loading -->
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-2 text-sm text-gray-500 italic">
              Memproses...
            </div>
          </div>
        </div>

        <!-- Input -->
        <div class="flex gap-2 p-2 border-t border-gray-100 flex-shrink-0">
          <input
            type="text"
            placeholder="Ketik pilihan atau 'kembali'..."
            v-model="draftMessage"
            @keydown.enter="sendMessage"
            :disabled="isLoading"
            ref="inputField"
            class="flex-1 text-sm border border-gray-200 rounded-full px-3 py-1.5 outline-none focus:border-blue-400 bg-gray-50"
          />
          <button
            @click="sendMessage"
            :disabled="isLoading || !draftMessage.trim()"
            class="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:bg-gray-300 flex-shrink-0"
          >
            <i class="fas fa-paper-plane text-xs"></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// ── DATA EXCEL — hanya tahun 2020 ke atas ──────────────────────────────────
const BPS_DATA = {
  I: {
    label: "Statistik Geografis",
    items: [
      { no: "1", label: "Luas Wilayah", satuan: "Km²",
        data: { "2020": 1588.79, "2021": 1588.79, "2022": 1588.79, "2023": 1588.79 } }
    ]
  },
  II: {
    label: "Kependudukan",
    items: [
      { no: "1",  label: "Jumlah Penduduk",        satuan: "Jiwa",      data: { "2020": 1221712, "2021": 1232584, "2022": 1243195, "2023": 1253550 } },
      { no: "2",  label: "- Laki-laki",             satuan: "Jiwa",      data: { "2020": 615592,  "2021": 620725,  "2022": 625695,  "2023": 630506  } },
      { no: "3",  label: "- Perempuan",             satuan: "Jiwa",      data: { "2020": 606120,  "2021": 611859,  "2022": 617500,  "2023": 623044  } },
      { no: "4",  label: "Sex Rasio",               satuan: "%",         data: { "2020": 101.563, "2021": 101.449, "2022": 101.327, "2023": 101.198 } },
      { no: "5",  label: "Pertumbuhan Penduduk",    satuan: "%",         data: { "2020": 0.890,   "2021": 0.890,   "2022": 0.861,   "2023": 0.833   } },
      { no: "6",  label: "Kepadatan Penduduk",      satuan: "Jiwa/Km²",  data: { "2020": 769.0,   "2021": 775.8,   "2022": 782.5,   "2023": 789.0   } },
    ]
  },
  III: {
    label: "Ketenagakerjaan",
    items: [
      { no: "1", label: "Penduduk Usia Kerja (>15 Th)",            satuan: "Orang", data: { "2020": 928391, "2021": 933473, "2022": 938232, "2023": 999506 } },
      { no: "2", label: "Angkatan Kerja",                           satuan: "Orang", data: { "2020": 657595, "2021": 657544, "2022": 682958, "2023": 734660 } },
      { no: "3", label: "Bekerja",                                  satuan: "Orang", data: { "2020": 632461, "2021": 633472, "2022": 645739, "2023": 698611 } },
      { no: "4", label: "Pengangguran",                             satuan: "Orang", data: { "2020": 25134,  "2021": 24072,  "2022": 37219,  "2023": 36049  } },
      { no: "5", label: "TPT (Tingkat Pengangguran Terbuka)",       satuan: "%",     data: { "2020": 3.82,   "2021": 3.66,   "2022": 5.45,   "2023": 4.91   } },
      { no: "6", label: "TPAK (Tingkat Partisipasi Angkatan Kerja)", satuan: "%",    data: { "2020": 70.83,  "2021": 70.44,  "2022": 72.79,  "2023": 73.50  } },
      { no: "7", label: "UMK (Upah Minimum Kabupaten)",             satuan: "Rupiah",data: { "2020": 1954705,"2021": 2004705,"2022": 2015071,"2023": 2215071} },
    ]
  },
  IV: {
    label: "Kemiskinan",
    items: [
      { no: "1", label: "Penduduk Miskin",                  satuan: "Ribu Jiwa", data: { "2020": 108.55, "2021": 112.62, "2022": 101.94, "2023": 101.94 } },
      { no: "2", label: "Persentase Kemiskinan",            satuan: "%",         data: { "2020": 9.33,   "2021": 9.65,   "2022": 8.71,   "2023": 8.69   } },
      { no: "3", label: "Garis Kemiskinan",                 satuan: "Rupiah",    data: { "2020": 325675, "2021": 335573, "2022": 355511, "2023": 387733 } },
      { no: "4", label: "Indeks Kedalaman Kemiskinan (P1)", satuan: "-",         data: { "2020": 1.35,   "2021": 0.85,   "2022": 1.33,   "2023": 1.21   } },
      { no: "5", label: "Indeks Keparahan Kemiskinan (P2)", satuan: "-",         data: { "2020": 0.30,   "2021": 0.14,   "2022": 0.30,   "2023": 0.24   } },
      { no: "6", label: "Indeks Gini Rasio",                satuan: "-",         data: { "2020": 0.348,  "2021": 0.353,  "2022": 0.335,  "2023": 0.360  } },
      { no: "7", label: "Jumlah Miskin Ekstrem",            satuan: "Ribu Jiwa", data: { "2020": 42.33,  "2021": 17.11,  "2022": 9.3,    "2023": 3.40   } },
      { no: "8", label: "Persentase Miskin Ekstrem",        satuan: "%",         data: { "2020": 3.64,   "2021": 1.39,   "2022": 0.79,   "2023": 0.29   } },
    ]
  },
  V: {
    label: "Komponen IPM",
    items: [
      { no: "1", label: "Angka Harapan Hidup",          satuan: "Tahun",       data: { "2020": 73.52, "2021": 73.61, "2022": 73.98, "2023": 74.34  } },
      { no: "2", label: "Angka Melek Huruf",            satuan: "%",           data: { "2020": 94.70  } },
      { no: "3", label: "Rata-rata Lama Sekolah",       satuan: "Tahun",       data: { "2020": 8.09   } },
      { no: "4", label: "Harapan Lama Sekolah (EYS)",   satuan: "Tahun",       data: { "2020": 12.46, "2021": 12.63, "2022": 12.64, "2023": 12.65  } },
      { no: "5", label: "Rata-rata Lama Sekolah (MYS)", satuan: "Tahun",       data: { "2020": 7.39,  "2021": 7.5,   "2022": 7.82,  "2023": 7.83   } },
      { no: "6", label: "Pengeluaran Per Kapita PPP",   satuan: "Ribu Rupiah", data: { "2020": 10654, "2021": 10757, "2022": 11001, "2023": 11499  } },
    ]
  }
}

const DESKRIPSI = {
  I:   "Sumber: BPS Kab. Blitar, Indikator Sosial Ekonomi 2023.",
  II:  "Data bersumber dari Proyeksi Penduduk hasil SP2020. Sumber: BPS Kab. Blitar, Indikator Sosial Ekonomi 2023.",
  III: "Data bersumber dari Survei Angkatan Kerja Nasional (Sakernas). Sumber: BPS Kab. Blitar, Indikator Sosial Ekonomi 2023.",
  IV:  "Data bersumber dari Survei Sosial Ekonomi Nasional (Susenas). Sumber: BPS Kab. Blitar, Indikator Sosial Ekonomi 2023.",
  V:   "Data bersumber dari publikasi resmi IPM BPS. Sumber: BPS Kab. Blitar, Indikator Sosial Ekonomi 2023."
}

const RULE_RESPONSES = {
  B: `*Layanan Publikasi BPS*\n\n1. Terbitan BPS Kab. Blitar:\nhttps://blitarkab.bps.go.id/id/publication\n\n2. Terbitan BPS selain Kab. Blitar:\nhttps://www.bps.go.id/id/publication\n\nKetik *menu* untuk kembali ke menu utama.`,
  C: `*Layanan Rekomendasi Statistik*\n\nSilahkan klik tautan berikut:\nhttps://romantik.bps.go.id/site/index/\n\nKetik *menu* untuk kembali ke menu utama.`,
  D: `*Layanan Konsultasi Statistik*\n\n1. Secara online:\nhttps://silastik.bps.go.id/v3/index.php/site/index_internal/\n\n2. Secara manual: balas dengan menyebutkan nama, alamat, dan hal yang dikonsultasikan (dijawab hari kerja Senin-Jumat 08.00-15.30)\n\nKetik *menu* untuk kembali ke menu utama.`,
  E: `*Pengaduan*\n\nDapat disampaikan
1. Secara online silahkan klik tautan : s.bps.go.id/Pengaduan3505 atau melalui SP4N LAPOR https://www.lapor.go.id/
2. Silakan disampaikan melalui whatsapp ke nomor 0852-5917-3487\n
`
}

// Bangun teks menu utama
const MENU_TEXT = `Terima kasih sudah menghubungi layanan online PST BPS Kab. Blitar.

A. Layanan Data Kab. Blitar
B. Layanan Publikasi BPS
C. Layanan Rekomendasi Statistik
D. Layanan Konsultasi Statistik
E. Pengaduan

Silahkan ketik pilihan *A / B / C / D / E*.`

// Bangun teks menu kategori data
function buildKategoriText() {
  const list = Object.entries(BPS_DATA)
    .map(([k, v], i) => `${i + 1}. ${v.label}`)
    .join('\n')
  return `*Layanan Data Kab. Blitar*\n\nPilih kategori:\n${list}\n\nKetik nomor pilihan atau *kembali* untuk kembali.`
}

// Bangun teks menu item dalam satu kategori
function buildItemText(katKey) {
  const kat = BPS_DATA[katKey]
  const list = kat.items.map((item, i) => `${i + 1}. ${item.label}`).join('\n')
  return `*${katKey}. ${kat.label}*\n\nPilih data:\n${list}\n\nKetik nomor pilihan atau *kembali* untuk kembali.`
}

// Bangun teks tabel data
function buildDataText(katKey, itemIdx) {
  const kat = BPS_DATA[katKey]
  const item = kat.items[itemIdx]
  const rows = Object.entries(item.data)
    .map(([yr, val]) => {
      const num = parseFloat(val)
      const display = isNaN(num) ? val : (num >= 1000 ? num.toLocaleString('id-ID') : num.toString())
      return `  ${yr}  :  ${display} ${item.satuan}`
    })
    .join('\n')
  return `📊 *${item.label}*\nSatuan: ${item.satuan}\n\n${rows}\n\n_${DESKRIPSI[katKey]}_\n\nKetik *kembali* untuk kembali ke daftar data.`
}

// Mapping nomor → key kategori
const KATEGORI_KEYS = Object.keys(BPS_DATA) // ['I','II','III','IV','V']

export default {
  name: 'FloatingChatbot',

  data() {
    return {
      isOpen: false,
      draftMessage: '',
      isLoading: false,
      // State navigasi: 'main' | 'kategori' | 'item' | 'data' | 'info'
      level: 'main',
      activeKatKey: null,   // 'II', 'III', dst
      activeItemIdx: null,  // index item dalam items[]
      messages: []
    }
  },

  mounted() {
    this.showMain()
  },

  watch: {
    isOpen(val) {
      if (val) {
        this.$nextTick(() => {
          this.$refs.inputField?.focus()
          this.scrollToBottom()
        })
      }
    }
  },

  methods: {
    toggleChat() {
      this.isOpen = !this.isOpen
    },

    scrollToBottom() {
      this.$nextTick(() => {
        const el = this.$refs.messagesArea
        if (el) el.scrollTop = el.scrollHeight
      })
    },

    formatText(text) {
      let t = text
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      // Bold: *teks*
      t = t.replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      // Italic: _teks_
      t = t.replace(/_(.*?)_/g, '<em>$1</em>')
      // Link
      t = t.replace(/(https?:\/\/[^\s<]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline break-all">$1</a>')
      return t.replace(/\n/g, '<br>')
    },

    addBot(text) {
      this.messages.push({ role: 'assistant', text })
      this.scrollToBottom()
    },

    addUser(text) {
      this.messages.push({ role: 'user', text })
      this.scrollToBottom()
    },

    // ── Level: main ──
    showMain() {
      this.level = 'main'
      this.activeKatKey = null
      this.activeItemIdx = null
      this.messages = []
      this.addBot(MENU_TEXT)
    },

    // ── Level: kategori ──
    showKategori() {
      this.level = 'kategori'
      this.activeKatKey = null
      this.activeItemIdx = null
      this.addBot(buildKategoriText())
    },

    // ── Level: item ──
    showItem(katKey) {
      this.level = 'item'
      this.activeKatKey = katKey
      this.activeItemIdx = null
      this.addBot(buildItemText(katKey))
    },

    // ── Level: data ──
    showData(katKey, itemIdx) {
      this.level = 'data'
      this.activeKatKey = katKey
      this.activeItemIdx = itemIdx
      this.addBot(buildDataText(katKey, itemIdx))
    },

    // ── Kembali satu level ──
    goBack() {
      if (this.level === 'data') {
        this.showItem(this.activeKatKey)
      } else if (this.level === 'item') {
        this.showKategori()
      } else if (this.level === 'kategori') {
        this.showMain()
      } else if (this.level === 'info') {
        this.showMain()
      } else {
        this.addBot('Anda sudah berada di menu utama. Ketik *A/B/C/D/E* untuk memilih layanan.')
      }
    },

    async sendMessage() {
      const message = this.draftMessage.trim()
      if (!message || this.isLoading) return

      this.addUser(message)
      this.draftMessage = ''
      this.isLoading = true

      await new Promise(r => setTimeout(r, 200))

      const upper = message.toUpperCase().trim()
      const isKembali = ['KEMBALI', 'BACK', 'KELUAR', 'EXIT'].includes(upper)
      const isMenu    = ['MENU', 'MULAI', 'START', 'HALO', 'HI'].includes(upper)

      if (isMenu) {
        this.showMain()
      } else if (isKembali) {
        this.goBack()
      } else {

        // ── Level main ──
        if (this.level === 'main') {
          if (upper === 'A') {
            this.showKategori()
          } else if (RULE_RESPONSES[upper]) {
            this.level = 'info'
            this.addBot(RULE_RESPONSES[upper])
          } else {
            this.addBot('Pilihan tidak dikenali. Ketik *A / B / C / D / E* untuk memilih layanan.')
          }
        }

        // ── Level kategori (user ketik 1-5) ──
        else if (this.level === 'kategori') {
          const idx = parseInt(upper) - 1
          if (!isNaN(idx) && idx >= 0 && idx < KATEGORI_KEYS.length) {
            this.showItem(KATEGORI_KEYS[idx])
          } else {
            this.addBot(`Ketik nomor 1 s.d. ${KATEGORI_KEYS.length} untuk memilih kategori, atau *kembali* untuk ke menu utama.`)
          }
        }

        // ── Level item (user ketik nomor item) ──
        else if (this.level === 'item') {
          const kat = BPS_DATA[this.activeKatKey]
          const idx = parseInt(upper) - 1
          if (!isNaN(idx) && idx >= 0 && idx < kat.items.length) {
            this.showData(this.activeKatKey, idx)
          } else {
            this.addBot(`Ketik nomor 1 s.d. ${kat.items.length} untuk memilih data, atau *kembali* untuk ke daftar kategori.`)
          }
        }

        // ── Level data / info ──
        else {
          this.addBot('Ketik *kembali* untuk kembali, atau *menu* untuk ke menu utama.')
        }
      }

      this.isLoading = false
    }
  }
}
</script>

<style scoped>
.chat-popup-enter-active,
.chat-popup-leave-active {
  transition: opacity 0.2s, transform 0.2s;
  transform-origin: bottom right;
}
.chat-popup-enter-from,
.chat-popup-leave-to {
  opacity: 0;
  transform: scale(0.85);
}
.message-content { line-height: 1.6; }
.message-content :deep(a) { color: #1d4ed8; text-decoration: underline; word-break: break-all; }
.message-content :deep(a:hover) { color: #1e40af; }
.message-content :deep(strong) { font-weight: 600; }
.message-content :deep(em) { font-style: italic; color: #6b7280; }
</style>