option={backgroundColor:"#F85C5D",textStyle:{color:"#fff"},title:{text:"风险管控",textStyle:{color:"#fff",fontSize:"14"}},tooltip:{trigger:"axis"},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["重大","较大","一般","低"]}],yAxis:[{type:"value",min:0,max:600,interval:100,splitLine:{show:!1},splitArea:{show:!0}}],series:[{name:"完成量",type:"bar",label:{normal:{show:!0,position:"top"}},itemStyle:{normal:{color:function(t){return"#"+Math.floor(Math.random()*(256*256*256-1)).toString(16)}}},data:[326,259,390,264]}]};