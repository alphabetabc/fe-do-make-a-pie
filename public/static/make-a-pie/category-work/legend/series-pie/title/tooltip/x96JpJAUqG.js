let pieData=[{value:1224,name:"正常排污企业"},{value:415,name:"异常排放企业"},{value:224,name:"临界达标企业"}],totalNum=0;pieData.forEach(e=>{totalNum+=e.value}),option={backgroundColor:"#2c3e50",title:{show:!0,text:"企业数量",subtext:totalNum,left:"center",top:"center",z:0,zlevel:100,textStyle:{textAlign:"center",color:"#BAE7FF",fontSize:14},subtextStyle:{textAlign:"center",color:"#fff",fontSize:30,fontWeight:600}},tooltip:{show:!1,trigger:"item",alwaysShowContent:!0,formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{show:!1},grid:{left:"0%",right:"0%",bottom:"0%",containLabel:!0},series:[{name:"企业数量",type:"pie",color:["#06B716","#F5222D","#FAAD14"],radius:["60%","90%"],avoidLabelOverlap:!1,legendHoverLink:!1,textAlign:"center",label:{normal:{show:!0,position:"center",align:"center",verticalAlign:"middle",textStyle:{fontSize:"0"}},emphasis:{show:!0,textStyle:{fontSize:"14",color:"#BAE7FF"},formatter:`{b|{b}} 
 {c|{c}} {d|{d}%}`,rich:{b:{lineHeight:20,fontSize:14,textAlign:"center",color:"#BAE7FF"},c:{lineHeight:36,color:"#fff",fontSize:30,fontWeight:600},d:{fontSize:12,color:"#BAE7FF"}}}},itemStyle:{borderWidth:2,borderColor:"#2E3E62"},labelLine:{show:!1},data:pieData}]},window.addEventListener("resize",()=>{myChart.resize()}),myChart.on("mouseover",e=>{myChart.setOption({title:{show:!1},series:{label:{emphasis:{rich:{c:{color:e.color}}}}}})}),myChart.on("mouseout",e=>{myChart.setOption({title:{show:!0}})});
