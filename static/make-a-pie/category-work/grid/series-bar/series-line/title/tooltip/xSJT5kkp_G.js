var colors=["#71e3fa","#32CD32"],xData=function(){for(var e=[],t=1;t<13;t++)e.push(t+"月");return e}();option={title:{text:"审批事项办理类型趋势分析",textStyle:{fontSize:"15"}},backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:"7%",bottom:"60%",left:"6%",right:"40%"},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#000"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,textStyle:{fontSize:10}},data:xData}],yAxis:[{type:"value",name:"",min:0,max:1500,position:"left",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} ",textStyle:{fontSize:10}}},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} %",textStyle:{fontSize:10}}}],series:[{name:"新办数",type:"bar",color:colors[0],barWidth:15,data:[764,954,879,997,758,857,984,845,803,873,790,996]},{name:"同比比率",color:colors[1],yAxisIndex:1,type:"line",itemStyle:{normal:{lineStyle:{width:3},opacity:.4}},data:[7.98,4.19,7.71,6.83,4.06,4.9,6.39,4.77,7.17,4.44,6.36,5.07]}]};
