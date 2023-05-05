import React from 'react'

function Patient({ data, deletePatient}) {
  const handleDelete = (name) => {
    deletePatient(name);
    console.log(deletePatient)
  };

  return (
    <>
      {data.map((e) => (
        <div key={e.name}>
          <h2>{e.name}</h2>
          <div>{e.age}</div>
          <div>{e.lastvisit}</div>
          <div>{e.situation}</div>
          <div>{e.medication}</div>
          <div>{e.description}</div>
          <button onClick={() => handleDelete(e.name)}>delete</button>
        </div>
      ))}
    </>
  );
}

export default Patient;
