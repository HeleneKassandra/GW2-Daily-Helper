import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import styles from '../../styles/LocationCard.module.css';
import getIcon from "../../lib/getIcon";

export default function LocationCard({ location }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Image src="/img/waypointIcon.png" aria-hidden="true" alt="waypoint icon from guild wars 2" height="30" width="30" />
                }
                action={
                    <IconButton aria-label="Copy waypoint code">
                        <ContentCopyIcon />
                    </IconButton>
                }
                title={location.wp_name}
                titleTypographyProps={{ fontWeight: 'bold' }}
                subheader={location.wp_code}
            />
            <CardMedia
                component="img"
                alt="Screenshot from the Guild Wars 2 map, showing a dotted line from waypoint to the gathering location"
                image={location.imageUrl}
            />
            <CardContent>
                <ul className={styles.list}>
                    <li>{getIcon('Map')}{location.map_name} in {location.area}</li>
                    <li>{getIcon(location.type)} {location.gathering_item}</li>
                </ul>
            </CardContent>
        </Card>
    )
}