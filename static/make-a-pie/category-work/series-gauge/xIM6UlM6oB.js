option=null;let currentSpeedData=[{value:"60"}];var value=currentSpeedData[0].value,colorRegionRate=(value/100).toFixed(2),{bgColor,level}=detectionData(value),colors=[[.05,"#3B85CD"],[.1,"#4CA4CD"],[.15,"#4DA6CD"],[.2,"#62CBCE"],[.25,"#6FE3CE"],[.3,"#70FAC7"],[.35,"#78EDBE"],[.4,"#7AEEBE"],[.45,"#78EABC"],[.5,"#7CFACE"],[.55,"#88F0AD"],[.6,"#8EF3A8"],[.65,"#8EF3A8"],[.7,"#8FE998"],[.75,"#8FE998"],[.8,"#A7F68A"],[.85,"#AEF883"],[.9,"#B6F776"],[.95,"#B7F46F"],[1,"#C4FC68"]],colorList=[];colors.forEach((e,o)=>{colorRegionRate>=e[0]?colorList.push(e):colorList.push([e[0],"#1D4176"])}),option={backgroundColor:"#000000",series:[{name:"刻度",type:"gauge",radius:"100%",center:["50%","75%"],min:0,max:100,splitNumber:6,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:0,shadowBlur:1,color:colorList}},axisLabel:{show:!1,color:"#0ab7ff",fontSize:15,distance:-50,formatter:function(e){return e+"分"}},axisTick:{show:!0,splitNumber:5,lineStyle:{color:"auto",width:2},length:-20},splitLine:{show:!1,length:-0,lineStyle:{color:"#ffffff"}},pointer:{show:!1},detail:{offsetCenter:[0,"-8%"],textStyle:{color:"#ffffff",fontSize:18,borderColor:"#3982f7",borderWidth:1,shadowColor:"#2d71f6",shadowOffsetX:1,shadowOffsetY:1,shadowBlur:8,borderRadius:6,padding:[12,8,8,8]},formatter:function(e){return e+"m³/S"}},data:currentSpeedData},{type:"gauge",radius:"85%",center:["50%","75%"],splitNumber:0,startAngle:180,endAngle:0,axisLine:{show:!0,lineStyle:{width:5,borderWidth:1,shadowColor:"#3982f7",shadowOffsetX:0,shadowOffsetY:0,shadowBlur:8,borderRadius:6,color:[[1,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0E2562"},{offset:.5,color:"#0E2562"},{offset:1,color:"#0E2562"}])]]}},splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},pointer:{show:!1,length:"80%",width:"20%"},title:{show:!0,offsetCenter:["0%","-45%"],textStyle:{color:"#ffffff",fontSize:18,fontWeight:400,opacity:.9}},detail:{show:!0,offsetCenter:["10%","-30%"],color:"#ffffff",padding:[0,10],backgroundColor:bgColor,borderRadius:25,formatter:function(e){return level},textStyle:{fontSize:12}},data:[{name:"瞬时流量"}]}]};function detectionData(e){return{bgColor}}myChart.setOption(option),window.onresize=function(){myChart.resize()};