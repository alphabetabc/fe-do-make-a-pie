var data=[{state:"良",name:"单车系统",value:54},{state:"中",name:"雾霾系统",value:44},{state:"差",name:"垃圾管理系统",value:35},{state:"优",name:"城市绿道系统",value:30},{state:"良",name:"智慧家园系统",value:20}],titleArr=[],seriesArr=[],colors=[["#C467FF","#CACACA"],["#2CAF70","#CACACA"],["#FFA23F","#CACACA"],["#625AFF","#CACACA"],["#4B8BFF","#CACACA"]];data.forEach(function(e,t){seriesArr.push({name:e.name,type:"pie",clockWise:!1,radius:[60,70],itemStyle:{normal:{color:colors[t][0],shadowColor:colors[t][0],shadowBlur:0,label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:[t*20+10+"%","50%"],data:[{value:e.value,label:{normal:{formatter:function(a){return[e.state,a.value+"%"].join(`

`)},position:"center",show:!0,textStyle:{fontSize:"20",fontWeight:"bold",color:colors[t][0]}}}},{value:100-e.value,name:"invisible",itemStyle:{normal:{color:colors[t][1]},emphasis:{color:colors[t][1]}}}]})});var option={title:{text:"通过率/数据质量评价",textStyle:{align:"center",color:"#333333",fontSize:18},top:"2%",left:"2%"},legend:{data:[{name:"单车系统"},{name:"雾霾系统"},{name:"垃圾管理系统"},{name:"城市绿道系统"},{name:"智慧家园系统"}],type:"scroll",bottom:"40",itemGap:30,itemWidth:20,itemHeight:10,textStyle:{fontSize:"13"}},tooltip:{show:!0,formatter:function(e){return e.name=="invisible"?e.marker+e.seriesName+"未通过："+e.value+"%":e.marker+e.seriesName+"通过："+e.value+"%"}},series:seriesArr};return option;
