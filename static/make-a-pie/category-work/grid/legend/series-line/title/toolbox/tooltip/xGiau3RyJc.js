dataObj={year:["高一","高二","高三"],data:{value:[{name:"平均分",value:[89,88,93]},{name:"最高分",value:[78,92,83]}]}};let dataArr=[];dataObj.data.value.map(e=>{let t=[],a={name:e.name,type:"line",smooth:!0,symbolSize:8,data:e.value,barWidth:"30%",itemStyle:{normal:{color:e.name==="平均分"?"#f0c725":e.name==="最高分"?"#0BE3FF":"#16f892"}}};dataArr.push(a)}),console.log(dataArr),option={backgroundColor:"#12193a",color:["#f0c725","#16f892"],title:{left:"center",text:"各年级数学成绩分析",textStyle:{color:"#FFFFFF",fontSize:"14"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{x:"center",top:"25",textStyle:{color:"#c1cadf",fontSize:14}},grid:{left:"6%",right:"4%",top:"25%",bottom:"3%",containLabel:!0},toolbox:{show:!0,orient:"vertical",x:"right",y:"center"},xAxis:[{type:"category",boundaryGap:!1,data:dataObj.year,axisLine:{lineStyle:{color:"rgba(240,199,37,0.5)"}},axisLabel:{interval:0,color:"#c1cadf",fontSize:"15"}}],yAxis:[{type:"value",name:"成绩",nameTextStyle:{color:"#c1cadf",align:"right",lineHeight:10},axisLine:{lineStyle:{color:"rgba(240,199,37,0.5)"}},axisLabel:{interval:0,color:"#c1cadf",fontSize:"15"},splitLine:{show:!1}}],series:dataArr};
