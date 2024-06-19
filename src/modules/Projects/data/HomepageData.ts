import {
  Nike,
  RecipeFinder,
  Puma,
  Fieldbox,
  Tudigo,
  Grossjungig
} from '@static/images'

export const HomepageData = [
  {
    title: 'Fieldbox',
    image: {
      src: Fieldbox.src,
      width: Fieldbox.width,
      height: Fieldbox.height,
      alt: 'Fieldox'
    },

    extraInfo: [
      {
        title: 'Stack',
        description: 'React, TypeScript, CSS, Ant Design'
      },
      {
        title: 'When',
        description: '2022 - 2024'
      }
    ],
    content: `
            <h3>Working at Fieldbox.ai</h3>
            <p>
                Fieldbox leverage data science and AI to empower clients with valuable assets. I contributed to diverse projects across the energy and construction industries.
                <br /> <br />
                I developed 8 different applications within multi-disciplinary teams, including data visualization apps, a LLM-powered app, an AI-powered chatbot, and a data analysis tool.
                To build these apps, I used React, TypeScript, CSS, and Ant Design. Also I was involved in the discussions with the clients to understand their needs and to provide the best solutions in terms of UX/UI.
                <br /> <br />
                I also led the frontend meetings, where we discussed the best practices, the new technologies, and the improvements that we could make in our internal tools.
            </p>
        `
  },
  {
    title: 'Recipe finder',
    image: {
      src: RecipeFinder.src,
      width: RecipeFinder.width,
      height: RecipeFinder.height,
      alt: 'Recipe finder'
    },

    extraInfo: [
      {
        title: 'Stack',
        description: 'React, TypeScript, Tailwind, Convex, OpenAI API'
      },
      {
        title: 'When',
        description: '2024'
      }
    ],
    content: `
            <h3>Recipe Finder</h3>
            <p>
                A recipe finder app to find the best recipes for you. You can search for recipes by ingredients, diet, and type of meal.
                <br /> <br />
                The app was styled  with Tailwind CSS and built with React and TypeScript. Convex was used to store the recipes and OpenAI API to generate the recipes.
                <br /> <br />
                It was a personal project that I built to learn more about Tailwind CSS and Convex. Also it was my first time using OpenAI API and I now want to go deeper in AI.
            </p> 
        `
  },
  {
    title: 'Tudigo',
    image: {
      src: Tudigo.src,
      width: Tudigo.width,
      height: Tudigo.height,
      alt: 'Tudigo'
    },
    extraInfo: [
      {
        title: 'Stack',
        description: 'React, TypeScript, SCSS, Jest'
      },
      {
        title: 'When',
        description: '2022'
      }
    ],
    content: `
            <h3>Working at Tudigo</h3>
            <p>
                Tudigo is a crowdfunding platform for local businesses. I worked on the frontend of the platform, building new features and improving the existing ones.
                <br /> <br />
                I redesigned the investor qualification process, the project creation process, and the project page. I also worked on the payment process and the dashboard to improve feedback on users transactions. 
                <br /> <br />
                As there was also a big change in the branding, I was in charge of updating the design system and the components to match the new branding. Hence, I communicated with the design team to make sure that the new components were consistent with the new branding.
            </p>
        `
  },
  {
    title: 'Grossjungig',
    image: {
      src: Grossjungig.src,
      width: Grossjungig.width,
      height: Grossjungig.height,
      alt: 'Project Puma'
    },

    extraInfo: [
      {
        title: 'Stack',
        description: 'React, TypeScript, MUI, i18next'
      },
      {
        title: 'Data',
        description: '2024-01-01'
      },
      {
        title: 'Client',
        description: 'Puma'
      }
    ],
    content: `
            <h3>Working at Grossjungig</h3>
            <p>
                Following the Ukrainian crisis, Großjungig startup decided to transform its model from a multi-generational co-living solution to help refugees find temporary accommodation in European countries.
                <br /> <br />
                I volunteered and helped Großjungig team transform their website to match its new purpose. It includes reshaping the header and landing page to display the different sections house providers and refugees can access. But also managing the translation logic to go from 2 languages available on the website to 5 languages.
                <br /> <br />
                Under a short deadline, we managed to deliver the new website in 1 month.

            </p>
        `
  },
  {
    title: 'Project nike',
    image: {
      src: Nike.src,
      width: Nike.width,
      height: Nike.height,
      alt: 'Project nike'
    },
    links: [
      {
        title: 'Live Preview',
        link: 'https://www.nike.com'
      },
      {
        title: 'Source Code',
        link: 'https://github.com'
      }
    ],
    extraInfo: [
      {
        title: 'Stack',
        description: 'React, TypeScript, Styled Components, Strapi'
      },
      {
        title: 'Data',
        description: '2024-01-01'
      },
      {
        title: 'Client',
        description: 'Nike'
      }
    ],
    content: `
            <h3>Nike Landing Page</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptates,
                voluptate. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam
                voluptates, voluptate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam
                voluptates, voluptate. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam
                voluptates, voluptate.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptates,
                voluptate.
            </p>
        `
  }
]
