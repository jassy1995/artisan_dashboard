import React from "react";
import CustomerForm from "../components/CustomerForm";

function AssignPage() {
  return (
    <>
      <div className="w-full h-10 mt-10"></div>
      <div className="px-3 md:px-2 h-auto mt-16">
        <div className="container mx-auto">
          <div className=" px-4 mb-14">
            <div className="bg-white rounded-xl overflow-hdden shadow-md p-4 undefined align-middle mx-auto xl:width[300px]">
              <div className="p-4 mx-auto">
                <div className="mx-auto">
                  <CustomerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignPage;
