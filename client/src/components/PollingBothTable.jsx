import React from 'react';
const URL = 'http://localhost:3000'
import { FaTrash } from "react-icons/fa";
function PollingBoothTable({ data,userRole }) {
 const token = localStorage.getItem('token')
  async function handleDelete(id) {
   
  
      try {
        const res = await fetch(`${URL}/deletevoteinfo`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token here
          },
          body: JSON.stringify({id}), // Send the form data in the request body
        });
    
          console.log(res.ok);{
            const data = await res.json()
            console.log(data.msg)
            
            
          }
         } catch(err){
          console.log(err);
         }
     
    
   }
  return (
    <div className="table-container">
    <div className="scrollable-table">
      <table className="polling-table">
        <thead>
          <tr>
            {userRole==="admin"||userRole==="superadmin" &&<th>Delete</th>}
            <th>Polling Booth Number</th>
            <th>Polling Booth Name</th>
            <th>Parent Constituency</th>
            <th>Winner - 2014</th>
            <th>1st Runner up (other than INC and BJP)</th>
            <th>Margin (%)</th>
            <th>Margin</th>
            <th>Total Voters</th>
            <th>BJP - Votes</th>
            <th>BJP - % Vote</th>
            <th>INC - Votes</th>
            <th>INC - % Votes</th>
            <th>Winner - 2019</th>
            <th>Margin (%)</th>
            <th>Margin</th>
            <th>Total Voters</th>
            <th>BJP - Votes</th>
            <th>BJP - % Votes</th>
            <th>INC - Votes</th>
            <th>INC - % Votes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
          
           
          <tr key={index}>
       {userRole==="admin"||userRole==="superadmin" &&<td onClick={()=>handleDelete(row['_id'])}>{<FaTrash />}</td> } 
      
  <td>{row.pollingBoothNumber}</td>
  <td>{row.pollingBoothName}</td>
  <td>{row.parentConstituency}</td>
  <td>{row.winner2014}</td>
  <td>{row['a']}</td>
  <td>{row.marginPercentage}</td>
  <td>{row.margin}</td>
  <td>{row.totalVoters}</td>
  <td>{row.bjpVotes}</td>
  <td>{row.bjpVotePercentage}</td>
  <td>{row.incVotes}</td>
  <td>{row.incVotePercentage}</td>
  <td>{row.winner2019}</td>
  <td>{row.marginPercentage2019}</td>
  <td>{row.margin2019}</td>
  <td>{row.totalVoters}</td>
  <td>{row.bjpVotes2019}</td>
  <td>{row.bjpVotePercentage2019}</td>
  <td>{row.incVotes2019}</td>
  <td>{row.incVotePercentage2019}</td>
</tr>


           
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default PollingBoothTable;
