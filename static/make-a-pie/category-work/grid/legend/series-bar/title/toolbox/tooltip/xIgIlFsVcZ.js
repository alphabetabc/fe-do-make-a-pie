option={backgroundColor:"#0A2E5D",title:{text:"学生对教师评价",textStyle:{color:"white"}},tooltip:{trigger:"axis"},legend:{data:["高一","高二","高三"],textStyle:{color:"white"}},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{axisLine:{lineStyle:{color:"white"}},type:"category",data:["语文","数学","英语","生物","物理","化学"]}],yAxis:[{type:"value",name:"分数",min:0,max:100,interval:10,axisLabel:{textStyle:{color:"white"},formatter:"{value} "},axisLine:{lineStyle:{color:"white"}}}],color:["green","orange","pink"],series:[{name:"高一",type:"bar",data:[92,97,94,87,85,89]},{name:"高二",type:"bar",data:[86,92,90,95,91,90]},{name:"高三",type:"bar",data:[80,98,94,93,96,92]}]};