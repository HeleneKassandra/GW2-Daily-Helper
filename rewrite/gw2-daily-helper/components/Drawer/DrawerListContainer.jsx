// Contains all the Daily Items within a category 
import DrawerListItem from "./DrawerListItem"
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';


export default function DrawerListContainer({ categoryName, dailies, setSelectedListItem  }) {

    const handleListItemClick = (achievementId) => {
        setSelectedListItem(dailies.find(daily => daily.achievement_id === achievementId ));
    };

    return (
        <>
            {
                dailies.length > 0 &&
                <nav aria-label={`Dailies for ${categoryName}`}>                    
                    <List
                        subheader={
                            <ListSubheader aria-hidden="true">
                                {categoryName}
                            </ListSubheader>
                        }
                    >
                        {dailies.map((daily) =>
                            <DrawerListItem 
                                key={daily.achievement_id} 
                                name={daily.name}
                                achievementID={daily.achievement_id} 
                                handleListItemClick={handleListItemClick}
                            />
                        )}
                    </List>
                </nav>
            }
        </>
    )
}