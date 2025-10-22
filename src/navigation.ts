import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/.'),
    },
    {
      text: 'About Us',
      links: [
        {
          text: 'Our Company',
          href: getPermalink('/about'),
        },
        {
          text: 'Terms of Service',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy Policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'Services',
      links: [
        {
          text: 'General Maintenance',
          href: getPermalink('/services/general-maintenance'),
        },
        {
          text: 'Plumbing & Drain Repairs',
          href: getPermalink('/services/plumbing-repairs'),
        },
        {
          text: 'Bathroom & Kitchen Remodeling',
          href: getPermalink('/services/remodeling'),
        },
        {
          text: 'Ceramic & Wood Flooring',
          href: getPermalink('/services/flooring'),
        },
        {
          text: 'Painting (Interior & Exterior)',
          href: getPermalink('/services/painting'),
        },
        {
          text: 'Concrete & Woodwork',
          href: getPermalink('/services/concrete-woodwork'),
        },
        {
          text: 'Custom Projects',
          href: getPermalink('/services/custom-projects'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],

  actions: [{ text: 'Contact Us', href: '/#contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Our Services',
      links: [
        { text: 'General Maintenance', href: getPermalink('/services/general-maintenance') },
        { text: 'Plumbing & Drain Repairs', href: getPermalink('/services/plumbing-repairs') },
        { text: 'Remodeling', href: getPermalink('/services/remodeling') },
        { text: 'Flooring Installation', href: getPermalink('/services/flooring') },
        { text: 'Painting Services', href: getPermalink('/services/painting') },
        { text: 'Concrete & Woodwork', href: getPermalink('/services/concrete-woodwork') },
        { text: 'Custom Projects', href: getPermalink('/services/custom-projects') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Blog', href: getBlogPermalink() },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQs', href: getPermalink('/#FAQS') },
        { text: 'Request a Quote', href: getPermalink('#contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/15712159461' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:crisconstructionservices@gmail.com' },
  ],
  footNote: `
    © ${new Date().getFullYear()} <strong>CRIS Construction Services</strong>. All rights reserved.  
    Designed and developed with ❤️ by <a class="text-blue-600 underline dark:text-muted" href="#">Ch'askode</a>.
  `,
};
