import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import GiftedCard from './GiftedCard';
import './SpecificCardDetails.css';

function SpecificCardDetails(props) {
  const { id } = useParams(); 
  const cardId = parseInt(id, 10); 
  const [card, setCard] = useState(null); 
  const [cardCreated, setCardCreated] = useState(false);
  const [cardData, setCardData] = useState({});
  const [cardUrl, setCardUrl] = useState(''); 

  useEffect(() => {
    fetch(`http://localhost:3001/api/cards/${cardId}`)
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
        console.error('Error fetching card:', error);
      });
  }, [cardId]); 

  const createCard = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const message = e.target.message.value;
    const urlSlug = e.target.url.value;
  
    const newCardData = { title, message, urlSlug, image: card.image };
  
    fetch('http://localhost:3001/api/gifted-cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCardData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      setCardData(data); 
      setCardUrl(`/gifted-card/${urlSlug}`); 
      setCardCreated(true);
    })
    .catch(error => {
      console.error('Error creating card:', error);
    });
  };

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="SpecificCardDetails">
      <div>
        <img src={`${process.env.PUBLIC_URL}/${card.image}`} alt={card.name} />
      </div>

      <div>
        <h1>{card.name}</h1>
      </div>

      <div class="form-container">
        <h2>Create a card</h2>
        <form onSubmit={createCard} class="create-card-form">
          <div class="form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div class="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div class="form-group">
            <label htmlFor="url">Desired URL Slug:</label>
            <input type="text" id="url" name="url" required />
          </div>
          <button type="submit" class="submit-btn">Create</button>
        </form>
      </div>


      {cardCreated && (
        <>
          <p>Here is your card URL: <Link to={cardUrl}>{cardUrl}</Link></p>
          <GiftedCard {...cardData} />
        </>
      )}
    </div>
  );
}

export default SpecificCardDetails;
