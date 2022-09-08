var data={axis:{xAxis:"1",yAxis:"2"},provinces:[{name:"0",rate:23.7,ratio:26,value:7.2},{name:"1",rate:26.5,ratio:29.4,value:7.4},{name:"2",rate:20.6,ratio:23.8,value:6.9},{name:"j",rate:31.2,ratio:38.9,value:16.9},{name:"g",rate:25.4,ratio:34.8,value:16.3},{name:"m",rate:38.5,ratio:43.4,value:16.2},{name:"nm",rate:29,ratio:38.5,value:15.5},{name:"b",rate:22.2,ratio:27.6,value:11},{name:"v",rate:21.4,ratio:24.6,value:10.4},{name:"c",rate:22.4,ratio:28.9,value:10.3},{name:"x",rate:13.7,ratio:21.2,value:10.1},{name:"l",rate:24.6,ratio:24.7,value:9.6},{name:"k",rate:19.6,ratio:25.7,value:9.4},{name:"j",rate:24.9,ratio:27.9,value:9.4},{name:"h",rate:25.8,ratio:30.1,value:9.2},{name:"g",rate:16.6,ratio:21.9,value:8.7},{name:"s",rate:21.5,ratio:26,value:8.5},{name:"g",rate:20.5,ratio:25.7,value:8.4},{name:"d",rate:36.8,ratio:37.1,value:8.3},{name:"f",rate:26,ratio:27.8,value:7.6},{name:"h",rate:27.6,ratio:30.1,value:7.3},{name:"h",rate:23,ratio:26.7,value:7}]},minRate=0,maxRate=0,minRatio=0,maxRatio=0;data.provinces.forEach((a,e)=>{a.rate!=="-"&&a.ratio!=="-"&&a.value!=="-"&&(e>0?(parseFloat(a.rate)<minRate?minRate=a.rate:parseFloat(a.rate)>maxRate&&(maxRate=a.rate),parseFloat(a.ratio)<minRatio?minRatio=a.ratio:parseFloat(a.ratio)>maxRatio&&(maxRatio=a.ratio)):(minRate=maxRate=a.rate,minRatio=maxRatio=a.ratio))});var minValue=Math.min(minRate,minRatio),maxValue=Math.max(maxRate,maxRatio),xValue=0,yValue=0;data.provinces.forEach(a=>{a.name==="0"&&(xValue=a.rate,yValue=a.ratio)});var seriesData=[];data.provinces.map(a=>{if(a.rate!=="-"&&a.ratio!=="-"&&a.value!=="-"){let e=0;Math.abs(a.value)<1?e=Math.abs(a.value)*10:Math.abs(a.value)<50?e=Math.abs(a.value):e=Math.abs(a.value)/2,seriesData.push({name:a.name,value:[Math.abs(a.rate),Math.abs(a.ratio)],symbolSize:e})}}),option={title:{text:"标 题",show:!1},grid:{left:"3%",right:"10%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis",showDelay:0,formatter:function(a){let e="";return a.forEach((t,r)=>{e+=t.name+" :<br/>"+data.axis.xAxis+"："+t.value[0]+"%  <br/>"+data.axis.yAxis+"："+t.value[1]+"% <br/>"}),e},axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},legend:{selectedMode:!1,data:["气泡大小"],left:"center"},xAxis:[{name:data.axis.xAxis,type:"value",zlevel:3,scale:!0,axisLabel:{formatter:"{value} %"},splitLine:{show:!1},axisTick:{show:!1},axisLine:{symbol:["none","arrow"]},min:Math.floor(minValue/5)*6,max:Math.ceil(maxValue/5)*6}],yAxis:[{name:data.axis.yAxis,type:"value",scale:!0,zlevel:3,axisLabel:{formatter:"{value} %"},splitLine:{show:!1},axisTick:{show:!1},axisLine:{symbol:["none","arrow"]},min:Math.floor(minValue/5)*6,max:Math.ceil(maxValue/5)*6}],series:[{name:"气泡大小",type:"scatter",data:seriesData,zlevel:2,label:{normal:{show:!0,formatter:function(a){return a.name},position:"top"}},itemStyle:{normal:{color:function(a){return a.name==="0"?"red":a.name==="1"?"#16A857":a.name==="2"?"#F57C35":"#83B4D5"}}},markArea:{zlevel:0,silent:!0,data:[[{name:"1",itemStyle:{color:"#e0f8ed"},label:{show:!0,position:["30%","50%"],fontStyle:"normal",color:"#66cc66",fontSize:14},coord:[xValue,yValue]},{coord:[Number.MAX_VALUE,0]}],[{name:"2",itemStyle:{color:"#fef0e0"},label:{show:!0,position:["10%","50%"],fontStyle:"normal",color:"#66cc66",fontSize:14},xAxis:0,yAxis:0},{xAxis:xValue,yAxis:yValue}],[{name:"3",itemStyle:{color:"#ffebe9"},label:{show:!0,position:["30%","10%"],fontStyle:"normal",color:"#66cc66",fontSize:14},xAxis:xValue,yAxis:yValue},{xAxis:Number.MAX_VALUE,yAxis:Number.MAX_VALUE}],[{name:"4",itemStyle:{color:"#eee5fe"},label:{show:!0,position:["10%","10%"],fontStyle:"normal",color:"#66cc66",fontSize:14},xAxis:0,yAxis:Number.MAX_VALUE},{xAxis:xValue,yAxis:yValue}]]},markLine:{zlevel:0,symbol:["none","none"],emphasis:{show:!1},lineStyle:{normal:{color:"#CDCFCA",type:"solid"}},data:[{xAxis:xValue},{yAxis:yValue},[{lineStyle:{type:"dashed"},coord:[Math.floor(minValue/5)*6,Math.floor(minValue/5)*6]},{symbol:"arrow",coord:[Math.ceil(maxValue/5)*6,Math.ceil(maxValue/5)*6]}]]}}]};