import React from 'react';
import './ActiveIncidentsBar.css';

const Badge = ({ label, count, type }) => (
  <div className={`incident-badge incident-badge-${type}`}>
    <span className="incident-badge-label">{label}</span>
    <span className="incident-badge-count">{count}</span>
  </div>
);

const ActiveIncidentsBar = () => {
  const dataNJ = { P1: 23, P2: 18, P3: 56, P4: 123 };
  const dataNY = { P1: 23, P2: 18, P3: 56, P4: 123 };

  return (
    <div className="active-incidents-wrapper">
      <div className="active-incidents-bar">
        <div className="incidents-header">
          Active Incidents
        </div>
        
        <div className="regions-container">
          <div className="region-block">
            <span className="region-name">NJ</span>
            <Badge label="P1" count={dataNJ.P1} type="p1" />
            <Badge label="P2" count={dataNJ.P2} type="p2" />
            <Badge label="P3" count={dataNJ.P3} type="p3" />
            <Badge label="P4" count={dataNJ.P4} type="p4" />
          </div>
          
          <div className="incidents-divider"></div>
          
          <div className="region-block">
            <span className="region-name">NY</span>
            <Badge label="P1" count={dataNY.P1} type="p1" />
            <Badge label="P2" count={dataNY.P2} type="p2" />
            <Badge label="P3" count={dataNY.P3} type="p3" />
            <Badge label="P4" count={dataNY.P4} type="p4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveIncidentsBar;
