const arr=["面包饮品","特色湘菜","小吃烤肉","江湖海鲜","农家私房","西餐日料","火锅","其他"];option={backgroundColor:"#00265f",title:{text:"美食",x:"center",y:"4%",textStyle:{color:"#fff",fontSize:"22"},subtextStyle:{color:"#90979c",fontSize:"16"}},tooltip:{trigger:"axis",show:!1,axisPointer:{type:"shadow"}},grid:{top:"15%",right:"3%",left:"5%",bottom:"12%"},xAxis:[{type:"category",data:[5e3,2600,1300,1300,1250,1500,1300,1e3],axisTick:{show:!1},nameTextStyle:{color:"#82b0ec"},axisLine:{show:!1,lineStyle:{color:"#82b0ec"}},axisLabel:{textStyle:{color:"#fff"},margin:30},splitLine:{show:!1}}],yAxis:[{axisLabel:{formatter:"{value}",color:"#e2e9ff",show:!1},axisLine:{show:!1,lineStyle:{color:"rgba(255,255,255,1)"}},axisTick:{show:!1},splitLine:{show:!1}}],series:[{type:"bar",data:[5e3,2600,1300,1300,1250,1500,1300,1e3],barWidth:"20px",itemStyle:{normal:{color:function(a){var e=["rgba(21,177,255,1)","rgba(229,115,63,1)","rgba(240,189,108,1)","rgba(237,214,102,1)","rgba(77,168,222,1)","rgba(25,168,164,1)"],o=["rgba(11,94,255,0.8)","rgba(229,115,63,0.8)","rgba(240,189,108,0.8)","rgba(237,214,102,0.8)","rgba(77,168,222,0.8)","rgba(25,168,164,0.8)"],r=new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:e[a.dataIndex%6]},{offset:1,color:o[a.dataIndex%6]}]);return r},barBorderRadius:[30,30,30,30],shadowColor:"rgba(0,160,221,1)",shadowBlur:4}},label:{normal:{show:!0,lineHeight:15,width:100,height:30,borderRadius:200,position:["5","-80"],distance:1,formatter:function(a){return"{a|"+arr[a.dataIndex].split("").join(`
`)+"}"},rich:{a:{color:"rgba(21,177,255,1)"}}}}}]};
