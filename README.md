# Netflix clone

Hello, I present to you my **Netflix clone** project. I was thinking about creating a project that will bring together front-end, working with API and a little bit of back-end code mixed with each other and show my skills. The project is created in NextJS (13) using a small amount of React Redux, Firebase and written in Typescript.
The page is fully responsive - for mobiles, tablets and desktops. The app is 'cloning' the Netflix site - I used the tmdb database, which is not as detailed as the Netflix one, this means no videos, no detailed information about individual episodes of series or other detailed data. The application contains many sub-pages, starting from the main view, through the whole process of logging in and registering, selecting a profile and editing it (some properties can be edited, others are blocked in this demo version), up to the main page of series, movies and individual sub-pages. Due to the nature of the app I used different icons, used some dummy texts and this is not a 'pixel perfect' clone - mainly due to a different api, which dictates a different placement of for example series and movie posters (netflix has them horizontally, tmdb vertically, also another data etc.).

## 📫 Project contains

-   main pages for guests and for logged users (for children it is slightly different page, but because of the api the data stays the same),
-   around 30 different subpages (also dynamic ones with series and films data),
-   full registration Netflix process (choosing devices, languages, series),
-   user can log in, sign in, log out and register,
-   when user is logged in, different options are available (profile editing, 'watching series', browse / kids page),
-   custom 404 and 500 page,
-   accessibility practices,
-   SEO practices,
-   project is fully responsive,
-   using firebase to log in / log out and auth management,
-   using LocalStorage to store some auth data (no data is collected in this demo, that's why I use LocalStorage),
-   the project is built with about 250 components (also some custom hooks, api fetching, helpers etc.)

## 🛠 Used tools / programming languages / technologies

-   HTML / CSS,
-   NextJS 13 (also React Redux),
-   Typescript,
-   Firebase,
-   Local Storage,
-   Git / Github,
-   responsive / SEO

#### I encourage you to check the website - uploaded to vercel [Netflix Clone](https://netflixcloneen.vercel.app/).
