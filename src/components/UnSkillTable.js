import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store";
import LoadingSpinner from "../components/LoadingSpinner";
import Nodata from "../components/empty";
import axios from "axios";

function UnSkillTable() {
  const { state, dispatch } = useContext(Store);
  const { start, unSkills: users, loading } = state;

  useEffect(() => {
    async function getUnSkillArtisanData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        let startingPoint = start > -1 ? start : 0;
        const { data } = await axios.get(
          `https://wema.creditclan.com/api/v3/wesabi/unskilled/${startingPoint}`
        );
        dispatch({ type: "GET_UNSKILL", payload: data.data });
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }
    }
    getUnSkillArtisanData();
  }, [start, dispatch]);

  const next_function = async () => {
    dispatch({ type: "INCREASE_START", payload: start + 20 });
  };

  const pre_function = async () => {
    dispatch({ type: "REDUCE_START", payload: start - 20 });
  };
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : !users.length && !loading ? (
        <Nodata />
      ) : (
        <div>
          <div className="flex justify-end  mb-2 pr-5">
            <button
              onClick={pre_function}
              className="border text-blue-600 font-bold py-2 px-2 mr-3"
            >
              Previous
            </button>
            <button
              onClick={next_function}
              className="border text-blue-600 font-bold  py-2 px-2"
            >
              Next
            </button>
          </div>

          <table className="items-center w-full bg-transparent border-separate border border-slate-400">
            <thead>
              <tr>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  S/N
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  service-type
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  description
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  date
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  whitespace-nowrap font-light text-left border border-slate-300">
                  N0 of people
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  request Status
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  link
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  title
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  whitespace-nowrap font-light text-left border border-slate-300">
                  Name
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  Email
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  whitespace-nowrap font-light text-left border border-slate-300">
                  phone
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  Action
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  whitespace-nowrap font-light text-left border border-slate-300">
                  agent_name
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  whitespace-nowrap font-light text-left border border-slate-300">
                  agent_gender
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  whitespace-nowrap font-light text-left border border-slate-300">
                  agent_location
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  whitespace-nowrap font-light text-left border border-slate-300">
                  agent_Dob
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, index) => (
                  <tr key={index}>
                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {index + 1}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.service_type ? user.service_type : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-normal px-2 py-4 text-left border border-slate-300">
                      {user?.service_description
                        ? user.service_description
                        : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.service_date_time ? user.service_date_time : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.number_of_people ? user.number_of_people : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.request_status ? user.request_status : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-normal px-2 py-4 text-left border border-slate-300">
                      {user?.link ? user.link : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.job_title ? user.job_title : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.name ? user.name : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.email ? user.email : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.phone ? user.phone : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      <Link to={`/assign/${user.id}`} aria-current="page">
                        <button
                          className="btn text-sm text-sm text-gray-500"
                          style={{
                            backgroundColor: "green",
                            padding: "5px",
                            color: "white",
                            borderRadius: "8px",
                          }}
                        >
                          assign
                        </button>
                      </Link>
                      ;
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.agent_name ? user.agent_name : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.agent_gender ? user.agent_gender : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.agent_location ? user.agent_location : "-"}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {user?.agent_dob ? user.agent_dob : "-"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UnSkillTable;
