option={backgroundColor:"#ffffff",color:["#4ea6ff","#666666"],tooltip:{trigger:"axis",backgroundColor:"rgba(245, 245, 245, 0.8)",textStyle:{align:"left",fontSize:12,color:"#333333"},padding:10,axisPointer:{lineStyle:{color:"none"}}},legend:{show:!0,bottom:"30px",left:"center",icon:"circle",orient:"horizontal",data:[]},grid:{left:"4%",right:"6%",top:"8%",bottom:"15%",containLabel:!0},textStyle:{fontSize:"14",fontWeight:"normal",color:"#666666"},xAxis:{name:"",show:!0,type:"category",boundaryGap:!1,data:["201609","201610","201611","201612","201701","201702","201704","201705","201706","201707","201708","201709"],axisLine:{lineStyle:{color:"#eeeeee"}},axisLabel:{formatter:function(e){return e.length===8?e.substring(0,4)+"-"+e.substring(4,6)+"-"+e.substring(6,8):e.substring(0,4)+"年"+e.substring(4,6)*1+"月"+e.substring(6,8)}}},yAxis:[{name:"",show:!0,type:"value",splitLine:{show:!0,lineStyle:{color:"#eeeeee"}},axisLine:{lineStyle:{color:"#eeeeee"}},axisLabel:{}},{name:"",show:!1,type:"value",splitLine:{show:!1},axisLine:{lineStyle:{color:"#eeeeee"}},axisLabel:{formatter:function(e){return Math.round(e*100)+"%"}}}],series:[{name:"",type:"line",yAxisIndex:0,smooth:!0,symbol:"circle",symbolSize:[14,14],data:[0,0,0,0,0,0,0,0,0,0,83,0]}]};
