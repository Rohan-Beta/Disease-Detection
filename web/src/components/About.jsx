import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen w-screen">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* What is CureMind */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">What is CureMind</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            CureMind is an innovative healthcare management system designed to assist
            users in identifying potential diseases based on their reported symptoms.
            Our platform goes beyond simple disease prediction by offering
            comprehensive recommendations, including medication suggestions, exercise
            regimens, dietary guidelines, and detailed disease information.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
            In addition to symptom-based disease predictions, CureMind connects users
            with specialized doctors tailored to their predicted conditions, ensuring
            that individuals receive the most appropriate medical consultation. With our
            goal to empower individuals through accurate, data-driven insights, we are
            dedicated to enhancing health and well-being.
          </p>
        </section>

        {/* Privacy Policies */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Privacy Policies</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At CureMind, we take the privacy and security of our users and healthcare
            professionals very seriously. We are committed to safeguarding your data and
            ensuring confidentiality in every aspect of our operations.
          </p>

          {/* User Data Protection */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">User Data Protection</h3>
            <ul className="list-disc pl-5 mt-4 text-gray-700">
              <li>No personal data is stored, tracked, or shared.</li>
              <li>All symptom inputs and disease predictions occur in real-time, and no records are retained after the session.</li>
              <li>We operate under a strict no-data-storage policy to ensure anonymity.</li>
            </ul>
          </div>

          {/* Doctor Information Confidentiality */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Doctor Information Confidentiality</h3>
            <p className="mt-4 text-gray-700">
              We respect the privacy of healthcare professionals and do not share their personal contact details.
              Users are encouraged to reach out to doctors through official healthcare directories or hospital networks.
            </p>
          </div>

          {/* Commitment to Privacy and Security */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Commitment to Privacy and Security</h3>
            <p className="mt-4 text-gray-700">
              CureMind operates without the need for user registration, ensuring no personally identifiable
              information (PII) is collected. We adhere to the highest data security standards to ensure confidentiality.
            </p>
          </div>
        </section>

        {/* Input Guidelines */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Input Guidelines and Compliance</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            To ensure accurate predictions and reliable health recommendations, users are required to follow these guidelines:
          </p>
          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li>Provide accurate and detailed symptom descriptions.</li>
            <li>Use standard medical terminology to avoid incorrect analysis.</li>
            <li>Understand that CureMind is not a substitute for professional medical advice.</li>
          </ul>
        </section>

        {/* Vision and Mission */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-indigo-600 mb-4">Vision and Mission</h2>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="mt-4 text-gray-700">
              At CureMind, we envision a future where healthcare is more accessible, efficient, and proactive.
              We aim to revolutionize healthcare by integrating AI and data-driven solutions to provide:
            </p>
            <ul className="list-disc pl-5 mt-4 text-gray-700">
              <li>Early disease detection.</li>
              <li>Informed decision-making for better health choices.</li>
              <li>Proactive health management with tailored recommendations.</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="mt-4 text-gray-700">
              Our mission is to use cutting-edge technology to transform healthcare into a more accessible and personalized
              experience. We are committed to:
            </p>
            <ul className="list-disc pl-5 mt-4 text-gray-700">
              <li>Delivering accurate and reliable healthcare insights.</li>
              <li>Empowering individuals with actionable information on health management.</li>
              <li>Facilitating access to specialized healthcare based on predicted conditions.</li>
              <li>Maintaining data privacy and security with a strict no data storage policy.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
