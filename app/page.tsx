import Header from './components/Header';
import Galerie from './components/Galerie';
import VillaInfos from './components/VillaInfos';
import Reservation from './components/Reservation';

export default function Home() {
  return (
    <>
      <Header />
      <Galerie />
      <VillaInfos 
      surface={120}
      bedrooms={6}
      bathrooms={3}
      has_pool={true}
      has_kitchen={true}
      />
      <Reservation />
    </>
  )
}
