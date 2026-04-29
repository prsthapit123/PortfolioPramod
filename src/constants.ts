import { Project, ExperienceItem, SkillCategory } from "./types";
import RiskImg from "../src/assets/FinancialRisk.jpg";
import AnalyticsImg from "../src/assets/RealTimePic.jpg";

export const PORTFOLIO_DATA = {
  name: "Pramod Ratna Sthapit",
  title: "Database Developer @ Claros Analytics",
  tagline: "Optimizing Data. Powering Decisions.",
  bio: "Specializing in high-performance SQL architectures, MSSQL optimization, and scalable backend data solutions. I focus on turning complex data into actionable insights through efficient stored procedures and in-memory optimization.",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Claros Analytics",
    role: "Database Developer",
    period: "2024 - Present",
    highlights: [
      "Optimized query performance by 40% using In-Memory OLTP and columnstore indexing.",
      "Architected complex stored procedures for financial risk modeling.",
      "Implemented automated data pipelines for real-time analytics.",
      "Managed SSIS packages and high-availability database clusters.",
    ],
  },
  {
    company: "Tareymam Technologies",
    role: "SQL Developer",
    period: "2022 - 2024",
    highlights: [
      "Designed and maintained normalized SQL Server databases.",
      "Developed complex ETL processes using T-SQL.",
      "Collaborated with backend teams to optimize API data access layers.",
    ],
  },
  {
    company: "Smart Solution",
    role: "Dotnet Developer",
    period: "2014 - 2021",
    highlights: [
      "Designed and maintained banking applications.",
      "Developed desktop application, web application.",
      "Designed business application for Metlife, Standard Charter.",
    ],
  },
  {
    company: "Avionte Staffing Software",
    role: "Implementation Specialist",
    period: "2012 - 2013",
    highlights: [
      "Database migration converting all sort of file into MSSQL Database.",
      "Developed complex ETL processes using T-SQL.",
    ],
  },
  {
    company: "Microsoft Innovation Center",
    role: "DotNet Instructor",
    period: "2010 - 2011",
    highlights: [
      "Experienced in web development using ASP.NET and development of mobile applications on Windows Mobile 7.",
      "Proficient in C#.NET programming, with a strong background in teaching software development fundamentals.",
      "A fast learner with a dedicated and hardworking approach.",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Databases",
    skills: [
      { name: "MSSQL / SQL Server", level: 95 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "T-SQL", level: 98 },
      { name: "C# (.NET)", level: 85 },
      { name: "ASP CORE", level: 75 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "SSMS", level: 95 },
      { name: "Azure Data Studio", level: 90 },
      { name: "SSIS / SSRS", level: 85 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "risk-engine-db",
    title: "Financial Risk Engine DB",
    description: "Architected a high-throughput database for real-time risk calculation.",
    tech: ["MSSQL", "In-Memory OLTP", "T-SQL"],
    results: [
      "Reduced processing time from 5 minutes to 12 seconds.",
      "Support for 1M+ concurrent calculations.",
    ],
    image: RiskImg,
  },
  {
    id: "analytics-dashboard",
    title: "Real-time Analytics API",
    description: "A data pipeline and dashboard solution for live performance monitoring.",
    tech: ["Azure Data Studio", "SSIS", "C#"],
    results: [
      "Integrated 5+ external data sources.",
      "Zero-downtime migration to cloud storage.",
    ],
    image: AnalyticsImg,
  },
];
