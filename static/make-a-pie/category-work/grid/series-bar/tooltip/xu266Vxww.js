var data=[{name:"0-10",value:"142",untis:"人"},{name:"11-20",value:"52",untis:"人"},{name:"21-30",value:"107",untis:"人"},{name:"31-40",value:"171",untis:"人"},{name:"41-50",value:"282",untis:"人"},{name:"51-60",value:"228",untis:"人"},{name:"61-70",value:"199",untis:"人"},{name:"71-80",value:"125",untis:"人"},{name:"80以上",value:"16",untis:"人"}],getYAxisData=function(t){var e=[];return t.forEach(function(a,r){e.push(a.name)}),e},getShadowData=function(t){var e=[],a;return t.forEach(function(r,n){(!a||a<r.value)&&(a=Math.ceil(r.value))}),t.forEach(function(r,n){e.push(a)}),e},option={backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"4%",right:"4%",bottom:"2",top:"2",containLabel:!0},xAxis:{type:"value",axisLine:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",max:"1200",axisLine:{show:!1,lineStyle:{color:"rgba(10, 10, 10, .8)"}},axisTick:{show:!1},axisPointer:{show:!1},splitLine:{show:!1},data:getYAxisData(data),axisLabel:{}},series:[{type:"bar",barWidth:"15%",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#8bd46e"},{offset:1,color:"#09bcb7"}]),barBorderRadius:[0,11,11,0]}},zlevel:2,data},{type:"bar",barWidth:"15%",barGap:"-100%",itemStyle:{normal:{color:"transparent",barBorderRadius:0}},label:{show:!0,position:"right",color:"rgba(10, 10, 10, .8)",formatter:function(t){for(var e="",a=0;a<data.length;a++)if(data[a].name==t.name){e=data[a].value+(data[a].untis||"");break}return e}},zlevel:1,data:getShadowData(data)}]};