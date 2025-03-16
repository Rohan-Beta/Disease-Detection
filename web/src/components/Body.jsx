import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const Body = () => {
  // for user input in the form

  const [inputsymptoms, setInputsymptoms] = useState("");

  // for datasets

  const [prediction, setPrediction] = useState(null);

  const [desc, setDesc] = useState(null);

  const [precautions, setPrecautions] = useState(null);

  const [medications, setMedications] = useState(null);

  const [diet, setDiet] = useState(null);

  const [workout, setWorkout] = useState(null);

  const [doctor, setDoctor] = useState(null);

  const [relatedSymptoms, setRelatedSymptoms] = useState(null);

  // for dialog box

  const [showDialog, setShowDialog] = useState(false);
  const [showDialog1, setShowDialog1] = useState(false);
  const [showDialog2, setShowDialog2] = useState(false);
  const [showDialog3, setShowDialog3] = useState(false);
  const [showDialog4, setShowDialog4] = useState(false);
  const [showDialog5, setShowDialog5] = useState(false);
  const [showDialog6, setShowDialog6] = useState(false);
  const [showDialog7, setShowDialog7] = useState(false);

  // dialog box controller

  // disease
  const handleOpenDialog = () => {
    setShowDialog(true);
  };
  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  // description
  const handleOpenDialog1 = () => {
    setShowDialog1(true);
  };
  const handleCloseDialog1 = () => {
    setShowDialog1(false);
  };

  // precaution
  const handleOpenDialog2 = () => {
    setShowDialog2(true);
  };
  const handleCloseDialog2 = () => {
    setShowDialog2(false);
  };

  // medications
  const handleOpenDialog3 = () => {
    setShowDialog3(true);
  };
  const handleCloseDialog3 = () => {
    setShowDialog3(false);
  };

  // workout
  const handleOpenDialog4 = () => {
    setShowDialog4(true);
  };
  const handleCloseDialog4 = () => {
    setShowDialog4(false);
  };

  // diet
  const handleOpenDialog5 = () => {
    setShowDialog5(true);
  };
  const handleCloseDialog5 = () => {
    setShowDialog5(false);
  };

  // doctor
  const handleOpenDialog6 = () => {
    setShowDialog6(true);
  };
  const handleCloseDialog6 = () => {
    setShowDialog6(false);
  };

  // related symptoms
  const handleOpenDialog7 = () => {
    setShowDialog7(true);
  };
  const handleCloseDialog7 = () => {
    setShowDialog7(false);
  };

  // to connect server side

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputsymptoms) {
      alert("Please enter symptoms!");
      return;
    }

    try {
      // send post req to the server

      const res = await fetch(
        "https://expressserver-5ean.onrender.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputsymptoms }),
        }
      );

      if (res.status === 500) {
        alert("Looks Like something went wrong, please try again properly");
      }

      // handle the res from server

      const data = await res.json();

      // console.log(data.predicted_disease)

      setPrediction(data.predicted_disease);
      setDesc(data.description);

      setPrecautions(data.precautions);

      setMedications(data.medications);
      setWorkout(data.workout);
      setDiet(data.diet);

      setDoctor(data.doctor);
      setRelatedSymptoms(data.symptoms);
    } catch (error) {
      console.error("Error making prediction:", error);
    }
  };

  const handleChange = (e) => {
    setInputsymptoms(e.target.value);
  };
  return (
    <>
      <main>
        <div className="flex my-10">
          <div className="bg-gray-800 text-white w-screen md:mx-32 mx-16 h-72 rounded-lg p-4">
            <form onSubmit={handleSubmit} action="/predict" method="post">
              <div className="mx-10">
                <label htmlFor="inputsymptoms">Enter Symptoms:</label>
                <input
                  className="form-control rounded-md w-full p-2 text-black my-4"
                  type="text"
                  name="inputsymptoms"
                  value={inputsymptoms}
                  placeholder="type symptoms such as itching, sleeping, aching, etc"
                  onChange={handleChange}
                />
              </div>

              {/* <div>
              <button className="bg-blue-600 p-2 rounded-full my-4">Start Speech Recognition</button>
              </div> */}

              <div className="flex justify-center">
                <button
                  className="bg-blue-600 p-3 rounded-full my-4 
              w-4/12 md:w-3/12 hover:bg-blue-500 flex justify-center items-center gap-2"
                >
                  Predict
                </button>
              </div>
            </form>
          </div>
        </div>

        {prediction && (
          <div className="flex justify-evenly mx-4 text-center overflow-auto whitespace-nowrap gap-4">
            {/* disease */}

            <div>
              <button
                onClick={handleOpenDialog}
                className="bg-orange-500 p-2 px-4 rounded-lg font-bold
              hover:bg-orange-400 flex items-center gap-1"
              >
                Disease
                <lord-icon
                  src="https://cdn.lordicon.com/nieymnen.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#f9c9c0"
                ></lord-icon>
              </button>

              {showDialog && (
                <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
                  <div
                    className="bg-white p-6 rounded-lg w-[60%] 
                md:w-1/3 h-[23%] mt-40"
                  >
                    <h2 className="font-bold text-lg mb-4">Disease</h2>
                    <p className="overflow-auto md:overflow-hidden">
                      {prediction}
                    </p>
                    <button
                      className="bg-orange-500 text-white p-2 px-4 mt-4 rounded-full hover:bg-orange-400"
                      onClick={handleCloseDialog}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* description */}

            <div>
              <button
                onClick={handleOpenDialog1}
                className="bg-blue-500 p-2 rounded-lg font-bold 
            hover:bg-blue-400 flex items-center gap-1"
              >
                Description
                <lord-icon
                  src="https://cdn.lordicon.com/hnqamtrw.json"
                  trigger="hover"
                  colors="primary:#ebe6ef,secondary:#000000"
                ></lord-icon>
              </button>

              {showDialog1 && (
                <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
                  <div
                    className="bg-white p-6 rounded-lg w-[60%] 
                md:w-1/2 h-[23%] mt-40"
                  >
                    <h2 className="font-bold text-lg mb-4">Description</h2>
                    <p className="overflow-auto">{desc}</p>
                    <button
                      className="bg-blue-500 text-white p-2 px-4 mt-4 rounded-full hover:bg-blue-400"
                      onClick={handleCloseDialog1}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}

              {/* {desc && <div>{desc}</div>} */}
            </div>

            {/* precaution */}

            <div>
              <button
                onClick={handleOpenDialog2}
                className="bg-pink-500 p-2 rounded-lg font-bold
            hover:bg-pink-400 flex items-center gap-1"
              >
                Precaution
                <lord-icon
                  src="https://cdn.lordicon.com/trgtjfff.json"
                  trigger="hover"
                ></lord-icon>
              </button>

              {showDialog2 && (
                <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
                  <div
                    className="bg-white p-6 rounded-lg w-[60%]
                md:w-1/4 h-[32%]  mt-32"
                  >
                    <h2 className="font-bold text-lg mb-4">Precaution</h2>
                    <p className="overflow-auto">
                      {precautions.map((item, index) => (
                        <span className="flex" key={index}>
                          {index + 1}: {item}
                        </span>
                      ))}
                    </p>
                    <button
                      className="bg-pink-500 text-white p-2 px-4 mt-4 rounded-full hover:bg-pink-400"
                      onClick={handleCloseDialog2}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* medications */}

            <div>
              <button
                onClick={handleOpenDialog3}
                className="bg-red-500 p-2 rounded-lg font-bold
            hover:bg-red-400 flex items-center gap-1"
              >
                Medications
                <lord-icon
                  src="https://cdn.lordicon.com/thvvrdbi.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#3a3347,tertiary:#ebe6ef,quaternary:#646e78,quinary:#4bb3fd,senary:#ffc738"
                ></lord-icon>
              </button>

              {showDialog3 && (
                <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
                  <div
                    className="bg-white p-6 rounded-lg md:w-1/2 
                w-[60%] h-[23%] mt-40"
                  >
                    <h2 className="font-bold text-lg mb-4">Medication</h2>
                    <p className="overflow-auto">
                      {medications.map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </p>

                    <button
                      className="bg-red-500 text-white p-2 px-4 mt-4 rounded-full hover:bg-red-400"
                      onClick={handleCloseDialog3}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* workout */}

            <div>
              <button
                onClick={handleOpenDialog4}
                className="bg-green-500 p-2 px-4 rounded-lg font-bold
            hover:bg-green-400 flex items-center gap-1"
              >
                Workout
                <lord-icon
                  src="https://cdn.lordicon.com/spjdafms.json"
                  trigger="hover"
                ></lord-icon>
              </button>

              {showDialog4 && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <div
                    className="bg-white p-6 rounded-lg w-[40%] 
                md:w-1/4"
                  >
                    <h2 className="font-bold text-lg mb-4">Workout</h2>
                    <p className="overflow-auto">
                      {workout.map((item, index) => (
                        <span className="flex" key={index}>
                          {index + 1}: {item}
                        </span>
                      ))}
                    </p>
                    <button
                      className="bg-green-500 text-white p-2 px-4 mt-4 rounded-full hover:bg-green-400"
                      onClick={handleCloseDialog4}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* diets */}

            <div>
              <button
                onClick={handleOpenDialog5}
                className="bg-yellow-500 p-2 px-7 rounded-lg font-bold
            hover:bg-yellow-400 flex items-center gap-1"
              >
                Diets
                <lord-icon
                  src="https://cdn.lordicon.com/kfxkchht.json"
                  trigger="hover"
                ></lord-icon>
              </button>

              {showDialog5 && (
                <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
                  <div
                    className="bg-white p-6 rounded-lg w-[60%] 
                md:w-1/2 h-[23%] mt-40"
                  >
                    <h2 className="font-bold text-lg mb-4">Diets</h2>
                    <p className="overflow-auto">{diet}</p>
                    <button
                      className="bg-yellow-500 text-white p-2 px-4 mt-4 rounded-full hover:bg-yellow-400"
                      onClick={handleCloseDialog5}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* doctor */}

            <div>
              <button
                onClick={handleOpenDialog6}
                className="bg-orange-500 p-2 px-4 rounded-lg font-bold
            hover:bg-orange-400 flex items-center gap-1"
              >
                Doctor
                <lord-icon
                  src="https://cdn.lordicon.com/hjjjqufa.json"
                  trigger="hover"
                ></lord-icon>
              </button>

              {showDialog6 && (
                <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
                  <div
                    className="bg-white p-6 rounded-lg w-[60%] 
                md:w-1/4 h-[34%] mt-40"
                  >
                    <h2 className="font-bold text-lg mb-4">Doctor</h2>
                    <p className="overflow-auto">
                      <span className="flex">Gender: {doctor[0]}</span>
                      <span className="flex">Age: {doctor[1]}</span>
                      <span className="flex">Disease: {doctor[2]}</span>
                      <span className="flex">DoctorID: {doctor[3]}</span>
                      <span className="flex">Specialization: {doctor[4]}</span>
                    </p>
                    <button
                      className="bg-yellow-500 text-white p-2 px-4 mt-4 rounded-full hover:bg-yellow-400"
                      onClick={handleCloseDialog6}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* related symptoms */}

            <div>
              <button
                onClick={handleOpenDialog7}
                className="bg-pink-500 p-2 rounded-lg font-bold
            hover:bg-pink-400 flex items-center gap-1"
              >
                Symptoms
                <lord-icon
                  src="https://cdn.lordicon.com/owwibima.json"
                  trigger="hover"
                ></lord-icon>
              </button>

              {showDialog7 && (
                <div className="fixed inset-0 flex justify-center bg-black bg-opacity-50">
                  <div
                    className="bg-white p-6 rounded-lg w-[60%]
                md:w-1/4 h-[27%] mt-40"
                  >
                    <h2 className="font-bold text-lg mb-4">Related Symptoms</h2>
                    <p className="overflow-auto">
                      <span className="flex">1: {relatedSymptoms[0]}</span>
                      <span className="flex">2: {relatedSymptoms[1]}</span>
                      <span className="flex">3: {relatedSymptoms[2]}</span>
                    </p>
                    <button
                      className="bg-pink-500 text-white p-2 px-4 mt-4 rounded-full hover:bg-pink-400"
                      onClick={handleCloseDialog7}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* {!prediction && (
          <div className="flex justify-center">
            No data available
          </div>
        )} */}
      </main>
    </>
  );
};
