var ovrData=[{name:"校纪校规",data:[320,332,301,334,390,330,320]},{name:"体锻课",data:[120,132,101,134,90,230,210]},{name:"作息出勤",data:[220,182,191,234,290,330,310]},{name:"艺术素养",data:[150,232,201,154,190,330,410]},{name:"社会实践",data:[457,652,345,241,167,220,423]}],legendData=[],honorXAxisData=["高2019级","高2018级","高2017级","高2016级","高2015级"];ovrData.map(function(a,t){legendData.push(a.name),a.type="bar",a.stack="OVR",a.barWidth=35}),option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},color:["#ec407a","#26aaff","#7156ff","#05ce91","#ffc194"],legend:{y:"bottom",itemGap:25,textStyle:{color:"#333"},data:legendData},grid:{left:"5%",right:"5%",bottom:"5%",containLabel:!0},xAxis:{axisLine:{},axisTick:{show:!1},data:honorXAxisData,axisLabel:{show:!0,textStyle:{color:"#333"}}},yAxis:{axisLine:{},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{color:"#e6ecfd",width:1}},axisLabel:{show:!0,textStyle:{color:"#666"}}},series:ovrData};
