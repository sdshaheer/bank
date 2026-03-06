import Inbound from "./components/inbound/Inbound";
import ClusterStatusDashboard from "./components/messaging/ClusterStatusDashboard";
import SparkDashboard from "./components/spark/SparkDashboard";
import DatabaseVolumeCard from "./components/database/DatabaseVolumeCard";
import StorageDashboard from "./components/storage/StorageDashboard";
import QueryEngine from "./components/query/QueryEngine";
import ApiStatusCard from "./components/api/ApiStatusCard";
import OutboundDashboard from "./components/outbound/OutboundDashboard";

const App = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px', background: '#f5f7f9', minHeight: '100vh' }}>
      <OutboundDashboard />
    </div>
  )
}

export default App