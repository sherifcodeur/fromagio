import React from 'react';
import CheeseCard from './CheeseCard';
import './CheeseList.css';

const CheeseList = ({ cheeses }) => {
    return (
        <div className="cheese-grid">
            {cheeses.map((cheese, index) => (
                <CheeseCard key={index} cheese={cheese} />
            ))}
        </div>
    );
};

export default CheeseList;
