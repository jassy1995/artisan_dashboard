import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store";
import LoadingSpinner from "../components/LoadingSpinner";
import Nodata from "../components/empty";

function UnSkillTable() {
  const { state, dispatch } = useContext(Store);
  const { start, unSkills: users, loading } = state;

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
          <ul className="p-6 divide-slate-200">
            {users.map((user, index) => (
              <li
                key={index}
                className="flex  pl-2 py- first:pt-0 last:pb-0  justify-between border border-4 border-indigo-500/50 mb-2 pr-3"
              >
                <div>
                  <span
                    className="text-slate-500 bg-primary "
                    style={{
                      backgroundColor: "darkgray",
                      color: "white",
                      width: "40px",
                      height: "40px",
                      padding: "2px",
                      // borderRadius: "50%",
                    }}
                  >
                    {index + 1}
                  </span>
                  <div className="font-bold pb-0">Service type</div>
                  <small className="ml-4">
                    {user?.service_type ? user.service_type : "pending"}
                  </small>
                  <div className="font-bold pb-0">Description</div>
                  <small className="ml-4">
                    {user?.service_description
                      ? user.service_description
                      : "pending"}
                  </small>
                  <div className="font-bold pb-0">Date</div>
                  <small className="ml-4">
                    {user?.service_date_time
                      ? user.service_date_time
                      : "pending"}
                  </small>
                  <div className="font-bold pb-0">No of people</div>
                  <small className="ml-4">
                    {user?.number_of_people ? user.number_of_people : "pending"}
                  </small>
                  <div className="font-bold pb-0">Request status</div>
                  <small className="ml-4">
                    {user?.request_status ? user.request_status : "pending"}
                  </small>
                  <div className="font-bold pb-0">Link</div>
                  <small className="ml-4">
                    {user?.link ? user.link : "pending"}
                  </small>
                  <div className="font-bold pb-0">Title</div>
                  <small className="ml-4">
                    {" "}
                    {user?.job_title ? user.job_title : "pending"}
                  </small>
                  <div className="font-bold pb-0">Name</div>
                  <small className="ml-4">
                    {" "}
                    {user?.name ? user.name : "pending"}
                  </small>
                  <div className="font-bold pb-0">Email</div>
                  <small className="ml-4">
                    {user?.email ? user.email : "pending"}
                  </small>
                  <div className="font-bold pb-0">Phone </div>
                  <small className="ml-4">
                    {" "}
                    {user?.phone ? user.phone : "pending"}
                  </small>
                  <div className="font-bold pb-0">Action</div>
                  <small className="ml-4">
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
                  </small>
                  <div className="font-bold pb-0">Agent name</div>
                  <small className="ml-4">
                    {" "}
                    {user?.agent_name ? user.agent_name : "pending"}
                  </small>

                  <div className="font-bold pb-0">Agent gender</div>
                  <small className="ml-4">
                    {" "}
                    {user?.agent_gender ? user.agent_gender : "pending"}
                  </small>
                  <div className="font-bold pb-0">Agent location</div>
                  <small className="ml-4">
                    {user?.agent_location ? user.agent_location : "pending"}
                  </small>
                  <div className="font-bold pb-0">Agent DOB</div>
                  <small className="ml-4">
                    {" "}
                    {user?.agent_dob ? user.agent_dob : "pending"}
                  </small>
                </div>
              </li>
            ))}
          </ul>
          {/* <ul
            role="list"
            class="list-group list-group-numbered p-6 divide-y divide-slate-200"
          >
            <li class="list-group-item flex justify-between align-items-start  py-4 first:pt-0 last:pb-0">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Subheading</div>
                Content for list item
              </div>
              <span class="badge bg-primary rounded-pill">14</span>
            </li>
          </ul> */}

          {/* <table className="items-center w-full bg-transparent border-separate border border-slate-400">
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
                    <td className="align-middle font-light text-sm whitespace-normal px-2 py-2 text-left border border-slate-300">
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
          </table> */}
        </div>
      )}
    </div>
  );
}

export default UnSkillTable;
