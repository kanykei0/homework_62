import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="fw-bold mb-3">Portfolio!</h2>
        <p className="pb-3 fw-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Odit, in quisquam soluta nemo asperiores illum voluptatum
          sapiente iusto quis distinctio!
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-3">
          <div className="col mb-3">
            <div className="card h-100">
              <div className="card-body p-3">
                <span>
                  By <b>Kaka</b> | 03 March 2023
                </span>
                <h5 className="fw-bold fs-4 pt-3 lh-base">
                  <Link
                    to="/films"
                    className="nav-link text-decoration-underline"
                  >
                    Films to watch
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card h-100">
              <div className="card-body p-3">
                <span>
                  By <b>Kaka</b> | 03 March 2023
                </span>
                <h5 className="fw-bold fs-4 pt-3 lh-base">
                  <Link
                    to="/game"
                    className="nav-link text-decoration-underline"
                  >
                    Game: Find Ring!
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <div className="card h-100">
              <div className="card-body p-3">
                <span>
                  By <b>Kaka</b> | 03 March 2023
                </span>
                <h5 className="fw-bold fs-4 pt-3 lh-base">
                  <Link
                    to="/chat"
                    className="nav-link text-decoration-underline"
                  >
                    Aliens chat
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
