option={backgroundColor:"#012366",tooltip:{trigger:"axis",textStyle:{fontSize:22}},grid:{left:"1%",right:"2%",bottom:"1%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:["4","8","12","16","20","24"],axisLabel:{interval:0,textStyle:{color:"#fff",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:24},formatter:function(e){var l="",r=e.length,o=4,n=Math.ceil(r/o);if(r>o)for(var t=0;t<n;t++){var a="",i=t*o,f=i+o;t==n-1?a=e.substring(i,r):a=e.substring(i,f)+`
`,l+=a}else l=e;return l}},axisTick:{show:!1},axisLine:{lineStyle:{color:"#437f87"}},splitLine:{show:!1,lineStyle:{color:"#f00"}}},yAxis:[{type:"value",splitNumber:5,axisLabel:{show:!1,textStyle:{color:"#fff",fontStyle:"normal",fontFamily:"微软雅黑",fontSize:28}},axisLine:{show:!0,lineStyle:{color:"#437f87"}},axisTick:{show:!1,lineStyle:{color:"#437f87"}},splitLine:{show:!1,lineStyle:{color:"#f00"}}}],series:[{name:"2018",type:"line",label:{show:!0,position:"top",textStyle:{color:"#ed1719",fontSize:24}},itemStyle:{normal:{color:"#ed1719",lineStyle:{color:"#ed1719",width:3},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(101, 55, 55,0)"},{offset:1,color:"rgba(101, 55, 55,0.35)"}])}}},data:[60,100,120,130,120,110]},{name:"2019",type:"line",label:{show:!0,position:"top",textStyle:{color:"#e4b93f",fontSize:24}},itemStyle:{normal:{color:"#e4b93f",lineStyle:{color:"#e4b93f",width:3},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(68, 93, 73,0)"},{offset:1,color:"rgba(68, 93, 73,0.35)"}])}}},data:[150,160,200,210,140,120]},{name:"2020",type:"line",label:{show:!0,position:"top",textStyle:{color:"#02e1e3",fontSize:24}},itemStyle:{normal:{color:"#02e1e3",lineStyle:{color:"#02e1e3",width:3},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(5, 103, 103,0)"},{offset:1,color:"rgba(5, 103, 103,0.35)"}])}}},data:[500,400,380,350,420,500]},{name:"2021",type:"line",label:{show:!0,position:"top",textStyle:{color:"#02e693",fontSize:24}},itemStyle:{normal:{color:"#02e693",lineStyle:{color:"#02e693",width:3},areaStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"rgba(6, 90, 85,0)"},{offset:1,color:"rgba(6, 90, 85,0.35)"}])}}},data:[600,580,530,540,600,640]}]};