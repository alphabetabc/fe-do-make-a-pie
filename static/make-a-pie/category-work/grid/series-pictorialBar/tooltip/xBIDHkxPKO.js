var a=18,b=15,xAxisTextColor="#FFFFFF",legendColor="#FFFFFF",option={backgroundColor:"#000000",tooltip:{trigger:"axis",formatter:function(o){return o[0].name+"："+o[0].value}},grid:{},yAxis:[{name:"%",nameTextStyle:{color:xAxisTextColor,fontSize:a},type:"value",axisLabel:{interval:0,color:"#d3e0fa",textStyle:{color:xAxisTextColor,fontSize:a}},splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1}}],xAxis:[{type:"category",data:["周一","周二","周三","周四","周五"],axisLabel:{interval:0,color:"#d3e0fa"},axisTick:{show:!1},splitLine:{show:!1},axisLine:{show:!1},splitArea:{show:!1}}],series:[{name:"线损率",type:"pictorialBar",symbol:"path://M35,0L35,70L0,70z M35,0L35,70L70,70z",data:[100,200,341,374,390],barWidth:40,symbolOffset:[0,-15],z:99,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0788EE"},{offset:.5,color:"#0788EE"},{offset:.5,color:"#15B8F9"},{offset:1,color:"#15B8F9"}]),opacity:1}}},{type:"pictorialBar",symbol:"diamond",barWidth:40,symbolSize:["100%",30],z:99,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#0788EE"},{offset:.5,color:"#0788EE"},{offset:.5,color:"#15B8F9"},{offset:1,color:"#15B8F9"}]),opacity:1}},data:[1,1,1,1,1]}]};