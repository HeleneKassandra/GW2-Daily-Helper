// Contains all the Daily Items within a category 
import DrawerListItem from "./Drawer/DrawerListItem"
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

export default function DailySelectContainer({ categoryName, dailies }) {
    return (
        <List
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    {categoryName}
                </ListSubheader>
            }
        >
            {dailies.map((daily) =>
                <DrawerListItem name={daily.name} />
            )}
        </List>

    )
}