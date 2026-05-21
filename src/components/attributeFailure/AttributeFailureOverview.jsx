import React from 'react';

const AttributeFailureOverview = () => {
  return (
    <div style={{
      fontFamily: '"Inter", sans-serif',
      background: '#ffffff',
      padding: '24px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Top Row: Progress Bar and Failure Rate */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '16px' }}>
        {/* Progress Bar Container */}
        <div style={{ 
          flex: 1, 
          height: '10px', 
          backgroundColor: '#E2E8F0', 
          borderRadius: '9999px', 
          display: 'flex', 
          overflow: 'hidden'
        }}>
          <div style={{ width: '2.74%', backgroundColor: '#E13B19' }} />
          <div style={{ width: '80.02%', backgroundColor: '#1E4620', borderRadius: '0 9999px 9999px 0' }} />
        </div>

        {/* Failure Rate */}
        <div style={{ color: '#962828', fontSize: '13px', whiteSpace: 'nowrap' }}>
          Failure Rate <strong style={{ marginLeft: '6px' }}>2.74%</strong>
        </div>
      </div>

      {/* Bottom Row: Legends / Metadata */}
      <div style={{ display: 'flex', gap: '48px' }}>
        {/* Legend 1: Failed */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#E13B19', borderRadius: '1.5px' }} />
            Failed <strong style={{ color: '#1E293B' }}>3,420</strong>
          </div>
          <div style={{ fontSize: '11px', color: '#94A3B8', paddingLeft: '16px', marginTop: '4px' }}>
            om_dq_exception
          </div>
        </div>

        {/* Legend 2: Passed */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#1E4620', borderRadius: '1.5px' }} />
            Passed <strong style={{ color: '#1E293B' }}>121,580</strong>
          </div>
        </div>

        {/* Legend 3: Total */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569' }}>
            <span style={{ width: '8px', height: '8px', backgroundColor: '#cbd5e1', borderRadius: '1.5px' }} />
            Total <strong style={{ color: '#1E293B' }}>125,000</strong>
          </div>
          <div style={{ fontSize: '11px', color: '#94A3B8', paddingLeft: '16px', marginTop: '4px' }}>
            om_dq_applicable_superset
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttributeFailureOverview;
