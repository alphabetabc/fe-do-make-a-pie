var lineData=[[{name:" 全区认知最高分：9500分",x:"70%",number:9500,y:15+"%"},{x:"60%",y:15+"%",symbolSize:[1,1]}],[{name:" 全年级认知最高分：8500分",x:"70%",number:8500,y:25+"%"},{x:"60%",y:25+"%",symbolSize:[1,1]}],[{name:" 全区认知平均分：7500分",x:"70%",number:7500,y:35+"%"},{x:"60%",y:35+"%",symbolSize:[1,1]}],[{name:" 全年级认知平均分：6500分",number:6500,x:"70%",y:45+"%"},{x:"60%",y:45+"%",symbolSize:[1,1]}]],pointData=[{name:1e4,x:"42%",y:"10%"},{name:8e3,x:"34%",y:"30%"},{name:6e3,x:"24.8%",y:"50%"},{name:2e3,x:"15.6%",y:"70%"},{name:0,x:"9%",y:"90%"}];const colors=[{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#2dbcff"},{offset:1,color:"#009cff"}]},{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#00b99c"},{offset:1,color:"#22d7bb"}]},{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#ff9000"},{offset:1,color:"#ffc334"}]},{type:"linear",x:1,y:0,x2:0,y2:0,colorStops:[{offset:0,color:"#ff7171"},{offset:1,color:"#fa8d8d"}]}],lineargroup=[{value:1,name:"A+",itemStyle:{height:"10%"}},{value:4,name:"B+",itemStyle:{height:"30%"}},{value:4.2,name:"C+",itemStyle:{height:"2%"}},{value:7.2,name:"D+",itemStyle:{height:"30%"}},{value:10,name:"E+",itemStyle:{height:"28%"}}];var option={backgroundColor:"#000",color:colors,series:[{top:"10%",left:"10%",bottom:"10%",right:"40%",type:"funnel",sort:"ascending",gap:0,orient:"vertical",minSize:150,funnelAlign:"right",markLine:{silent:!0,lineStyle:{normal:{color:"#fff",type:"solid"}},label:{normal:{position:"start",formatter:function(e){return e.name}}},data:lineData},markPoint:{silent:!0,label:{normal:{show:!0,formatter:function(e){return e.name},color:"#bbbbbb",align:"left",fontSize:14}},symbolSize:[0,1],symbolOffset:[35,0],data:pointData},label:{show:!0,position:"inside",fontSize:"14",formatter:function(e){var o="{bb|"+e.name+"}";return o},rich:{aa:{padding:[8,0,6,0]},bb:{color:"#000",fontSize:24,fontWeight:"bold"}}},itemStyle:{borderWidth:0},data:lineargroup}]};
