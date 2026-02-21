export default function Header() {
  return (
    <nav>
      <div className="container nav-container">
        <h1 className="logo">OS-Cendekia</h1>
        {/* 
            <div className="hamburger" id="hamburgerBtn">
                <span></span>
                <span></span>
                <span></span>
            </div> */}

        <ul className="nav-links" id="navLinks">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#Guest">Guest Star</a>
          </li>
          <li>
            <a href="#competition">Competition</a>
          </li>
          <li>
            <a href="#timeline">Timeline</a>
          </li>
          <li id="navRiwayatWrapper" className="hidden">
            <a href="#userDashboard">Riwayat</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <li className="mobile-login-wrapper">
            <button
              id="loginBtnMobile"
              className="btn login-btn mobile-login-btn"
            >
              Login with Google
            </button>
          </li>

          <li className="mobile-profile-wrapper">
            <div id="userProfileMobile" className="user-profile hidden">
              <div className="user-info">
                <span id="userNameMobile" className="u-name">
                  User
                </span>
                <span id="userEmailMobile" className="u-email">
                  email@mail.com
                </span>
              </div>
              <button id="logoutBtnMobile" className="logout-btn">
                Logout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
