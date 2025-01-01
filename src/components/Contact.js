import React from "react";

const Contact = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <form className="grid grid-cols-1 gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <textarea placeholder="Message" className="p-2 border rounded"></textarea>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
