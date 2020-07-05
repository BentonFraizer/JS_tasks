const workers = [
    {
        "name":"William",
        "salary":500
    },
    {
        "name":"Jacob",
        "salary":1300
    },
    {
        "name":"Linda",
        "salary":1500
    },
    {
        "name": "Петруха",
        "salary":2999
    },
    {
        "name": "Маша",
        "salary":1001
    }
    ];

function getWorthyWorkers(workers) {
    var worthyHuman = [];
    for (var i=0; i < workers.length; i++) {
        if (workers[i].salary > 1000) {
            worthyHuman.push(workers[i].name);
        }
    }
    return worthyHuman;
}
console.log(getWorthyWorkers(workers))

