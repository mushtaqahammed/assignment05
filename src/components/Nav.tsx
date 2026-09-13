import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav className=" sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <img src={Logo} alt="Logo" className="w-32 sm:w-36" />
          </div>
          <ul className="hidden md:flex items-center gap-6 font-medium text-gray-700 [&_a]:cursor-pointer [&_a]:transition [&_a:hover]:text-blue-600">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Technologies</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost">Sign In</button>
            <button className="btn btn-secondary rounded-xl">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
