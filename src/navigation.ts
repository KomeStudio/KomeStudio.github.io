import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Games',
      href: getPermalink('/games'),
    },
    {
      text: 'KomeVerse',
      href: 'https://komeverse.com',
      target: '_blank',
    },
    {
      text: 'News',
      href: getPermalink('/news'),
    },
    {
      text: 'About',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/about'),
        },
        {
          text: 'Parents',
          href: getPermalink('/parents'),
        },
        {
          text: 'Careers',
          href: getPermalink('/careers'),
        },
        {
          text: 'Support',
          href: getPermalink('/support'),
        },
        {
          text: 'Contact',
          href: getPermalink('/contact'),
        },
        {
          text: 'Press',
          href: getPermalink('/press'),
        },
      ],
    },
  ],
  actions: [
    {
      text: '🔴 Live',
      href: 'https://www.youtube.com/@KomeStudios/live',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Games',
      links: [
        { text: 'All Games', href: getPermalink('/games') },
        { text: 'SkyWing: Endless Flap', href: getPermalink('/games/skywing') },
        { text: 'Run: Hero Dash', href: getPermalink('/games/run') },
        { text: 'Mate', href: getPermalink('/games/mate') },
        { text: 'Beat: Spotlight', href: getPermalink('/games/beat-spotlight') },
      ],
    },
    {
      title: 'KomeVerse',
      links: [
        { text: 'Overview', href: 'https://komeverse.com' },
        { text: 'Characters', href: 'https://komeverse.com/characters' },
        { text: 'World', href: 'https://komeverse.com/world' },
        { text: 'Story & Lore', href: 'https://komeverse.com/story-lore' },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Parent Hub', href: getPermalink('/parents') },
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Support', href: getPermalink('/support') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Press', href: getPermalink('/press') },
      ],
    },
    {
      title: 'News & Media',
      links: [
        { text: 'Studio News', href: getPermalink('/news') },
        { text: 'Announcements', href: getPermalink('/news/announcements') },
        { text: 'Releases', href: getPermalink('/news/releases') },
        { text: 'Blog & Devlog', href: 'https://blog.komestudio.com' },
        { text: 'YouTube Live 24/7', href: 'https://www.youtube.com/@KomeStudios' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Parent Hub', href: getPermalink('/parents') },
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@KomeStudios' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/KomeStudios' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/komestudios' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@komestudios' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/KomeStudio' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/r/KomeStudio' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/KomeStudios' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:contact@komestudio.com' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © ${new Date().getFullYear()} Kome Studio · All rights reserved.
  `,
};
