var optionParam={xAxisData:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],seriesData:[10,52,200,334,390,330,220],yAxisName:"y轴名称",barWidth:40},option={color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:[{type:"category",data:optionParam.xAxisData,axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}}}],yAxis:[{name:optionParam.yAxisName||"",type:"value",minInterval:1,axisLine:{lineStyle:{color:"rgba(107,107,107,0.37)"}}}],series:[{name:"参与项目",type:"bar",barWidth:optionParam.barWidth||30,data:optionParam.seriesData}]};
