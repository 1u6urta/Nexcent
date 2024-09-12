const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <div className="icon">
          <svg
            width="75"
            height="60"
            viewBox="0 0 80 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.8263 32.1344L30.604 54.628L18.3817 32.1344H42.8263ZM46.1006 30.124H15.0942L30.604 58.6066L46.1006 30.124Z"
              fill="#263238"
            />
            <path
              d="M64.0762 4.15793L76.2984 26.6515H51.8538L64.0762 4.15793ZM64.0762 0.137207L48.5663 28.6197H79.5859L64.0762 0.137207Z"
              fill="#263238"
            />
            <path
              d="M0.234009 0.137207L13.2384 25.33L27.4491 0.769804L0.234009 0.137207Z"
              fill="#4CAF4F"
            />
            <path
              d="M30.6043 2.34375L44.245 27.396H16.9371L30.6043 2.34375Z"
              fill="#4CAF4F"
            />
            <path
              d="M47.7579 32.8657L61.4118 58.607H33.4543L47.3336 32.8657H47.7579Z"
              fill="#4CAF4F"
            />
            <path
              d="M50.7139 31.3052L64.0762 56.6526L77.6241 31.3052H50.7139Z"
              fill="#4CAF4F"
            />
          </svg>
        </div>
        <div className="nexcent">Nexcent</div>
      </div>
      <ul className="links">
        <li className="link">Home</li>
        <li className="link">Features</li>
        <li className="link">Community</li>
        <li className="link">Blog</li>
        <li className="link">Pricing</li>
      </ul>
      <div className="button">
        <button>
          Register Now  {" "}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.52569 8.45996L10.2448 6.74085C10.4487 6.53697 10.4487 6.20642 10.2448 6.00254L8.52569 4.28344M10.0919 6.3717L2.43494 6.3717"
              stroke="white"
              stroke-width="0.765676"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
