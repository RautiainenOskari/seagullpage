import { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function SightingList() {

  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    fetchSightings();
  }, []);

  const [columnDefs] = useState([
    { field: "locName", sortable: true, filter: true, headerName: "Location Name" },
    { field: "howMany", sortable: true, filter: true, headerName: "Number of seagulls" },
    { field: "obsDt", sortable: true, filter: true, headerName: "Date" }
  ]);

  const fetchSightings = () => {
    const headers = new Headers({
      'X-eBirdApiToken': 'm3b1i8g2dfge'
    });
  
    fetch("https://api.ebird.org/v2/data/obs/FI/recent/mewgul", {
      method: 'GET',
      headers: headers
    })
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Error fetching sightings: " + response.statusText);
      })
      .then((data) => setSightings(data))
      .catch((err) => console.error(err));
  };

  const autoSizeStrategy = {
    type: 'fitCellContents',
    maxWidth: 200,
};

  return (
    <>
    <h2>Recent seagull sightings</h2>
        <div className="ag-theme-material" style={{ height: "100vw", width: "100vw",  }}>
        
        {/* @ts-ignore */}
        <AgGridReact 
          autoSizeStrategy={autoSizeStrategy }
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
