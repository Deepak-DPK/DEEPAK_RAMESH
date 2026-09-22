import { SkillItem, ProjectItem, JourneyStage } from './types';

export const PERSONAL_INFO = {
  name: 'Deepak',
  role: 'B.Tech Computer Science Student',
  careerGoal: 'Aspiring AI Engineer',
  institution: 'First-Year B.Tech CSE',
  githubUrl: 'https://github.com/Deepak-DPK',
  linkedinUrl: 'https://www.linkedin.com/in/deepakramesh15/',
  heroHeading: {
    firstLine: "Hi, I'm Deepak.",
    secondLine: 'An Aspiring AI Engineer.',
  },
  heroSupportingText:
    "I'm a first-year Computer Science student building my foundation in Python, Web Development, and Generative AI — one project at a time.",
  aboutParagraphs: [
    "I'm Deepak, a first-year B.Tech Computer Science student with an interest in Artificial Intelligence and software development.",
    "I'm currently building my foundation in Python, web development, and Generative AI. My approach is simple: learn the fundamentals, build small projects, understand how things work, and gradually move toward more advanced AI engineering concepts.",
    "I'm at the beginning of my journey, and this portfolio represents what I have learned and built so far.",
  ],
  currentlyExploring: [
    'Python',
    'Web Development',
    'Generative AI',
    'AI Engineering',
  ],
  contactText:
    "I'm currently learning, building, and exploring the world of AI and software development. If you'd like to connect, feel free to find me on GitHub or LinkedIn.",
  footerText: '© 2026 Deepak. Built while learning and building.',
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    level: 'Foundational',
    category: 'Core Language',
    description:
      'Writing basic scripts, understanding syntax, utilizing conditionals, loops, and core problem-solving logic.',
    topics: ['Syntax & Variables', 'Conditional Statements (if / elif / else)', 'Comparison Operators', 'Basic Functions'],
  },
  {
    id: 'web-dev',
    name: 'Web Development',
    level: 'Beginner',
    category: 'Frontend & Web',
    description:
      'Learning the fundamentals of web markup, modern layout styling, and how user interfaces are constructed.',
    topics: ['HTML5 Structure', 'CSS & Responsive Styling', 'JavaScript Basics', 'Component Concepts'],
  },
  {
    id: 'gen-ai',
    name: 'Generative AI',
    level: 'Currently Learning',
    category: 'Emerging Tech',
    description:
      'Exploring foundational concepts of Large Language Models, prompt techniques, and how AI applications function.',
    topics: ['Prompt Engineering Basics', 'LLM Concepts & Capabilities', 'AI Tooling & Workflows', 'Future Model APIs'],
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: 'Stage 01',
    title: 'Computer Science Fundamentals',
    description:
      'Learning programming fundamentals, problem solving, and computational thinking.',
    status: 'In Progress',
    isFuture: false,
  },
  {
    stage: 'Stage 02',
    title: 'Python',
    description:
      'Building a foundation in Python and using it to create small practical projects.',
    status: 'Active Building',
    isFuture: false,
  },
  {
    stage: 'Stage 03',
    title: 'Web Development',
    description:
      'Learning the fundamentals of creating websites and understanding how frontend technologies work.',
    status: 'Exploring',
    isFuture: false,
  },
  {
    stage: 'Stage 04',
    title: 'Generative AI',
    description:
      'Exploring the fundamentals of Generative AI and understanding how modern AI applications are built.',
    status: 'Exploring',
    isFuture: false,
  },
  {
    stage: 'Stage 05',
    title: 'Future Goal',
    description:
      'Progress toward becoming an AI Engineer by building increasingly practical and technically advanced projects.',
    status: 'Future Learning Goal',
    isFuture: true,
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-grade-calc',
    number: '01',
    title: 'Student Grade Calculator',
    tagline: 'Academic performance grading script',
    description:
      "A simple Python-based project that calculates a student's grade based on their marks. Demonstrates my understanding of programming fundamentals and sequential decision logic.",
    technologies: ['Python', 'Conditional Statements', 'Basic Programming Logic'],
    demoType: 'grade',
    pythonSnippet: `# Student Grade Calculator
# Built with Python fundamentals

def calculate_grade(marks):
    if marks < 0 or marks > 100:
        return "Invalid Marks (Enter 0-100)"
    elif marks >= 90:
        return "Grade A+ (Outstanding)"
    elif marks >= 80:
        return "Grade A (Excellent)"
    elif marks >= 70:
        return "Grade B (Good)"
    elif marks >= 60:
        return "Grade C (Satisfactory)"
    elif marks >= 50:
        return "Grade D (Pass)"
    else:
        return "Grade F (Needs Improvement)"

# Prompt user for input
marks_input = float(input("Enter student marks (0-100): "))
result = calculate_grade(marks_input)
print(f"Result: {result}")`,
  },
  {
    id: 'project-voting-eligibility',
    number: '02',
    title: 'Voting Eligibility Calculator',
    tagline: 'Age verification logic program',
    description:
      'A simple program that checks whether a person is eligible to vote based on their age. Demonstrates applying comparison operators and conditional control flow to a real-world scenario.',
    technologies: ['Python', 'Conditional Statements', 'Comparison Operators', 'Basic Programming Logic'],
    demoType: 'voting',
    pythonSnippet: `# Voting Eligibility Calculator
# Built with Python comparison operators

MIN_VOTING_AGE = 18

def check_voting_eligibility(age):
    if age < 0:
        return "Invalid age entered."
    elif age >= MIN_VOTING_AGE:
        years_eligible = age - MIN_VOTING_AGE
        return f"Eligible to vote! (Eligible for {years_eligible} years)"
    else:
        years_left = MIN_VOTING_AGE - age
        return f"Not eligible yet. You can vote in {years_left} year(s)."

# User age check
user_age = int(input("Enter your age: "))
status = check_voting_eligibility(user_age)
print(status)`,
  },
];
