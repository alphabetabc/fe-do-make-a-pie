option={color:["#69d2e7","#4cafff","#ef553b"],toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}}},title:{text:"年度每月设备数量一览",x:"center"},tooltip:{trigger:"axis",axisPointer:{animation:!1}},legend:{data:["在线","接入","离线"],bottom:"1",itemHeight:"10"},grid:[{top:"13%",left:"4%",height:"35%",width:"92%"},{left:"4%",top:"52%",height:"35%",width:"92%"}],xAxis:[{type:"category",boundaryGap:!0,scale:!0,nameTextStyle:{fontSize:"10"},axisTick:{show:!1},axisLine:{show:!1,onZero:!0},axisLabel:{interval:"0"},nameLocation:"start",data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},{show:!1,gridIndex:1,type:"category",scale:!0,axisTick:{show:!1},axisLabel:{interval:"0"},boundaryGap:!0,axisLine:{onZero:!0,show:!1},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],position:"top"}],yAxis:[{show:!1,name:"多头",type:"value"},{show:!1,gridIndex:1,name:"空头",type:"value",max:300,inverse:!0}],series:[{name:"在线",type:"bar",barWidth:"99.3%",symbolSize:1,stack:"广告",hoverAnimation:!1,data:[320,302,301,334,390,330,320,120,132,101,134,210]},{name:"接入",type:"bar",stack:"广告",barWidth:"99.3%",symbolSize:1,hoverAnimation:!1,data:[220,182,191,234,290,330,310,230,210,145,250,170]},{name:"离线",type:"bar",barWidth:"99.3%",xAxisIndex:1,yAxisIndex:1,symbolSize:8,hoverAnimation:!1,data:[100,90,120,70,50,110,90,100,90,120,70,50]}]};