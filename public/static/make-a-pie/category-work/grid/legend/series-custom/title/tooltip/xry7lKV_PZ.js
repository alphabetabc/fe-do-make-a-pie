var averageByMonth=[[6,0,6,10,0],[6,10,4,15,1],[6,10,7,15,1],[4,15,5,20,2],[4,15,3.5,21,2],[7,15,8,18,2]];function renderAverageItem(r,e){var t=e.coord([e.value(0),e.value(1)]),l=e.coord([e.value(2),e.value(3)]);return{type:"line",shape:{x1:t[0],x2:l[0],y1:t[1],y2:l[1]},style:e.style({fill:null,stroke:e.visual("color"),lineWidth:40-8*e.value(4)})}}option={tooltip:{},title:{text:"Sales Trends by Year within Each Month",subtext:"Sample of Cycle Plot",left:"center"},legend:{top:70,data:["Trend by year (2002 - 2012)","Average"]},grid:{left:"15",right:"15",bottom:"25"},xAxis:{max:12,type:"value",splitLine:{show:!1}},yAxis:{max:25,type:"value",splitLine:{show:!1}},series:[{type:"custom",name:"Average",renderItem:renderAverageItem,data:averageByMonth}]};
