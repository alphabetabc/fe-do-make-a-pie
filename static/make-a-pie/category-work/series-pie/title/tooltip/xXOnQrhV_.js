const base=1e3;let blue=50;option={backgroundColor:"#F6F6F6",title:{show:!0,text:[`{a|${blue}} `,"{b|天}"].join(""),padding:20,backgroundColor:"#f00",borderRadius:10,textStyle:{rich:{a:{color:"#fff",fontSize:52},b:{color:"#fff",fontSize:26}}},left:"center",top:"center"},tooltip:{show:!1},series:[{type:"pie",startAngle:225,radius:["92%","100%"],center:["50%","50%"],legendHoverLink:!1,hoverAnimation:!1,avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,textStyle:{fontSize:"30",fontWeight:"bold"}}},labelLine:{normal:{show:!1}},data:[{value:blue,itemStyle:{normal:{color:"#36A5F4   "},emphasis:{color:"#36A5F4"}}},{value:1e3*.75-blue,itemStyle:{normal:{color:"#EBF3F4   "},emphasis:{color:"#EBF3F4"}}},{value:1e3*.25,itemStyle:{normal:{color:"#F6F6F6"},emphasis:{color:"#F6F6F6"}}}]},{name:"",type:"pie",radius:["0%","50%"],center:["50%","50%"],silent:!0,labelLine:{normal:{show:!1}},data:[{value:100,itemStyle:{color:"#12AEC3"}}]}]};
