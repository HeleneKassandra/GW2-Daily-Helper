import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function LocationCard({location}){
    return (
        <Card>
            <CardMedia
                component="img"
                alt=""
                image={location.imageUrl}
            />
        </Card>
    )
}