import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="border-y border-gray-200 mt-4">
      <div className="flex justify-between max-w-7xl mx-auto my-3.5 mt-20 mb-15 gap-x-6">
        <div>
          <img src={Logo} alt="Logo" />
          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="">
            <ul className="font-semibold">
              <li>GitHub</li>
              <li>Twitter</li>
              <li>LinkedList</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-bold">PRODUCT</p>
          <ul>
            <li>Home</li>
            <li>Tecnologies</li>
            <li>Projects</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">COMPANY</p>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">LEGAL</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="border-y border-gray-200 mt-4">
        <div className="flex justify-between max-w-7xl mx-auto my-3.5 mb-15  ">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <ul className="flex justify-between gap-4 ">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
