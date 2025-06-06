module.exports = {
  siteTitle: 'Thanmai Reddy',
  siteDescription:
    'Thanmai Reddy is a Information Systems Graduate Student at University of Maryland, who loves learning new things.',
  siteKeywords:
    'Thanmai Reddy, Pruthvi, Billa, billaprut, data scientist, software developer, software engineer, cloud engineer, ml engineer, web developer, python developer',
  siteUrl: 'https://github.com/thanmaikadire/thanmaikadire.github.io',
  siteLanguage: 'en_US',
  name: 'Thanmai Reddy',
  location: 'College Park, Maryland',
  email: 'kadirethanmaireddy@gmail.com',
  github: 'https://github.com/thanmaikadire',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/thanmaikadire',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/thanmai-reddy-analyst/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
