var option={tooltip:{trigger:"axis",backgroundColor:"rgba(255,255,255,0.1)",axisPointer:{type:"line",lineStyle:{color:"rgba(255,255,255,0.05)"}},textStyle:{fontSize:"10"},padding:[8,8,8,8],formatter:function(o){var e="",t="";for(var l in o)t=o[l].seriesName+"："+o[l].value,e=e+t+"万<br/>";return o[0].name+"<br/>"+e}},legend:{icon:"stack",itemWidth:20,itemHeight:5,textStyle:{color:"#999999"},data:["在网链接总数","IPv6活跃链接总数"]},grid:{top:"20%",left:"5%",right:"4%",bottom:"3%",height:"75%",containLabel:!0},xAxis:{type:"category",data:["2019-01","2019-02","2019-03","2019-04","2019-05","2019-06","2019-07","2019-08","2019-09","2019-10","2019-11"],axisLine:{lineStyle:{color:"#50556b"}},axisLabel:{textStyle:{color:"#999999",fontSize:"10",fontFamily:"Microsoft YaHei"}}},yAxis:{type:"value",name:"万",min:"0",max:"1500",axisLabel:{textStyle:{color:"#8c99a8",fontSize:"10",fontFamily:"Microsoft YaHei"},formatter:"{value}"},axisTick:{show:!1,length:15,lineStyle:{color:"#e4e4e4"}},splitLine:{lineStyle:{type:"bolid",color:"#50556b"}},axisLine:{show:!0,lineStyle:{color:"#50556b"}},nameTextStyle:{color:"#999"},splitArea:{show:!1}},series:[{name:"在网链接总数",type:"line",symbol:"circle",symbolSize:"2",data:[1093.15,1094.5,1095.74,1110.98,1125.21,1120.08,1119.32,1354.89,1167.9,1151.34],lineStyle:{normal:{width:3,color:{type:"linear",colorStops:[{offset:0,color:"#7a5cff"},{offset:1,color:"#00c9b6"}],globalCoord:!1}}},itemStyle:{normal:{borderWidth:2,borderColor:"#fff",color:{type:"stack",colorStops:[{offset:0,color:"#7a5cff"},{offset:1,color:"#00c9b6"}],globalCoord:!1}}},smooth:!0},{name:"IPv6活跃链接总数",type:"line",symbol:"circle",symbolSize:"2",data:[132.37,154.53,176.47,204.96,360.58,575.62,593.3,660.76,827.45,791.12],lineStyle:{normal:{width:3,color:{type:"linear",colorStops:[{offset:0,color:"#f47129"},{offset:1,color:"#f49c29"}],globalCoord:!1}}},itemStyle:{normal:{borderWidth:2,borderColor:"#fff",color:{type:"stack",colorStops:[{offset:0,color:"#f47129"},{offset:1,color:"#f49c29"}],globalCoord:!1}}},smooth:!0}]};