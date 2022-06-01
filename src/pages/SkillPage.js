import React, { useContext } from "react";
import SkillTable from "../components/skillTable";
import { Store } from "../store";

function SkillPage() {
  const {
    state: { skills: users },
  } = useContext(Store);

  console.log(users);
  return (
    <>
      <div className="h-10 mt-10"></div>
      <div className="px-3 md:px-8 h-auto mt-16">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-10">
            <div className="xl:col-center-1 xl:col-center-4 px-4 mb-14">
              <div className="w-full bg-white rounded-xl overflow-hdden shadow-m p-4 undefined">
                {users.length > 0 && (
                  <div className="bg-gradient-to-tr from-purple-500 to-purple-700 -mt-10 mb-4 rounded-xl text-white grid items-center w-full h-18 py-4 px-8  shadow-lg-blue undefined">
                    <div className="w-full flex items-center justify-center">
                      <h2 className="text-white text-2xl">Skilled Artisan</h2>
                    </div>
                  </div>
                )}
                <div className="p-4 undefined">
                  <div className="overflow-x-auto">
                    <SkillTable />
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

export default SkillPage;
