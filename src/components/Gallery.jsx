import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, selectedDestination, onRemove, onRefresh }) => {
  const filteredTours = selectedDestination === 'All Destinations' //Filters the tours based on the destination, All Destinations shows all tours and specific selected tours are shown
    ? tours
    : tours.filter((tour) => tour.name === selectedDestination);


    if (filteredTours.length === 0) {
      return (
          <div>
              <p>No available tours for the selected destination. Select Refresh to reload tours.</p>
              <button onClick={() => {
                  console.log('Refresh button clicked'); //Utilized Copilot for help with the clicking of the onRefresh button
                  onRefresh(); //Calling onRefresh    
              }}>
                  Refresh
              </button>
          </div>
      );
  }

//Renders the list of filtered tours from TourCard  
  return (
    <section className="gallery">
      {filteredTours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Gallery;




