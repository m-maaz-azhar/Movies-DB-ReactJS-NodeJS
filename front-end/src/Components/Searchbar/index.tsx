import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";

export default function Searchbar() {
  return (
    <div className="search-bar">
      <input type="search" placeholder="Search Movies" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
