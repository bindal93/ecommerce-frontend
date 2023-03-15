import { FiSearch } from "react-icons/fi";
import { ImUser } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div onClick={() => navigate("/")} className="navIcon">
          <img
            src="https://www.nagarro.com/hubfs/NagarroWebsiteRedesign-Aug2020/Assets/Images/Nagarro%20green%20logo%20with%20title_opt.svg"
            alt="logo"
          />
        </div>
        <div className="navUser">
          <ImUser size={25} onClick={() => navigate("/login")} />
          <FiSearch size={25} onClick={() => navigate("/")} />
        </div>
      </div>
      <img
        src="https://images.dailyobjects.com/marche/assets/images/other/republicsale-home-page-desktop.png?tr=cm-pad_resize,v-2,w-1349,dpr-1"
        alt=""
      />
    </div>
  );
};

export default HomeNavbar;
