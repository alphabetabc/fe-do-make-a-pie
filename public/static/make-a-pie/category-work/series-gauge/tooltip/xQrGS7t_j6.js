option={backgroundColor:"",tooltip:{formatter:"{a} <br/>{c} {b}"},series:[{name:"速度",type:"gauge",min:0,max:220,splitNumber:11,radius:"80%",center:["35%","55%"],axisLine:{lineStyle:{color:[[.09,"lime"],[.82,"#1e90ff"],[1,"#ff4500"]],width:3,shadowColor:"#32e6ff",shadowBlur:10}},axisLabel:{show:!1},splitLine:{length:20,lineStyle:{width:3,color:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:10}},title:{textStyle:{fontWeight:"bolder",fontSize:16,fontStyle:"italic",color:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:10}},pointer:{show:!1},detail:{borderColor:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:5,offsetCenter:[0,0],textStyle:{fontSize:32,fontWeight:"bolder",color:"#32e6ff"}},data:[{value:480,name:"主机个数"}]},{name:"主机",type:"gauge",center:["80%","55%"],radius:"70%",min:0,max:2,startAngle:135,endAngle:45,splitNumber:2,axisLine:{lineStyle:{color:[[.2,"lime"],[.8,"#1e90ff"],[1,"#ff4500"]],width:2,shadowColor:"#32e6ff",shadowBlur:10}},axisTick:{length:12,lineStyle:{color:"auto",shadowColor:"#32e6ff",shadowBlur:10}},axisLabel:{textStyle:{fontWeight:"bolder",color:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:10},formatter:function(e){switch(e+""){case"0":return"0";case"1":return"在线率";case"2":return"100"}}},splitLine:{length:15,lineStyle:{width:3,color:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:10}},pointer:{width:2,shadowColor:"#32e6ff",shadowBlur:5},title:{show:!1},detail:{borderColor:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:5,offsetCenter:[0,-180],textStyle:{fontWeight:"bolder",color:"#32e6ff"}},data:[{value:.5,name:"在线率"}]},{name:"主机",type:"gauge",center:["80%","55%"],radius:"70%",min:0,max:2,startAngle:315,endAngle:225,splitNumber:2,axisLine:{lineStyle:{color:[[.2,"lime"],[.8,"#1e90ff"],[1,"#ff4500"]],width:2,shadowColor:"#32e6ff",shadowBlur:10}},axisTick:{show:!1},axisLabel:{textStyle:{fontWeight:"bolder",color:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:10},formatter:function(e){switch(e+""){case"0":return"0";case"1":return"异常率";case"2":return"100"}}},splitLine:{length:15,lineStyle:{width:3,color:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:10}},pointer:{width:2,shadowColor:"#32e6ff",shadowBlur:5},title:{show:!1},detail:{borderColor:"#32e6ff",shadowColor:"#32e6ff",shadowBlur:5,offsetCenter:[0,160],textStyle:{fontWeight:"bolder",color:"#32e6ff"}},data:[{value:1.5,name:"异常率"}]}]},myChart.setOption(option);
