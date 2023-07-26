import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [maPosition, setMaPosition] = useState([40, 0]);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const navigate = useNavigate();
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        center={maPosition}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={maPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
