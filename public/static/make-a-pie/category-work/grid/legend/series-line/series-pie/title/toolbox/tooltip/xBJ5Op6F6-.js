option={backgroundColor:"#404A59",color:["#ffd285","#ff733f","#ec4863"],title:[{text:"各银行确认情况",left:"1%",top:"6%",textStyle:{color:"#fff"}},{text:"一致性占比",left:"83%",top:"6%",textAlign:"center",textStyle:{color:"#fff"}}],tooltip:{trigger:"axis"},legend:{x:300,top:"7%",textStyle:{color:"#ffd285"},data:["一致性确认条数","一致性确认金额"]},grid:{left:"1%",right:"35%",top:"16%",bottom:"6%",containLabel:!0},toolbox:{show:!1,feature:{saveAsImage:{}}},xAxis:{type:"category",axisLine:{lineStyle:{color:"#FF4500"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff"}},boundaryGap:!1,data:["工行","农行","中行","建行","兴业","邮储"]},yAxis:{axisLine:{lineStyle:{color:"#fff"}},splitLine:{show:!0,lineStyle:{color:"#fff"}},axisTick:{show:!1},axisLabel:{textStyle:{color:"#fff"}},type:"value"},series:[{name:"一致性确认条数",smooth:!0,type:"line",symbolSize:8,symbol:"circle",data:[7372,1995,1705,2265,4132,7135],show:!1},{name:"一致性确认金额",type:"line",symbolSize:8,symbol:"circle",data:[50358,7549,15195,31309,36387,6515],show:!1},{type:"pie",center:["83%","33%"],radius:["25%","30%"],label:{normal:{position:"center"}},data:[{value:335,name:"总确认情况",itemStyle:{normal:{color:"#ffd285"}},label:{normal:{formatter:"{d} %",textStyle:{color:"#ffd285",fontSize:20}}}},{value:180,name:"占位",tooltip:{show:!1},itemStyle:{normal:{color:"#87CEFA"}},label:{normal:{textStyle:{color:"#ffd285"},formatter:`
一致性确认条数`}}}]},{type:"pie",center:["83%","72%"],radius:["25%","30%"],label:{normal:{position:"center"}},data:[{value:435,name:"用户来源分析",itemStyle:{normal:{color:"#ff733f"}},label:{normal:{formatter:"{d} %",textStyle:{color:"#ff733f",fontSize:20}}}},{value:100,name:"占位",tooltip:{show:!1},itemStyle:{normal:{color:"#87CEFA"}},label:{normal:{textStyle:{color:"#FF4500"},formatter:`
一致性确认金额`}}}]}]};
