export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tech: string[];
  featured: boolean;
  hubSkills: string[]; // skills this project connects to in the skills graph
  overview: string;
  highlights: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  github?: string;
  demo?: string;
  publication?: { name: string; venue: string };
};

export const projects: Project[] = [
  {
    slug: "solidusaidflow",
    title: "SolidusAidFlow",
    tagline: "IEEE-published blockchain framework for privacy-preserving humanitarian aid distribution.",
    category: "Blockchain / Systems",
    tech: ["Blockchain", "Smart Contracts", "Zero-Knowledge Proofs", "Decentralized Identity"],
    featured: true,
    hubSkills: ["Blockchain", "Cryptography", "Distributed Systems"],
    overview:
      "A blockchain-based aid distribution framework designed to make humanitarian aid transparent without exposing recipient identities. Combines decentralized identities, smart contracts, and Zero-Knowledge Proofs so eligibility can be verified without revealing sensitive personal data.",
    highlights: [
      "Designed a smart-contract layer governing aid disbursement with on-chain transparency and auditability.",
      "Applied Zero-Knowledge Proofs so recipient eligibility can be verified without exposing personal identity data.",
      "Modeled decentralized identity issuance and verification for aid recipients across distribution nodes.",
      "Co-authored and presented the full framework as a peer-reviewed IEEE conference paper (Madhya Pradesh, April 2026).",
    ],
    architecture: [
      "Decentralized Identity layer issues verifiable credentials to aid recipients.",
      "ZKP circuits prove eligibility criteria without revealing underlying identity attributes.",
      "Smart contracts enforce disbursement rules and record transactions immutably on-chain.",
    ],
    publication: {
      name: "Design and Evaluation of a Privacy-Preserving Blockchain Framework for Transparent Humanitarian Aid Distribution",
      venue: "IEEE Conference, Madhya Pradesh — April 2026",
    },
  },
  {
    slug: "enterprise-knowledge-graph",
    title: "Enterprise Knowledge Graph",
    tagline: "A Neo4j-powered engine that reasons over a student's academic and career graph to give explainable guidance.",
    category: "Backend / Graph Systems",
    tech: ["React", "Node.js", "Express", "Neo4j"],
    featured: true,
    hubSkills: ["Neo4j", "Node.js/Express", "Graph Reasoning"],
    overview:
      "Students often know their target career role but can't see the gap between where they are and what's required. This project models the entire academic-career ecosystem as a knowledge graph and performs multi-hop reasoning to generate explainable, personalized career guidance instead of simple keyword matching.",
    highlights: [
      "Modeled students, skills, courses, projects, and career roles in Neo4j using relationships like HAS_SKILL and REQUIRES_SKILL.",
      "Built backend graph traversal logic to compute career readiness scores and skill-gap analysis.",
      "Implemented a counterfactual simulation engine — 'what if I learned skill X' — showing readiness change and newly unlocked roles.",
      "Built an explainable learning path finder that ranks multiple strategies (fast-track, balanced, portfolio-first) with reasoning behind each.",
      "Integrated role-based access control via Express middleware for secure, scoped data access.",
    ],
    architecture: [
      "Raw academic records are cleaned and loaded into Neo4j as nodes and relationships.",
      "Express backend runs Cypher traversal queries to compute readiness, gaps, and bridge-to-role paths.",
      "React frontend renders readiness scores, recommendations, and the reasoning path behind each suggestion.",
    ],
    github: "https://github.com/thejeesh007/Enterprise_Knowledge_graph",
  },
  {
    slug: "gene-regulatory-network",
    title: "Gene Regulatory Network (GAT)",
    tagline: "Graph Attention Networks reconstruct gene regulatory pathways from microarray expression data.",
    category: "Machine Learning / Research",
    tech: ["Python", "PyTorch Geometric", "Graph Attention Networks"],
    featured: true,
    hubSkills: ["PyTorch", "Graph Neural Networks", "Statistical Modeling"],
    overview:
      "A graph-based computational framework that infers gene regulatory networks from high-dimensional microarray data by combining statistical correlation filtering with a Graph Attention Network trained via link prediction — co-authored as a research paper with Shruti S.",
    highlights: [
      "Reduced ~45,000 raw probe features to 339 informative genes via variance-based feature selection and probe consolidation.",
      "Built an initial co-expression graph using strictly-thresholded Pearson correlation (|r| > 0.99) to counter small-sample correlation inflation.",
      "Trained a two-layer Graph Attention Network on a link-prediction task to learn 16-dimensional gene embeddings.",
      "Used learned attention coefficients to prune weak edges and produce an interpretable, weighted regulatory network.",
    ],
    architecture: [
      "Preprocessing: probe consolidation → variance filtering → z-score normalization.",
      "Graph construction: Pearson correlation thresholding → adjacency matrix → PyG edge index.",
      "GAT: 2-layer multi-head attention trained via binary cross-entropy link prediction.",
      "Refinement: attention-weighted edge pruning → final weighted regulatory network.",
    ],
    metrics: [
      { label: "Nodes", value: "339 genes" },
      { label: "Edges", value: "24,528" },
      { label: "Final BCE loss", value: "~0.56" },
      { label: "Positive vs. negative logit gap", value: "1.15 vs. −0.097" },
    ],
    github: "https://github.com/thejeesh007/Gene_Gnn",
  },
  {
    slug: "f1-race-predictor",
    title: "F1 Race Outcome Predictor",
    tagline: "A machine learning pipeline trained on 7 seasons of F1 data — correctly called the 2025 Austria GP.",
    category: "Machine Learning",
    tech: ["Python", "scikit-learn", "Pandas", "Jolpica Ergast API"],
    featured: true,
    hubSkills: ["Python", "Data Pipelines", "Machine Learning"],
    overview:
      "An end-to-end pipeline — scraping, cleaning, feature engineering, and modeling — to forecast Formula 1 race outcomes. Trained on 7 seasons of historical race data and validated in a real-world setting by correctly predicting the outcome of the Austria Grand Prix.",
    highlights: [
      "Built a custom scraping and preprocessing pipeline against the Jolpica Ergast API spanning 2018–present.",
      "Engineered features from driver form, team pace, and grid position to train the prediction model.",
      "Validated the model in a real, unseen race: correctly predicted the 2025 Austria GP outcome.",
      "Diagnosed and fixed a recurring pipeline crash traced to cloud-sync (OneDrive) interference during file writes.",
    ],
    architecture: [
      "Jolpica Ergast API → scraping/preprocessing pipeline → cleaned multi-season dataset.",
      "Feature engineering (driver form, team pace, grid position) → trained ML model → race outcome predictions.",
    ],
    metrics: [
      { label: "Training seasons", value: "2018–2024 (7 seasons)" },
      { label: "Real-world validation", value: "Correctly predicted 2025 Austria GP" },
    ],
    github: "https://github.com/thejeesh007/F1-DUDUDU",
  },
  {
    slug: "adaptive-video-streaming",
    title: "Adaptive Video Streaming Framework",
    tagline: "A hierarchical client-server-relay streaming system with custom congestion control, built from scratch.",
    category: "Systems / Backend",
    tech: ["Java", "FFmpeg", "Multi-threading", "TCP-AIMD"],
    featured: true,
    hubSkills: ["Java", "Systems Design", "Concurrency"],
    overview:
      "A Java-based adaptive video streaming system implementing transport-layer reliability, real-time transcoding, and distributed session scaling from first principles — not built on an existing streaming SDK.",
    highlights: [
      "Implemented a custom TCP-AIMD congestion control scheme to adapt sending rate to real network conditions.",
      "Built selective retransmission so only lost packets are resent, not full segments.",
      "Used FFmpeg for real-time frame-level transcoding with dynamic bitrate adaptation, sustaining ~40 FPS playback.",
      "Architected multi-threaded session management with LRU-based caching at relay nodes for concurrent client scalability.",
    ],
    architecture: [
      "Clients connect through relay nodes (LRU-cached) rather than the origin server directly.",
      "Relay cache miss → request forwarded upstream → FFmpeg transcodes in real time at client-appropriate bitrate.",
      "Custom TCP-AIMD + selective retransmission handles transport-layer reliability under packet loss.",
    ],
    metrics: [{ label: "Sustained playback", value: "~40 FPS" }],
    github: "https://github.com/thejeesh007/CN-Project",
  },
  {
    slug: "quantum-smart-irrigation",
    title: "Quantum Smart Irrigation",
    tagline: "Variational Quantum Circuits vs. classical Logistic Regression for irrigation control.",
    category: "Quantum Machine Learning",
    tech: ["Python", "PennyLane", "Qiskit", "scikit-learn"],
    featured: true,
    hubSkills: ["Quantum Computing", "Python", "Machine Learning"],
    overview:
      "A benchmark comparing a Variational Quantum Circuit classifier against a classical Logistic Regression baseline on a smart irrigation decision task — pump ON/OFF from soil moisture, temperature, and humidity.",
    highlights: [
      "Built a Variational Quantum Circuit classifier in PennyLane with parameterized variational layers.",
      "Trained an identical-data classical Logistic Regression baseline for direct, fair comparison.",
      "Evaluated both models on Accuracy, Precision, Recall, and F1-Score.",
      "Visualized quantum training cost progression and side-by-side confusion matrices.",
    ],
    architecture: [
      "Synthetic irrigation dataset → train/test split.",
      "Parallel training: VQC (PennyLane/Qiskit backend) and Logistic Regression (scikit-learn).",
      "Shared evaluation suite → confusion matrices and cost-progression visualization.",
    ],
    github: "https://github.com/thejeesh007/Quantum-Irrigation",
  },
  {
    slug: "dressfit",
    title: "DressFit",
    tagline: "A 3D virtual clothing try-on experience built with React and Three.js.",
    category: "Frontend / 3D Graphics",
    tech: ["React", "Three.js", "react-three-fiber"],
    featured: true,
    hubSkills: ["React", "3D Graphics", "Frontend Engineering"],
    overview:
      "A 3D virtual dress-fitting web application enabling real-time avatar rendering, scaling, and rotation directly in the browser — no plugins, no native app required.",
    highlights: [
      "Built real-time 3D avatar rendering, scaling, and rotation using react-three-fiber.",
      "Implemented dynamic avatar scaling from user body measurements (height, bust, waist, hips).",
      "Designed dress customization logic (size, color, pattern) using geometric matching for fit accuracy.",
      "Currently extending with facial/body customization via Ready Player Me avatar integration.",
    ],
    github: "https://github.com/thejeesh007/DOSC-Dressfit",
  },
  {
    slug: "studysphere",
    title: "StudySphere",
    tagline: "An AI study companion — summarization, flashcards, quizzes, and a voice-and-text chatbot.",
    category: "AI / Full-stack",
    tech: ["React", "Generative AI", "Speech-to-Text"],
    featured: true,
    hubSkills: ["Generative AI", "React", "Product Thinking"],
    overview:
      "An interactive AI study tool that turns study material into summaries, flashcards, and quizzes automatically, paired with a voice-and-text chatbot for on-demand doubt resolution — built to demonstrate genuinely usable, polished generative AI product design.",
    highlights: [
      "Integrated pre-trained language models for summarization, flashcard generation, and quiz generation.",
      "Built a voice-and-text chatbot for interactive student doubt resolution.",
      "Designed a modern, student-first frontend UI rather than a bare API playground.",
    ],
    github: "https://github.com/thejeesh007/StudySphere",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
