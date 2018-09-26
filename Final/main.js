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

FloodsArray = [];
EarthquakeArray = [];
VolcansArray = [];
TemperatureArray = [];
WildfireArray = [];
EpidemicArray = [];

events = [];

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
// canvas.addEventListener("mousemove", mouseMove);


class Rectangle {
    constructor(x, y, width, height, type, year, deaths, color, i){
        this.x = x || 5;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color;
        this.year = year;
        this.deaths = deaths;
        this.i = i;
    }
    _trace(cursor){
        
        // ctx.strokeRect(cursor, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        console.log(ctx.fillStyle)
        ctx.fillRect(cursor, this.y, this.width, this.height);
        ctx.fill(); 
    }
}




const setRectangle = _ => {
    FloodsArray = [];
    floods.forEach((el, i) => {
        let     width = (el.Deaths/1000)>1 ? el.Deaths/10000 : 1,
                height = canvas.height*0.7/2,
                x = canvas.width/100,
                y = canvas.height/20,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(0, 121, 230)";

        const rect = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        FloodsArray.push(rect)
        
    });
    VolcansArray = [];
    volcans.forEach((el, i) => {
        let     width = (el.Deaths/1000)>1 ? el.Deaths/10000 : 1,
                height = canvas.height*0.7/2,
                x = canvas.width/100,
                y = canvas.height/20,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(0, 210, 167)";

        const rect = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        VolcansArray.push(rect)
        
    });
    EarthquakeArray = [];
    earthquake.forEach((el, i) => {
        let     width = (el.Deaths/1000)>1 ? el.Deaths/10000 : 1,
                height = canvas.height*0.7/2,
                x = canvas.width/100,
                y = canvas.height/20,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(16,221,142)";

        const mesh = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        EarthquakeArray.push(mesh)
        
    });    
    TemperatureArray = [];
    temperature.forEach((el, i) => {
        let     width = (el.Deaths/1000)>1 ? el.Deaths/10000 : 1,
                height = canvas.height*0.7/2,
                x = canvas.width/100,
                y = canvas.height/20,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(86,17,153)";

        const mesh = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        TemperatureArray.push(mesh)
        
    });
    WildfireArray = [];
    wildfire.forEach((el, i) => {
        let     width = (el.Deaths/1000)>1 ? el.Deaths/10000 : 1,
                height = canvas.height*0.7/2,
                x = canvas.width/100,
                y = canvas.height/20,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(133,79,186)";

        const mesh = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        WildfireArray.push(mesh)
        
    });
    EpidemicArray = [];
    epidemic.forEach((el, i) => {
        let     width = (el.Deaths/1000)>1 ? el.Deaths/10000 : 1,
                height = canvas.height*0.7/2,
                x = canvas.width/100,
                y = canvas.height/20,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(133,79,186)";

        const mesh = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        EpidemicArray.push(mesh)
        
    });
}
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFloods();
    drawEarthquake();
    drawVolcans();
    drawTemperature();
    drawWildfire();
    drawEpidemic();
    console.log('DRAW')
}

function drawFloods(){
    let cursor = 50;
    FloodsArray.forEach(element => {
        element._trace(cursor);
        cursor += element.width + 10;
    });
}
function drawEarthquake() {
    let cursor = 50;
    EarthquakeArray.forEach(element => {
        element._trace(cursor);
        cursor += element.width + 10;
    })
}
function drawVolcans() {
    let cursor = 50;
    VolcansArray.forEach(element => {
        element._trace(cursor);
        cursor += element.width + 10;
    })
}
function drawTemperature() {
    let cursor = 50;
    TemperatureArray.forEach(element => {
        element._trace(cursor);
        cursor += element.width + 10;
    })
}
function drawWildfire() {
    let cursor = 50;
    WildfireArray.forEach(element => {
        element._trace(cursor);
        cursor += element.width + 10;
    })
}
function drawEpidemic() {
    let cursor = 50;
    EpidemicArray.forEach(element => {
        element._trace(cursor);
        cursor += element.width + 10;
    })
}

function setupCanvas(){
    // Get the device pixel ratio, falling back to 1.
    let dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    let rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
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
            else if (element['Entity'] == 'Extreme temperature') {
                temperature.push(element)
            }
            else if (element['Entity'] == 'Extreme Weather') {
                weather.push(element)
            }
            else if (element['Entity'] == 'Landslide') {
                landslide.push(element)
            }
            else if (element['Entity'] == 'Volcanic activity') {
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
    .then(() => setRectangle())
    .then(() => draw())
    .catch(err => {
        // Do something for an error here
});

    //////// EVENTS
    function mouseMove(e) {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        console.log('MOVE')
        let isMouseOver = false
        let mouseX = e.x;
        let mouseY = e.y;

        canvas.removeEventListener('mousemove', mouseMove);
        setTimeout(() => {
            canvas.addEventListener('mousemove', mouseMove);
        }, 100);

        for(var i=0;i<FloodsArray.length;i++){
            defineshape(FloodsArray[i]);
            console.log(FloodsArray[i])
            console.log(mouseX, mouseY)
            if (ctx.isPointInStroke(mouseX/2,mouseY/2) || ctx.isPointInPath(mouseX/2,mouseY/2) ) {
                console.log('HIIT')
                FloodsArray[i].isHover = true; 
                draw()
                isMouseOver = true;
            }
            
            // }else{
            //     FloodsArray[i].isHover = false;
            // }
        }

    }
function defineshape(s){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // ctx.beginPath();
    // ctx.moveTo(s.x1,s.y1);
    // ctx.lineTo(s.x2,s.y2);
    // ctx.closePath();
    ctx.rect(s.x, s.y, s.width, s.height);
    ctx.strokeRect(s.x, s.y, s.width, s.height);
}