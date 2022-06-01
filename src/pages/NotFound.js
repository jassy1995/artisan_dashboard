import * as React from "react";

function NotFound() {
  return (
    <>
      <div className="h-10 mt-10"></div>
      <div className="px-3 md:px-8 h-auto mt-16">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-8 justify-center">
            <h1 className="text-red-500 text-center">Page not found</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
