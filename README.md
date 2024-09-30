# Census Higher or Lower Game
> Contributers: Isaac Exposito, Liza George

## Description
A game where users try to guess which randomly generated US census query result is greater (similar to [Higher or Lower](https://www.higherlowergame.com/) or the [Scattegories population](https://www.stattogories.com/population/countries.html) game). The aim of the game is to get greatest streak of correct rounds.


**MVP:** A home page that gives basic information about a game and a start button. displaying two query descriptions. User picks which one would be greater and gets success (next round) or failure (show streak). The second round contains the winner from the first and a new question, and each successive round contains the last round’s new question + a new one. 


**Frontend:** A home page (as described above) and a game page. The game page is a split screen where either side is clickable. The current score and the user's highest streak is displayed in the middle.


**Backend:** An API that the frontend calls to retrieve a previously generated query and result. To generate and store the queries, an API that takes a US Census Variable ID (corresponding to a category/statistic) and calls the Census API with it for every state. It then stores these generated queries and their results in our Database.

## Technical Components
**Frontend:** React (Vite, Typescript-based), TailwindCSS

**Backend:** Node.JS, MongoDB

## Sources
State flags: https://flagpedia.net/us-states/download 
DC flag: https://flaglane.com/download/washington-dc-flag/#downloads 
