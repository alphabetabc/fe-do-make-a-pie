var nameList=["开始","进度1","进度2","进度3","进度4","进度5","进度6"],len=nameList.length;option={backgroundColor:"#fff",yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1,color:"#999"},data:["进度"]},xAxis:{show:!0,axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{formatter:function(s,e){var a="";return nameList.forEach((o,r,t)=>{e===r&&(a=o)}),a}}},grid:{top:"40",right:"50",left:"80",bottom:"40"},series:[{zlevel:1,type:"bar",barWidth:"10px",barGap:"-100%",label:{show:!1,position:"right"},itemStyle:{normal:{color:"#2d82ff",barBorderRadius:[30,30,30,30]}},data:[{value:10}]},{type:"bar",barWidth:"10px",showBackground:!0,label:{show:!1,position:"right"},itemStyle:{normal:{color:"#30E4FF",barBorderRadius:[30,30,30,30]}},data:[{value:6}]}]};