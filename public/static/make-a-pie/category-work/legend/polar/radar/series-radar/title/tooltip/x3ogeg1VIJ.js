var dimensionData=[{name:"覆盖",max:10},{name:"干扰",max:10},{name:"感知",max:10},{name:"故障",max:10},{name:"容量",max:10}],color=["#DAA520","#F08080"],data=[{value:[7,3,4,5,8],name:"图例一",areaStyle:{color:"#DAA520"},emphasis:{areaStyle:{color:"#DAA520"}}},{value:[2,8,7,1,2],name:"图例二",areaStyle:{color:"#F08080"},emphasis:{areaStyle:{color:"#F08080"}}}],radius="60%";option={title:{text:"基础雷达图"},color,animation:!1,legend:{},radar:{name:{show:!0,textStyle:{color:"#fff",backgroundColor:"#999",borderRadius:3,padding:[3,5]}},indicator:dimensionData,center:["50%","50%"],startAngle:90,splitNumber:5,radius,shape:"circle",splitArea:{areaStyle:{color:["rgba(0, 21, 102, 0.4)"]}},splitLine:{show:!0,lineStyle:{color:["rgba(238,238,238, 0.2)"]}},axisLine:{lineStyle:{color:["rgba(238,238,238, 0.2)"]}}},tooltip:{show:!1,trigger:"item",axisPointer:{snap:!0}},polar:{radius,center:["50%","50%"]},angleAxis:{triggerEvent:!0,axisLine:{lineStyle:{color:"rgba(238,238,238, 0.2)"}}},radiusAxis:{type:"category",splitNumber:5,axisLabel:{show:!0,interval:0,fontSize:9,color:"rgba(255, 255, 255, 0.5)"},axisTick:{show:!0,inside:!0},axisLine:{show:!0,lineStyle:{color:"rgba(238,238,238, 0.2)"}},splitLine:{show:!1,lineStyle:{color:"rgba(238,238,238, 0.2)"}},data},series:[{name:"",type:"radar",data,radarIndex:0,symbol:"circle",symbolSize:6}]},myChart.on("mouseover",function(a){console.log(a);var o=a.event.target.__dimIdx;if(o===void 0){option.tooltip.show=!1,myChart.setOption(option);return}console.log(o),console.log(myChart.getZr()),option.tooltip.show=!0,option.tooltip.formatter=function(i){var r="",e="";r='<div style="font-weight:bold">'+dimensionData[o].name+"</div>";for(var t=0;t<data.length;t++)e+='<div style="font-size:12px">',e+='<div style="display:inline-block;width:10px;height:10px;border-radius:50%;background:'+data[t].areaStyle.color+'"></div>',e+="&nbsp;",e+="<span>"+data[t].name+"：</span>",e+="<span>"+data[t].value[o]+"</span>",e+="<br>",e+="</div>";return r+=e,console.log(i.data.value[o]),r},myChart.setOption(option)}),myChart.on("mouseout",function(a){var o=a.event.target.__dimIdx;o===void 0&&(option.tooltip.show=!1),myChart.setOption(option)});
