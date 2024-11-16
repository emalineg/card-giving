import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GiftedCard.css';

function GiftedCard () {
  const { urlSlug } = useParams(); 
  const [card, setCard] = useState(null); 

  useEffect(() => {
    
    fetch(`https://octopus-app-xwqtk.ondigitalocean.app/api/gifted-cards/${urlSlug}`)
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
    <>
    <div className="space">
    </div>
    <div className="card-container">
      <img className="card-image" src={`${process.env.PUBLIC_URL}/${card.image}`} alt={card.title} />
      <h1 className="card-title">{card.title}</h1>
      <p className="card-message">{card.message}</p>
    </div>
    <div className="space">
    </div>
    </>
  );
}

export default GiftedCard;
