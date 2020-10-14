//collecting image and button objects from the DOM
const image = document.querySelector(".image");
const button = document.querySelector(".button");

//make an asynchronous fetch for photos from public API
function getPhotos(){
const URL = "https://dog.ceo/api/breeds/image/random";
const promise = fetch(URL);
promise.then(function(response){
    const processingResponse = response.json();
    return processingResponse;
}).then(function(processedResponse){
    image.src = processedResponse.message;
    image.alt = "Cute dog";
});
}

getPhotos();

button.addEventListener("click", function(){
    getPhotos();
});

//Popmotion animation
const popmotion = require("popmotion"); //obtain popmotion library from environment
const {styler, spring, listen, pointer, value} = popmotion;
const ball = document.querySelector(".division");
const divStyler = popmotion.styler(ball);
const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);

popmotion.listen(ball, "mousedown touchstart").start(e => {
  e.preventDefault();
  popmotion.pointer(ballXY.get()).start(ballXY);
});

popmotion.listen(document, "mouseup").start(() => {
  popmotion
    .spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200
    })
    .start(ballXY);
});