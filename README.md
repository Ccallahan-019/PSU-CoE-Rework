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
  with Next.js, the root layout (`RootLayout`, found in [`app/layout.js`](./app/layout.js)) uses the client wrapper imported from 
  [`lib/ApolloProvider.js`](./lib/ApolloProvider.js) to make every component used within Storyblok a Client Component. This enables the use of 
  states, effects, and listeners, but more importantly, allows us to take full advantage of the Live Editor built into the Storyblok CMS.

Building your next project using Next.js? Get started with [Next.js Installation](https://nextjs.org/docs/getting-started/installation).

Looking for more Next.js information? Check out [Next.js Documentation](https://nextjs.org/docs).

### GraphQL (via the Apollo Client v3.8.0-rc.2)

Dependencies Used
- `@apollo/client@rc`
- `graphql`
- `@apollo/experimental-nextjs-app-support` (an official Apollo Client library built to enhance the compatibility of Apollo and Next.js 13+)

REST vs GraphQL

Anyone building a development project using the Storyblok CMS has to make a tough decision somewhere along the line: REST, or GraphQL? On the surface, 
this might seem like a relatively easy choice. Both the Storyblok Content Delivery API and Management API are organized around REST, and most of Storyblok's
documentation is written with this in mind. So, why deviate?
- Single vs. Multiple Endpoints- A typical REST API usually requires data fetching from multiple different endpoints. This is inherently slower than GraphQL, 
where only one endpoint is required to fetch data.
- Overfetching/Underfetching- REST APIs tend to suffer from overfetching and underfetching issues that stem from the fixed structures of their endpoints.
Either the endpoint in question returns unnecessary data, or it doesn't return enough data, requiring more fetches to other endpoints to retrieve whatever data is 
still needed (usually resulting in overfetching... See the problem?). On the other hand, with GraphQL, you can request exactly the data you need at any given time.
- Strongly Typed Schemas- GraphQL uses **Schema Definition Language (SDL)** to define an API's schema. This means you always have a clear understanding of the API's 
operations, thanks to SDL's strong type system. If you're using Storyblok, you can see this in action by using the **Storyblok GraphQL Playground**. Just use
```
https://gapi-browser.storyblok.com?token=YOUR_TOKEN
```
and replace `YOUR_TOKEN` with your Storyblok API token. You might also need to add a region specifier. For example, if you are in the US regions, you would use
```
https://gapi-us-browser.storyblok.com
```

Adding GraphQL to your next project? Here are some helpful resources.
- [GraphQL](https://graphql.org/)
- [Learn GraphQL](https://www.howtographql.com/)

Using GraphQL with Storyblok? Find more information at [GraphQL Content Delivery API](https://www.storyblok.com/docs/graphql-api).

### Storyblok v2.4.7

Headless CMS
- Storyblok is a **headless CMS**. This means it is designed for back-end content management; it provides content storage, a content creator/manager interface, and access 
to your chosen API. A headless CMS uses a decoupled architecture that seperates the frontend (design and development) and the backend (content management) of a project. 
This makes a headless CMS far more adaptive and scalable than a traditional CMS that uses a monolith/silo type structure, where the frontend and backend are woven 
(sometimes knotted) tightly together. It also improves performance, grants increased flexibility to developers and content managers by migitating dependencies, and allows 
for more optimized applications.
Visual Editor
- Storyblok's **Visual Editor** enables content management to be performed, easily, visually, and in realtime. This includes drag-and-drop, preview, and asset management 
features, along with the ability to create workflows and discussions to improve collaboration within a team.

Planning on using the Storyblok Headless CMS to manage the backend of your next app? Check out these resources.
- [Storyblok](https://www.storyblok.com/)
- [Storyblok Documentation](https://www.storyblok.com/docs/guide/introduction)

Combining Next.js and Storyblok? Use this [Storyblok Next.js 13 Guide](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial) to get started. (This guide uses 
the **App Router** introduced in Next.js 13. If you are using an earlier version or have opted to use the **Pages Router**, check out [The Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)).


### Deployment- Vercel