var colors=["#5793f3","#8B7500"],xData=function(){for(var e=[],t=1;t<13;t++)e.push(t+"月");return e}();function toDecimal2(e){var t=parseFloat(e);if(isNaN(t))return!1;var r=Math.round(e*100)/100,a=r.toString(),l=a.indexOf(".");for(l<0&&(l=a.length,a+=".");a.length<=l+2;)a+="0";return a}var data1=[468,636,393,492,394,627,496,528,533,793,623,659],data2=function(){for(var e=[10.25],t=1;t<data1.length;t++)e.push(toDecimal2((data1[t]-data1[t-1])/data1[t-1]*100));return e}();option={title:{text:"违规企业趋势",textStyle:{fontSize:"15"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:80},legend:{data:["违法违规企业数","违规企业环比率"],align:"left",left:10,top:30},calculable:!0,xAxis:[{type:"category",axisLine:{lineStyle:{color:"#000"}},splitLine:{show:!1},axisTick:{show:!1},splitArea:{show:!1},axisLabel:{interval:0,textStyle:{fontSize:10}},data:xData}],yAxis:[{type:"value",name:"",min:0,max:1e3,position:"left",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} "}},{type:"value",name:"",position:"right",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} %"}}],series:[{name:"违法违规企业数",type:"bar",color:colors[0],barWidth:30,data:data1},{name:"违规企业环比率",color:colors[1],yAxisIndex:1,type:"line",itemStyle:{normal:{lineStyle:{width:3},opacity:.4}},data:data2}]};