var dataStyle={normal:{label:{show:!1},labelLine:{show:!1},shadowBlur:40,shadowColor:"rgba(40, 40, 40,0.5)"}};option={backgroundColor:"#f2f2f2",color:["#ffdb6d","#89c9e1","#ce77b6","#f29e29"],title:{text:"平日甜食占比",x:"center",top:"92%",textStyle:{color:"#6c6c6c"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",x:"2%",top:"40%",data:["蛋糕","冷饮","甜筒","糖果"]},series:[{name:"平日甜食占比",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,itemStyle:dataStyle,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,formatter:function(e){return e.percent.toFixed(0)+"%"},textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!0}},data:[{value:480,name:"蛋糕"},{value:320,name:"冷饮"},{value:250,name:"甜筒"},{value:145,name:"糖果"}]}]};
