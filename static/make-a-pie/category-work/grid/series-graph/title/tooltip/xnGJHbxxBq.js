var axisData=["周一","周二","周三","很长很长的周四","周五","周六","周日"],data=axisData.map(function(e,a){return Math.round(Math.random()*1e3*(a+1))}),links=data.map(function(e,a){return{source:a,target:a+1}});links.pop(),option={title:{text:"笛卡尔坐标系上的 Graph"},tooltip:{},xAxis:{type:"category",boundaryGap:!1,data:axisData},yAxis:{type:"value"},series:[{type:"graph",layout:"none",coordinateSystem:"cartesian2d",symbolSize:40,label:{normal:{show:!0}},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],data,links,lineStyle:{normal:{color:"#2f4554"}}}]};
