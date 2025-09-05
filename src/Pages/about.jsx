import MyMap from "./MyMap";

function About() {
  return (
    <>
      <header className="w-full bg-[#EDDFC8] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2">
            <img
              src="/DOC-20250418-WA0111..png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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

            <button className="text-gray-600 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

            <button className="relative text-gray-600 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="w-full bg-[#EDDFC8] shadow-md">
        <MyMap></MyMap>
        <div className="min-h-screen bg-[#f5e6c9] flex items-center justify-center px-6 py-10">
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#f5e6c9]">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-6">Contact Details</h2>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-500 p-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-500 p-2 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number :"
                  className="border border-gray-500 p-2 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email :"
                  className="border border-gray-500 p-2 focus:outline-none"
                />
                <select className="border border-gray-500 p-2 focus:outline-none">
                  <option>Reason :</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
                <textarea
                  placeholder="Your Comment"
                  rows="5"
                  className="border border-gray-500 p-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white py-2 hover:bg-gray-800 transition"
                >
                  Submit Details
                </button>
              </form>
            </div>

            {/* About Us Section */}
            <div>
              <h2 className="text-3xl font-light mb-4">About Us</h2>

              <h3 className="font-semibold text-large mb-3">Address</h3>
              <p className="mb-4 text-large">
                Bata India Limited <br />
                Milestone Experion Centre, 2nd Floor <br />
                Sector 15, Part - II <br />
                Gurgaon, Haryana 122001
              </p>

              <h3 className="font-semibold mb-3">Customer Service Helpline:</h3>
              <p className="mb-4">
                72 899 00000 <br />
                Monday to Sunday from <br />
                10.00 AM to 8.00 PM
              </p>

              <h3 className="font-semibold mb-3">FAQ</h3>
              <p className="mb-4">
                See our{" "}
                <a href="#" className="text-blue-600 underline">
                  FAQ
                </a>
              </p>

              <p>
                Looking for your last shopping invoice or club points, offers
                and lot more: say 'Hi' on our Whatsapp:{" "}
                <span className="font-semibold">7042667003</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
