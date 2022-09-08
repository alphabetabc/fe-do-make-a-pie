for(var data=[{name:"20~40岁",value:40},{name:"40~60岁",value:30},{name:"60岁以上",value:20},{name:"20岁以下",value:10}],newSeries=[],color=["#ab7bff","#c09eff","#d7bfff","#d7bfff"],i=0;i<data.length;i++){var arr=[];arr.push(data[i].value),newSeries.push({name:data[i].name,type:"bar",stack:"总量",barWidth:30,label:{normal:{show:!0,color:"#fff",align:"center",position:["50%","-110%"],formatter:function(a){var e=a.value,r=a.name;return e+`
`+e+`%




`+r}}},itemStyle:{color:color[i],barBorderRadius:4,borderWidth:1,borderColor:"#000"},data:[{name:data[i].name,value:data[i].value}]})}option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},tooltip:{show:!1},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",show:!1},yAxis:{type:"category",data:["周一"],show:!1},series:newSeries};
