var value=75;option={backgroundColor:"#010818",title:[{text:"任务完成率",y:"70%",x:"center",textStyle:{fontWeight:"bold",fontSize:20,color:"#ffffff"}}],angleAxis:{show:!1,max:100*360/180,type:"value",startAngle:180,splitLine:{show:!1}},barMaxWidth:30,radiusAxis:{show:!1,type:"category"},polar:{center:["50%","70%"],radius:"150%"},series:[{type:"bar",data:[{value,itemStyle:{color:"#388CFE"}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:3},{type:"bar",data:[{value:100,itemStyle:{color:"#EFEFEF",borderWidth:0}}],barGap:"-100%",coordinateSystem:"polar",roundCap:!0,z:1},{type:"gauge",startAngle:225,endAngle:-45,axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLabel:{show:!1},pointer:{show:!1,shadowColor:"auto",shadowBlur:5,length:"50%",width:"2"},itemStyle:{color:"#1598FF",borderColor:"#1598FF",borderWidth:3},detail:{formatter:function(e){return value+"%"},color:"#2755F7",fontSize:50,offsetCenter:[0,50]},title:{show:!1},data:[{value}]}]};