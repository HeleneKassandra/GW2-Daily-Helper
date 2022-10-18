/* All the content to be shown in the Drawer */
import DrawerListContainer from "./DrawerListContainer"
import { Divider } from "@mui/material"

export default function DrawerContent({ dailies, daySelector, children }) {
    return (
        <>
            {daySelector}
            <DrawerListContainer categoryName='PvE' dailies={dailies.filter(daily => daily.type === ('Gatherer' || 'Jumping Puzzle' || 'Minidungeon'))} />
            <Divider />
            <DrawerListContainer categoryName='Fractals' dailies={dailies.filter(daily => daily.type === 'Fractal' && (daily.name.includes("Tier 4") || daily.name.includes("Recommended")))} />
            <Divider />
            <DrawerListContainer categoryName='WvW' dailies={dailies.filter(daily => daily.type === 'WvW')} />
        </>
    )
}