var getmax=100,getvalue=80;option1={title:[{text:"全校承担本科教学任务的教授比率",bottom:"0%",x:"center",borderColor:"#1598FF",borderWidth:1,borderRadius:56,backgroundColor:"#1598FF",padding:[7,50],textStyle:{fontWeight:"bold",fontSize:13,color:"#fff"}}],angleAxis:{show:!1,max:getmax*360/270,type:"value",startAngle:225,splitLine:{show:!1}},barMaxWidth:20,radiusAxis:{show:!1,type:"category"},polar:{center:["50%","50%"],radius:"120%"},series:[{type:"bar",data:[{value:getvalue,itemStyle:{color:"#1598FF"}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:3},{type:"bar",data:[{value:getmax,itemStyle:{color:"#1598FF",opacity:.2,borderWidth:0}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:1},{type:"gauge",startAngle:225,endAngle:-45,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLabel:{show:!1},pointer:{shadowColor:"auto",shadowBlur:5,length:"50%",width:"2"},itemStyle:{color:"#1598FF",borderColor:"#1598FF",borderWidth:3},detail:{formatter:function(e){return getvalue+"%"},color:"#1598FF",fontSize:22,offsetCenter:[0,50]},title:{show:!1},data:[{value:getvalue}]},{name:"外部刻度",type:"gauge",radius:"75%",min:0,max:100,splitNumber:10,startAngle:225,endAngle:-45,axisLine:{show:!0,lineStyle:{width:1,color:[[1,"rgba(0,0,0,0)"]]}},axisLabel:{show:!1,color:"#4d5bd1",distance:25},axisTick:{show:!0,splitNumber:7,lineStyle:{color:"#C7CBCF",opacity:.6,width:2},length:-8},splitLine:{show:!1,length:-20,lineStyle:{color:"#C7CBCF"}},detail:{show:!1},pointer:{show:!1}},{type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:["10%","15%"],z:10,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:100,itemStyle:{normal:{color:"#1598FF"}}}]},{type:"pie",hoverAnimation:!1,legendHoverLink:!1,radius:["0%","10%"],z:10,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:[{value:100,itemStyle:{normal:{color:"#FFFFFF"}}}]}]};
