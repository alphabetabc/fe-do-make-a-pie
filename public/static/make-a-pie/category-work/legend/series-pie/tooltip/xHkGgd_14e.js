option={tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",bottom:"10px",itemHeight:18,textStyle:{color:"#333",fontStyle:"normal",fontWeight:"normal",fontFamily:"微软雅黑",fontSize:14},formatter:function(t){for(var a=option.series[0].data,o=0,e=0;e<option.series[0].data.length;e++)o+=parseFloat(a[e].value);for(var e=0;e<option.series[0].data.length;e++)if(t==a[e].name)return t+"  "+(parseFloat(a[e].value)/o*100).toFixed(2)+"%"},selectedMode:!1,data:["第1机构","第2机构","第3机构","第4机构"]},series:[{name:"占比",type:"pie",radius:["30%","50%"],center:["50%","33%"],avoidLabelOverlap:!1,label:{normal:{show:!1,position:"center"},emphasis:{show:!0,formatter:function(t){return t.percent+"%"},textStyle:{fontSize:"20",fontWeight:"bold"}}},labelLine:{normal:{show:!0}},data:[{name:"第1机构",value:30},{name:"第2机构",value:20},{name:"第3机构",value:40},{name:"第4机构",value:40}]}]};
