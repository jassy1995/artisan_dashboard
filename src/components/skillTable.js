function SkillTable({ users }) {
  const tdSize = {
    width: "10px",
    wordWrap: "break-word",
  };

  return (
    <div>
      {users.length > 0 ? (
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
            {users.length > 0 &&
              users.map((user, index) => (
                <tr key={index}>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {index + 1}
                  </th>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.service_type}
                  </td>
                  <td
                    className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left word-wrap"
                    style={tdSize}
                  >
                    {user?.service_description}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.service_date_time}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.number_of_people}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.request_status}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.link}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.job_title}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.name}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.email}
                  </td>
                  <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {user?.phone}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <h2>no record yet</h2>
      )}
    </div>
  );
}

export default SkillTable;
