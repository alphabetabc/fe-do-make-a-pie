let xData=["松山湖","南城","东城","莞城","万江","大朗","大岭山","茶山","道滘","厚街"],yData=[2900,2700,2500,2300,2100,1900,1700,1500,1300,1100],pictorialData=[];yData.map(e=>{pictorialData.push({value:e,symbolPosition:"end"})}),option={backgroundColor:"rgba(0,0,0,.5)",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:[{type:"category",data:xData,axisTick:{alignWithLabel:!0},axisLabel:{rotate:30,textStyle:{fontSize:"90%",color:"#fff"}},axisLine:{show:!1},axisTick:!1}],yAxis:[{type:"value",name:"单位",nameTextStyle:{color:"#fff",fontSize:"90%",padding:[0,0,0,-45]},splitLine:{lineStyle:{color:"rgba(255,255,255, .1)"}},axisLabel:{textStyle:{fontSize:"90%",color:"#fff"}},axisLine:{show:!1},axisTick:!1}],series:[{type:"pictorialBar",symbol:"rect",symbolSize:[40,3],symbolOffset:[0,0],itemStyle:{color:"#4afefc"},tooltip:{show:!1},data:pictorialData},{type:"bar",barWidth:40,data:yData,itemStyle:{color:e=>new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(74,254,252,.6)"},{offset:1,color:"rgba(74,254,252,0)"}])}}]};
