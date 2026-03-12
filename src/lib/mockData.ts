export interface Session {
  id: string;
  name: string;
  date: string;
  documentCount: number;
  status: 'active' | 'closed' | 'exported';
  lastActivity: string;
}

export interface Document {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'csv' | 'txt' | 'json';
  status: 'processed' | 'processing' | 'error';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
  timestamp: string;
}

export interface Output {
  id: string;
  title: string;
  workflowType: string;
  timestamp: string;
  content: string;
}

export interface User {
  id: string;
  name: string;
  role: string;
  lastActive: string;
  status: 'online' | 'offline' | 'away';
}

export const mockSessions: Session[] = [
{
  id: 's1',
  name: 'State v. Martinez — Financial Records Review',
  date: '2023-10-24T09:30:00Z',
  documentCount: 14,
  status: 'active',
  lastActivity: '10 mins ago'
},
{
  id: 's2',
  name: 'Operation Ironclad — Comms Intercepts',
  date: '2023-10-23T14:15:00Z',
  documentCount: 42,
  status: 'active',
  lastActivity: '2 hours ago'
},
{
  id: 's3',
  name: 'Doe, J. — Background & Affiliations',
  date: '2023-10-20T11:00:00Z',
  documentCount: 8,
  status: 'exported',
  lastActivity: '3 days ago'
},
{
  id: 's4',
  name: 'City Bank Heist — CCTV & Witness Logs',
  date: '2023-10-18T16:45:00Z',
  documentCount: 112,
  status: 'closed',
  lastActivity: '1 week ago'
},
{
  id: 's5',
  name: 'Cartel Link Analysis — Q3 Transactions',
  date: '2023-10-15T08:20:00Z',
  documentCount: 56,
  status: 'exported',
  lastActivity: '2 weeks ago'
},
{
  id: 's6',
  name: 'Internal Affairs — Case #8829',
  date: '2023-10-10T13:10:00Z',
  documentCount: 3,
  status: 'closed',
  lastActivity: '2 weeks ago'
}];


export const mockDocuments: Document[] = [
{
  id: 'd1',
  name: 'Report_Martinez_051.pdf',
  size: '2.4 MB',
  type: 'pdf',
  status: 'processed'
},
{
  id: 'd2',
  name: 'BankRecords_Q3.csv',
  size: '14.1 MB',
  type: 'csv',
  status: 'processed'
},
{
  id: 'd3',
  name: 'Wiretap_Transcript_Oct12.txt',
  size: '84 KB',
  type: 'txt',
  status: 'processed'
},
{
  id: 'd4',
  name: 'Suspect_Device_Extraction.json',
  size: '45.2 MB',
  type: 'json',
  status: 'processing'
},
{
  id: 'd5',
  name: 'Warrant_Application_Draft.pdf',
  size: '1.1 MB',
  type: 'pdf',
  status: 'processed'
},
{
  id: 'd6',
  name: 'Encrypted_Drive_Manifest.csv',
  size: '3.3 MB',
  type: 'csv',
  status: 'error'
},
{
  id: 'd7',
  name: 'Witness_Statement_01.pdf',
  size: '4.5 MB',
  type: 'pdf',
  status: 'processed'
},
{
  id: 'd8',
  name: 'Witness_Statement_02.pdf',
  size: '3.8 MB',
  type: 'pdf',
  status: 'processed'
}];


export const mockChatMessages: ChatMessage[] = [
{
  id: 'm1',
  role: 'user',
  content:
  'Summarize the key financial anomalies found in the Q3 bank records for Martinez.',
  timestamp: '10:05 AM'
},
{
  id: 'm2',
  role: 'assistant',
  content:
  "Based on the provided Q3 bank records, there are three primary financial anomalies associated with Martinez:\n\n1. **Structured Deposits**: Between July 15 and August 2, there were 14 cash deposits made to the offshore account, all ranging exactly between $9,500 and $9,900, likely to evade reporting thresholds.\n2. **Unexplained Wire Transfers**: A sudden influx of $240,000 from a shell company (Apex Holdings LLC) on September 14, which does not align with Martinez's stated income.\n3. **Rapid Liquidation**: On September 28, 80% of the liquid assets in the primary checking account were transferred to three separate crypto exchanges within a 4-hour window.",
  sources: ['BankRecords_Q3.csv', 'Report_Martinez_051.pdf'],
  timestamp: '10:06 AM'
},
{
  id: 'm3',
  role: 'user',
  content: 'Did the wiretap transcript mention Apex Holdings?',
  timestamp: '10:08 AM'
},
{
  id: 'm4',
  role: 'assistant',
  content:
  'Yes. In `Wiretap_Transcript_Oct12.txt`, at timestamp 14:22, an unidentified male (Speaker 2) instructs Martinez to "route the next batch through Apex, just like last time." Martinez confirms by saying, "Understood, the holdings account is prepped." This directly links Martinez to the entity that wired the $240,000 on September 14.',
  sources: ['Wiretap_Transcript_Oct12.txt', 'BankRecords_Q3.csv'],
  timestamp: '10:08 AM'
}];


export const mockOutputs: Output[] = [
{
  id: 'o1',
  title: 'Financial Anomalies Summary',
  workflowType: 'Case Summary',
  timestamp: '10:15 AM',
  content: '...'
},
{
  id: 'o2',
  title: 'Martinez Timeline (July-Oct)',
  workflowType: 'Timeline',
  timestamp: '10:42 AM',
  content: '...'
},
{
  id: 'o3',
  title: 'Apex Holdings Entity Link',
  workflowType: 'Cross-Reference',
  timestamp: '11:05 AM',
  content: '...'
}];


export const mockUsers: User[] = [
{
  id: 'u1',
  name: 'J. Stauffer',
  role: 'Analyst',
  lastActive: 'Just now',
  status: 'online'
},
{
  id: 'u2',
  name: 'M. Chen',
  role: 'Prosecutor',
  lastActive: '5 mins ago',
  status: 'online'
},
{
  id: 'u3',
  name: 'D. Vance',
  role: 'Investigator',
  lastActive: '1 hour ago',
  status: 'away'
},
{
  id: 'u4',
  name: 'S. Reynolds',
  role: 'Admin',
  lastActive: '2 days ago',
  status: 'offline'
},
{
  id: 'u5',
  name: 'K. Washington',
  role: 'Analyst',
  lastActive: 'Just now',
  status: 'online'
}];