 google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Time of Day');
        data.addColumn('number','Portfolio');

        data.addRows([
          [new Date(2015, 1), 50],  [new Date(2015, 2), 70],  [new Date(2015, 3), 30],
          [new Date(2015, 4), 10],  [new Date(2015,  5), 30],  [new Date(2015,  6), 40],
          [new Date(2015, 7), 30],  [new Date(2015, 8), 40],  [new Date(2015,  9), 20],
          [new Date(2015, 10), 50], [new Date(2015,  11), 80], [new Date(2016,  1), 60],
          [new Date(2016, 2), 30], [new Date(2016, 3), 30], [new Date(2016, 4), 50],
          [new Date(2016, 5), 70], [new Date(2016,6), 60], [new Date(2016,7), 60],
          [new Date(2016,8), 30], [new Date(2016, 9), 10], [new Date(2016, 10), 20],
          [new Date(2016,11), 40], [new Date(2016, 12), 60], [new Date(2017,  1), 50],
          [new Date(2017, 2), 90], [new Date(2017,  3), 40], [new Date(2017, 4), 90],
          [new Date(2017, 6), 80], [new Date(2017,  6), 60], [new Date(2017, 7), 40],
          [new Date(2017,8), 60], [new Date(2017,9), 70],  [new Date(2017, 10), 90]
        ]);


        var options = {
          title: 'Portfolio Performance',
          height: 500,
          hAxis: {
            format: 'MM/yy',
            gridlines: {count: 15},
            title: 'Date'
          },
          vAxis: {
            gridlines: {color: 'none'},
            minValue: 0,
            title: 'Market Value'
          }
        };

        var chart = new google.visualization.LineChart(document.getElementById('timeserieschart'));

        chart.draw(data, options);

        
      }
  