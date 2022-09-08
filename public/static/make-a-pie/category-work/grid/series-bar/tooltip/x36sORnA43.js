var sda={a:100,b:120,c:130,d:0,e:150};sda.d==0&&(sda.d=-.01),option={tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){e[3].value==-.01&&(e[3].value=0);var t=e[0].seriesName+" : "+e[0].value+"<br/>"+e[1].seriesName+" : "+e[1].value+"<br/>"+e[2].seriesName+" : "+e[2].value+"<br/>"+e[3].seriesName+" : "+-e[3].value+"<br/>"+e[4].seriesName+" : "+e[4].value;return t}},grid:{top:"8%",left:"6%",right:"25%",bottom:"1%",containLabel:!0},xAxis:[{type:"value",show:!1,axisLabel:{formatter:function(e){if(e<0)return-e}}}],yAxis:[{show:!1,axisTick:{show:!1},data:[""]}],series:[{name:"铁塔",type:"bar",stack:"总量1",barMinHeight:34,barWidth:20,barGap:"180%",label:{normal:{show:!0,formatter:`{a}

{c}`,position:["12%","-90%"]}},data:[sda.a],itemStyle:{normal:{color:"#83B2FA",label:{textStyle:{color:"black"}}}}},{name:"自留",type:"bar",stack:"总量1",barMinHeight:34,barWidth:20,label:{normal:{show:!0,formatter:`{a}

{c}`,position:["12%","-90%"]}},data:[sda.b],itemStyle:{normal:{color:"#90FB91",label:{textStyle:{color:"black"}}}}},{name:"三方",type:"bar",stack:"总量1",barMinHeight:34,barWidth:20,label:{normal:{show:!0,formatter:`{a}

{c}`,position:["12%","-90%"]}},data:[sda.c],itemStyle:{normal:{color:"#fff",shadowColor:"#1B66FF",shadowBlur:1.5,label:{textStyle:{color:"black"}}}}},{name:"无设备",type:"bar",stack:"总量2",barMinHeight:34,barWidth:20,label:{normal:{show:!0,position:["12%","26%"],formatter:function(e){var t="";return e.data!=-.01?t=-e.data+`

无设备`:e.data==-.01&&(t=0+`

无设备`),t}}},data:[sda.d],itemStyle:{normal:{color:"#fff",shadowColor:"#1B66FF",shadowBlur:1.5,label:{textStyle:{color:"black"}}}}},{name:"有设备",type:"bar",stack:"总量2",barMinHeight:34,barWidth:20,label:{normal:{show:!0,formatter:`{c}

{a}`,position:["12%","26%"]}},data:[sda.e],itemStyle:{normal:{color:"#83B2FA",label:{textStyle:{color:"black"}}}}}]};
