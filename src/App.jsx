import "./App.css";
import {
  logo,
  whitewoman,
  japaneseguy,
  whiteguy,
  giftone,
  worldmap,
  pcguy,
  pcguy2,
  arrowleft,
  location,
  gifttwo,
  arrowright,
  server,
  socialmedia,
  giftthree,
  user,
  insta,
  select,
  correct,
  face,
  twitter,
} from "./assets/images";
import "./assets/images/index";

function App() {
  return (
    <div>
      <header>
        <div className="div-header-logo">
          <img src={logo} className="header-logo" />
        </div>
        <div className="div-header-menu">
          <ul className="header-menus">
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="header-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </header>
      <body>
        <div className="container-principal">
          <div className="container-left">
            <h1 className="title-principal">
              Want anything to be easy with LaslesVPN.
            </h1>
            <h2 className="subtitle-principal">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </h2>
            <button className="get-started">Get Started</button>
          </div>
          <div className="container-right">
            <img src={pcguy} className="pcguy" />
          </div>
        </div>
        <div className="info-sub">
          <div className="info-user">
            <div>
              <img className="logo-user" src={user} />
            </div>
            <div className="card-users">
              <h1 className="info-user-title">90+</h1>
              <h2 className="info-user-subtitle">Users</h2>
            </div>
          </div>
          <div className="info-user">
            <div>
              <img className="logo-user" src={location} />
            </div>
            <div className="card-users">
              <h1 className="info-user-title">30+</h1>
              <h2 className="info-user-subtitle">Locations</h2>
            </div>
          </div>
          <div className="info-user">
            <div>
              <img className="logo-user" src={server} />
            </div>
            <div className="card-users">
              <h1 className="info-user-title">50+</h1>
              <h2 className="info-user-subtitle">Servers</h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={pcguy2} />
          </div>
          <div>
            <h1>aaaaaaaaaaaaaaaaaaaaa</h1>
            <h2>bbbbbbbbbbbbbbuceta</h2>
            <ul>
              <li>
                <img src={select} />
              </li>

              <li>
                <img src={select} />
              </li>
              <li>
                <img src={select} />
              </li>
              <li>
                <img src={select} />
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1>Choose Your Plan</h1>
          <h2>
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </h2>
          <div>
            <div>
              <img src={giftone} />
              <h1>Free plan</h1>
              <ul>
                <li>
                  <img src={correct} />
                  <p>Unlimited Bandwitch</p>
                </li>
                <li>
                  <img src={correct} />
                  <p>Encrypted Connection</p>
                </li>
                <li>
                  <img src={correct} />
                  <p>No Traffic Logs</p>
                </li>
                <li>
                  <img src={correct} />
                  <p>Works on All Devices</p>
                </li>
              </ul>
              <h1>Free</h1>
              <button>Select</button>
            </div>
            <div>
              <img src={gifttwo} />
              <h1>Standard Plan</h1>
              <ul>
                <li>
                  <img src={correct} />
                  <p>Unlimited Bandwitch</p>
                </li>
                <li>
                  <img src={correct} />
                  <p>Encrypted Connection</p>
                </li>
                <li>
                  <img src={correct} />
                  <p>Yes Traffic Logs</p>
                </li>
                <li>
                  <img src={correct} />
                  <p>Works on All Devices</p>
                </li>
                <li>
                  <img src={correct} />
                  <p>Connect Anyware</p>
                </li>
              </ul>
              <h1>$9 / mo</h1>
              <button>Select</button>
            </div>
            <div>
              <img src={giftthree} />
              <p>Get new Features</p>
              <ul>li</ul>
              <h1>$12 / mo</h1>
              <button>Select</button>
            </div>
          </div>
        </div>
        <div>
          <h1>Huge Global Network of Fast VPN</h1>
          <h2>
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </h2>
          <img src={worldmap} />
          <img src={socialmedia} />
        </div>
        <div>
          <h1>Trusted by Thousands of Happy Customer</h1>
          <h2>
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </h2>
          <div>
            <img src={whiteguy} />
          </div>
          <div>
            <img src={whitewoman} />
          </div>
          <div>
            <img src={japaneseguy} />
          </div>
        </div>
        <div>
          <div>
            <h1>Subscribe Now for Get Special Features!</h1>
            <h2>Let's subscribe with us and find the fun.</h2>
          </div>
          <div>
            <button>Subscribe now</button>
          </div>
        </div>
      </body>
      <footer>
        <div>
          <img src={logo} />
          <h2>
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </h2>
          <div>
            <img src={face} />
            <img src={twitter} />
            <img src={insta} />
          </div>
          <p>©2020LaslesVPN</p>
        </div>
        <div>
          <ul>
            <h1>Product</h1>
            <li>
              <h2>Download</h2>
            </li>
            <li>
              <h2>Pricing</h2>
            </li>
            <li>
              <h2>Locations</h2>
            </li>
            <li>
              <h2>Server</h2>
            </li>
            <li>
              <h2>Contries</h2>
            </li>
            <li>
              <h2>Blog</h2>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h1>Engage</h1>
            <li>
              <h2>LaslesVPN?</h2>
            </li>
            <li>
              <h2>FAQ</h2>
            </li>
            <li>
              <h2>Tutorials</h2>
            </li>
            <li>
              <h2>About Us</h2>
            </li>
            <li>
              <h2>Privacy Policy</h2>
            </li>
            <li>
              <h2>Terms of Service</h2>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h1>Earn Money</h1>
            <li>
              <h2>Affiliate</h2>
            </li>
            <li>
              <h2>Become Partner</h2>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
