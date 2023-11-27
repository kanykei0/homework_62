import aliens from "../../assets/aliens.avif";

const Home = () => {
  return (
    <div className="container pb-5">
      <div className="row row-cols-1 row-cols-md-2 d-md-flex">
        <div className="col ps-md-5 mt-xl-5 pt-xl-5">
          <h1 className="fw-bold mt-5 pt-xl-2">Work at the speed of thought</h1>
          <p className="fs-main-desc mb-4 mb-md-5 mt-md-4 pt-2 pb-lg-2">
            Tools, tutorials, design and innovation experts, all in one place!
            <br /> The most intuitive way to imagine your next user experience.
          </p>
          <a href="#" className="btn btn-dark p-main-btn fw-bold">
            Get started
          </a>
        </div>
        <div className="col mt-4">
          <img src={aliens} alt="main-pic" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;