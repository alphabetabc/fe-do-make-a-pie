var dataV=90,option={backgroundColor:"rgba(1,20,34,1)",title:[{text:dataV,left:"49%",top:"45%",textAlign:"center",textStyle:{fontSize:"65",fontWeight:"bold",color:"rgba(191,140,61)",textShadowColor:"rgba(191,140,61)",textShadowBlur:2,textShadowOffsetX:2,textShadowOffsetY:2,textAlign:"center",fontStyle:"italic"}},{text:"身心能量指数",left:"50%",top:"53%",textAlign:"center",textStyle:{fontSize:"22",fontWeight:"400",color:"rgba(191,140,61)",textAlign:"center"}},{text:"❤❤❤❤❤❤",left:"50%",top:"57%",textAlign:"center",textStyle:{fontSize:"16",fontWeight:"400",color:"rgba(191,140,61)",textAlign:"center"}}],toolbox:{feature:{restore:{},saveAsImage:{}}},series:[{name:"由内而外第五个",type:"pie",radius:["50%","52%"],hoverAnimation:!1,startAngle:220,endAngle:-40,min:0,max:100,itemStyle:{color:"rgba(141,199,218,0.15)",shadowColor:"rgba(141,199,218,1)",shadowBlur:10,shadowOffsetX:5,shadowOffsetY:5},labelLine:{show:!1},pointer:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1},data:[{value:dataV}]},{name:"由内而外第四个",type:"pie",radius:["0%","50%"],hoverAnimation:!1,startAngle:220,endAngle:-40,min:0,max:100,itemStyle:{color:"rgba(10,60,95,0.3)"},labelLine:{show:!1},pointer:{show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1},data:[{value:dataV}],z:0},{name:"由内而外第三个",type:"gauge",radius:"45%",startAngle:220,endAngle:-40,min:0,max:100,pointer:{show:!1},axisLine:{show:!0,lineStyle:{color:[[1,"rgba(0,0,0,0)"]]}},axisTick:{show:!0,lineStyle:{color:"rgba(141,199,218,1)"}},splitLine:{show:!0,length:-10,lineStyle:{color:"rgba(141,199,218,1)"}},axisLabel:{show:!1},detail:{show:!1},data:[{value:60}]},{name:"内圆2",type:"pie",radius:["0%","30%"],hoverAnimation:!1,label:{show:!0,position:"center"},emphasis:{label:{show:!0,fontSize:"30",fontWeight:"bold"}},itemStyle:{color:"rgba(10,60,95,1)"},label:{show:!0,position:"center"},data:[{value:dataV}]},{name:"内仪表盘",type:"gauge",radius:"40%",startAngle:220,endAngle:-40,min:0,max:100,splitNumber:1,pointer:{show:!1},axisLine:{show:!0,lineStyle:{color:[[dataV/100,new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(141,199,218,1)"},{offset:1,color:"rgba(234,98,40,1)"}])],[1,"rgba(10,60,95,0.9)"]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{show:!0,distance:-15,lineHeight:-25,color:"rgba(128,206,242)",formatter:function(e){return e==""?" "+e:e}},detail:{show:!1},animationDuration:2e3,animationDurationUpdate:1e3,data:[{value:dataV}]}]};function getRnum(e,t){return Math.random()*(t-e)+e}setInterval(function(){var e=getRnum(0,100);dataV=e.toFixed(0),console.log(dataV),option.title[0].text=dataV;var t=getRnum(0,5);let a="";for(let o=0;o<t;o++)a+="❤";option.title[2].text=a,option.series[4].axisLine.lineStyle.color[0][0]=dataV/100,myChart.setOption(option,!0),console.log(option)},3e3);