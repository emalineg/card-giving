import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GiftedCard.css';

function GiftedCard() {
  const { urlSlug } = useParams();
  const [card, setCard] = useState(null);
  const [flip, setFlip] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

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

  const handleCardClick = () => {
    setFlip(prevFlip => !prevFlip);
    setShowLabel(false);
  };

  return (
    <div className="gifted-space">
      <div className="gifted-card-container" onClick={handleCardClick}>
        <div className={`gifted-card ${flip ? 'flipped' : ''}`}>
          <div className="gifted-card-front">
            <img
              className="gifted-card-image"
              src={`${process.env.PUBLIC_URL}/${card.image}`}
              alt={card.name}
            />
            {showLabel && <div className="click-to-flip-label">Click to Flip!</div>}
          </div>
          <div className="gifted-card-back">
            <h1 className="gifted-card-title">{card.title}</h1>
            <p className="gifted-card-message">{card.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftedCard;
