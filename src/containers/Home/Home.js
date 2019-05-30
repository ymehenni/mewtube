import React from 'react';
import './Home.scss';
import VideoGrid from '../../components/VideoGrid/VideoGrid';
import SideBar from '../SideBar/SideBar';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <div className="home">
          <VideoGrid title="Trending" />
          <VideoGrid title="Autos & Vehicles" hideDivider={true} />
        </div>
      </React.Fragment>
    );
  }
}
