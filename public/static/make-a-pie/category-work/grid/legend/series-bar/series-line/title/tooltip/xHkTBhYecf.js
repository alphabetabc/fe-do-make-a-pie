var colors=["#5793f3","#006400"],xData=function(){for(var t=[],e=1;e<13;e++)t.push(e+"月");return t}();option={title:{text:"企业检查趋势",textStyle:{fontSize:"15"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:80},legend:{data:["检查企业数","检查企业环比率"],align:"left",left:10,top:30},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#000"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,textStyle:{fontSize:15}},data:xData}],yAxis:[{type:"value",name:"",min:0,max:1500,position:"left",axisLine:{lineStyle:{color:colors[0]}},axisLabel:{formatter:"{value} "}},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:colors[1]}},axisLabel:{formatter:"{value} %"}}],series:[{name:"检查企业数",type:"bar",color:colors[0],barWidth:30,data:[756,627,998,797,978,947,717,993,620,845,855,741]},{name:"检查企业环比率",color:colors[1],yAxisIndex:1,type:"line",itemStyle:{normal:{lineStyle:{width:3},opacity:.4}},data:[5,3,8,4,7,4,9,0,3,6,2,1]}]};