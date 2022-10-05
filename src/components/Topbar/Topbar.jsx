import "./Topbar.scss"
// import Person from "@material-ui/icons"
// import PersonIcon from '@mui/icons-material/Person';
// import MailIcon from '@mui/icons-material/Mail';
import Mail from "@mui/icons-material/Mail";
import Person from "@mui/icons-material/Person";

export default function Topbar({menuOpen,  setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" >Sandesh.</a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 9560713195</span>

          </div>
          <div className="itemContainer">
            <Mail  className="icon" />
            <span>sandeshkumarr1@gmail.com</span>

          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
