dataText=[{name:"一班",type:"line",smooth:!0,symbolSize:8,data:[17,24,10,78,27,27],barWidth:"30%",itemStyle:{normal:{color:"#f0c725"}}},{name:"二班",type:"line",smooth:!0,symbolSize:8,data:[27,100,70,100,27,57],barWidth:"30%",itemStyle:{normal:{color:"#16f892"}}},{name:"三班",type:"line",smooth:!0,symbolSize:8,data:[17,74,10,99,30,55],barWidth:"30%",itemStyle:{normal:{color:"#0BE3FF"}}},{name:"四班",type:"line",smooth:!0,symbolSize:8,data:[17,74,10,99,30,55],barWidth:"30%",itemStyle:{normal:{color:"#0BE3FF"}}}],dataObj={year:["语文","数学","英语","物理","化学","生物","政治","历史","地理"],data:{value:[{name:"一班",value:[89,88,93,67,78,87,69,92,77]},{name:"二班",value:[78,92,77,78,88,57,77,80,81]},{name:"三班",value:[84,90,80,84,77,64,73,80,91]},{name:"四班",value:[92,74,90,99,73,75,82,90,93]}]}};let dataArr=[];dataObj.data.value.map(e=>{let a=[],t={name:e.name,type:"line",smooth:!0,symbolSize:8,data:e.value,barWidth:"30%",itemStyle:{normal:{color:e.name==="一班"?"#f0c725":e.name==="二班"?"#0BE3FF":e.name==="三班"?"pink":"#16f892"}}};dataArr.push(t)}),console.log(dataArr),option={backgroundColor:"#12193a",color:["#f0c725","#16f892"],title:{left:"center",text:"高一各班各科成绩平均分分析",textStyle:{color:"#FFFFFF",fontSize:"14"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{x:"center",top:"25",textStyle:{color:"#c1cadf",fontSize:14}},grid:{left:"6%",right:"4%",top:"25%",bottom:"3%",containLabel:!0},toolbox:{show:!0,orient:"vertical",x:"right",y:"center"},xAxis:[{type:"category",boundaryGap:!1,data:dataObj.year,axisLine:{lineStyle:{color:"rgba(240,199,37,0.5)"}},axisLabel:{interval:0,color:"#c1cadf",fontSize:"15"}}],yAxis:[{type:"value",name:"成绩",nameTextStyle:{color:"#c1cadf",align:"right",lineHeight:10},axisLine:{lineStyle:{color:"rgba(240,199,37,0.5)"}},axisLabel:{interval:0,color:"#c1cadf",fontSize:"15"},splitLine:{show:!1}}],series:dataArr};
