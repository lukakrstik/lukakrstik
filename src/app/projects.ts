import { Project } from "../project";

export const PROJECTS: Project[] = [
  { name: 'Patle',
    date: 'December 2024',
    desc: 'Wordle like daily game intended as a way of learning the municipalities of the Republic of North Macedonia',
    img: 'assets/patle.m4v',
    gitlink: 'https://github.com/lukakrstik/patle',
    liveLink: 'https://patle.lukakrstik.com',
    technologies: ['Angular','TailwindCSS'],
    development: true
  },
  { name: 'Construct 307',
    date: 'June 2024',
    desc: 'Construct 307 is a fictional mock-up for a design-build company focusing on the selection of floors of buildings and showing flat availability.',
    img: 'assets/construct.m4v',
    gitlink: 'https://github.com/lukakrstik/construct307',
    liveLink: 'https://construct307.lukakrstik.com',
    technologies: ['Angular','Firebase','TailwindCSS'],
    development: false
  },
  { name: 'MKRoutes',
    date: 'March 2023',
    desc: 'MKRoutes is a frontend application for Macedonian tourism. Developed with Angular, Firebase and Tailwind for DIGIT 2023.',
    img: 'assets/Untitled2.m4v',
    gitlink: 'https://github.com/afilipovski/MKRoutes-Angular-Tourism-site-DIGIT-2023',
    liveLink: '',
    technologies: ['Angular','Firebase','TailwindCSS'],
    development: false
  },
  { name: 'Crispies',
    date: 'December 2022',
    desc: 'A fictional foodchain website. Made with React and Firebase for DIGIT 2022.',
    img: 'assets/Untitled.m4v',
    gitlink: 'https://github.com/DimitrijKrstev/Crispies-React-Foodchain-site-DIGIT-2022',
    liveLink: '',
    technologies: ['React','Firebase','TailwindCSS'],
    development: false
  }
]
