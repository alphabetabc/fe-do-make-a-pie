option={backgroundColor:"#080b30",tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(0, 255, 233,0)"},{offset:.5,color:"rgba(255, 255, 255,1)"},{offset:1,color:"rgba(0, 255, 233,0)"}],global:!1}}}},grid:{top:"15%",left:"5%",right:"5%",bottom:"15%"},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#86b6eb"}},splitArea:{show:!1,color:"#f00",lineStyle:{color:"#f00"}},axisTick:{show:!1},axisLabel:{color:"#fff",fontSize:14,formatter:e=>{let o="",i=e.length,t=3,r=Math.ceil(i/t);if(r>1)for(let l=0;l<r;l++){let a="",s=l*t,f=s+t;l===r-1?a=e.substring(s,i):a=e.substring(s,f)+`
`,o=o+a}else o=e;return o}},splitLine:{show:!1},boundaryGap:!1,data:["还公贷提取","B","C","D","E","F"]}],yAxis:[{type:"value",min:0,splitNumber:4,splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.1)"}},axisLine:{show:!1},axisLabel:{show:!1,margin:20,textStyle:{color:"#d1e6eb"}},axisTick:{show:!1}}],series:[{type:"line",smooth:!0,showAllSymbol:!0,symbol:"circle",symbolSize:20,lineStyle:{normal:{color:"#3ec9b5",shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:0,shadowOffsetX:0,width:3},width:10},label:{show:!0,position:"top",distance:25,textStyle:{color:"#3ec9b5",fontSize:14,fontFamily:"PingFangSC-Regular"}},itemStyle:{color:"#3ec9b5",borderWidth:2,shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:0,shadowOffsetY:0,shadowOffsetX:0},tooltip:{show:!0},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,202,149,0.3)"},{offset:1,color:"rgba(0,202,149,0)"}],!1),shadowColor:"rgba(0,202,149, 0.9)",shadowBlur:20}},data:[281.55,398.35,214.02,179.55,289.57,356.14]}]};
