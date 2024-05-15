import "./App.css";
import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function SightingList() {
  const [sightings, setSightings] = useState([]);
  const [country, setCountry] = useState("FI");
  const [species, setSpecies] = useState("bkhgul");

  const speciesCodes = species;

  const countries = [
    { name: "Canada", code: "CA" },
    { name: "Finland", code: "FI" },
    { name: "Spain", code: "ES" },
    { name: "Sweden", code: "SE" },
    { name: "United Kingdom", code: "UK" },
    { name: "United States", code: "US" },
  ];

  const speciesOptions = [
    { name: "Black-headed Gull", code: "bkhgul" },
    { name: "Herring Gull", code: "hergul" },
    { name: "Lesser Black-backed Gull", code: "lbbgul" },
    { name: "Mediterranean Gull", code: "mewgul" },
    { name: "Yellow-legged Gull", code: "yelgul1" },
  ];

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
    fetchSightings(event.target.value);
  };

  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecies(event.target.value);
    fetchSightings(country, event.target.value);
  };

  useEffect(() => {
    fetchSightings("FI", "mewgul");
  }, []);

  const [columnDefs] = useState([
    {
      field: "locName",
      sortable: true,
      filter: true,
      headerName: "Location Name",
    },
    {
      field: "howMany",
      sortable: true,
      filter: true,
      headerName: "Number of seagulls",
    },
    { field: "obsDt", sortable: true, filter: true, headerName: "Date" },
  ]);

  const fetchSightings = (countryCode = "", speciesCode = speciesCodes) => {
    const headers = new Headers({
      "X-eBirdApiToken": "m3b1i8g2dfge",
    });

    fetch(
      `https://api.ebird.org/v2/data/obs/${countryCode}/recent/${speciesCode}`,
      {
        method: "GET",
        headers: headers,
      }
    )
      .then((response) => {
        if (response.ok) return response.json();
        else
          throw new Error("Error fetching sightings: " + response.statusText);
      })
      .then((data) => setSightings(data))
      .catch((err) => console.error(err));
  };

  const autoSizeStrategy = {
    type: "fit-viewport",
    maxWidth: 200,
  };

  return (
    <>
      <h2>Recent seagull sightings</h2>
      <select value={country} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <select value={species} onChange={handleSpeciesChange}>
        {speciesOptions.map((species) => (
          <option key={species.code} value={species.code}>
            {species.name}
          </option>
        ))}
      </select>
      <div className="ag-theme-material">
        {/* @ts-expect-error Ignore this error for now */}
        <AgGridReact
          autoSizeStrategy={autoSizeStrategy}
          rowData={sightings}
          columnDefs={columnDefs}
          pagination={true}
          paginationAutoPageSize={true}
        />
      </div>
    </>
  );
}

export default SightingList;
