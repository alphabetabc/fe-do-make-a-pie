option={backgroundColor:"#0A2E5D",tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"},textStyle:{color:"white"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["总人数","男生","女生"],textStyle:{color:"white"}},xAxis:[{type:"category",data:["一班","二班","三班","四班","五班"],axisPointer:{type:"shadow"},axisLabel:{textStyle:{color:"white"}},axisLine:{lineStyle:{color:"white"}}}],yAxis:[{type:"value",name:"人数",min:0,max:100,interval:10,axisLabel:{textStyle:{color:"white"},formatter:"{value} "},axisLine:{lineStyle:{color:"white"}}}],series:[{name:"总人数",type:"bar",data:[60,68,62,61,70]},{name:"男生",type:"bar",data:[32,35,29,31,42]},{name:"女生",type:"bar",data:[28,33,33,30,28]}]};