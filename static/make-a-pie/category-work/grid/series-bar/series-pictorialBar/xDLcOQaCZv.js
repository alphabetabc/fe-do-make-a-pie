var provincialData=[{id:"089",name:"a",value:0},{id:"088",name:"r",value:0},{id:"070",name:"r",value:0},{id:"087",name:"r",value:0},{id:"084",name:"r",value:0},{id:"079",name:"h",value:0},{id:"086",name:"3",value:0},{id:"085",name:"rt",value:0},{id:"081",name:"y",value:0},{id:"083",name:"hf",value:0},{id:"050",name:"dhf",value:0},{id:"059",name:"dh",value:0},{id:"051",name:"df",value:0},{id:"074",name:"dh",value:0},{id:"071",name:"q",value:0},{id:"075",name:"w",value:0},{id:"038",name:"x",value:0},{id:"030",name:"c",value:0},{id:"036",name:"k",value:0},{id:"034",name:"l",value:0},{id:"031",name:"oi",value:0},{id:"000",name:"",value:0},{id:"076",name:"p",value:0},{id:"017",name:"i",value:0},{id:"097",name:"u",value:0},{id:"090",name:"y",value:0},{id:"091",name:"t",value:0},{id:"010",name:"r",value:0},{id:"019",name:"e",value:0},{id:"018",name:"f",value:0},{id:"013",name:"g",value:0},{id:"011",name:"h",value:0}];option={grid:[{y2:"60%"},{y:"42%"}],xAxis:[{type:"category",show:!1,boundaryGap:!0,gridIndex:0,data:(()=>{const e=[];for(let a=0;a<30;a+=1)e.push(a);return e})()},{type:"value",show:!1,gridIndex:1,boundaryGap:[0,.2]}],yAxis:[{type:"value",scale:!0,show:!1,gridIndex:0,boundaryGap:[0,.2]},{type:"category",gridIndex:1,data:provincialData.map(e=>e.name),axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,color:"#fff",interval:0}}],series:[{name:"",type:"bar",barWidth:12,xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{barBorderRadius:30,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00feff"},{offset:.5,color:"#027eff"},{offset:1,color:"#0286ff"}])}},data:(()=>{const e=[];for(let a=30;a>0;a-=1)e.push(0);return e})()},{barWidth:12,type:"pictorialBar",symbol:"roundRect",xAxisIndex:1,yAxisIndex:1,symbolRepeat:!0,symbolSize:[12,8],itemStyle:{normal:{barBorderRadius:[0,30,30,0],color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00feff"},{offset:.5,color:"#027eff"},{offset:1,color:"#0286ff"}])}},data:provincialData.map(e=>e.value)}]},setInterval(()=>{const e=option.xAxis[0].data;option.series[0].data.shift(),option.series[0].data.push(Math.random()*1e3),option.xAxis[0].data.shift(),option.xAxis[0].data.push(e[e.length-1]+1);for(var a=0;a<provincialData.length;a++)provincialData[a].name!==""&&(provincialData[a].value=Math.random()*1e3);option.series[1].data=provincialData,myChart.setOption(option)},300);
