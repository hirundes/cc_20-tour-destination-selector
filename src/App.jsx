import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';

const App = () => {
    const [tours, setTours] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState('All Destinations');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch tours');
                }
                const data = await response.json();
                setTours(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    const removeTour = (id) => {
      setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
    };
  
    return (
        <main>
            <h1>Tour Comparison</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <>
                    <DestinationSelector
                        tours={tours}
                        selectedDestination={selectedDestination}
                        onSelect={setSelectedDestination}
                    />
                    <Gallery
                        tours={tours}
                        selectedDestination={selectedDestination}
                        onRemove={removeTour}
                    />
                </>
            )}
        </main>
    );
};

export default App;