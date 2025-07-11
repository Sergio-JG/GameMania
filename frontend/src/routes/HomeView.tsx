import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import GameList from '../components/GameList';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Carousel from '../components/GamesCarrousel';

function Home() {

  const navigate = useNavigate();

  useEffect(() => {

    const storedIdLocal = localStorage.getItem('userId');
    const storedIdSession = sessionStorage.getItem('userId');
    const storedRoleLocal = localStorage.getItem('role');
    const storedRoleSession = sessionStorage.getItem('role');

    if ((storedIdLocal || storedIdSession) && (storedRoleLocal === 'Admin' || storedRoleSession === 'Admin')) {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main className="bg-neutral-800">
        <Grid item xs={12}>
          <Carousel></Carousel>
        </Grid>
        <GameList />
      </main>
      <Footer />
    </>
  );
}

export default Home;
