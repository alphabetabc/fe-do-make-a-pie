let xData=["华北","华东","东北","西北","西南","中南","乌鲁木齐"],data=[13,13,13,16,17,15,15],maxPlanCourseCnt=Math.max.apply(null,data);var option={backgroundColor:"#004b73",tooltip:{show:"true",trigger:"item",backgroundColor:"rgba(0,0,0,0.7)",padding:[8,10],extraCssText:"box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);"},grid:{left:"5%",right:"5%",top:30,bottom:"20%"},xAxis:[{type:"category",axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#a8e7ff"}},axisLabel:{inside:!1,textStyle:{color:"#6df8f0",fontWeight:"normal",fontSize:"12"}},data:xData}],yAxis:{type:"value",show:!1,max:maxPlanCourseCnt,axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#32346c"}},splitLine:{show:!0,lineStyle:{color:"#32346c "}},axisLabel:{textStyle:{color:"#bac0c0",fontWeight:"normal",fontSize:"12"},formatter:"{value}名"}},series:[{name:"",type:"bar",label:{normal:{show:!0,color:"#9fcded",position:"top",fontSize:"12"}},itemStyle:{normal:{show:!0,color:"#6df8f0",barBorderRadius:50,borderWidth:0,shadowBlur:15,shadowColor:"rgba(105,123, 214, 0.7)"}},zlevel:2,barWidth:"15px",data}]};