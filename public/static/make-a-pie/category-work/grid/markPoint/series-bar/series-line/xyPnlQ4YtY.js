option={xAxis:{type:"value",min:0,max:100,maxInterval:1,axisLine:{lineStyle:{color:"#65a6e3",width:10}},splitLine:{show:!1},axisLabel:{color:"#606060",margin:19,formatter:function(e){if(e==5)return"P5";if(e==50)return"中位数";if(e==95)return"P95"}}},yAxis:{type:"value",show:!1},series:[{type:"line",data:[],clip:!1,markPoint:{type:"min",symbol:"triangle",symbolSize:10,symbolOffset:[0,10],itemStyle:{color:"#65a6e3"},data:[{coord:[5,0]}]}},{type:"line",data:[],clip:!1,markPoint:{type:"min",symbol:"triangle",symbolSize:10,symbolOffset:[0,10],itemStyle:{color:"#65a6e3"},data:[{coord:[50,0]}]}},{type:"line",data:[],clip:!1,markPoint:{type:"min",symbol:"triangle",symbolSize:10,symbolOffset:[0,10],itemStyle:{color:"#65a6e3"},data:[{coord:[95,0]}]}},{type:"bar",data:[0,10],barWidth:2,itemStyle:{color:"#373737"},markPoint:{symbol:"rect",symbolOffset:[0,-13],symbolSize:20,itemStyle:{color:"#ffa47f"},data:[{coord:[10,0],value:38}]}}]};