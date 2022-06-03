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

function ArtisanTable() {
  const {
    state: { artisans },
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
          `https://artisanservice.herokuapp.com/api/artisan?page=${page}`
        );
        console.log(data.artisans);
        dispatch({ type: "GET_ARTISAN", payload: data.artisans });
        sortedResult({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_FAIL", payload: false });
        console.log(error);
      }
    }
    getCustomerRequestData();
  }, [page, dispatch]);

  return (
    <>
      <div>
        {loading ? (
          <LoadingSpinner />
        ) : !artisans.length ? (
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
                        {num.concat(artisan?.user_id?.slice(3))}
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
            <div className="mt-2">
              {[...Array(pages).keys()].map((x) => (
                <Link
                  className={
                    x + 1 === Number(page) ? "btn-color1" : "btn-color2"
                  }
                  key={x + 1}
                  to={`/artisan?page=${x + 1}`}
                >
                  {x + 1}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ArtisanTable;
