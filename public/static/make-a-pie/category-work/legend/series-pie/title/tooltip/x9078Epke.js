for(var color=[["#058aee","#0ed2f9"],["#0666e8","#0486ed"],["#ea7500","#ffaf60"],["#fdc502","#fcfa02"]],names=["3小时","3-5小时","5-7小时","7-10小时"],pie_data=[],data=["116","321","516","816"];pie_data.length<4;)pie_data.push({value:data[pie_data.length],name:names[pie_data.length],itemStyle:{normal:{color:{x:1,y:1,x2:0,y2:0,type:"linear",global:!1,colorStops:[{offset:0,color:color[pie_data.length][0]},{offset:1,color:color[pie_data.length][1]}]}}}});option={backgroundColor:"#010040",title:{text:"双11购物占比",left:"30%",top:"35%",textStyle:{color:"white"}},tooltip:{show:!0},legend:{show:!0,orient:"vertical",left:"30%",top:"42%",itemGap:20,textStyle:{fontSize:12,color:"white"}},series:[{type:"pie",radius:"30%",center:["70%","50%"],itemStyle:{normal:{shadowColor:"rgba(0, 0, 0, 0.8)",shadowBlur:10,label:{show:!1},labelLine:{show:!1}},emphasis:{label:{show:!1,position:"center",textStyle:{fontSize:"30",fontWeight:"bold"}}}},data:pie_data}]};
