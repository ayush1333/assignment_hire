import { useState, useEffect } from 'react';
import axios from 'axios';

function useHoldingsApi() {
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://canopy-frontend-task.vercel.app/api/holdings'
        );
        const allHoldings = response.data.payload;
        setHoldings(allHoldings);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return holdings;
}

export default useHoldingsApi;
