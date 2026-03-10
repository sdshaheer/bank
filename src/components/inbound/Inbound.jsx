import React from 'react';
import './Inbound.css';

// --- Color Palette (Using direct values for SVGs) ---
const COLORS = {
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
};

// --- Centralized Dashboard Data ---
// You can easily modify labels, values, and status here
const DASHBOARD_DATA = {
    header: {
        title: "Inbound(2)",
        subtitle: "The state of requests Production support team is handling. Any help text can be specified here",
        badges: [
            { count: "6", type: "danger" },
            { count: "4", type: "warning" }
        ]
    },
    sections: [
        {
            id: "mqs",
            title: "MQs",
            infoCards: [
                {
                    title: "Solace",
                    hasClock: true,
                    alert: "SSL Expiring on..",
                    items: [
                        { label: 'NAM', status: 'check' },
                        { label: 'EMEA', status: 'check' },
                        { label: 'APAC', status: 'check' },
                        { label: 'Japan', status: 'check' }
                    ]
                },
                {
                    title: "KaaS",
                    items: [
                        { label: 'Zookeeper', status: 'check' },
                        { label: 'Broker', status: 'check' },
                        { label: 'Schema Registry', status: 'check' }
                    ]
                },
                {
                    title: "MQ Source",
                    items: [
                        { label: 'Source', value: '532' },
                        { label: 'Feed', value: '83' },
                        { label: 'MQs', value: '83' }
                    ]
                }
            ],
            inbound: {
                title: "MQs Inbound",
                messagesIngested: "12345678",
                stats: { pending: 5, arrived: 6, potential: 5, sla: 0, failed: 3, slaBreachIn: 1 }
            }
        },
        {
            id: "files",
            title: "Files",
            infoCards: [
                {
                    title: "Files Source",
                    items: [
                        { label: 'Source', value: '11029' },
                        { label: 'Feed', value: '12102' },
                        { label: 'Files', value: '10029' }
                    ]
                },
                {
                    title: "IBM Connect Dir...",
                    items: [
                        { label: 'Status Monitor', status: 'check' },
                        { label: 'Connection Ma...', status: 'check' },
                        { label: 'Process Manager', status: 'check' }
                    ]
                },
                {
                    title: "File Watcher",
                    hasClock: false,
                    alert: "One or more file...",
                    items: [
                        { label: 'Service', status: 'check' },
                        { label: 'Scheduler', status: 'warning' },
                        { label: 'NAS Health', status: 'check' },
                        { label: 'NAS Usage', percent: '26.28%' }
                    ]
                }
            ],
            inbound: {
                title: "Files Inbound",
                messagesIngested: "12345678",
                stats: { pending: 5, arrived: 6, potential: 5, sla: 0, failed: 3, slaBreachIn: 1 }
            }
        }
    ]
};

// --- Reusable UI Components ---

const StatusIcon = ({ type }) => {
    if (type === 'check') {
        return (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.success} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        );
    }
    if (type === 'clock') {
        return (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.warning} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        );
    }
    if (type === 'warning') {
        return (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={COLORS.warning} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        );
    }
    return null;
};

const SectionHeader = ({ title, subtitle }) => (
    <div className="inbound-section-header">
        <h1 className="inbound-section-header-title">{title}</h1>
        <p className="inbound-section-header-subtitle">{subtitle}</p>
    </div>
);

const Badge = ({ count, type }) => (
    <div className={`inbound-badge ${type === 'danger' ? 'inbound-badge-danger' : 'inbound-badge-warning'}`}>
        <span className="inbound-badge-icon">
            {type === 'danger' ? '!' : '▲'}
        </span>
        <span className="inbound-badge-count">{count}</span>
    </div>
);

const InfoCard = ({ title, items, alert, hasClock }) => (
    <div className="inbound-info-card">
        <div>
            <div className="inbound-info-card-header">
                <h3 className="inbound-info-card-title">{title}</h3>
                {hasClock && <StatusIcon type="clock" />}
            </div>
            <div className="inbound-info-card-list">
                {items.map((item, i) => (
                    <div key={i} className="inbound-info-card-item">
                        <span className="inbound-info-card-label">{item.label}</span>
                        <div className="inbound-info-card-value-group">
                            {item.value && <span className="inbound-info-card-value">{item.value}</span>}
                            {item.status && <StatusIcon type={item.status} />}
                            {item.percent && <span className="inbound-info-card-percent">{item.percent}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        {alert && (
            <div className="inbound-info-card-alert">
                <StatusIcon type="warning" />
                <span>{alert}</span>
            </div>
        )}
    </div>
);

const StatTableCard = ({ title, messagesIngested, stats }) => (
    <div className="inbound-stat-table-card">
        <div className="inbound-stat-table-header">
            <h4 className="inbound-stat-table-title">{title}</h4>
            <span className="inbound-stat-table-subtitle"><b>{messagesIngested}</b> :Messages Ingested</span>
        </div>

        {/* Flexbox Layout with Fixed Percentages for Perfectly Straight Vertical Borders */}
        <div className="inbound-stat-table-viewport">
            {/* Header Row */}
            <div className="inbound-stat-row">
                <div className="inbound-stat-cell-pending-top">
                    <span>Pending</span>
                    <span className="inbound-stat-value">{stats.pending}</span>
                </div>
                <div className="inbound-stat-cell-failed-top">
                    Failed
                </div>
                <div className="inbound-stat-cell-arrived-top">
                    <span>Arrived</span>
                    <span className="inbound-stat-value">{stats.arrived}</span>
                </div>
            </div>

            {/* Content Row 1 (Breach Labels) */}
            <div className="inbound-stat-row">
                <div className="inbound-stat-cell-pending-bottom">
                    <div className="inbound-stat-subcell-label">Potential Breach</div>
                    <div className="inbound-stat-subcell-label">SLA Breach</div>
                </div>
                <div className="inbound-stat-cell-failed-bottom"></div>
                <div className="inbound-stat-cell-arrived-mid">
                    SLA Breach
                </div>
            </div>

            {/* Content Row 2 (Breach Values) */}
            <div className="inbound-stat-row">
                <div className="inbound-stat-cell-pending-bottom">
                    <div className="inbound-stat-subcell-value inbound-underlined">
                        <span>{stats.potential}</span>
                    </div>
                    <div className="inbound-stat-subcell-value">{stats.sla}</div>
                </div>
                <div className="inbound-stat-cell-failed-breach">
                    <span className="inbound-stat-value">{stats.failed}</span>
                </div>
                <div className="inbound-stat-cell-sla-green">
                    <span className="inbound-stat-value">{stats.slaBreachIn}</span>
                </div>
            </div>
        </div>
    </div>
);

// --- Main Application ---

const Inbound = () => {
    const { header, sections } = DASHBOARD_DATA;

    return (
        <div className="inbound-root">
            <div className="inbound-wrapper">
                {/* --- MAIN DASHBOARD CONTAINER (OUTER CARD) --- */}
                <div className="inbound-main-dashboard-card">
                    {/* Page Top Header */}
                    <div className="inbound-header-container">
                        <SectionHeader
                            title={header.title}
                            subtitle={header.subtitle}
                        />
                        <div className="inbound-header-right">
                            {header.badges.map((badge, idx) => (
                                <Badge key={idx} count={badge.count} type={badge.type} />
                            ))}
                            <button className="inbound-header-btn-dash">—</button>
                        </div>
                    </div>

                    {/* Flexbox Layout */}
                    <div className="inbound-sections-flex">
                        {sections.map((section) => (
                            <div key={section.id} className="inbound-section-card">
                                <div className="inbound-section-item">
                                    <h2 className="inbound-section-title">{section.title}</h2>
                                    <div className="inbound-info-cards-container">
                                        {section.infoCards.map((card, idx) => (
                                            <InfoCard
                                                key={idx}
                                                title={card.title}
                                                items={card.items}
                                                alert={card.alert}
                                                hasClock={card.hasClock}
                                            />
                                        ))}
                                    </div>
                                    <StatTableCard
                                        title={section.inbound.title}
                                        messagesIngested={section.inbound.messagesIngested}
                                        stats={section.inbound.stats}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inbound;
