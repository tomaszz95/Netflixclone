# Netflix clone

(App still in proggress!)

Hello, I present to you my **Netflix clone** project. I was thinking about creating a project that will bring together front-end, working with API and a little bit of back-end code mixed with each other and show my skills. The project is created in NextJS (13) using a small amount of React Redux, Firebase and written in Typescript.
The page is fully responsive - for mobiles, tablets and desktops. App is 'cloning' netflix site - I used the tmdb database, which is not as detailed as the netflix one, that means no videos, no detailed information about individual episodes of series or other detailed data. The application contains many sub-pages, starting from the main view, through the whole process of logging in and registering, selecting a profile and editing it (some properties can be edited, others blocked in this demo version), up to the main page of series, movies and individual sub-pages. Due to the nature of the app I used another icons, used some dummy texts and this is not 'pixel perfect' clone - this is mainly due to a different api, which dictates a different placement of for example series and movie posters (netflix has them horizontally, tmdb vertically, also another data etc.).
App is still in proggress mode - below is a list of issues / futuers I'm working on.

## 📫 Project contains

-   main pages for guest and for logged users (for the child slightly different, but because of the api data is the same),
-   full registration netflix process (choosing devices, languages, series),
-   user is available to log in, sign in, log out and register,
-   when user is log in different options are available (profile edit, 'watching series', browse / kid page),
-   404 page,
-   accessibility practices,
-   fully responsive,
-   using firebase to log in / log out and auth management,
-   using LocalStorage to store some auth data (no data is collected in this demo, thats why i use LocalStorage).

## 🛠 Used tools / programming languages / technologies

-   HTML / CSS,
-   NextJS 13 (also React Redux),
-   Typescript,
-   Firebase,
-   Local Storage,
-   Git / Github,

## 👩‍💻 TODO

-   [ add loaders when entering / leaving pages ].
-   [ improve the re-rendering of components and pages ],
-   [ add testing ].

#### I encourage you to check the website - uploaded to vercel [Netflix Clone](https://netflixclone-eosin-gamma.vercel.app/).
