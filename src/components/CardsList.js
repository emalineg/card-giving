import React, { useState, useEffect } from 'react';
import SpecificCard from "./SpecificCard";
import "./CardsList.css";
function CardsList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://octopus-app-xwqtk.ondigitalocean.app/api/cards')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setCards(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 


  const cardsList = cards.map((card, index) => (
    <SpecificCard
      key={card.id || index} 
      id={card.id}
      name={card.name}
      image={card.image}
    />
  ));

  return (
    <div className="CardsList">
      {cardsList}
    </div>
  );
}

export default CardsList;
