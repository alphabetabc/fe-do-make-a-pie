data=[{name:"专业学习",value:754},{name:"自我评价",value:611},{name:"大专",value:400},{name:"经验交流",value:200}],arrName=getArrayValue(data,"name"),arrValue=getArrayValue(data,"value"),sumValue=1e3,objData=array2obj(data,"name"),optionData=getData(data);function getArrayValue(a,e){var e=e||"value",l=[];return a&&a.forEach(function(s){l.push(s[e])}),l}function array2obj(a,t){for(var e={},l=0;l<a.length;l++)e[a[l][t]]=a[l];return e}function getData(a){var t={series:[{name:"大环",type:"gauge",splitNumber:15,radius:"82%",center:["50%","55%"],startAngle:90,endAngle:-269.9999,axisLine:{show:!1,lineStyle:{color:[[1,"#1f59a7"]]}},axisTick:{show:!1},splitLine:{show:!0,length:32,lineStyle:{color:"auto",width:3.5}},axisLabel:{show:!1},detail:{show:!1}},{name:"小环",type:"gauge",splitNumber:15,radius:"78%",center:["50%","55%"],startAngle:90,endAngle:-269.9999,axisLine:{show:!1},axisTick:{show:!0,lineStyle:{color:"#1f59a7",width:3},length:20,splitNumber:5},splitLine:{show:!1},axisLabel:{show:!1},detail:{show:!1}}],yAxis:[]};for(let e=0;e<a.length;e++)t.series.push({name:"学历",type:"pie",clockWise:!0,z:2,hoverAnimation:!1,radius:[73-e*15+"%",68-e*15+"%"],center:["50%","55%"],label:{show:!0,formatter:"{d}%",color:"RGB(246,175,101)",fontSize:25,position:"inside"},labelLine:{show:!1},data:[{value:a[e].value,name:a[e].name},{value:sumValue-a[e].value,name:"",itemStyle:{color:"rgba(0,0,0,0)",borderWidth:0},tooltip:{show:!1},label:{show:!1},hoverAnimation:!1}]}),t.series.push({name:"背景线",type:"pie",silent:!0,z:1,clockWise:!0,hoverAnimation:!1,radius:[71-e*15+"%",69-e*15+"%"],center:["50%","55%"],label:{show:!1},itemStyle:{label:{show:!1},labelLine:{show:!1},borderWidth:5},data:[{value:100,itemStyle:{color:"RGB(12,64,128)",borderWidth:0},tooltip:{show:!1},hoverAnimation:!1}]}),t.yAxis.push(a[e].name);return t}option={title:{text:"教师成长记录分析",textStyle:{color:"white"}},backgroundColor:"RGB(8,20,67)",color:[{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"rgba(10,31,95,1)"},{offset:1,color:"rgba(1,232,254,1)"}],global:!1}],grid:{top:"16%",bottom:"54%",left:"50%",containLabel:!1},yAxis:[{type:"category",inverse:!0,z:3,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,inside:!1,textStyle:{color:"RGB(78,184,252)",fontSize:25},show:!0},data:optionData.yAxis}],xAxis:[{show:!1}],series:optionData.series};
