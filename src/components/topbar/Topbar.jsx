import "./topbar.scss"
import { Person, Mail } from '@mui/icons-material';


export default function Topbar({setMenuOpen,menuOpen}) {
    return (
    <div className={"topbar "+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">.genius </a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+989039420103</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>saharnikkhah@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger"  onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>

          </div>
        </div>
      </div>
    </div>
  )
}
