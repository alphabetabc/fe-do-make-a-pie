let Userdatas=[{name:"入职",value:409.6,itemStyle:{color:"#54c3e7"}},{name:"晋升",value:204.8,itemStyle:{color:"#f19577"}},{name:"培训",value:225.28,itemStyle:{color:"#779df1"}},{name:"离职",value:184.32,itemStyle:{color:"#b1bce0"}}];option={legend:{orient:"vertical",x:"left",y:"center",icon:"circle",data:["入职","晋升","培训","离职"],textStyle:{fontSize:12,align:"right",padding:14}},series:[{name:"访问来源",type:"pie",radius:"55%",center:["50%","50%"],data:Userdatas,roseType:"radius",label:{normal:{show:!0,position:"inner",formatter:"{per|{d}%}",rich:{b:{fontSize:24,lineHeight:33},per:{color:"white"}}}}}]};