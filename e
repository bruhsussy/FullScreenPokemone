import { createFspInterface } from "fullscreenpokemon";

createFspInterface(document.getElementById("game")).then(() => {
    console.log("Ready to play! ✨");
    console.log(FSP);
});
