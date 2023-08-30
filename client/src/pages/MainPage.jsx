import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PollingBoothTable from "../components/PollingBothTable";
import AddVoteInfo from "../components/AddVoteInfo";
const URL = `http://localhost:3000`;

export default function MainPage() {
  const [userRole, setUserRole] = useState('user');
  const [data, setData] = useState([]);
  
  const [filters, setFilters] = useState({['Parent Constituency']:'Ashti'}); 
  const [showAddForm,setShowAddForm] = useState(false)
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
    async function fetchData() {
      try {
       
        const filterParams = new URLSearchParams(filters);
        const res = await fetch(`${URL}/?token=${token}&${filterParams}`);
      
        if (res.ok) {
         
          const { data,userRole } = await res.json();
        
      setUserRole(userRole)
          setData([...data]);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [token, navigate,filters]);
  const handleSelectChange = (e) => {
    setFilters({...filters,['Parent Constituency']:e.target.value})
  };
  return (
    <section className="mainPage-section">
      {data.length > 0 ? (
        <>
            <h2>Parent Constituency</h2>
            <select value={filters['Parent Constituency']} onChange={handleSelectChange}>
             
              <option value="Ashti">Ashti</option>
              <option value="Karanja">Karanja</option>
              <option value="Arvi">Arvi</option>
            </select>
            <button onClick={()=>setShowAddForm(prev=>!prev)}>Add Info</button>
          {showAddForm && <AddVoteInfo />}
        <PollingBoothTable data={data} userRole={userRole} />
        </> ): (
        <p>Loading data...</p> 
      )}
    </section>
  );
}
