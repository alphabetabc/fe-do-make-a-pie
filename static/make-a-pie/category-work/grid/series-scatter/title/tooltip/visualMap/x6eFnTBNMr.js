var hours=[],days=["2020/10/2"],data=new Array(180).fill(1).map(t=>[Math.random()*10]);const time=new Date().getTime();data=data.map(function(t,a){const e=new Date(time-a*24*60*60*1e3),i=e.getDay()+"/"+e.getMonth()+"/"+e.getFullYear();return hours.push(i),t[0]}),console.log(hours),option={title:{text:"状态表"},tooltip:{position:"top"},grid:{left:2,height:40,right:40,containLabel:!0},xAxis:{type:"category",data:hours,boundaryGap:!1,splitLine:{show:!1},axisLabel:{interval:1e3,showMaxLabel:!0,showMinLabel:!0},axisLine:{show:!1},axisTick:!1},yAxis:{type:"category",show:!1,data:days,axisLine:{show:!1}},visualMap:[{type:"continuous",min:0,max:10,inRange:{color:["#f00","#0f2"]}}],series:[{name:"状态表",type:"scatter",symbolSize:[3,15],symbol:"rect",data,animationDelay:function(t){return t*5}}]};