

export function createBarChart(settings) {

    let dataJson = settings.data;

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function setRandomColor(element) {
        let color = getRandomColor();
        element.style.backgroundColor = `${color}`;
        element.style.opacity = '0.8'
    }

    const TROW = 'tr';
    const TDATA = 'td';

    const Y_LINE = Object.keys(dataJson);
    const X_LINE = Object.values(dataJson);
    console.log(Y_LINE);

    var chart = document.createElement('div');
    var barchart = document.createElement('table');
    var titlerow = document.createElement(TROW);
    var titledata = document.createElement(TDATA);
    var barrow = document.createElement(TROW);
    titledata.setAttribute('colspan', `${Y_LINE.length}`);
    barchart.appendChild(titlerow);
    chart.appendChild(barchart);


    for (let i = 0; i < Y_LINE.length; i++) {

        barrow.setAttribute('class', 'bars');
        var bardata = document.createElement(TDATA);
        var bar = document.createElement('div');

        if (X_LINE[i] == Math.max(...X_LINE)) {
            bar.style.height = "90%";
        } else {
            bar.style.height = ((X_LINE[i] * 90) / Math.max(...X_LINE)) + '%';
        }

        bardata.innerText = `${X_LINE[i]}`;

        setRandomColor(bar);

        var barmonth = document.createElement('div');
        barmonth.innerText = `${Y_LINE[i]}`;

        bardata.appendChild(bar);
        bardata.appendChild(barmonth);
        barrow.appendChild(bardata);


    }

    let mediana = Math.floor((X_LINE.reduce((a, b) => a + b, 0)) / X_LINE.length);
    const MEDIANA_HEIGHT = Math.floor((mediana * (500 * 0.9)) / Math.max(...X_LINE)) + 60;
    var medianaContainer = document.createElement('div');
    medianaContainer.setAttribute('class', 'mediana');
    medianaContainer.innerText = `${mediana}`;
    var hrLine = document.getElementById('line');
    hrLine.style.transform = `translateY(-${MEDIANA_HEIGHT}px)`;

    barchart.appendChild(barrow);
    barchart.appendChild(medianaContainer);
    chart.appendChild(barchart);

    document.getElementById('chart').innerHTML = chart.outerHTML;
}