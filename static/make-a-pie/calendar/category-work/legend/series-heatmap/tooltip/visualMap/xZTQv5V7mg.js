function getVirtulData(a){a=a||"2017";for(var n=+echarts.number.parseDate(a+"-01-01"),r=+echarts.number.parseDate(+a+1+"-01-01"),d=3600*24*1e3,t=[],e=n;e<r;e+=d)t.push([echarts.format.formatTime("yyyy-MM-dd",e),Math.floor(Math.random()*1e3)]);return t}var data={2015:getVirtulData(2015),2016:getVirtulData(2016),2017:getVirtulData(2017)};option={legend:{top:250,selected:{2015:!0,2016:!1,2017:!1},selectedMode:"single"},tooltip:{position:"top"},visualMap:{min:0,max:1e3,calculable:!0,orient:"horizontal",left:"center",top:"top"},calendar:{range:"2015",cellSize:["auto",20]},series:[{type:"heatmap",coordinateSystem:"calendar",calendarIndex:0,data:data[2015],name:"2015"},{type:"heatmap",coordinateSystem:"calendar",calendarIndex:0,data:data[2016],name:"2016"},{type:"heatmap",coordinateSystem:"calendar",calendarIndex:0,data:data[2017],name:"2017"}]},myChart.on("legendselectchanged",function(a){myChart.setOption({calendar:{range:a.name}})});
