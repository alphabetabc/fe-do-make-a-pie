option={title:{text:"标题",subtext:"副标题",right:"center",top:"1%"},legend:{right:10,data:["1990","2015"]},xAxis:{data:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},yAxis:{},series:[{type:"scatter",name:"1990",symbol:"circle",symbolSize:function(t){return Math.sqrt(t[1])*2},label:{emphasis:{show:!0,formatter:function(t){return t.data[2]},position:"top"}},data:[["Sun",50],["Mon",210],["Tue",90],["Wed",234],["Thu",100],["Fri",330],["Sat",400]]}]};
