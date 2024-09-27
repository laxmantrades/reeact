import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Contact Us Section */}
      <div className="bg-white py-16 px-6 w-full max-w-4xl rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center leading-tight mb-8">
          Get In Touch With Us
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          We would love to hear from you! Please fill out the form below, and we'll get back to you shortly.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-bold mb-2">First Name</label>
              <input
                type="text"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 text-sm font-bold mb-2">Last Name</label>
              <input
                type="text"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
