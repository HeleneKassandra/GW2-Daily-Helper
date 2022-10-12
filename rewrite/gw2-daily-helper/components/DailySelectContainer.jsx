// Contains all the Daily Items within a category 
import DailyItem from "./DailyItem"

export default function DailySelectContainer({categoryName, dailies}){
    return(
        <div>
            <h2>{categoryName}</h2>
            {dailies.map(daily =><DailyItem name={daily.name}/>)}
        </div>
    )
}