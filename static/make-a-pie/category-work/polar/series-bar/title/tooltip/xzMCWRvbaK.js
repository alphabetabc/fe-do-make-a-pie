var a=18,option={title:{show:!0,text:"m/s",top:"top",left:"center",textStyle:{fontSize:14}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} "},angleAxis:{type:"category",data:["0°","45°","90°","135°","180°","225°","270°","315°"],z:1,boundaryGap:!1,axisLine:{lineStyle:{color:"grey"}},splitLine:{show:!0,lineStyle:{color:"grey"}}},radiusAxis:{splitLine:{lineStyle:{color:"grey"}}},polar:{center:["50%","50%"],radius:"80%"},grid:{left:"20",right:"20",containLabel:!0},series:[{type:"bar",data:[1,2,3,4,3,5,1,2],coordinateSystem:"polar",name:"风速",stack:"a",itemStyle:{normal:{color:function(e){var t=["#5cc6ca","#d87a7f","#f5b97f","#5ab1ef","#b6a2de","#8d98b3","#e5d02d","#97b552","#956f6d","#d0579c"];return t[e.dataIndex]}}}}]};
