option={backgroundColor:"",title:{text:"当前未处理预警",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{left:"center",top:"bottom",textStyle:{color:"#fff"},data:["紧急","主要","次要","提示"]},color:["#fa55fe","#9249f8","#a4f2fb","#3f7dfe"],series:[{name:"访问来源",type:"pie",radius:"80%",avoidLabelOverlap:!0,center:["50%","50%"],label:{normal:{show:!0,position:"inner",formatter:" {c} 个",textStyle:{color:"white",fontSize:14,fontWeight:"bold"}}},data:[{value:25,name:"紧急"},{value:20,name:"主要"},{value:15,name:"次要"},{value:35,name:"提示"}],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};
