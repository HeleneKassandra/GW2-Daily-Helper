/* All the content to be shown in the Drawer */
import { useState } from "react";
import DrawerListContainer from "./DrawerListContainer"
import { Divider } from "@mui/material"
import DaySelector from "../DaySelector";


export default function DrawerContent({ dailies }) {
    const [isShowingToday, setIsShowingToday] = useState(0);
    const handleChange = (event, newValue) => {
        setIsShowingToday(newValue);
    };
    return (
        <>
            <DaySelector isShowingToday={isShowingToday} toggleDay={handleChange} />
            <DrawerListContainer categoryName='PvE' dailies={dailies.filter(daily => daily.type === ('Gatherer' || 'Jumping Puzzle' || 'Minidungeon'))} />
            <Divider />
            <DrawerListContainer categoryName='Fractals' dailies={dailies.filter(daily => daily.type === 'Fractal' && (daily.name.includes("Tier 4") || daily.name.includes("Recommended")))} />
            <Divider />
            <DrawerListContainer categoryName='WvW' dailies={dailies.filter(daily => daily.type === 'WvW')} />
        </>
    )
}