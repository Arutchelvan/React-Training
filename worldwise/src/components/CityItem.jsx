import { Link } from "react-router";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/useCities";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  function handleDelete() {
    deleteCity(id);
  }
  return (
    <li
      className={`${styles.cityItem} ${id === currentCity.id ? styles[`cityItem--active`] : ""}`}
    >
      <Link
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        className={styles.cityLink}
      >
        <span className={styles.emoji}>
          <img
            src={`https://flagcdn.com/32x24/${emoji}.png`}
            width="32"
            height="24"
          />
        </span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
      </Link>
      <button className={styles.deleteBtn} type="button" onClick={handleDelete}>
        &times;
      </button>
    </li>
  );
}

export default CityItem;
