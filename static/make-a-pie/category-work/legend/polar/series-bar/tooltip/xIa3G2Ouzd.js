var itemStyle={normal:{opacity:1,color:"pink"}},itemStyle1={normal:{opacity:1,color:"blue"}};option={backgroundColor:"#050505",tooltip:{formatter(e){return`<span style="color:"#FFF"">A：${e.marker}${e.value}个</span>`}},legend:{data:["A"],orient:"vertical",itemWidth:14,itemHeight:14,top:"5%",textStyle:{fontSize:13,color:"#fff"}},angleAxis:{max:100,show:!1},radiusAxis:{type:"category",show:!0,axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},polar:{radius:200,center:["50%","50%"]},series:[{type:"bar",roundCap:!0,barWidth:20,showBackground:!0,backgroundStyle:{color:"#222"},data:[60],coordinateSystem:"polar",name:"A",label:{show:!0},itemStyle,clockWise:!0,barGap:0},{clockWise:!0,type:"bar",roundCap:!0,barWidth:20,showBackground:!0,backgroundStyle:{color:"#222"},data:[80],coordinateSystem:"polar",name:"B",label:{show:!0},itemStyle:itemStyle1,barGap:0}]};
