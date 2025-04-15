import React, { useEffect, useState } from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, selectedDestination, onRemove }) => {
  const filteredTours = selectedDestination === 'All Destinations'
    ? tours
    : tours.filter((tour) => tour.name === selectedDestination);

    if (filteredTours.length === 0) {
        return <p>No available tours for the selected destination.</p>;
        }

  return (
    <section className="gallery">
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;