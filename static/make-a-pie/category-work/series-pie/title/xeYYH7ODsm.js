var data=[{name:"受理业务总量",value:100,num:1234},{name:"办结业务总量",value:50,num:5678},{name:"在办业务总量",value:49,num:9012},{name:"超期业务总量",value:1,num:50}],titleArr=[],seriesArr=[];colors=[["#5B8FF9","#E9EEF4"],["#5AD8A6","#E9EEF4"],["#FFFF80","#E9EEF4"],["#E86452","#E9EEF4"]],data.forEach(function(o,e){titleArr.push({text:o.num+`
`+o.name,left:e*25+10+"%",top:"65%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:"16",color:"#333",textAlign:"center"}}),seriesArr.push({name:o.name,type:"pie",clockWise:!1,radius:[60,70],itemStyle:{normal:{color:colors[e][0],shadowColor:colors[e][0],shadowBlur:0,label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:[e*25+10+"%","50%"],data:[{value:o.value,label:{normal:{formatter:function(l){return l.value+"%"},position:"center",show:!0,textStyle:{fontSize:"20",fontWeight:"bold",color:"#333"}}}},{value:100-o.value,name:"invisible",itemStyle:{normal:{color:colors[e][1]},emphasis:{color:colors[e][1]}}}]})}),option={backgroundColor:"#fff",title:titleArr,series:seriesArr};