const score=4,unit="分";option={backgroundColor:"RGBA(40, 44, 83, 1)",title:{text:`{score|${4}}{unit|${unit}}`,subtext:"总体满意度",left:"center",y:"center",textStyle:{rich:{score:{color:"#ffffff",fontSize:"35"},unit:{color:"#ffffff",fontSize:"10",align:"center",verticalAlign:"bottom"}}}},polar:{radius:["45%","55%"],center:["50%","50%"]},angleAxis:{max:5,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{name:"",type:"bar",roundCap:!0,barWidth:60,showBackground:!0,backgroundStyle:{color:"RGBA(0, 91, 126, 1)"},data:[4],coordinateSystem:"polar",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#38a700"},{offset:1,color:"#fdf914"}])}}}]};
