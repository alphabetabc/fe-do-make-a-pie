const xData=["111","222","333"],yData=[23,34,56],barWidth=30,color1={x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"#be6331"},{offset:1,color:"#ceb149"}]},maxData=yData.map(()=>100),circleData=yData.map(()=>({name:"",value:100,symbolPosition:"end"}));option={backgroundColor:"#0A2E5D",tooltip:{show:!0,trigger:"axis"},grid:{top:"0%",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value",axisLabel:{show:!0,textStyle:{color:"#fff"}},splitLine:{show:!1}}],yAxis:[{type:"category",axisLabel:{show:!0,textStyle:{color:"#fff",fontSize:18},formatter(o){var t="";const r=o.length,a=Math.ceil(r/4);if(a>1){for(var e=0;e<a;e++){var s="";const l=e*4,i=l+4;s=o.substring(l,i)+`
`,t+=s}return t}else return o}},splitLine:{show:!1},data:xData},{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitArea:{show:!1},splitLine:{show:!1},data:xData}],series:[{name:"内部柱子顶部",type:"pictorialBar",tooltip:{show:!1},symbolSize:[10,barWidth],symbol:"diamond",symbolOffset:["50%","0%"],symbolPosition:"end",z:15,color:"#ceb149",zlevel:2,data:yData},{type:"bar",barGap:"60%",barWidth,itemStyle:{color:color1,borderColor:color1,borderWidth:1,borderType:"solid"},label:{show:!1},zlevel:2,data:yData},{name:"背景柱子1",type:"bar",tooltip:{show:!1},yAxisIndex:1,barGap:"60%",data:yData.map(()=>100),zlevel:1,barWidth,itemStyle:{normal:{color:"rgba(16, 56, 70,.8)"}}},{name:"底部圆1",type:"pictorialBar",tooltip:{show:!1},symbol:"diamond",symbolSize:[10,barWidth],symbolOffset:["-50%","0%"],z:12,color:"#ceb149",data:maxData},{name:"顶部圆1",type:"pictorialBar",tooltip:{show:!1},z:20,zlevel:3,symbolPosition:"end",symbolSize:[10,barWidth],symbol:"diamond",symbolOffset:["50%","0%"],itemStyle:{normal:{shadowColor:"rgba(0, 0, 0, .3)",shadowBlur:5,shadowOffsetY:3,shadowOffsetX:0,color:"rgba(30, 100, 112,1)"}},data:circleData}]};
