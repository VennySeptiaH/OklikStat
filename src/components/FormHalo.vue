<template>
  <div class="">
    <div class="max-w-xs text-sm breadcrumbs ml-20 self-start">
      <ul>
        <li class="text-[#0093AD]"><a>Beranda </a></li>
        <li class="text-[#0093AD]"><a>Layanan Publik </a></li>
        <li class="text-gray-600 dark:text-white"><a>Halo FMKI</a></li>
      </ul>
    </div>
  </div>
  <!-- Main Form -->
  <div class="flex items-center justify-center min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full dark:bg-black">
      <div v-if="step === 1">
        <!-- Step 1: Data Pribadi -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold dark:text-white">
            HALO <span class="text-cyan-600">FMKI</span>
          </h1>

          <div class="flex justify-center mt-2 mb-4">
            <div class="h-1 w-16 bg-cyan-500"></div>
            <div class="h-1 w-8 bg-cyan-600"></div>
            <div class="h-1 w-8 bg-cyan-800"></div>
          </div>
          <p class="text-gray-600 text-lg dark:text-white">Forum Mahasiswa Kedinasan Indonesia</p>
        </div>

        <!-- Step Indicator -->
        <div class="flex justify-center mt-2 mb-4">
          <ul class="steps">
            <li class="step step-accent"></li>
            <li class="step"></li>
            <li data-content="✓" class="step step"></li>
          </ul>
        </div>

        <!-- Form -->
        <form @submit.prevent="nextStep">
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                DATA PRIBADI
              </h2>
              <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">
                Berisikan data pribadi yang dapat dihubungi dari pemohon konten FMKI Pusat
              </p>

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div class="sm:col-span-full">
                  <label
                    for="jenisPermohonan"
                    class="block text-sm font-medium leading-6 text-gray-900 font-bold dark:text-white"
                    >Jenis Permohonan</label
                  >
                  <div class="mt-2 w-full">
                    <!-- Tambahkan kelas w-full di sini -->
                    <select
                      id="jenisPermohonan"
                      name="jenisPermohonan"
                      autocomplete="jenisPermohonan"
                      class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                      v-model="jenisPermohonan"
                      style="width: 100%"
                    >
                      <!-- Tambahkan style width: 100%; di sini -->
                      <option disabled value="">-Select-</option>
                      <option value="request bidang">Request Bidang</option>
                      <option value="media partner">Media Partner</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-full">
                  <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Email</label
                  >
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      v-model="email"
                      @blur="validateEmail"
                      :class="
                        emailError
                          ? 'ring-red-500 focus:ring-red-500'
                          : 'ring-gray-300 focus:ring-indigo-600'
                      "
                      class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div
                    v-if="emailError"
                    class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
                  >
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                      ></path>
                    </svg>
                    Tolong masukkan email yang valid.
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="namaLengkap"
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Nama Lengkap</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="namaLengkap"
                      id="namaLengkap"
                      autocomplete="namaLengkap"
                      v-model="namaLengkap"
                      @blur="validateField('namaLengkap')"
                      :class="
                        errors.namaLengkap
                          ? 'ring-red-500 focus:ring-red-500'
                          : 'ring-gray-300 focus:ring-indigo-600'
                      "
                      class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div
                    v-if="errors.namaLengkap"
                    class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
                  >
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                      ></path>
                    </svg>
                    Nama lengkap tidak boleh kosong.
                  </div>
                </div>

                <div class="sm:col-span-full">
                  <label
                    for="noHp"
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >No. HP/WhatsApp</label
                  >
                  <div class="mt-2">
                    <div
                      class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
                      style="width: 100%"
                    >
                      <span
                        class="flex select-none items-center pl-3 text-gray-500 sm:text-sm dark:bg-white"
                        >+62/</span
                      >
                      <input
                        type="text"
                        name="noHp"
                        id="noHp"
                        autocomplete="noHp"
                        v-model="noHp"
                        @blur="validateField('noHp')"
                        :class="
                          errors.noHp
                            ? 'ring-red-500 focus:ring-red-500'
                            : 'ring-gray-300 focus:ring-indigo-600'
                        "
                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 pr-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 w-full dark:bg-white"
                        placeholder="8XXXXXXXXXX"
                        pattern="[0-9]{9,12}"
                        title="Harap masukkan angka antara 9 hingga 12 digit"
                      />
                    </div>
                  </div>

                  <div
                    v-if="errors.noHp"
                    class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
                  >
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                      ></path>
                    </svg>
                    No. HP tidak boleh kosong dan harus antara 9 hingga 12 digit.
                  </div>
                </div>

                <div class="sm:col-span-full">
                  <label
                    for="kepengurusan"
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Kepengurusan</label
                  >
                  <div class="mt-2">
                    <select
                      id="kepengurusan"
                      name="kepengurusan"
                      autocomplete="kepengurusan"
                      v-model="kepengurusan"
                      @blur="validateField('kepengurusan')"
                      :class="
                        errors.kepengurusan
                          ? 'ring-red-500 focus:ring-red-500'
                          : 'ring-gray-300 focus:ring-indigo-600'
                      "
                      class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      style="width: 100%"
                    >
                      <option disabled value="">-Select-</option>
                      <option>DPP</option>
                      <option>Demus</option>
                      <option>IKA</option>
                    </select>
                  </div>
                  <div
                    v-if="errors.kepengurusan"
                    class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
                  >
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                      ></path>
                    </svg>
                    Kepengurusan tidak boleh kosong.
                  </div>
                </div>

                <div class="col-span-full">
                  <label
                    for="bidang"
                    class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                    >Bidang</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="bidang"
                      id="bidang"
                      autocomplete="bidang"
                      v-model="bidang"
                      @blur="validateField('bidang')"
                      :class="
                        errors.bidang
                          ? 'ring-red-500 focus:ring-red-500'
                          : 'ring-gray-300 focus:ring-indigo-600'
                      "
                      class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      title="Ex : Komunikasi"
                    />
                  </div>
                  <div
                    v-if="errors.bidang"
                    class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
                  >
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                      ></path>
                    </svg>
                    Bidang tidak boleh kosong.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 bg-white hover:shadow-lg shadow"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="rounded-md bg-custom px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      <!-- Step 2: Data Request Content -->
      <div v-if="step === 2">
        <!-- Header -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold dark:text-white">
            HALO <span class="text-cyan-600">FMKI</span>
          </h1>
          <div class="flex justify-center mt-2 mb-4">
            <div class="h-1 w-16 bg-cyan-500"></div>
            <div class="h-1 w-8 bg-cyan-600"></div>
            <div class="h-1 w-8 bg-cyan-800"></div>
          </div>
          <p class="text-gray-600 text-lg dark:text-white">Forum Mahasiswa Kedinasan Indonesia</p>
        </div>
        <h2 class="text-base font-semibold leading-12 text-gray-900 dark:text-white">
          DATA REQUEST CONTENT
        </h2>

        <!-- Step Indicator -->
        <div class="flex justify-center mt-2 mb-4">
          <ul class="steps">
            <li class="step step-accent"></li>
            <li class="step step-accent"></li>
            <li data-content="✓" class="step step"></li>
          </ul>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div class="sm:col-span-full">
              <fieldset class="border-b border-gray-900/10 pb-12">
                <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  Jenis Konten
                </legend>
                <div class="mt-6 grid grid-cols-3 gap-4">
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="feeds"
                      name="feeds"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="feeds"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Feeds</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="youtube"
                      name="youtube"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="youtube"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Youtube</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="virtual-background"
                      name="virtual-background"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="virtual-background"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Virtual Background</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="story-instagram"
                      name="story-instagram"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="story-instagram"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Story Instagram</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="tiktok"
                      name="tiktok"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="tiktok"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >TikTok</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="thumbnail-video"
                      name="thumbnail-video"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="thumbnail-video"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Thumbnail Video</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="reels"
                      name="reels"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="reels"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Reels</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="sertifikat"
                      name="sertifikat"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="sertifikat"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Sertifikat</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="bumper-video"
                      name="bumper-video"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="bumper-video"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Bumper Video</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="igtv"
                      name="igtv"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="igtv"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >IGTV</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="twibbon"
                      name="twibbon"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="twibbon"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Twibbon</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="artikel-website"
                      name="artikel-website"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="artikel-website"
                      class="text-sm font-medium leading-6 text-gray-900 dark:text-white"
                      >Artikel Website</label
                    >
                  </div>
                </div>
              </fieldset>
              <!-- Pesan Kesalahan Jenis Konten -->
              <div
                v-if="jenisKontenError"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4v.01M12 18h.01M20.292 3.708a1 1 0 010 1.414l-16 16a1 1 0 01-1.414-1.414l16-16a1 1 0 011.414 0z"
                  />
                </svg>
                <span class="text-sm font-medium">Pilih setidaknya satu jenis konten.</span>
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="judulKonten"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Judul Konten</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="judulKonten"
                  id="judulKonten"
                  autocomplete="judulKonten"
                  v-model="judulKonten"
                  @blur="validateField('judulKonten')"
                  :class="
                    errors.judulKonten
                      ? 'ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  "
                  class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              <div
                v-if="errors.judulKonten"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                  ></path>
                </svg>
                Judul Konten tidak boleh kosong.
              </div>
            </div>

            <div class="sm:col-span-full">
              <label
                for="lampiran"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Berkas Pendukung (Brief Sheet Content)</label
              >
              <div class="mt-2">
                <input
                  id="lampiran"
                  name="lampiran"
                  type="file"
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-full">
              <label
                for="uraian"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Content Caption</label
              >
              <div class="mt-2">
                <textarea
                  id="uraian"
                  name="uraian"
                  rows="3"
                  v-model="uraian"
                  @blur="validateField('uraian')"
                  :class="
                    errors.uraian
                      ? 'ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  "
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:py-1.5 px-3 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div
                v-if="errors.uraian"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                  ></path>
                </svg>
                Content Caption tidak boleh kosong.
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="tanggalUpload"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Tanggal Konten di Upload</label
              >
              <div class="mt-2">
                <input
                  id="tanggalUpload"
                  type="date"
                  v-model="tanggalUpload"
                  @blur="validateField('tanggalUpload')"
                  :class="
                    errors.tanggalUpload
                      ? 'ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  "
                  class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div
                v-if="errors.tanggalUpload"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                  ></path>
                </svg>
                Tanggal Konten di Upload tidak boleh kosong.
              </div>
            </div>

            <div class="col-span-full">
              <label
                for="tanggalAcara"
                class="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >Tanggal Acara di Upload</label
              >
              <div class="mt-2">
                <input
                  id="tanggalAcara"
                  type="date"
                  v-model="tanggalAcara"
                  @blur="validateField('tanggalAcara')"
                  :class="
                    errors.tanggalAcara
                      ? 'ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  "
                  class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div
                v-if="errors.tanggalAcara"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                  ></path>
                </svg>
                Tanggal Acara di Upload tidak boleh kosong.
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 bg-white hover:shadow-lg shadow"
              @click="prevStep"
            >
              Back
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style="background-color: #0c2846"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div v-if="step === 3">
        <!-- Step 3: Data Media Partner -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold">HALO <span class="text-cyan-600">FMKI</span></h1>
          <div class="flex justify-center mt-2 mb-4">
            <div class="h-1 w-16 bg-cyan-500"></div>
            <div class="h-1 w-8 bg-cyan-600"></div>
            <div class="h-1 w-8 bg-cyan-800"></div>
          </div>
          <p class="text-gray-600 text-lg">Forum Mahasiswa Kedinasan Indonesia</p>
        </div>

        <div class="flex justify-center mt-2 mb-4">
          <ul class="steps">
            <li class="step step-accent"></li>
            <li class="step step-accent"></li>
            <li data-content="✓" class="step step"></li>
          </ul>
        </div>
        <h2 class="text-base font-semibold leading-12 text-gray-900">DATA MEDIA PARTNER</h2>

        <form @submit.prevent="handleSubmit">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
            <div class="sm:col-span-full">
              <fieldset class="border-b border-gray-900/10 pb-12">
                <legend class="text-sm font-semibold leading-6 text-gray-900">Jenis Konten</legend>
                <div class="mt-6 grid grid-cols-3 gap-4">
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="feeds"
                      name="feeds"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label for="feeds" class="text-sm font-medium leading-6 text-gray-900"
                      >Feeds</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="youtube"
                      name="youtube"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label for="youtube" class="text-sm font-medium leading-6 text-gray-900"
                      >Youtube</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="story-instagram"
                      name="story-instagram"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label for="story-instagram" class="text-sm font-medium leading-6 text-gray-900"
                      >Story Instagram</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="tiktok"
                      name="tiktok"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label for="tiktok" class="text-sm font-medium leading-6 text-gray-900"
                      >TikTok</label
                    >
                  </div>

                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="reels"
                      name="reels"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label for="reels" class="text-sm font-medium leading-6 text-gray-900"
                      >Reels</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="artikel-website"
                      name="artikel-website"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label for="artikel-website" class="text-sm font-medium leading-6 text-gray-900"
                      >Artikel Website</label
                    >
                  </div>
                  <div class="relative flex items-center gap-x-3">
                    <input
                      id="igtv"
                      name="igtv"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label for="igtv" class="text-sm font-medium leading-6 text-gray-900"
                      >IGTV</label
                    >
                  </div>
                </div>
              </fieldset>
              <!-- Pesan Kesalahan Jenis Konten -->
              <div
                v-if="jenisKontenError"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4v.01M12 18h.01M20.292 3.708a1 1 0 010 1.414l-16 16a1 1 0 01-1.414-1.414l16-16a1 1 0 011.414 0z"
                  />
                </svg>
                <span class="text-sm font-medium">Pilih setidaknya satu jenis konten.</span>
              </div>
            </div>

            <div class="col-span-full">
              <label for="judulKonten" class="block text-sm font-medium leading-6 text-gray-900"
                >Judul Konten</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="judulKonten"
                  id="judulKonten"
                  autocomplete="judulKonten"
                  v-model="judulKonten"
                  @blur="validateField('judulKonten')"
                  :class="
                    errors.judulKonten
                      ? 'ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  "
                  class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
              <div
                v-if="errors.judulKonten"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                  ></path>
                </svg>
                Judul Konten tidak boleh kosong.
              </div>
            </div>

            <div class="sm:col-span-full">
              <label for="permohonan" class="block text-sm font-medium leading-6 text-gray-900"
                >Berkas Permohonan</label
              >
              <div class="mt-2">
                <input
                  id="permohonan"
                  name="permohonan"
                  type="file"
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-full">
              <label for="lampiran" class="block text-sm font-medium leading-6 text-gray-900"
                >Berkas Pendukung (Brief Sheet Content)</label
              >
              <div class="mt-2">
                <input
                  id="lampiran"
                  name="lampiran"
                  type="file"
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 dark:text-white"
                />
              </div>
            </div>

            <div class="sm:col-span-full">
              <label for="uraian" class="block text-sm font-medium leading-6 text-gray-900"
                >Content Caption</label
              >
              <div class="mt-2">
                <textarea
                  id="uraian"
                  name="uraian"
                  rows="3"
                  v-model="uraian"
                  @blur="validateField('uraian')"
                  :class="
                    errors.uraian
                      ? 'ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  "
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:py-1.5 px-3 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
              <div
                v-if="errors.uraian"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                  ></path>
                </svg>
                Content Caption tidak boleh kosong.
              </div>
            </div>

            <div class="col-span-full">
              <label for="tanggalUpload" class="block text-sm font-medium leading-6 text-gray-900"
                >Tanggal Konten di Upload</label
              >
              <div class="mt-2">
                <input
                  id="tanggalUpload"
                  type="date"
                  v-model="tanggalUpload"
                  @blur="validateField('tanggalUpload')"
                  :class="
                    errors.tanggalUpload
                      ? 'ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  "
                  class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div
                v-if="errors.tanggalUpload"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                  ></path>
                </svg>
                Tanggal Konten di Upload tidak boleh kosong.
              </div>
            </div>

            <div class="col-span-full">
              <label for="tanggalAcara" class="block text-sm font-medium leading-6 text-gray-900"
                >Tanggal Acara di Upload</label
              >
              <div class="mt-2">
                <input
                  id="tanggalAcara"
                  type="date"
                  v-model="tanggalAcara"
                  @blur="validateField('tanggalAcara')"
                  :class="
                    errors.tanggalAcara
                      ? 'ring-red-500 focus:ring-red-500'
                      : 'ring-gray-300 focus:ring-indigo-600'
                  "
                  class="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <div
                v-if="errors.tanggalAcara"
                class="mt-2 p-2 bg-red-50 border border-red-500 text-red-500 rounded-md flex items-center"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9z"
                  ></path>
                </svg>
                Tanggal Acara di Upload tidak boleh kosong.
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm font-semibold leading-6 text-gray-900 bg-white hover:shadow-lg shadow"
              @click="prevStep"
            >
              Back
            </button>

            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style="background-color: #0c2846"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Success Modal -->
  <transition name="fade">
    <div
      v-if="showSuccessModal"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-2xl text-center">
        <div v-if="!success" class="loading-container mb-4">
          <span class="loading loading-spinner loading-md"></span>
        </div>
        <div v-if="success" class="checkmark-container mb-4">
          <svg
            class="w-12 h-12 text-#0C2846-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke-width="2" fill="transparent"></circle>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h2 v-if="success" class="text-2xl font-semibold mb-4 text-#0C2846-600">
          Selamat Anda Berhasil Submit
        </h2>
        <button
          v-if="success"
          class="mt-4 bg-custom text-white py-2 px-4 rounded"
          @click="showSuccessModal = false"
        >
          OK
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      step: 1, // Inisialisasi step
      jenisPermohonan: '', // Inisialisasi jenisPermohonan
      email: '',
      namaLengkap: '',
      noHp: '',
      kepengurusan: '',
      bidang: '',
      jenisKonten: [],

      judulKonten: '',
      uraian: '',
      tanggalUpload: '',
      tanggalAcara: '',
      // permohonan: '',
      // lampiran: '',
      errors: {
        jenisPermohonan: false,
        email: false,
        namaLengkap: false,
        noHp: false,
        kepengurusan: false,
        bidang: false,
        judulKonten: false,
        uraian: false,
        tanggalUpload: false,
        tanggalAcara: false,
        jenisKonten: false
        // permohonan: false,
        // lampiran: false,
      },

      showSuccessModal: false,
      success: false
    }
  },
  methods: {
    nextStep() {
      // Lakukan validasi untuk setiap bidang
      this.validateField('jenisPermohonan')
      this.validateEmail('email')
      this.validateField('namaLengkap')
      this.validateField('noHp')
      this.validateField('kepengurusan')
      this.validateField('bidang')

      // Jika tidak ada kesalahan, lanjutkan ke langkah berikutnya
      if (Object.values(this.errors).every((error) => !error) && !this.emailError) {
        if (this.jenisPermohonan === 'request bidang') {
          this.step = 2 // Pindah ke langkah data request konten
        } else if (this.jenisPermohonan === 'media partner') {
          this.step = 3 // Pindah ke langkah data media partner
        }
      }
    },
    prevStep() {
      if (this.step === 1) {
        // Kembali ke halaman sebelumnya jika di langkah 1
        window.history.back()
      } else {
        this.step = 1 // Kembali ke langkah sebelumnya jika bukan di langkah 1
      }
    },
    validateField(field) {
      this.errors[field] = !this[field]
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      this.emailError = !emailPattern.test(this.email)
    },
    validateCheckboxGroup() {
      this.jenisKontenError = this.jenisKonten.length === 0 // Set jenisKontenError jika tidak ada yang dipilih
    },
    handleSubmit() {
      this.validateField('judulKonten')
      this.validateField('uraian')
      this.validateField('tanggalUpload')
      this.validateField('tanggalAcara')
      this.validateCheckboxGroup()

      if (Object.values(this.errors).every((error) => !error)) {
        this.showSuccessModal = true
        // setTimeout(() => {
        //   this.success = true;
        // }, 2000); // Simulating a delay before showing the success checkmark (5 seconds)
        // this.resetForm();
        if (
          !this.errors.judulKonten &&
          !this.errors.uraian &&
          !this.errors.tanggalUpload &&
          !this.errors.tanggalAcara &&
          !this.errors.jenisKonten
        ) {
          this.showSuccessModal = true
          setTimeout(() => {
            this.success = true
          }, 2000) // Simulating a delay before showing the success checkmark (5 seconds)
          this.resetForm()
        }
      }
    },

    resetForm() {
      this.step = 1
      this.jenisPermohonan = ''
      this.email = ''
      this.namaLengkap = ''
      this.noHp = ''
      this.kepengurusan = ''
      this.bidang = ''
      this.jenisKonten = ''
      this.judulKonten = ''
      // this.permohonan = '';
      // this.lampiran = '';
      this.uraian = ''
      this.tanggalUpload = ''
      this.tanggalAcara = ''
      this.errors = {
        jenisPermohonan: false,
        email: false,
        namaLengkap: false,
        noHp: false,
        kepengurusan: false,
        bidang: false,
        // permohonanan: false,
        // lampiran: false,
        judulKonten: false,
        uraian: false,
        tanggalUpload: false,
        tanggalAcara: false
      }
    }
  }
}
</script>

<style scoped>
/* Tambahkan styling tambahan jika diperlukan */
.bg-custom {
  background-color: #0c2846;
}
.hover\:bg-custom:hover {
  background-color: #08203b; /* Warna sedikit lebih terang untuk efek hover */
}
.loading-container {
  display: flex;
  justify-content: center;
}
.checkmark-container {
  display: flex;
  justify-content: center;
}
.shadow-2xl {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
}

.breadcrumbs ul {
  display: flex;
  flex-wrap: wrap;
  padding-right: 0;
  list-style: none;
  margin-right: auto; /* Menempatkan breadcrumbs di pinggir kiri */
}

@media (max-width: 768px) {
  .breadcrumbs {
    margin-left: 0;
  }
}
</style>
