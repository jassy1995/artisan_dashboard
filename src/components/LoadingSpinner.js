import "../loadingstyle.css";

function LoadingSpinner() {
  return (
    <div className="mb-2 mb-md-3">
      {[1, 2].map((_, i) => (
        <div
          key={i}
          className="card d-flex flex-row align-items-center p-0 mb-1"
        >
          <div
            className="modal-img-transact-container skeleton fit-content"
            style={{ position: "relative" }}
          ></div>
          <div className="modal-transact-content flex-grow-1 ms-md-4 ps-1 pe-2 pe-md-4 pt-2 pb-2">
            <div className="d-flex flex-row align-items-center">
              <div className="skeleton fit-content me-3 ms-2 d-md-none"></div>
              <div className="flex-grow-1">
                <h5 className="product-title mb-1 d-flex align-items-center skeleton">
                  Lorem, ipsum.
                </h5>
                <h5 className="product-title fw-normal mb-1 skeleton">
                  Lorem, ipsum dolor.
                </h5>
                <div className="mt-2 skeleton">Lorem.</div>
              </div>
            </div>

            <div className="d-none d-md-flex mt-4">
              <div className="parentImg skeleton fit-content"></div>
              <div className="parentImg skeleton fit-content ms-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LoadingSpinner;
