var uploadedDataURL="/asset/get/s/data-1469156830975-S1PyA-yO.json";$.getJSON(uploadedDataURL,function(e){e=e.slice(0,50);var t=e.map(function(i){return i[0]}),n=e.map(function(i){return i[1]});myChart.setOption(option={visualMap:[{show:!1,type:"continuous",seriesIndex:0,min:0,max:400},{show:!1,type:"continuous",seriesIndex:1,dimension:0,min:0,max:t.length-1}],title:[{left:"center",text:"Gradient along the y axis"},{top:"55%",left:"center",text:"Gradient along the x axis"}],tooltip:{trigger:"axis"},xAxis:[{data:t},{data:t,gridIndex:1}],yAxis:[{splitLine:{show:!1}},{splitLine:{show:!1},gridIndex:1}],grid:[{bottom:"60%"},{top:"60%"}],series:[{type:"line",data:n},{type:"line",data:n,xAxisIndex:1,yAxisIndex:1}]})});