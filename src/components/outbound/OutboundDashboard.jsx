import React from 'react';
import JobSummary from './JobSummary';
import SlaChart from './SlaChart';
import ServiceList from './ServiceList';
import './OutboundDashboard.css';

const OutboundDashboard = () => {
    return (
        <div className="outbound-dashboard">
            <div className="outbound-outer-card">
                <div className="outbound-header">
                    <div className="header-left">
                        <h1>Outbound</h1>
                        <p>Any help info for cluster can be specified here</p>
                    </div>
                    <div className="header-right">
                        <div className="alert-badge red">
                            <span className="alert-icon">♦</span> 1
                        </div>
                        <div className="alert-badge yellow">
                            <span className="alert-icon">⚠</span> 1
                        </div>
                        <span className="dashboard-collapse">—</span>
                    </div>
                </div>

                <div className="dashboard-main">
                    <JobSummary />
                    <SlaChart />
                    <ServiceList />
                </div>
            </div>
        </div>
    );
};

export default OutboundDashboard;
