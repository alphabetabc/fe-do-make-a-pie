var color="#189cbb",appusage_data=[{name:"app4",value:13543},{name:"app11",value:18543},{name:"app8",value:12458},{name:"app3",value:5245},{name:"app16",value:13544},{name:"app16",value:""},{name:"app16",value:7587},{name:"app16",value:1214},{name:"app16",value:18567},{name:"app16",value:15e3},{name:"app16",value:15234}],scale=1;option={backgroundColor:"#0E2A43",grid:{left:"3%",right:"10%",bottom:"3%",containLabel:!0},yAxis:[{type:"category",data:[8,9,10,11,12,13,14,15,16,17,18],axisLabel:{padding:[0,15,0,0],textStyle:{color,fontSize:16*scale}},axisTick:{show:!1,lineStyle:{color}},axisLine:{lineStyle:{color}},splitLine:{lineStyle:{color:"rgba(80,224,255,0.3)",type:"dashed"}},name:"时间/h",nameTextStyle:{color:"#fff",fontSize:16*scale,padding:[0,0,10,0]}}],xAxis:[{type:"value",max:2e4,axisLabel:{textStyle:{color,fontSize:16*scale}},axisTick:{show:!1,lineStyle:{color}},axisLine:{lineStyle:{color}},splitLine:{show:!1,lineStyle:{color:"rgba(80,224,255,0.3)",type:"dashed"}},name:"人",nameTextStyle:{color:"#fff",fontSize:16*scale,padding:[0,0,10,0]}}],series:[{name:"通过率",type:"bar",data:appusage_data,barWidth:"50%",barCategoryGap:"35%",label:{normal:{show:!0,position:"right",distance:20,formatter:function(e){return e.data.value},textStyle:{color:"#ffc72b",fontSize:16*scale}}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"#032b3e"},{offset:1,color:"#0d9abb"}],!1)}},markLine:{symbol:"none",data:[{type:"average",valueIndex:1,lineStyle:{normal:{color,type:"dashed",width:2}},label:{normal:{show:!1}}}]}}]};