import { NavLink, HelloMariageTeam } from '@/interfaces';

export const TITLE_BASE = 'Hello Mariage - ';

export const menuNavBar: NavLink[] = [
  { label: 'Thèmes', href: '/#themes' },
  { label: 'Faire une demande', href: '/#userRequest' },
  { label: 'Notre entreprise', href: '/us' },
  { label: 'Contact', href: '/#contact' },
];

export const footerLinks: NavLink[] = [
  { label: 'CGU', href: '/cgu' },
  { label: 'Police de confidentialité', href: '/policy' },
];

export const helloMariageTeam: HelloMariageTeam[] = [
  {
    name: 'Valérie DUPONT',
    gender: 'f',
    email: 'v.dupond@hello-mariage.fr',
    domain: 'Administratif',
  },
  {
    name: 'Paul BLANCHET',
    gender: 'm',
    email: 'p.blanchet@hello-mariage.fr',
    domain: 'Technique',
  },
];
