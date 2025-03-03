import React from 'react';
import styled from 'styled-components';
import { IconButton, Slider, Typography } from '@mui/material';
import { PlayArrow, SkipNext, SkipPrevious, VolumeUp } from '@mui/icons-material';

const NowPlayingContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: #181818;
  border-top: 1px solid #282828;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 8px;
    height: 80px;
  }
`;

const SongInfo = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  
  @media (max-width: 768px) {
    width: 30%;
    .MuiTypography-root {
      font-size: 0.8rem;
    }
  }
`;

const AlbumArt = styled.div`
  width: 56px;
  height: 56px;
  background-color: #282828;
  margin-right: 16px;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  
  @media (max-width: 768px) {
    width: 50%;
  }
  
  .MuiIconButton-root {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    width: 20%;
  }
  
  .MuiSlider-root {
    transition: all 0.2s ease-in-out;
    &:hover {
      .MuiSlider-thumb {
        box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.16);
      }
    }
  }
`;

const NowPlaying = () => {
  return (
    <NowPlayingContainer>
      <SongInfo>
        <AlbumArt />
        <div>
          <Typography variant="subtitle1" sx={{ color: '#fff' }}>Song Title</Typography>
          <Typography variant="caption" sx={{ color: '#b3b3b3' }}>Artist Name</Typography>
        </div>
      </SongInfo>

      <Controls>
        <ControlButtons>
          <IconButton size="small" sx={{ color: '#b3b3b3' }}>
            <SkipPrevious />
          </IconButton>
          <IconButton size="large" sx={{ color: '#fff' }}>
            <PlayArrow />
          </IconButton>
          <IconButton size="small" sx={{ color: '#b3b3b3' }}>
            <SkipNext />
          </IconButton>
        </ControlButtons>
        <Slider
          size="small"
          defaultValue={0}
          sx={{
            width: '100%',
            color: '#fff',
            '& .MuiSlider-rail': { backgroundColor: '#404040' },
          }}
        />
      </Controls>

      <VolumeControl>
        <VolumeUp sx={{ color: '#b3b3b3', marginRight: 2 }} />
        <Slider
          size="small"
          defaultValue={70}
          sx={{
            width: 100,
            color: '#fff',
            '& .MuiSlider-rail': { backgroundColor: '#404040' },
          }}
        />
      </VolumeControl>
    </NowPlayingContainer>
  );
};

export default NowPlaying;