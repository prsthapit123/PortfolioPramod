export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  results: string[];
  image: string;
}
 
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}
 
export interface Skill {
  name: string;
  level: number;
}
 
export interface SkillCategory {
  title: string;
  skills: Skill[];
}