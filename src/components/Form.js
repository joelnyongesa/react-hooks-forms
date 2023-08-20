import React, { useState } from "react";

function Form(props) {
  return(
    <form>
      <input
        type="text"
        value={props.firstName}
        onChange={props.handleFirstNameChange}
      />
      <input 
        type="text"
        value={props.lastName}
        onChange={props.handleLastNameChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
