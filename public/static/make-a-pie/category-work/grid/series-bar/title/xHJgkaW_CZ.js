var datas=[220,182,191,234,290],max=Math.max.apply(null,datas)/.85;option={title:{text:"Awesome Chart"},xAxis:{type:"value",max,splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"category",data:["Sun","Mon","Tusdfsfse","sdfsfsWed","Thu"],splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!0,margin:-30,align:"left",verticalAlign:"bottom",padding:[0,0,15,0]}},series:[{type:"bar",data:datas,barWidth:5,z:30,label:{normal:{show:!0,position:"left",offset:[650,-20],formatter:"{c}"}},itemStyle:{normal:{barBorderRadius:2}}},{type:"bar",data:[max,max,max,max,max],barWidth:2,barGap:"-70%",label:{normal:{show:!1}},itemStyle:{normal:{barBorderRadius:1}}}]};
