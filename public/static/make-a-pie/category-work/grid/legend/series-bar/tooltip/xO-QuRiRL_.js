var data=[{name:"三天",value:10,his:20,type:"红色"},{name:"s天",value:10,his:30},{name:"w天",value:10,his:20,type:"黄色"},{name:"x天",value:10,his:80},{name:"z天",value:10,his:20}],warnColorSet={warn:[{type:"红色",color:"rgba(255,0,0,0.8)"},{type:"橙色",color:"rgba(0,255,0,0.8)"},{type:"黄色",color:"rgba(0,255,255,0.8)"},{type:"蓝色",color:"rgba(0,0,255,0.8)"}],wanrKey:"type",barColor:[["rgb(255, 119, 15)","rgb(192, 36, 0) "],["rgb(0, 233, 28)","rgb(12, 169, 1) "]],bgSet:"rgba(0,0,0,0)",seriesSet:[{name:"极值",key:"value"},{name:"历史",key:"his"}]},dataset=[],xdata=[];warnColorSet.seriesSet.forEach(a=>{var e=[];data.forEach(r=>{e.push(r[a.key])}),dataset.push({name:a.name,data:e})}),data.forEach(a=>{xdata.push(a.name)});var serieBgConfig={name:" ",type:"bar",barWidth:"100%",xAxisIndex:1,yAxisIndex:0,label:{show:!0,position:"top",textStyle:{color:"#ffc72b",fontSize:20},formatter:function(a,e,r){return a.name}},itemStyle:{normal:{barBorderRadius:0,color:"rgba(0,0,0,0)"}},data:[],zlevel:10},serieConfig={name:"极值",type:"bar",barGap:"10%",xAxisIndex:0,yAxisIndex:0,label:{normal:{show:!1}},itemStyle:{normal:{barBorderRadius:0}},data:[],zlevel:11},colors=[];warnColorSet.barColor.forEach(a=>{warnColorSet.barColor&&typeof a=="string"?colors.push(a):warnColorSet.barColor&&a instanceof Array?colors.push(new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:a[0]},{offset:1,color:a[1]}])):colors.push("rgba(0,0,0,0)")}),warnColorSet.barColor&&typeof warnColorSet.barColor=="string"?(fo,serieConfig.itemStyle.normal.color=warnColorSet.barColor):warnColorSet.barColor&&typeof warnColorSet.barColor instanceof Array;var seriesData=[],legend=[],max=0,len=0,maxData=[];dataset.forEach(a=>{legend.push(a.name);const e=JSON.parse(JSON.stringify(serieConfig));e.name=a.name,e.data=a.data,seriesData.push(e),a.data.forEach(r=>{max=max<r?r:max}),len=a.data.length});var bgData=[];data.forEach(a=>{bgData.push({value:max,name:1,label:{color:"rgba(0,0,0,0)"},itemStyle:{color:"rgba(0,0,0,0)"}}),warnColorSet.warn.forEach(e=>{e.type===a[warnColorSet.wanrKey]&&(bgData[bgData.length-1]={value:max,name:a[warnColorSet.wanrKey],label:{color:e.color},itemStyle:{color:e.color}})})}),serieBgConfig.data=bgData,seriesData.push(serieBgConfig),option={tooltip:{show:!0,formatter:function(a){return a.seriesName===" "?"":a.seriesName+" : "+a.value}},grid:{right:80},legend:{type:"plain",right:5,top:10,orient:"vertical",textStyle:{color:"red"},itemWidth:30,width:30,itemGap:20,zlevel:12},xAxis:[{type:"category",data:xdata,splitArea:{show:!0,areaStyle:{color:"rgba(0,0,0,0.1)"}},splitLine:{show:!0,lineStyle:{width:10}}},{type:"category",show:!1,data:xdata}],yAxis:{max,axisTick:{show:!1},axisLine:{show:!1},type:"value",axisLabel:{color:"#fff"}},series:seriesData,color:colors};