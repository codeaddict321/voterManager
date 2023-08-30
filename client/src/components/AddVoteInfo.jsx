import React, { useState } from "react";
const URL = 'http://localhost:3000'

const AddVoteInfo = () => {
  const token = localStorage.getItem('token')
  const [formData, setFormData] = useState({
    pollingBoothNumber: "",
    pollingBoothName: "",
    parentConstituency: "",
    winner2014: "",
    firstRunnerUp2014: "",
    marginPercentage: "",
    margin: "",
    totalVoters: "",
    bjpVotes: "",
    bjpVotePercentage: "",
    incVotes: "",
    incVotePercentage: "",
    winner2019: "",
    marginPercentage2019: "",
    margin2019: "",
    totalVoters2019: "",
    bjpVotes2019: "",
    bjpVotePercentage2019: "",
    incVotes2019: "",
    incVotePercentage2019: "",
  });
 

  const [errors, setErrors] = useState({});
async function addData(formData) {
  
  try {
    const res = await fetch(`${URL}/addvoteinfo`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`, // Include the token here
      },
      body: JSON.stringify(formData), // Send the form data in the request body
    });

      console.log(res.ok);{
        const data = await res.json()
        console.log(data);
        
      }
     } catch(err){
      console.log(err);
     }
 }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation for all fields
    const validationErrors = {};
    for (const field in formData) {
      if (!formData[field]) {
        validationErrors[field] = `${field} is required`;
      }
    }

    if (Object.keys(validationErrors).length === 0) {
      addData(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="form-section">
        <div className="form-wrapper">
<div className="form-container">
      <h1>Create New Polling Booth</h1>
      <form className="add-form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((field) => (
          <div key={field} className="form-field">
            <label htmlFor={field} className="label">
              {field}
            </label>
            <input
              type="text"
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="input"
            />
            {errors[field] && <span className="error">{errors[field]}</span>}
          </div>
        ))}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
    </div>
    </section>
    
  );
};

export default AddVoteInfo;
