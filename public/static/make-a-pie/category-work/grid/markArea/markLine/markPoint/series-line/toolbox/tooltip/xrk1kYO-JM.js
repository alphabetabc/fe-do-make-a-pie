var lineColor="#189cbb",xAxisData=["1","2","3","4","5","6","7","8","9","10","11","12"],seriesData=[36,45,30,45,50,33,60,65,55,60,90,72],minData="15%",maxData="55%",markArea={silent:!0,label:{normal:{position:["10%","50%"]}},data:[[{name:"差",yAxis:0,itemStyle:{normal:{color:"rgba(70,40,53,0.5)"}},label:{normal:{color:"#eb297d",fontSize:18}}},{yAxis:200}],[{name:"良",yAxis:60,itemStyle:{normal:{color:"rgba(11,78,112,0.5)"}},label:{normal:{color:"#2bff8f",fontSize:18,offset:[0,40]}}},{yAxis:300}],[{name:"优",yAxis:80,itemStyle:{normal:{color:"rgba(124,97,22,0.5)"}},label:{normal:{color:"#ffc72b",fontSize:18}}},{yAxis:400}]]};option={tooltip:{show:!1,trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#185164"}}},backgroundColor:"#031f2d",color:["#3dd3f8","#eb297d"],grid:{left:"3%",right:"6%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,axisLabel:{textStyle:{color:lineColor,fontSize:18}},axisTick:{lineStyle:{color:lineColor}},axisLine:{lineStyle:{color:lineColor}},splitLine:{lineStyle:{color:lineColor,type:"dashed"}},name:"月份",nameTextStyle:{color:"#fff",fontSize:18,padding:[0,0,0,10]},data:xAxisData},yAxis:{type:"value",axisLabel:{textStyle:{color:lineColor,fontSize:18}},axisTick:{lineStyle:{color:lineColor}},axisLine:{lineStyle:{color:lineColor}},splitLine:{lineStyle:{color:lineColor,type:"dashed"},show:!1},name:"分数线",nameTextStyle:{color:"#fff",fontSize:18,padding:[0,0,15,0]}},series:[{name:"通过率",type:"line",stack:"总量",smooth:!0,data:seriesData,symbol:"none",markPoint:{data:[{type:"max",name:"通过率",symbolSize:[70,65],itemStyle:{normal:{color:"#fab800"}},label:{normal:{formatter:maxData,show:!0,textStyle:{fontSize:"16",fontWeight:"bold",color:"#fff"}}}},{type:"min",name:"未通过率",symbolSize:[70,65],itemStyle:{normal:{color:"#eb297d"}},label:{normal:{formatter:minData,show:!0,textStyle:{fontSize:"16",fontWeight:"bold",color:"#fff"}}}}]},markLine:{symbol:"none",data:[{type:"min",coord:[0,0],lineStyle:{normal:{color:"#fff",type:"dashed"}}},{type:"min",coord:[0,0],lineStyle:{normal:{color:"#fff",type:"dashed"}}}]},markArea},{name:"未通过率",type:"line",stack:"总量"}]};
