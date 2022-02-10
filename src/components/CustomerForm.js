import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";
function CustomerForm(props) {
  let [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [date_of_birth, setDateOfBirth] = useState("");
  const [location, setLocation] = useState("");
  let [submitingText, setSubmitingText] = useState("");
  let { id } = useParams();
  let navigate = useNavigate();

  const handleSelectedChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (evt) => {
    setIsLoading(true);
    setSubmitingText("Submitting...");
    evt.preventDefault();
    const data = { id, name, gender, date_of_birth, location };
    axios
      .post("https://wema.creditclan.com/api/v3/wesabi/assign_unskilled", data)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setSubmitingText("Submitted");
          setTimeout(() => {
            setIsLoading(false);
            navigate("/unSkill");
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(data);
  };

  return (
    <>
      <form class="w-full max-w-lg" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full flex justify-center">
            {isLoading ? (
              <h2 className="text-center text-green-500">{submitingText}</h2>
            ) : (
              <h2 className="text-center">FILL IN THESE Form </h2>
            )}
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="appearance-none block  w-full bg-gray-200 text-gray-700 border order-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Gender
            </label>
            <select
              onChange={handleSelectedChange}
              class="appearance-none block  w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
            {/* <input
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              class="appearance-none block  w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="male or  female"
            /> */}
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              DATE OF BIRTH
            </label>
            <input
              value={date_of_birth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              class="appearance-none block  w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id=""
              type="text"
              placeholder="12/3/1990"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Location
            </label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              class="appearance-none block  w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="location"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <input
              type="submit"
              value="Submit"
              class="appearance-none block  w-full  bg-green-200 text-light-700  rounded py-3 px-4 mb-1"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default CustomerForm;
