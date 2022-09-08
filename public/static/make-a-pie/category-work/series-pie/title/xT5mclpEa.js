option={backgroundColor:"rgba(0,0,0,1)",title:{text:"8",subtext:"万吨",x:"center",y:"43%",textStyle:{fontSize:80,fontWeight:"bolder",color:"orange"},subtextStyle:{fontSize:28,fontWeight:"normal",align:"center",color:"white"}},series:[{type:"pie",radius:["140","180"],center:["50%","50%"],color:function(e){console.log(e.value);var n=["#1ed5ed","#1ea8ed","#1e80ed","#ffe100","#1eede2"];return e.value?n[e.dataIndex]:"white"},data:[{value:25,name:"5G智慧医疗"},{value:25,name:"人工智能医疗"},{value:33,name:"远程医疗"},{value:17,name:"医疗云计算"},{value:0,name:"移动健康应用"},{value:0,name:"移动健康应用1"},{value:0,name:"移动健康应用1"}],labelLine:{normal:{length:10,length2:230,show:!0,lineStyle:{width:1}},emphasis:{show:!1}},label:{normal:{padding:[0,-220,0,-220],formatter:`{b|{b}} {d|{d}%}



`,rich:{b:{fontSize:32,color:"white",align:"center",padding:0},d:{fontSize:32,align:"left",padding:0}}},emphasis:{formatter:`{d|{d}%}
{b|{b}}

{hr|}`,rich:{b:{fontSize:32,color:"white",align:"center",padding:0},hr:{borderColor:"yellow",width:"100%",borderWidth:4,height:1},d:{fontSize:32,align:"left",padding:0}}}}}]};
