data={xAxis:["02-22","02-23","02-24","02-25","02-26","02-27","02-28","03-01","03-02","03-03","03-04","03-05","03-06","03-07","03-08","03-09","03-10","03-11","03-12","03-13","03-14","03-15","03-16","03-17","03-18","03-19","03-20","03-21","03-22","03-23","03-24"],series:[{data:["2229563","2273417","2277332","2122625","1964202","1715535","1834156","2395537","2396979","2365696","2140489","2252957","1984547","1467705","1488768","1447258","1447275","1423666","1548223","1392318","1303481","1396617","1397033","1408110","1396110","1616949","1478932","1547694","1303900","1298353","1287943"],name:"A"},{data:["48A1435","526428","541409","528725","504507","393798","326459","537167","570002","583405","548466","545513","518605","364518","427350","454516","453434","448910","453934","422552","332165","420990","437244","449331","445393","456947","479129","410383","409629","434501","446538"],name:"B"}],name:"总数"};var colors=["rgba(0, 252, 255, 1)","rgba(252, 39, 122, 1)"];option={color:colors,tooltip:{show:!0,trigger:"axis",padding:15,formatter:function(e){for(var t=e[0].name,a=0,r=e.length;a<r;a++)console.log(" params[i]",e[a]),t+="<br/>"+e[a].marker+e[a].seriesName+" : "+e[a].value;return t}},grid:{left:"2%",right:"2%",top:"40",containLabel:!0},legend:{data:["A","B"],show:!0,left:"40%",top:"10px"},xAxis:[{show:!0,type:"category",axisTick:{},data:data.xAxis}],yAxis:[{show:!0,type:"value",name:"",axisLabel:{formatter:function(e){return`${e/1e4} 万`}},offset:0,position:"left"},{show:!0,type:"value",name:"",axisLabel:{formatter:function(e){return`${e/1e4} 万`}},offset:0,position:"right"}],series:[{name:"A",type:"line",data:data.series[0].data,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 252, 255, 0.8)"},{offset:1,color:"rgba(0, 252, 255, 0.2)"}])},yAxisIndex:0},{name:"B",type:"line",data:data.series[1].data,areaStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(252, 39, 122, 1)"},{offset:1,color:"rgba(255, 173, 43, 0)"}])},yAxisIndex:1}]};