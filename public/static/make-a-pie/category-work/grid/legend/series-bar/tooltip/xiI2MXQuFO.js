var date=[];for(let e=1;e<=12;e++)date.push(e+"月");option={color:["#2777EC","#F7B500"],legend:{top:10,right:100,itemWidth:16,itemHeight:11,data:["用车申请","用车租赁"],icon:"rect"},tooltip:{trigger:"axis"},grid:{left:"3%",right:"4%",bottom:"13%",containLabel:!0},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"rgba(151, 151, 151, 1)"}},axisLabel:{show:!0,textStyle:{color:"#000"}},axisTick:{show:!1},data:date}],yAxis:[{type:"value",min:0,splitNumber:4,axisLine:{show:!0,lineStyle:{color:"rgba(151, 151, 151, 1)"}},axisLabel:{show:!0,textStyle:{color:"#000"}},axisTick:{show:!0,lineStyle:{color:"rgba(151, 151, 151, 1)"}},splitLine:{show:!1,lineStyle:{color:"rgba(226, 232, 236, 1)",type:"dashed"}},splitArea:{show:!0,areaStyle:{color:["#fff","rgba(245, 246, 250, 1)"]}}}],series:[{name:"用车申请",type:"bar",stack:"用车统计",barWidth:10,label:{show:!1,position:"insideRight"},data:[320,302,301,334,390,330,320,100,50,390,330,320]},{name:"用车租赁",type:"bar",stack:"用车统计",barWidth:10,label:{show:!1,position:"insideRight"},data:[320,302,301,334,390,330,320,302,301,334,390,330]}]};