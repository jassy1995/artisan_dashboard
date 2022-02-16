import { Link } from "react-router-dom";

function UnSkillTable({ users, pre_function, next_function }) {
  return (
    <div>
      {users.length > 0 ? (
        <>
          <div className="flex justify-space">
            <button
              onClick={pre_function}
              className=" border-solid border-gray-200"
            >
              previous
            </button>
            <button
              onClick={next_function}
              className=" border-solid border-gray-200"
            >
              Next
            </button>
          </div>

          <table className="items-center w-full bg-transparent border-separate border border-slate-400">
            <thead>
              <tr>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm border border-slate-300  font-light text-center">
                  S/N
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm border border-slate-300  font-light text-center">
                  service-type
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  md:border-collapse font-light text-center">
                  desc
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm border border-slate-300  font-light text-center">
                  date
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  border border-slate-300 font-light text-center">
                  N0 of people
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm border border-slate-300  font-light text-center">
                  request Status
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm border border-slate-300  font-light text-center">
                  link
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm border border-slate-300  font-light text-center">
                  title
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  border border-slate-300 font-light text-center">
                  Name
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm border border-slate-300  font-light text-center">
                  Email
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  border border-slate-300 font-light text-center">
                  phone
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm border border-slate-300 font-light text-left">
                  Action
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  border border-slate-300 font-light text-center">
                  agent_name
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  border border-slate-300 font-light text-center">
                  agent_gender
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  border border-slate-300 font-light text-center">
                  agent_location
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm  border border-slate-300 font-light text-center">
                  agent_Dob
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 &&
                users.map((user, index) => (
                  <tr key={index}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300  whitespace-nowrap">
                      {index + 1}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.service_type ? user.service_type : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left border border-slate-300 max-w-2xl w-full">
                      {user?.service_description
                        ? user.service_description
                        : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.service_date_time ? user.service_date_time : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.number_of_people ? user.number_of_people : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center  border border-slate-300 whitespace-nowrap">
                      {user?.request_status ? user.request_status : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left  border border-slate-300 max-w-2xl w-full">
                      {user?.link ? user.link : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.job_title ? user.job_title : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.name ? user.name : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.email ? user.email : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.phone ? user.phone : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
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
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.agent_name ? user.agent_name : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.agent_gender ? user.agent_gender : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.agent_location ? user.agent_location : "-"}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                      {user?.agent_dob ? user.agent_dob : "-"}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      ) : (
        <h2>no record yet</h2>
      )}
    </div>
  );
}

export default UnSkillTable;

<Link to="/assign" aria-current="page">
  <button className="text-sm text-sm text-green-500">assign</button>
</Link>;
