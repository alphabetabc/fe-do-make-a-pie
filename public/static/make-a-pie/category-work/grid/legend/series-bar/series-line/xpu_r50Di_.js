option={backgroundColor:"#030A41",grid:{top:"100",right:"40",left:"60",bottom:"40"},legend:{textStyle:{color:"#90979c",fontSize:12}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){var o=e[0].axisValue+"<br><span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+e[0].color.colorStops[0].color+";'></span>"+e[0].seriesName+" : "+e[0].value+"%<br><span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:"+e[1].color+";'></span>"+e[1].seriesName+" : "+e[1].value+"%";return o}},xAxis:{type:"category",color:"#59588D",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisLabel:{margin:10,color:"#C9C9C9",textStyle:{fontSize:12}},axisLine:{lineStyle:{color:"#364B8A"}},axisTick:{show:!1},splitLine:{show:!1}},yAxis:[{min:0,max:100,axisLabel:{formatter:"{value}%",color:"#C9C9C9",textStyle:{fontSize:12}},axisLine:{lineStyle:{color:"#364B8A"}},axisTick:{show:!1},splitLine:{show:!1}},{min:-100,max:100,type:"value",axisLabel:{formatter:"{value}%",color:"#c9c9c9",textStyle:{fontSize:12}},axisLine:{lineStyle:{color:"#364B8A"}},axisTick:{show:!1},splitLine:{show:!1}}],series:[{type:"bar",name:"合格率",data:[40,80,50,36,30,35,40,60,20,35,55,18],barWidth:"16",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1BC395"},{offset:1,color:"#051454"}]),barBorderRadius:[30,30,0,0]}},label:{normal:{show:!1,fontSize:16,fontWeight:"bold",color:"#333",position:"top"}}},{data:[40,80,50,36,30,35,40,60,20,35,55,18],type:"line",smooth:!0,name:"环比",symbolSize:8,symbol:"circle",itemStyle:{normal:{color:"#E2395D",lineStyle:{type:"dashed"}}}}]};