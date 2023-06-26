import { contactImg } from "../../Images/Images";

const Contact = () => {
  return (
    <div className="">
      <h1 className="md:text-center mb-6 text-3xl font-bold underline p-3">
        Contact <span className="text-[#F65900] underline">Us</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-5 md:p-10">
        <div className="max-w-md mx-auto  rounded px-8  pb-8">
          <h4 className="font-bold text-xl text-[#F65900]">GET IN TOUCH</h4>
          <p className="font-semibold ">
            We&apos;d Love to Hear From You, Lets Get In Touch!
          </p>
          <div>
            <div className="py-6">
              <form className="">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name <span className="">*</span>
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-[#F65900] focus:outline-[#da4d01] focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email <span className="">*</span>
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-[#F65900] focus:outline-[#da4d01] focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="comment"
                  >
                    Comment <span className="">*</span>
                  </label>
                  <textarea
                    className="appearance-none border border-[#F65900] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-[#da4d01] focus:shadow-outline"
                    id="comment"
                    rows="4"
                    required
                    placeholder="Enter your comment"
                  ></textarea>
                </div>

                <div className="flex items-center justify-center">
                  <button className=" font-semibold text-white bg-[#F65900] text-center  rounded  hover:bg-white hover:text-[#F17228] border hover:border-[#F65900] duration-300 py-2 px-8  focus:shadow-outline">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img
          className="rounded-xl mx-auto "
          src={contactImg}
          alt="contact.jpg"
        />
      </div>
    </div>
  );
};

export default Contact;
