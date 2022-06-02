import React, { useEffect, useContext } from "react";
import { Store } from "../store";
import LoadingSpinner from "../components/LoadingSpinner";
import Nodata from "../components/empty";
import axios from "axios";
let num = "0";
function ArtisanTable() {
  const {
    state: { artisans, loading },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    async function getCustomerRequestData() {
      dispatch({ type: "START_FETCHING", payload: true });
      try {
        const data = await axios.get(
          "https://artisanservice.herokuapp.com/api/all_records"
        );
        dispatch({ type: "GET_ARTISAN", payload: data.data.artisans });
      } catch (error) {
        dispatch({ type: "END_FETCHING", payload: false });
        console.log(error);
      }
    }
    getCustomerRequestData();
  }, [dispatch]);

  return (
    <>
      <div>
        {loading ? (
          <LoadingSpinner />
        ) : !artisans.length ? (
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
                  stage
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  local_gov
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  address
                </th>
                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
                  payment_status
                </th>
              </tr>
            </thead>
            <tbody>
              {artisans.length > 0 &&
                artisans.map((artisan, index) => (
                  <tr key={index}>
                    <th className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {index + 1}
                    </th>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {artisan?.full_name}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {num.concat(artisan?.artisan_id?.slice(3))}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {artisan?.state}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {artisan?.lga}
                    </td>
                    <td className="align-middle font-light text-sm  whitespace-normal px-2 py-4 text-left border border-slate-300">
                      {artisan?.address}
                    </td>
                    <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left border border-slate-300">
                      {artisan?.payment_status}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default ArtisanTable;
