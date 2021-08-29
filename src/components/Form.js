import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState ([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function d (x){
    x.preventDefault()
    if (firstName.length > 0) {
    const y = {firstName: firstName, lastName:lastName}
    const z = [...submittedData, y]
    setSubmittedData (z)
    } else {
      setErrors(['First name required'])
    }
  }
  const list = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
   <>
      <form onSubmit={d}> 
        <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="First Name" />
        <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="Last Name"/>
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0 ? errors.map((b, index) => {
        return <p key={index} style={{color: 'red'}}>{b}</p>
      }) : null}
      <h3>Submissions</h3>
      {list}
  </>  
  );
}

export default Form;
