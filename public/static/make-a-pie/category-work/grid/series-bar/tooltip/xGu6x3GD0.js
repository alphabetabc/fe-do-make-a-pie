option={backgroundColor:"#00265f",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"15%",right:"3%",left:"5%",bottom:"12%"},xAxis:[{type:"category",data:["制造业","建筑业","农林牧渔","批发零售业","住宿餐饮业","居民服务及其他"],axisLine:{lineStyle:{color:"rgba(255,255,255,0.12)"}},axisLabel:{margin:10,color:"#e2e9ff",textStyle:{fontSize:14}}}],yAxis:[{axisLabel:{formatter:"{value}",color:"#e2e9ff"},axisLine:{show:!1},splitLine:{lineStyle:{color:"rgba(255,255,255,0.12)"}}}],series:[{type:"bar",data:[14859,7927,6580,75030,10424,10668],barWidth:"20px",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,244,255,1)"},{offset:1,color:"rgba(0,77,167,1)"}],!1),barBorderRadius:[30,30,30,30],shadowColor:"rgba(0,160,221,1)",shadowBlur:4}},label:{normal:{show:!0,lineHeight:30,width:80,height:30,backgroundColor:"rgba(0,160,221,0.1)",borderRadius:200,position:["-8","-60"],distance:1,formatter:["    {d|●}",` {a|{c}}     
`,"    {b|}"].join(","),rich:{d:{color:"#3CDDCF"},a:{color:"#fff",align:"center"},b:{width:1,height:30,borderWidth:1,borderColor:"#234e6c",align:"left"}}}}}]};
