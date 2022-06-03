import React, { useEffect, useContext, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import { Store } from "../store";
import LoadingSpinner from "../components/LoadingSpinner";
import Nodata from "../components/empty";
import axios from "axios";
let num = "0";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        page: action.payload.page,
        pages: action.payload.pages,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false };
    default:
      return state;
  }
};

function CustomerRequestTable() {
  const {
    state: { customers: users },
    dispatch,
  } = useContext(Store);

  const [{ loading, pages }, sortedResult] = useReducer(reducer, {
    loading: true,
  });

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const page = sp.get("page") || 1;

  useEffect(() => {
    async function getCustomerRequestData() {
      sortedResult({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get(
          `https://artisanservice.herokuapp.com/api/customer?page=${page}`
        );
        dispatch({ type: "GET_CUSTOMER", payload: data.customers });
        sortedResult({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        sortedResult({ type: "FETCH_FAIL" });
        console.log(error);
      }
    }
    getCustomerRequestData();
  }, [page, dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : users.length === 0 ? (
        <Nodata />
      ) : (
        <>
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
          <div className="mt-2">
            {[...Array(pages).keys()].map((x) => (
              <Link
                className={x + 1 === Number(page) ? "btn-color1" : "btn-color2"}
                key={x + 1}
                to={`/customer?page=${x + 1}`}
              >
                {x + 1}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CustomerRequestTable;
