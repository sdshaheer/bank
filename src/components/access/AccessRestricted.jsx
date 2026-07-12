import React from 'react';
import './AccessRestricted.css';
import laptopImg from './laptop.png';

export default function AccessRestricted() {
  const handleRequestAccess = () => {
    alert('Access request submitted successfully!');
  };

  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        minHeight: '100vh',
        backgroundColor: '#fff',
        overflowX: 'hidden',
      }}
    >
      <section
        className="restricted-top-section"
        style={{ backgroundColor: '#f3f7fd', padding: '60px 0' }}
      >
        <div
          className="restricted-top-container"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
          }}
        >
          <div
            className="restricted-text-side"
            style={{ flex: 1, maxWidth: '520px' }}
          >
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '36px', fontWeight: 600, color: '#1b61e4', margin: '0 0 16px' }}>
              Access Restricted
            </h1>
            <p style={{ fontSize: '16px', lineHeight: 1.5, color: '#333', margin: '0 0 24px' }}>
              You don&apos;t have access to Olympus OneOps.
              <br />
              Click on the Request Access button to gain Access.
            </p>
            <button
              className="restricted-button"
              style={{
                fontSize: '14px',
                color: '#fff',
                backgroundColor: '#1b61e4',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={handleRequestAccess}
              id="btn-request-access"
            >
              Request Access
            </button>
          </div>

          <div
            className="restricted-illustration-side"
            style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}
          >
            <div
              className="illustration-circle-wrapper"
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: '-100px',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={laptopImg}
                alt="Access restricted"
                style={{ width: '90%', height: '90%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="restricted-middle-section"
        style={{
          backgroundColor: '#0b1329',
          color: '#fff',
          padding: '80px 0 60px',
          position: 'relative',
          zIndex: 5,
        }}
      >
        <div
          className="restricted-middle-container"
          style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}
        >
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '28px', fontWeight: 500, margin: '0 0 20px' }}>
            How to Access Olympus OneOps
          </h2>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#ddd', margin: '0 0 16px' }}>
            On clicking you will be redirected to entitlements section in your profile. Browse or search for the specific application,
            page, or dataset you wish to access. Selected the required access rights and submit. Once you find it, submit a
            request for the required permission level.
          </p>
          <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#ddd', margin: 0 }}>
            If you think this is a mistake, please raise a support ticket or Reach out
            <a href="#support" className="support-link" style={{ color: '#3b82f6', marginLeft: '4px' }}>
              *OT GLOBAL OLYMPUS FRAMEWORKS
            </a>
            .
          </p>
        </div>
      </section>

      <section className="restricted-bottom-section" style={{ padding: '60px 0' }}>
        <div
          className="restricted-bottom-container"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            gap: '48px',
          }}
        >
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 500, color: '#222', margin: '0 0 12px', textAlign: 'center' }}>
              About Olympus
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#555', margin: 0 }}>
              Olympus is the enterprise&apos;s central, strategic data platform. It acts as &quot;central nervous
              system&quot; for our most critical data ensuring data is Secure, Consistent, Scalable and
              Reliable. Its primary purpose is to break down data silos by ingesting, storing, and
              managing information from across the organization in a single, secure, and highly-
              governed environment.
            </p>
          </div>

          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '22px', fontWeight: 500, color: '#222', margin: '0 0 12px', textAlign: 'center' }}>
              About Olympus OneOps
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#555', margin: 0 }}>
              OneOps is the comprehensive operational and management suite for the Olympus
              platform. If Olympus is the engine, OneOps is the dashboard, the control panel, and the user
              interface all rolled into one. It provides the tools and visibility necessary for our users—
              from data stewards and auditors to business analysts and platform engineers—to interact
              with the Olympus platform effectively and securely.
            </p>
            <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#222', margin: '20px 0 12px' }}>
              OneOps provides a single-pane-of-glass view
            </h4>
            <ul
              className="list-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px 16px',
                padding: 0,
                margin: 0,
                listStyle: 'none',
                fontSize: '14px',
                color: '#555',
              }}
            >
              <li>• Platform Health</li>
              <li>• Data Discovery</li>
              <li>• Issue Management</li>
              <li>• 1TLoD Controls Monitoring</li>
              <li>• Data Onboarding</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
