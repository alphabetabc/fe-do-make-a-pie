var xData=["2019-01-15","2019-01-30","2019-02-15","2019-02-28","2019-03-15","2019-03-30","2019-04-15","2019-04-30","2019-05-15","2019-05-30","2019-06-15","2019-06-30"];option={xAxis:[{type:"category",data:xData,splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{interval:function(e,a){return e===0||e===xData.length-1||e===parseInt((xData.length+1)/2)}}}],yAxis:[{type:"value",axisLabel:{formatter:function(e,a){return Number(e).toFixed(2)}},axisLine:{show:!1},axisTick:{show:!1},scale:!0},{type:"value",axisLabel:{formatter:function(e,a){return Number(e).toFixed(2)}},splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},scale:!0}],series:[{name:"2018EPS",type:"line",silent:!0,yAxisIndex:0,animation:!1,data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"2019EPS",type:"line",silent:!0,yAxisIndex:0,animation:!1,data:[2,4,8,16,32,64,128,144,120,60,10,20]},{name:"前复权股价",type:"line",yAxisIndex:1,silent:!0,animation:!1,data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]}]};