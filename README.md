# Squadron Personnel_Tracker

This program is a basic personnel tracker that can be used by a squadron exec or secretary to better manage unit personnel. It has 4 seperate microservices that each add functionality along with a navigation bar (created as its own mini React app) and a Spring back end. These components were brought together using Single-SPA. Single-SPA is a javascript router for front-end microservices. It allows for the mounting and unmounting multiple micro-front-ends. To demonstrate the advantages of using Single-SPA, we have a react microservice for the navigation bar that is mounted to all paths. When we route to each of the four microservices, they are mounted/unmounted according to the filepath/nav button. However, the nav bar stays for all of the 4 microservices.

## Program Structure

Components can be mounted individually using npm start, or they can all be booted up together using docker-compose up in the Personnel_Tracker directory. Note: this takes a long time since the docker bootup process is not optimized.

Recommended use: use npm start inside of each of the micro-applications to boot. Next, run npm start in the main directory (Personnel_Tracker) to boot up the Single-SPA router. To bring up the back-end, run docker-compose up inside of the \_Database directory. Once the db has booted, run ./gradlew bootRun.

The page will now be accessible at http://localhost:9000/main

> Note: If running each of these services independantly, you will need to run npm install inside of each of the respective directories to install the required dependencies. Run npm install file-loader --save-dev in the navbar.

### Main Page - Will Jantscher

The main page greets the user and offers several services. First, the user can add a member and specify all of their data. If they are missing a required field, they will get a message to help fill out the form. Once a member is added to the database, they will recieve a "Success!" message. Users can also search for a members information and edit their data. Both of these services update the program database. Finally, a user can generate an Alpha Roster to see the information for all members stored in the database.

### Inbound/Outbound Tracker - Aria LaFord

### OPR/EPR Tracker - Caden Reynolds

Allows the user to see what the current opr_epr_status of everyone in the unit is. The user has the ability to filter people based on their current opr_epr_status and they can also change the status of anyone in the unit. When a status is changed it sends a patch request to the server to update their opr_epr_status.

### Additional Duty Tracker - Emily Hosoya

This service displays a list of additional duties within the unit. Admins can add a new duty title, assign it to an individual, and set its estimated workload. They can also make changes to an existing position.

When an admin assigns a member to a duty, the member's name and rank appear alongside the duty title. Unassigned positions are highlighted in red and can be filtered. Yellow rows signify that this duty has an imminent departing member. These notify the squadron to reassign the responsibility to another member in the immediate future.

### Navigation Bar

The navigation bar is mounted accross all routes in this application and provides links to the major micro-apps. It also includes the illustrious Team Scorp%co logo.

### Spring Backend

This includes a persistant database that boots with mock data. It also contains the appropriate routing and handling of all requests interacting with the database. There are two primary tables with associated classes: a Member table/class and an Additional Duty table/class

###

## Links

### Github

The github repository that holds all of the code for this project is located here: [Personnel Tracker Github](https://github.com/willjantscher/Personnel_Tracker).

### Trello

User stories were written and tracked using Trello: [Personnel Tracker Trello](https://trello.com/b/jq9sAJrF/kanban-template).

### Draw.io

The structure of this project, as well as the database Entity Relationship Diagram, were mapped out using draw.io: [Personnel Tracker Draw.io](https://app.diagrams.net/#G1SoA0oDOcl7YvjJj9s4STxNKjDo51wB9l).

### Reference Material

Below are the links to material that was referenced to create this project:

https://docs.google.com/document/d/14IxhGOW_coKxupkZpobb3MrdLyeHSTVQZ58ZoauzqwE/edit
https://docs.google.com/spreadsheets/d/1kjatEi7_PU4e_tPREHIcNHC_EjJoZdk2y5DqUaTAft4/edit#gid=0
https://www.freecodecamp.org/news/developing-and-deploying-micro-frontends-with-single-spa/
https://blog.bitsrc.io/how-to-develop-microfrontends-using-react-step-by-step-guide-47ebb479cacd
https://devcenter.heroku.com/articles/git#creating-a-heroku-remote
https://webpack.js.org/loaders/file-loader/
https://github.com/RameshMF/ReactJS-Spring-Boot-CRUD-Full-Stack-App
