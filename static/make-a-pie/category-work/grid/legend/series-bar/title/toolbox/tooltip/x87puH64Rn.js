option={backgroundColor:"#0A2E5D",title:{text:"各年级偏科人数统计",textStyle:{color:"white"}},tooltip:{trigger:"axis"},legend:{data:["高一","高二","高三"],textStyle:{color:"white"}},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{axisLine:{lineStyle:{color:"white"}},type:"category",data:["语文","数学","英语","生物","物理","化学"]}],yAxis:[{type:"value",name:"人数",min:0,max:50,interval:10,axisLabel:{textStyle:{color:"white"},formatter:"{value} "},axisLine:{lineStyle:{color:"white"}}}],color:["#6449f7","#7cb17b"],series:[{name:"高一",type:"bar",data:[12,14,22,31,15,20]},{name:"高二",type:"bar",data:[24,13,16,22,19,14]},{name:"高三",type:"bar",data:[20,15,31,22,14,12]}]};