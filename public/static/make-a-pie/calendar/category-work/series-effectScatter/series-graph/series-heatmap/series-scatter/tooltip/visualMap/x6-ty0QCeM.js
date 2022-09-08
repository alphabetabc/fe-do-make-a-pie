function getVirtulData(e){e=e||"2017";let a=+echarts.number.parseDate(e+"-01-01"),r=+echarts.number.parseDate(+e+1+"-01-01"),o=3600*24*1e3,t=[];for(let n=a;n<r;n+=o)t.push([echarts.format.formatTime("yyyy-MM-dd",n),Math.floor(Math.random()*1e3)]);return console.log(t[t.length-1]),t}const graphData=[["2017-02-01",260],["2017-02-04",200],["2017-02-09",279],["2017-02-13",847],["2017-02-18",241],["2017-02-23",411],["2017-02-27",985]],links=graphData.map(function(e,a){return{source:a,target:a+1}});links.pop(),option={tooltip:{position:"top"},visualMap:[{min:0,max:1e3,calculable:!0,seriesIndex:[2,3,4],orient:"horizontal",left:"55%",bottom:20},{min:0,max:1e3,inRange:{color:["grey"],opacity:[0,.3]},controller:{inRange:{opacity:[.3,.6]},outOfRange:{color:"#ccc"}},seriesIndex:[1],orient:"horizontal",left:"10%",bottom:20}],calendar:[{orient:"vertical",yearLabel:{margin:40},monthLabel:{nameMap:"cn",margin:20},dayLabel:{firstDay:1,nameMap:"cn"},cellSize:40,range:"2017-02"},{orient:"vertical",yearLabel:{margin:40},monthLabel:{margin:20},cellSize:40,left:460,range:"2017-01"},{orient:"vertical",yearLabel:{margin:40},monthLabel:{margin:20},cellSize:40,top:350,range:"2017-03"},{orient:"vertical",yearLabel:{margin:40},dayLabel:{firstDay:1,nameMap:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},monthLabel:{nameMap:"cn",margin:20},cellSize:40,top:350,left:460,range:"2017-04"}],series:[{type:"graph",edgeSymbol:["none","arrow"],coordinateSystem:"calendar",links,symbolSize:10,calendarIndex:0,data:graphData},{type:"heatmap",coordinateSystem:"calendar",data:getVirtulData("2017")},{type:"effectScatter",coordinateSystem:"calendar",calendarIndex:1,symbolSize:function(e){return e[1]/40},data:getVirtulData("2017")},{type:"scatter",coordinateSystem:"calendar",calendarIndex:2,symbolSize:function(e){return e[1]/60},data:getVirtulData("2017")},{type:"heatmap",coordinateSystem:"calendar",calendarIndex:3,data:getVirtulData("2017")}]};
