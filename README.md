# Penn State College of Engineering Website Rework

## Description

This project is a modernized redesign of the Penn State College of Engineering website that leverages the 
combined capabilities of the Next.js framework, the GraphQL API, and the Storyblok Headless CMS.

### Deployed Site

![GIF of the deployed project.](./public/chrome-capture-2023-11-14.gif)

See the project live: [PSU CoE Rework](https://psu-coe-rework.vercel.app)

## Stack

### Next.js v14.0.1

System Requirments
- Node.js 18.17 or later
- macOS, Windows (including WSL), and Linux are supported

Configurations Used
- ESLint
- Tailwind CSS
- App Router

Key Features
- Dynamic Routing
  - By combining the `generateStaticParams` function and the Catch-all Dynamic Segment `[...slug]`, 
  this project dynamically routes all pages (with the exception of the root page), allowing for additional 
  pages to be added using the Storyblok CMS without requiring the creation of new `page.js` files. If you 
  would like to see this functionality in action, you can find it implemented in [`app/[...slug]/page.js`](./app/[...slug]/page.js).

  (**App Router** required; if you are currently building a Next.js project and have opted to use the 
  **Pages Router**, see `GetStaticProps`, `GetStaticPaths`, and **Dynamic Routes** in the **Pages Router** 
  section of the [Next.js Pages Documentation](https://nextjs.org/docs/pages/building-your-application))
- Server Side Rendering (SSR) and Server Side Components
  - While the use of SSR in this project is limited (a tradeoff associated with the use of the Live Editing feature of Storyblok), 
  all pages are rendered server side using [`app/page.js`](./app/page.js) (the root page) and [`[...slug]/page.js`](./app/[...slug]/page.js) 
  (dynamically routed additional pages).
- Client Components
  - Client Components are the core of this site. By using the Apollo Client, along aside an additional libary that extends Apollo's compatability 
  with Next.js, the root layout (`RootLayout`, found in [`app/layout.js`](./app/layout.js)) uses the client wrapper imported from [`lib/ApolloProvider.js`](./lib/ApolloProvider.js) 
  to make every component used within Storyblok a Client Component. This enables the use of states, effects, and listeners, but more importantly, 
  allows us to take full advantage of the Live Editor built into the Storyblok CMS.

Building your next project using Next.js? Get started with [Next.js Installation](https://nextjs.org/docs/getting-started/installation).
Looking for more information on Next.js? Check out [Next.js Documentation](https://nextjs.org/docs).

### GraphQL (via the Apollo Client v3.8.0)

### Storyblok v2.4.7