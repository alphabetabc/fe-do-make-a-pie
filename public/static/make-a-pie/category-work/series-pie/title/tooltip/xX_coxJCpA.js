option={title:{text:"Awesome Chart"},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{},series:[{type:"bar",data:[220,182,191,234,290,330,310]}]};var data=[{name:"部级及以上",value:"11"},{name:"厅级",value:"11"},{name:"处级",value:"11"},{name:"科级",value:"11"}],total=0,dw="人";data.map(function(e){total+=parseInt(e.value)}),option={title:{text:"{a|"+total+"}{b|"+dw+"}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:40,color:"#0ceb9f",fontWeight:"600"},b:{fontSize:20,color:"#0ceb9f",padding:[10,0,0,0]}}}},color:["#2cafad","#036399","#576512","#014144","#4D6AC3"],tooltip:{trigger:"item"},series:[{type:"pie",radius:["20%","30%"],center:["50%","50%"],minAngle:20,data,labelLine:{normal:{lineStyle:{color:"#00232A"},length:20,length2:30}},label:{normal:{textStyle:{color:"#fff"},formatter:`{a|{d}%}
{hr|}

`,rich:{a:{color:"#fff",fontSize:12,lineHeight:20},b:{fontSize:12,lineHeight:20,color:"#fff"},hr:{backgroundColor:"#00c1ff",width:50,height:4}}}}},{type:"pie",name:"内层细圆环",radius:["17%","18%"],center:["50%","50%"],hoverAnimation:!1,startAngle:200,tooltip:{show:!1},itemStyle:{normal:{color:"#00232A"}},label:{show:!1},data:[100]}]};
