import { Input } from "@chakra-ui/react";
import { useCallback } from "react";
import { FiSearch } from "react-icons/fi";
import { ImUser } from "react-icons/im";
import { useNavigate } from "react-router-dom";
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
const HomeNavbar = () => {
  const navigate = useNavigate();
  const debounceOnChange = useCallback(debounce(handleSearch, 400), []);

  function handleSearch(e) {
    if (e.target.value) {
      navigate(`/products/${e.target.value}`);
    } else {
      navigate(`/products`);
    }
  }
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
          <Input
            placeholder="Search"
            _placeholder={{ color: "gray.500" }}
            type="text"
            name="search"
            id="search"
            onChange={(e) => debounceOnChange(e)}
          />
          <FiSearch
            size={25}
            onClick={() => {
              navigate("/products");
            }}
          />
          <ImUser size={25} onClick={() => navigate("/login")} />
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
