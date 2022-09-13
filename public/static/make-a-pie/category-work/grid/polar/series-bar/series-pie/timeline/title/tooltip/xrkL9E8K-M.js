var uploadedDataURL="/asset/get/s/data-1512807942885-HJJzRztbM.xlsx",xAxisBarChart=[],dataBarChart=[],dataBrownies=[],dataMacarons=[],dataTiramisu=[],timelineData=[],optionsData=[],weekDay=0,sourceArray=[],SortOrNot=!1,compare=function(e,t){return e.value<t.value?1:e.value>t.value?-1:0},dataBarChartMap=new Map,dataBarChartTemp=[];option={baseOption:{timeline:{x:0,axisType:"category",orient:"vertical",autoPlay:!0,playInterval:1e3,data:timelineData,left:10,right:null,top:50,bottom:0,width:70,height:null,inverse:!0,symbol:"none",lineStyle:{color:"#555"},checkpointStyle:{color:"#bbb",borderColor:"#777",borderWidth:2},label:{normal:{textStyle:{color:"#999",fontSize:15}},emphasis:{textStyle:{color:"#999",fontSize:20}}}},title:{text:"上海Starbucks咖啡饮品周销售量",subtext:`点击极坐标系下即可与圆环图交互
点击柱状图排序`,textAlign:"left"},tooltip:{trigger:"item",padding:10,backgroundColor:"#222",borderColor:"#777",borderWidth:1,formatter:tooltipFormatter},angleAxis:{type:"category",data:[{value:"周一",textStyle:{fontSize:25}},"周二","周三","周四","周五","周六","周日"],z:10},grid:{left:"6%",right:"5%",top:"16%",bottom:"3%",containLabel:!0},polar:{center:["80%","30%"],radius:100},xAxis:[{type:"category",data:xAxisBarChart,axisLabel:{interval:0}}],yAxis:[{type:"value",max:600,show:!1}],radiusAxis:{},series:[{type:"bar",data:dataBrownies,coordinateSystem:"polar",name:"美式咖啡",center:["80%","30%"],stack:"a",itemStyle:{normal:{borderWidth:4,borderColor:"#ffffff"},emphasis:{borderWidth:0,shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{type:"bar",data:dataMacarons,coordinateSystem:"polar",name:"拿铁",center:["80%","30%"],stack:"a",itemStyle:{normal:{borderWidth:4,borderColor:"#ffffff"},emphasis:{borderWidth:0,shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{type:"bar",data:dataTiramisu,coordinateSystem:"polar",name:"焦糖玛奇朵",center:["80%","30%"],stack:"a",itemStyle:{normal:{borderWidth:3,borderColor:"#ffffff"},emphasis:{borderWidth:3,shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}},{name:"每周的日销量",type:"pie",center:["80%","30%"],radius:["45%","50%"],avoidLabelOverlap:!1,label:{normal:{show:!0,position:"outside",formatter:"{b} : {c} ({d}%)"},emphasis:{show:!0,textStyle:{fontSize:"15",fontWeight:"normal"}},tooltip:{trigger:"item",padding:10,backgroundColor:"#222",borderColor:"#777",borderWidth:1,formatter:tooltipFormatter}},labelLine:{normal:{show:!1}},legend:{show:!0,orient:"vertical",x:"left",y:"bottom",data:["var uploadedDataURL"]},itemStyle:{normal:{borderWidth:3,borderColor:"#ffffff"},emphasis:{show:!0,textStyle:{fontSize:"15",fontWeight:"normal"}}}},{name:"半年销量",type:"bar",avoidLabelOverlap:!1,label:{normal:{show:!0,position:"outside",formatter:"{c}"},emphasis:{show:!0,textStyle:{fontSize:"20",fontWeight:"normal"}}},labelLine:{normal:{show:!1}},itemStyle:{normal:{borderWidth:3,borderColor:"#ffffff"},emphasis:{borderWidth:3,shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},options:optionsData};for(var week=0;week<26;week++){for(var weekDataArray=[],day=0;day<7;day++){var productSales=[{Brownies:parseInt(20*Math.random()),Macarons:parseInt(20*Math.random()),Tiramisu:parseInt(20*Math.random())}];weekDataArray.push(productSales)}sourceArray.push(weekDataArray),timelineData.push("第"+(week+1)+"周")}everyProductCalculate();function everyProductCalculate(){dataBarChartMap=new Map,dataBarChartTemp=[],xAxisBarChart=[],dataBrownies=[],dataMacarons=[],dataTiramisu=[],optionsData=[];for(var e=0;e<sourceArray.length;e++){for(var t=0,a=0;a<sourceArray[e].length;a++){var o=0;o=sourceArray[e][a][0].Brownies+sourceArray[e][a][0].Macarons+sourceArray[e][a][0].Tiramisu,t=t+o}dataBarChartTemp.push(t)}for(var e=1;e<sourceArray.length+1;e++)dataBarChartMap.put(e,dataBarChartTemp[e-1]);SortOrNot&&(dataBarChartMap.elements.sort(compare),dataBarChartTemp=dataBarChartMap.elements),dataBarChart=dataBarChartTemp;for(var e=0;e<sourceArray.length;e++){for(var r=[],a=0;a<sourceArray.length;a++)e==dataBarChartMap.elements[a].key-1?r.push(`
>第`+dataBarChartMap.elements[a].key+"周<"):r.push(dataBarChartMap.elements[a].key+"周");xAxisBarChart.push(r)}for(var e=0;e<sourceArray.length;e++){dataBrowniesTemp=[],dataMacaronsTemp=[],dataTiramisuTemp=[];for(var a=0;a<sourceArray[e].length;a++)dataBrowniesTemp.push(sourceArray[e][a][0].Brownies),dataMacaronsTemp.push(sourceArray[e][a][0].Macarons),dataTiramisuTemp.push(sourceArray[e][a][0].Tiramisu);dataBrownies.push(dataBrowniesTemp),dataMacarons.push(dataMacaronsTemp),dataTiramisu.push(dataTiramisuTemp)}for(var e=0;e<sourceArray.length;e++)optionsData.push({series:[{data:dataBrownies[e]},{data:dataMacarons[e]},{data:dataTiramisu[e]},{data:[{value:dataBrownies[e][weekDay],name:"美式咖啡"},{value:dataMacarons[e][weekDay],name:"拿铁"},{value:dataTiramisu[e][weekDay],name:"焦糖玛奇朵"}]},{data:dataBarChart}],xAxis:[{data:xAxisBarChart[e]}]});option.options=optionsData,myChart.setOption(option)}myChart.on("click",function(e){if(e.componentSubType!="pie"&&e.seriesName!="半年销量"){weekDay=e.dataIndex;for(var t=0;t<option.baseOption.timeline.data.length;t++)option.options[t].series[3].data[0].value=dataBrownies[t][weekDay],option.options[t].series[3].data[1].value=dataMacarons[t][weekDay],option.options[t].series[3].data[2].value=dataTiramisu[t][weekDay];var a=["周一","周二","周三","周四","周五","周六","周日"];a[weekDay]={value:a[weekDay],textStyle:{fontSize:25}},option.baseOption.timeline.autoPlay=!1,option.baseOption.angleAxis.data=a,myChart.setOption(option)}else e.componentSubType=="bar"&&e.seriesName=="半年销量"&&(SortOrNot==!1?SortOrNot=!0:SortOrNot=!1,everyProductCalculate(),option.options=optionsData,myChart.setOption(option))});function tooltipFormatter(e){var t=[];return e.componentSubType=="pie"?t.push('<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">本日销量<br></div><span style="color:'+e.color+'">'+e.name+"</span>: "+e.value):t.push('<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'+e.seriesName+'</div><span style="color:'+e.color+'">'+e.name+"</span>: "+e.value+"<br>"),t}function Map(){this.elements=new Array,this.size=function(){return this.elements.length},this.isEmpty=function(){return this.elements.length<1},this.clear=function(){this.elements=new Array},this.put=function(e,t){this.containsKey(e)==!0?this.containsValue(t)?this.remove(e)==!0&&this.elements.push({key:e,value:t}):this.elements.push({key:e,value:t}):this.elements.push({key:e,value:t})},this.remove=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)if(this.elements[i].key==e)return this.elements.splice(i,1),!0}catch{t=!1}return t},this.get=function(e){try{for(i=0;i<this.elements.length;i++)if(this.elements[i].key==e)return this.elements[i].value}catch{return null}},this.element=function(e){return e<0||e>=this.elements.length?null:this.elements[e]},this.containsKey=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)this.elements[i].key==e&&(t=!0)}catch{t=!1}return t},this.containsValue=function(e){var t=!1;try{for(i=0;i<this.elements.length;i++)this.elements[i].value==e&&(t=!0)}catch{t=!1}return t},this.keys=function(){var e=new Array;for(i=0;i<this.elements.length;i++)e.push(this.elements[i].key);return e},this.values=function(){var e=new Array;for(i=0;i<this.elements.length;i++)e.push(this.elements[i].value);return e}}