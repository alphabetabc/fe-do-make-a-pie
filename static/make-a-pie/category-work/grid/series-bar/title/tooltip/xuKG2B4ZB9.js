option={backgroundColor:"#013A54",title:{text:"",x:"center",y:"4%",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"15%",right:"3%",left:"5%",bottom:"12%"},xAxis:[{type:"category",data:["全民","集体","农电工","社会招聘","劳务派遣","其他"],axisLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.12)"}},axisLabel:{show:!1,margin:10,color:"#e2e9ff",textStyle:{fontSize:14}}}],yAxis:[{name:"单位：人",axisLabel:{show:!1,formatter:"{value}",color:"#e2e9ff"},axisTick:{show:!1},axisLine:{show:!1,lineStyle:{color:"rgba(255,255,255,1)"}},splitLine:{show:!1,lineStyle:{color:"rgba(255,255,255,0.12)"}}}],series:[{type:"bar",data:[3e3,2600,1300,1300,1250,1500,2e3,3e3,1250,1500,2e3,3e3],barWidth:"20px",itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0,244,255,1)"},{offset:1,color:"rgba(0,77,167,1)"}],!1),barBorderRadius:[30,30,30,30],shadowColor:"rgba(0,160,221,1)",shadowBlur:4}},label:{normal:{show:!0,lineHeight:30,width:80,height:30,backgroundColor:"rgba(0,160,221,0.1)",borderRadius:200,position:["-8","-60"],distance:1,formatter:["    {d|●}",` {a|{c}}     
`,"    {b|}"].join(","),rich:{d:{color:"#3CDDCF"},a:{color:"#fff",align:"center"},b:{width:1,height:30,borderWidth:1,borderColor:"#234e6c",align:"left"}}}}}]};
