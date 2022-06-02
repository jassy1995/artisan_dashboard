import React, { useEffect, useContext } from "react";
import { Store } from "../store";
import LoadingSpinner from "../components/LoadingSpinner";
import Nodata from "../components/empty";
import axios from "axios";
function SkillTable() {
  const {
    state: { skills, loading },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    async function getSkillArtisanData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        const { data } = await axios.get(
          "https://wema.creditclan.com/api/v3/wesabi/skilled/0"
        );
        dispatch({ type: "GET_SKILL", payload: data.data });
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }
    }
    getSkillArtisanData();
  }, [dispatch]);

  const tdSize = {
    width: "10px",
    wordWrap: "break-word",
  };

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : !skills.length ? (
        <Nodata />
      ) : (
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                S/N
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                service-type
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                desc
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                date
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                N0 of people
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                request Status
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                link
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                title
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                Name
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                Email
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                phone
              </th>
            </tr>
          </thead>
          <tbody>
            {skills.length > 0 &&
              skills.map((skill, index) => (
                <tr key={index}>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {index + 1}
                  </th>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.service_type}
                  </td>
                  <td
                    className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left word-wrap"
                    style={tdSize}
                  >
                    {skill?.service_description}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.service_date_time}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.number_of_people}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.request_status}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.link}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.job_title}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.name}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.email}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {skill?.phone}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SkillTable;
