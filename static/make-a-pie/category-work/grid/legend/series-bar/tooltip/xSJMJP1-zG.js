app.title="正负条形图",option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["中立","负面","正面"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"value"}],yAxis:[{type:"category",axisTick:{show:!1},data:["教育局","教师","教材","国家","学生","学校"]}],series:[{name:"中立",type:"bar",label:{normal:{show:!0,position:"inside"}},data:[30,25,7,6,6]},{name:"正面",type:"bar",stack:"总量",label:{normal:{show:!0}},data:[7,6,22,6,14,6]},{name:"负面",type:"bar",stack:"总量",label:{normal:{show:!0,position:"left"}},data:[-87,-5,-22,-24,-14,-6]}]};