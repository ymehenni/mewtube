import React from 'react';
import './Watch.scss';
import Video from '../../components/Video/Video';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';

export default class Watch extends React.Component {
  render() {
    return (
      <React.Fragment>
        <RelatedVideos />
        <Video id="-7fuHEEmEjs" />
      </React.Fragment>
    );
  }
}
