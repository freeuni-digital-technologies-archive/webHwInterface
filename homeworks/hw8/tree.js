// ამოაკომენტარე ქვემოთა ოთხი ხაზი
// TODO comment out in the end
function makeChristmasTree() {
	createTrunk()
	addLights()
}

function createConfig() {
	return {
		triangleCount: 2,
		// ქვედა სამკუთხედის რადიუსი
		startingRadius: 100,
		// ამდენით შემცირდება ყოველი მომდევნო სამკუთხედის რადიუსი 
		radiusOffset: 10,
		// "ზემოდან ჩამოსვლის" ეფექტისთვის
		startingY: 60,
		yOffset: 30,
		// message	
	}
}

function createTrunk() {
	for (let i = 0; i < config.triangleCount; i++) {
		addTrunk(i)
	}
}

function addLights() {
	for (let i = 0; i < config.triangleCount + 1; i++) {
		addLight(i)
	}
	addTopLight()
}

function addTrunk(i) {
	let color = getTrunkColor(i)
	let radius = getRadius(i)
	let triangle = new Triangle(0, getY(i), radius, 1)
	triangle.setColor(color)
	// animate({
	// 	targets: triangle,
	// 	y: getY(i),
	// })
}


function addLight(i) {
	let radius = getRadius(i)
	// რაც უფრო მაღლაა, უფრო ცოტა ნათურა გვინდა
	let distanceX = getXDistance(radius, config.triangleCount + 2 - i)
	let distanceY = getYDistance(radius, 1)
	let yPos = getY(i)
	for (let y = yPos; y < yPos + radius; y+= distanceY) {
		for (let x = -radius + distanceX/2; x < radius; x += distanceX) {
			let light = new Light(x, y + config.yOffset, 5, 0)
			light.setColor(config.lightColor)
			animate({
				targets: light,
				scale: 1
			})
		}
	}
}


function addTopLight() {
	let topY = getY(config.triangleCount) - getRadius(config.triangleCount)/2
	let light = new Light(0, topY, 5, 0)
	animate({
		targets: light,
		scale: 1
	})
}

function getTrunkColor(i) {
	let red = 50 + i*40
	let green = 50 + i*40
	let blue = 50 + i*40
	return `rgb(${red}, ${green}, ${blue})`
}


let lightColors = ['#FFFFFF']
function getLightColor(i) {
	return lightColors[i % lightColors.length]
}

/**
 * ეს ფუნქციები არ შეცვალოთ
 * თუ გინდათ შეცვალეთ მარა რომ გამოაგზავნით ცვლილებები წაიშლება მაინც
 */

function getXDistance(radius, count) {
	return 2*radius/count
}

function getYDistance(radius, count) {
	return  2*radius/count
}

function getRadius(i) {
	return config.startingRadius - i*config.radiusOffset
}

function getY(i) {
	return getRadius(i) - i*config.yOffset	
}
