/**
 * Central portfolio data for Mohit Budhathoki.
 * Keep claims accurate. Update links and add projects/certifications only when verified.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Mohit Budhathoki',
  displayName: 'Mohit Budhathoki',
  firstName: 'MOHIT',
  seriesTag: 'NETWORKING • CYBERSECURITY',
  originalLabel: 'MOHIT BUDHATHOKI',

  role: 'Network Technician | Cybersecurity',

  tagline: [
    'Network Infrastructure',
    'Security Fundamentals',
  
  ],

  intro:
    'I am a Network Technician with practical experience in network infrastructure, configuration, and troubleshooting, alongside a growing interest in cybersecurity and hands-on security learning. I also have professional experience in Online Travel Agency (OTA) operations, including reservation management, guest coordination, inventory updates, rate-parity checks, and sales reporting.',
   
  about:
  'With a Bachelor of Engineering (Honours) in Computing, majoring in Computer Networks Engineering, I have developed a strong foundation in networking, infrastructure, configuration, and troubleshooting. I am also building my cybersecurity knowledge through hands-on learning with Kali Linux, TryHackMe, and Wireshark.\n\nBeyond technology, I have professional experience in OTA operations, including reservation management, guest coordination, inventory updates, rate-parity checks, and sales reporting. I enjoy solving problems, exploring new technologies, and continuously developing my skills.',


  location: 'Kathmandu, Nepal',

  email: 'mohitbudhathoki040@gmail.com',

  links: {
    linkedin: '',
    github: '',
  },

  resumePdf: '',

  portrait: {
  src: '/hehe.jpg',
  srcSet: '',
  alt: 'Mohit Budhathoki',
},

  interests: [
    'Network Security',
    'Digital Forensics',
    'Network Traffic Analysis',
    'Vulnerability Assessment',
    'Kickboxing',
  ],
};


export const education = [
  {
    school: 'Naaya Aayam Multi Disciplinary Institute',
    place: 'Nepal',
    degree: 'Bachelor of Engineering (Honours) in Computing — Major: Computer Networks Engineering',
    period: '2022 – 2025',
    score: '',
  },
  {
    school: 'Bal Uddhar Secondary School',
    place: 'Nepal',
    degree: 'High School — Technical and Vocational Education (Computer Engineering)',
    period: '2020 – 2022',
    score: '',
  },
];


export const experience = [
  {
    company: 'Lavish Technology Pvt. Ltd.',
    role: 'Network Technician',
    place: 'Kathmandu, Nepal',
    period: 'September 2026 – Present',
    points: [
      'Deploy, configure and maintain routers, switches, access points and modems at client sites and user workstations.',
      'Monitor network performance and troubleshoot connectivity, hardware and configuration faults across LAN, WAN and Wi-Fi.',
      'Configure IP addressing, DHCP, DNS and baseline network security settings.',
      'Perform structured cabling, termination, testing and fault-finding.',
      'Support the installation, upgrade and replacement of networking equipment.',
      'Document network configurations, equipment inventory and troubleshooting activity.',
      'Escalate complex issues to senior IT and network engineers and collaborate on resolution.',
    ],
  },
  {
    company: 'Barahi Hospitality and Leisure',
    role: 'OTA Associate – Sales and Marketing',
    place: 'Kathmandu, Nepal',
    period: 'October 2025 – August 2026',
    points: [
      'Oversaw OTA operations across the properties under Barahi Hospitality & Leisure.',
      'Managed OTA extranet updates, including availability, stop-sells and inventory, to keep listings accurate and bookable.',
      'Conducted daily multi-channel rate-parity audits.',
      'Prepared Excel sales reports for pricing review.',
    ],
  },
  {
    company: 'Barahi Hospitality and Leisure',
    role: 'On-the-Job Trainee – OTA Marketing & Communication',
    place: 'Kathmandu, Nepal',
    period: 'March 2025 – September 2025',
    points: [
      'Processed reservations from OTA platforms and direct sales calls, ensuring accurate data entry and confirmation in the property management system.',
      'Worked with internal teams and OTA partners to resolve booking discrepancies and maintain listing accuracy.',
    ],
  },
];


export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };



export const projects: Project[] = [
  {
    id: 'packet-tracer-network',
    title: 'Network Design & Configuration',
    year: 'Learning Project',
    genre: 'Networking • Infrastructure',
    logline:
      'A network simulation project focused on understanding network topology, IP addressing, device configuration, and end-to-end connectivity using Cisco Packet Tracer.',
    stack: [
      'Cisco Packet Tracer',
      'TCP/IP',
      'IP Addressing',
      'Network Topology',
    ],
    build: [
      'Designed and simulated network topologies to explore how devices communicate across a network.',
      'Practised networking concepts, including IP addressing, device connectivity, and basic network configuration.',
      'Explored connectivity testing and troubleshooting to strengthen foundational network support skills.',
    ],
    features: [
      'Network topology design and simulation',
      'IP addressing and device connectivity',
      'Network troubleshooting fundamentals',
    ],
    metrics: [],
    palette: { ...ocean },
    motif: 'flow',
  },
  {
    id: 'wireshark-packet-analysis',
    title: 'Network Traffic & Packet Analysis',
    year: 'Learning Project',
    genre: 'Networking • Cybersecurity',
    logline:
      'A hands-on learning project exploring network traffic, packet structure, and communication protocols using Wireshark.',
    stack: [
      'Wireshark',
      'TCP/IP',
      'Network Protocols',
      'Packet Analysis',
    ],
    build: [
      'Explored packet captures to understand how data travels between devices and how network protocols operate.',
      'Examined packet details and protocol fields to develop familiarity with network traffic analysis.',
      'Studied how packet inspection can support connectivity troubleshooting and introductory security investigations.',
    ],
    features: [
      'Network packet inspection',
      'Protocol and traffic analysis',
      'Networking troubleshooting concepts',
    ],
    metrics: [],
    palette: { ...jade },
    motif: 'shield',
  },
  {
    id: 'kali-linux-lab',
    title: 'Kali Linux Cybersecurity Lab',
    year: 'In Progress',
    genre: 'Cybersecurity • Linux',
    logline:
      'A personal virtual lab for building Linux proficiency and developing foundational cybersecurity knowledge through guided exercises and practical learning.',
    stack: [
      'Kali Linux',
      'VMware Fusion',
      'Linux',
      'TryHackMe',
    ],
    build: [
      'Set up a Kali Linux virtual machine using VMware Fusion on a MacBook Air with Apple silicon.',
      'Explore Linux commands, system tools, and networking concepts in a virtual lab environment.',
      'Use guided TryHackMe exercises and independent study to build familiarity with cybersecurity concepts and lab-based practice.',
    ],
    features: [
      'Virtualised Linux environment',
      'Linux and networking practice',
      'Guided cybersecurity lab exercises',
    ],
    metrics: [],
    palette: { ...crimson },
    motif: 'tenants',
  },
];


export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

// Add verified awards or achievements here when you have them.
export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

// Add certifications only after they have been earned.
export const certifications: Certification[] = [];


export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = {
  id: string;
  title: string;
  subtitle: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'networking',
    title: 'Networking & Infrastructure',
    subtitle: 'Networking fundamentals and practical configuration',
    skills: [
      { name: 'TCP/IP Fundamentals', mono: 'IP' },
      { name: 'IP Addressing & Subnetting', mono: 'SA' },
      { name: 'Routing & Switching', mono: 'RS' },
      { name: 'VLAN Fundamentals', mono: 'VL' },
      { name: 'DNS & DHCP', mono: 'DD' },
      { name: 'LAN/WAN Networking', mono: 'NW' },
      { name: 'Wi-Fi & Access Points', mono: 'WF' },
      { name: 'Structured Cabling', mono: 'SC' },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'IT Support & Troubleshooting',
    subtitle: 'Hardware, software and network support',
    skills: [
      { name: 'Hardware Troubleshooting', mono: 'HW' },
      { name: 'Software Troubleshooting', mono: 'SW' },
      { name: 'Windows Troubleshooting', mono: 'OS' },
      { name: 'Network Diagnostics', mono: 'ND' },
      { name: 'Connectivity Troubleshooting', mono: 'CT' },
      { name: 'Technical Problem Solving', mono: 'PS' },
    ],
  },
  {
    id: 'security',
    title: 'Cybersecurity & Network Analysis',
    subtitle: 'Security fundamentals and hands-on learning',
    skills: [
      { name: 'Wireshark', mono: 'WS', note: 'Traffic analysis practice' },
      { name: 'Nmap', mono: 'NM', note: 'Network scanning practice' },
      { name: 'Cybersecurity Fundamentals', mono: 'CS' },
      { name: 'Cyber Forensics Fundamentals', mono: 'DF' },
      { name: 'Network Protocol Analysis', mono: 'PA' },
      { name: 'Network Security Fundamentals', mono: 'NS' },
    ],
  },

  {
    id: 'professional',
  title: 'Professional, OTA & Business Operations',
  subtitle: 'Hospitality operations, business coordination and professional competencies',
  skills: [
    { name: 'OTA Channel & Extranet Management', mono: 'OTA' },
    { name: 'Reservation & Booking Management', mono: 'RM' },
    { name: 'Inventory & Availability Control', mono: 'IA' },
    { name: 'Multi-Channel Rate Parity Auditing', mono: 'RP' },
    { name: 'Sales Performance Reporting', mono: 'SR' },
    { name: 'Guest Relations & Coordination', mono: 'GC' },
    { name: 'Property Management System (PMS)', mono: 'PMS' },
    { name: 'Analytical & Critical Thinking', mono: 'AT' },
    { name: 'Technical Communication', mono: 'TC' },
    { name: 'Cross-Functional Collaboration', mono: 'CF' },
    { name: 'Problem Solving & Decision Making', mono: 'PS' },
    { name: 'Technical Documentation', mono: 'TD' },
  ],
},
 {
    id: 'tools',
    title: 'Systems & Technical Tools',
    subtitle: 'Operating systems and networking tools',
    skills: [
      { name: 'Cisco Packet Tracer', mono: 'PT', note: 'Network simulation' },
      { name: 'Linux Fundamentals', mono: 'LX' },
      { name: 'Kali Linux', mono: 'KL', note: 'Learning lab' },
      { name: 'VMware Fusion', mono: 'VM' },
      { name: 'Command-Line Fundamentals', mono: 'CLI' },
      { name: 'Technical Documentation', mono: 'TD' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'TCP/IP Fundamentals': ['Computer Networking coursework'],
  'IP Addressing & Subnetting': ['Computer Networking coursework'],
  'Routing & Switching': ['Computer Networking coursework'],
  'VLAN Fundamentals': ['Computer Networking coursework'],
  'DNS & DHCP': ['Networking coursework and practical experience'],
  'LAN/WAN Networking': ['Network Technician role'],
  'Wi-Fi & Access Points': ['Network infrastructure support experience'],
  'Structured Cabling': ['Network infrastructure support experience'],
  'Hardware Troubleshooting': [
    'Computer Hardware Masterclass — LearnVern',
    'Technical support experience',
  ],
  'Software Troubleshooting': ['Technical support and hands-on learning'],
  'Windows Troubleshooting': ['Windows troubleshooting practice'],
  'Network Diagnostics': ['Network troubleshooting experience'],
  'Connectivity Troubleshooting': ['Network Technician role'],
  'Technical Problem Solving': ['Hands-on technical learning and support'],
  Wireshark: ['Network traffic analysis practice'],
  Nmap: ['Network scanning practice'],
  'Cybersecurity Fundamentals': [
    'Cybersecurity learning and practical exercises',
  ],
  'Cyber Forensics Fundamentals': [
    'Cyber Forensics Masterclass — LearnVern',
  ],
  'Network Protocol Analysis': [
    'Computer Networking coursework and Wireshark practice',
  ],
  'Network Security Fundamentals': [
    'Cybersecurity coursework and independent learning',
  ],
  'Cisco Packet Tracer': ['Network simulation and configuration practice'],
  'Linux Fundamentals': ['Linux learning and practice'],
  'Kali Linux': ['Personal cybersecurity learning lab'],
  'VMware Fusion': ['Personal virtual lab'],
  'Command-Line Fundamentals': ['Linux learning and practice'],
  'Technical Documentation': ['Technical work and documentation'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Education & Foundations',
    period: '2020 – 2025',
    synopsis: 'Building a foundation in computer engineering, computing and computer networks.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Computer Engineering',
        description: 'Technical and vocational education in Computer Engineering at Bal Uddhar Secondary School.',
        tags: ['Computer Engineering', 'Technical Education'],
        runtime: '2020 – 2022',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Computing & Networks',
        description: 'Bachelor of Engineering (Honours) in Computing, majoring in Computer Networks Engineering.',
        tags: ['Computing', 'Computer Networks'],
        runtime: '2022 – 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Network Operations',
    period: '2025 – Present',
    synopsis: 'Hands-on work supporting client network infrastructure and troubleshooting connectivity issues.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Network Technician',
        description: 'Deploying, configuring, maintaining and troubleshooting LAN, WAN and Wi-Fi infrastructure at Lavish Technology Pvt. Ltd.',
        tags: ['LAN/WAN', 'Wi-Fi', 'Routers', 'Switches'],
        runtime: 'October 2025 – Present',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Cybersecurity Learning',
    period: 'Ongoing',
    synopsis: 'Building practical security knowledge through a home lab, packet analysis and guided practice labs.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Home Lab',
        description: 'Using a Kali Linux virtual machine to learn Linux, networking and security fundamentals.',
        tags: ['Kali Linux', 'VMware Fusion', 'Linux'],
        runtime: 'In progress',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Traffic Analysis',
        description: 'Practising packet analysis with Wireshark and network simulation with Cisco Packet Tracer.',
        tags: ['Wireshark', 'Packet Tracer'],
        runtime: 'Ongoing',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'Guided Labs',
        description: 'Completing TryHackMe labs to develop hands-on cybersecurity skills.',
        tags: ['TryHackMe', 'Security Fundamentals'],
        runtime: 'Ongoing',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current role', title: 'Network Technician', detail: 'Lavish Technology Pvt. Ltd.', palette: ocean },
  { label: 'Core strength', title: 'Network Troubleshooting', detail: 'LAN/WAN • Wi-Fi • Network devices', palette: amber },
  { label: 'Learning lab', title: 'Kali Linux', detail: 'Cybersecurity fundamentals', palette: crimson },
  { label: 'Traffic analysis', title: 'Wireshark', detail: 'Packet analysis practice', palette: jade },
  { label: 'Network simulation', title: 'Cisco Packet Tracer', detail: 'Network design and configuration practice', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Networking to Cybersecurity',
    lines: ['Mohit Budhathoki', 'Network Technician | Aspiring Cybersecurity Specialist'],
    chips: ['Networking', 'Cybersecurity', 'Digital Forensics'],
  },
  {
    kicker: 'Education',
    title: 'Computing & Networks',
    lines: ['BE (Honours) in Computing', 'Major: Computer Networks Engineering'],
    chips: ['2022 – 2025'],
  },
  {
    kicker: 'Experience',
    title: 'Network Technician',
    lines: ['Lavish Technology Pvt. Ltd.', 'Deploying, configuring and troubleshooting client network infrastructure'],
  },
  {
    kicker: 'Tools',
    title: 'Learning by Doing',
    lines: ['Kali Linux • Wireshark • Cisco Packet Tracer', 'TryHackMe guided labs • VMware Fusion'],
  },
  {
    kicker: 'Current mission',
    title: 'Building Security Skills',
    lines: ['Network security • Ethical hacking • Digital forensics', 'Practical learning and continuous improvement'],
  },
];

export type ProfileId = 'mohit' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'mohit',
    name: 'Portfolio',
    blurb: 'Profile, experience and learning projects',
    color: '#4cc9ff',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience and skills first',
    color: '#4cc9ff',
    order: ['story', 'skills', 'originals', 'about', 'journey', 'moments', 'picks'],
  },
  {
    id: 'developer',
    name: 'Technical',
    blurb: 'Tools, projects and learning first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'about', 'story', 'picks', 'moments'],
  },
  {
    id: 'creative',
    name: 'Journey',
    blurb: 'The story and highlights first',
    color: '#ffb547',
    order: ['journey', 'about', 'originals', 'skills', 'picks', 'moments', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Profile • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} learning and career stages`, palette: amber },
  originals: { nav: 'Projects', card: 'Projects & Labs', meta: `${projects.length} practice projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Highlights', meta: 'Career focus and tools', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} skill categories`, palette: ocean },
  moments: { nav: 'Development', card: 'Professional Development', meta: `${achievements.length} achievements • ${certifications.length} certifications listed`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
