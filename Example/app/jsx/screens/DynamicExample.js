import React, {useState} from 'react';
import {Button, View} from 'react-native';
import Player from '../components/Player';

export default () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show video" onPress={handleToggleVideo}>
        Toggle Video
      </Button>
      <View style={{ height: 300 }}>
        <Player
          config={{
            playlist: [
              {
                file: 'https://cdn.jwplayer.com/videos/CXz339Xh-sJF8m8CA.mp4',
                image: 'https://cdn.jwplayer.com/thumbs/CXz339Xh-720.jpg',
              },
            ],
          }}
        />
      </View>
      {showVideo && (
        <View style={{ height: 300 }}>
          <Player
            config={{
              playlist: [
                {
                  file: 'https://cdn.jwplayer.com/videos/CXz339Xh-sJF8m8CA.mp4',
                  image: 'https://cdn.jwplayer.com/thumbs/CXz339Xh-720.jpg',
                },
              ],
            }}
          />
        </View>
      )}
    </View>
  );
};
