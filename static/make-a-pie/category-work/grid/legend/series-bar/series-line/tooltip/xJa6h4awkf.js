var option={backgroundColor:"rgba(011, 023, 059)",tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(a){var r="";for(let e in a)e==0&&(r+=a[e].name+"<br>"),r+=a[e].seriesName+"："+a[e].data+"万元<br>",e>0&&a[e].seriesName=="不可用余额"&&a[e-1].seriesName=="可用余额"&&(r+="总存款余额："+(a[e].data+a[e-1].data)+"万元<br>"),e>0&&a[e].seriesName=="支出"&&a[e-1].seriesName=="收入"&&(r+="净收入："+(a[e-1].data-a[e].data)+"万元<br>");return r}},legend:{textStyle:{color:"#fff"},data:["可用余额","不可用余额","收入","支出"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",axisLine:{lineStyle:{color:"#808eb7",width:2}},data:["周一","周二","周三","周四","周五","周六","周日"]},yAxis:{axisLine:{lineStyle:{color:"#808eb7",width:2}},splitLine:{lineStyle:{color:"#AAAAAA56"}}},series:[{name:"可用余额",type:"bar",stack:"余额",barMaxWidth:30,data:[120,132,101,134,90,230,210],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:1,color:"#00ffff"},{offset:0,color:"#3893e5"}],!1)}}},{name:"不可用余额",type:"bar",stack:"余额",barMaxWidth:30,data:[220,182,191,234,290,330,310],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,1,0,0,[{offset:1,color:"#bab3bd69"},{offset:0,color:"#bab3bd69"}],!1)}}},{name:"收入",data:[220,453,301,354,290,330,320],type:"line",itemStyle:{normal:{color:"#0088D4"}}},{name:"支出",data:[213,356,123,225,78,123,354],type:"line",itemStyle:{normal:{color:"#DB3233"}}}]};
