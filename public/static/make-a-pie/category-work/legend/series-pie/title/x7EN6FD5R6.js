let color=["#83a1c5","#45d7ff"],data={bracelet:[{name:"正在使用",value:18},{name:"未使用",value:82}],mattress:[{name:"正在使用",value:45},{name:"未使用",value:55}]};option={backgroundColor:"#031930",title:[{text:"{img|手环}",textStyle:{rich:{img:{color:"red",backgroundColor:{image:""},align:"center"}}},top:"15%",left:"21%"},{text:`智能工作手表
使用率`,textStyle:{color:"#82a1c4"},textAlign:"center",top:"15%",left:"30%"},{text:"{img|床垫}",textStyle:{rich:{img:{color:"red",backgroundColor:{image:""},align:"center"}}},top:"15%",left:"61%"},{text:`智能检测床垫
使用率`,textStyle:{color:"#82a1c4"},textAlign:"center",top:"15%",left:"70%"}],legend:{data:["正在使用","未使用"],orient:"horizontal",bottom:"20%",itemWidth:14,itemHeight:14,textStyle:{color:"#82a1c4"},selectedMode:!1},series:[{type:"pie",data:data.bracelet,silent:!0,center:["30%","50%"],radius:"40%",label:{show:!0,position:"inside",formatter:function(t){return t.value+"%"},color:"#111"},labelLine:{show:!1}},{type:"pie",data:data.mattress,silent:!0,center:["70%","50%"],radius:"40%",label:{show:!0,position:"inside",formatter:function(t){return t.value+"%"},color:"#111"},labelLine:{show:!1}},{type:"pie",silent:!0,center:["30%","50%"],radius:"44%",label:{show:!1},data:[100],labelline:{show:!1},itemStyle:{color:"#022d52"},z:-1},{type:"pie",silent:!0,center:["70%","50%"],radius:"44%",label:{show:!1},data:[100],labelLine:{show:!1},itemStyle:{color:"#022d52"},z:-1}],color};function vdata(){let t=100,l=100;for(let e=0;e<data.bracelet.length;e++)e===data.bracelet.length-1?(data.bracelet[e].value=t,data.mattress[e].value=l):(data.bracelet[e].value=Math.floor(Math.random()*t+1),data.mattress[e].value=Math.floor(Math.random()*l+1),t=t-data.bracelet[e].value,l=l-data.mattress[e].value);option.series[0].data=data.bracelet,option.series[1].data=data.mattress,myChart.setOption(option,!0)}setInterval(function(){vdata()},1e3);