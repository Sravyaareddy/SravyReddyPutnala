import { Metric, WorkExperience, Project, Education, Certification, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Putnala Sravya",
  title: "Java Full Stack Developer",
  subtitle: "Developing robust enterprise backends, Spring Boot services, and automated validation pipelines.",
  email: "sravyareddyputnala@gmail.com",
  phone: "+91 9515760527",
  location: "Bengaluru, India",
  linkedin: "https://www.linkedin.com/in/sravyareddyy/",
  objective: "Accomplished Associate Software Engineer specializing in Java and Spring Boot backend engineering, automated microservice validation, and database reconciliation workflows. Experienced in leading automated transaction checks, Hadoop ingestion pipelines, and integrating test automation suites to drive manual workloads down by 35%."
};

export const METRICS: Metric[] = [
  {
    id: "m1",
    value: "40+",
    label: "Checks Automated",
    description: "Enterprise validation checklists engineered using Cucumber Genie."
  },
  {
    id: "m2",
    value: "10M+",
    label: "Records Validated",
    description: "Database transactions verified per cycle with optimized SQL scripts."
  },
  {
    id: "m3",
    value: "-35%",
    label: "Workload Reduction",
    description: "Manual efforts eliminated through robust Cucumber test suites."
  },
  {
    id: "m4",
    value: "100%",
    label: "Hadoop Ingestion",
    description: "Stable data ingestion and precision checks executed without any data loss."
  },
  {
    id: "m5",
    value: "+25%",
    label: "Process Velocity",
    description: "Development productivity boost from automated branch cycles and Git optimization."
  }
];

export const EXPERIENCES: WorkExperience[] = [
  {
    id: "exp1",
    role: "Associate Software Engineer",
    company: "Accenture",
    location: "Bengaluru, India",
    period: "Aug 2024 – Present",
    client: "Standard Chartered Bank (SCB)",
    project: "ASPIRE Data Factory",
    bullets: [
      "Automated over 40+ vital data integrity and sanity checks using Cucumber Genie, slashing manual verification workloads by approximately 35%.",
      "Designed and executed high-performance SQL script frameworks to validate 10M+ massive records per cycle, resulting in an immediate 20% elevation in reconciliation reliability.",
      "Spearheaded stable Hadoop framework data ingestion and precision checks, maintaining a perfect record of zero data loss across 100+ active enterprise cycles.",
      "Successfully integrated Git into our agile workflows to optimize development velocity, minimizing merge conflicts by roughly 25% for a 12-developer cross-functional division.",
      "Constructed and launched automated feature specifications throughout critical regression and RT cycles, expanding baseline testing execution speeds by 15%.",
      "Collaborated extensively inside Azure DevOps for detailed product planning, delivering 6+ modern rapid sprints with an immaculate 100% on-time completion standard."
    ],
    tags: ["Standard Chartered", "Cucumber Genie", "SQL Validation", "Hadoop", "Git", "Azure DevOps", "Regression Testing", "Java Testing"]
  },
  {
    id: "exp2",
    role: "Software Engineering Intern",
    company: "Mouktik Consulting Services",
    location: "Hyderabad, India",
    period: "Aug 2023 - Dec 2023",
    bullets: [
      "Formulated and prototyped stable relational database data-loading components, streamlining initial setup routines.",
      "Conducted detailed explorations on optimization strategies to accelerate high-intensity query execution performance.",
      "Engineered automated Python/Java script suites to parse and clean raw transaction data feeds, boosting development cycle velocity."
    ],
    tags: ["Java", "Database Scripts", "Python", "Automation", "Software Engineering"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj1",
    title: "ASPIRE Data & Transaction Factory",
    category: "Enterprise Finance Backends",
    type: "Full Stack",
    description: "A secure Spring-based transaction processing and automated validation framework ensuring ledgers match perfectly.",
    detailedDescription: "Designed and implemented robust automated execution structures in Java for Standard Chartered Bank to monitor high-volume transactional flows. Solves the complex problem of manual ledger audit tasks, ensuring perfect security on ledger reconciliation across thousands of active bank branches.",
    bullets: [
      "Constructed backend Java processing routines to query and validate 10M+ transaction ledger keys per cycle.",
      "Integrated automated verification features via Cucumber Genie, saving 35% of QA work hours on regression runs.",
      "Customized robust Oracle SQL scripts to perform massive reconciliation checks, increasing data reliability ratings by 20%.",
      "Established pipeline structures inside Azure DevOps to safely trigger branch merges and reduce conflict frequencies by 25%."
    ],
    metrics: [
      { label: "Validations Per Run", value: "10M+" },
      { label: "Workload Saved", value: "35%" },
      { label: "Reconciliation Up", value: "20%" },
      { label: "Commit Conflict Rate", value: "-25%" }
    ],
    tags: ["Java", "Spring Boot", "Oracle SQL", "Cucumber Genie", "Hadoop", "Git", "Azure DevOps"],
    codeSnippet: `package com.accenture.aspire.reconciliation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class TransactionReconciler {
    private final Connection connection;

    public TransactionReconciler(Connection connection) {
        this.connection = connection;
    }

    public boolean validateCycleIntegrity(String cycleId) throws Exception {
        String query = "SELECT COUNT(*) AS total, SUM(amount) AS sum FROM transactions WHERE cycle_id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(query)) {
            stmt.setString(1, cycleId);
            try (ResultSet rs = stmt.executeQuery()) {
                if (rs.next()) {
                    long totalCount = rs.getLong("total");
                    double amountSum = rs.getDouble("sum");
                    System.out.printf("[ASPIRE] cycleId: %s | Count: %d | Sum: %.2f\\n", cycleId, totalCount, amountSum);
                    return totalCount > 0;
                }
            }
        }
        return false;
    }
}`
  },
  {
    id: "proj2",
    title: "Blink Of An Eye Portal",
    category: "Full Stack Healthcare Solutions",
    type: "Full Stack",
    description: "A secure digital dashboard matching organ donors with recipient urgency lists, featuring fast REST responders.",
    detailedDescription: "A complete Full Stack Java application connecting medical centers, eye donors, and recipients. Built using Spring Boot on the backend and interactive React controllers on the client-side to ensure seamless notifications and instantaneous corneal alignment lists.",
    bullets: [
      "Synthesized functional client-side tables and priority indexes, providing clean user interactions.",
      "Crafted reactive transactional endpoints that reduced baseline file document loading speeds by 25%.",
      "Formulated strict REST filters and input constraints to secure medical profiles and HIPAA sensitive indicators.",
      "Engineered clean database schema constraints to instantly align available cornea donors with ideal hospital recipients."
    ],
    metrics: [
      { label: "Response Speedup", value: "25%" },
      { label: "Execution Speed", value: "54ms" },
      { label: "Recipient Match Time", value: "Instant" },
      { label: "Data Integrity", value: "100%" }
    ],
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "Oracle Database", "REST Web Services"],
    codeSnippet: `@RestController
@RequestMapping("/api/donations")
public class DonationController {
    
    @Autowired
    private DonationService donationService;

    @PostMapping("/match")
    public ResponseEntity<MatchResult> triggerMatch(@Valid @RequestBody MatchRequest request) {
        MatchResult result = donationService.findOptimalRecipient(request.getDonorId());
        if (result.isSuccess()) {
             return ResponseEntity.ok(result);
        }
        return ResponseEntity.noContent().build();
    }
}`
  },
  {
    id: "proj3",
    title: "Agile Audit Reporting Engine",
    category: "Corporate Cloud Operations",
    type: "Full Stack",
    description: "A Spring Boot & React platform providing high-performance validation summaries, automated alert workflows, and transaction log analysis.",
    detailedDescription: "Designed an interactive reporting portal to track transactional success and automate verification alerts. Integrated active Spring Boot schedulers with enterprise notification systems to automate business checks seamlessly.",
    bullets: [
      "Designed dynamic React data tables displaying real-time database integrity metrics customized to run schedules.",
      "Engineered automated SMTP & Webhook alerts triggered instantly upon standard database validation mismatch events.",
      "Coded persistent dashboard layout panels tracking past 90 days of Hadoop batch runs and transaction log indices."
    ],
    metrics: [
      { label: "Notification Delay", value: "Sub-Second" },
      { label: "Log Parsing Rate", value: "50k/sec" },
      { label: "Check Reliability", value: "100%" }
    ],
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "Hibernate", "REST Web Services"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "edu1",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Ace Engineering College",
    period: "2020 - 2024",
    score: "8.9 CGPA"
  },
  {
    id: "edu2",
    degree: "Intermediate Board of Education",
    institution: "Sri Vivekananda Junior College",
    period: "2018 - 2020",
    score: "96.5 %"
  },
  {
    id: "edu3",
    degree: "SSC (Secondary School Certificate)",
    institution: "Bharathi Vidyanikethan High School",
    period: "2017 - 2018",
    score: "9.7 CGPA"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "sc1",
    title: "Java Full Stack Development",
    skills: [
      { name: "Java", level: "Expert" },
      { name: "Spring Boot / Microservices", level: "Intermediate" },
      { name: "Hibernate / Spring Data JPA", level: "Intermediate" },
      { name: "REST Web APIs", level: "Intermediate" },
      { name: "React / JavaScript", level: "Intermediate" },
      { name: "HTML-5 / CSS-3", level: "Expert" }
    ]
  },
  {
    id: "sc2",
    title: "Java Test Automation & Quality Assurance",
    skills: [
      { name: "Cucumber Genie / Gherkin", level: "Expert" },
      { name: "Automated Integration Testing", level: "Expert" },
      { name: "SQL Validation Checking", level: "Expert" },
      { name: "Regression & Sanity Testing", level: "Expert" },
      { name: "Git Workflow Controls", level: "Expert" }
    ]
  },
  {
    id: "sc3",
    title: "Data & Enterprise Operations",
    skills: [
      { name: "Oracle standard edition 11", level: "Expert" },
      { name: "Hadoop Ingestion", level: "Intermediate" },
      { name: "Azure DevOps / Agile Sprints", level: "Intermediate" },
      { name: "Exploratory Data Analysis / Power BI", level: "Intermediate" }
    ]
  },
  {
    id: "sc4",
    title: "Developer Tools & Utilities",
    skills: [
      { name: "Git & GitHub Workflows", level: "Expert" },
      { name: "Maven / Gradle Build Tools", level: "Expert" },
      { name: "Postman API Design Testing", level: "Expert" },
      { name: "Bash Scripting & Linux Commandline", level: "Intermediate" }
    ]
  },
  {
    id: "sc5",
    title: "Academic AI & ML Foundations",
    skills: [
      { name: "Deep Learning & CV Models", level: "Basics" },
      { name: "Machine Learning Concepts", level: "Basics" }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: "c1", title: "CISCO: Programming Essentials in C (CLA)", issuer: "CISCO" },
  { id: "c2", title: "CISCO: Python (PCAP)", issuer: "CISCO" },
  { id: "c3", title: "CISCO: CCNA Networking", issuer: "CISCO" },
  { id: "c4", title: "NASSCOM: Professional Full Stack Web Developer", issuer: "NASSCOM" },
  { id: "c5", title: "Udemy: Spring Boot & Spring Framework Masterclass", issuer: "Udemy" },
  { id: "c6", title: "Kaggle: Data Visualization", issuer: "Kaggle" },
  { id: "c7", title: "Great Learning: SQL Certification", issuer: "Great Learning" },
  { id: "c8", title: "Cambridge University: Business English Preliminary", issuer: "Cambridge University" },
  { id: "c9", title: "Salesforce: Developer Virtual Internship", issuer: "Salesforce" },
  { id: "c10", title: "Teachnook + IIT Bhubaneswar: Java Enterprise & SQL Databases Training", issuer: "Teachnook + IIT Bhubaneswar" },
  { id: "c11", title: "Microsoft: GitHub Copilot (GH-300)", issuer: "Microsoft" }
];

export const COMPETENCIES = [
  "Java Full Stack Engineering",
  "Automated Performance & Security Checks",
  "High Accountability",
  "Analytical Problem Solving",
  "Technical Communications"
];
