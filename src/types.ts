export interface SkillItem {
  id: string;
  name: string;
  level: string; // "Beginner" | "Foundational" | "Currently Learning"
  category: string;
  description: string;
  topics: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  repoUrl?: string; // If undefined, show "Project Link Coming Soon"
  pythonSnippet: string;
  demoType: 'grade' | 'voting';
}

export interface JourneyStage {
  stage: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Active Building' | 'Exploring' | 'Future Learning Goal';
  isFuture?: boolean;
}
