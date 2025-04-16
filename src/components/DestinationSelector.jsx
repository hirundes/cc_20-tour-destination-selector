import React from 'react';

const DestinationSelector = ({ tours, selectedDestination, onSelect }) => { //Creation of the different desinations in the dropdown menu
    const uniqueDestinations = ['All Destinations', ...new Set(tours.map(tour => tour.name))]; //Creation of "All Destinations"  

    const handleChange = (e) => { //Change event when a different new destination is selected 
        onSelect(e.target.value);
    }           

    return (    //Drop down menu for selecting the destination, and rendering of each destination in the menu 
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

