var colorList=["#59c5a7","#51b8fe","#fa827d"],total={name:"总评论数",value:"300"},originalData=[{value:102,name:"1"},{value:136,name:"0"},{value:62,name:"-1"}];echarts.util.each(originalData,function(e,t){e.itemStyle={normal:{color:colorList[t]}}}),option={title:[{text:total.name,left:"49%",top:"46%",textAlign:"center",textBaseline:"middle",textStyle:{color:"#999",fontWeight:"normal",fontSize:20}},{text:total.value,left:"49%",top:"51%",textAlign:"center",textBaseline:"middle",textStyle:{color:"#666",fontWeight:"normal",fontSize:40}}],series:[{hoverAnimation:!1,radius:[100,190],name:"pie",type:"pie",selectedMode:"single",selectedOffset:16,clockwise:!0,startAngle:90,label:{normal:{textStyle:{fontSize:18,color:"#999"}}},labelLine:{normal:{lineStyle:{color:"#999"}}},data:originalData}]},myChart.setOption(option,!0);