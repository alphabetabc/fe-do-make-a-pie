let numWjc=2,numYjc=1,allNum=numWjc+numYjc,pieData1=[],pieData2=[],pieNum=90,yjcOutColor="#BA1F26",wjcOutColor="#FF6971",innerCircleBg="#1e313a",innerCircleActiveStart="#59AF33",innerCircleActiveEnd="#AFFF8C",innerRadius=["30%","42%"],outRadius=["72%","57%"];for(let e=0;e<pieNum;++e)pieData1.push({value:1,name:e,itemStyle:{normal:{color:e<pieNum*numYjc/allNum?new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:innerCircleActiveStart},{offset:1,color:innerCircleActiveEnd}]):"rgba(0,209,228,0)"}}});for(let e=0;e<pieNum;++e)pieData2.push({value:1,name:e,itemStyle:{normal:{color:"#638F7F"}}});option={title:[{text:allNum,x:"48%",y:"40%",textAlign:"center",textStyle:{fontSize:"43",fontWeight:"900",color:"#77FFC4",textAlign:"center"}}],polar:{radius:outRadius,center:["50%","50%"]},angleAxis:{show:!1,max:allNum},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},tooltip:{show:!1},calculable:!0,series:[{name:"",type:"bar",barWidth:60,showBackground:!0,backgroundStyle:{color:"#638F7F"},data:[numYjc],coordinateSystem:"polar",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:yjcOutColor},{offset:1,color:wjcOutColor}])}}},{hoverAnimation:!1,type:"pie",z:2,data:pieData1,radius:innerRadius,zlevel:-2,itemStyle:{normal:{borderColor:innerCircleBg,borderWidth:1}},label:{normal:{position:"inside",show:!1}}},{hoverAnimation:!1,type:"pie",z:1,data:pieData2,radius:innerRadius,zlevel:-2,itemStyle:{normal:{borderColor:"#1e313a",borderWidth:1}},label:{show:!1}}]};
