var data=[10,20,40,60,80,100,120,100];option={title:{text:"单位/个",textStyle:{fontSize:12,fontWeight:"normal",color:"#65aaf1"},left:"2%"},color:["#004558"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:"{b} :{c}"},grid:{left:"5px",right:"5px",bottom:"5px",top:"50px",containLabel:!0},xAxis:[{type:"category",data:["空调","温湿度","配电","UPS","温湿度","烟感","漏水","空调"],axisTick:{alignWithLabel:!0,show:!1},axisLine:{show:!1},axisLabel:{interval:0,textStyle:{color:"#8fd5f3"}}}],yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#8fd5f3"}},splitLine:{show:!0,lineStyle:{color:"#0f3d65",width:1,type:"solid"}}},series:[{name:"动环资产",type:"bar",barWidth:"60%",itemStyle:{normal:{barBorderRadius:50,color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#01abff"},{offset:.5,color:"#0495fc"},{offset:1,color:"#087cf9"}])},emphasis:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#01abff"},{offset:.5,color:"#0495fc"},{offset:1,color:"#087cf9"}])}},data}]};