for(var labelData=[],i=0;i<100;++i)labelData.push({value:1}),i<18?labelData[i].itemStyle={normal:{color:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:3}}:i<55?labelData[i].itemStyle={normal:{color:"#00FF99",borderColor:"#021311",borderWidth:3}}:i<70&&(labelData[i].itemStyle={normal:{color:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:3}});option={tooltip:{show:!1},series:[{type:"pie",hoverAnimation:!1,clockwise:!1,startAngle:0,data:labelData,center:["50%","50%"],radius:["58%","72%"],itemStyle:{normal:{color:"#00FF99",borderColor:"rgba(0,0,0,1)",borderWidth:3}},labelLine:{normal:{show:!1}}},{type:"pie",hoverAnimation:!1,avoidLabelOverlap:!0,clockwise:!1,startAngle:0,data:[1],center:["50%","50%"],radius:["56%","56.7%"],label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:26}},emphasis:{show:!1}},labelLine:{normal:{show:!1}}},{type:"pie",hoverAnimation:!1,avoidLabelOverlap:!0,clockwise:!1,startAngle:0,data:[1],center:["50%","50%"],radius:["74%","90%"],label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:26}},emphasis:{show:!1}},labelLine:{normal:{show:!1}}}]};