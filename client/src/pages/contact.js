import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    issue: "order-issue",
    detail: "return/exchange",
    language: "english",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.email || !formData.message) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/nodemailer/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred while sending the message.");
    } finally {
    }
  };

  const handleCall = () => {
    window.location.href = "tel:+8171280446";
  };

  return (
    <div className="bg-white w-full mt-4">
      <div className="w-11/12 sm:w-10/12 mx-auto">
        <h2 className="text-gray-700 text-2xl sm:text-3xl font-bold mb-4">
          Contact Us
        </h2>

        <hr className="bg-gray-300 my-4" />

        <h4 className="text-black text-lg mb-2">Need Help?</h4>

        <p className="text-gray-700 mb-4">
          We have live chat available, look for the chat icon in the lower right
          hand corner of this page. If it isn’t there, then give us a call at{" "}
          <strong className="underline cursor-pointer" onClick={handleCall}>
            79823435646745
          </strong>
          .
        </p>

        <p className="text-gray-700 mb-4">
          <span className="font-semibold">7:00-6:00 MST Monday-Friday</span>
          <br />
          <span className="font-semibold">9:00-4:00 MST Saturday</span>
          <br />
          <span className="font-semibold">Closed Sunday</span>
        </p>

        <p className="text-gray-700 mb-4">
          Contact us outside these hours? Fill out our support form below, and
          we'll be in touch shortly.
        </p>

        <p className="text-gray-700 mb-4">
          <span className="font-semibold">EcoMart Store, Pvt Ltd.</span>
          <br />
          15130 Sec 22
          <br />
          Noida, UP 201301
          <br />
          India
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a href="#issue-select">
            <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-red-600">
              Support Form
            </button>
          </a>

          <button
            className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-red-600"
            onClick={handleCall}
          >
            Call Us
          </button>
        </div>

        <hr className="bg-gray-300 my-4" />

        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-4">Support Form</h4>

          <p className="text-gray-700 mb-4">
            Need a quicker answer? Look for our chat icon on the right hand side
            of this page.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="w-full mb-4">
              <label
                htmlFor="issue"
                className="text-black text-base font-medium"
              >
                Issue *
              </label>
              <select
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              >
                <option value="order-issue">Order Issue</option>
                <option value="payment-issue">Payment Issue</option>
                <option value="product-issue">Product Issue</option>
                <option value="technical-issue">Technical Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="w-full mb-4">
              <label
                htmlFor="detail"
                className="text-black text-base font-medium"
              >
                Detail *
              </label>
              <select
                id="detail"
                name="detail"
                value={formData.detail}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              >
                <option value="return/exchange">Return/Exchange</option>
                <option value="cancellation">Cancellation</option>
                <option value="refund">Refund</option>
                <option value="delivery-issue">Delivery Issue</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="w-full mb-4">
              <label
                htmlFor="language"
                className="text-black text-base font-medium"
              >
                Language *
              </label>
              <select
                id="language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
              >
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
              </select>
            </div>

            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="text-black text-base font-medium"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                placeholder="Enter Your Email *"
              />
            </div>

            <div className="w-full mb-4">
              <label
                htmlFor="message"
                className="text-black text-base font-medium"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                rows={6}
                placeholder="Enter Your Message *"
              />
            </div>

            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
