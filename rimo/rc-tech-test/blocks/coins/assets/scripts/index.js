document.addEventListener('DOMContentLoaded', function () {
    
    // Tabs
    const allTabs = document.querySelectorAll('.coins__container');

    const tabs = (tabGroup) => {
        const tabSelectors = tabGroup.querySelectorAll('.coins__tab-selector');
        const tabContents = tabGroup.querySelectorAll('.coins__tab-content');

        tabGroup.addEventListener('click', (e) => {
            const clicked = e.target;

            if (clicked.classList.contains('coins__tab-selector')) {
                const tabTarget = tabGroup.querySelector(`.coins__tab-content[data-content="${clicked.dataset.tab}"]`);

                tabSelectors.forEach((i) => {
                    i.classList.remove('coins__tab-selector--active');
                });

                tabContents.forEach((i) => {
                    i.classList.remove('coins__tab-content--active');
                });

                tabTarget.classList.add('coins__tab-content--active');
                clicked.classList.add('coins__tab-selector--active');
            }
        });
    };

    allTabs.forEach((i) => {
        return tabs(i);
    });

    // Graphs
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

        const data = new google.visualization.DataTable();
        data.addColumn('number', '');
        data.addColumn('number', '');

        data.addRows([
            [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9],
            [6, 11],  [7, 27],  [8, 33],  [9, 40],  [10, 32], [11, 35],
            [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
            [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
            [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
            [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
            [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
            [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
            [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
            [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
            [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
            [66, 70], [67, 72], [68, 75], [69, 80]
        ]);

        const options = {
            legend: {
                position: 'none'
            },
            chartArea: {
                width: '100%',
                height: '100%'
            },
            vAxis: {
                baselineColor: '#fff',
                gridlineColor: '#fff',
                textPosition: 'none'
            },
            hAxis: {
                baselineColor: '#fff',
                gridlineColor: '#fff',
                textPosition: 'none'
            },
            colors: ['#6E7780']
        };

        const charts = document.querySelectorAll('.coins__graph');
        const tabsContent = document.querySelectorAll('.coins__tab-content');
        const chartsArray = Array.prototype.slice.call(charts);

        for (let i = 0; i < charts.length; i++) {
            const container = chartsArray[i];
            const chart = new google.visualization.LineChart(container);

            chart.draw(data, options);
        }

        tabsContent.forEach((i) => {
            i.classList.add('coins__tab-content--loaded');
        });

    }

}, false);