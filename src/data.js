import { faCode, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'

export const profile = {
  name: 'Suzana Sabic',
  email: 'suza_sabic@hotmail.com',
  description: 'Suzana Sabic. Jeg er en Oslo-basert bachelorstudent i frontend- og mobilutvikling ved Høyskolen Kristiania, ferdig våren 2027. Jeg liker å kombinere kreativitet og teknologi, og drømmer om å lage applikasjoner som gjør hverdagen litt enklere for andre. Utenom koding: gaming, utforske nye kafeer, true crime dokumentarer, leke med Claude Design/Code og like altfor mange kattevideoer på TikTok.'
}


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
    id: 2, title: 'Budgetly', type: 'Webapplikasjon', icon: faCode, tags: ['React', 'Typescript', 'HTML', 'CSS', '.NET/C#'], tone: 'light',
    year: '2026',
    description: 'En dashboard for budsjettering. Kommer snart.',
    link: {
      label: 'Live',
      href: '',
    },
    slides: ['orange', 'light', 'chalk'],
  },
]

export const skills = [
  'React',
  'Typescript',
  'Javascript',
  'HTML',
  'CSS',
  'Swift',
  'Kotlin',
  '.NET/C#',
  'SQL/MySQL',
  'UX/UI',
]
