import { useState, useMemo } from "react";


const MyForm = () => {
  const [count, setCount] = useState(0);
  const [donors, setdonors] = useState([]);


  const increment = () => {
    setCount((c) => c + 1);
  };
  const addDonor = () => {
    setdonors((t) => [...t, "Donor added"]);
  };

  return (
    <div>
      
      <div>
        <h2>New Blood Donors<br></br>(useMemo Hook)</h2>
        {donors.map((Donor, index) => {
          return <p key={index}>{Donor}</p>;
        })}
        <button onClick={addDonor}>Add New Donor</button>
      </div>
      <hr />
     
    </div>
  );
};


export default MyForm;