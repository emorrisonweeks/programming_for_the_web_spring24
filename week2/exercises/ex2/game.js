


const games = [
    {title: "Forbidden Desert", type: "cooperative board game", numberOfPlayers: 4, rating: 5, shortDescription: "In Forbidden Desert, a thematic sequel to Forbidden Island, players take on the roles of brave adventurers who must throw caution to the wind and survive both blistering heat and blustering sand in order to recover a legendary flying machine buried under an ancient desert city. While featuring co-operative gameplay similar to Forbidden Island, Forbidden Desert is a fresh, new game based around an innovative set of mechanisms such as an ever-shifting board, individual resource management, and a unique method for locating the flying machine parts" },
    {title: "Gloomhaven", type: "tabletop rpg", numberOfPlayers: 4, rating: 5, shortDescription: "Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make."}, 
    {title: "Pathfinder", type: "tabletop rpg", numberOfPlayers: 4, rating: 5, shortDescription: "Pathfinder is a rich and complex fantasy RPG that uses the same d20 ruleset at the core of Dungeons and Dragons. Players take on the role of heroic adventurers, often explorers and scholars employed by the Pathfinder Society, who travel the world solving problems, unravelling mysteries and collecting treasure."}
];
console.log(games) 
const response = window.prompt("I have 3 games in my collection. Pick a number between 0 and 2 and I'll tell you about that game.");
alert("You selected " +games[response].title + " which is a " +games[response].type + " best enjoyed with " +games[response].numberOfPlayers + " players. " + 
"I would rate this game a " +games[response].rating + " out of 5. " +games[response].shortDescription);