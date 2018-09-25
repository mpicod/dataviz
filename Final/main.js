floods = [];
epidemic = [];
earthquake = [];
drought = [];
temperature = [];
weather = [];
landslide = [];
volcans = [];
dry = [];
wildfire = [];
events = [];

class Rectangle {
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
}


const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(window.devicePixelRatio)
}

function draw () {
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 100, 100);
  }
function setupCanvas(){
    // Get the device pixel ratio, falling back to 1.
    let dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    let rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    draw();
    return ctx;
  }
  window.addEventListener('resize', setupCanvas);
  setupCanvas();


//////// GET DATAS ///////
fetch('deaths.json').then(response => {
    return response.json();
    }).then(data => {
        data.map(event => events.push(event))
        console.log(events)
        events.forEach(element => {

            if (element['Entity'] == 'Flood') {
                floods.push(element)
            }
            else if (element['Entity'] == 'Epidemic') {
                epidemic.push(element)
            }
            else if (element['Entity'] == 'Earthquake') {
                earthquake.push(element)
            }
            else if (element['Entity'] == 'Drought') {
                drought.push(element)
            }
            else if (element['Entity'] == 'Extreme Temperature') {
                temperature.push(element)
            }
            else if (element['Entity'] == 'Extreme Weather') {
                weather.push(element)
            }
            else if (element['Entity'] == 'Landslide') {
                landslide.push(element)
            }
            else if (element['Entity'] == 'Volcanic Activity') {
                volcans.push(element)
            }
            else if (element['Entity'] == 'Dry') {
                dry.push(element)
            }
            else if (element['Entity'] == 'Wildfire') {
                wildfire.push(element)
            }
        })
    
})  
    .then(draw())
    .catch(err => {
        // Do something for an error here
});