for(var data=[],healthy=30,i=0;i<=100;i++)i<=healthy?data.push({value:[0,i],name:"real"}):data.push({value:[0,i],name:"unreal",visualMap:!1});option={tooltip:{trigger:"item",formatter:"{b}:{c}"},visualMap:{max:100,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},series:[{name:"",type:"pie",radius:["65%","70%"],center:["50%","50%"],clockwise:!0,data,color:["#fff","#E6E6E6"],hoverAnimation:!1,legendHoverLink:!1,label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1}},itemStyle:{normal:{borderWidth:4,borderColor:"#ffffff"},emphasis:{borderWidth:0,shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}],backgroundColor:"#fff"};