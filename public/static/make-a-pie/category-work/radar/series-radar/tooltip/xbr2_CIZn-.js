var color=["#e9df3d","#f79c19","#21fcd6","#08c8ff","#df4131"],data=[{name:"数据一",value:20},{name:"数据二",value:30},{name:"数据三",value:22},{name:"数据四",value:50},{name:"数据五",value:12}],max=data[0].value;data.forEach(function(a){max=a.value>max?a.value:max});var renderData=[{value:[],name:"告警类型TOP5",symbol:"none",lineStyle:{normal:{color:"#ecc03e",width:2}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:0,color:"rgba(203, 158, 24, 0.8)"},{offset:1,color:"rgba(190, 96, 20, 0.8)"}],!1)}}}];data.forEach(function(a,e){var r=["","","","",""];r[e]=max,renderData[0].value[e]=a.value,renderData.push({value:r,symbol:"circle",symbolSize:12,lineStyle:{normal:{color:"transparent"}},itemStyle:{normal:{color:color[e]}}})});var indicator=[];data.forEach(function(a){indicator.push({name:a.name,max,color:"#fff"})}),option={backgroundColor:"#01193d",tooltip:{show:!0,trigger:"item"},radar:{center:["50%","50%"],radius:"70%",startAngle:90,splitNumber:4,shape:"circle",splitArea:{areaStyle:{color:"transparent"}},axisLabel:{show:!1,fontSize:20,color:"#000",fontStyle:"normal",fontWeight:"normal"},axisLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, 0.5)"}},splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, 0.5)"}},indicator},series:[{type:"radar",data:renderData}]};
