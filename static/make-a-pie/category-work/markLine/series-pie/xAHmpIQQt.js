var data=[{name:"已完成",value:9,itemStyle:{}},{name:"正在进行",value:10,itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#F97711"},{offset:1,color:"#F97711"}])}},{name:"未完成",value:0,itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#F0415F"},{offset:1,color:"#F0415F"}])}}],colorArr=["#23A6FF","#F97810","#E83D60"],sumValue=0;data.forEach(e=>sumValue+=e.value);var seriesData=[],index=data.length;for(let e=0;e<data.length;e++)index--,seriesData.push({name:"客户评价",type:"pie",clockWise:!1,hoverAnimation:!1,radius:[73-e*15+"%",68-e*15+"%"],center:["50%","50%"],label:{show:!1},labelLine:{show:!1},data:[{value:data[e].value,name:data[e].name},{value:sumValue-data[e].value,name:"背景区",itemStyle:{color:"#091961"},tooltip:{show:!1},hoverAnimation:!1},{value:sumValue/.75*.25,name:"透明区",itemStyle:{color:"rgba(0,0,0,0)"}}],markLine:{data:[[{name:(data[e].value/sumValue*100).toFixed(0)+"%",x:52+index*0+"%",y:"12%"},{x:52+index*0+"%",y:7*(e+2)+"%"}]],label:{color:colorArr[e]},lineStyle:{color:colorArr[e],opacity:0}},markPoint:{silent:!0,label:{fontSize:18},data:[{yAxis:6,x:52+index*0+"%",y:"12%",symbolSize:.1,label:{textStyle:{color:"#fff"},position:"right",formatter:"已完成"}}]}});option={backgroundColor:"#000A48",color:colorArr,tooltip:{trigger:"item",formatter:function(e){return e.componentSubType=="liquidFill"?"":""+e.name+"："+e.data.value+"项"}},series:seriesData};
