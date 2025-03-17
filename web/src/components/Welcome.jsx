import React from "react";

const Welcome = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-green-600 text-white py-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold">CureMind</h1>
          {/* <h1 className="text-4xl font-bold">MediCare Insights</h1> */}
          <p className="mt-2 text-xl">
            Your Personal Disease Detection Assistant
          </p>
        </div>
      </header>

      <main className="flex-1 flex justify-center items-center">
        <div className="text-center max-w-lg mx-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Welcome to the Disease Detection System
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We provide an easy way to check your health and diagnose potential
            diseases based on your symptoms.
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => (window.location.href = "/home")}
              className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 hover:bg-green-700"
            >
              Start Diagnosis
            </button>
            <button
              onClick={() => (window.location.href = "/about")}
              className="bg-gray-300 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold transition duration-300 hover:bg-gray-400"
            >
              Learn More
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 CureMind | All rights reserved</p>
      </footer>
    </div>
  );
};

export default Welcome;
