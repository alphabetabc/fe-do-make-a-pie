var data=[{name:"铜精矿",value:54},{name:"石英砂",value:44},{name:"炉渣",value:35},{name:"铁矿",value:30},{name:"硫化矿石",value:20}],titleArr=[],seriesArr=[],colors=[["#389af4","#dfeaff"],["#ff8c37","#ffdcc3"],["#ffc257","#ffedcc"],["#fd6f97","#fed4e0"],["#a181fc","#e3d9fe"]];data.forEach(function(e,t){titleArr.push({text:e.name,left:t*20+10+"%",top:"55%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:"16",color:colors[t][0],textAlign:"center"}}),seriesArr.push({name:e.name,type:"pie",clockWise:!1,radius:[60,70],itemStyle:{normal:{color:colors[t][0],shadowColor:colors[t][0],shadowBlur:0,label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:[t*20+10+"%","30%"],data:[{value:e.value,label:{normal:{formatter:function(l){return l.value+"%"},position:"center",show:!0,textStyle:{fontSize:"20",fontWeight:"bold",color:colors[t][0]}}}},{value:100-e.value,name:"invisible",itemStyle:{normal:{color:colors[t][1]},emphasis:{color:colors[t][1]}}}]})});var option={backgroundColor:"transparent",title:titleArr,tooltip:{show:!0,formatter:function(e){return e.name=="invisible"?e.marker+e.seriesName+"剩余存量："+e.value+"%":e.marker+e.seriesName+"已使用："+e.value+"%"}},series:seriesArr};return option;