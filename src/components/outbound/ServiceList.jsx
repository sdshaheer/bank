import React from 'react';

const ServiceItem = ({ name, checked }) => (
    <div className="service-item">
        <div className="service-item-left">
            <span>{name}</span>
        </div>
        <span className={`status-check ${checked ? 'filled' : ''}`}></span>
    </div>
);

const ServiceList = () => {
    const column1 = [
        { name: 'External Service', checked: true },
        { name: 'Schema Browser', checked: true },
        { name: 'Report Center', checked: true },
    ];

    const column2 = [
        { name: 'EEMS Service', checked: true },
        { name: 'Configuration API', checked: true },
        { name: 'Query Enrichment REST', checked: true },
    ];

    const column3 = [
        { name: 'CitiHAWK UI (COB)', checked: true },
        { name: 'Config Snapshot', checked: true },
        { name: 'EAS API', checked: true },
    ];

    const column4 = [
        { name: 'CitiHAWK UI (PROD)', checked: true },
        { name: 'Query Enrichment JDBC', checked: true },
    ];

    return (
        <div className="dashboard-card service-list-card">
            <div className="citihawk-wrapper">
                <div className="citihawk-header">CitiHAWK</div>
                <div className="service-grid-four">
                    <div className="service-column">
                        {column1.map((item, i) => <ServiceItem key={i} name={item.name} checked={item.checked} />)}
                    </div>
                    <div className="service-column">
                        {column2.map((item, i) => <ServiceItem key={i} name={item.name} checked={item.checked} />)}
                    </div>
                    <div className="service-column">
                        {column3.map((item, i) => <ServiceItem key={i} name={item.name} checked={item.checked} />)}
                    </div>
                    <div className="service-column">
                        {column4.map((item, i) => <ServiceItem key={i} name={item.name} checked={item.checked} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
