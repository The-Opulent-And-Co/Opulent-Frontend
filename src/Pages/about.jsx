function About() {
  return (
    <>
      <header class="w-full bg-[#EDDFC8] shadow-md">
        <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div class="flex items-center space-x-2">
            <img
              src="/DOC-20250418-WA0111..png"
              alt="Logo"
              class="h-10 w-auto"
            />
          </div>

          <div class="flex items-center space-x-6">
            <div class="relative">
              <input
                type="text"
                placeholder="Search..."
                class="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
                  />
                </svg>
              </div>
            </div>

            <button class="text-gray-600 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 10c0 6-9 11-9 11S3 16 3 10a9 9 0 1118 0z"
                />
              </svg>
            </button>

            <button class="relative text-gray-600 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9v9"
                />
              </svg>

              <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <div>
        <p className=" text-center items-center justify-center text-5xl flex flex-col">
          Hello Its About Us Page
        </p>
        <p className=" text-center items-center justify-center text-5xl flex flex-col">
          When ever you push the code before this every time give a pull all
          code otherwise we got issues{" "}
        </p>
      </div>
    </>
  );
}

export default About;
