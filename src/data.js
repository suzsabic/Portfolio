import { faLaptopCode, faMobileScreenButton, faPenRuler } from '@fortawesome/free-solid-svg-icons'

export const profile = {
  name: 'Suzana Sabic',
  email: 'suza_sabic@hotmail.com',
}

const lorem =
  'Placeholdertekst. Her kan du beskrive prosjektet: hva det gikk ut på, hvilke utfordringer du løste og hva du er mest fornøyd med.'

export const projects = [
  {
    id: 1, title: 'Prosjekt #1', type: 'Webapplikasjon', icon: faLaptopCode, tags: ['React', 'Typescript'], tone: 'orange',
    year: '2026', description: lorem,
    slides: ['orange', 'light', 'chalk'],
    link: {
      label: 'Live',
      href: '',
    },
  },
  {
    id: 2, title: 'Prosjekt #2', type: 'Interaktiv prototype', icon: faPenRuler, tags: ['Figma', 'UI/UX'], tone: 'light',
    year: '2026',
    description: lorem,
    link: {
      label: 'Live',
      href: '',
    },
    slides: ['orange', 'light', 'chalk'],
  },
  {
    id: 3, title: 'Prosjekt #3', type: 'iOS-app', icon: faMobileScreenButton, tags: ['React Native', 'Swift'], tone: 'chalk',
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
