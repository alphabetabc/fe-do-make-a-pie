let num=0;option={backgroundColor:"#111",title:[{text:"SPEED",x:"center",top:"52%",textStyle:{color:"#fdf914",fontSize:20,fontWeight:"100"}},{text:"60%",x:"center",top:"42%",textStyle:{fontSize:"50",color:"#fdf914",fontFamily:"Lato",foontWeight:"600"}}],polar:{radius:["44%","50%"],center:["50%","50%"]},angleAxis:{max:100,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{name:"",type:"bar",roundCap:!0,barWidth:60,showBackground:!0,backgroundStyle:{color:"rgba(66, 66, 66, .3)"},data:[60],coordinateSystem:"polar",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#fdf914"},{offset:1,color:"#38a700"}])}}}]};function numb(){num=num+5,myChart.setOption(option,!0)}setInterval(function(){numb()},100);