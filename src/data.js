import { faCode, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

export const profile = {
  name: 'Suzana Sabic',
  email: 'suza_sabic@hotmail.com',
}

const lorem =
  '...'

export const projects = [
  {
    id: 1, title: 'Renewed', type: 'Mobilapplikasjon', icon: faMobileScreenButton, tags: ['iOS', 'Swift', 'SwiftUI', 'SwiftData'], tone: 'orange',
    year: '2026', description: 'En app som hjelper deg å holde styr på alle dine abonnementer. Kommer snart.',
    slides: ['orange', 'light', 'chalk'],
    link: {
      label: 'Live',
      href: '',
    },
  },
  {
    id: 2, title: 'Kommer snart', type: 'Interaktiv prototype', icon: faCode, tags: ['Figma', 'UI/UX'], tone: 'light',
    year: '2026',
    description: lorem,
    link: {
      label: 'Live',
      href: '',
    },
    slides: ['orange', 'light', 'chalk'],
  },
  {
    id: 3, title: 'Kommer snart', type: 'Webapplikasjon', icon: faCode, tags: ['React', 'Typescript', 'HTML', 'CSS', '.NET/C#'], tone: 'chalk',
    year: '2026', description: lorem,
    slides: ['chalk', 'orange', 'light'],
  },
]

export const skills = [
  'React',
  'Typescript',
  'Javascript',
  'HTML & CSS',
  'Swift',
  'Kotlin',
  '.NET/C#',
  'SQL/MySQL',
  'Figma',
]
