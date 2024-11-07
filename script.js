const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.textAlign = "center";
const go_btn = document.getElementById("launch");
const rocket = new Image();
rocket.src = "images/rocket.png";
let r_height = canvas.height - 50 -5;

function fill_background() {
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - 5, canvas.width, canvas.height);
}

function draw_rocket() {
    ctx.drawImage(rocket, 20, r_height, 50, 50);
}

function rocket_go() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fill_background();
    draw_rocket();
    ctx.fillStyle = "black";
    ctx.fillText("Blastoff!", canvas.width / 2, 16);
    r_height -= 1;
    requestAnimationFrame(rocket_go);
}

function draw_countdown(sec) {
    fill_background();
    draw_rocket();
    ctx.fillStyle = "black";
    ctx.fillText("Launch in: " + sec + "...", canvas.width / 2, 16);
}

go_btn.addEventListener("click", function(event) {
    event.preventDefault();
    setTimeout(rocket_go, 10_000);
    for(let i = 10; i >= 0; i--) {
        setTimeout(draw_countdown, 950 * (10 - i), i);
    }
});

fill_background();
draw_rocket();
