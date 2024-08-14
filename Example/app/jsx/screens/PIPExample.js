import React, {useRef} from 'react';
import Player from '../components/Player';
import PlayerContainer from '../components/PlayerContainer';

export default () => {
  const playerRef = useRef([]);

  const renderPlayer = () => {
    return (
      <Player
        ref={playerRef}
        style={{flex: 1}}
        config={{
          autostart: true,
          pipEnabled: true,
          styling: {
            colors: {},
          },
          title: 'Single Inline Linear Preroll',
          playlist: [
            {
              title: 'Single Inline Linear Preroll',
              file: 'https://content.bitsontherun.com/videos/q1fx20VZ-52qL9xLP.mp4',
            },
          ],
        }}
      />
    );
  };

  return (
    <PlayerContainer
      children={renderPlayer()}
      text="Welcome to jwplayer-react-native"
    />
  );
};
