for(var img=[{a:"vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/蓝1.png",b:"vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/蓝2.png"},{a:"vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/绿1.png",b:"vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/绿2.png"},{a:"vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/黄1.png",b:"vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/黄2.png"},{a:"vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/红1.png",b:"vfs/root/products/ebi/sys/picture/大数据智能分析平台/校情概况/学科专业/红2.png"}],value=1,getname=["11","22","33"],getvalue=["0","5","6"],ydata1=[],ydata2=[],i=0;i<getname.length;i++)i<=3?(ydata1.push({value,symbol:"image://"+img[i].b}),ydata2.push({value:getvalue[i],symbol:"image://"+img[i].a})):(ydata1.push({value,symbol:"image://"+img[i%4].b}),ydata2.push({value:getvalue[i],symbol:"image://"+img[i%4].a}));var txSize=[["21","25"],["25","23"],["25","25"],["25","20"]];option={backgroundColor:"transparent",grid:{left:"20",top:"20",bottom:"10",right:"20",containLabel:!0},tooltip:{trigger:"item"},xAxis:{splitLine:{show:!1},axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1}},yAxis:[{type:"category",inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,inside:!1},data:getname},{type:"category",inverse:!0,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:15,textStyle:{color:"#888888",fontSize:15}},splitArea:{show:!1},splitLine:{show:!1},data:getvalue}],series:[{tooltip:{show:!1},z:4,type:"pictorialBar",symbolSize:["20","20"],barWidth:20,symbolRepeat:"fixed",symbolMargin:6,label:{normal:{color:"#656565",show:!0,position:[0,"-26px"],textStyle:{fontSize:15},formatter:function(s,e){return s.name}}},data:ydata1},{z:6,type:"pictorialBar",symbolSize:["20","20"],barWidth:20,animation:!0,symbolRepeat:"fixed",symbolMargin:6,symbolClip:!0,symbolPosition:"start",symbolOffset:[0,0],data:ydata2},{type:"bar"}]};
