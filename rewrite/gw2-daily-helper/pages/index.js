import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import DrawerContainer from '../components/Drawer/DrawerContainer';
import DrawerListContainer from '../components/Drawer/DrawerListContainer';
import { Divider } from '@mui/material';
import DaySelector from '../components/DaySelector';
import { getDailyData } from '../lib/fetchData';
import MenuBtn from '../components/MenuBtn/MenuBtn';
import ResultContainer from '../components/ResultContainer/ResultContainer';

export default function Home({ dailiesForToday, dailiesForTomorrow }) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleDrawerToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const [isShowingToday, setIsShowingToday] = useState(0);
  const [dailiesForSelectedDay, setDailiesForSelectedDay] = useState(isShowingToday ? dailiesForToday : dailiesForTomorrow);
  const [selectedDaily, setSelectedDaily] = useState(null); // The selected Daily from the drawer menu

  useEffect(() => {
    setDailiesForSelectedDay(isShowingToday ? dailiesForToday : dailiesForTomorrow);
  }, [isShowingToday])

  return (
    <div className={styles.wrapper}>
   
        <DrawerContainer isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={handleDrawerToggle}>
          <DaySelector isShowingToday={isShowingToday} setIsShowingToday={setIsShowingToday} />
          <DrawerListContainer
            categoryName='PvE'
            dailies={dailiesForSelectedDay.filter(daily => daily.type === ('Gatherer' || 'Jumping Puzzle' || 'Minidungeon'))}
            setSelectedListItem={setSelectedDaily}
          />
          <Divider />
          <DrawerListContainer
            categoryName='Fractals'
            dailies={dailiesForSelectedDay.filter(daily => daily.type === 'Fractal' && (daily.name.includes("Tier 4") || daily.name.includes("Recommended")))}
            setSelectedListItem={setSelectedDaily}
          />
          <Divider />
          <DrawerListContainer
            categoryName='WvW'
            dailies={dailiesForSelectedDay.filter(daily => daily.type === 'WvW')}
            setSelectedListItem={setSelectedDaily}
          />
        </DrawerContainer>
      <main className={styles.main}>
        <h1>
         Select Daily
        </h1>
        {selectedDaily && <ResultContainer results={selectedDaily} />}
    {console.log(selectedDaily)}
        <MenuBtn isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={handleDrawerToggle} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const dailiesForToday = await getDailyData(false);
  const dailiesForTomorrow = await getDailyData(true);
  return { props: { dailiesForToday, dailiesForTomorrow } }
}