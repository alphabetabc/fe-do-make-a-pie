option={tooltip:{confine:!0,trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"#FFA980",opacity:.1}},formatter:function(i){var e=i[0].value;if(e===null||e==="")e=0;else{e=(e||0).toString();var t="";if(e.indexOf("-")>-1){for(e=e.replace("-","");e.length>3;)t="."+e.slice(-3)+t,e=e.slice(0,e.length-3);e&&(t="-"+e+t)}else{for(;e.length>3;)t="."+e.slice(-3)+t,e=e.slice(0,e.length-3);e&&(t=e+t)}}return i[0].name+"<br/>"+i[0].marker+"Rp"+t+"<br/>"}},label:{textStyle:{color:"black",fontSize:16,fontWeight:600}},grid:{height:"auto",left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",data:["11/03","12/03","13/03","14/03","15/03","16/03","17/03"],axisTick:{show:!1},splitLine:{lineStyle:{width:"0.2",color:"#507b7d"}},axisLine:{show:!1,lineStyle:{color:"rgba(0,0,0,0.4)"}},axisLabel:{show:!0,textStyle:{fontSize:10}}},yAxis:{name:$_yName,type:"value",axisTick:{show:!1},splitLine:{lineStyle:{width:"0.2",color:"#507b7d"}},axisLine:{show:!1,lineStyle:{color:"rgba(0,0,0,0.4)"}},axisLabel:{show:!0,textStyle:{fontSize:10},formatter:function(i,e){return i>=1e6?i=i/1e6:i=i/1e3,i}}},series:[{name:"Hour 24",type:"bar",data:[0,0,0,0,5940455,6653,1015699],itemStyle:{barBorderRadius:[90,90,0,0],color:"rgba(116,41,201, 1)"},barWidth:6}]};