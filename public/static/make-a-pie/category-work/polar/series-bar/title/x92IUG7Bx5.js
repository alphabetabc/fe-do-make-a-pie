var getvalue=[90];option={title:{text:"{a|"+getvalue+"}{b|分}",textStyle:{rich:{a:{fontSize:48,color:"#E23A38",fontWeight:"600"},b:{fontSize:12,color:"#E23A38",fontWeight:"600",padding:[0,0,24,5]}}},left:"center",top:"center"},angleAxis:{max:100,clockwise:!0,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},polar:{center:["50%","50%"],radius:"100%"},series:[{type:"bar",data:getvalue,showBackground:!0,backgroundStyle:{color:"#9d9ea2"},coordinateSystem:"polar",barWidth:30,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#E23A38"},{offset:1,color:"#E23A38"}])}}}]};