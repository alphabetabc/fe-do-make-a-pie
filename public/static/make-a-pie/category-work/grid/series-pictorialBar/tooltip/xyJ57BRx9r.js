var data={xAxis:["工作表现的质量","沟通和信息","态度和行","流程","预约和接待","接车和交车"],yAxis:[100,53,84,54,43,39]};option={backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(a){return a[0].name+": "+a[0].value}},xAxis:{data:data.xAxis,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"#687284 ",fontSize:12,interval:0,formatter:function(a,e){for(var i=null,o=0;o<a.length;o++)if(o%4===0){var s=a.substr(o,4)+`
`;o===0?i=s:i+=s}return i}}},yAxis:{splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1}},color:["#92A1BC"],series:[{name:"hill",type:"pictorialBar",barCategoryGap:"-100%",label:{normal:{show:!0,position:"top",color:"#444"}},symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",itemStyle:{normal:{opacity:.5},emphasis:{opacity:.5}},data:data.yAxis,z:10}]};