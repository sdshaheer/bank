import Inbound from "./components/inbound/Inbound";
import ClusterStatusDashboard from "./components/messaging/ClusterStatusDashboard";
import SparkDashboard from "./components/spark/SparkDashboard";
import DatabaseVolumeCard from "./components/database/DatabaseVolumeCard";
import StorageDashboard from "./components/storage/StorageDashboard";
import QueryEngine from "./components/query/QueryEngine";
import ApiStatusCard from "./components/api/ApiStatusCard";
import OutboundDashboard from "./components/outbound/OutboundDashboard";
import AccessGrid from "./components/access/AccessGrid";
import ActiveIncidentsBar from "./components/topbar/ActiveIncidentsBar";
import AttributeFailureOverview from "./components/attributeFailure/AttributeFailureOverview";

const App = () => {
  return (
    <div style={{ 
      padding: '24px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '32px',
      backgroundColor: '#f8fafc', // Premium soft grayish-blue background matching the image
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <ActiveIncidentsBar />
      <AttributeFailureOverview />
      {/* <OutboundDashboard /> */}
      {/* <AccessGrid /> */}
    </div>
  )
}

export default App