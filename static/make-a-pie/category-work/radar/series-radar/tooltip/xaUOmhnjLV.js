var data=[80,70,30,85,25],indicatorname=["政治品德修养","社会发展能力","美劳素质拓展","身心健康发展","学业发展能力"],maxdata=[100,100,100,100,100];function contains(e,r){for(var a=e.length;a--;)if(e[a]===r)return a;return!1}for(var indicator=[],i=0;i<indicatorname.length;i++)indicator.push({name:indicatorname[i],max:maxdata[i]});function innerdata(e){var r=[];for(let a=0;a<data.length;a++)r.push(100-20*e);return r}optionData=getData(data);function getData(e){var r={series:[{type:"radar",symbolSize:10,symbol:"circle",areaStyle:{color:"#39B2FF",opacity:.3},lineStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00A2FF"},{offset:1,color:"#0060FF"}],!1),width:3},itemStyle:{color:"#fff ",borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00DEFF"},{offset:1,color:"#1598FF"}],!1),borderWidth:4,opacity:1},label:{show:!1},data:[{value:e}],z:100}]};for(let a=0;a<e.length;a++)r.series.push({type:"radar",data:[{value:innerdata(a)}],symbol:"none",lineStyle:{width:0},itemStyle:{color:"#fff"},areaStyle:{color:"#fff",shadowColor:"rgba(14,122,191,0.15)",shadowBlur:30,shadowOffsetY:20}});return r}option={backgroundColor:"#fff",tooltip:{formatter:function(){for(var e="",r=0;r<data.length;r++)e+=indicatorname[r]+" : "+data[r]+"%<br>";return e}},radar:{indicator,splitArea:{show:!0,areaStyle:{color:"#fff",shadowColor:"rgba(14,122,191,0.19)",shadowBlur:30,shadowOffsetY:20}},splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},name:{textStyle:{rich:{a:{fontSize:"17",color:"#333",align:"left",lineHeight:"30",fontWeight:"bold"},b:{fontSize:"15",color:"#666",align:"left"}}},formatter:function(e,r){var a=contains(indicatorname,e),o=data[a]/100*100;return"{a|"+o+`%}
{b|`+e+"}"}}},series:optionData.series};
