const payload={id:"right-top"};var dataArr=80.47,colorSet={color:"#0063E7"};option={tooltip:{formatter:"{a} <br/>{b} : {c}%"},grid:{top:0},series:[{name:"最外部进度条",type:"gauge",radius:"80%",center:["50%","45%"],splitNumber:10,startAngle:180,endAngle:0,axisLine:{lineStyle:{color:[[dataArr/100,new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(145,207,255,0)"},{offset:.5,color:"rgba(145,207,255,0.2)"},{offset:1,color:"rgba(145,207,255,1)"}])],[1,"rgba(28,128,245,.0)"]],width:3}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{show:!1},title:{show:!1},data:[{name:"title",value:dataArr}],pointer:{show:!1},animationDuration:4e3},{name:"内部阴影",type:"gauge",radius:"70%",center:["50%","45%"],z:4,splitNumber:10,startAngle:180,endAngle:0,axisLine:{lineStyle:{color:[[dataArr/100,new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(145,207,255,0)"},{offset:.5,color:"rgba(145,207,255,0.1)"},{offset:1,color:"rgba(145,207,255,0.3)"}])],[1,"rgba(28,128,245,.0)"]],width:300}},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{formatter(e){return e!==0?"{number|"+e+`}{percent|%}
{text|全市营商环境指数}`:0},offsetCenter:[0,-20],textStyle:{padding:[0,0,0,0],fontSize:18,color:"#EDFFFD"},rich:{number:{color:"#E8F2FB",fontSize:24,verticalAlign:"bottom"},percent:{color:"#E8F2FB",fontSize:14,verticalAlign:"bottom"},text:{color:"#85B2E9",fontSize:14,lineHeight:20,verticalAlign:"bottom"}}},title:{show:!1},data:[{name:"title",value:dataArr}],pointer:{show:!1}},{name:"内部圈",type:"gauge",z:2,min:0,max:100,splitNumber:10,startAngle:180,endAngle:0,radius:"70%",center:["50%","45%"],axisLine:{lineStyle:{color:[[1,colorSet.color]],width:3,shadowColor:"rgba(145,207,255,.5)",shadowBlur:6,shadowOffsetX:0}},tooltip:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},itemStyle:{show:!1},detail:{show:!1},title:{show:!1},data:[{name:"title",value:dataArr}],pointer:{show:!1,length:"80%",radius:"20%",width:3},animationDuration:4e3},{name:"内部刻度",type:"gauge",radius:"65%",center:["50%","45%"],min:0,max:100,splitNumber:10,startAngle:180,endAngle:0,axisLine:{show:!1,lineStyle:{width:5,color:[[1,"#1087e2"]]}},axisLabel:{show:!0,color:"rgba(172,207,255,.5)",distance:2,fontSize:12},axisTick:{show:!0,splitNumber:7,lineStyle:{color:"#1C3164",width:1},length:4},splitLine:{show:!0,length:8,lineStyle:{color:"#1C3164"}},detail:{show:!1},pointer:{show:!1}}]};
