const arr=[{name:"2021上学期",value:85,value2:80},{name:"2020下学期",value:90,value2:70},{name:"2020上学期",value:60,value2:82},{name:"2019下学期",value:73,value2:90},{name:"2019上学期",value:80,value2:80}];option={backgroundColor:"#323a5e",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"2%",right:"4%",bottom:"14%",top:"16%",containLabel:!0},legend:{data:["调课","停课"],right:10,top:12,textStyle:{color:"#fff"},itemWidth:20,itemHeight:12},xAxis:{type:"category",data:arr.map(e=>e.name),axisLine:{lineStyle:{color:"white"}},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei",color:"#fff"}},axisTick:{show:!0}},yAxis:{type:"value",axisLine:{show:!0,lineStyle:{color:"white"}},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLabel:{textStyle:{fontFamily:"Microsoft YaHei",color:"#fff"},formatter:function(e,a){return e+"节"}}},series:[{name:"调课",type:"bar",barWidth:30,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#02A7EF"},{offset:1,color:"#027FB6"}]),barBorderRadius:12}},data:arr.map(e=>e.value)},{name:"停课",type:"bar",barWidth:30,itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#71B703"},{offset:1,color:"#94F104"}]),barBorderRadius:12}},data:arr.map(e=>e.value2)}]};