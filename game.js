
var c = document.getElementById("game")
var ctx = c.getContext("2d")

var s = "s"
var g = "g"
var l = "l"
var e = "e"
var w = "w"

var reach = 0
var extension = 0
var minReach = 2

var arrows = new Image()
var spacebar = new Image()
arrows.src = './arrows.png'
spacebar.src = './spacebar.png'

var cL = 0 //current level

lv = [
    intro1 = {
        background: "powderblue",
        ground: "darkgreen",
        w: 8,
        coords: [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, w,
            0, 0, 0, 0, 0, 0, 0, g,
            0, 0, 0, 0, 0, 0, g, g,
            0, s, 0, 0, 0, g, g, g,
            g, g, g, g, g, g, g, g,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
    intro2 = {
        background: "lightskyblue",
        ground: "darkgreen",
        w: 8,
        coords: [
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, w, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0,
            0, s, 0, 0, 0, 0, e, 0,
            g, g, g, g, g, g, g, g,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
    intro3 = {
        background: "royalblue",
        ground: "darkgreen",
        w: 12,
        coords: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, w, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, s, 0, 0, 0, 0, g, g, 0, 0, 0, 0,
            g, g, g, g, g, g, g, g, 0, 0, 0, 0,
            g, g, g, g, g, g, g, g, 0, 0, 0, 0,
            g, g, g, g, g, g, g, g, 0, 0, 0, 0,
            g, g, g, g, g, g, g, g, 0, e, 0, 0,
            g, g, g, g, g, g, g, g, g, g, 0, 0,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
    intro4 = {
        background: "midnightblue",
        ground: "darkgreen",
        w: 16,
        coords: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, g,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, g, g,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, g, g, g,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, g, g, g, g,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e, g, g, g, g, g,
            0, s, 0, 0, 0, 0, 0, 0, 0, e, g, g, g, g, g, g,
            g, g, g, g, g, g, g, g, 0, g, g, g, g, g, g, g,
            g, g, g, g, g, g, g, g, 0, g, g, g, g, g, g, g,
            g, g, g, g, g, g, g, g, 0, g, g, g, g, g, g, g,
            g, g, 0, 0, 0, g, g, g, 0, g, g, g, g, g, g, g,
            g, g, 0, w, 0, g, g, g, 0, g, g, g, g, g, g, g,
            g, g, 0, 0, 0, 0, 0, 0, 0, g, g, g, g, g, g, g,
            g, g, g, g, g, g, g, g, 0, g, g, g, g, g, g, g,
            g, g, g, g, g, g, g, g, 0, g, g, g, g, g, g, g,
            g, g, g, g, g, g, g, g, 0, g, g, g, g, g, g, g,
            g, g, g, g, g, g, g, g, 0, g, g, g, g, g, g, g,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
    lv1 = {
        background: "black",
        ground: "DarkRed",
        w: 16,
        coords: [
            0, 0, 0, 0, 0, 0, g, e, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, g, 0, s, g, g, 0, 0, 0, 0, 0, 0, 0, 0,
            0, g, g, g, g, g, g, 0, 0, g, 0, 0, 0, 0, g, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, g, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, g, 0,
            0, 0, 0, 0, 0, g, 0, 0, 0, g, 0, 0, g, 0, g, 0,
            0, 0, g, g, g, g, 0, 0, 0, 0, 0, 0, 0, 0, g, 0,
            0, g, g, 0, 0, g, 0, 0, g, 0, 0, 0, 0, e, g, 0,
            g, g, e, 0, 0, g, g, g, g, g, g, g, g, g, g, 0,
            0, g, g, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, g, 0,
            0, 0, g, 0, g, g, 0, 0, 0, g, 0, 0, 0, 0, g, 0,
            0, 0, g, 0, g, g, 0, 0, 0, 0, 0, 0, 0, 0, g, 0,
            0, 0, g, 0, 0, g, 0, 0, 0, g, 0, 0, 0, 0, 0, 0,
            0, 0, g, 0, g, g, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            w, 0, 0, 0, 0, g, 0, 0, 0, g, 0, 0, 0, g, g, 0,
            g, 0, 0, 0, g, g, 0, 0, 0, 0, 0, 0, 0, g, g, 0,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
    lv2 = {
        background: "SlateBlue",
        ground: "Tomato",
        w: 16,
        coords: [
            0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, e, 0, 0, 0, g, w, e, e, e, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, g, g, 0, 0, e, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, 0, e, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, g, 0, 0, g, 0, 0, 0, 0, 0, 0, 0,
            0, g, 0, 0, 0, 0, 0, 0, g, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, g, e, g, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, g, 0, g, 0, 0,
            g, g, g, g, 0, g, g, g, g, g, g, g, 0, g, g, g,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, e,
            0, g, g, g, g, g, g, g, g, g, g, g, 0, g, g, g,
            0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, s,
            g, g, g, g, g, g, g, g, g, g, g, g, g, g, g, g,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
    lv3 = {
        background: "white",
        ground: "black",
        w: 16,
        coords: [
            0, 0, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 0, 0, 0,
            w, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            g, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, w,
            e, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, g,
            g, g, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            g, 0, 0, 0, 0, 0, 0, 0, 0, 0, g, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, g, g, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, e, 0, 0, 0, g, 0, 0, 0, g, g, 0, 0, 0, 0, 0,
            g, g, g, 0, 0, g, 0, 0, 0, g, 0, 0, 0, 0, 0, 0,
            g, 0, 0, 0, 0, g, 0, 0, 0, g, e, 0, 0, 0, 0, 0,
            g, e, g, g, 0, g, 0, 0, 0, g, g, 0, 0, 0, 0, e,
            g, 0, g, g, g, g, 0, 0, 0, g, 0, 0, 0, 0, 0, g,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
    lv4 = {
        background: "yellowgreen",
        ground: "darkolivegreen",
        w: 16,
        coords: [
            g, g, g, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, g, g, g,
            g, g, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, g, g, g,
            g, 0, 0, 0, g, g, g, g, g, 0, 0, 0, 0, g, g, g,
            g, 0, 0, g, g, g, 0, w, 0, g, 0, 0, 0, g, g, g,
            0, 0, g, g, g, 0, 0, g, 0, 0, 0, 0, g, g, g, g,
            0, 0, 0, g, 0, 0, 0, g, 0, 0, 0, 0, g, g, g, g,
            0, g, 0, g, 0, 0, s, g, 0, 0, 0, 0, g, g, g, g,
            0, 0, 0, g, 0, 0, g, g, 0, 0, 0, 0, g, g, g, g,
            0, 0, g, 0, 0, 0, 0, g, 0, 0, 0, g, g, g, g, g,
            0, g, e, 0, 0, 0, 0, g, g, 0, 0, g, g, g, g, g,
            0, 0, g, 0, 0, 0, 0, e, g, 0, 0, g, g, g, g, g,
            g, 0, 0, 0, 0, 0, 0, g, g, 0, 0, g, g, g, g, g,
            0, 0, 0, 0, 0, 0, 0, g, g, 0, g, g, g, g, g, g,
            e, g, 0, 0, 0, 0, 0, g, g, 0, g, g, g, g, g, g,
            g, g, g, 0, 0, 0, 0, g, g, 0, g, g, g, g, g, g,
            g, g, g, g, g, g, g, g, g, 0, g, g, g, g, g, g,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
    Win = {
        background: "indigo",
        ground: "blue",
        w: 16,
        coords: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            w, 0, 0, 0, w, 0, g, g, g, 0, 0, w, 0, 0, 0, w,
            0, w, 0, w, 0, g, 0, 0, 0, g, 0, w, 0, 0, 0, w,
            0, 0, w, 0, 0, g, 0, 0, 0, g, 0, w, 0, 0, 0, w,
            0, 0, w, 0, 0, g, 0, 0, 0, g, 0, w, 0, 0, 0, w,
            0, 0, w, 0, 0, g, 0, s, 0, g, 0, w, 0, 0, 0, w,
            0, 0, w, 0, 0, 0, g, g, g, 0, 0, 0, w, w, w, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            g, 0, g, 0, g, 0, 0, w, 0, 0, g, 0, 0, 0, g, 0,
            g, 0, g, 0, g, 0, 0, 0, 0, 0, g, g, 0, 0, g, 0,
            0, g, g, g, 0, 0, 0, g, 0, 0, g, 0, g, 0, g, 0,
            0, g, 0, g, 0, 0, 0, g, 0, 0, g, 0, 0, g, g, 0,
            0, g, 0, g, 0, 0, 0, g, 0, 0, g, 0, 0, 0, g, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        unpassable: [],
        wins: [],
        extenders: [],
        get x() { return xyDetermine('x', this.coords.indexOf(s), lv[cL]) },
        get y() { return xyDetermine('y', this.coords.indexOf(s), lv[cL]) }
    },
]

player = {
    x: [lv[cL].x],
    y: [lv[cL].y],
    tile: tileDetermine(lv[cL].x, lv[cL].y, lv[cL])
}

function tileDetermine(x, y, level) {
    return y * level.w + x
}

function xyDetermine(xy, n, level) {
    if (xy == 'x') {
        return n - Math.floor(n / level.w) * level.w
    }
    if (xy == 'y') {
        return Math.floor(n / level.w)
    }
}

controller = {
    left: false,
    right: false,
    up: false,
    down: false,
    moveable: false, 
    spaceDown: false, 
    keyListener: function (event) {
        var direction = (event.type == "keydown") ? true : false
        var abilityState = (event.type == "keydown") ? true : false
        var spaceDownState = (event.type == "keydown") ? true : false
        switch (event.keyCode) {
            case 37:// left key
                controller.left = direction
                break
            case 38:// up key
                controller.up = direction
                break
            case 39:// right key
                controller.right = direction
                break
            case 40:// down key
                controller.down = direction
                break
            case 32://spacebar
                controller.moveable = abilityState
                controller.spaceDown = spaceDownState
                break
        }
    }
}

function mechanics() {
    if(lv[cL].extenders.indexOf(player.tile) != -1) {
        lv[cL].coords[player.tile] = 0
        extension += 1
        lv[cL].extenders.splice(lv[cL].extenders.indexOf(player.tile),1)
    }

    player.tile = tileDetermine(player.x[0], player.y[0], lv[cL])
    //følgende er begivenheder, der sker, lige indtil man har rykket minReach gange
    if (reach < minReach+extension && controller.moveable) {
        if (controller.right && !lv[cL].unpassable.includes(player.tile + 1) && player.x[0] < lv[cL].w - 1 && player.x[0] != player.x[player.x.length - 1] -1) {
                player.x.push(player.x[0])
                player.y.push(player.y[0])
                player.x[0] += 1
                reach += 1
        }
        if (controller.left && !lv[cL].unpassable.includes(player.tile - 1) && player.x[0] > 0 && player.x[0] != player.x[player.x.length - 1] + 1) {
                player.x.push(player.x[0])
                player.y.push(player.y[0])
                player.x[0] -= 1
                reach += 1
        }
        if (controller.up && !lv[cL].unpassable.includes(player.tile - lv[cL].w) && player.y[0] > 0 && player.y[0] != player.y[player.y.length - 1] + 1) {
                player.x.push(player.x[0])
                player.y.push(player.y[0])
                player.y[0] -= 1
                reach += 1
        }
        if (controller.down && !lv[cL].unpassable.includes(player.tile + lv[cL].w) && player.y[0] < lv[cL].w - 1 && player.y[0] != player.y[player.y.length - 1] - 1) {
                player.x.push(player.x[0])
                player.y.push(player.y[0])
                player.y[0] += 1
                reach += 1
        }
    }

    else if (lv[cL].unpassable.includes(player.tile + lv[cL].w)) {
        reach = 0
        controller.moveable = false
    }

    if (controller.spaceDown == false) {
        if (player.x.length > 1) {
            player.x.splice(1, 1)
            player.y.splice(1, 1)
        }
        if (!lv[cL].unpassable.includes(player.tile + lv[cL].w)) {
            player.y[0] += 1
        }
        if (controller.right && !lv[cL].unpassable.includes(player.tile + 1) && lv[cL].unpassable.includes(player.tile + lv[cL].w) && player.x[0] < lv[cL].w - 1) {
            player.x[0] += 1
        }
        if (controller.left && !lv[cL].unpassable.includes(player.tile - 1) && lv[cL].unpassable.includes(player.tile + lv[cL].w) && player.x[0] > 0) {
            player.x[0] -= 1
        }
    }

    if(player.y[0] > lv[cL].w + 2) {
        player.x[0] = lv[cL].x
        player.y[0] = lv[cL].y
        reach = 0
    }
}

function sky(x, y) {
    ctx.beginPath()
    ctx.rect(x * tileSize, y * tileSize, tileSize, tileSize)
    ctx.fillStyle = lv[cL].background
    ctx.fill()
}

function reachExtend(x, y) {
    ctx.beginPath()
    ctx.rect(x * tileSize, y * tileSize, tileSize, tileSize)
    ctx.fillStyle = lv[cL].background
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = "purple"
    ctx.moveTo(x * tileSize + 0.5*tileSize, y * tileSize + 0.2*tileSize)
    ctx.lineTo(x * tileSize + 0.8*tileSize, y * tileSize + 0.7*tileSize)
    ctx.lineTo(x * tileSize + 0.2*tileSize, y * tileSize + 0.7*tileSize)
    ctx.closePath()
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.fill()

}

function ground(x, y) {
    ctx.beginPath()
    ctx.rect(x * tileSize, y * tileSize, tileSize, tileSize)
    ctx.fillStyle = lv[cL].ground
    ctx.fill()
}

function nextLevel(x,y) {
    ctx.beginPath()
    ctx.rect(x * tileSize, y * tileSize, tileSize, tileSize)
    ctx.fillStyle = lv[cL].background
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = "gold"
    ctx.moveTo(x * tileSize + 0.3*tileSize, y * tileSize)
    ctx.lineTo(x * tileSize + 0.7*tileSize, y * tileSize)
    ctx.lineTo(x * tileSize + 1*tileSize, y * tileSize + 0.3*tileSize)
    ctx.lineTo(x * tileSize + 1*tileSize, y * tileSize + 0.7*tileSize)
    ctx.lineTo(x * tileSize + 0.7*tileSize, y * tileSize + 1*tileSize)
    ctx.lineTo(x * tileSize + 0.3*tileSize, y * tileSize + 1*tileSize)
    ctx.lineTo(x * tileSize + 0*tileSize, y * tileSize + 0.7*tileSize)
    ctx.lineTo(x * tileSize + 0*tileSize, y * tileSize + 0.3*tileSize)
    ctx.closePath()
    ctx.fill()
    ctx.strokeStyle = "black"
    ctx.lineWidth = 2
    ctx.stroke()
}

function playerShape() {
    ctx.beginPath()
    for (let i = 0; i <= minReach+extension; i++) {
        if (controller.spaceDown) {
            ctx.fillStyle = "red"
        }
        else {
            ctx.fillStyle = "blue"
        }

        ctx.moveTo(player.x[i] * tileSize + 0.3*tileSize, player.y[i] * tileSize)
        ctx.lineTo(player.x[i] * tileSize + 0.7*tileSize, player.y[i] * tileSize)
        ctx.lineTo(player.x[i] * tileSize + 1*tileSize, player.y[i] * tileSize + 0.3*tileSize)
        ctx.lineTo(player.x[i] * tileSize + 1*tileSize, player.y[i] * tileSize + 0.7*tileSize)
        ctx.lineTo(player.x[i] * tileSize + 0.7*tileSize, player.y[i] * tileSize + 1*tileSize)
        ctx.lineTo(player.x[i] * tileSize + 0.3*tileSize, player.y[i] * tileSize + 1*tileSize)
        ctx.lineTo(player.x[i] * tileSize + 0*tileSize, player.y[i] * tileSize + 0.7*tileSize)
        ctx.lineTo(player.x[i] * tileSize + 0*tileSize, player.y[i] * tileSize + 0.3*tileSize)
        ctx.closePath()
    }
    ctx.strokeStyle = "black"
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.fill()
}

//Visual
function levelDrawer() {
    //Solid impassable tiles
    for (let i = 0; i < lv[cL].coords.length; i++) {
        
        if (lv[cL].coords[i] == "g") {
            lv[cL].unpassable.push(i)
        }
        if (lv[cL].coords[i] == "e") {
            lv[cL].extenders.push(i)
        }
        if (lv[cL].coords[i] == "w") {
            lv[cL].wins.push(i)
        }
    }

    //Repeated parts/passable tiles
    function draw() {
        tileSize = 800/lv[cL].w
        mechanics()

        for (let i = 0; i < lv[cL].coords.length; i++) {
            if (lv[cL].coords[i] == "g") {
                ground(xyDetermine('x', i, lv[cL]), xyDetermine('y', i, lv[cL]))
            }
            if (lv[cL].coords[i] == 0 || lv[cL].coords[i] == "s") {
                sky(xyDetermine('x', i, lv[cL]), xyDetermine('y', i, lv[cL]))
            }
            if (lv[cL].coords[i] == "e") {
                reachExtend(xyDetermine('x', i, lv[cL]), xyDetermine('y', i, lv[cL]))
            }
            if (lv[cL].coords[i] == "w") {
                nextLevel(xyDetermine('x', i, lv[cL]), xyDetermine('y', i, lv[cL]))
            }
        }

        playerShape()

        if(lv[cL].wins.indexOf(player.tile) != -1) {
            cL += 1
            player.x = [player.x[0]]
            player.y = [player.y[0]]
            player.x[0]=lv[cL].x
            player.y[0]=lv[cL].y
            for (let i = 0; i < lv[cL].coords.length; i++) {
        
                if (lv[cL].coords[i] == "g") {
                    lv[cL].unpassable.push(i)
                }
                if (lv[cL].coords[i] == "e") {
                    lv[cL].extenders.push(i)
                }
                if (lv[cL].coords[i] == "w") {
                    lv[cL].wins.push(i)
                }
            }
            extension = 0
        }

        ctx.font = "50px Arial"
        ctx.fillStyle = "white"
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3

        if (cL == 0) {
            ctx.drawImage(arrows, 50, 20, 740/3.5, 500/4)
            ctx.drawImage(spacebar, 40, 180, 730/3, 281/3)
            ctx.drawImage(arrows, 320, 150, 740/3.5, 500/4)
            ctx.fillText("+", 290, 230)
            ctx.strokeText("+", 290, 230)
            ctx.fillText("Move", 300, 100)
            ctx.strokeText("Move", 300, 100)
            ctx.fillText("Ability", 550, 230)
            ctx.strokeText("Ability", 550, 230)
        }

        if (cL == 3) {
            ctx.drawImage(spacebar, 40, 40, 730/3, 281/3)
            ctx.fillText("In Air", 300, 100)
            ctx.strokeText("In Air", 300, 100)
        }
        
        window.requestAnimationFrame(draw)

        controller.right = false
        controller.left = false
        controller.up = false
        controller.down = false

    }
    window.requestAnimationFrame(draw)
}

levelDrawer()

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener)