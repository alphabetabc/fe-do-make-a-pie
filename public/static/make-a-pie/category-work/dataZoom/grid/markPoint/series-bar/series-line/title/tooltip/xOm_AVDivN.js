var data2=[[3,16.2],[6,32.3],[9,19.4],[12,25.5],[15,19.3],[18,25],[21,29],[24,27],[27,29],[30,18],[33,24],[36,12],[39,12],[42,16],[45,12],[48,9],[51,9],[54,2],[57,5],[60,5],[63,3],[66,8],[69,5],[72,2],[75,5],[78,2],[81,1],[84,4],[87,2],[90,3],[93,2],[96,3],[99,5],[102,0],[105,2],[108,3],[111,3],[114,1],[117,0],[120,2],[121,2]],testData=[16,32,19,25,19,25,29,27,29,18,24,12,12,16,12,9,9,2,5,5,3,8,5,2,5,2,1,4,2,3,2,3,5,0,2,3,3,1,0,2],firstData=[3,6,9,12,15,18,21,24,27,30,33,36,39,42,45,48,51,54,57,60,63,66,69,72,75,78,81,84,87,90,93,96,99,102,105,108,111,114,117,120],myRegression=ecStat.regression("polynomial",data2,5);console.log(myRegression),myRegression.points.sort((t,e)=>t[0]-e[0]),myChart.setOption({title:{text:myRegression.expression,left:"center",top:21},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},xAxis:{type:"category",splitLine:{lineStyle:{type:"dashed"}}},yAxis:{type:"value",splitLine:{lineStyle:{type:"dashed"}}},dataZoom:[{type:"slider"},{type:"inside"}],series:[{name:"bar",type:"bar",label:{emphasis:{show:!0}},data:data2},{name:"line",type:"line",showSymbol:!1,smooth:!0,data:myRegression.points,markPoint:{itemStyle:{normal:{color:"transparent"}},label:{normal:{show:!0,position:"top",formatter:myRegression.expression,textStyle:{color:"#333",fontSize:14}}},data:[{coord:myRegression.points[myRegression.points.length-1]}]}}]});