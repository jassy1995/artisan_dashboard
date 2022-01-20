import SkillTable from "../components/skillTable";
import UnSkillTable from "../components/UnSkillTable";
import ArtisanTable from "../components/ArtisanTable";
import CustomerRequestTable from "../components/CustomerTable";

function Dashboard({ skills, unSkills, artisans, customers }) {
  return (
    <>
      <div className="h-10 mt-10"></div>
      <div className="px-3 md:px-8 h-auto mt-16">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <div className="bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-18 py-4 px-8  shadow-lg-blue undefined">
                  <div className="w-full flex items-center justify-center">
                    <h2 className="text-white text-2xl">Skilled Artisan</h2>
                  </div>
                </div>
                <div className="p-4 undefined">
                  <div className="overflow-x-auto">
                    <SkillTable users={skills} />
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <div className="bg-gradient-to-tr from-purple-500 to-purple-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-18 py-4 px-8  shadow-lg-purple undefined">
                  <div className="w-full flex items-center justify-center">
                    <h2 className="text-white text-2xl">Artisan Info</h2>
                  </div>
                </div>
                <div className="p-4 undefined">
                  <div className="overflow-x-auto">
                    <ArtisanTable users={artisans} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-8 h-auto mt-11">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <div className="bg-gradient-to-tr from-red-500 to-red-700 -mt-10 mb-4 rounded-xl text-white grid items-center py-4 px-4  shadow-lg-red undefined">
                  <div className=" flex items-center justify-center">
                    <h2 className="text-white text-2xl">UnSkilled Artisan</h2>
                  </div>
                </div>
                <div className="p-4 undefined">
                  <div className="overflow-x-auto">
                    {/* <UnSkillTable users={unSkills} /> */}
                    {/* beginning of added part */}
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
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300  whitespace-nowrap">
                            1
                          </th>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                            {unSkills[0]?.service_type
                              ? unSkills[0].service_type
                              : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left border border-slate-300 max-w-2xl w-full">
                            {unSkills[0]?.service_description
                              ? unSkills[0].service_description
                              : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                            {unSkills[0]?.service_date_time
                              ? unSkills[0].service_date_time
                              : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                            {unSkills[0]?.number_of_people
                              ? unSkills[0].number_of_people
                              : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center  border border-slate-300 whitespace-nowrap">
                            {unSkills[0]?.request_status
                              ? unSkills[0].request_status
                              : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-left  border border-slate-300 max-w-2xl w-full">
                            {unSkills[0]?.link ? unSkills[0].link : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                            {unSkills[0]?.job_title
                              ? unSkills[0].job_title
                              : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                            {unSkills[0]?.name ? unSkills[0].name : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                            {unSkills[0]?.email ? unSkills[0].name : "-"}
                          </td>
                          <td className="border-b border-gray-200 align-middle font-light text-sm px-2 py-4 text-center border border-slate-300 whitespace-nowrap">
                            {unSkills[0]?.phone ? unSkills[0].phone : "-"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* end of added part */}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <div className="bg-gradient-to-tr from-blue-500 to-blue-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-18 py-4 px-8  shadow-lg-purple undefined">
                  <div className="w-full flex items-center justify-center">
                    <h2 className="text-white text-2xl">Customer Request</h2>
                  </div>
                </div>
                <div className="p-4 undefined">
                  <div className="overflow-x-auto">
                    <CustomerRequestTable users={customers} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
