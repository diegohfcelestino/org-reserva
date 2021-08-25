import { Link } from "react-router-dom";
import "./styles.scss";

function ButtonMenu(props) {
  return (
    <Link to={props.path} className="btn-menu">
      <button
        onClick={props.onClick}
      /* className="btn-menu" */
      >
        <span>{props.children}</span>
      </button>
    </Link>
  );
}

export default ButtonMenu;
