import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { NavBarContext } from "../../context/NavBarContext";
import "./styles.scss";

function ButtonMenu(props) {
  const { handleIsHome } = useContext(NavBarContext)
  let history = useHistory()

  function handleClick(path) {
    handleIsHome(false)
    history.push(path)

  }
  return (
    <button className="btn-menu"
      onClick={() => handleClick(props.path)}
    >
      <span>{props.children}</span>
    </button>
  );
}

export default ButtonMenu;
