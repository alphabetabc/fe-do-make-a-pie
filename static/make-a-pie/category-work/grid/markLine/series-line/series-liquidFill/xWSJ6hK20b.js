const data=[.6,.4];option={xAxis:{show:!1},yAxis:{show:!1},grid:{top:"2.5%",right:"40",bottom:"2.5%",left:0},series:[{type:"liquidFill",radius:"96%",center:["50%","50%"],data,label:{normal:{color:"#fff",textStyle:{fontSize:18},formatter:e=>{let t=e.value*100;return"工作进度"+t.toFixed(2)+"%"}}},outline:{show:!0,borderDistance:2,itemStyle:{borderColor:"#294D99",borderWidth:4,shadowBlur:"none"}}},{type:"line",markLine:{silent:!0,symbol:"",lineStyle:{color:"#f00",type:"solid"},data:[{yAxis:data[1]}]}}]};
