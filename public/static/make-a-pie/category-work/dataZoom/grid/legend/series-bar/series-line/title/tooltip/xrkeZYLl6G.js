var getDayTime=function(){for(var e=[],t=0;t<500;t++){var n=t;e.push(n)}return e},getRandomData=function(e){for(var t=[],n=0;n<500;n++){var a=Math.random()*100-Math.random()*50;t.push(Math.abs(a).toFixed(0))}return t};option={color:["#66CCFF","#CC6666","#66CCCC","#FF9999","#26A69A","#6200EA"],title:{text:"test",top:-5},grid:[{top:"9%",bottom:0,left:"5%",right:"5%",height:"22%"},{top:"35.5%",bottom:0,left:"5%",right:"5%",height:"22%"},{top:"62.5%",bottom:0,left:"5%",right:"5%",height:"13%"},{top:"79.5%",bottom:0,left:"5%",right:"5%",height:"12%"}],axisPointer:{link:{xAxisIndex:"all"}},legend:{data:["左1","右1","左2","右2","右3","右4"]},tooltip:{trigger:"axis",formatter:function(e){if(e instanceof Array){for(var t=[{text:"占比",data:[]}],n=e[0].axisValue,a=0;a<e.length;a++){var r=e[a].seriesId.split(e[a].seriesId[0]);t[r[2]].data.push({marker:e[a].marker,seriesName:e[a].seriesName,data:e[a].data})}return"<div><time>"+n+"</time><br />"+t.map(function(o){return"<span>"+o.text+"</span>"+o.data.map(function(i){return'<p style="margin: 0;padding: 0;">'+i.marker+i.seriesName+": "+i.data+"</p>"}).join("")}).join("")}}},xAxis:[{type:"category",gridIndex:0,position:"bottom",axisLabel:{interval:0},data:getDayTime(),show:!1,boundaryGap:!0},{type:"category",gridIndex:1,position:"bottom",data:getDayTime(),boundaryGap:!0},{type:"category",gridIndex:2,position:"bottom",axisLabel:{show:!0},data:getDayTime(),show:!1,boundaryGap:!0},{type:"category",gridIndex:3,position:"bottom",axisLabel:{show:!0},data:getDayTime(),show:!1,boundaryGap:!0}],yAxis:[{name:"左1",type:"value",nameTextStyle:{fontSize:14},min:0,max:100,gridIndex:0,splitLine:{lineStyle:{type:"dashed"}},position:"left",nameLocation:"center",nameGap:30},{name:"左2",type:"value",nameTextStyle:{fontSize:14},min:0,max:1e3,gridIndex:1,inverse:!1,splitLine:{lineStyle:{type:"dashed"}},nameLocation:"center",nameGap:30},{name:"右2",type:"value",nameTextStyle:{fontSize:14},min:0,max:100,gridIndex:1,inverse:!1,splitLine:{lineStyle:{type:"dashed"}},nameLocation:"center",nameGap:30,nameRotate:-90},{name:"右1",type:"value",nameTextStyle:{fontSize:14},min:0,max:100,gridIndex:0,inverse:!1,splitLine:{lineStyle:{type:"dashed"}},nameLocation:"center",nameGap:30,nameRotate:-90},{name:"右3",type:"value",nameTextStyle:{fontSize:14},min:0,max:100,gridIndex:2,splitLine:{lineStyle:{type:"dashed"}},position:"right",nameLocation:"center",nameGap:30,nameRotate:-90},{name:"右4",type:"value",nameTextStyle:{fontSize:14},gridIndex:3,splitLine:{lineStyle:{type:"dashed"}},position:"right",nameLocation:"center",nameGap:30,nameRotate:-90}],dataZoom:[{type:"slider",show:!0,xAxisIndex:[0,1,2,3],start:50,end:100},{type:"inside",xAxisIndex:[0,1,2,3]}],series:[{name:"左1",type:"line",data:getRandomData(),yAxisIndex:0,symbol:"none",smooth:!0},{name:"左2",type:"line",xAxisIndex:1,data:getRandomData(),yAxisIndex:1,symbol:"none",smooth:!0},{name:"右1",type:"line",xAxisIndex:0,data:getRandomData(),yAxisIndex:3,symbol:"none",smooth:!0},{name:"右2",type:"line",xAxisIndex:1,data:getRandomData(),yAxisIndex:2,symbol:"none",smooth:!0},{name:"右3",type:"line",xAxisIndex:2,yAxisIndex:4,data:getRandomData(),symbol:"none",smooth:!0},{name:"右4",type:"bar",xAxisIndex:3,yAxisIndex:5,data:getRandomData(),symbol:"none",smooth:!0,barWidth:2}]};
