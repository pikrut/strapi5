import type { StrapiApp } from '@strapi/strapi/admin';
import AuthLogo from './extensions/auth.png'
import MenuLogo from './extensions/favicon.png'
export default {
  config: {
    locales: ["en"],
    translations: {
      en: {
        "Auth.form.welcome.title":'Hi Spices Shop Admin',
        "Auth.form.welcome.subtitle":"Login to spices shop",
        "HomePage.header.subtitle":"Welcome"
      },
    },
    auth: { // Replace the Strapi logo in auth (login) views
      logo: AuthLogo,
    },
    menu: { // Replace the Strapi logo in the main navigation
      logo: MenuLogo,
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
