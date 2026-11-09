import * as React from "react";
import {
 Html,
 Head,
 Preview,
 Body,
 Container,
 Section,
 Row,
 Column,
 Text,
 Tailwind,
} from "@react-email/components";

export interface PlatformComponentStatus {
 name: string;
 capacityOk: boolean;
 stabilityOk: boolean;
 healthOk: boolean;
}

export interface SmallFileItem {
 cluster: string;
 filesAndDirs: string;
 totalObjects: string;
 trend: string;
 trendUp: boolean;
}

export interface JiraDeliveryItem {
 component: string;
 closed: number;
 planned: number;
 retargeted: number;
}

export interface ProjectTrackItem {
 keyItem: string;
 eta: string;
 status: string; // "100%", "85%", "In Progress", etc.
 statusType: "blue" | "green" | "orange" | "gray";
 issueNum?: string;
}

export interface SonarGradeItem {
 category: string;
 a: number;
 b: number;
 c: number;
 d: number;
 e: number;
}

export interface ManifestoCategory {
 title: string;
 overallPercent: string;
 items: { label: string; percent: string }[];
}

export interface ContactItem {
 names: string;
 tracks: string[];
}

export interface OlympusNewsletterProps {
 title?: string;
 edition?: string;
 date?: string;
 platforms?: PlatformComponentStatus[];
 autosysRate?: string;
 autosysTarget?: string;
 autosysDiff?: string;
 smallFiles?: SmallFileItem[];
 jiraClosed?: number;
 jiraPlanned?: number;
 jiraRetargeted?: number;
 jiraComponents?: JiraDeliveryItem[];
 populationPercent?: string;
 productivityTargets?: { label: string; current: string; target: string; percentNum: number; isWarning?: boolean }[];
 copilotPercent?: string;
 copilotTarget?: string;
 announcements?: { id: string; text: string; actionHighlight?: string }[];
 milestoneBanner?: string;
 platformProjects?: ProjectTrackItem[];
 frameworkProjects?: ProjectTrackItem[];
 oneOpsProjects?: ProjectTrackItem[];
 devSecOpsProjects?: ProjectTrackItem[];
 toolAdoption?: { label: string; value: string; percent?: string }[];
 capabilities?: { label: string; value: string }[];
 sonarCoverage?: { range: string; count: number }[];
 sonarGrades?: SonarGradeItem[];
 manifestoCategories?: ManifestoCategory[];
 needAttentionItems?: { id: string; title: string; desc: string }[];
 contacts?: ContactItem[];
}

export const OlympusNewsletterEmail = ({
 title = "Olympus Core Engineering Status",
 edition = "Edition #12",
 date = "Feb 6, 2026",
 platforms = [
 { name: "Cloudera", capacityOk: true, stabilityOk: true, healthOk: true },
 { name: "Kafka", capacityOk: true, stabilityOk: true, healthOk: true },
 { name: "Gemfire", capacityOk: true, stabilityOk: true, healthOk: true },
 { name: "Elastic", capacityOk: true, stabilityOk: true, healthOk: true },
 ],
 autosysRate = "89.98%",
 autosysTarget = "99.95%",
 autosysDiff = "↓ 2.1%",
 smallFiles = [
 { cluster: "NJ", filesAndDirs: "1.65M", totalObjects: "1.65M", trend: "↑ 3.2%", trendUp: true },
 { cluster: "NY", filesAndDirs: "1.36M", totalObjects: "1.36M", trend: "↑ 1.8%", trendUp: true },
 ],
 jiraClosed = 19,
 jiraPlanned = 65,
 jiraRetargeted = 0,
 jiraComponents = [
 { component: "Framework", closed: 11, planned: 5, retargeted: 0 },
 { component: "Inbound", closed: 5, planned: 2, retargeted: 0 },
 { component: "DevSecOps", closed: 1, planned: 1, retargeted: 0 },
 { component: "Outbound", closed: 1, planned: 0, retargeted: 0 },
 { component: "Platform", closed: 4, planned: 2, retargeted: 0 },
 { component: "Support", closed: 0, planned: 0, retargeted: 0 },
 { component: "Perf. Enablement", closed: 0, planned: 0, retargeted: 0 },
 ],
 populationPercent = "89%",
 productivityTargets = [
 { label: "GT1: 91%", current: "91%", target: "100%", percentNum: 91 },
 { label: "GT15: 85%", current: "85%", target: "90%", percentNum: 85 },
 { label: "GT50: 62%", current: "62%", target: "75%", percentNum: 62, isWarning: true },
 ],
 copilotPercent = "84%",
 copilotTarget = "80%",
 announcements = [
 {
 id: "#1",
 text: "Impala Back Pressure & Demon Crash Issue – Pending Action Item a) reduce concurrent queries for each queue and ",
 actionHighlight: "3.a, 3.b, 3.e",
 },
 {
 id: "#2",
 text: "Rare Cloudera Impala complete, and ready for implementation in all Olympus compute teams through proper review.",
 },
 {
 id: "#3",
 text: "Impala Refresh – Impala refresh is in progress and we are seeing some (of harmless unnecessary) impala refresh",
 },
 {
 id: "#4",
 text: "EE Capability score calculations are still evolving and there are many issues in the data collection, filtering/calculation. We are working with EE team to fix these",
 },
 {
 id: "#5",
 text: "Tech Radar review is in progress for whole Olympus Core Engineering",
 },
 {
 id: "#6",
 text: "All Autosys failures are being reviewed for entire Olympus CSIs to reduce the failures",
 },
 ],
 milestoneBanner = "#7: Olympus PROD RHEL3 Upgrade for Cloudera Cluster completed. PROD-NY is in progress (80%)",
 platformProjects = [
 { keyItem: "CDP: Impala Query timeout at 15 mins", eta: "28-Feb-26", status: "85%", statusType: "green", issueNum: "#1" },
 { keyItem: "CDP: Impala Refresh - Reduce resources", eta: "28-Feb-26", status: "90%", statusType: "green", issueNum: "#3" },
 { keyItem: "CDP: Hbase Volume reduction", eta: "31-Mar-26", status: "60%", statusType: "green" },
 { keyItem: "CDP: HBase Archival table migration", eta: "31-Mar-26", status: "70%", statusType: "green" },
 { keyItem: "CDP: HBASE - Reducing TTL", eta: "31-Jul-26", status: "50%", statusType: "green" },
 { keyItem: "KAFKA: RHEL8 Upgrade", eta: "30-Nov-25", status: "100%", statusType: "blue" },
 { keyItem: "Genesis migration: Multiple UAT", eta: "30-Nov-25", status: "100%", statusType: "blue" },
 { keyItem: "CDP: HBASE to DataHub", eta: "Q2-2026", status: "10%", statusType: "green" },
 { keyItem: "Data Center move to Clifton", eta: "Q1-2026", status: "0%", statusType: "gray" },
 ],
 frameworkProjects = [
 { keyItem: "Platform to Active-Active setup", eta: "31-May-26", status: "30%", statusType: "green" },
 { keyItem: "Inbound: Feed Migration IB 1.0 to 2.0", eta: "28-Feb-26", status: "50%", statusType: "green" },
 { keyItem: "Connections: Build lineage with Report", eta: "31-Dec-25", status: "100%", statusType: "blue" },
 { keyItem: "Margin/Collateral/CCP data onboarding", eta: "31-Dec-25", status: "100%", statusType: "blue" },
 { keyItem: "JDK: Upgrade Platform & Core framework", eta: "15-Mar-26", status: "70%", statusType: "green" },
 { keyItem: "Migrating F2B oraas to API model", eta: "31-Mar-26", status: "40%", statusType: "green" },
 ],
 oneOpsProjects = [
 { keyItem: "Drift APIs: Integrate for INC sync", eta: "31-Mar-26", status: "65%", statusType: "green" },
 { keyItem: "OneOps Entitlement by data category", eta: "15-Mar-26", status: "50%", statusType: "green" },
 { keyItem: "OneOps Entitlement self service portal", eta: "15-Mar-26", status: "50%", statusType: "green" },
 { keyItem: "OneOps: File Hyper scale documentation", eta: "31-Jan-26", status: "100%", statusType: "blue" },
 { keyItem: "OneOps Track user access & activity", eta: "31-Mar-26", status: "0%", statusType: "gray" },
 { keyItem: "OneOps Price Risk Market data UI", eta: "31-Mar-26", status: "50%", statusType: "green" },
 { keyItem: "OneOps Display Vulnerabilities – Phase 2", eta: "15-Mar-26", status: "40%", statusType: "orange" },
 { keyItem: "OneOps: Track connection requests", eta: "30-Apr-26", status: "10%", statusType: "green" },
 { keyItem: "Nucleus: Centralized lineage module", eta: "31-Dec-25", status: "100%", statusType: "blue" },
 { keyItem: "Automate Reconciliation process", eta: "15-Feb-26", status: "90%", statusType: "green" },
 { keyItem: "Nararec: Landing page revamp", eta: "15-Dec-25", status: "100%", statusType: "blue" },
 { keyItem: "Nararec: Y15 Download report", eta: "10-Dec-25", status: "100%", statusType: "blue" },
 { keyItem: "Nararec: Y15 Adjustments (TSA)", eta: "20-Dec-25", status: "100%", statusType: "blue" },
 { keyItem: "OneOps: Self service inbound feeds", eta: "31-May-26", status: "20%", statusType: "orange" },
 { keyItem: "OneOps: Event Management monitoring", eta: "15-Apr-26", status: "50%", statusType: "green" },
 { keyItem: "OneOps: How We Work dashboard", eta: "6-Feb-26", status: "100%", statusType: "blue" },
 ],
 devSecOpsProjects = [
 { keyItem: "Hashicorp & CyberArk evaluation", eta: "", status: "In Progress", statusType: "green" },
 { keyItem: "LSE (Tekton, Harness, Argo)", eta: "", status: "On-going", statusType: "green" },
 { keyItem: "GitHub CoPilot Adoption", eta: "", status: "On-going", statusType: "green" },
 { keyItem: "Enterprise GitHub Adoption", eta: "", status: "On-going", statusType: "green" },
 { keyItem: "Auto Config deployment", eta: "", status: "On-going", statusType: "green" },
 { keyItem: "Fwd MgmtICP to CCP/CyberArk", eta: "", status: "On-going", statusType: "green" },
 { keyItem: "Blackduck, GEM vulnerabilities", eta: "", status: "On-going", statusType: "green", issueNum: "#6" },
 ],
 toolAdoption = [
 { label: "Total Repos", value: "127" },
 { label: "On RnD", value: "81", percent: "(64%)" },
 { label: "On LightSpeed", value: "127", percent: "(100%)" },
 { label: "On LS Enterprise", value: "86", percent: "(67%)" },
 { label: "On SonarQube", value: "49", percent: "(39%)" },
 { label: "On Blackduck Scan", value: "81", percent: "(64%)" },
 ],
 capabilities = [
 { label: "Continuous Delivery", value: "64%" },
 { label: "Continuous Integration", value: "100%" },
 { label: "Test Automation", value: "45%" },
 { label: "Version Control", value: "100%" },
 { label: "Deployment Automation", value: "89%" },
 { label: "Security Architecture", value: "100%" },
 { label: "Trunk-based Development", value: "100%" },
 { label: "Change Approval", value: "82%" },
 { label: "Visible Work", value: "100%" },
 { label: "Document Quality", value: "94%" },
 ],
 sonarCoverage = [
 { range: ">80%", count: 18 },
 { range: ">50%", count: 12 },
 { range: ">30%", count: 8 },
 { range: "<30%", count: 6 },
 { range: "NA", count: 10 },
 ],
 sonarGrades = [
 { category: "Reliability (Bugs)", a: 32, b: 2, c: 0, d: 0, e: 0 },
 { category: "Security (Vulnerabilities)", a: 32, b: 2, c: 0, d: 0, e: 0 },
 { category: "Security Review (Hotspots)", a: 10, b: 0, c: 0, d: 0, e: 0 },
 { category: "Maintainability (Code Smell)", a: 0, b: 0, c: 0, d: 0, e: 0 },
 ],
 manifestoCategories = [
 {
 title: "Own the Code",
 overallPercent: "93%",
 items: [
 { label: "Has Responsive Admin", percent: "93%" },
 { label: "Has Readme", percent: "100%" },
 { label: "Has default branch", percent: "93%" },
 { label: "Has PR decline rule", percent: "93%" },
 ],
 },
 {
 title: "Adopt pull request etiquette",
 overallPercent: "83%",
 items: [{ label: "Has Build check", percent: "83%" }],
 },
 {
 title: "Be disciplined with branches",
 overallPercent: "90%",
 items: [{ label: "No behind Branches", percent: "90%" }],
 },
 {
 title: "Make it easy to use",
 overallPercent: "93%",
 items: [{ label: "Has approved CI", percent: "93%" }],
 },
 {
 title: "Keep it building",
 overallPercent: "65%",
 items: [
 { label: "Has approved CI", percent: "93%" },
 { label: "Has Green SONAR", percent: "39%" },
 ],
 },
 {
 title: "Keep it clean",
 overallPercent: "89%",
 items: [
 { label: "No Repo smell", percent: "89%" },
 { label: "Is Repo small", percent: "87%" },
 { label: "Non-empty repo", percent: "87%" },
 ],
 },
 ],
 needAttentionItems = [
 {
 id: "#1",
 title: "Infra Upgrade",
 desc: "Upgrade all nodes to NextGen Hardware with SSD and more storage capacity, 100 GBPS NIC, and Rack aware setup to Scale performance and 4x capacity and reduce Data Center Footprint",
 },
 {
 id: "#2",
 title: "RedHat OpenShift (BareMetal) Support",
 desc: "for better management of resources and scale",
 },
 ],
 contacts = [
 {
 names: "Dinesh/Neel/Ashish",
 tracks: ["Kafka", "Gemfire", "Elastic", "iTLOD"],
 },
 {
 names: "Anand",
 tracks: ["Common Utilities", "Frameworks", "House Keeping"],
 },
 {
 names: "Anand",
 tracks: ["Cloudera", "Archival/Hbase/S3"],
 },
 {
 names: "Subhash/Vignesh",
 tracks: ["Unity Onboarding", "EOD Onboarding", "Release Management"],
 },
 {
 names: "Dilnaz/Vignesh",
 tracks: ["OneOps Core", "DevSecOps"],
 },
 ],
}: OlympusNewsletterProps) => {
 return (
 <Html lang="en">
 <Head />
 <Preview>{`${title} | ${edition} | ${date}`}</Preview>
 <Tailwind>
 <Body className="bg-[#e9edf2] font-sans text-[#212529] text-[11px] m-0 p-[16px]">
 <Container className="max-w-[1180px] mx-auto bg-white border border-solid border-[#d0d7de] shadow-md">
 
 {/* Top Header Banner */}
 <Section className="bg-[#0c1a30] text-white p-[16px] px-[24px]">
 <Row>
 <Column className="w-[120px] text-left">
 <span className="bg-[#1e5bc6] text-white font-extrabold text-[15px] tracking-[1.5px] py-[6px] px-[14px] border border-solid border-[#3b7ddd] rounded-[2px] inline-block">
 OLYMPUS
 </span>
 </Column>
 <Column className="text-center">
 <Text className="text-[20px] font-bold text-white m-0 tracking-[0.5px]">
 {title}
 </Text>
 </Column>
 <Column className="w-[120px] text-right">
 <Text className="text-[11px] text-[#9cb3d8] leading-[1.4] m-0 font-medium">
 {edition}
 <br />
 {date}
 </Text>
 </Column>
 </Row>
 </Section>

 {/* Main 2-Column Split Layout */}
 <Section className="p-[12px]">
 <Row>
 {/* LEFT COLUMN: ~68% Width */}
 <Column className="w-[68%] align-top pr-[6px]">
 
 {/* Top Grid: Platform + JIRA */}
 <Row className="mb-[12px]">
 {/* Platform Card */}
 <Column className="w-[48%] align-top pr-[4px]">
 <div className="border border-solid border-[#c2d1e5] bg-white">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 Platform
 </div>
 <div className="p-[8px]">
 {/* 4 Platform Sub-columns */}
 <Row>
 {platforms.map((p, idx) => (
 <Column key={idx} className="w-[25%] align-top pr-[2px]">
 <Text className="font-bold text-[11px] text-[#0c1a30] m-0 mb-[6px]">
 {p.name}
 </Text>
 <div className="text-[10px] text-[#495057] mb-[3px] flex items-center">
 <span className="w-[7px] h-[7px] bg-[#2e7d32] rounded-full inline-block mr-[4px]"></span>
 Capacity
 </div>
 <div className="text-[10px] text-[#495057] mb-[3px] flex items-center">
 <span className="w-[7px] h-[7px] bg-[#2e7d32] rounded-full inline-block mr-[4px]"></span>
 Stability
 </div>
 <div className="text-[10px] text-[#495057] mb-[3px] flex items-center">
 <span className="w-[7px] h-[7px] bg-[#2e7d32] rounded-full inline-block mr-[4px]"></span>
 Health
 </div>
 </Column>
 ))}
 </Row>

 <div className="border-t border-solid border-[#e2e8f0] my-[8px]"></div>

 <Text className="text-[10.5px] m-0 leading-[1.4]">
 <span className="font-semibold">Autosys Success Rate:</span>
 <br />
 Last 2 Weeks: <strong className="text-[#2e7d32]">{autosysRate}</strong> (Target: {autosysTarget}){" "}
 <span className="text-[#dc2626] font-bold">{autosysDiff}</span>
 </Text>

 <div className="border-t border-solid border-[#e2e8f0] my-[8px]"></div>

 <Text className="font-semibold text-[10.5px] m-0 mb-[4px]">
 EAP Cluster Small Files
 </Text>
 <table className="w-full border-collapse text-[10px]">
 <thead>
 <tr className="bg-[#f1f5f9]">
 <th className="border border-solid border-[#d0d7de] p-[3px] text-left font-semibold">Cluster</th>
 <th className="border border-solid border-[#d0d7de] p-[3px] text-left font-semibold">Files & Dirs</th>
 <th className="border border-solid border-[#d0d7de] p-[3px] text-left font-semibold">Total Objects</th>
 <th className="border border-solid border-[#d0d7de] p-[3px] text-left font-semibold">Trend</th>
 </tr>
 </thead>
 <tbody>
 {smallFiles.map((sf, idx) => (
 <tr key={idx}>
 <td className="border border-solid border-[#d0d7de] p-[3px]">{sf.cluster}</td>
 <td className="border border-solid border-[#d0d7de] p-[3px]">{sf.filesAndDirs}</td>
 <td className="border border-solid border-[#d0d7de] p-[3px]">{sf.totalObjects}</td>
 <td className="border border-solid border-[#d0d7de] p-[3px] font-bold text-[#16a34a]">{sf.trend}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </Column>

 {/* JIRA Delivery Metrics Card */}
 <Column className="w-[52%] align-top pl-[4px]">
 <div className="border border-solid border-[#c2d1e5] bg-white">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 JIRA Delivery Metrics
 </div>
 <div className="p-[8px]">
 {/* 3 KPI Summary Cards */}
 <Row className="mb-[8px]">
 <Column className="w-[33%] pr-[3px]">
 <div className="bg-[#e8f4fd] border border-solid border-[#90caf9] p-[6px] text-center rounded-[2px]">
 <div className="text-[9px] font-semibold text-[#0d47a1]">Closed<br />Last 2 Weeks</div>
 <div className="text-[18px] font-bold text-[#0d47a1] mt-[2px]">{jiraClosed}</div>
 </div>
 </Column>
 <Column className="w-[33%] px-[2px]">
 <div className="bg-[#e8f5e9] border border-solid border-[#a5d6a7] p-[6px] text-center rounded-[2px]">
 <div className="text-[9px] font-semibold text-[#1b5e20]">Planned<br />Next 2 Weeks</div>
 <div className="text-[18px] font-bold text-[#1b5e20] mt-[2px]">{jiraPlanned}</div>
 </div>
 </Column>
 <Column className="w-[33%] pl-[3px]">
 <div className="bg-[#fff8e1] border border-solid border-[#ffe082] p-[6px] text-center rounded-[2px]">
 <div className="text-[9px] font-semibold text-[#e65100]">Retargeted<br />Next 2 Weeks</div>
 <div className="text-[18px] font-bold text-[#e65100] mt-[2px]">{jiraRetargeted}</div>
 </div>
 </Column>
 </Row>

 {/* Components Table */}
 <table className="w-full border-collapse text-[10px] text-center">
 <thead>
 <tr className="bg-[#f8fafc]">
 <th className="border border-solid border-[#cbd5e1] p-[3px] text-left font-semibold">Component</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] bg-[#e3f2fd] text-[#0d47a1] font-semibold">Closed</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] bg-[#e8f5e9] text-[#1b5e20] font-semibold">Planned</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] bg-[#fff8e1] text-[#e65100] font-semibold">Retargeted</th>
 </tr>
 </thead>
 <tbody>
 {jiraComponents.map((jc, idx) => (
 <tr key={idx}>
 <td className="border border-solid border-[#cbd5e1] p-[3px] text-left font-medium">{jc.component}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#e3f2fd] text-[#0d47a1] font-bold">{jc.closed}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#e8f5e9] text-[#1b5e20] font-bold">{jc.planned}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#fff8e1] text-[#e65100] font-bold">{jc.retargeted}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </Column>
 </Row>

 {/* Announcements Card */}
 <div className="border border-solid border-[#c2d1e5] bg-white mb-[12px]">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 Announcements and Critical Issues
 </div>
 <div className="p-[10px]">
 {announcements.map((ann, idx) => (
 <div key={idx} className="text-[10px] leading-[1.45] mb-[7px] text-[#1f2937]">
 <strong>{ann.id}:</strong> {ann.text}
 {ann.actionHighlight && (
 <span className="text-[#dc2626] font-bold">{ann.actionHighlight}</span>
 )}
 </div>
 ))}
 <div className="bg-[#2e7d32] text-white font-bold p-[8px] px-[10px] rounded-[2px] text-[10.5px] mt-[4px]">
 {milestoneBanner}
 </div>
 </div>
 </div>

 {/* Key Projects Delivery Status */}
 <div className="border border-solid border-[#c2d1e5] bg-white mb-[12px]">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 Key Projects Delivery Status
 </div>
 <div className="p-[6px] px-[10px]">
 
 {/* Track 1: Platform */}
 <div className="bg-[#f1f5f9] font-bold text-[10.5px] p-[4px] px-[8px] border-l-[4px] border-solid border-[#1e5bc6] my-[6px]">
 Platform Status: <span className="text-[#22c55e]">●</span> | Issues: 2 | Risks: 0
 </div>
 <table className="w-full border-collapse text-[10px] mb-[8px]">
 <thead>
 <tr className="bg-[#f8fafc]">
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-left font-semibold">Key Item</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[75px] text-left font-semibold">ETA</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[65px] text-center font-semibold">Status</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[55px] text-center font-semibold">Issue #</th>
 </tr>
 </thead>
 <tbody>
 {platformProjects.map((p, idx) => (
 <tr key={idx}>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px]">{p.keyItem}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px]">{p.eta}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-center">
 <span
 className={`inline-block py-[2px] px-[8px] text-white font-bold text-[9.5px] rounded-[2px] min-w-[44px] ${
 p.statusType === "blue"
 ? "bg-[#1976d2]"
 : p.statusType === "green"
 ? "bg-[#2e7d32]"
 : p.statusType === "orange"
 ? "bg-[#f57c00]"
 : "bg-[#718096]"
 }`}
 >
 {p.status}
 </span>
 </td>
 <td className={`border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-center ${p.issueNum ? "text-[#dc2626] font-bold" : ""}`}>
 {p.issueNum || "-"}
 </td>
 </tr>
 ))}
 </tbody>
 </table>

 {/* Track 2: Frameworks */}
 <div className="bg-[#f1f5f9] font-bold text-[10.5px] p-[4px] px-[8px] border-l-[4px] border-solid border-[#1e5bc6] my-[6px]">
 Frameworks Status: <span className="text-[#22c55e]">●</span> | Issues: 0 | Risks: 0
 </div>
 <table className="w-full border-collapse text-[10px] mb-[8px]">
 <thead>
 <tr className="bg-[#f8fafc]">
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-left font-semibold">Key Items</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[75px] text-left font-semibold">ETA</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[65px] text-center font-semibold">Status</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[55px] text-center font-semibold">Issue #</th>
 </tr>
 </thead>
 <tbody>
 {frameworkProjects.map((p, idx) => (
 <tr key={idx}>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px]">{p.keyItem}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px]">{p.eta}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-center">
 <span
 className={`inline-block py-[2px] px-[8px] text-white font-bold text-[9.5px] rounded-[2px] min-w-[44px] ${
 p.statusType === "blue" ? "bg-[#1976d2]" : "bg-[#2e7d32]"
 }`}
 >
 {p.status}
 </span>
 </td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-center">-</td>
 </tr>
 ))}
 </tbody>
 </table>

 {/* Track 3: OneOps */}
 <div className="bg-[#f1f5f9] font-bold text-[10.5px] p-[4px] px-[8px] border-l-[4px] border-solid border-[#1e5bc6] my-[6px]">
 OneOps Status: <span className="text-[#22c55e]">●</span> | Issues: 0 | Risks: 0
 </div>
 <table className="w-full border-collapse text-[10px] mb-[8px]">
 <thead>
 <tr className="bg-[#f8fafc]">
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-left font-semibold">Key Items</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[75px] text-left font-semibold">ETA</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[65px] text-center font-semibold">Status</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[55px] text-center font-semibold">Issue #</th>
 </tr>
 </thead>
 <tbody>
 {oneOpsProjects.map((p, idx) => (
 <tr key={idx}>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px]">{p.keyItem}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px]">{p.eta}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-center">
 <span
 className={`inline-block py-[2px] px-[8px] text-white font-bold text-[9.5px] rounded-[2px] min-w-[44px] ${
 p.statusType === "blue"
 ? "bg-[#1976d2]"
 : p.statusType === "green"
 ? "bg-[#2e7d32]"
 : p.statusType === "orange"
 ? "bg-[#f57c00]"
 : "bg-[#718096]"
 }`}
 >
 {p.status}
 </span>
 </td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-center">-</td>
 </tr>
 ))}
 </tbody>
 </table>

 {/* Track 4: DevSecOps */}
 <div className="bg-[#f1f5f9] font-bold text-[10.5px] p-[4px] px-[8px] border-l-[4px] border-solid border-[#1e5bc6] my-[6px]">
 DevSecOps Status: <span className="text-[#22c55e]">●</span> | Issues: 0 | Risks: 0
 </div>
 <table className="w-full border-collapse text-[10px] mb-[4px]">
 <thead>
 <tr className="bg-[#f8fafc]">
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-left font-semibold">Key Items</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[75px] text-left font-semibold">Coverage</th>
 <th className="border border-solid border-[#cbd5e1] p-[3px] px-[6px] w-[55px] text-center font-semibold">Issue #</th>
 </tr>
 </thead>
 <tbody>
 {devSecOpsProjects.map((p, idx) => (
 <tr key={idx}>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px]">{p.keyItem}</td>
 <td className="border border-solid border-[#cbd5e1] p-[3px] px-[6px]">
 <span className="inline-block py-[2px] px-[8px] text-white font-bold text-[9.5px] rounded-[2px] bg-[#2e7d32]">
 {p.status}
 </span>
 </td>
 <td className={`border border-solid border-[#cbd5e1] p-[3px] px-[6px] text-center ${p.issueNum ? "text-[#dc2626] font-bold" : ""}`}>
 {p.issueNum || "-"}
 </td>
 </tr>
 ))}
 </tbody>
 </table>

 </div>
 </div>

 {/* Bottom Onboarding Matrices */}
 <Row>
 {/* Framework Onboarding */}
 <Column className="w-[33%] align-top pr-[4px]">
 <div className="border border-solid border-[#c2d1e5] bg-white">
 <div className="bg-[#1e5bc6] text-white font-bold text-[10px] p-[4px] text-center">
 Framework Onboarding
 </div>
 <table className="w-full border-collapse text-[9.5px] text-center">
 <tbody>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Data Control</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">2020</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Step</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#d32f2f] text-white font-bold">IB4.23</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#94a3b8] text-white font-bold">NA</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#94a3b8] text-white font-bold">NA</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Compaction Enabled</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">100%</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#94a3b8] text-white font-bold">NA</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#94a3b8] text-white font-bold">NA</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Impala/SB Enabled</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#d32f2f] text-white font-bold">NA</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">NA</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">NA</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Inbound Feed</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">2019</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Outbound Feed</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#f57c00] text-white font-bold">7450</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td></tr>
 </tbody>
 </table>
 </div>
 </Column>

 {/* ITLOD Onboarding */}
 <Column className="w-[33%] align-top px-[2px]">
 <div className="border border-solid border-[#c2d1e5] bg-white">
 <div className="bg-[#1e5bc6] text-white font-bold text-[10px] p-[4px] text-center">
 iTLOD Onboarding
 </div>
 <table className="w-full border-collapse text-[9.5px] text-center">
 <tbody>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">EoD-M</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">9307</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Unity</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">245</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">NJ vs NY Diff</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">10</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Inter-component</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td></tr>
 <tr><td className="border border-solid border-[#cbd5e1] p-[3px] text-left">Volume</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">63</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td><td className="border border-solid border-[#cbd5e1] p-[3px] bg-[#2e7d32] text-white font-bold">0</td></tr>
 </tbody>
 </table>
 </div>
 </Column>

 {/* Platform Migration */}
 <Column className="w-[34%] align-top pl-[4px]">
 <div className="border border-solid border-[#c2d1e5] bg-white h-full">
 <div className="bg-[#1e5bc6] text-white font-bold text-[10px] p-[4px] text-center">
 Platform
 </div>
 <div className="p-[10px] text-center">
 <div className="font-semibold text-[10px] mb-[8px]">
 Tibco to Solace Migration
 </div>
 <div className="text-center">
 <span className="bg-[#2e7d32] text-white font-bold py-[4px] px-[8px] rounded-[2px] mx-[2px] text-[10px]">78</span>
 <span className="bg-[#1976d2] text-white font-bold py-[4px] px-[8px] rounded-[2px] mx-[2px] text-[10px]">45</span>
 <span className="bg-[#2e7d32] text-white font-bold py-[4px] px-[8px] rounded-[2px] mx-[2px] text-[10px]">28</span>
 </div>
 </div>
 </div>
 </Column>
 </Row>

 </Column>

 {/* RIGHT COLUMN: ~32% Width */}
 <Column className="w-[32%] align-top pl-[6px]">
 
 {/* Productivity Metrics */}
 <div className="border border-solid border-[#c2d1e5] bg-white mb-[12px]">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 Productivity Metrics
 </div>
 <div className="p-[10px]">
 <div className="font-semibold text-[#475569] text-[10px]">Engineering Population</div>
 <div className="text-[22px] font-extrabold text-[#0c1a30] my-[2px]">{populationPercent}</div>

 {productivityTargets.map((pt, idx) => (
 <div key={idx} className="mb-[6px]">
 <div className="flex justify-between text-[9.5px] font-semibold">
 <span>{pt.label}</span>
 <span className="text-[#64748b]">Target: {pt.target}</span>
 </div>
 <div className="bg-[#e2e8f0] h-[14px] rounded-[2px] overflow-hidden mt-[2px]">
 <div
 className={`h-full text-white text-[9px] font-bold text-right pr-[4px] leading-[14px] ${
 pt.isWarning ? "bg-[#f57c00]" : "bg-[#2e7d32]"
 }`}
 style={{ width: `${pt.percentNum}%` }}
 >
 {pt.current}
 </div>
 </div>
 </div>
 ))}

 <div className="font-semibold text-[10px] text-[#475569] mt-[8px]">
 GitHub CoPilot Contribution
 </div>
 <div className="text-[16px] font-extrabold text-[#0284c7] mt-[2px]">
 {copilotPercent} <span className="text-[10px] font-normal text-[#64748b]">Target: {copilotTarget}</span>
 </div>
 </div>
 </div>

 {/* EE Capabilities */}
 <div className="border border-solid border-[#c2d1e5] bg-white mb-[12px]">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 EE Capabilities
 </div>
 <div className="p-[10px]">
 <div className="font-bold text-[10px] mb-[4px]">Tool Adoption Metrics</div>
 <table className="w-full text-[10px] mb-[10px]">
 <tbody>
 {toolAdoption.map((ta, idx) => (
 <tr key={idx}>
 <td>{ta.label}</td>
 <td className="text-right font-bold">
 {ta.value} {ta.percent && <span className="text-[#64748b] font-normal">{ta.percent}</span>}
 </td>
 </tr>
 ))}
 </tbody>
 </table>

 <div className="font-bold text-[10px] mb-[4px]">Capabilities</div>
 <table className="w-full text-[9.5px] leading-[1.4]">
 <tbody>
 {capabilities.map((cap, idx) => (
 <tr key={idx}>
 <td>{cap.label}</td>
 <td className={`text-right font-bold ${cap.value === "100%" ? "text-[#16a34a]" : ""}`}>
 {cap.value}
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>

 {/* SONAR Score */}
 <div className="border border-solid border-[#c2d1e5] bg-white mb-[12px]">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 SONAR Score
 </div>
 <div className="p-[10px] px-[12px]">
 {/* Test Coverage */}
 <div className="font-bold text-[10.5px] text-[#1e293b] pb-[3px] border-b-[2px] border-solid border-[#1e5bc6] mt-[2px]">
 Test Coverage <span className="text-[9px] font-normal text-[#64748b]">(54 repos)</span>
 </div>
 <table className="w-full border-collapse text-center my-[4px] mb-[8px]">
 <tbody>
 <tr className="text-[#475569] text-[9.5px] font-semibold bg-[#f8fafc] border-b border-solid border-[#e2e8f0]">
 {sonarCoverage.map((sc, idx) => (
 <td key={idx} className="p-[3px]">{sc.range}</td>
 ))}
 </tr>
 <tr className="font-bold text-[11px] text-[#0f172a]">
 {sonarCoverage.map((sc, idx) => (
 <td key={idx} className="p-[5px]">{sc.count}</td>
 ))}
 </tr>
 </tbody>
 </table>

 {/* Sonar Grades */}
 {sonarGrades.map((sg, idx) => (
 <div key={idx} className="mb-[6px]">
 <div className="font-bold text-[10.5px] text-[#1e293b] pb-[3px] border-b-[2px] border-solid border-[#1e5bc6] mt-[6px]">
 {sg.category}
 </div>
 <table className="w-full border-collapse text-center my-[4px]">
 <tbody>
 <tr className="text-[#475569] text-[9.5px] font-semibold bg-[#f8fafc] border-b border-solid border-[#e2e8f0]">
 <td className="p-[3px]">A</td>
 <td className="p-[3px]">B</td>
 <td className="p-[3px]">C</td>
 <td className="p-[3px]">D</td>
 <td className="p-[3px]">E</td>
 </tr>
 <tr className="font-bold text-[11px] text-[#0f172a]">
 <td className="p-[5px]">{sg.a}</td>
 <td className="p-[5px]">{sg.b}</td>
 <td className="p-[5px]">{sg.c}</td>
 <td className="p-[5px]">{sg.d}</td>
 <td className="p-[5px]">{sg.e}</td>
 </tr>
 </tbody>
 </table>
 </div>
 ))}
 </div>
 </div>

 {/* Developer Manifesto */}
 <div className="border border-solid border-[#c2d1e5] bg-white">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 Developer Manifesto
 </div>
 <div className="p-[8px] px-[12px]">
 {manifestoCategories.map((cat, idx) => (
 <div key={idx} className="mb-[6px]">
 <div className="font-bold text-[10px] text-[#1e5bc6] pb-[3px] border-b-[2px] border-solid border-[#1e5bc6] flex justify-between mt-[6px]">
 <span>{cat.title}</span>
 <span>{cat.overallPercent}</span>
 </div>
 <table className="w-full border-collapse text-[10px] text-[#334155] mt-[4px]">
 <tbody>
 {cat.items.map((item, iIdx) => (
 <tr key={iIdx}>
 <td className="py-[3px]">{item.label}</td>
 <td className="text-right font-bold text-[11px] text-[#0f172a] py-[3px]">{item.percent}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 ))}
 </div>
 </div>

 </Column>
 </Row>
 </Section>

 {/* Status Legend */}
 <Section className="px-[12px] pt-[4px]">
 <div className="flex items-center gap-[12px] p-[8px] px-[12px] bg-[#f8fafc] border border-solid border-[#cbd5e1] text-[10px] font-semibold">
 <span>Status Legend:</span>
 <span className="py-[2px] px-[10px] text-white text-[9.5px] font-bold rounded-[2px] bg-[#1976d2]">Closed/Completed</span>
 <span className="py-[2px] px-[10px] text-white text-[9.5px] font-bold rounded-[2px] bg-[#2e7d32]">Planned/In Progress</span>
 <span className="py-[2px] px-[10px] text-white text-[9.5px] font-bold rounded-[2px] bg-[#f57c00]">Retargeted/Warning</span>
 <span className="py-[2px] px-[10px] text-white text-[9.5px] font-bold rounded-[2px] bg-[#718096]">Not Started/NA</span>
 </div>
 </Section>

 {/* Need Attention */}
 <Section className="px-[12px] pt-[8px]">
 <div className="border border-solid border-[#c2d1e5] bg-white">
 <div className="bg-[#1e5bc6] text-white font-bold text-[12px] p-[6px] text-center tracking-[0.3px]">
 Need Attention
 </div>
 <div className="border border-solid border-[#fed7aa] bg-[#fffbeb] border-l-[5px] border-l-[#f59e0b] p-[10px] px-[14px] text-[10.5px] leading-[1.5]">
 {needAttentionItems.map((item, idx) => (
 <div key={idx} className={idx > 0 ? "mt-[6px]" : ""}>
 <strong className="text-[#92400e]">{item.id}: {item.title}</strong> – {item.desc}
 </div>
 ))}
 </div>
 </div>
 </Section>

 {/* Footer Points of Contact */}
 <Section className="bg-[#1e5bc6] text-white p-[14px] px-[20px] mt-[12px]">
 <h4 className="m-0 mb-[10px] text-[11px] font-bold tracking-[0.3px] text-white">
 For Any Questions, Please reach out to:
 </h4>
 <Row>
 {contacts.map((c, idx) => (
 <Column key={idx} className="w-[20%] align-top text-[9.5px] leading-[1.45] pr-[4px]">
 <strong className="block text-[10px] mb-[4px] text-white font-bold">{c.names}</strong>
 {c.tracks.map((t, tIdx) => (
 <div key={tIdx} className="text-white">- {t}</div>
 ))}
 </Column>
 ))}
 </Row>
 </Section>

 </Container>
 </Body>
 </Tailwind>
 </Html>
 );
};

export default OlympusNewsletterEmail;
