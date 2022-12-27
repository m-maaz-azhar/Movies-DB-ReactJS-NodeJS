import "./style.scss";

interface SidebarProps {
  setFilter: any;
}

export default function Sidebar({ setFilter }: SidebarProps) {

  const handleClick = (filter: string) => {
    if (filter !== "All") {
      fetch(`http://localhost:8080/moviebygenre?genre=${filter}`)
        .then((res) => res.json())
        .then((data) => {
          setFilter(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch("http://localhost:8080/movies")
        .then((res) => res.json())
        .then((data) => {
          setFilter(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <aside>
      <ul>
        <li onClick={() => handleClick("All")}>All</li>
        <li onClick={() => handleClick("Action")}>ACTION</li>
        <li onClick={() => handleClick("Adventure")}>ADVENTURE</li>
        <li onClick={() => handleClick("Comedy")}>COMEDY</li>
        <li onClick={() => handleClick("Mystery")}>MYSTERY</li>
      </ul>
    </aside>
  );
}
