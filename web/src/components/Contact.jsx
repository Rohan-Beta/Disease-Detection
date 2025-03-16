import React from "react";

const contacts = [
  {
    name: "Satadru Naskar",
    email: "john.doe@example.com",
    linkedin: "https://www.linkedin.com/in/johndoe",
  },
  {
    name: "Rohit Raha",
    email: "rohitraha952@gmail.com",
    linkedin: "https://www.linkedin.com/in/rohitraha/",
  },
  {
    name: "Parthib Mondal",
    email: "mark.johnson@example.com",
    linkedin: "https://www.linkedin.com/in/markjohnson",
  },
  {
    name: "Promit Paul",
    email: "emily.davis@example.com",
    linkedin: "https://www.linkedin.com/in/emilydavis",
  },
];

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Contact Information
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {contacts.map((contact, index) => (
          <div
            key={contact.name}
            className="bg-gray-50 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {contact.name}
            </h3>

            <p className="text-gray-600 mt-2">
              Email:{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-blue-500 hover:underline"
              >
                {contact.email}
              </a>
            </p>

            <p className="text-gray-600 mt-2">
              LinkedIn:{" "}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {contact.name}'s LinkedIn
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
