var dataIPSxAxis=["2019 04/20  ","2019 04/24","2019 04/27","2019 04/29 ","2019 05/02 ","2019 05/08"],dataIPS=[20,60,50,80,120,100];option={backgroundColor:"#021228",title:{text:"事件-告警联合态势",textStyle:{fontSize:12,fontWeight:"normal",color:"#0674ca"},left:"2%"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},color:["#0080ff","#4cd5ce"],toolbox:{},grid:{left:"5px",top:"25px",right:"20px",bottom:"0px",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:dataIPSxAxis,axisLabel:{show:!0,textStyle:{color:"#6ba1bb",fontSize:12},formatter:function(t){var r="",e=5,n=t.length,a=Math.ceil(n/e);if(a>1){for(var o=0;o<a;o++){var l="",i=o*e,s=i+e;l=t.substring(i,s)+`
`,r+=l}return r}else return t}},axisLine:{lineStyle:{color:"#0a2b52",width:.5}}}],yAxis:[{type:"value",axisLine:{onZero:!1,lineStyle:{color:"#0a2b52",width:1}},axisLabel:{formatter:function(t){return t+"万"},show:!0,textStyle:{color:"#6ba1bb"}},splitLine:{show:!0,lineStyle:{color:"#0a2b52",width:1,type:"solid"}}}],series:[{name:"管节实时浇筑",type:"line",smooth:!0,symbol:"none",stack:100,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#01806f"},{offset:.5,color:"#01806f"},{offset:1,color:"transparent"}]),lineStyle:{width:.5,type:"solid",color:"#02675f"}},emphasis:{color:"#02675f",lineStyle:{width:.5,type:"dotted",color:"#02675f"}}},symbolSize:5,areaStyle:{normal:{}},data:dataIPS}]};
