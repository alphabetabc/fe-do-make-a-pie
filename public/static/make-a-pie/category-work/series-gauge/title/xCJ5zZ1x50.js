var targetValue=200,realValue=88,data={title:"仪表盘",value:(100*realValue/targetValue).toFixed(2)},option={title:[{text:"咸阳",top:"55%",left:"48%",padding:[-30,0],textStyle:{color:"#fff",fontSize:18,align:"center",fontWeight:"400"}}],backgroundColor:"#062a44",series:[{name:"刻度1",type:"gauge",center:["50%","50%"],radius:"30%",min:0,max:100,splitNumber:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"#42B3D0"]]}},axisLabel:{show:!0,color:"#42B3D0",distance:25,formatter:function(e){switch(e+""){case"0":return"0";case"10":return"10";case"20":return"20";case"30":return"30";case"40":return"40";case"50":return"50";case"60":return"60";case"70":return"70";case"80":return"80";case"90":return"90";case"100":return"100"}}},axisTick:{show:!0,splitNumber:7,lineStyle:{color:"#42B3D0",width:1},length:-8},splitLine:{show:!0,length:-20,lineStyle:{color:"#01B661"}},detail:{show:!1},pointer:{show:!1}},{name:"仪表盘2",type:"gauge",center:["50%","50%"],radius:"22%",splitNumber:10,axisLine:{lineStyle:{color:[[20/100,"#42B3D0"],[1,"#111F42"]],width:8}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{formatter:function(e){if(e!==0){var t=Math.round(e);return parseInt(t).toFixed(0)+"%"}else return 0},offsetCenter:[0,"20%"],textStyle:{padding:[0,0,80,0],fontSize:24,fontWeight:"700",color:"#fff"}},title:{color:"#fff",fontSize:10,offsetCenter:[0,"-25%"]},data:[{value:30}],pointer:{show:!1,length:"75%",width:20}}]};