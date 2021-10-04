import { useHistory } from "react-router-dom";
import { useNavbarContext } from "../../context/NavBarContext";
import "./styles.scss";

function ButtonMenu(props) {
  const { handleIsHome } = useNavbarContext()
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
