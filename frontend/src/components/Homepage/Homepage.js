import "./Homepage.css"
import logo from "../../assets/svg/twitter_logo.svg"
import HomeImage from "../../assets/Images/twitter_home.png"

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage_top">
        <div className="homepage_topLeft">
          <img
            src={HomeImage}
            alt="twitter_home"
            />
        </div>

        <div className="homepage_topRight">
          <img
            className="logo"
            src={logo}
            alt="logo"
            />
          <h1 className="homepage_topRight_Title">Happening now</h1>

          <h2 className="homepage_topRight_Subtitle">Join Twitter today.</h2>

          <div className="homepage_topRight_Buttons">
            <button className="primary_button">Sign up with Google</button>
            <button className="primary_button">Sign up with Apple</button>
            <button className="secondary_button">Sign up with phone or email</button>

            <p className="homepage_topRight_policies">
              By signing up, you agree to the <a href="/">Terms of Service</a> and {" "}<a href="/">Privacy Policy</a>,
              including{" "} <a href="/">Cookie Use</a>.
            </p>
          </div>

          <div className="homepage_topRight_Buttons">
            <h3>Already have an account?</h3>
            <button className="primary_button">Sign in</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <ul className="footer_list">
          <li className="footer_list_item">
            <a href="/">About</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Help Center</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Terms of Service</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Privacy Policy</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Cookie Policy</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Accessibility</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Ads Info</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Terms of Service</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Blog</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Status</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Careers</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Brand Resources</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Advertising</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Marketing</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Twitter for Business</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Developers</a>
          </li>
          <li className="footer_list_item">
            <a href="/">Directory</a>
          </li>
        </ul>
        <p className="footer_copyright">
          {" "}
          <a href="/"></a>
          <span>&copy; Twitter Clone </span> {/* Copyright symbol */}
        </p>
      </footer>
    </div>
  )
}

export default Homepage