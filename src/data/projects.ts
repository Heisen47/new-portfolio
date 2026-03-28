export interface Project {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl?: string
  mediumUrl?: string
}

export const projects: Project[] = [
  {
    title: 'Itinerarly',
    description: 'The project is about generating AI personalized travel itineraries.',
    technologies: ['React', 'Javascript', 'Spring Boot', 'Docker', 'MySQL'],
    imageUrl: 'https://opengraph.githubassets.com/1/heisen47/itinerarly',
    githubUrl: 'https://github.com/Heisen47/itinerarly',
    liveUrl: 'https://itinerarly-fe.vercel.app/',
    mediumUrl: 'https://medium.com/@iamrishi.dev47/learnings-while-building-itinerarly-f9a07291a918'
  },
  {
    title: 'Gym',
    description: 'The project is a customized app for my local gym.',
    technologies: ['React', 'Javascript', 'Spring Boot', 'Docker', 'MySQL'],
    imageUrl: 'https://opengraph.githubassets.com/1/heisen47/gym',
    githubUrl: 'https://github.com/heisen47/gym',
    liveUrl: 'https://gym-frontend-nine.vercel.app/'
  },
  {
    title: 'Pujo Atlas',
    description:
      'An Open source app for navigating festivity during the durga puja festival.',
    technologies: ['React', 'TypeScript', 'Astro', 'Django', 'PostgreSQL'],
    imageUrl:
      'https://opengraph.githubassets.com/1/Pujo-Atlas-Kolkata/PujoAtlasKol-Web',
    githubUrl: 'https://github.com/Pujo-Atlas-Kolkata/PujoAtlasKol-Web',
    liveUrl: 'https://atlas.ourkolkata.in/',
  },
  {
    title: 'Produchive',
    description: 'Track productivity, set goals, and get AI-powered insights \u2014 all offline.',
    technologies: ['React', 'TypeScript', 'Electron JS', 'WebLLM'],
    imageUrl: 'https://opengraph.githubassets.com/1/Heisen47/produchive',
    githubUrl: 'https://github.com/Heisen47/produchive',
    liveUrl: 'https://www.produchive.com/',
  }
]
