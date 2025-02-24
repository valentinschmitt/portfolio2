export interface Dictionary {
  navigation: {
    work: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    viewWork: string;
    contactMe: string;
    scrollToExplore: string;
  };
  about: {
    title: string;
    intro: string;
    background: string;
    passion: string;
    skillsTitle: string;
    ctaTitle: string;
    ctaButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    directContact: string;
  };
  cta: {
    audit: string;
    claim: string;
  };
} 