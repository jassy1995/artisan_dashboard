function Navbar() {
  return (
    <>
      <nav className="bg-light-blue-500 md:ml-64  py-4 px-2">
        <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10 mb-5">
          <div className="md:hidden">
            <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center text-sm leading-relaxed bg-transparent  undefined">
              <span
                className="material-icons text-white text-2xl leading-none"
                id="opensidebar"
              >
                menu
              </span>
            </button>
            <div
              id="hideSidebar"
              className="absolute top-2 md:hidden -left-64 z-50 transition-all duration-300"
            >
              <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-12 h-12 p-0 grid place-items-center text-sm leading-relaxed bg-transparent undefined">
                <span className="material-icons text-white text-2xl leading-none">
                  close
                </span>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <h4 className="uppercase text-white text-sm tracking-wider mt-1">
              DASHBOARD
            </h4>
            <div className="flex">
              <div className="-mr-4 ml-6">
                <div>
                  <button
                    className="false flex items-center justify-center gap-1 rounded-lg font-bold outline-none capitalize tracking-wider focus:outline-none transition-all duration-300 rounded-full p-2.5 pl-7 pr-4 text-sm leading-normal text-white undefined"
                    type="button"
                    aria-expanded="false"
                    style={{ padding: "0px", color: "transparent" }}
                  >
                    <div className="w-12 py-2">
                      <img
                        style={{ height: "48px" }}
                        src="https://image.shutterstock.com/image-vector/user-avatar-icon-sign-profile-260nw-1145752283.jpg"
                        className="rounded-full  max-w-full h-auto align-middle border-none undefined"
                        alt="enen"
                      />
                    </div>
                    <span className="material-icons text-lg leading-none align-middle">
                      arrow_drop_down
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
