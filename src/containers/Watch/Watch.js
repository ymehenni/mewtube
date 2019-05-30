import React from 'react';
import './Watch.scss';
import Video from '../../components/Video/Video';
import VideoPreview from '../../components/VideoPreview/VideoPreview';

export default class Watch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <VideoPreview horizontal={true} />

        <Video id="-7fuHEEmEjs" />
      </React.Fragment>
    );
  }
}
