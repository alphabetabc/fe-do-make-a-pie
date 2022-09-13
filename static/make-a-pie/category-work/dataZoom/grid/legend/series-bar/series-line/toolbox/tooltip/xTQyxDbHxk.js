var colors=["#5470C6","#91CC75","#EE6666"];option={color:colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{right:"20%"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["蒸发量","降水量","平均温度"]},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",name:"蒸发量",min:0,max:250,position:"right",axisLine:{show:!0,lineStyle:{color:colors[0]}},axisLabel:{formatter:"{value} ml"}},{type:"value",name:"降水量",min:0,max:250,position:"right",offset:80,axisLine:{show:!0,lineStyle:{color:colors[1]}},axisLabel:{formatter:"{value} ml"}},{type:"value",name:"温度",min:0,max:25,position:"left",axisLine:{show:!0,lineStyle:{color:colors[2]}},axisLabel:{formatter:"{value} °C"}},{type:"category",name:"区间",position:"left",offset:50,data:["10以下","10~20","20~30","30~40","40~50","50~60","60~70","70~80","80~90","90~100","100以上"]}],series:[{name:"蒸发量",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"降水量",type:"bar",yAxisIndex:1,data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{name:"平均温度",type:"line",yAxisIndex:2,data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]}]};
