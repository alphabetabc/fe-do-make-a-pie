option=null,app.title="环形图",option={backgroundColor:"#333",grid:{y:"30",x:"10",x2:"10",y2:"0",containLabel:!0},title:{text:"今年业绩完成情况表(万元)",x:"center",y:"top",itemGap:20,textStyle:{color:"#d9efff",fontFamily:"微软雅黑",fontSize:18,fontWeight:"bolder"}},tooltip:{trigger:"item",formatter:"{b}: ({d}%)<br/> {c}万元"},series:[{name:"认购完成率",center:["30%","center"],type:"pie",radius:["40%","60%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,distance:.7,textStyle:{color:"#d9efff",fontSize:"10"},formatter:`{b}:({d}%)
 {a|{c}万元}`,rich:{a:{color:"#fed900"}}}}},data:[{value:6e3,name:"已完成",itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#fff600"},{offset:1,color:"#fed000"}],!1)}},{value:2e3,name:"未完成",itemStyle:{color:"#888f9b"}}]},{name:"认购完成率",center:["30%","center"],type:"pie",radius:["60%","40%"],hoverAnimation:!1,label:{normal:{show:!0,position:"center",formatter:function(t){var e;return e=`认购\r
\r
完成率`,e},textStyle:{fontSize:14,color:"#e8ecf0"}}},data:[{value:6e3,name:"已完成",itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#fff600"},{offset:1,color:"#fed000"}],!1)}},{value:2e3,name:"未完成",itemStyle:{color:"#888f9b"}}]},{name:"签约完成率",center:["70%","center"],type:"pie",radius:["40%","60%"],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,distance:.7,textStyle:{color:"#d9efff",fontSize:"10"},formatter:`{b}:({d}%)
 {a|{c}万元}`,rich:{a:{color:"#00deff"}}}}},data:[{value:9e3,name:"已完成",itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#00f5ff"},{offset:1,color:"#00e0ff"}],!1)}},{value:3e3,name:"未完成",itemStyle:{color:"#888f9b"}}]},{name:"签约完成率",center:["70%","center"],type:"pie",radius:["60%","40%"],hoverAnimation:!1,label:{normal:{show:!0,position:"center",formatter:function(t){var e;return e=`签约\r
\r
完成率`,e},textStyle:{fontSize:14,color:"#e8ecf0"}}},data:[{value:9e3,name:"已完成",itemStyle:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:0,color:"#00f5ff"},{offset:1,color:"#00e0ff"}],!1)}},{value:3e3,name:"未完成",itemStyle:{color:"#888f9b"}}]}]};
