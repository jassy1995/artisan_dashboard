import React, { useContext } from "react";
import { Store } from "../store";
import LoadingSpinner from "../components/LoadingSpinner";
import Nodata from "../components/empty";
let num = "0";
function CustomerRequestTable() {
  const {
    state: { customers: users, loading },
  } = useContext(Store);

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
                {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <Link to="/assign" aria-current="page">
                      <button className="text-sm text-sm text-green-500">
                        assign
                      </button>
                    </Link>
                  </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>

    //   {loading ? (
    //     <div>
    //       {[1,2].map((_,i) => (
    //     <div key={i} class="mb-3 mb-md-4">
    //       <div class="card d-flex flex-row align-items-center p-0">
    //         <div class="modal-img-transact-container skeleton fit-content" style="position: relative;">
    //           <img src="/assets/images/plus.svg" alt="img-trasact"/>
    //         </div>
    //         <div class="modal-transact-content flex-grow-1 ms-md-4 ps-1 pe-2 pe-md-4 pt-2 pb-2">
    //           <div class="d-flex flex-row align-items-center">
    //             <div class="skeleton fit-content me-3 ms-2 d-md-none">
    //               <img src="/assets/images/plus.svg" alt="img-trasact" class="d-md-none rounded img-mobile"/>
    //             </div>
    //             <div class="flex-grow-1">
    //               <h5 class="product-title mb-1 d-flex align-items-center skeleton">Lorem, ipsum.</h5>
    //               <h5 class="product-title fw-normal mb-1 skeleton">Lorem, ipsum dolor.</h5>
    //               <div class="mt-2 skeleton">Lorem.</div>
    //             </div>
    //           </div>

    //           <div class="d-none d-md-flex mt-4">
    //             <div class="parentImg skeleton fit-content">
    //               <img src="/assets/images/plus.svg" alt="plus icon"
    //                    style="width: 70px; height: 70px; border-radius: 4px; object-fit: cover;"/>
    //             </div>
    //             <div class="parentImg skeleton fit-content ms-2">
    //               <img src="/assets/images/plus.svg" alt="plus icon"
    //                    style="width: 70px; height: 70px; border-radius: 4px; object-fit: cover;"/>
    //             </div>
    //           </div>

    //           <div class="mt-md-4 d-none d-md-block">
    //             <button type="button" class="btn btn-outline-secondary btn-sm skeleton fit-content">
    //               View details
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    //    : (
    //     <table className="items-center w-full bg-transparent border-separate border border-slate-400">
    //       <thead>
    //         <tr>
    //           <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
    //             S/N
    //           </th>
    //           <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
    //             name
    //           </th>
    //           <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
    //             phone
    //           </th>
    //           <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
    //             service
    //           </th>
    //           <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
    //             address
    //           </th>
    //           <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
    //             task_description
    //           </th>
    //           <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left border border-slate-300">
    //             artisan Name
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map((user, index) => (
    //           <tr key={index}>
    //             <th className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300">
    //               {index + 1}
    //             </th>
    //             <td className="align-middle font-light text-sm  px-2 py-4 text-left   border border-slate-300">
    //               {user?.full_name}
    //             </td>
    //             <td className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300">
    //               {num.concat(user?.user_id?.slice(3))}
    //             </td>
    //             <td className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300">
    //               {user?.service}
    //             </td>
    //             <td className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300">
    //               {user?.address}
    //             </td>
    //             <td className="align-middle font-light text-sm whitespace-normal px-2 py-4 text-left border border-slate-300">
    //               {user?.task_description}
    //             </td>
    //             <td className="align-middle font-light text-sm  px-2 py-4 text-left border border-slate-300 text-slate-300">
    //               pending
    //             </td>
    //             {/* <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
    //                 <Link to="/assign" aria-current="page">
    //                   <button className="text-sm text-sm text-green-500">
    //                     assign
    //                   </button>
    //                 </Link>
    //               </td> */}
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   )}
    // </div>
  );
}

export default CustomerRequestTable;
