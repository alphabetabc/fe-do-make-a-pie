for(var category=[],dottedBase=+new Date,lineData=[],barData1=[],barData2=[],i=0;i<30;i++){var date=new Date(dottedBase+=864e5);category.push([date.getFullYear(),date.getMonth()+1,date.getDate()].join("-"));var b=Math.random()*200,d=Math.random()*-200;barData1.push(b),barData2.push(d)}option={tooltip:{trigger:"axis",axisPointer:{type:"shadow",label:{show:!0,backgroundColor:"#333"}}},grid:{left:"2%",right:"4%",bottom:"1%",top:"24%",containLabel:!0},legend:{data:["能源购进","能源消费","能源强度"],textStyle:{color:"#ccc"}},xAxis:[{type:"category",boundaryGap:!0,axisLine:{show:!0,lineStyle:{color:"#D9D9D9"}},axisLabel:{show:!0,textStyle:{padding:[2,0,0,0],color:"#333"}},axisTick:{show:!1},axisPointer:{type:"shadow"},data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",name:"单位：万吨标准煤",axisLabel:{textStyle:{color:"#666"}},nameTextStyle:{align:"left",padding:[0,0,0,-30]},splitLine:{lineStyle:{type:"solid",color:"#E9E9E9"}},axisLine:{show:!1},axisTick:{show:!1}},{type:"value",name:"吨/万元",min:0,max:40,axisLabel:{textStyle:{color:"#666"}},splitLine:{lineStyle:{type:"solid",color:"#E9E9E9"}},axisLine:{show:!1},axisTick:{show:!1}}],series:[{name:"能源购进",type:"bar",stack:"总量",barWidth:10,itemStyle:{normal:{barBorderRadius:50,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#00ce9f"},{offset:1,color:"#2af8ad"}])}},data:barData1},{name:"能源消费",type:"bar",stack:"总量",barWidth:10,itemStyle:{normal:{barBorderRadius:50,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#8f55e7"},{offset:1,color:"#4932f8"}])}},data:barData2},{name:"能源强度",type:"line",yAxisIndex:1,itemStyle:{color:"#ffb11a"},data:[1,2.2,3.3,8.5,12.3,20.2,28.3,33.4,33,26.5,12,6.2]}]};