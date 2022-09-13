option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},legend:{data:["柱1","柱2","线1","线2"]},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"水量",axisLabel:{formatter:"{value} ml"}},{type:"value",name:"温度",position:"right",axisLabel:{formatter:"{value} °C"}}],series:[{name:"柱1",type:"bar",barMaxWidth:"30px",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3],z:3},{name:"柱2",type:"bar",barMaxWidth:"30px",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3],z:3},{xAxisIndex:1,name:"柱1",type:"line",yAxisIndex:1,data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]},{xAxisIndex:1,name:"柱2",type:"line",yAxisIndex:1,data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]}]},option.xAxis[1]={type:"value",max:option.xAxis[0].data.length*100,show:!1},option.series[2].data=option.series[2].data.map((e,t)=>[27+t*100,e]),option.series[3].data=option.series[3].data.map((e,t)=>[73+t*100,e]),myChart.setOption(option),myChart.on("legendselectchanged",function(e){var t=myChart.getOption();e.selected.柱1==!0&&e.selected.柱2==!0?(t.series[2].data=[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2].map((a,i)=>[27+i*100,a]),t.series[3].data=[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2].map((a,i)=>[73+i*100,a])):e.selected.柱1==!0&&e.selected.柱2==!1?t.series[2].data=[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2].map((a,i)=>[50+i*100,a]):e.selected.柱1==!1&&e.selected.柱2==!0&&(t.series[3].data=[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2].map((a,i)=>[50+i*100,a])),myChart.clear(),myChart.resize(),myChart.setOption(t)});