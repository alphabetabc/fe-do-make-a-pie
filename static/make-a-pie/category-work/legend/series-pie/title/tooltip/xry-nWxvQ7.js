var colorList=["#F67474","#108AE5","#18C8DD","#ffa55d","#9c7de1","#5d9eff","#ffdb5d","#ee82ed","#8fca5f","#b995f5"],total={name:"上报材料统计"},originalData=[{value:70,name:"已上报"},{value:55,name:"已审批"},{value:25,name:"已归档"}];echarts.util.each(originalData,function(e,t){e.itemStyle={normal:{color:colorList[t]}}}),option={backgroundColor:"#fff",tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},legend:{icon:"circle",bottom:20,x:"center",data:["已上报","已审批","已归档"]},title:[{text:total.name,left:"50%",top:"50%",textAlign:"center",textBaseline:"middle",textStyle:{color:"#666",fontWeight:"normal",fontSize:30}}],series:[{hoverAnimation:!1,radius:[100,150],name:"pie",type:"pie",selectedMode:"single",selectedOffset:16,clockwise:!0,startAngle:90,label:{normal:{position:"inner",formatter:"{d}%",textStyle:{color:"#fff",fontWeight:"bold",fontSize:12}}},labelLine:{normal:{show:!1}},itemStyle:{normal:{borderWidth:10,borderColor:"#ffffff"},emphasis:{borderWidth:0,shadowBlur:5,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.2)"}},data:originalData}]},myChart.setOption(option,!0);