var data=[25,25,25,10,15],legendName=["A","B","C","D","E"];option={color:["red","green","blue","yellow","deepskyblue"],backgroundColor:"#fff",angleAxis:{max:100,show:!1},legend:{data:["A","B","C","D","E"]},tooltip:{trigger:"item",formatter:"{c}%"},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},polar:{radius:["50%","65%"],center:["50%","50%"]},series:[]};for(var i=0;i<data.length;i++){let e=data.slice(0,i),a=0;e.forEach(r=>{a+=r}),option.series.push({stack:"fenshu",type:"bar",roundCap:!0,barWidth:40,showBackground:!0,backgroundStyle:{color:"#f0f0f0"},data:[{value:data[i]}],coordinateSystem:"polar",name:legendName[i],label:{show:!0}})}