var ydata=[{name:"工种1",value:13},{name:"工种2",value:25},{name:"工种3",value:27},{name:"工种4",value:30},{name:"工种5",value:20}],color=["#BC8DEE","#8693F3","#89C3F8","#F2A695","#FCC667","#AEB7F9","#748BFA"],xdata=["工种1","工种2","工种3","工种4","工种5"];option={backgroundColor:"rgba(255,255,255,1)",color,legend:{orient:"vartical",x:"left",top:"40%",left:"80%",bottom:"0%",data:xdata,itemWidth:20,itemHeight:14,itemGap:15,formatter:function(e){return"   "+e}},series:[{name:"违规次数",type:"pie",clockwise:!1,minAngle:20,radius:["30%","58%"],center:["35%","50%"],avoidLabelOverlap:!1,itemStyle:{normal:{borderColor:"#ffffff",borderWidth:10}},label:{normal:{show:!1,position:"center",formatter:`{text|{b}}
{value|{d}%}`,rich:{text:{color:"#666",fontSize:14,align:"center",verticalAlign:"middle",padding:5},value:{color:"#8693F3",fontSize:24,align:"center",verticalAlign:"middle"}}},emphasis:{show:!0,textStyle:{fontSize:46}}},data:ydata}]},myChart.setOption(option),setTimeout(function(){myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0}),myChart.on("mouseover",function(e){e.name==ydata[0].name?myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0}):myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:0})}),myChart.on("mouseout",function(e){myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:0})})},1e3);