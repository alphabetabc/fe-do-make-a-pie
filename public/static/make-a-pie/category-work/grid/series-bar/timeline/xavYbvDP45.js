var option={baseOption:{backgroundColor:"#08093f",timeline:{show:!1,top:0,data:[]},grid:[{show:!1,left:"10",top:"10%",bottom:"0",containLabel:!0,width:"40%"},{show:!1,left:"51%",top:"10%",bottom:"2.5%",width:"0%"},{show:!1,right:"10",top:"10%",bottom:"0",containLabel:!0,width:"40%"}],xAxis:[{type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,color:"#08093f"},splitLine:{show:!1}},{gridIndex:1,show:!1},{gridIndex:2,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,color:"#08093f"},splitLine:{show:!1}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:["18-25岁","26-35岁","36-45岁","46-55岁","55岁及以上"]},{gridIndex:1,type:"category",inverse:!0,position:"center",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,textStyle:{align:"center",color:"#9AA6E1",fontSize:15}},data:["18-25岁","26-35岁","36-45岁","46-55岁","55岁及以上"]},{gridIndex:2,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},data:["18-25岁","26-35岁","36-45岁","46-55岁","55岁及以上"]}],series:[]},options:[{series:[{name:"背景1",type:"bar",barWidth:10,xAxisIndex:0,yAxisIndex:0,z:-10,barGap:"-100%",barCategoryGap:0,itemStyle:{normal:{barBorderRadius:5,color:"#0a0c47"}},label:{normal:{show:!0,formatter:e=>e.data+"人",position:"insideTopLeft",textStyle:{color:"#ffffff",fontSize:12},offset:[0,-25]}},data:[200,200,200,200,200]},{name:"2017",type:"bar",xAxisIndex:0,yAxisIndex:0,barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#468AFF"},{offset:1,color:"rgba(130, 93, 255, 0.12)"}])}},data:[50,50,50,50,50]},{name:"背景2",type:"bar",barWidth:10,xAxisIndex:2,yAxisIndex:2,z:-10,barGap:"-100%",barCategoryGap:0,itemStyle:{normal:{barBorderRadius:5,color:"#0a0c47"}},label:{normal:{show:!0,formatter:e=>e.data+"人",position:"insideTopRight",textStyle:{color:"#ffffff",fontSize:12},offset:[0,-25]}},data:[200,200,200,200,200]},{name:"2018",type:"bar",xAxisIndex:2,yAxisIndex:2,barWidth:10,itemStyle:{normal:{barBorderRadius:5,color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(211, 46, 88, 0.12)"},{offset:1,color:"#FDC4A0"}])}},data:[50,50,50,50,50]}]}]};