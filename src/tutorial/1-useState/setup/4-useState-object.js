import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message'
  });

  // console.log(person);
  const changeMessage = () => {
    setPerson({...person, message:'hello world'});
  }


  return (
    <>
      <h2>{person.name}</h2>;
      <h2>{person.age}</h2>;
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>

        change message
      </button>
    </>
  );


};

export default UseStateObject;
