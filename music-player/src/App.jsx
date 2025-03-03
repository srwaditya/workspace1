import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import NowPlaying from './components/NowPlaying/NowPlaying';

const MainContainer = styled.div`
  background-color: #121212;
  min-height: 100vh;
  padding-left: 240px;
  padding-bottom: 90px;
`;

const ContentArea = styled.div`
  padding: 24px;
`;

function App() {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <ContentArea>
          <h1 style={{ color: '#fff' }}>Your Music Library</h1>
        </ContentArea>
      </MainContainer>
      <NowPlaying />
    </>
  );
}

export default App;
