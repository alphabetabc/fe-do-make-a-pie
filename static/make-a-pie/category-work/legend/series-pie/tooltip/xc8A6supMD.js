var datas=[{name:"大型0",value:"120"},{name:"中型0",value:"30"},{name:"小型0",value:"80"},{name:"中型1",value:"30"},{name:"小型1",value:"80"},{name:"中型2",value:"30"}],colorList=["#0066FF","#00CC66","#BB33FF","#3385FF","#FF3144","#BB33FF","#8D3EFA","#00CC66","#0066FF","#E55D69","#DD4171"];option={backgroundColor:"#050F2A",legend:{orient:"horizontal",bottom:"2%",left:"center",align:"left",icon:"circle",width:"60%",itemGap:20,textStyle:{color:"#fff",fontSize:12}},tooltip:{trigger:"item",formatter:function(e){var t=e.marker+""+e.data.name+"</br>数量："+e.data.value+"家</br>占比："+e.percent+"%";return t}},series:[{name:"分类占比",type:"pie",radius:["30%","60%"],center:["50%","45%"],startAngle:90,clockwise:!1,itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},label:{show:!1},labelLine:{show:!1,length:1,length2:20,smooth:!0},data:datas}]};
