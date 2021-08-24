import { Link } from "react-router-dom";
import "./styles.scss";

function ButtonMenu(props) {
  return (
    <Link to={props.path} className="btn-menu">
      <span>{props.children}</span>
    </Link>
  );
}

export default ButtonMenu;
