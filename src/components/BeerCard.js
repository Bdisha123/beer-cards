// src/components/BeerCard.js
import React from 'react';
import './BeerCard.css';

const BeerCard = ({ beer }) => {
    let x = beer.rating.average;
    let y = (Math.round(x * 100) / 100).toFixed(2);
    return (
        <div className="beer-card">
            <div className="beer-image">
                <img src={beer.image} alt={beer.name} />
            </div>

            <h2>{beer.name}</h2>
            <h3>price {beer.price}</h3>
            <p>{y} stars</p>
            <p>{beer.rating.reviews} reviews</p>

        </div>
    );
};

export default BeerCard;
