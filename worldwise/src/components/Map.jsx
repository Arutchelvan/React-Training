import { useNavigate, useSearchParams } from "react-router";
import styles from "./Map.module.css";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>MAP</h1>
      <h1>
        Location: {lat}, {lng}
      </h1>

      <button onClick={() => setSearchParams({ lat: 20, lng: 50 })}>
        Change Location
      </button>
    </div>
  );
}

export default Map;
