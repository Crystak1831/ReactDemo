import { useState, useEffect } from "react";
import "./searchCountry.css";

export default function SearchCoutries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.com/v2/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  return (
    <div className="countrain-main">
      {countries.map((item, index) => {
        return <CountryItem key={index} country={item} />;
      })}
    </div>
  );
}

const CountryItem = ({ country }) => {
  const [showMore, setShowMore] = useState(false);

  const showDetails = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="country-container">
      <div>
        <img src={country.flag} width="50px" />
        <p>{country.population}</p>
        <p>{country.region}</p>
        <p>{country.capital}</p>
        <button onClick={showDetails}>
          {showMore ? "show less" : "show more"}
        </button>
        {showMore && <CountryDetail country={country} />}
      </div>
    </div>
  );
};

const CountryDetail = ({ country }) => {
  return (
    <div>
      <img src={country.flag} width="500px" />
    </div>
  );
};
