export type SkillGroup = {
  group: "Mobile" | "Frontend" | "Backend" | "Cloud/DevOps" | "AI/ML";
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type ProjectItem = {
  id: string;
  name: string;
  category: "Mobile" | "Full-stack" | "ML";
  impact: string;
  stack: string[];
  shortStory: string;
  bullets: string[];
  repoUrl?: string;
  liveUrl?: string;
  screenshots?: string[];
  note?: string;
};

export const profile = {
  name: "Poojan Kaneriya",
  title: "Software Engineer (Mobile + Full-Stack)",
  location: "New York, NY",
  email: "poojankaneriya1@gmail.com",
  phone: "(716) 750-9154",
  links: {
    website: "https://poojankaneriya.in",
    github: "https://github.com/kaneriyapoojan",
    linkedin: "https://www.linkedin.com/in/poojan-kaneriya/",
    resume: "/resume/Poojan_Kaneriya_Resume.pdf"
  },
  oneLiner:
    "Software Engineer building high-performance mobile and full-stack products with Android, React Native, and cloud-native backends.",
  goals:
    "Seeking full-time Software Engineer opportunities (Mobile / Full-Stack) in the USA where I can ship user-facing features and scalable backend systems.",
  proofPoints: [
    "MS in Computer Science (GPA 3.93) at University at Buffalo",
    "Shipped mobile + backend flows that lifted booking conversion by 18%",
    "Built transaction platform supporting 1K+ daily payments",
    "Applied AI/ML across NLP, diffusion, and vision projects"
  ],
  aboutVariants: [
    "I am a Software Engineer focused on Android and React Native experiences backed by robust Node.js and cloud systems. I care about measurable outcomes, clean architecture, and reliable release pipelines.",
    "My background combines mobile product engineering with backend reliability work, from offline-first scheduling to secure media pipelines on AWS. I am now extending that foundation into applied AI/ML projects.",
    "I build practical products where mobile UX, API design, and cloud operations meet. Recently, I have been exploring transformer and diffusion models to strengthen my applied ML depth."
  ],
  skills: [
    {
      group: "Mobile",
      skills: [
        "Kotlin",
        "Java",
        "Swift",
        "React Native",
        "Android SDK",
        "Jetpack Compose",
        "MVVM",
        "SQLite"
      ]
    },
    {
      group: "Frontend",
      skills: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS"]
    },
    {
      group: "Backend",
      skills: [
        "Node.js",
        "Express",
        "FastAPI",
        "PostgreSQL",
        "MongoDB",
        "Firebase",
        "Redis",
        "GraphQL",
        "WebSockets",
        "REST APIs"
      ]
    },
    {
      group: "Cloud/DevOps",
      skills: [
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "GitHub Actions",
        "Fastlane",
        "CloudFront",
        "FCM"
      ]
    },
    {
      group: "AI/ML",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Transformers",
        "Generative AI",
        "Anomaly Detection",
        "Model Evaluation",
        "Computer Vision",
        "NLP"
      ]
    }
  ] satisfies SkillGroup[],
  experience: [
    {
      company: "University at Buffalo",
      role: "Software Engineer",
      location: "New York, USA",
      start: "Aug 2025",
      end: "Dec 2025",
      bullets: [
        "Drove React Native + Node.js booking flows, improving booking conversion by 18% and reducing time-to-book by 30%.",
        "Improved startup performance via lazy loading, memoization, and image caching, making cold start 35% faster with 99% crash-free sessions.",
        "Built push and media pipeline (FCM + AWS S3 pre-signed uploads + CloudFront), reducing gallery load p95 by 40% and no-show rates by 15%.",
        "Implemented offline-first scheduling and secure JWT refresh flows with SQLite queued sync.",
        "Coordinated GitHub Actions + Fastlane release pipeline with smoke tests to reduce regressions."
      ]
    },
    {
      company: "IQ Infinite Technologies",
      role: "Software Engineer",
      location: "India",
      start: "Aug 2023",
      end: "Jul 2024",
      bullets: [
        "Architected Kotlin MVVM Android systems and analytics-led UX, increasing user engagement by 35%.",
        "Engineered secure POS platform (Node.js + PostgreSQL + WebSockets) handling 1K+ daily transactions with 20% reliability gains under peak load.",
        "Unified iOS/Android data sync and reduced platform-specific defects by 20%.",
        "Led Docker + AWS + Kubernetes deployment automation, reducing deployment downtime by 25%.",
        "Launched FCM notification features, improving retention by 8%."
      ]
    },
    {
      company: "Archadia Virtual Pvt Ltd",
      role: "Software Engineer Intern",
      location: "India",
      start: "Feb 2023",
      end: "Jul 2023",
      bullets: [
        "Built modular Android features with Kotlin, Jetpack Compose, and Android SDK, reducing render latency by 18%.",
        "Raised unit and integration coverage to 90%, shortening release cycles.",
        "Integrated Firebase Cloud Functions + Firestore with role-based access and on-device caching; supported thousands of MAUs with sub-200ms p95 reads.",
        "Resolved memory and GC bottlenecks with profiler-driven tuning, reducing dropped frames by 25%."
      ]
    }
  ] satisfies ExperienceItem[],
  projects: [
    {
      id: "s2s-connect",
      name: "S2S Connect App",
      category: "Mobile",
      impact: "10K+ DAUs (resume claim)",
      stack: ["React Native", "Node.js", "Firebase Auth", "MongoDB", "AWS EC2"],
      shortStory:
        "Built a cross-platform social networking app with secure auth and scalable backend messaging.",
      bullets: [
        "Delivered mobile app architecture for social interactions and real-time updates.",
        "Designed backend services and data model for read-heavy workloads.",
        "Validated concurrency with load and integration testing."
      ],
      note: "TODO: confirm public repository link"
    },
    {
      id: "trello-clone",
      name: "Trello Clone - Project Management App",
      category: "Mobile",
      impact: "Real-time task collaboration app",
      stack: ["Java", "Android SDK", "Firebase Firestore", "Firebase Auth", "MVC"],
      shortStory:
        "Implemented a Trello-inspired collaboration app with live task updates and offline-aware Android architecture.",
      bullets: [
        "Implemented dynamic task flows using RecyclerView, ViewPager, and custom dialogs.",
        "Integrated Firebase auth and cloud storage for secure multi-user collaboration.",
        "Applied MVC structure for modular, maintainable Android code."
      ],
      note: "TODO: confirm public repository link"
    },
    {
      id: "vit-cats-dogs",
      name: "Vision Transformer for Image Classification",
      category: "ML",
      impact: "94.53% test accuracy",
      stack: ["PyTorch", "timm", "Streamlit", "Jupyter Notebook"],
      shortStory:
        "Fine-tuned a ViT-tiny model on Cats vs Dogs and documented training/evaluation workflow.",
      bullets: [
        "Used ImageNet-pretrained ViT backbone for efficient transfer learning.",
        "Achieved 98.60% train, 94.43% validation, and 94.53% test accuracy.",
        "Packaged model artifacts for notebook and Streamlit inference."
      ],
      repoUrl: "https://github.com/kaneriyapoojan/Vision-Transformer-ViT-for-Image-Classification"
    },
    {
      id: "ddim-mnist",
      name: "DDIM Inpainting on MNIST",
      category: "ML",
      impact: "Diffusion-based inpainting pipeline",
      stack: ["PyTorch", "DDIM", "U-Net", "MNIST"],
      shortStory:
        "Implemented diffusion-based center-hole inpainting with per-step data consistency constraints.",
      bullets: [
        "Built cosine schedule training + deterministic DDIM sampling (eta = 0).",
        "Added mid self-attention and timestep embeddings for reconstruction quality.",
        "Evaluated with hole-only PSNR/L1 metrics."
      ],
      repoUrl: "https://github.com/kaneriyapoojan/DDIM-Inpainting-on-MNIST",
      screenshots: [
        "https://raw.githubusercontent.com/kaneriyapoojan/DDIM-Inpainting-on-MNIST/main/outputs/inpaint/samples.png"
      ]
    },
    {
      id: "bart-summarization",
      name: "Summarization using LLMs",
      category: "ML",
      impact: "ROUGE-1 0.4778 | BLEU 19.87 | BERTScore 0.8820",
      stack: ["PyTorch", "Hugging Face", "BART", "BillSum"],
      shortStory:
        "Fine-tuned BART for abstractive legislative-text summarization with strong evaluation metrics.",
      bullets: [
        "Fine-tuned facebook/bart-base on BillSum subset for efficient experimentation.",
        "Tracked ROUGE, BLEU, and BERTScore with reproducible evaluation setup.",
        "Benchmarked generated summaries against references for qualitative review."
      ],
      repoUrl: "https://github.com/kaneriyapoojan/Summarization-using-LLMs"
    },
    {
      id: "transformer-scratch",
      name: "Transformer from Scratch with PyTorch",
      category: "ML",
      impact: "91.25% test accuracy",
      stack: ["PyTorch", "NLP", "AG News", "GloVe"],
      shortStory:
        "Implemented an encoder-only transformer architecture from scratch for text classification.",
      bullets: [
        "Implemented positional encoding, multi-head self-attention, and residual blocks manually.",
        "Achieved 91.25% test accuracy with regularization and early stopping.",
        "Used AG News benchmark with reproducible preprocessing pipeline."
      ],
      repoUrl: "https://github.com/kaneriyapoojan/Transformer-with-PyTorch",
      screenshots: [
        "https://github.com/user-attachments/assets/e88f9347-291a-479a-b2d1-19fcab076df4"
      ]
    },
    {
      id: "road-scene-segmentation",
      name: "Road Scene Segmentation for Autonomous Driving",
      category: "ML",
      impact: ">80% mIoU (resume claim)",
      stack: ["PyTorch", "OpenCV", "NumPy", "DeepLabV3+", "U-Net"],
      shortStory:
        "Built semantic segmentation pipeline for drivable areas, vehicles, and pedestrians.",
      bullets: [
        "Trained U-Net and DeepLabV3+ variants with hybrid loss and augmentation.",
        "Improved edge quality and small-object detection via attention layers.",
        "Benchmarked on Cityscapes and KITTI with mIoU and precision metrics."
      ],
      note: "TODO: confirm public repository link"
    },
    {
      id: "archadia3d-site",
      name: "ARCHADIA3D Website",
      category: "Full-stack",
      impact: "Production website for architecture visualization studio",
      stack: ["HTML", "CSS", "JavaScript"],
      shortStory:
        "Built and deployed a responsive web presence for a 3D architecture service business.",
      bullets: [
        "Created clean presentation and service showcase sections for client conversion.",
        "Implemented responsive layout and contact-oriented UX.",
        "Shipped to production hosting for live marketing use."
      ],
      repoUrl: "https://github.com/kaneriyapoojan/ARCHADIA3D",
      liveUrl: "https://archadia3d.co.in/",
      screenshots: [
        "https://github.com/user-attachments/assets/707b9e4e-b54e-4eeb-8499-173e2655808a"
      ]
    }
  ] satisfies ProjectItem[],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "University at Buffalo",
      location: "Buffalo, NY",
      period: "Aug 2024 - Dec 2025",
      details: [
        "GPA: 3.93/4.0",
        "Coursework: Algorithm Analysis and Design, Machine Learning, Deep Learning, Data Intensive Computing, Predictive Analytics"
      ]
    },
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      institution: "Gujarat Technological University",
      location: "India",
      period: "Aug 2019 - May 2023",
      details: ["GPA: 9.0/10.0"]
    }
  ],
  certifications: [
    {
      name: "AWS Certified Developer - Associate",
      link: "TODO: confirm verification URL"
    }
  ],
  sourceAudit: {
    githubBio:
      "MS CS graduate from University at Buffalo | Software Engineer specializing in Android & React Native | Exploring AI/ML | Seeking full-time roles in the USA",
    linkedin:
      "Public profile content unavailable due LinkedIn auth wall. Headline/summary/experience should be manually verified.",
    resumePath: "/Users/poojan/UB/JOB SEARCH/Poojan_Kaneriya_Resume.pdf"
  }
};

export type ProfileData = typeof profile;
