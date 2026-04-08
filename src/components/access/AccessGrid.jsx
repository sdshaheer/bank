import React, { useState, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ModuleRegistry, AllCommunityModule, themeAlpine } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeAlpine.withParams({
  headerColumnBorder: true,
  columnBorder: true,
  headerColumnResizeHandle: false,
  headerColumnResizeHandleDisplay: 'none',
  headerColumnResizeHandleColor: 'transparent'
});

// Initial dummy tree data
const initialData = [
  {
    id: "1",
    name: "Banking",
    type: "business",
    activeAccess: 46,
    dataSets: "2/3",
    dataStreams: "7/16",
    expanded: true,
    children: [
      {
        id: "1.1",
        name: "Data Set1",
        type: "dataset",
        dataStreams: "Data Stream1, Data Stream2, Data...",
        expanded: true,
        children: [
          { id: "1.1.1", name: "Data Stream1", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } },
          { id: "1.1.2", name: "Data Stream2", type: "stream", permissions: { read: true, write: true, admin: false, delegate: false } },
          { id: "1.1.3", name: "Data Stream3", type: "stream", permissions: { read: false, write: false, admin: false, delegate: false } }
        ]
      },
      {
        id: "1.2",
        name: "Data Set2",
        type: "dataset",
        dataStreams: "Data Stream4, Data Stream5, Data...",
        expanded: true,
        children: [
          { id: "1.2.1", name: "Data Stream4", type: "stream", permissions: { read: true, write: true, admin: true, delegate: false }, users: { admin: "S", write: "user_avatar" } },
          { id: "1.2.2", name: "Data Stream5", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } },
          { id: "1.2.3", name: "Data Stream6", type: "stream", permissions: { read: true, write: false, admin: true, delegate: false } },
          { id: "1.2.4", name: "Data Stream7", type: "stream", permissions: { read: true, write: true, admin: false, delegate: true } },
          { id: "1.2.5", name: "Data Stream8", type: "stream", permissions: { read: false, write: false, admin: false, delegate: false } }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Markets",
    type: "business",
    activeAccess: 100,
    dataSets: "1/1",
    dataStreams: "5/5",
    expanded: false,
    children: [
      {
        id: "2.1",
        name: "Derivatives",
        type: "dataset",
        dataStreams: "Options, Futures...",
        expanded: false,
        children: [
          { id: "2.1.1", name: "Options", type: "stream", permissions: { read: true, write: true, admin: false, delegate: false }, users: { write: "AK" } },
          { id: "2.1.2", name: "Futures", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Wealth Management",
    type: "business",
    activeAccess: 85,
    dataSets: "3/4",
    dataStreams: "12/15",
    expanded: false,
    children: [
      {
        id: "3.1",
        name: "Client Portfolios",
        type: "dataset",
        dataStreams: "Equities, Fixed Income...",
        expanded: false,
        children: [
          { id: "3.1.1", name: "Equities", type: "stream", permissions: { read: true, write: true, admin: false, delegate: false }, users: { write: "JD" } },
          { id: "3.1.2", name: "Fixed Income", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } }
        ]
      }
    ]
  },
  {
    id: "4",
    name: "Commercial Banking",
    type: "business",
    activeAccess: 40,
    dataSets: "2/5",
    dataStreams: "8/20",
    expanded: false,
    children: [
      {
        id: "4.1",
        name: "Lending Services",
        type: "dataset",
        dataStreams: "Loans, Mortgages...",
        expanded: false,
        children: [
          { id: "4.1.1", name: "Loans", type: "stream", permissions: { read: true, write: true, admin: false, delegate: true }, users: { write: "user_avatar" } },
          { id: "4.1.2", name: "Mortgages", type: "stream", permissions: { read: false, write: false, admin: false, delegate: false } }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Treasury & Trade Solutions",
    type: "business",
    activeAccess: 95,
    dataSets: "10/10",
    dataStreams: "45/45",
    expanded: false,
    children: [
      {
        id: "5.1",
        name: "Payments & Receivables",
        type: "dataset",
        dataStreams: "Cross-border, Domestic...",
        expanded: false,
        children: [
          { id: "5.1.1", name: "Cross-border", type: "stream", permissions: { read: true, write: true, admin: true, delegate: false }, users: { admin: "X" } },
          { id: "5.1.2", name: "Domestic", type: "stream", permissions: { read: true, write: true, admin: false, delegate: false } }
        ]
      }
    ]
  },
  {
    id: "6",
    name: "Private Bank",
    type: "business",
    activeAccess: 60,
    dataSets: "4/8",
    dataStreams: "15/30",
    expanded: false,
    children: [
      {
        id: "6.1",
        name: "Valuations",
        type: "dataset",
        dataStreams: "Real Estate, Art & Antiquities...",
        expanded: false,
        children: [
          { id: "6.1.1", name: "Real Estate", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } },
          { id: "6.1.2", name: "Art & Antiquities", type: "stream", permissions: { read: false, write: false, admin: false, delegate: false } }
        ]
      }
    ]
  },
  {
    id: "7",
    name: "Retail Banking",
    type: "business",
    activeAccess: 20,
    dataSets: "1/5",
    dataStreams: "2/10",
    expanded: false,
    children: [
      {
        id: "7.1",
        name: "Consumer Accounts",
        type: "dataset",
        dataStreams: "Checking, Savings...",
        expanded: false,
        children: [
          { id: "7.1.1", name: "Checking", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } },
          { id: "7.1.2", name: "Savings", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } }
        ]
      }
    ]
  },
  {
    id: "8",
    name: "Investment Banking",
    type: "business",
    activeAccess: 99,
    dataSets: "8/8",
    dataStreams: "25/25",
    expanded: false,
    children: [
      {
        id: "8.1",
        name: "M&A Advisory",
        type: "dataset",
        dataStreams: "Deals, Valuations...",
        expanded: false,
        children: [
          { id: "8.1.1", name: "Deals", type: "stream", permissions: { read: true, write: true, admin: false, delegate: true }, users: { delegate: "D" } },
          { id: "8.1.2", name: "Valuations", type: "stream", permissions: { read: true, write: true, admin: true, delegate: false }, users: { admin: "user_avatar" } }
        ]
      }
    ]
  },
  {
    id: "9",
    name: "Asset Management",
    type: "business",
    activeAccess: 55,
    dataSets: "2/6",
    dataStreams: "10/24",
    expanded: false,
    children: [
      {
        id: "9.1",
        name: "Fund Performance",
        type: "dataset",
        dataStreams: "Mutual Funds, ETFs...",
        expanded: false,
        children: [
          { id: "9.1.1", name: "Mutual Funds", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } },
          { id: "9.1.2", name: "ETFs", type: "stream", permissions: { read: true, write: false, admin: false, delegate: false } }
        ]
      }
    ]
  }
];

// Helper to flatten the tree for the grid
const flattenData = (data, level = 0, isVisible = true) => {
  let result = [];
  data.forEach((node) => {
    const flatNode = { ...node, level, isVisible };
    if (isVisible) {
      result.push(flatNode);
    }
    if (node.children && node.children.length > 0) {
      // children are visible only if parent is visible AND parent is expanded
      result = result.concat(flattenData(node.children, level + 1, isVisible && node.expanded));
    }
  });
  return result;
};

// Custom Cell Renderers

const CaretIcon = ({ expanded, onClick, visible = true }) => {
  if (!visible) {
    return <span style={{ width: 16, height: 16, marginRight: 8, display: 'inline-flex' }}></span>;
  }
  return (
    <span
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
      style={{
        cursor: 'pointer',
        marginRight: '8px',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px'
      }}
      title={expanded ? "Collapse" : "Expand"}
    >
      {expanded ? (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      ) : (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a202c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      )}
    </span>
  );
};

const BusinessNameRenderer = (props) => {
  const { data } = props;
  const toggleExpand = () => props.context.toggleNode(data.id);

  if (data.type !== 'business') return null;

  const hasChildren = data.children && data.children.length > 0;

  return (
    <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', color: '#1B263B' }}>
      <CaretIcon expanded={data.expanded} onClick={hasChildren ? toggleExpand : undefined} visible={hasChildren} />
      <span>{data.name}</span>
    </div>
  );
};

const DataSetsRenderer = (props) => {
  const { data } = props;
  const toggleExpand = () => props.context.toggleNode(data.id);

  if (data.type === 'business') {
    return <span>{data.dataSets}</span>;
  }

  if (data.type === 'dataset') {
    const hasChildren = data.children && data.children.length > 0;
    return (
      <div style={{ display: 'flex', alignItems: 'center', fontWeight: '600', color: '#475569' }}>
        <CaretIcon expanded={data.expanded} onClick={hasChildren ? toggleExpand : undefined} visible={hasChildren} />
        <span>{data.name}</span>
      </div>
    );
  }

  return null;
}

const DataStreamsRenderer = (props) => {
  const { data } = props;

  if (data.type === 'business') {
    return <span style={{ fontWeight: '500' }}>{data.dataStreams}</span>;
  }

  if (data.type === 'dataset') {
    return <span style={{ color: '#64748b', fontSize: '13px' }}>{data.dataStreams}</span>;
  }

  if (data.type === 'stream') {
    return <span style={{ fontSize: '13px', color: '#1a202c' }}>{data.name}</span>;
  }

  return null;
}

const ProgressRenderer = (props) => {
  const value = props.value;
  if (value == null) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '100%', gap: '10px' }}>
      <div style={{ width: '60px', height: '10px', backgroundColor: '#cbd5e1', borderRadius: '5px', overflow: 'hidden' }}>
        <div style={{ height: '100%', backgroundColor: '#16a34a', width: `${value}%` }}></div>
      </div>
      <span style={{ fontSize: '13px', fontWeight: '600', color: '#1a202c' }}>{value}%</span>
    </div>
  );
};

const CheckboxRenderer = (props) => {
  const { data, colDef } = props;
  const field = colDef.field;
  if (data.type !== 'stream') return null; // Only streams have checkboxes

  const isChecked = data.permissions && data.permissions[field];
  const userInitials = data.users && data.users[field];
  const isSpecialBox = isChecked && ['write', 'admin', 'delegate'].includes(field) && field !== 'read';

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: '10px'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <input
          type="checkbox"
          checked={!!isChecked}
          readOnly
          style={{ width: '16px', height: '16px', margin: 0, accentColor: '#2563eb' }}
        />
        {userInitials && (
          <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: field === 'admin' ? '#0f172a' : '#334155',
            color: 'white',
            fontSize: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '8px',
            overflow: 'hidden'
          }}>
            {userInitials === "user_avatar" ? <img src="https://ui-avatars.com/api/?name=User&background=random" alt="user" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : userInitials}
          </div>
        )}
      </div>
    </div>
  );
};

const HeaderCheckboxRenderer = (props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input type="checkbox" disabled style={{ margin: 0, width: '16px', height: '16px' }} />
      <span style={{ marginLeft: '8px', fontSize: '13px', fontWeight: 'bold' }}>{props.displayName}</span>
    </div>
  );
};

export default function AccessGrid() {
  const [treeData, setTreeData] = useState(initialData);

  // Filter out the nodes that shouldn't be visible because their parent is collapsed
  const rowData = useMemo(() => flattenData(treeData), [treeData]);

  const toggleNode = useCallback((id) => {
    setTreeData(prevData => {
      const toggleRecursive = (nodes) => {
        return nodes.map(node => {
          if (node.id === id) {
            return { ...node, expanded: !node.expanded };
          }
          if (node.children) {
            return { ...node, children: toggleRecursive(node.children) };
          }
          return node;
        });
      };
      return toggleRecursive(prevData);
    });
  }, []);

  const columnDefs = useMemo(() => [
    {
      headerName: "Business Name",
      valueGetter: (params) => params.data ? (params.data.type === 'business' ? params.data.name + '_' + Boolean(params.data.expanded) : '') : '',
      cellRenderer: "businessNameRenderer",
      flex: 1.5,
      minWidth: 150,
      headerComponentParams: {
        template: '<div style="display: flex; align-items: center;"><span style="font-weight: bold; font-size: 14px; margin-right: 5px;">Business Name</span> ☰</div>'
      }
    },
    {
      headerName: "Active Access %",
      field: "activeAccess",
      cellRenderer: "progressRenderer",
      flex: 1
    },
    {
      headerName: "Data Sets",
      valueGetter: (params) => params.data ? (params.data.type === 'dataset' ? params.data.name + '_' + Boolean(params.data.expanded) : params.data.dataSets) : '',
      cellRenderer: "dataSetsRenderer",
      flex: 1.2
    },
    {
      headerName: "Data Streams & Delegation",
      valueGetter: (params) => params.data ? (params.data.type === 'stream' ? params.data.name : params.data.dataStreams) : '',
      cellRenderer: "dataStreamsRenderer",
      flex: 2
    },
    {
      headerName: "Read",
      field: "read",
      cellRenderer: "checkboxRenderer",
      headerComponent: "headerCheckboxRenderer",
      width: 100,
      cellStyle: params => params.data && params.data.type === 'dataset' ? { backgroundColor: '#e2e8f0' } : null
    },
    {
      headerName: "Write",
      field: "write",
      cellRenderer: "checkboxRenderer",
      headerComponent: "headerCheckboxRenderer",
      width: 100,
      cellStyle: params => params.data && params.data.type === 'dataset' ? { backgroundColor: '#e2e8f0' } : null
    },
    {
      headerName: "Admin",
      field: "admin",
      cellRenderer: "checkboxRenderer",
      headerComponent: "headerCheckboxRenderer",
      width: 100,
      cellStyle: params => params.data && params.data.type === 'dataset' ? { backgroundColor: '#e2e8f0' } : null
    },
    {
      headerName: "Delegate",
      field: "delegate",
      cellRenderer: "checkboxRenderer",
      headerComponent: "headerCheckboxRenderer",
      width: 110,
      cellStyle: params => params.data && params.data.type === 'dataset' ? { backgroundColor: '#e2e8f0' } : null
    }
  ], []);

  const defaultColDef = useMemo(() => ({
    resizable: true,
    sortable: false,
    suppressMovable: true,
  }), []);

  const components = useMemo(() => ({
    businessNameRenderer: BusinessNameRenderer,
    dataSetsRenderer: DataSetsRenderer,
    dataStreamsRenderer: DataStreamsRenderer,
    progressRenderer: ProgressRenderer,
    checkboxRenderer: CheckboxRenderer,
    headerCheckboxRenderer: HeaderCheckboxRenderer
  }), []);

  const getRowStyle = params => {
    return { backgroundColor: '#ffffff' };
  };

  const getRowId = useCallback(params => params.data.id, []);

  return (
    <div style={{ height: 600, width: '100%' }}>
      <AgGridReact
        theme={myTheme}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        components={components}
        context={{ toggleNode }}
        getRowStyle={getRowStyle}
        getRowId={getRowId}
        animateRows={true}
        autoSizeStrategy={{ type: 'fitGridWidth' }}
        onGridSizeChanged={(params) => params.api.sizeColumnsToFit()}
        headerHeight={45}
        rowHeight={40}
        suppressCellFocus={true}
      />
    </div>
  );
}
