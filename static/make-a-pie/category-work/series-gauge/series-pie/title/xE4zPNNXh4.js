var dataArr=60;data==null&&(dataArr=0);var option={title:{show:!0,text:"wenzi",x:"50%",y:"57%",z:8,textAlign:"center",textStyle:{color:"#FF9933",fontSize:20,fontWeight:"normal"}},series:[{name:"内部（环形）进度条",type:"gauge",radius:"60%",splitNumber:10,axisLine:{lineStyle:{color:[[dataArr/100,"#FF9933"],[1,"#000"]],width:14}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},pointer:{show:!1}},{name:"外部刻度",type:"gauge",radius:"70%",min:0,max:100,splitNumber:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:2,color:[[1,"#000"]]}},axisLabel:{show:!0,color:"#FF9933",distance:25,formatter:function(e){switch(e+""){case"0":return"0";case"10":return"10";case"20":return"20";case"30":return"30";case"40":return"40";case"50":return"50";case"60":return"60";case"70":return"70";case"80":return"80";case"90":return"90";case"100":return"100"}}},axisTick:{show:!0,splitNumber:7,lineStyle:{color:"#000",width:2},length:-8},splitLine:{show:!0,length:-20,lineStyle:{color:"#000"}},detail:{show:!1},pointer:{show:!1}},{type:"pie",radius:["0","40%"],center:["50%","50%"],z:8,hoverAnimation:!1,data:[{name:"检查进度",value:dataArr,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#555555"},{offset:1,color:"#000"}])}},label:{normal:{formatter:function(e){return e.value+"%"},color:"#FF9933",fontSize:54,fontWeight:"bold",position:"center",show:!0}},labelLine:{show:!1}}]},{type:"pie",radius:"45%",startAngle:220,endAngle:-40,hoverAnimation:!1,center:["50%","50%"],avoidLabelOverlap:!1,label:{show:!1},labelLine:{show:!1},data:[{value:1,itemStyle:{normal:{color:"##FFCC99"}}}]},{type:"pie",radius:"50%",center:["50%","50%"],avoidLabelOverlap:!1,z:0,hoverAnimation:!1,label:{show:!1},labelLine:{show:!1},data:[{value:1,itemStyle:{normal:{color:"#FFCC99"}}}]}]};