let data=[{name:"一月",value:260},{name:"二月",value:220},{name:"三月",value:210},{name:"四月",value:200},{name:"五月",value:180}];var myColor=["#21BF57","#56D0E3","#1089E7","#F8B448","#F57474"];let nameArr=[],valueArr=[];data.forEach(e=>{nameArr.push(e.name),valueArr.push(e.value)}),option={backgroundColor:"#003366",grid:{left:"2%",right:"2%",bottom:"2%",top:"2%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+" : "+e[0].value}},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"#5EC4FF",fontSize:16}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:nameArr}],series:[{name:"值",type:"bar",zlevel:1,itemStyle:{normal:{color:function(e){var t=myColor.length;return myColor[e.dataIndex%t]},label:{show:!0,position:"right",textStyle:{color:"#ffffff",fontSize:22}}}},barWidth:20,data:valueArr}]};
