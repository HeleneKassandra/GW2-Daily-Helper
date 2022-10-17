import { useState } from 'react';
import styles from '../styles/Home.module.css'
import DrawerContainer from '../components/Drawer/DrawerContainer'
import { getDailyData } from '../lib/fetchData'
import MenuBtn from '../components/MenuBtn/MenuBtn'
export default function Home({data}) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleDrawerToggle = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <DrawerContainer dailies={data} isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={handleDrawerToggle} />
        {console.log(data)}

        <MenuBtn isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={handleDrawerToggle}/>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const data = await getDailyData(false);
  return {props: {data}}
}