import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-between gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 h-80">
      <div className="w-1/2">
        <h1 className=" text-5xl font-bold">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-5 max-w-lg text-gray-600 leading-6">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex gap-3">
          <button className="btn btn-dash btn-warning">
            Explore Technologies
          </button>
          <input type="button" value="Learn More" className="btn" />
        </div>
      </div>
      <img src={bannerImage} alt="Banner" />
    </div>
  );
};

export default Banner;