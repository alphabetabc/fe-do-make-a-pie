app.title="堆叠条形图";var _actual=[50,100,150],_should=[150,150,150],_college=["学院1","学院2","学院3"];option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){console.log(t[0].dataIndex);var e=_college[t[0].dataIndex]+"<br>";return e+="男应报道： "+_should[t[0].dataIndex]+" 人<br>",e+="男实报道： "+_actual[t[0].dataIndex]+" 人<br>",e+="男报到率： "+(_actual[t[0].dataIndex]*100/_should[t[0].dataIndex]).toFixed(2)+" %<br>",e+="女应报道： "+_should[t[0].dataIndex]+" 人<br>",e+="女实报道： "+_actual[t[0].dataIndex]+" 人<br>",e+="女报到率： "+(_actual[t[0].dataIndex]*100/_should[t[0].dataIndex]).toFixed(2)+" %",e}},legend:{show:!0,top:10,data:["男","女"]},grid:{left:"3%",right:"6%",bottom:"3%",top:40,containLabel:!0},xAxis:{type:"value",show:!0,max:130},yAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},data:_college},series:[{name:"男应报道人数",type:"bar",stack:"人数",label:{normal:{show:!0,formatter:function(t){return _should[t.dataIndex]+" 人"},position:"inside"}},itemStyle:{normal:{color:"#aaa"}},data:_should.map(function(t,e){return parseInt(t/(t+_actual[e])*100)})},{name:"男",type:"bar",stack:"人数",label:{normal:{show:!0,formatter:function(t){return _actual[t.dataIndex]+" 人"},position:"inside"}},itemStyle:{normal:{color:"#188333"}},data:_actual.map(function(t,e){return parseInt(t/(t+_should[e])*100)})},{name:"男报到率",type:"bar",stack:"人数",label:{normal:{formatter:function(t){return(_actual[t.dataIndex]*100/_should[t.dataIndex]).toFixed(2)+" %"},show:!0,position:"insideLeft",textStyle:{color:"#000"}}},itemStyle:{normal:{color:"transparent"}},data:[30,30,30]},{name:"女应报道人数",type:"bar",stack:"人数1",label:{normal:{show:!0,formatter:function(t){return _should[t.dataIndex]+" 人"},position:"inside"}},itemStyle:{normal:{color:"#aaa"}},data:_should.map(function(t,e){return parseInt(t/(t+_actual[e])*100)})},{name:"女",type:"bar",stack:"人数1",label:{normal:{show:!0,formatter:function(t){return _actual[t.dataIndex]+" 人"},position:"inside"}},itemStyle:{normal:{color:"#c54040"}},data:_actual.map(function(t,e){return parseInt(t/(t+_should[e])*100)})},{name:"女报到率",type:"bar",stack:"人数1",label:{normal:{formatter:function(t){return(_actual[t.dataIndex]*100/_should[t.dataIndex]).toFixed(2)+" %"},show:!0,position:"insideLeft",textStyle:{color:"#000"}}},itemStyle:{normal:{color:"transparent"}},data:[30,30,30]}]};
