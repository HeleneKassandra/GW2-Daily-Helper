import React from "react";
import styles from './ResultContainer.module.css';
import LocationCard from "../LocationCard/LocationCard";
export default function ResultContainer({results}){
    {console.log(results)}
    return (
        <div className={styles.grid}>
            {results.location.map((result, index) => 
                <LocationCard key={`${result._id}-location-${index}`} location={result} />
            )}
        </div>
    )
}