for(var datas=["普通高等教育在校学生数","普通高等教育招生数","普通高等教育毕业生数"],legendData=[{name:"博士生数",data:[1916,450,240]},{name:"硕士生数",data:[9302,3892,2176]},{name:"普通本科生数",data:[18080,4537,4436]},{name:"学生总数",data:[29298]}],seriesList=[],i=0;i<legendData.length;i++)seriesList.push({type:"bar",name:legendData[i].name,stack:"2",legendHoverLink:!1,barWidth:30,itemStyle:{normal:{}},label:{show:!0,position:"inside",color:"#fff",formatter:function(t){return t.value==0?"":t.value}},data:legendData[i].data});option={backgroundColor:"#fff",tooltip:{show:!0},legend:[{left:"10%",top:"7%",icon:"react",itemWidth:14,itemHeight:14,textStyle:{color:"#000"},data:["博士生数","硕士生数","普通本科生数","学生总数"]}],grid:{containLabel:!0,top:"30%",left:"-10%",right:"0%",bottom:"0%"},xAxis:{show:!1},yAxis:[{inverse:!0,data:datas,axisLabel:{margin:140,fontSize:10,align:"left",color:"#000",nterval:0,rich:{a1:{color:"#fff",backgroundColor:"#FF4431",width:14,height:14,align:"center",borderRadius:2},a2:{color:"#fff",backgroundColor:"#F08228",width:14,height:14,align:"center",borderRadius:2},a3:{color:"#fff",backgroundColor:"#43A92C",width:14,height:14,align:"center",borderRadius:2}},formatter:function(t){let e=datas.indexOf(t);return e==11&&(e=0),e++,e-1<3?["{a"+e+"|"+e+"}  "+t].join(`
`):["{b|"+e+"}  "+t].join(`
`)}},axisLine:{show:!1},axisTick:{show:!1},axisPointer:{label:{show:!0,margin:30}}},{show:!1,data:datas,axisLine:{show:!1}}],series:seriesList},myChart.setOption(option);