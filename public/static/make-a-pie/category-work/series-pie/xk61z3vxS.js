let bgColor="#20263f",fillColor="#2c6cc4",emptyColor="#24375c",echartData=[{value:2154,name:"正常用户",unit:"个"},{value:3854,name:"僵尸用户",unit:"个"}];option={backgroundColor:bgColor,series:[{name:"",type:"pie",radius:[70,80],itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},shadowBlur:0,shadowColor:"#203665"}},hoverAnimation:!1,data:[{value:echartData[0].value,label:{normal:{rich:{a:{color:fillColor,align:"center",fontSize:20,fontWeight:"bold"},b:{color:"#fff",align:"center",fontSize:16}},formatter:function(e){return`{b|在线统计}

{a|`+e.value+`}

{b|`+echartData[0].unit+"}"},position:"center",show:!0,textStyle:{fontSize:"14",fontWeight:"normal",color:"#fff"}}},itemStyle:{normal:{color:fillColor,shadowColor:fillColor,shadowBlur:0}}},{value:echartData[1].value,name:"invisible",itemStyle:{normal:{color:emptyColor},emphasis:{color:emptyColor}}}]}]};
