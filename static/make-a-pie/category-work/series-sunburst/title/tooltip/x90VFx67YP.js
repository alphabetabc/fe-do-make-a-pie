var uploadedDataURL="/asset/get/s/data-1545380327814-MyMAAvXQh.txt",colors=["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d","#97b552","#95706d","#dc69aa","#07a2a4","#9a7fd1","#588dd5","#f5994e","#c05050","#59678c","#c9ab00","#7eb00a","#6f5553","#c14089"],bgColor={type:"radial",x:.5,y:.5,r:.7,colorStops:[{offset:0,color:"#b6a2de"},{offset:.4,color:"#9a7fd1"},{offset:1,color:"#59678c"}],globalCoord:!1},fontSize=18,titleFontSize=18,subTitleFontSize=15,textStyle={fontSize:titleFontSize,align:"center",fontStyle:"bold",color:"#DDD",textShadowColor:"rgba(0,0,0,0.3)",textShadowBlur:5,rich:{r:{color:colors[2],fontWeight:"bold",fontSize:titleFontSize+2,textShadowColor:"rgba(0,0,0,0.3)",textShadowBlur:5}}},subtextStyle={fontSize:subTitleFontSize,color:"#DDD",textShadowColor:"rgba(0,0,0,0.3)",textShadowBlur:5,rich:{r:{color:colors[2],fontWeight:"bold",fontSize:subTitleFontSize+2,textShadowColor:"rgba(0,0,0,0.3)",textShadowBlur:5}}};options=[{backgroundColor:bgColor,color:colors,title:{text:"2018年阅读率统计",subtext:"购买与阅读的比例",textStyle,subtextStyle},tooltip:{},series:{type:"sunburst",highlightPolicy:"descendant",data:[{name:"2018年阅读率",value:292,itemStyle:{color:colors[0]},label:{rotate:"tangential",fontSize:20},children:[{name:"已读",itemStyle:{color:colors[1]},label:{rotate:"tangential",fontSize:20,formatter:"{b}:46%"},children:[{name:"蛋卷",value:82,itemStyle:{color:colors[11]},label:{rotate:"tangential",fontSize:20,formatter:"{b}:{c}本"}},{name:"我",value:54,itemStyle:{color:colors[12]},label:{rotate:"tangential",fontSize:20,formatter:"{b}:{c}本"}}]},{name:"未读",itemStyle:{color:colors[4]},label:{rotate:"tangential",fontSize:20,formatter:"{b}:54%"},children:[{name:"蛋卷",value:16,itemStyle:{color:colors[14]},label:{rotate:"tangential",fontSize:20,formatter:"{b}:{c}本"}},{name:"我",value:140,itemStyle:{color:colors[9]},label:{rotate:"tangential",fontSize:20,formatter:"{b}:{c}本"}}]}]}],radius:[0,500],sort:null,center:["50%","55%"],levels:[{},{r0:"10%",r:"40%",itemStyle:{borderWidth:2,shadowBlur:5,shadowColor:"rgba(0,0,0,0.3)",shadowOffsetX:2,shadowOffsetY:2},highlight:{itemStyle:{color:"orange"}},downplay:{itemStyle:{color:"#ccc"}}},{r0:"40%",r:"80%",itemStyle:{borderWidth:2,opacity:1,shadowBlur:5,shadowColor:"rgba(0,0,0,0.3)",shadowOffsetX:2,shadowOffsetY:2},label:{rotate:"tangential",fontSize},highlight:{itemStyle:{color:"orange"}},downplay:{itemStyle:{color:"#ccc"}}},{r0:"80%",r:"100%",itemStyle:{shadowBlur:5,shadowColor:"rgba(0,0,0,0.3)",shadowOffsetX:2,shadowOffsetY:2},label:{rotate:"tangential",textShadowBlur:5,textShadowColor:"#333",fontSize:14,formatter:"{a}:{b}"},downplay:{label:{opacity:0}},highlight:{itemStyle:{color:"orange"},label:{color:"#FFF",fontSize:13}}}]}}];
