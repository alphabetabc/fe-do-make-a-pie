var option={backgroundColor:"#12234F",grid:{top:"3%",left:"5%",right:"8%",bottom:"6%",containLabel:!0},yAxis:[{type:"category",data:["试运行、移交","施工阶段","施工准备","勘察设计"],axisTick:{show:!1},axisLine:{lineStyle:{color:"#225b9e"}},axisLabel:{rotate:30,color:"white"}}],color:"#54fbc3",xAxis:[{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#225b9e"}},splitLine:{show:!1},axisLabel:{show:!0,color:"white"},max:1e3}],series:[{type:"bar",itemStyle:{normal:{color:"rgba(255,255,255,0.1)"}},barGap:"-100%",data:[1e3,1e3,1e3,1e3],barWidth:25,animation:!1},{name:"辅助",type:"bar",stack:"总",barWidth:25,itemStyle:{normal:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[945,75,30,0]},{name:"试运行,移交",type:"bar",barWidth:20,stack:"总",data:[20,"","",""],label:{normal:{formatter:"20天",show:!0,position:"right",textStyle:{color:"#FFFFFF",fontSize:12}}}},{name:"施工阶段",type:"bar",barWidth:20,stack:"总",data:["",870,"",""],label:{normal:{formatter:"935天",show:!0,position:"right",textStyle:{color:"#FFFFFF",fontSize:12}}}},{name:"施工准备",type:"bar",barWidth:20,stack:"总",data:["","",45,""],label:{normal:{formatter:"45天",show:!0,position:"right",textStyle:{color:"#FFFFFF",fontSize:12}}}},{name:"勘察设计",type:"bar",barWidth:20,stack:"总",data:["","","",30],label:{normal:{formatter:"30天",show:!0,position:"right",textStyle:{color:"#FFFFFF",fontSize:12}}}}]};
