import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './SpecificCardDetails.css';

function SpecificCardDetails(props) {
  const { id } = useParams();
  const cardId = parseInt(id, 10);
  const [card, setCard] = useState(null);
  const [cardCreated, setCardCreated] = useState(false);
  const [cardUrl, setCardUrl] = useState('');
  const [isLoadingCard, setIsLoadingCard] = useState(true); 
  const [isCreatingCard, setIsCreatingCard] = useState(false); 

  useEffect(() => {
    fetch(`https://octopus-app-xwqtk.ondigitalocean.app/api/cards/${cardId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCard(data);
        setIsLoadingCard(false); 
      })
      .catch(error => {
        console.error('Error fetching card:', error);
        setIsLoadingCard(false); 
      });
  }, [cardId]);

  const createCard = (e) => {
    e.preventDefault();
    setIsCreatingCard(true);
    const title = e.target.title.value;
    const message = e.target.message.value;
    const urlSlug = e.target.url.value;

    const newCardData = { title, message, urlSlug, image: card.image };

    fetch('https://octopus-app-xwqtk.ondigitalocean.app/api/gifted-cards', {
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
      setCardUrl(`/gifted-card/${urlSlug}`);
      setCardCreated(true);
      setIsCreatingCard(false); 
    })
    .catch(error => {
      console.error('Error creating card:', error);
      setIsCreatingCard(false); 
    });
  };

  if (isLoadingCard) {
    return <div>Loading card details...</div>; 
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Get the stamp element and sound element
    const stamp = document.querySelector('.stamp');
    const sound = document.getElementById('stamp-sound');
  
    // Play the sound when the animation starts
    stamp.addEventListener('animationstart', function() {
      sound.play();
    });
  });
  

  return (
    <div className="SpecificCardDetails">
      {cardCreated ? (
        <div className="card-created-info">
          <svg fill="#000000" height="200px" class="stamp" width="200px" viewBox="0 0 170.024 170.024">
            <g id="SVGRepo_iconCarrier">
                <path d="M167.524,170.024h-9.758c-1.381,0-2.5-1.119-2.5-2.5c0-4.223-3.436-7.658-7.658-7.658s-7.657,3.436-7.657,7.658 c0,1.381-1.119,2.5-2.5,2.5H126.98c-1.381,0-2.5-1.119-2.5-2.5c0-4.223-3.436-7.658-7.658-7.658s-7.657,3.436-7.657,7.658 c0,1.381-1.119,2.5-2.5,2.5H96.194c-1.381,0-2.5-1.119-2.5-2.5c0-4.223-3.435-7.658-7.657-7.658s-7.658,3.436-7.658,7.658 c0,1.381-1.119,2.5-2.5,2.5h-10.47c-1.381,0-2.5-1.119-2.5-2.5c0-4.223-3.436-7.658-7.658-7.658s-7.657,3.436-7.657,7.658 c0,1.381-1.119,2.5-2.5,2.5H34.623c-1.381,0-2.5-1.119-2.5-2.5c0-4.223-3.435-7.658-7.657-7.658s-7.658,3.436-7.658,7.658 c0,1.381-1.119,2.5-2.5,2.5H2.5c-1.381,0-2.5-1.119-2.5-2.5v-10.783c0-1.381,1.119-2.5,2.5-2.5c4.223,0,7.657-3.435,7.657-7.657 s-3.435-7.658-7.657-7.658c-1.381,0-2.5-1.119-2.5-2.5v-10.47c0-1.381,1.119-2.5,2.5-2.5c4.223,0,7.657-3.436,7.657-7.658 s-3.435-7.657-7.657-7.657c-1.381,0-2.5-1.119-2.5-2.5V95.17c0-1.381,1.119-2.5,2.5-2.5c4.223,0,7.657-3.436,7.657-7.658 S6.723,77.354,2.5,77.354c-1.381,0-2.5-1.119-2.5-2.5V64.384c0-1.381,1.119-2.5,2.5-2.5c4.223,0,7.657-3.435,7.657-7.657 S6.723,46.568,2.5,46.568c-1.381,0-2.5-1.119-2.5-2.5v-10.47c0-1.381,1.119-2.5,2.5-2.5c4.223,0,7.657-3.436,7.657-7.658 S6.723,15.783,2.5,15.783c-1.381,0-2.5-1.119-2.5-2.5V2.5C0,1.119,1.12,0,2.5,0h11.807c1.381,0,2.5,1.119,2.5,2.5 c0,4.223,3.436,7.658,7.658,7.658s7.657-3.436,7.657-7.658c0-1.381,1.119-2.5,2.5-2.5h10.471c1.381,0,2.5,1.119,2.5,2.5 c0,4.223,3.435,7.658,7.657,7.658s7.658-3.436,7.658-7.658c0-1.381,1.119-2.5,2.5-2.5h10.47c1.381,0,2.5,1.119,2.5,2.5 c0,4.223,3.436,7.658,7.658,7.658s7.657-3.436,7.657-7.658c0-1.381,1.119-2.5,2.5-2.5h10.471c1.381,0,2.5,1.119,2.5,2.5 c0,4.223,3.435,7.658,7.657,7.658s7.658-3.436,7.658-7.658c0-1.381,1.119-2.5,2.5-2.5h10.471c1.381,0,2.5,1.119,2.5,2.5 c0,4.223,3.435,7.658,7.657,7.658s7.658-3.436,7.658-7.658c0-1.381,1.119-2.5,2.5-2.5h9.758c1.381,0,2.5,1.119,2.5,2.5v10.783 c0,1.381-1.119,2.5-2.5,2.5c-4.223,0-7.657,3.435-7.657,7.657s3.435,7.658,7.657,7.658c1.381,0,2.5,1.119,2.5,2.5v10.47 c0,1.381-1.119,2.5-2.5,2.5c-4.223,0-7.657,3.436-7.657,7.658s3.435,7.657,7.657,7.657c1.381,0,2.5,1.119,2.5,2.5v10.471 c0,1.381-1.119,2.5-2.5,2.5c-4.223,0-7.657,3.435-7.657,7.657s3.435,7.658,7.657,7.658c1.381,0,2.5,1.119,2.5,2.5v10.471 c0,1.381-1.119,2.5-2.5,2.5c-4.223,0-7.657,3.435-7.657,7.657s3.435,7.658,7.657,7.658c1.381,0,2.5,1.119,2.5,2.5v10.47 c0,1.381-1.119,2.5-2.5,2.5c-4.223,0-7.657,3.436-7.657,7.658s3.435,7.657,7.657,7.657c1.381,0,2.5,1.119,2.5,2.5v10.783 C170.024,168.905,168.905,170.024,167.524,170.024z M160.018,165.024h5.006v-6.031c-5.786-1.164-10.157-6.286-10.157-12.409 c0-6.124,4.371-11.246,10.157-12.41v-5.966c-5.786-1.164-10.157-6.286-10.157-12.41c0-6.123,4.371-11.245,10.157-12.409v-5.967 c-5.786-1.164-10.157-6.286-10.157-12.41c0-6.123,4.371-11.245,10.157-12.409v-5.967c-5.786-1.164-10.157-6.286-10.157-12.409 c0-6.124,4.371-11.246,10.157-12.41v-5.966c-5.786-1.164-10.157-6.286-10.157-12.41c0-6.123,4.371-11.245,10.157-12.409V5h-5.006 c-1.163,5.787-6.286,10.158-12.41,10.158S136.362,10.787,135.199,5h-5.967c-1.163,5.787-6.286,10.158-12.41,10.158 S105.576,10.787,104.413,5h-5.967c-1.163,5.787-6.285,10.158-12.409,10.158S74.79,10.787,73.626,5h-5.966 c-1.163,5.787-6.286,10.158-12.41,10.158S44.004,10.787,42.841,5h-5.967c-1.163,5.787-6.285,10.158-12.409,10.158 S13.218,10.787,12.055,5H5v6.031c5.786,1.164,10.157,6.286,10.157,12.409c0,6.124-4.371,11.246-10.157,12.41v5.966 c5.786,1.164,10.157,6.286,10.157,12.41c0,6.123-4.371,11.245-10.157,12.409v5.967c5.786,1.164,10.157,6.286,10.157,12.409 c0,6.124-4.371,11.246-10.157,12.41v5.967c5.786,1.164,10.157,6.286,10.157,12.409c0,6.124-4.371,11.246-10.157,12.41v5.966 c5.786,1.164,10.157,6.286,10.157,12.41c0,6.123-4.371,11.245-10.157,12.409v6.031h7.055c1.163-5.787,6.286-10.158,12.41-10.158 s11.246,4.371,12.409,10.158h5.967c1.163-5.787,6.285-10.158,12.409-10.158s11.247,4.371,12.41,10.158h5.966 c1.163-5.787,6.286-10.158,12.41-10.158s11.246,4.371,12.409,10.158h5.967c1.163-5.787,6.285-10.158,12.409-10.158 s11.247,4.371,12.41,10.158h5.967c1.163-5.787,6.285-10.158,12.409-10.158S158.855,159.237,160.018,165.024z M146.583,149.084 H23.441c-1.381,0-2.5-1.119-2.5-2.5V23.44c0-1.381,1.119-2.5,2.5-2.5h123.143c1.381,0,2.5,1.119,2.5,2.5v123.144 C149.083,147.965,147.964,149.084,146.583,149.084z M25.941,144.084h118.143V25.94H25.941V144.084z"></path>
            </g>
          </svg>
          <audio id="stamp-sound" src="/../../public/stamp.mp3" preload="auto"></audio>

          <h2>Card Created Successfully!</h2>
          <p>Here is your card URL: <Link to={cardUrl}>https://cardstamp.vercel.app/#{cardUrl}</Link></p>
        </div>

      ) : (
        <div className="content-wrapper">
          <div className="card-image">
            <img src={`${process.env.PUBLIC_URL}/${card.image}`} alt={card.name} />
          </div>

          <div className="form-container">
            <form onSubmit={createCard} className="create-card-form">
              <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="url">Desired URL Slug:</label>
                <input type="text" id="url" name="url" required />
              </div>
              <button type="submit" className="submit-btn" disabled={isCreatingCard}>
                {isCreatingCard ? 'Creating...' : 'Create'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpecificCardDetails;