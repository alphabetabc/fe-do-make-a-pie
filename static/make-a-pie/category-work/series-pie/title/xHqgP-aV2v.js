let value=60.72;option={backgroundColor:"#000E1A",title:{text:"{a|"+value+`%}
{c|设备达标率}`,x:"center",y:"center",textStyle:{rich:{a:{fontSize:60,color:"#7DB2FF",padding:5},c:{fontSize:30,color:"#E7E9FF",padding:5}}}},series:[{type:"pie",radius:["52%","40%"],silent:!0,clockwise:!0,label:{normal:{position:"center"}},data:[{value,name:"",itemStyle:{normal:{color:{colorStops:[{offset:0,color:"#3CDDFF"},{offset:1,color:"#4084FF"}]}}}},{value:100-value,name:"",label:{normal:{show:!1}},itemStyle:{normal:{color:{colorStops:[{offset:0,color:"#777777"},{offset:.3,color:"#444444"},{offset:.6,color:"#222222"}]}}}}]}]};