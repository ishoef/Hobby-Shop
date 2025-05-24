import { Link } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <section className="bg-base-300">
      <footer className="footer sm:footer-horizontal w-11/12 lg:w-10/12 mx-auto text-base-content py-10 px-5 lg:px-0">
        <aside>
          <Logo></Logo>
          <p>
            Apps Godaun ltd.
            <br />A Softwer Selling Company, Started October, 2015
          </p>
          <ul className="flex gap-4 mt-5">
            <Link to="https://www.facebook.com/profile.php" target="_blank">
              <li>
                <FaFacebook color="#422AD5" size={22} />
              </li>
            </Link>
            <Link to="https://github.com/" target="_blank">
              <li>
                <FaGithub color="#422AD5" size={22} />
              </li>
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <li>
                <FaLinkedin color="#422AD5" size={22} />
              </li>
            </Link>
          </ul>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Developer Resources</a>
        </nav>
        <div className="">
          <h1 className="footer-title">NewsLetter</h1>
          <p>Subscribe Our NewsLetter for Updates</p>
          <div className="flex gap-3">
            <input
              className="outline outline-primary px-3 py-2 rounded"
              type="text"
              placeholder="Your Email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
