var dataIPSxAxis=["2019 04/20  ","2019 04/24","2019 04/27","2019 04/29 ","2019 05/02 ","2019 05/08"],dataIPS=[20,60,50,80,120,100],dataIPS2=[20,70,60,80,100,90];option={backgroundColor:"#43544c",title:{text:"事件-告警联合态势",textStyle:{fontSize:12,fontWeight:"normal",color:"#0674ca"},left:"2%"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:"5%",top:"5%",right:"5%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:dataIPSxAxis,axisLabel:{show:!0,textStyle:{color:"#6ba1bb",fontSize:12},formatter:function(t){var a="",e=5,n=t.length,r=Math.ceil(n/e);if(r>1){for(var o=0;o<r;o++){var l="",i=o*e,s=i+e;l=t.substring(i,s)+`
`,a+=l}return a}else return t}},axisLine:{lineStyle:{color:"#0a2b52",width:.5}}}],yAxis:[{type:"value",axisLine:{onZero:!1,lineStyle:{color:"#0a2b52",width:1}},axisLabel:{formatter:function(t){return t+"万"},show:!0,textStyle:{color:"#6ba1bb"}},splitLine:{show:!0,lineStyle:{color:"#0a2b52",width:1,type:"solid"}}}],series:[{name:"管节实时浇筑",type:"line",smooth:!0,stack:100,symbolSize:5,areaStyle:{normal:{}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1a75bb"},{offset:.5,color:"#1a75bb"},{offset:1,color:"transparent"}]),lineStyle:{width:5,type:"dotted",color:"#02675f"}},emphasis:{color:"#dc8a27"}},data:dataIPS},{name:"管节实时浇筑",type:"line",smooth:!0,stack:100,symbolSize:5,areaStyle:{normal:{}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1a3e85"},{offset:.5,color:"#1a3e85"},{offset:1,color:"transparent"}]),lineStyle:{width:.5,type:"solid",color:"#4be1ff"}},emphasis:{color:"#02675f"}},data:dataIPS2}]};
