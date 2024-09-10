<template>
  <div>
    <ul class="timeline">
      <li>
        <div class="timeline-start timeline-box">1</div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div class="timeline-start timeline-box">2</div>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <hr />
      </li>
    </ul>
  </div>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
      <div v-if="step === 1">
        <!-- Step 1: Data Pribadi -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold">HALO <span class="text-cyan-600">FMKI</span></h1>
          <div class="flex justify-center mt-2 mb-4">
            <div class="h-1 w-16 bg-cyan-600"></div>
            <div class="h-1 w-4 bg-cyan-400"></div>
            <div class="h-1 w-4 bg-cyan-600"></div>
          </div>
          <p class="text-gray-600 text-lg">Forum Mahasiswa Kedinasan Indonesia</p>
        </div>

        <form @submit.prevent="nextStep">
          <div class="space-y-12">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base font-semibold leading-7 text-gray-900">DATA PRIBADI</h2>
              <p class="mt-1 text-sm leading-6 text-gray-600">
                Berisikan data pribadi yang dapat dihubungi dari pemohon konten FMKI Pusat
              </p>

              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="jenisPermohonan"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Jenis Permohonan</label
                  >
                  <div class="mt-2">
                    <select
                      id="jenisPermohonan"
                      name="jenisPermohonan"
                      autocomplete="jenisPermohonan"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>-Select-</option>
                      <option>Request Bidang</option>
                      <option>Media Partner</option>
                    </select>
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                    >Email</label
                  >
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="namaLengkap" class="block text-sm font-medium leading-6 text-gray-900"
                    >Nama Lengkap</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="namaLengkap"
                      id="namaLengkap"
                      autocomplete="namaLengkap"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label for="noHp" class="block text-sm font-medium leading-6 text-gray-900"
                    >No. HP/WhatsApp</label
                  >
                  <div class="mt-2">
                    <div
                      class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
                    >
                      <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm"
                        >+62/</span
                      >
                      <input
                        type="text"
                        name="noHp"
                        id="noHp"
                        autocomplete="noHp"
                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="85XXXXXXXXX"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div class="sm:col-span-4">
                  <label
                    for="kepengurusan"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Kepengurusan</label
                  >
                  <div class="mt-2">
                    <select
                      id="kepengurusan"
                      name="kepengurusan"
                      autocomplete="kepengurusan"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      required
                    >
                      <option>-Select-</option>
                      <option>DPP</option>
                      <option>Demus</option>
                      <option>IKA</option>
                    </select>
                  </div>
                </div>

                <div class="col-span-full">
                  <label for="bidang" class="block text-sm font-medium leading-6 text-gray-900"
                    >Bidang</label
                  >
                  <div class="mt-2">
                    <input
                      type="text"
                      name="bidang"
                      id="bidang"
                      autocomplete="bidang"
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" class="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next
            </button>
          </div>
        </form>
      </div>

      <div v-if="step === 2">
        <!-- Step 2: Data Request Content -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold">HALO <span class="text-cyan-600">FMKI</span></h1>
          <div class="flex justify-center mt-2 mb-4">
            <div class="h-1 w-16 bg-cyan-600"></div>
            <div class="h-1 w-4 bg-cyan-400"></div>
            <div class="h-1 w-4 bg-cyan-600"></div>
          </div>
          <p class="text-gray-600 text-lg">Forum Mahasiswa Kedinasan Indonesia</p>
        </div>
        <h2 class="text-base font-semibold leading-12 text-gray-900">DATA REQUEST CONTENT</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

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
                      id="virtual-background"
                      name="virtual-background"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      for="virtual-background"
                      class="text-sm font-medium leading-6 text-gray-900"
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
                      id="thumbnail-video"
                      name="thumbnail-video"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label for="thumbnail-video" class="text-sm font-medium leading-6 text-gray-900"
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
                    <label for="reels" class="text-sm font-medium leading-6 text-gray-900"
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
                    <label for="sertifikat" class="text-sm font-medium leading-6 text-gray-900"
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
                    <label for="bumper-video" class="text-sm font-medium leading-6 text-gray-900"
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
                    <label for="igtv" class="text-sm font-medium leading-6 text-gray-900"
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
                    <label for="twibbon" class="text-sm font-medium leading-6 text-gray-900"
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
                    <label for="artikel-website" class="text-sm font-medium leading-6 text-gray-900"
                      >Artikel Website</label
                    >
                  </div>
                </div>
              </fieldset>
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
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div class="sm:col-span-full">
              <label for="lampiran" class="block text-sm font-medium leading-6 text-gray-900"
                >Berkas Pendukung (Brief Sheet Content) *</label
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
              <label for="uraian" class="block text-sm font-medium leading-6 text-gray-900"
                >Content Caption *</label
              >
              <div class="mt-2">
                <textarea
                  id="uraian"
                  name="uraian"
                  rows="3"
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div class="col-span-full">
              <label for="date-input" class="block text-sm font-medium leading-6 text-gray-900"
                >Tanggal Konten di Upload</label
              >
              <div class="mt-2">
                <input
                  id="date-input"
                  type="date"
                  v-model="selectedDate"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <p v-if="selectedDate" class="mt-2 text-sm text-gray-500">
                Selected date: {{ selectedDate }}
              </p>
            </div>

            <div class="col-span-full">
              <label for="date-input" class="block text-sm font-medium leading-6 text-gray-900"
                >Tanggal Acara di Upload</label
              >
              <div class="mt-2">
                <input
                  id="date-input"
                  type="date"
                  v-model="selectedDate"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <p v-if="selectedDate" class="mt-2 text-sm text-gray-500">
                Selected date: {{ selectedDate }}
              </p>
            </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              class="text-sm font-semibold leading-6 text-gray-900"
              @click="prevStep"
            >
              Back
            </button>
            <button
              type="submit"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="step === 3">
      <!-- Step 2: Data Media Partner -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold">HALO <span class="text-cyan-600">FMKI</span></h1>
        <div class="flex justify-center mt-2 mb-4">
          <div class="h-1 w-16 bg-cyan-600"></div>
          <div class="h-1 w-4 bg-cyan-400"></div>
          <div class="h-1 w-4 bg-cyan-600"></div>
        </div>
        <p class="text-gray-600 text-lg">Forum Mahasiswa Kedinasan Indonesia</p>
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
                  <label for="igtv" class="text-sm font-medium leading-6 text-gray-900">IGTV</label>
                </div>
              </div>
            </fieldset>
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
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div class="sm:col-span-full">
            <label for="permohonan" class="block text-sm font-medium leading-6 text-gray-900"
              >Berkas Permohonan*</label
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
              >Berkas Pendukung (Brief Sheet Content) *</label
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
            <label for="uraian" class="block text-sm font-medium leading-6 text-gray-900"
              >Content Caption *</label
            >
            <div class="mt-2">
              <textarea
                id="uraian"
                name="uraian"
                rows="3"
                class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

          <div class="col-span-full">
            <label for="date-input" class="block text-sm font-medium leading-6 text-gray-900"
              >Tanggal Konten di Upload</label
            >
            <div class="mt-2">
              <input
                id="date-input"
                type="date"
                v-model="selectedDate"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
            <p v-if="selectedDate" class="mt-2 text-sm text-gray-500">
              Selected date: {{ selectedDate }}
            </p>
          </div>

          <div class="col-span-full">
            <label for="date-input" class="block text-sm font-medium leading-6 text-gray-900"
              >Tanggal Acara di Upload</label
            >
            <div class="mt-2">
              <input
                id="date-input"
                type="date"
                v-model="selectedDate"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
            <p v-if="selectedDate" class="mt-2 text-sm text-gray-500">
              Selected date: {{ selectedDate }}
            </p>
          </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            class="text-sm font-semibold leading-6 text-gray-900"
            @click="prevStep"
          >
            Back
          </button>
          <button
            type="submit"
            class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1
    }
  },
  methods: {
    nextStep() {
      this.step = 2
    },
    prevStep() {
      this.step = 1
    },
    handleSubmit() {
      // Handle form submission logic
      alert('Form submitted!')
    }
  }
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
