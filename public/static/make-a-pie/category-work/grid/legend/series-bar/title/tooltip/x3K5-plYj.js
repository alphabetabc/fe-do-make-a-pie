var option={title:{text:"签约类型统计",x:"left",padding:[12,0,0,0],textStyle:{fontSize:14,fontWeight:"bolder",color:"#333"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["总签约","新增签约"],x:"right",padding:[12,15,0,0]},grid:{left:"3%",right:"4%",bottom:"10%",top:"25%",containLabel:!0},xAxis:[{type:"category",data:["健康人群","高危人群","慢性病人群","老年人群"]}],yAxis:[{name:"单位(人)",type:"value",interval:150}],series:[{name:"总签约",type:"bar",barWidth:15,itemStyle:{normal:{color:"#87cefa"}},label:{normal:{show:!0,position:"top"}},data:[620,732,701,734]},{name:"新增签约",type:"bar",barWidth:15,itemStyle:{normal:{color:"#ff7f50"}},label:{normal:{show:!0,position:"top"}},data:[120,132,101,134]}]};