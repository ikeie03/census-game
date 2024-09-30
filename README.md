# Census Higher or Lower Game
> Contributers: Isaac Exposito, Liza George

## Description
A game where users try to guess which randomly generated US census query result is greater (similar to [Higher or Lower](https://www.higherlowergame.com/) or the [Scattegories population](https://www.stattogories.com/population/countries.html) game). The aim of the game is to get greatest streak of correct rounds.


**MVP:** 
- A home page that gives basic information about a game and a start button. 
- A Game page displaying two query descriptions. User picks which one would be greater and gets success (next round with two random questions) or failure (show "Lost" page).
- A "Lost" page that shows current points and highest score
- DB populated with ratios of a single type for all 50 states that can be queried from the frontend for each new pair of questions. 


**Frontend:** A home page (as described above), a game page, and a lost page. The game page is a split screen where either side is clickable. The current score and the user's highest streak is displayed in the middle.


**Backend:** An API that the frontend calls to retrieve the result of two previously generated queries of census data. To generate and store the queries, an API that takes a US Census Variable ID (corresponding to a category/statistic) and calls the Census API with it for every state. It then stores these generated queries and their results in our Database.

## Technical Components
**Frontend:** React (Vite, Typescript-based), TailwindCSS

**Backend:** Node.JS, MongoDB, Mongoose

## Setup Intructions
(Temporary set up until we host this separately. Message for database access)
- Run the backend with `cd backedend`, `npm run app`
- Run the frontend with `cd frontend`, `npm run dev`
- Go to http://localhost:5173/

## Sources
State flags: https://flagpedia.net/us-states/download 
DC flag: https://flaglane.com/download/washington-dc-flag/#downloads 
