import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function GiftedCard () {
  const { urlSlug } = useParams(); 
  const [card, setCard] = useState(null); 

  useEffect(() => {
    
    fetch(`http://localhost:3001/api/gifted-cards/${urlSlug}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCard(data); 
      })
      .catch(error => {
        console.error('Error fetching gifted card:', error);
      });
  }, [urlSlug]); 

 
  if (!card) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/${card.image}`} alt={card.title} />
      <h1>{card.title}</h1>
      <p>{card.message}</p>
      {/* Optionally display comments if present */}
      {/* {card.comments && (
        <ul>
          {card.comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
}

export default GiftedCard;
