let marksData_=[[0,0],[21.05,47.37],[5.56,44.44],[31.58,42.11],[10.53,52.63],[50,72.22],[26.32,68.42],[22.22,61.11],[31.58,73.68],[26.32,52.63],[11.11,66.67],[15.79,52.63],[15.79,31.58],[21.05,31.58],[26.32,42.11]],marksData=[];marksData=marksData_.map((e,o)=>({name:"功能"+(o+1),value:e})),centerLine=[{name:"y",xAxis:21},{name:"x",yAxis:49}],centerMark=[{value:"中心点",coord:[21,49]}],option={tooltip:{axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1},label:{backgroundColor:"#555"}}},grid:{left:50,right:50,bottom:"4%",top:"36%",containLabel:!0},xAxis:{scale:!0,axisLine:{lineStyle:{color:"#ddd"}},axisLabel:{color:"#666"},splitLine:{lineStyle:{color:"#eee"}}},yAxis:{scale:!0,axisLine:{lineStyle:{color:"#ddd"}},axisLabel:{color:"#666"},splitLine:{lineStyle:{color:"#eee"}}},series:[{type:"scatter",data:marksData,label:{show:!0,position:"bottom",formatter:"{b}"},itemStyle:{shadowBlur:2,shadowColor:"rgba(120, 36, 50, 0.5)",shadowOffsetY:1,color:function(e){return("rgba("+Math.floor(Math.random()*240)+","+Math.floor(Math.random()*240)+","+Math.floor(Math.random()*240)+",.8)").substring()}},markArea:{silent:!0,data:[[{name:"第一象限",xAxis:21,yAxis:80,itemStyle:{color:"rgba(56, 180, 139, .1)"},label:{position:"inside",color:"rgba(0, 0, 0, .1)",fontSize:22}},{yAxis:49}],[{name:"第二象限",yAxis:80,itemStyle:{color:"rgba(68, 97, 123, .1)"},label:{position:"inside",color:"rgba(0, 0, 0, .1)",fontSize:22}},{xAxis:21,yAxis:49}],[{name:"第三象限",yAxis:49,itemStyle:{color:"rgba(191, 120, 58, .1)"},label:{position:"inside",color:"rgba(0, 0, 0, .1)",fontSize:22}},{xAxis:21,yAxis:0}],[{name:"第四象限",xAxis:21,yAxis:49,itemStyle:{color:"rgba(116, 83, 153, .1)"},label:{position:"inside",color:"rgba(0, 0, 0, .1)",fontSize:22}},{yAxis:0}]]},markLine:{silent:!0,precision:2,lineStyle:{type:"solid",color:"#00aca6"},label:{color:"#00aca6",position:"end",formatter:"{b}"},data:centerLine}}]};
