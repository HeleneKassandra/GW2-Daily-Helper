import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Image from 'next/future/image';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function LocationCard({ location }) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    /* This opens all the accordions, rewrite to only work on one */
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
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
                alt=""
                image={location.imageUrl}
            />
            <CardActions>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="See more info"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <dl>
                        <dt>Mapname</dt>
                        <dd>{location.map_name}</dd>
                        <dt>Area</dt>
                        <dd>{location.area}</dd>
                        <dt>Type</dt>
                        <dd>{location.type}</dd>
                        <dt>Item</dt>
                        <dd>{location.gathering_item}</dd>
                    </dl>
                </CardContent>
            </Collapse>
        </Card>
    )
}