import React, { useEffect, useState } from "react";
// import ArtisanTable from "../components/ArtisanTable";
import CustomerRequestTable from "../components/CustomerTable";
// import axios from "axios";

function CustomerRequestPage({ users }) {
  // let [users, setUser] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     const data = await axios.get(
  //       "https://artisanservice.herokuapp.com/api/all_records"
  //     );
  //     setUser(data.data.customer_request);
  //   }
  //   getData();
  // }, []);
  return (
    <>
      <div className="h-10 mt-10"></div>
      <div className="px-3 md:px-8 h-auto mt-16">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-10">
            <div className="xl:col-center-4 xl:col-center-6 px-4 mb-14">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-md p-4 undefined">
                <div className="bg-gradient-to-tr from-purple-500 to-purple-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-18 py-4 px-8  shadow-lg-purple undefined">
                  <div className="w-full flex items-center justify-center">
                    <h2 className="text-white text-2xl">Customer Request</h2>
                  </div>
                </div>
                <div className="p-4 undefined">
                  <div className="overflow-x-auto">
                    <CustomerRequestTable users={users} />
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

export default CustomerRequestPage;
