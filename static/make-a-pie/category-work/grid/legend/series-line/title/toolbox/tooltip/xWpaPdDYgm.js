dataObj={year:["期中考试","周考","月考","期末考试"],data:{value:[{name:"一班",value:[87,78,83,91,85]},{name:"二班",value:[92,89,91,78,89]},{name:"三班",value:[71,81,85,72,95]},{name:"四班",value:[67,70,77,69,81]},{name:"五班",value:[70,92,74,69,74]}]}};let dataArr=[];dataObj.data.value.map(e=>{let t=[],a={name:e.name,type:"line",smooth:!0,symbolSize:8,data:e.value,barWidth:"30%",itemStyle:{normal:{color:e.name==="高一"?"#f0c725":e.name==="高二"?"#0BE3FF":"#16f892"}}};dataArr.push(a)}),console.log(dataArr),option={backgroundColor:"#12193a",color:["#f0c725","#16f892"],title:{left:"center",text:"某学科各班成绩趋势对比",textStyle:{color:"#FFFFFF",fontSize:"14"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{x:"center",top:"25",textStyle:{color:"#c1cadf",fontSize:14}},grid:{left:"6%",right:"4%",top:"25%",bottom:"3%",containLabel:!0},toolbox:{show:!0,orient:"vertical",x:"right",y:"center"},xAxis:[{type:"category",boundaryGap:!1,data:dataObj.year,axisLine:{lineStyle:{color:"rgba(240,199,37,0.5)"}},axisLabel:{interval:0,color:"#c1cadf",fontSize:"15"}}],yAxis:[{type:"value",name:"数量",nameTextStyle:{color:"#c1cadf",align:"right",lineHeight:10},axisLine:{lineStyle:{color:"rgba(240,199,37,0.5)"}},axisLabel:{interval:0,color:"#c1cadf",fontSize:"15"},splitLine:{show:!1}}],series:dataArr};