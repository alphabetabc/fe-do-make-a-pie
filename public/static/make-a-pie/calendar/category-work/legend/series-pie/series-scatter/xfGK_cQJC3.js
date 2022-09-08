var scatterData=getScatterDate();function getScatterDate(){for(var e=+echarts.number.parseDate("2020-08-01"),r=+echarts.number.parseDate("2020-09-01"),o=3600*24*1e3,t=[],a=e;a<r;a+=o)t.push([echarts.format.formatTime("yyyy-MM-dd",a),echarts.format.formatTime("dd",a)]);return t}let seriesData=[{id:"label",type:"scatter",coordinateSystem:"calendar",symbolSize:1,label:{normal:{show:!0,formatter:function(e){return e.value[1]},offset:[-30,-30],textStyle:{color:color2,fontSize:14}}},data:scatterData}];function getPieSeries(){scatterData.map(function(e,r){var o=myChart.convertToPixel("calendar",e);let t={id:r+"pie",type:"pie",center:o,label:{normal:{formatter:"{c}",position:"inside"}},radius:30,data:[{name:"未通行",value:Math.round(Math.random()*100),itemStyle:{color:"#8c8c8c"}},{name:"正常",value:Math.round(Math.random()*100),itemStyle:{color:"#9bca63"}},{name:"异常",value:Math.round(Math.random()*100),itemStyle:{color:"#c23531"}},{name:"稽查处异常",value:Math.round(Math.random()*100),itemStyle:{color:"#fd7903"}}]};seriesData.push(t)})}var color1="#0a0b58",color2="#edebf3";option={backgroundColor:color1,legend:{data:["未通行","正常","异常","稽查处异常"],bottom:20,textStyle:{color:color2}},calendar:{top:"middle",left:"center",orient:"vertical",cellSize:[80,80],splitLine:{show:!0,lineStyle:{color:color1}},yearLabel:{show:!1,textStyle:{fontSize:30}},dayLabel:{margin:20,firstDay:1,color:color2,nameMap:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},monthLabel:{show:!1},range:["2020-08"],itemStyle:{color:color1,borderColor:"#2b2e6c"}},series:seriesData},setTimeout(function(){getPieSeries(),myChart.setOption(option)},10);
