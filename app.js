console.log('oy');
var health = document.getElementById("health")

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowUp') {
        health.value += 100
    }
});

var oof = 0;
document.getElementById('beatButt').addEventListener('click',(event) => {
    oof++;
    health.value += 100;
    console.log(oof);
    document.getElementById('beats').innerHTML = "heart beat madee: " + oof;
}); 



var lifeCycle = [
    ['bob is sleeping', 5],
    ['bob is working out', 8],
    ['a girl is next to bob', 10],
    ['more girls approaches bob', 11],
    ['bob sleeps', 3]
]

var time = 0
setInterval(function () {
    if (health.value > 990) {
        document.getElementById('lol').innerHTML = "bob undergone a heart attack and died."
        document.getElementById('container2').innerHTML = "<i class='mdi mdi-emoticon-dead'></i>"
    } else if (health.value === 0) {
        document.getElementById('lol').innerHTML = "bob sadly suffered heart failure."
        document.getElementById('container2').innerHTML = "<i class='mdi mdi-emoticon-dead'></i>"
    } else {
        time++
        if (time < 500) {

            document.getElementById('lol').innerHTML = lifeCycle[0][0]
            document.getElementById('container2').innerHTML = "<i class='mdi mdi-hotel'></i>"
            health.value -= lifeCycle[0][1]; //Or whatever you want to do with it.  
        } else if (time > 500 && time < 750) {
            document.getElementById('lol').innerHTML = lifeCycle[1][0]
            health.value -= lifeCycle[1][1]; //Or whatever you want to do with it.  
            document.getElementById('container2').innerHTML = "<i class='mdi mdi-run-fast'></i>"
        } else if (time > 750 && time < 990) {
            document.getElementById('lol').innerHTML = lifeCycle[2][0]
            document.getElementById('container2').innerHTML = "<i class='mdi mdi-human-male-female'></i>"
            health.value -= lifeCycle[2][1]; //Or whatever you want to do with it.  
        } else if (time > 991 && time < 1200) {
            document.getElementById('lol').innerHTML = lifeCycle[3][0]
            document.getElementById('container2').innerHTML = "<i class='mdi mdi-human-female'></i> <i class='mdi mdi-human-male-female'></i>"
            health.value -= lifeCycle[3][1]; //Or whatever you want to do with it.
        } else if (time > 1201) {
            time = 0;
        }
    }
}, 1000 / 60);