option={backgroundColor:"#020d22",color:["#ff7444"],title:{text:"IP访问次数异常TOP ",left:"2%",textStyle:{fontSize:"14",fontWeight:"normal",color:"#6a9cd5"}},tooltip:{},grid:{top:"20%",left:"3%",right:"3%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",axisLine:{show:!0,lineStyle:{color:"#233e64"}},axisLabel:{textStyle:{color:"#6a9cd5"},formatter:function(t){return t.length>4?t.slice(0,3)+".."+t.slice(8,12):t}},axisTick:{show:!1},data:["192.168.1.44","192.168.1.56","192.168.1.89","192.168.1.71","192.168.1.55"]}],yAxis:[{type:"value",min:0,splitNumber:5,splitLine:{show:!0,lineStyle:{color:"#233e64"}},axisLine:{show:!1},axisLabel:{textStyle:{color:"#6a9cd5"}},axisTick:{show:!1}}],series:[{type:"bar",stack:"chart",barWidth:"20%",data:[98,77,58,45,38]}]};
