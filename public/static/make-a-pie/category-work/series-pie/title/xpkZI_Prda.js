var data=[{name:`预案审议
回退任务数量`,value:54},{name:"现代材料",value:44},{name:"新能源",value:35},{name:"新一代信息技术",value:30},{name:`审议描述
异常数量`,value:35}],titleArr=[],seriesArr=[];colors=[["#3557e2","#26396e"],["#ff8c37","#26396e"],["#ffc257","#26396e"],["#fd6f97","#26396e"],["#c165e3","#26396e"]],data.forEach(function(o,e){titleArr.push({text:o.name,left:e*20+10+"%",top:"65%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:"16",color:colors[e][0],textAlign:"center"}}),seriesArr.push({name:o.name,type:"pie",clockWise:!1,radius:[60,70],itemStyle:{normal:{color:colors[e][0],shadowColor:colors[e][0],shadowBlur:0,label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:[e*20+10+"%","50%"],data:[{value:o.value,label:{normal:{formatter:function(l){return l.value+"%"},position:"center",show:!0,textStyle:{fontSize:"20",fontWeight:"bold",color:colors[e][0]}}}},{value:100-o.value,name:"invisible",itemStyle:{normal:{color:colors[e][1]},emphasis:{color:colors[e][1]}}}]})}),option={backgroundColor:"#0d235e",title:titleArr,series:seriesArr};