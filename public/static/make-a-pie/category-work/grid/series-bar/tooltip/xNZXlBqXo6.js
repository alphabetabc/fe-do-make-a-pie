var ovrData=[{name:"校纪校规",data:80},{name:"文明礼仪文明礼仪",data:120},{name:"作息出勤作息出勤作息出勤",data:310},{name:"体锻课",data:100},{name:"劳动卫生劳动卫生劳动卫生劳动卫生",data:60},{name:"大课间",data:500}],legendData=[],seriesData=[];ovrData.map(function(t,a){legendData.push(t.name),seriesData.push(t.data)}),ovrData={name:"总计",type:"bar",barWidth:"60%",data:seriesData.sort(function(t,a){return a-t})},option={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"5%",right:"5%",bottom:"5%",containLabel:!0},xAxis:{triggerEvent:!0,type:"category",axisLine:{},axisTick:{show:!1},data:legendData,axisLabel:{show:!0,textStyle:{color:"#333"},formatter:function(t){return t.length>4?t.slice(0,4)+"...":t}}},yAxis:{splitNumber:5,axisLine:{},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{width:1}},axisLabel:{show:!0,textStyle:{color:"#333"}}},series:[ovrData]};
