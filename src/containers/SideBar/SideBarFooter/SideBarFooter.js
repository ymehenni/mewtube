import React from 'react';
import './SideBarFooter.scss';

export default function SideBarFooter() {
  return (
    <React.Fragment>
      <div className="footer-block">
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>
      <div className="footer-block">
        <div>Terms & Conditions</div>
        <div>Privacy Policy</div>
        <div>Test new features</div>
      </div>
      <div className="footer-block">
        <div>All prices include VAT</div>
      </div>
    </React.Fragment>
  );
}
