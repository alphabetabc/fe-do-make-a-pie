var data=80,option={title:{text:"业务完成率",textStyle:{color:"#22f5ff",fontSize:48,fontWeight:"normal"},x:"center",y:"80%"},backgroundColor:"#0a2b71",tooltip:{show:!1},legend:{show:!1},polar:{radius:["48%","58%"],center:["50%","35%"]},angleAxis:{max:100,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{name:"业务完成率",type:"bar",silent:!0,roundCap:!0,showBackground:!0,backgroundStyle:{color:"#0a3887"},coordinateSystem:"polar",itemStyle:{color:"#22f5ff"},data:[data]},{type:"pie",silent:!0,color:"#0a3887",data:[1],label:{show:!0,position:"center",color:"#fff",fontSize:48,formatter:()=>`${data}%`},radius:["40%","43%"],center:["50%","35%"]}]};