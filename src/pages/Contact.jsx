
function Contact() {
  return (
    <div className="max-w-[90%] lg:max-w-3xl mx-auto my-10 font-jost">
      <form action="" className="w-full shadow-md p-4">
        <h1 className="text-center text-3xl font-bold">Contact Us</h1>

        <div className="mb-3">
          <label>
            Name <span className="text-red-500">*</span>{" "}
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label>
            Phone <span className="text-red-500">*</span>{" "}
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out"
            placeholder="Enter your phone"
          />
        </div>

        <div className="mb-3">
          <label>
            Message <span className="text-red-500">*</span>{" "}
          </label>
          <textarea
            type="text"
            className="w-full p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition-all ease-in-out"
            placeholder="Enter your phone"
          ></textarea>
        </div>

       <div className="flex justify-end">
            <button type="submit" className="bg-primary text-white px-8 py-2 ">Submit</button>
       </div>
      </form>
    </div>
  );
}

export default Contact;
