var data2=[{name:"体育",value:85},{name:"语文",value:60},{name:"毛概",value:10},{name:"建模",value:35},{name:"高数",value:75},{name:"心理学",value:10},{name:"计算机",value:75},{name:"专业发展史",value:15},{name:"专业英语",value:60}],xData=[],yData=[],min=0;data2.map(function(e,a){xData.push(e.name),e.value===0?yData.push(e.value+min):yData.push(e.value)}),option={backgroundColor:"#141845",title:{text:"学生学科分析",textStyle:{color:"#fff"}},tooltip:{trigger:"axis",axisPointer:{type:"line",lineStyle:{opacity:0}},formatter:function(e){return e[0].data===min?"合格率：0%":"合格率："+e[0].data+"%"}},legend:{data:["直接访问","背景"],show:!1},grid:{left:"0%",right:"0%",bottom:"5%",top:"7%",height:"85%",containLabel:!0,z:22},xAxis:[{type:"category",gridIndex:0,data:xData,axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:"#fff"}},axisLabel:{show:!0,color:"#fff"}}],yAxis:[{type:"value",gridIndex:0,splitLine:{show:!1},axisTick:{show:!1},min,max:100,axisLine:{lineStyle:{color:"#fff"}},axisLabel:{color:"#fff",formatter:"{value} %"}},{type:"value",gridIndex:0,min,max:100,splitNumber:12,splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1}}],grid:{left:"3%",right:"4%",bottom:"5%",containLabel:!0},series:[{name:"合格率",type:"bar",barWidth:"45%",xAxisIndex:0,yAxisIndex:0,itemStyle:{normal:{barBorderRadius:6,color:"#3CF8E0"}},data:yData,zlevel:11},{name:"背景",type:"bar",barWidth:"45%",xAxisIndex:0,yAxisIndex:1,barGap:"-100%",data:[95,65,25,80,80,50,90,15,65],itemStyle:{normal:{barBorderRadius:6,color:"#535C6D"}},zlevel:9}]};
