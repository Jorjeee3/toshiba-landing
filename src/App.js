import { useState } from 'react'

import Header from "./components/header/Header";
import Hero from './containers/hero/Hero';
import WorldNetwork from './containers/worldNetwork/WorldNetwork';
import HowItWorks from './containers/howItWorks/HowItWorks';
import PlayToEarn from './containers/playToEarn/PlayToEarn';
import Invest from './containers/invest/Invest';
import Team from './containers/team/Team';
import PartnersInvestors from './containers/partnersInvestors/PartnersInvestors';
import FQA from './containers/faq/FQA';
import EconomicSection from './containers/economicSection/EconomicSection';
import Community from './containers/community/Community';

import './styles/global.scss'

function App() {
  const [active, setActive] = useState(false)

  function handleChangeMenu() {
    setActive(!active)
  }

  return (
    <div className={`App ${active ? 'active' : '' }`}>
      <Header active={active} click={handleChangeMenu} />
      <Hero />
      <div className={`burger-background ${active ? 'active' : '' }`} ></div>
      <WorldNetwork />
      <HowItWorks />
      <PlayToEarn />
      <Invest />
      <Team />
      <PartnersInvestors />
      <EconomicSection />
      <FQA />
      <Community />
    </div>
  );
}

export default App;

// eslint-disable-next-line 
{/* <Economic zIndex='3' startPoint='1' endPoint='19' color='black' />
<Economic zIndex='2' startPoint='1' endPoint='5' rotate='-69' color='green' />
<Economic zIndex='2' startPoint='1' endPoint='30' rotate='-88'color='yellow'  />
<Economic zIndex='7' startPoint='1' endPoint='10' rotate='-196' color='red' />
<Economic zIndex='6' startPoint='1' endPoint='15' rotate='-232'color='blue'  />
<Economic zIndex='5' startPoint='1' endPoint='6' rotate='-287' color='gray' />
<Economic zIndex='4' startPoint='1' endPoint='15' rotate='-306'color='purple'  /> */}