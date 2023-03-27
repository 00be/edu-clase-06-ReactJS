
/// Importar funciones o clases
import Button from "./components/button.js";
import Input from "./components/input.js";
import Video from "./components/video.js";

//// datos
let mySuperArrayofStrings = ["Login", "Signup", "Reset", "Cancel"];
let inputArray = ["Username", "Surname", "E-mail", "Password"];
let inputArrayFiltered = inputArray.filter( element => element=="Password");

// Funciones
function RenderButton(text) {
    let myButton = new Button("app", text);
    myButton.render();
}

function RenderInput(type) {

    let input_type = "Date"

    
    let myInput = new Input("app", input_type);
    myInput.render();
} 
// Logica de App
mySuperArrayofStrings.forEach(element => {
    RenderButton(element)
});

inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});



let myVideo = new Video("videoID", "https://cursoreact.spacewar.com.ar/clase6/videomp4/videoprueba.mp4", 160, 240, "video/mp4");
myVideo.render();