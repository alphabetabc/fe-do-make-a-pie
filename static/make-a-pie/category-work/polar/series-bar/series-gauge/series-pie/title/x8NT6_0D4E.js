var dataset={max:300,value:103},series=[{type:"gauge"}];option={title:[{show:!!dataset.text,text:dataset.text?dataset.text:"仪器表",bottom:"6%",x:"center",borderColor:"#1598FF",borderWidth:1,borderRadius:15,backgroundColor:"#1598FF",padding:[7,14],textStyle:{fontWeight:"bold",fontSize:13,color:"#fff"}}],angleAxis:{show:!1,max:dataset.max*360/270,type:"value",startAngle:225,splitLine:{show:!1}},barMaxWidth:20,radiusAxis:{show:!1,type:"category"},polar:{center:["50%","50%"],radius:"120%"},series:[{type:"bar",data:[{value:dataset.value,itemStyle:{color:"#1598FF"}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:3},{type:"bar",data:[{value:dataset.max,itemStyle:{color:"#1598FF",opacity:.2,borderWidth:0}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:1},{max:dataset.max,type:series[0].type,startAngle:225,endAngle:-45,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLabel:{show:!1},pointer:{shadowColor:"auto",shadowBlur:5,length:"50%",width:"2"},itemStyle:{color:"#1598FF",borderColor:"#1598FF",borderWidth:6},detail:{formatter:function(a){var e=dataset.value/dataset.max*100;return e.toFixed(2)+"%"},color:"#1598FF",fontSize:30,offsetCenter:[0,"50%"],fontWeight:"bolder",borderWidth:1,borderRadius:5,borderColor:"#1598FF",width:100,shadowBlur:5,shadowColor:"#1598FF",shadowOffsetX:0,shadowOffsetY:1,fontFamily:"Arial",rich:{}},title:{show:!1},data:[{value:dataset.value}]},{name:"外部刻度",type:series[0].type,radius:"73%",min:0,max:dataset.max,splitNumber:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!1,color:"#4d5bd1",distance:25},axisTick:{show:!0,splitNumber:7,lineStyle:{color:"#C7CBCF",width:2},length:-8},splitLine:{show:!1,length:-20,lineStyle:{color:"#C7CBCF"}},detail:{show:!1},pointer:{show:!1}},{type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:["10%","15%"],z:10,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:100,itemStyle:{normal:{color:"#1598FF"}}}]},{type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:["0%","10%"],z:10,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:dataset.max,itemStyle:{normal:{color:"#FFFFFF"}}}]}]},setInterval(function(){dataset.value=Math.ceil(Math.random()*dataset.max),option.series[0].data[0].value=dataset.value,option.series[2].data[0].value=dataset.value,myChart.setOption(option,!0)},2e3);
