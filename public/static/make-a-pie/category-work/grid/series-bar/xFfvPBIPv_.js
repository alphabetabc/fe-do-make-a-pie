for(var dataAxis=["空调","温湿度","配电","UPS","温湿度","烟感","漏水","空调","配电","UPS"],dataAP=[65,104,83,83,83,78,67,83,90,76],yMax=120,dataShadow=[],i=0;i<dataAP.length;i++)dataShadow.push(yMax);option={grid:{bottom:"30px",left:"30px",right:"5%",top:"5%"},xAxis:{data:dataAxis,axisLabel:{interval:0,formatter:function(a){var r="",t=2,e=a.length,l=Math.ceil(e/t);if(l>1){for(var o=0;o<l;o++){var n="",f=o*t,s=f+t;n=a.substring(f,s)+`
`,r+=n}return r}else return a},textStyle:{color:"#4f9ccf"}},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#4f9ccf"}},splitLine:{show:!0,lineStyle:{color:["#013168"],width:1,type:"solid"}}},series:[{type:"bar",itemStyle:{normal:{color:"rgba(0,0,0,0.15)"}},barGap:"-100%",barCategoryGap:"40%",data:dataShadow,animation:!1},{type:"bar",label:{normal:{show:!0,position:"top",distance:12,formatter:function(a){return a.data.value},textStyle:{color:"#4f9ccf",fontSize:12}}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00adff"},{offset:1,color:"#047eff"}])}},data:dataAP}]},setInterval(function(){for(var a=0;a<dataAP.length;a++)dataAP[a]%2==0?dataAP[a]-=Math.round(Math.random()*10):dataAP[a]+=Math.round(Math.random()*20);var r=Math.max(...dataAP),t=Math.ceil(r/50);yMax=t*50,dataShadow=[];for(var a=0;a<dataAP.length;a++)dataShadow.push(yMax);myChart.setOption({series:[{type:"bar",itemStyle:{normal:{color:"rgba(0,0,0,0.15)"}},barGap:"-100%",barCategoryGap:"40%",data:dataShadow,animation:!1},{type:"bar",label:{normal:{show:!0,position:"top",distance:12,formatter:function(e){return e.data.value},textStyle:{color:"#4f9ccf",fontSize:12}}},itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00adff"},{offset:1,color:"#047eff"}])}},data:dataAP}]})},1e3);