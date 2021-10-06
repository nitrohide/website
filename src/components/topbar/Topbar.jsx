import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#coverpage" className="logo">Chenghao Lin</a>
        </div>
        <div className="right">
          <ul>
            <li>
                <a href="#intro">About</a>
            </li>
            <li>
                <a href="#portfolio">Skills</a>
            </li>
            <li>
                <a href="#works">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
          </ul>
          {/* <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
