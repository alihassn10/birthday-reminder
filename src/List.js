import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id,name, image, age } = person;
        return <section className='person' key={id}>
          <img src={image}></img>
          <div>
          <h4>{name}</h4>
          <p>{age} years</p>
          </div>
        </section>

      })}
    </>
  );
};

export default List;
