var Cdata=[{name:"人",symbol:"circle"},{name:"物证"},{name:"不明物体"},{name:"不明物体1"}],Sdata=[{name:"张三1",category:3},{name:"张三",category:0},{name:"李四",category:0},{name:"赖子",category:0},{name:"毛发",category:1},{name:"刀",category:1},{name:"指纹",category:1},{name:"无名尸",category:2},{name:"无名尸1",category:2}],linkData=[{source:"张三1",target:"无名尸1"},{source:"毛发",target:"刀"},{source:"毛发",target:"指纹"},{source:"毛发",target:"张三"},{source:"毛发",target:"李四"},{source:"刀",target:"无名尸"},{source:"李四",target:"赖子"},{source:"赖子",target:"李四"},{source:"李四",target:"王五"}],color=["#82dffe","#04f2a7","#b457ff","rgba(242, 157, 11, 1)"];function solve_Sdata(e){for(var o=0;o<e.length;o++)e[o]={name:e[o].name,symbolSize:50,draggable:!0,category:e[o].category,itemStyle:{normal:{borderColor:"#fff",borderWidth:4,shadowBlur:10,shadowColor:"rgba(98, 198, 248, 0.5)",color:color[e[o].category]}}};return e}function solve_linkData(e){for(var o=0;o<e.length;o++)e[o].lineStyle={normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#7c785b"},{offset:1,color:"#eda553"}],globalCoord:!1}}};return e}var series=[{type:"graph",layout:"force",force:{repulsion:1e3,edgeLength:50},symbolSize:50,roam:!0,label:{normal:{show:!0}},edgeSymbolSize:[4,10],edgeLabel:{normal:{show:!1,textStyle:{fontSize:13,color:"#fff"},formatter:"{c}"}},edgeSymbol:["circle","arrow"],data:solve_Sdata(Sdata),links:solve_linkData(linkData),lineStyle:{normal:{opacity:.8,width:3,curveness:.1}},categories:Cdata}];option={backgroundColor:"#0B1321",title:{text:"Graph 可配置案例",textStyle:{color:"#fff"}},tooltip:{},toolbox:{show:!0,feature:{restore:{show:!0},saveAsImage:{show:!1}},iconStyle:{borderColor:"#fff"},left:"left",top:"5%"},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",color,legend:{show:!0,textStyle:{color:"#fff"}},series};