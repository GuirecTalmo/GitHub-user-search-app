import "./styles.scss";

function Informations() {
  return (
    <div className="first-container">
      <div className="user-header">
        <h2>Username</h2>
        <p>Join Github date</p>
      </div>
      <p className="username">
        <a href="#">@Username</a>
      </p>
      <p className="biographie">The profile has no bio</p>
      <div className="second-container">
        <div className="little-column">
          <p>Repos</p>
          <p className="number">8</p>
        </div>
        <div className="little-column">
          <p>Followers</p>
          <p className="number">254</p>
        </div>
        <div className="little-column">
          <p>Following</p>
          <p className="number">10</p>
        </div>
      </div>
      <div className="third-container">
        <div className="little-xs-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 icons-card"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <p>Location</p>
        </div>
        <div className="little-xs-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icons-card"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p>Twitter account</p>
        </div>
        <div className="little-xs-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 icons-card"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <p>Personnal website</p>
        </div>
        <div className="little-xs-column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 icons-card"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
              clipRule="evenodd"
            />
          </svg>
          <p>Organisation</p>
        </div>
      </div>
    </div>
  );
}

export default Informations;
