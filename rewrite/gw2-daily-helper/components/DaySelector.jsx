// The component that choses between today or tomorrow
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export default function DaySelector({ isShowingToday, setIsShowingToday }) {
    
    const handletTabChange = (event, newValue) => {
        setIsShowingToday(newValue);
    };
    return(
        <Tabs value={isShowingToday} onChange={handletTabChange} aria-label="See dailies for" centered>
            <Tab label="Today" />
            <Tab label="Tomorrow" />
        </Tabs>
    )
}