let titleNum=10,titleState="进行中",titleDw="个",outCircleBg="rgba(49,95,138,1)",inCircleBg="rgba(49,95,138,1)",progressBg="#d81e06",progressPercent=.6;option={title:[{text:titleNum,y:"46%",x:"center",textAlign:"left",textStyle:{fontSize:24,color:"#45C4FF"}},{text:titleState,y:"50%",x:"center",textStyle:{fontWeight:"normal",fontSize:12,color:"#45C4FF"}},{text:titleDw,y:"47%",x:"52%",textAlign:"left",textStyle:{fontSize:10,color:"#679FC0"}}],series:[{type:"gauge",name:"外圈",radius:"96%",startAngle:"225",endAngle:"-45",splitNumber:"100",pointer:{show:!1},detail:{show:!1},data:[{value:1}],axisLine:{show:!0,lineStyle:{color:[[1,outCircleBg]],width:2,opacity:1}},axisTick:{show:!1},splitLine:{show:!0,length:20,lineStyle:{color:"#051932",width:0,type:"solid"}},axisLabel:{show:!1}},{name:"内层数据刻度",type:"gauge",radius:"85%",center:["50%","50%"],pointer:{show:!1},axisLine:{lineStyle:{width:5,color:[[progressPercent,new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:progressBg}])],[1,inCircleBg]]}},splitLine:{length:10,lineStyle:{width:2,color:"none"}},axisTick:{show:!1,lineStyle:{width:1,color:"#ffffff"}},axisLabel:{show:!1,color:"rgb(0,191,255)",distance:5,fontSize:10},detail:{show:!1},itemStyle:{normal:{color:"#FFFFFF"}},data:[{value:50}],silent:!1}]};
