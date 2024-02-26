import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../specificcard-data.json';
import GiftedCard from './GiftedCard';

function SpecificCardDetails(props) {
  const params = useParams();
  const { id } = params; 
  const index = parseInt(id, 10); 
  const { image, name } = data[index]; 
  const [cardCreated, setCardCreated] = useState(false);
  const [cardData, setCardData] = useState({});
  const [cardUrl, setCardUrl] = useState(''); 

  const createCard = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const message = e.target.message.value;
    const urlSlug = e.target.url.value;

    const path = `/card/${urlSlug}`; 

    setCardData({ title, message, urlSlug, image: `${process.env.PUBLIC_URL}/${image}` });
    setCardUrl(path); 
    setCardCreated(true);
  };

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt={name} />
      </div>

      <div>
        <h1>{name}</h1>
      </div>

      <div>
        <h2>Create a card</h2>
        <form onSubmit={createCard}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <label htmlFor="url">Desired URL Slug:</label>
          <input type="text" id="url" name="url" required />
          <button type="submit">Create</button>
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
