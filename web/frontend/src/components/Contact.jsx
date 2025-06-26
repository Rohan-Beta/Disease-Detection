import React from "react";

const contacts = [
  {
    name: "Satadru Naskar",
    email: "satadru2003@gmail.com",
    linkedin: "http://www.linkedin.com/in/satadru-naskar-7b4636299",
    github: "https://github.com/Satadru-1234",
  },
  {
    name: "Rohit Raha",
    email: "rohitraha952@gmail.com",
    linkedin: "https://www.linkedin.com/in/rohitraha/",
    github: "https://github.com/Rohan-Beta",
  },
  {
    name: "Parthib Mondal",
    email: "parthibmondal19@gmail.com",
    linkedin: "http://linkedin.com/in/parthib-mondal-162354246/",
    github: "https://github.com/PARTHIB-MONDAL3",
  },
  {
    name: "Promit Paul",
    email: "promitpaul2003@gmail.com",
    linkedin: "http://www.linkedin.com/in/promit-paul-9a621a23b",
    github: "https://github.com/Promit11",
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

            <p className="text-gray-600 mt-2">
              Github:{" "}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {contact.name}'s Github
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
