var uploadedDataURLy="/asset/get/s/data-1626583899497-Vob08IkMT.png",uploadedDataURL="/asset/get/s/data-1626583870218-OV2xM4qmR.png";option={backgroundColor:"#010f1c",tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{itemWidth:20,itemHeight:20,data:[{name:"用水量",icon:"image://"+uploadedDataURL},{name:"用电量",icon:"image://"+uploadedDataURLy}],textStyle:{fontSize:12,color:"#a4dafe"},right:"3%"},grid:{left:"3%",top:"10%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisTick:{show:!1},axisLine:{lineStyle:{color:"#242a3c"}},axisLabel:{interval:0,show:!0,textStyle:{color:"#9097a5"}},splitLine:{show:!0,lineStyle:{color:["#242a3c"],width:1,type:"solid"}},data:["1月","2月","3月","4月 ","5月"," 6月"," 7月"]}],yAxis:[{type:"value",name:"单位 tec",nameTextStyle:{color:"#9097a5"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#242a3c"}},axisLabel:{textStyle:{fontSize:12,color:"#9097a5"}},splitLine:{show:!0,lineStyle:{color:["#242a3c"],width:1,type:"solid"}}}],series:[{name:"用水量",type:"line",symbol:"circle",symbolSize:2,showSymbol:!1,lineStyle:{normal:{width:2,color:"#1ee0e4"}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,192,255,0.4)"},{offset:.5,color:"rgba(0,192,255,0.4)"},{offset:.8,color:"transparent"}],!1),shadowBlur:30}},itemStyle:{normal:{color:"#1ee0e4",borderColor:"#1ee0e4",borderWidth:0}},markPoint:{label:{color:"#20c7fd",fontFamily:"",fontWeight:800,position:"top",formatter:`{b}
{c}`},data:[{type:"max",name:"",symbol:"pin",symbolSize:20,itemStyle:{color:"#0192b9"}}]},data:[100,160,110,200,200,210,190]},{name:"用电量",type:"line",symbol:"circle",symbolSize:2,showSymbol:!1,lineStyle:{normal:{width:2,color:"#eeda48"}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(238,218,72,0.4)"},{offset:.5,color:"rgba(238,218,72,0.4)"},{offset:.8,color:"transparent"}],!1),shadowBlur:30}},itemStyle:{normal:{color:"#eeda48",borderColor:"#eeda48",borderWidth:0}},markPoint:{label:{color:"#f6f851",fontFamily:"",fontWeight:800,position:"top",formatter:`{b}
{c}`},data:[{type:"max",name:"",symbol:"pin",symbolSize:20,itemStyle:{color:"#bcaf3f"}}]},data:[100,140,130,180,220,195,120]}]};
