dataObj={year:["2016年","2017年","2018年","2019年","2020年"],data:{value:[{name:"本科一批",value:[683,665,663,677,676]},{name:"本科一批省控",value:[577,508,485,376,390]},{name:"本科批",value:[678,644,620,669,656]},{name:"本科批省控",value:[590,574,520,399,413]}]}};let dataArr=[];dataObj.data.value.map(e=>{let t=[],a={name:e.name,type:"line",smooth:!0,symbolSize:8,data:e.value,barWidth:"30%",itemStyle:{normal:{color:e.name==="高一"?"#f0c725":e.name==="高二"?"#0BE3FF":"#16f892"}}};dataArr.push(a)}),console.log(dataArr),option={backgroundColor:"#12193a",color:["#f0c725","#16f892"],title:{left:"center",text:"上海交通大学院校录取数据",textStyle:{color:"#FFFFFF",fontSize:"14"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{x:"center",top:"25",textStyle:{color:"#c1cadf",fontSize:14}},grid:{left:"6%",right:"4%",top:"25%",bottom:"3%",containLabel:!0},toolbox:{show:!0,orient:"vertical",x:"right",y:"center"},xAxis:[{type:"category",boundaryGap:!1,data:dataObj.year,axisLine:{lineStyle:{color:"rgba(240,199,37,0.5)"}},axisLabel:{interval:0,color:"#c1cadf",fontSize:"15"}}],yAxis:[{type:"value",name:"分数",nameTextStyle:{color:"#c1cadf",align:"right",lineHeight:10},axisLine:{lineStyle:{color:"rgba(240,199,37,0.5)"}},axisLabel:{interval:0,color:"#c1cadf",fontSize:"15"},splitLine:{show:!1}}],series:dataArr};