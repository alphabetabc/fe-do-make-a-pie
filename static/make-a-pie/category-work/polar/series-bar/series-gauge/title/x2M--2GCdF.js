let num=0;option={backgroundColor:"transparent",title:[{text:"静默企业",left:"35%",top:"80%",textStyle:{color:"#287CE8",fontSize:20,fontWeight:"100"}},{text:"60%",left:"36%",top:"49%",textStyle:{fontSize:"50",color:"#287CE8",fontFamily:"Lato",foontWeight:"600"}}],polar:{radius:["45%","50%"],center:["39%","50%"]},angleAxis:{max:100,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{name:"",type:"bar",roundCap:!0,barWidth:60,showBackground:!0,backgroundStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(41, 127, 215, .5)"},{offset:1,color:"rgba(79, 168, 88, .5)"}])},data:[60],coordinateSystem:"polar",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#287CE8"},{offset:1,color:"#38a700"}])}},label:{normal:{show:!0,textStyle:{fontSize:28,fontWeight:"bold"},position:"center"}}},{type:"gauge",name:"",radius:"30%",startAngle:"0",endAngle:"-359.99",splitNumber:"200",center:["39%","50%"],pointer:{show:!1},title:{show:!1},detail:{show:!1},data:[{value:95,name:""}],axisLine:{lineStyle:{width:20,opacity:0}},axisTick:{show:!1},splitLine:{show:!0,length:1,lineStyle:{color:{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#111"},{offset:.5,color:"rgba(66, 66, 66, 1)"},{offset:1,color:"#111"}],globalCoord:!1},width:1,type:"solid"}},axisLabel:{show:!1}}]};function numb(){num=num+5,myChart.setOption(option,!0)}setInterval(function(){numb()},100);
