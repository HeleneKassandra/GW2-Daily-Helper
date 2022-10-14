/* Clickable List button for displaying a daily option */ 

import Image from 'next/future/image'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function DailyItem({ name }) {
    return (
        <ListItem key={name} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <Image src="/img/Daily_Achievement.png" aria-hidden="true"  alt="The achievement icon from GW2" height="30" width="30" />
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>

    )
}