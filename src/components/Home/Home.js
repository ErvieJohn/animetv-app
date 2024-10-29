import React, { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { GOGOANIME } from '../../Config';
import Loading from '../Loading/Loading';
import AnimeSwiper from '../AnimeSwiper/AnimeSwiper';

function Home() {
    const [topAiring, setTopAiring] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        // Using the example query "demon", and looking at the 2nd page of results.
        setLoading(true);

        const fetchData = async () => {
            try {
                const data = await axios.get(`${GOGOANIME + "/top-airing"}`);
                // console.log(data);

                let response = data.data.results;       
                const promises = response.map(async (element, index)=>{
                    try {
                        const info = await axios.get(`${GOGOANIME + "/info/" + element.id}`);
                        //console.log("info: ", info);
                        // Create the enriched item after getting the second response
                        return {
                            ...element,
                            description: `${info.data.description}`, // Customize this value as needed
                        };
                    } catch (err) {
                        console.log(err.message);
                    }
                });

                // Wait for all promises to resolve
                const results = await Promise.all(promises);
                
                // Filter out any null values from the results
                const validResults = results.filter(item => item !== null);
                // console.log(validResults);
                // Update the state with the enriched items
                setTopAiring(validResults);

            } catch (err) {
                console.log(err.message);
                return null; // Return null for error cases
            }

            setLoading(false);
        };

        fetchData();
      
        
    }, []);

  return (
    <>
    {loading ? (<Loading/>):(
        <div>
            <AnimeSwiper topAiring={topAiring}/>
        </div>
    )}
    </>
    
    
  )
}

export default Home