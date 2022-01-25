import React from "react";
import CustomerRequestTable from "../components/CustomerTable";

function CustomerRequestPage({ users }) {
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
