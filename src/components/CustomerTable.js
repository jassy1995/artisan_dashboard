import React, { useEffect, useContext } from "react";
import { Store } from "../store";
import LoadingSpinner from "../components/LoadingSpinner";
import Nodata from "../components/empty";
import axios from "axios";
let num = "0";
function CustomerRequestTable() {
  const {
    state: { customers: users, loading },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    async function getCustomerRequestData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        const data = await axios.get(
          "https://artisanservice.herokuapp.com/api/all_records"
        );
        dispatch({
          type: "GET_CUSTOMER",
          payload: data.data.customer_request,
        });
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }
    }
    getCustomerRequestData();
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : users.length === 0 ? (
        <Nodata />
      ) : (
        <table className="items-center w-full bg-transparent border-separate border border-slate-400">
          <thead>
            <tr>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                S/N
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                name
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                phone
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                service
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                address
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                task_description
              </th>
              <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                artisan
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300">
                  {index + 1}
                </th>
                <td className="align-middle font-light text-sm  px-2 py-4 text-left   border border-slate-300">
                  {user?.full_name}
                </td>
                <td className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300">
                  {num.concat(user?.user_id?.slice(3))}
                </td>
                <td className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300">
                  {user?.service}
                </td>
                <td className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300">
                  {user?.address}
                </td>
                <td className="align-middle font-light text-sm whitespace-normal px-2 py-4 text-left border border-slate-300">
                  {user?.task_description}
                </td>
                <td className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300 text-slate-300">
                  pending
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CustomerRequestTable;
