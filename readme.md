# PerScholas Capstone

Welcome to my mockup website of an eCommerce website called BrewCRAFT. where coffee and tea are the primary attraction of the site! The main focus that I had for this website was mainly toward the Frontend where countless hours was put into detailing the site interaction with the many React components I've created. Backend is still not fully integrated with the existing code only contains limited functionalities but API capabilities were fully tested and are functional (just not yet integrated into the frontend).

Built using the MERN tech stack, along side with TailwindCSS, user can expect some level of elegant when navigating the site!

## Overview
>## Frontend
>Using the powerful styling library of **TailwindCSS** and one of it's most popular React components library **Material Tailwind**, I was able to design a website that is responsive from a regular desktop screen port to a tablet port (Mobile view is still a work in progress) while creating effects that are clean & elegant to fit in with the overall Green & Light Yellow theme that I've choose for this website.
>## Backend
>With the power of Express, I was able to ultilize its API hosting ability to work with the MongoDB service to tackle information gathering as well as creation of users. (User login and authentication is still a work in progress but I've already created a authentication route that uses JsonWebToken to tackle this but is yet to be integrated into the Frontend) 

>## Website Layout
>1. There are currently two fully functional CRUD API routes `/items & /users` that are fully tested but isn't fully integrated into the frontend
>2. These two routes primarily handles the `/shop`, `/login`, and `/register` React routes. 
>3. General routes layout - (HOME) => (LOGIN) or (REGISTER) or (SHOP) or (PROFILE)
>## Development Tools
>Frontend: React, Vite,TailwindCSS & MaterialTailwind, Axios
>Backend: Express,MongoDB, Mongoose

## How it work
With the user authentication yet to be integrated in the frontend, users will be routed into the home/landing page where most of my overall frontend design are in display.

The most powerful tool I have here is primarily the sticky navbar at the top where user can navigate to different routes within my application. This navbar contains navigation capabilities to other created routes.

Inside my Hero Image/Video, I've also integrated a random quote API in the bottom of it to give a more refining user experience as well as a huge button that navigate into the `/shop` route

Most of the backend communication are used inside the `/shop` routes where data are directly extracted from MongoDB to display every single available items on each render (This page is not yet fully completed as there are many more ideas I have in mind that was left out due to time constraints ex. Search Bar & Quick navigation buttons). However, there is query capabilities when using the checkboxes where the displayed information can be tailored to one or more checkboxes selections. 

The profile route is in its creation stage where I've only created a general template in the frontend of how when a user who logged in will see. (This will be left like this until I integrate the user authentication system)

The login route is also unfunctional and in its creation stages where not much is done beside clicking the sign in button will routes the user to the homepage. 

The register route is partly functional in sending Post request to the backend for user creation.

## How to use
> **INSTALLATION**
> 1. Fork the following project or download it as a .zip onto your local machine
> 2. Inside the main folder there are two additional folder /application & /server
-------------------
> 3. Change directory into the /server folder and do an `npm i` to install and initialize all the existing library.
> 4. Once completed, run `node server.mjs` to start the local server
------------------
>5. Once the backend is started, go back to the parent folder and change director into /application
>6. Perform `npm i` similarly.
>7. Once installation is completed, run the command `npm run dev` to start up the frontend on your local machine 


