let resultList=[{NAME:"未解除",COUNT:100},{NAME:"已解除",COUNT:1}],colorList=["rgba(230,0,18,1)","rgba(19,181,177,1)"],animateBgColor="#09354d",noDataColor="rgba(9,53,77,0.4)",listOut=[],listCenter=[],listAnimate=[],legendState=!0,innerRadius=["0","30%"],centerRadius=["40%","68%"],outRadius=["68%","72%"],animateRadius=["74%","76%"],animateSplitNum=4,animateState=!0,total=0,labelLineState=!0,labelLength=10,labelLength2=20,legendData=[];for(let e in resultList)total+=resultList[e].COUNT;let placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},rich={white:{align:"center",padding:[3,0]}},splitNum=100;if(resultList.length==1&&(splitNum=1e10),total==0){let e=[{value:0,name:"",itemStyle:{normal:{color:noDataColor}}}];listOut=[...listOut,...e],listCenter=[...listCenter,...e]}else for(let e in resultList){legendData.push(resultList[e].NAME);let l=[{value:resultList[e].COUNT,name:resultList[e].NAME,itemStyle:{normal:{color:colorList[e]}}}],t=[{value:resultList[e].COUNT,name:resultList[e].NAME,itemStyle:{normal:{color:colorList[e]}}},{value:total/splitNum,name:"",itemStyle:placeHolderStyle}],a=[{value:resultList[e].COUNT,name:resultList[e].NAME,itemStyle:{normal:{color:colorList[e],opacity:.2}}}],o=[{value:resultList[e].COUNT,name:resultList[e].NAME,itemStyle:{normal:{color:colorList[e],opacity:.2}}},{value:total/splitNum,name:"",itemStyle:placeHolderStyle}];resultList[e].COUNT==0?(listOut=[...listOut,...l],listCenter=[...listCenter,...a]):(listOut=[...listOut,...t],listCenter=[...listCenter,...o])}for(let e=0;e<animateSplitNum;e++)listAnimate.push({value:20,name:e,itemStyle:{normal:{color:animateBgColor}}},{value:1,name:"",itemStyle:placeHolderStyle});let func=e=>{let l=(e.value/total*100).toFixed(1),t=e.name.replace(/\n/g,"");return e.name!==""?t+e.value+`
{white|`+l+"%}":""};option={backgroundColor:"#04243E",tooltip:{show:!0,trigger:"item",formatter:e=>{if(console.log(e),e.data.name==""||e.seriesName=="最内层"||e.seriesName=="动画部分"||total==0)return"";{let l="";resultList.map((r,i)=>{r.NAME==e.name&&(l=colorList[i])});let t=e.value/total*100;return parseInt(t)!=parseFloat(t)&&(t=t.toFixed(2)),`${`<div style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${l};'></div>`}${e.name}<br>${e.value}(${t}%)`}}},legend:{show:legendState,orient:"vertical",data:legendData,icon:"circle",left:"5px",top:"10px",textStyle:{fontSize:20,color:"#fff"}},series:[{name:"动画部分",type:"pie",label:{normal:{show:!1}},labelLine:{normal:{show:!1}},center:["50%","50%"],radius:animateRadius,hoverAnimation:!1,itemStyle:{normal:{label:{show:!1},labelLine:{show:!1}}},data:animateState?listAnimate:[]},{name:"最外层",type:"pie",clockWise:!1,zlevel:3,center:["50%","50%"],radius:outRadius,hoverAnimation:!1,itemStyle:{normal:{label:{show:labelLineState,position:"outside",formatter:func,rich},labelLine:{length:labelLength,length2:labelLength2,show:labelLineState}}},data:listOut,animationType:"scale",animationEasing:"elasticOut",animationDelay:function(e){return e*50}},{name:"中间层",type:"pie",clockWise:!1,center:["50%","50%"],radius:centerRadius,hoverAnimation:!1,itemStyle:{normal:{label:{show:!1},labelLine:{show:!1}}},data:listCenter},{name:"最内层",type:"pie",hoverAnimation:!1,radius:innerRadius,center:["50%","50%"],labelLine:{normal:{show:!1}},data:[{value:total,name:"",label:{normal:{show:!0,position:"center",color:"#fff",formatter:e=>e.value,fontSize:28}},itemStyle:{normal:{color:new echarts.graphic.RadialGradient(.5,.5,.99,[{offset:0,color:"rgb(0, 0, 0, 0)"},{offset:1,color:"#d7eaf5"}],!1)}}}]}]},setTimeout(loop,1e3);function loop(){let e=myChart.getOption();e.series[0].startAngle=e.series[0].startAngle-1,myChart.setOption(e),setTimeout(function(){window.requestAnimationFrame(loop)},50)}
