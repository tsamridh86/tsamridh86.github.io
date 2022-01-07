import React from 'react'
import HeaderSectionContainer  from './components/HeaderSection/HeaderSectionContainer';
import SelectionSectionContainer  from './components/SelectionSection/SelectionSectionContainer';
import MainBodyContainer from './components/MainSection/MainBodyContainer';

const App = () =>  {
  return (
    <>
    <HeaderSectionContainer />
    <SelectionSectionContainer />
    <MainBodyContainer />
    </> 
  );
}

export default App;
