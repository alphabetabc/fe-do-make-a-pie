var xData=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月"];let itemName=["购进","消耗","库存"];option={backgroundColor:"#040811",legend:{top:20,center:!0,itemGap:20,itemHeight:12,textStyle:{color:"rgba(255, 255, 255,0.7)",fontSize:14},data:itemName},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#333"}}},grid:{top:65,left:30,right:30,bottom:30,containLabel:!0},calculable:!0,xAxis:[{type:"category",axisLabel:{interval:!1,color:"rgba(255, 255, 255,0.7)",textStyle:{fontSize:14}},axisLine:{lineStyle:{color:"rgba(255, 255, 255,0.7)"}},axisTick:{show:!1},splitArea:{show:!1},data:xData}],yAxis:[{type:"value",axisLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255,0.7)"}},axisTick:{show:!1},name:"(t)",nameTextStyle:{color:"rgba(255, 255, 255,0.7)",align:"left",fontSize:14,padding:[0,0,10,0]},axisLabel:{interval:!0,formatter:"{value}",color:"rgba(255, 255, 255,0.7)",textStyle:{fontSize:14}},splitNumber:6,splitLine:{show:!1,lineStyle:{type:"dashed",color:"rgba(255, 255, 255,0.7)"}}}],series:[{name:itemName[0],type:"bar",barMaxWidth:13,barGap:"60%",itemStyle:{normal:{color:"#00DEFF",barBorderRadius:[12,12,0,0]}},data:[36,28,32,25,28,41,22,23,28,60,51]},{name:itemName[1],type:"bar",barMaxWidth:13,itemStyle:{normal:{color:"#1B72FE",barBorderRadius:[12,12,0,0]}},data:[18,13,9,22,15,19,50,20,28,30,60]},{name:itemName[2],type:"line",smooth:!1,symbolSize:5,lineStyle:{normal:{width:2,color:"#EE8931"}},itemStyle:{normal:{color:"#EE8931",borderColor:"#333",borderWidth:1}},label:{normal:{show:!1}},data:[36,28,32,25,28,41,22,23,28,60,51]}]};
