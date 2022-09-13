var chartName=["数学学院","物理学院","化学学院","生命科学学院","工学院","材料科学与工程学院","生物医学工程学院"],chartData=["132","110","100","100","90","90","70"],attackSourcesColor=[{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#FF7E7C"},{offset:1,color:"#FF6061"}]},{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#F9C270"},{offset:1,color:"#F9A146"}]},{x:0,y:0,x2:1,y2:2,colorStops:[{offset:0,color:"#F9C270"},{offset:1,color:"#F9A146"}]},{x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#5CC0FF"},{offset:1,color:"#5998FF"}]}],option={grid:{left:"2%",right:"10%",bottom:"2%",top:"2%",containLabel:!0},xAxis:[{show:!1},{show:!1}],yAxis:{type:"category",inverse:!0,show:!1},series:[{show:!0,type:"bar",barGap:"-100%",barWidth:"20%",z:2,itemStyle:{normal:{color:function(o){return attackSourcesColor[o.dataIndex>3?3:o.dataIndex]},barBorderRadius:5}},label:{normal:{show:!0,textStyle:{color:"#000",fontSize:14},position:"right",formatter:function(o){return chartData[o.dataIndex].toFixed(0)}}},data:chartData},{show:!0,type:"bar",xAxisIndex:1,barGap:"-100%",barWidth:"20%",itemStyle:{normal:{barBorderRadius:200,color:"transparent"}},label:{normal:{show:!0,position:[0,"-23"],textStyle:{fontSize:14,color:"#333"},formatter:function(o){return chartName[o.dataIndex]}}},data:chartData}]};
