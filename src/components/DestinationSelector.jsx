import React from 'react';

const DestinationSelector = ({ tours, selectedDestination, onSelect }) => {
    const uniqueDestinations = ['All Destinations', ...new Set(tours.map(tour => tour.name))];

    const handleChange = (e) => {
        onSelect(e.target.value);
    }           

    return (    
        <div>
            <label htmlFor="destination-select">Choose destination:</label>
            <select id="destination-select" value={selectedDestination} onChange={handleChange}>
                {uniqueDestinations.map((destination, index) => (
                    <option key={index} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;

