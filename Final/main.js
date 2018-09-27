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

allEvents = [];

events = [];
catas = [];
timelineSteps = [];

let cursor = 50;
let isMouseOver = false;

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
document.addEventListener("mousemove", mouseMove);
// canvas.addEventListener("mouseleave", ()=>{isMouseOver == false; console.log('e'); draw()})


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
        this.isHover = false;
        this.i = i;
    }
    _trace(cursor){

        // ctx.strokeRect(cursor, this.y, this.width, this.height);
        this.x = cursor;
        // let opacity;
        // if (this.isHover == true) {
            
        // }
        console.log(isMouseOver)
        let width;
        let opacity;
        if (this.isHover == true) { 
            opacity = 1.0;
        }else if(isMouseOver == false){
            opacity = 1.0;
        }else{
            opacity = 0.5;
        }

        ctx.globalAlpha = opacity;
        ctx.fillStyle = this.color;
        ctx.fillRect(cursor, this.y, this.width, this.height);
        ctx.fill(); 
    }
}




const setRectangle = _ => {
    FloodsArray = [];
    floods.forEach((el, i) => {
        let     width = (el.Deaths/10000)>4 ? el.Deaths/10000 : 4,
                height = canvas.height*0.7/2,
                x = undefined,
                y = 0,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(0, 121, 230)";

        const rect = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        FloodsArray.push(rect)
        allEvents.push(FloodsArray)
        
    });
    VolcansArray = [];
    volcans.forEach((el, i) => {
        let     width = (el.Deaths/10000)>4 ? el.Deaths/10000 : 4,
                height = canvas.height*0.7/2,
                x = undefined,
                y = 0,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(172, 239, 226)";

        const rect = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        VolcansArray.push(rect)
        allEvents.push(VolcansArray)
        
    });
    EarthquakeArray = [];
    earthquake.forEach((el, i) => {
        let     width = (el.Deaths/10000)>4 ? el.Deaths/10000 : 4,
                height = canvas.height*0.7/2,
                x = undefined,
                y = 0,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(16,221,142)";

        const mesh = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        EarthquakeArray.push(mesh)
        allEvents.push(EarthquakeArray)
        
    });    
    TemperatureArray = [];
    temperature.forEach((el, i) => {
        let     width = (el.Deaths/10000)>4 ? el.Deaths/10000 : 4,
                height = canvas.height*0.7/2,
                x = undefined,
                y = 0,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(86,17,153)";

        const mesh = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        TemperatureArray.push(mesh)
        allEvents.push(TemperatureArray)

    });
    WildfireArray = [];
    wildfire.forEach((el, i) => {
        let     width = (el.Deaths/10000)>4 ? el.Deaths/10000 : 4,
                height = canvas.height*0.7/2,
                x = undefined,
                y = 0,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(133,79,186)";

        const mesh = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        WildfireArray.push(mesh)
        allEvents.push(WildfireArray)
        
    });
    EpidemicArray = [];
    epidemic.forEach((el, i) => {
        let     width = (el.Deaths/10000)>4 ? el.Deaths/10000 : 4,
                height = canvas.height*0.7/2,
                x = undefined,
                y = 0,
                type = el.Entity,
                year = el.Year,
                deaths = el.Deaths,
                color = "rgb(14,79,127)";

        const mesh = new Rectangle(x, y, width, height, type, year, deaths, color, i);
        EpidemicArray.push(mesh)
        allEvents.push(EpidemicArray)
        
    });
}
function draw(){
    cursor = 50;
    timelineSteps = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 1900; i < 2018; i++) {
        let step = getCursor();
        timelineSteps.push({i,step})
        drawFloods(i);
        drawEarthquake(i);
        drawVolcans(i);
        drawTemperature(i);
        drawWildfire(i);
        drawEpidemic(i);
    }
    console.log('DRAW')
}

function drawFloods(year){
    FloodsArray.forEach(element => {
        let cursor = getCursor(element)
        if (element.year == year) {
            element._trace(cursor);
            addCursor(element);
        }
    });
}
function drawEarthquake(year) {
    EarthquakeArray.forEach(element => {
        let cursor = getCursor(element)
        if (element.year == year) {
            element._trace(cursor);
            addCursor(element);
        }
    })
}
function drawVolcans(year) {
    VolcansArray.forEach(element => {
        let cursor = getCursor(element)
        if (element.year == year) {
            element._trace(cursor);
            addCursor(element);
        }
    })
}
function drawTemperature(year) {
    TemperatureArray.forEach(element => {
        let cursor = getCursor(element)
        if (element.year == year) {
            element._trace(cursor);
            addCursor(element);
        }
    })
}
function drawWildfire(year) {
    WildfireArray.forEach(element => {
        let cursor = getCursor(element)
        if (element.year == year) {
            element._trace(cursor);
            addCursor(element);
        }
    })
}
function drawEpidemic(year) {
    EpidemicArray.forEach(element => {
        let cursor = getCursor(element)
        if (element.year == year) {
            element._trace(cursor);
            addCursor(element);
        }
    })
}

function getCursor(){
    return cursor
}
function addCursor(element){
    cursor = cursor + element.width + 5;
}

function drawTimeline(){
    const currentDiv = document.querySelector('footer'); 
    timelineSteps.forEach((time, index) => {
        // document.write(`<span class="timeline_step" data-X="${time['step']}"></span>`)
          // crée un nouvel élément div 
          if (index % 10 == 0) {
            const newSpan = document.createElement("span"); 
            newSpan.setAttribute('class', 'timeline_step');
            newSpan.style.left = `${time['step']}px`;
            // et lui donne un peu de contenu 
            var newContent = document.createTextNode(`${time['i']}`); 
            // ajoute le noeud texte au nouveau div créé
            newSpan.appendChild(newContent);  
            // ajoute le nouvel élément créé et son contenu dans le DOM 
            document.body.insertBefore(newSpan, currentDiv); 
          }
    })
}

function setupCanvas(){
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    // Get the device pixel ratio, falling back to 1.
    let dpr = window.devicePixelRatio || 1;
    // Get the size of the canvas in CSS pixels.
    let rect = canvas.getBoundingClientRect();
    // Give the canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    canvas.width = 6002; //window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr;
    
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    draw()
    return ctx;
  }
//   window.addEventListener('resize', setupCanvas);

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
    .then(() => setupCanvas())
    .then(() => setRectangle())
    .then(() => draw())
    .then(() => drawTimeline())
//     .catch(err => {
//         throw err;
//         // Do something for an error here
// });

    //////// EVENTS
    function mouseMove(e) {
        const canvas = document.getElementById('canvas');
        const dim = canvas.getBoundingClientRect();
        
        console.log('MOVE')
        canvas.removeEventListener('mousemove', mouseMove);
        isMouseOver = false;
        let mouseX = e.x + window.scrollX;
        let mouseY = e.y;

        const infos = document.querySelector('.infos');
        infos.style.setProperty('--left-cursor', mouseX + 'px');
        infos.style.setProperty('--top-cursor', mouseY + 'px');
        infos.style.display = 'none';

        
        setTimeout(() => {
            canvas.addEventListener('mousemove', mouseMove);
        }, 10);
        allEvents.forEach(event => {
            for(var i=0;i<event.length;i++){
                if (mouseX>= event[i].x && mouseX<= event[i].x + event[i].width && mouseY >= dim.y && mouseY <= dim.y + dim.height) {
                    console.log('EVENTHIIT')
                    event[i].isHover = true;
                    isMouseOver = true;
                    updateData(event[i])
                }else{
                    event[i].isHover = false;
                }
            }
        });

        // for(var i=0;i<FloodsArray.length;i++){
        //     if (mouseX>= FloodsArray[i].x && mouseX<= FloodsArray[i].x + FloodsArray[i].width) {
        //         console.log('FLOODHIIT')
        //         FloodsArray[i].isHover = true;
        //     }else{
        //         FloodsArray[i].isHover = false;
        //     }
        // }
        draw()
    }

// //// GET SECOND DATASET ////
// fetch('catas.json')
//     .then(response => {
//     return response.json();
//     })
//     .then(data => {
//         data.map(cata => catas.push(cata))
//         catas.forEach(element => {
//             console.log(element)
//         })
    
// })  
//     .catch(err => {
//         // Do something for an error here
// });

const dataContainer = document.querySelector('.infos');
const updateData = event => {
    let deaths = event.deaths;
    switch (event.deaths) {
        case (event.deaths > 10):
            deaths = Math.floor
            break;
    
        default:
            break;
    }
    // if (event.deaths > 10) {
    //     deaths =
    // }
    dataContainer.style.display = 'block';
    dataContainer.innerHTML = `<span>${deaths}</span> deaths from ${event.type} in <span>${event.year}</span>`;
    
}