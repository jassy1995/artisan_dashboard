import * as React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div
        id="leftSidebar"
        className="h-screen fixed top-0 md:left-0 -left-64 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300"
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
            Creditclan
          </h1>

          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />
            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <Link
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                  to="/"
                  aria-current="page"
                >
                  <span className="material-icons undefined text-2xl leading-none">
                    dashboard
                  </span>
                  Dashboard
                </Link>
              </li>

              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <Link
                  to="/skill"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <span className="material-icons undefined text-2xl leading-none">
                    people
                  </span>
                  Skilled(Artisan)
                </Link>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <Link
                  to="/unSkill"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <span className="material-icons undefined text-2xl leading-none">
                    people
                  </span>
                  UnSkilled(Artisan)
                </Link>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <Link
                  to="/artisan"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <span className="material-icons undefined text-2xl leading-none">
                    account_circle
                  </span>
                  Artisan(registered)
                </Link>
              </li>
              <li className="px-4 rounded-lg mb-2 text-gray-700">
                <Link
                  to="/customer"
                  className="flex items-center gap-4 text-sm font-light py-3"
                >
                  <span className="material-icons undefined text-2xl leading-none">
                    web
                  </span>
                  Customers(request)
                </Link>
              </li>
              <li className="rounded-lg mb-2">
                <Link
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  to="/settings"
                >
                  <span className="material-icons undefined text-2xl leading-none">
                    logout
                  </span>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBar;
