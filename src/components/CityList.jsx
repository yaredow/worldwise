/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";
import Spinner from "../components/Spinner.jsx";
import CityItem from "../components/CityItem.jsx";
import Message from "../components/Message.jsx";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Please add your first city by clicking on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
