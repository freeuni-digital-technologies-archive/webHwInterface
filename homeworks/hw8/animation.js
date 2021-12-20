var params = { fullscreen: false };
const elem = document.createElement('div')
/**
 * TODO გაცენტრვა :')
 * ანუ 640 px ხელით არ უნდა ქონდეს მითითებული, 
 * შიგნითა svg რამდენიცაა იმდენი უნდა იყოს
 */
elem.style = `
    width: 640px;
    margin: auto;
`
document.body.appendChild(elem)
var animation = new Two(params).appendTo(elem);

var registeredObjects = []
var cx = animation.width * 0.5;
var cy = animation.height * 0.5;

function launch() {
    let shapes = registeredObjects.map(e => e.shape)
    var group = animation.makeGroup(...shapes);
    group.position.set(cx, cy);
    animation.play()
}

class Shape {
    constructor(x, y) {
        this.x = x
        this.y = y
        registeredObjects.push(this)
    }

    setColor(color) {
        this.shape.fill = color
    }

    update() {
        this.shape.position.set(this.x, this.y)
        this.shape.scale = this.scale
    }
}

class Triangle extends Shape {
	constructor(x, y, radius, scale) {
        super(x, y)
		this.shape = animation.makePolygon(x, y, radius, 3)
        this.radius = radius
        this.scale = scale
        this.shape.scale = scale
	}

    setFill(url) {
        this.texture = new Two.Texture(url, () => {
            this.shape.noStroke().fill = this.texture
        })
       
    }
}

class Light extends Shape {
    constructor(x, y, radius, scale) {
        super(x, y)
		this.shape = animation.makeCircle(x, y, radius, 3)
        this.radius = radius
        this.scale = scale
        this.shape.scale = scale
        this.type = 'light'
    }
}

class Message extends Shape {
    constructor(x, y, message) {
        super(x, y)
        this.shape = animation.makeText(message, x, y)
    }
}


window.onload = () => {
    window.config = createConfig()
    if (makeChristmasTree) {
        makeChristmasTree()
        launch()
    }
    
}
let animationCount = 0
let defaultDelay = 150
window.animate = (obj) => {
    obj.update = () => obj.targets.update()
    let delay = animationCount*defaultDelay
    if (obj.targets.type == 'light') {
        delay = config.triangleCount*defaultDelay + animationCount*30
    }
    setTimeout(() => {
        anime(obj)
    },  delay)
    animationCount++   
}