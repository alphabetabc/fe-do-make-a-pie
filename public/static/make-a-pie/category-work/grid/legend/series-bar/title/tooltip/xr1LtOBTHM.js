for(var xAxisData=["2018-01","2018-02","2018-03","2018-04","2018-05","2018-06","2018-07","2018-08","2018-09","2018-10","2018-11","2018-12"],legendData=["投诉量","解决量","投诉解决率"],title="多纵向堆积图折线图",serieData=[],metaDate=[[120,140,100,120,300,230,130,170,140,120,300,230],[200,120,300,200,170,300,200,180,200,190,300,200],[100,200,140,300,200,180,100,300,230,130,100,300]],v=0;v<legendData.length;v++){var serie={name:legendData[v],type:"bar",stack:"circle",symbolSize:10,data:metaDate[v]};serieData.push(serie)}var colors=["#036BC8","#4A95FF","#5EBEFC","#2EF7F3","#FFFFFF"],option={backgroundColor:"#0f375f",title:{text:title,textAlign:"left",textStyle:{color:"#fff",fontSize:"16",fontWeight:"normal"}},legend:{show:!0,left:"right",data:legendData,y:"5%",itemWidth:18,itemHeight:12,textStyle:{color:"#fff",fontSize:14}},color:colors,grid:{left:"2%",top:"10%",bottom:5,right:10,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#6173A3"}},axisLabel:{interval:0,textStyle:{color:"#9ea7c4",fontSize:14}},axisTick:{show:!1},data:xAxisData}],yAxis:[{axisTick:{show:!1},splitLine:{show:!1},axisLabel:{textStyle:{color:"#9ea7c4",fontSize:14}},axisLine:{show:!0,lineStyle:{color:"#6173A3"}}}],series:serieData};