var colors=["#9b92fe","#1f62ea","#1990e9","#49ddfc","#39f381","#6bdafe","#0FB1FE","#7ba5c6"];option={backgroundColor:"#121244",tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{show:!1,orient:"vertical",right:"10%",textStyle:{color:"#fff"},data:["综合类","专项类","管理类","综合类","专项类","管理类"]},series:[{name:"访问来源",type:"pie",selectedMode:"single",radius:[0,"45%"],label:{normal:{position:"inner"}},labelLine:{normal:{show:!1}},color:colors,data:[{value:1800,name:"省局"},{value:1200,name:"市局"}]},{name:"访问来源",type:"pie",radius:["64%","85%"],color:colors,itemStyle:{normal:{borderWidth:5,borderColor:"rgba(0,0,0,0)",label:{show:!0,color:"#fff",fontSize:12,formatter:function(e){return e.name+": "+e.value+"单位"}},labelLine:{show:!0,length:30}}},label:{show:!0},data:[{value:500,name:"综合类"},{value:500,name:"专项类"},{value:800,name:"管理类"},{value:200,name:"综合类"},{value:500,name:"专项类"},{value:500,name:"管理类"}]}]};
