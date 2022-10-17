// Contains all the Daily Items within a category 
import DrawerListItem from "./DrawerListItem"
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';


export default function DrawerListContainer({ categoryName, dailies }) {
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
                            <DrawerListItem name={daily.name} achievementID={daily.achievement_id} />
                        )}
                    </List>
                </nav>
            }
        </>
    )
}