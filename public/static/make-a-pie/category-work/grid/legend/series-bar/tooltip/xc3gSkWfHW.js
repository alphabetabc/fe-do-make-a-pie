var chartData1=[500,831,731],chartDara2=[250,50,51],chartData3=[250,221,230],chartY=["2015年","2016年","2017年"],chartX=["总资产","流动资产","非流动资产"],chartColor=["#333399","#6699ff","#993333"];option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:"5%",data:["总资产","流动资产","非流动资产"]},grid:{left:"5%",right:"5%",bottom:"10%",top:"10%",containLabel:!0},xAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},yAxis:{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0},splitLine:{show:!1},data:chartY},series:[{name:chartX[0],barWidth:"20%",type:"bar",stack:"总资产",itemStyle:{normal:{color:chartColor[0]}},data:chartData1},{name:chartX[1],barWidth:"20%",type:"bar",stack:"资产明细",itemStyle:{normal:{color:chartColor[1]}},data:chartDara2},{name:chartX[2],barWidth:"20%",type:"bar",stack:"资产明细",itemStyle:{normal:{color:chartColor[2]}},data:chartData3}]};
