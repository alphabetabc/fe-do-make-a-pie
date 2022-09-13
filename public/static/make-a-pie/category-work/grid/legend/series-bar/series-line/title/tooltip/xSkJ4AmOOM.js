var colors=["#B8B8B8","#8B4513"],xData=function(){for(var e=[],a=1;a<32;a++)e.push(a+"日");return e}();function toDecimal2(e){var a=parseFloat(e);if(isNaN(a))return!1;var i=Math.round(e*100)/100,t=i.toString(),o=t.indexOf(".");for(o<0&&(o=t.length,t+=".");t.length<=o+2;)t+="0";return t}var data1=[46,33,33,43,41,43,45,50,46,43,46,37,40,31,38,37,38,35,47,32,49,35,40,39,39,32,42,32,44,43,39],data2=[36,40,30,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,44,43,42,31,41,38,32,34,33,30,43,35,36],data3=[26,33,33,43,41,43,45,50,46,43,46,37,40,31,38,37,38,35,47,32,49,35,40,39,39,32,42,32,44,43,39],data4=[42,40,30,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,44,43,42,31,41,38,32,34,33,30,43,35,36],data5=[24,30,53,40,41,43,45,50,46,43,46,37,40,31,38,37,38,35,42,22,49,35,40,39,30,32,42,32,44,43,39],data6=[25,31,45,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,44,43,42,31,41,38,22,34,33,30,48,35,36],data7=[32,33,33,43,41,43,45,50,46,43,46,37,40,31,38,37,38,35,47,32,49,45,40,39,39,32,42,32,24,43,39],data8=[31,40,35,45,39,45,31,46,31,36,30,45,44,31,30,39,45,34,24,43,42,31,41,38,32,34,33,30,43,25,36];options=[{title:{text:"投诉与受理分析",subtext:"研制环节",textStyle:{fontSize:"15"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:85},legend:{data:["投诉信息数","受理信息数"],align:"left",left:10,top:50},xAxis:{type:"category",axisLabel:{interval:0,textStyle:{fontSize:9}},data:xData},yAxis:{type:"value",name:"",min:0,max:80,position:"left",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} "}},series:[{name:"投诉信息数",type:"bar",color:colors[0],data:data1},{name:"受理信息数",color:colors[1],type:"line",itemStyle:{normal:{lineStyle:{width:5},color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#fbfa96"},{offset:0,color:"#f72806"}],!1),opacity:.4}},data:data2}]},{title:{text:"投诉与受理分析",subtext:"生产环节",textStyle:{fontSize:"15"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:85},legend:{data:["投诉信息数","受理信息数"],align:"left",left:10,top:50},xAxis:{type:"category",axisLabel:{interval:0,textStyle:{fontSize:9}},data:xData},yAxis:{type:"value",name:"",min:0,max:80,position:"left",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} "}},series:[{name:"投诉信息数",type:"bar",color:colors[0],data:data3},{name:"受理信息数",color:colors[1],type:"line",itemStyle:{normal:{lineStyle:{width:5},color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#fbfa96"},{offset:0,color:"#f72806"}],!1),opacity:.4}},data:data4}]},{title:{text:"投诉与受理分析",subtext:"流通环节",textStyle:{fontSize:"15"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:85},legend:{data:["投诉信息数","受理信息数"],align:"left",left:10,top:50},xAxis:{type:"category",axisLabel:{interval:0,textStyle:{fontSize:9}},data:xData},yAxis:{type:"value",name:"",min:0,max:80,position:"left",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} "}},series:[{name:"投诉信息数",type:"bar",color:colors[0],data:data5},{name:"受理信息数",color:colors[1],type:"line",itemStyle:{normal:{lineStyle:{width:5},color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#fbfa96"},{offset:0,color:"#f72806"}],!1),opacity:.4}},data:data6}]},{title:{text:"投诉与受理分析",subtext:"餐饮服务/使用环节",textStyle:{fontSize:"15"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow",textStyle:{color:"#fff"}}},grid:{top:85},legend:{data:["投诉信息数","受理信息数"],align:"left",left:10,top:50},xAxis:{type:"category",axisLabel:{interval:0,textStyle:{fontSize:9}},data:xData},yAxis:{type:"value",name:"",min:0,max:80,position:"left",axisLine:{lineStyle:{color:"#000"}},axisLabel:{formatter:"{value} "}},series:[{name:"投诉信息数",type:"bar",color:colors[0],data:data7},{name:"受理信息数",color:colors[1],type:"line",itemStyle:{normal:{lineStyle:{width:5},color:new echarts.graphic.LinearGradient(0,0,1,0,[{offset:1,color:"#fbfa96"},{offset:0,color:"#f72806"}],!1),opacity:.4}},data:data8}]}];