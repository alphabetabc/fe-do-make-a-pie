var spNum=0,_max=100,fomatter_fn=function(e){return(e.value/_max*100).toFixed(0)},_label={normal:{show:!0,position:"top",formatter:fomatter_fn,textStyle:{color:"#fff",fontSize:16}}};option={backgroundColor:"#082D78",legend:{data:["10kV","380V","220V"],textStyle:{color:"#fff",fontSize:14},itemGap:70,bottom:250,itemWidth:20,itemHeight:10},grid:{containLabel:!0,left:80,right:80,top:45},tooltip:{show:!0,backgroundColor:"#fff",borderColor:"#ddd",borderWidth:1,textStyle:{color:"#3c3c3c",fontSize:16},extraCssText:"box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)"},xAxis:{axisLabel:{show:!1,formatter:function(e){var a=(e/_max*100).toFixed(0);return a==0?a:a+"%"}},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},yAxis:[{data:[""],axisLabel:{fontSize:16,color:"#fff",show:!1},axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1}},{show:!1,data:[""],axisLine:{show:!1}}],series:[{type:"bar",name:"10kV",stack:"2",label:_label,legendHoverLink:!1,barWidth:14,itemStyle:{normal:{color:"#74E8FF",barBorderRadius:[30,0,0,30]},emphasis:{color:"#74E8FF"}},data:[30]},{type:"bar",name:"380V",stack:"2",legendHoverLink:!1,barWidth:40,label:_label,itemStyle:{normal:{color:"#4CC4B5"},emphasis:{color:"#4CC4B5"}},data:[20]},{type:"bar",stack:"2",name:"220V",legendHoverLink:!1,barWidth:40,label:_label,itemStyle:{normal:{color:"#B49BD3",barBorderRadius:[0,30,30,0]},emphasis:{color:"#B49BD3"}},data:[30]}]};