var targetValue=200,realValue=88,data={title:"仪表盘",value:(100*realValue/targetValue).toFixed(2),color:{pieMini:"#ffca1c",pieMiniMini:"#fff",piePlus:"#5DD1FA",value:"#fff"}},option={backgroundColor:"#062a44",series:[{type:"gauge",radius:"30%",min:0,max:100,splitNumber:10,startAngle:"269.99",endAngle:"-90",axisLine:{show:!0,lineStyle:{width:2,color:[[.2,"#78B5F3"],[1,"#3C8FF4"]]}},axisLabel:{show:!0,color:"#fff",distance:-35,fontSize:12,formatter:function(e){switch(e+""){case"0":return"0";case"10":return"10";case"20":return"20";case"30":return"30";case"40":return"40";case"50":return"50";case"60":return"60";case"70":return"70";case"80":return"80";case"90":return"90";case"100":return"0"}}},axisTick:{show:!0,splitNumber:5,lineStyle:{color:"#3C8FF4",width:1},length:10},splitLine:{show:!0,length:15,lineStyle:{color:"#3C8FF4"}},itemStyle:{normal:{show:!1}},pointer:{show:!0,length:"60%",width:7},z:12,detail:{formatter:function(e){var t=Math.round(e);return"当前进度"+parseInt(t).toFixed(0)+"%"},textStyle:{padding:[0,0,80,0],fontSize:20,fontWeight:"700",color:"#FBA51C"}},title:{color:"#fff",fontSize:14},data:[{name:"当前进度",value:44}]},{title:{show:!1},type:"gauge",radius:"40%",splitNumber:10,startAngle:"269.99",endAngle:"-90",z:11,axisLine:{lineStyle:{color:[[data.value/100,"#3C8FF4"],[1,"#000"]],width:15,borderWidth:5,borderColor:"red"}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},pointer:{show:!1},detail:{show:!1}},{name:"pie",type:"pie",clockWise:!0,startAngle:-270,radius:["30%","40%"],hoverAnimation:!1,center:["50%","50%"],data:["100"],z:1,labelLine:{show:!1},itemStyle:{normal:{color:"#000"}}}]};
