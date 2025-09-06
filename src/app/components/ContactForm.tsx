import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Have Questions? Feel Free to Reach Out!
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">Name</label>
            <input
              type="text"
              placeholder="Full name"
              className="mt-1 block w-full rounded-lg border-0 bg-gray-100 p-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Email*
            </label>
            <input
              type="email"
              placeholder="Email"
              className="mt-1 block w-full rounded-lg border-0 bg-gray-100 p-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Business Name
            </label>
            <input
              type="text"
              placeholder="Company name"
              className="mt-1 block w-full rounded-lg border-0 bg-gray-100 p-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Message*
            </label>
            <textarea
              placeholder="Write your opinion"
              rows={4}
              className="mt-1 block w-full rounded-lg border-0 bg-gray-100 p-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-green-600"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-green-800 px-4 py-3 text-white font-medium hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
