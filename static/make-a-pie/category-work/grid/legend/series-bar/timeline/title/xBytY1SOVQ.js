var myData=["FE-3AC","FE-4KA","FE-5A","FE-7","FE-7A","FE-S1","GX6","KC-1B","KC-2","KC-2HB","NL-3A"],databeast={7:[10005,0,13920,0,3106,9469,584,150,241,249,17970]},databeauty={7:[40930,0,67530,0,6682,25074,2129,143,917,832,74638]},timeLineData=[1,2,3,4,5,6,7,8,9,10,11,12];option={baseOption:{backgroundColor:"#000",timeline:{show:!1,axisType:"category",autoPlay:!1,currentIndex:6,playInterval:3e6,label:{normal:{show:!1,interval:"auto",formatter:"{value}月"}},data:[]},title:{textStyle:{color:"#fff",fontSize:16}},legend:{data:["男","女"],top:4,right:"20%",textStyle:{color:"#fff"}},grid:[{show:!1,left:"4%",top:60,bottom:60,containLabel:!0,width:"40%"},{show:!1,left:"50.5%",top:80,bottom:60,width:"0%"},{show:!1,right:"4%",top:60,bottom:60,containLabel:!0,width:"40%"}],xAxis:[{type:"value",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!0,textStyle:{color:"#B2B2B2",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#1F2022",width:1,type:"solid"}}},{gridIndex:1,show:!1},{gridIndex:2,type:"value",axisLine:{show:!1},axisTick:{show:!1},position:"top",axisLabel:{show:!0,textStyle:{color:"#B2B2B2",fontSize:12}},splitLine:{show:!0,lineStyle:{color:"#1F2022",width:1,type:"solid"}}}],yAxis:[{type:"category",inverse:!0,position:"right",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,margin:8,textStyle:{color:"#9D9EA0",fontSize:12}},data:myData},{gridIndex:1,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,textStyle:{color:"#9D9EA0",fontSize:12}},data:myData.map(function(e){return{value:e,textStyle:{align:"center"}}})},{gridIndex:2,type:"category",inverse:!0,position:"left",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,textStyle:{color:"#9D9EA0",fontSize:12}},data:myData}],series:[]},options:[]};for(var i=0;i<timeLineData.length;i++)option.options.push({title:{text:"已卖车辆车主性别分布"},series:[{name:"男",type:"bar",barGap:20,barWidth:20,label:{normal:{show:!1},emphasis:{show:!0,position:"left",offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:"#659F83"},emphasis:{color:"#08C7AE"}},data:databeast[timeLineData[i]]},{name:"女",type:"bar",barGap:20,barWidth:20,xAxisIndex:2,yAxisIndex:2,label:{normal:{show:!1},emphasis:{show:!0,position:"right",offset:[0,0],textStyle:{color:"#fff",fontSize:14}}},itemStyle:{normal:{color:"#F68989"},emphasis:{color:"#F94646"}},data:databeauty[timeLineData[i]]}]});