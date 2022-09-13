for(var count=70,intervalCount=67,baseTop=70,gridHeight=60,data={cpu:[],memory:[],frame:[],main:[],fake:[],xMin:0,xMax:count*1e3},i=0;i<count;i++){var now=i*1e3;data.cpu.push([now,Math.floor(Math.random()*1e3)]),data.memory.push([now,Math.floor(Math.random()*1e3)]),data.frame.push([now,Math.floor(Math.random()*1e3)]),data.fake.push([now,1])}for(var ends=[],i=0;i<intervalCount;i++)ends.push(Math.floor(Math.random()*count*1e3));ends.sort(function(e,r){return e-r});for(var i=1;i<ends.length;i++)!(i%2)&&data.main.push([{xAxis:ends[i-1]},{xAxis:ends[i]}]);function makeXAxis(e,r){return echarts.util.merge({type:"time",gridIndex:e,axisLine:{onZero:!1,lineStyle:{color:"#ddd"}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1,lineStyle:{color:"#ddd"}},min:data.xMin,max:data.xMax,axisPointer:{lineStyle:{color:"transparent"}}},r||{},!0)}function makeYAxis(e,r){return echarts.util.merge({type:"value",gridIndex:e,nameLocation:"middle",nameTextStyle:{color:"#333"},boundaryGap:["30%","30%"],axisTick:{show:!1},axisLine:{lineStyle:{color:"#ccc"}},axisLabel:{show:!1},splitLine:{show:!1}},r||{},!0)}function makeGrid(e,r){return echarts.util.merge({top:e,height:gridHeight},r||{},!0)}option={tooltip:{trigger:"axis",backgroundColor:"#fff",borderColor:"rgba(0, 0, 200, 0.2)",borderWidth:1,borderRadius:0,padding:10,formatter:function(e){if(e.length)return e.unshift({seriesName:"time",value:[null,Math.floor(e[0].value[0])+" ms"],color:"#5193f2"}),echarts.util.map(["time","cpu","memory","frame"],function(r){for(var a=0;a<e.length;a++){var o=e[a],t="color: "+o.color;if(o.seriesName===r)return'<span style="'+t+'">'+o.seriesName+'：</span><span style="'+t+'">'+o.value[1]+"</span>"}}).join("<br>")}},title:{text:"Profile",left:"center"},axisPointer:{link:[{xAxisIndex:"all"}],snap:!0},grid:[makeGrid(baseTop),makeGrid(baseTop+gridHeight),makeGrid(baseTop+gridHeight*2),makeGrid(baseTop+gridHeight*3+5,{height:gridHeight-10}),makeGrid(baseTop,{show:!0,height:gridHeight*4,borderColor:"#ccc",borderWidth:1,z:10})],xAxis:[makeXAxis(0),makeXAxis(1),makeXAxis(2),makeXAxis(3,{axisLine:{show:!1}}),makeXAxis(4,{position:"top",axisLine:{show:!1,onZero:!1},splitLine:{show:!0},axisLabel:{show:!0,textStyle:{color:"#555"}},axisPointer:{show:!0,lineStyle:{color:"#478cf1",width:1.5}}})],yAxis:[makeYAxis(0,{name:"cpu"}),makeYAxis(1,{name:"memory"}),makeYAxis(2,{name:"frame"}),makeYAxis(3,{name:"cpu"}),makeYAxis(4)],dataZoom:[{type:"slider",top:baseTop+gridHeight*4+20,xAxisIndex:[0,1,2,3,4]},{type:"inside",xAxisIndex:[0,1,2,3,4]}],series:[{name:"cpu",type:"line",symbol:"circle",symbolSize:2,itemStyle:{normal:{color:"#5193f2"}},data:data.cpu},{name:"memory",type:"line",symbol:"circle",symbolSize:2,xAxisIndex:1,yAxisIndex:1,itemStyle:{normal:{color:"#75b228"}},data:data.memory},{name:"frame",type:"line",symbol:"circle",symbolSize:2,xAxisIndex:2,yAxisIndex:2,itemStyle:{normal:{color:"#e29304"}},data:data.frame},{name:"main",type:"line",symbol:"circle",symbolSize:2,xAxisIndex:3,yAxisIndex:3,markArea:{itemStyle:{normal:{color:"#529bff"}},data:data.main}},{name:"main",type:"line",symbol:"none",symbolSize:2,itemStyle:{normal:{color:"transparent"}},xAxisIndex:4,yAxisIndex:4,data:data.fake}]};