let num=0;option={backgroundColor:"#111",title:[{text:"招聘岗位总数",x:"center",top:"52%",textStyle:{color:"#fff",fontSize:20,fontWeight:"100"}},{text:"32459",x:"center",top:"42%",textStyle:{fontSize:"50",color:"#fff",fontFamily:"Lato",foontWeight:"600"}}],polar:{radius:["44%","50%"],center:["50%","50%"]},angleAxis:{max:100,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},series:[{name:"",type:"bar",roundCap:!0,barWidth:60,showBackground:!0,backgroundStyle:{color:"rgba(66, 66, 66, .3)"},data:[60],coordinateSystem:"polar",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#449EFF"},{offset:1,color:"#60DAFF"}])}}},{type:"gauge",name:"",radius:"57%",startAngle:"0",endAngle:"-359.99",splitNumber:"200",center:["50%","50%"],pointer:{show:!1},title:{show:!1},detail:{show:!1},data:[{value:95,name:""}],axisLine:{lineStyle:{width:20,opacity:0}},axisTick:{show:!1},splitLine:{show:!1,length:13,lineStyle:{color:{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#111"},{offset:.5,color:"rgba(66, 66, 66, 1)"},{offset:1,color:"#111"}],globalCoord:!1},width:1,type:"solid"}},axisLabel:{show:!1}}]};function numb(){num=num+5,myChart.setOption(option,!0)}setInterval(function(){numb()},100);