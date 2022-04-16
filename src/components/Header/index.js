/* eslint-disable jsx-a11y/label-has-associated-control */
import './styles.scss';

function Header() {
  return (
    <nav className="nav">
      <div className="container-logo"><h1 className="logo">devfinder</h1></div>
      <div className="switcher_container">
        <p className="darkmode">Light</p>
        <label className="switch">
          <input id="switch" type="checkbox" />
          <span className="slider round" />
        </label>
      </div>
    </nav>
  );
}

export default Header;
