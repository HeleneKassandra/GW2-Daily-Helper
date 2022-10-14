/* All the content to be shown in the Drawer */
import DailySelectContainer from "../DailySelectContainer"
import { Divider } from "@mui/material"

export default function DrawerContent({ dailies }) {
    return (
        <>
            <DailySelectContainer categoryName='PvE' dailies={dailies} />
            <Divider />
            <DailySelectContainer categoryName='Fractals' dailies={dailies} />
            <Divider />
            <DailySelectContainer categoryName='WvW' dailies={dailies} />
        </>
    )
}