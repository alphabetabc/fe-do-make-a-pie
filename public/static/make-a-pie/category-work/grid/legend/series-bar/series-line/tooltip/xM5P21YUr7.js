function getRandomNumberByRange(o,n){return Math.floor(Math.random()*(n-o)+o)}function getData(){for(var o=[],n=0;n<300;n++){let a=[];var e=getRandomNumberByRange(0,30)+Math.random(),i=0;e>1&&e<2?i=getRandomNumberByRange(0,800):e>4&&e<8?i=getRandomNumberByRange(0,200):e>9&&e<12?i=getRandomNumberByRange(0,50):i=getRandomNumberByRange(0,20),a[0]=e,a[1]=i,o.push(a),console.log(a)}return o}option={legend:{},tooltip:{},xAxis:[{type:"value",gridIndex:0,name:"时间",nameGap:30,nameLocation:"middle",min:0,max:30,interval:5,axisLabel:{formatter:"{value}m"},axisLine:{onZero:!1},minorTick:{show:!1,splitNumber:10},minorSplitLine:{show:!0,lineStyle:{color:"#ddd"}},position:"bottom"},{type:"value",gridIndex:1,name:"时间",nameGap:36,nameLocation:"middle",max:30,interval:5,axisLine:{onZero:!1},axisLabel:{formatter:"{value}m"},minorTick:{show:!1,splitNumber:10},minorSplitLine:{show:!0,lineStyle:{color:"#ddd"}},position:"bottom",boundaryGap:[0,0]}],yAxis:[{gridIndex:0,name:"电压KV",nameGap:30,nameLocation:"middle"},{gridIndex:1,name:"放电量pC",nameGap:30,nameLocation:"middle"}],grid:[{bottom:"55%"},{top:"55%"}],series:[{type:"line",xAxisIndex:0,smooth:!0,symbol:"none",lineStyle:{color:"rgb(43, 122, 186)"},data:[[0,0],[1,-15],[2,15],[3,-14.5],[4,14.5],[5,-14],[6,14],[7,-13.5],[8,13.5],[9,-13],[10,13],[11,-12.5],[12,12.5],[13,-12],[14,12],[15,-11.5],[16,11.5],[17,-11],[18,11],[19,-10.5],[20,10.5],[21,-10],[22,10],[23,-9.5],[24,9.5],[25,-9],[26,9],[27,-8.5],[28,8.5],[29,-8],[30,8]]},{type:"bar",xAxisIndex:1,yAxisIndex:1,barMinWidth:3,barMaxWidth:5,itemStyle:{color:"rgb(43, 122, 186)"},data:getData()}]};