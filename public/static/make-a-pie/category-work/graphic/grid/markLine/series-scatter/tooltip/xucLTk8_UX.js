option={tooltip:{showDelay:0,backgroundColor:"rgba(0,0,0,0.6)",color:"#666666",textStyle:{color:"#666666",fontSize:12},padding:[5,10],extraCssText:"box-shadow:0 2px 4px rgba(91,121,251,0.3);",formatter:function(e){var t="";return e.value.length>3?(t="<table><tr><td style='color:#FFFFFF;'>"+e.data[2]+"</td></tr>",t+="<tr>",t+="<td><span style='color:#FFFFFF;'>业绩</span></td>",t+="<td><span style='color:#FFFFFF;font-size: 14px;font-family: Roboto-Medium;margin-left: 12px;'>"+e.data[3]+"</span></td>",t+="</tr>",t+="<tr>",t+="<td><span style='color:#FFFFFF;'>达标率</span></td>",t+="<td><span style='color:#FFFFFF;font-size: 14px;font-family: Roboto-Medium;margin-left: 12px;'>"+e.data[4]+"%</span></td>",t+="</tr>",t+="<tr>",t+="<td><span style='color:#FFFFFF;'>同比</span></td>",t+="<td><span style='color:#FFFFFF;font-size: 14px;font-family: Roboto-Medium;margin-left: 12px;'>"+e.data[5]+"%</span></td>",t+="</tr>",t+="</table>"):t=e.seriesName+" <br>"+e.name+"   "+e.value+"% ",t},axisPointer:{show:!0,type:"line",lineStyle:{type:"dashed",width:1}}},grid:{left:"30",right:"80",bottom:"10",top:"30",containLabel:!0},graphic:[{type:"text",z:100,left:"20",top:"20",style:{fill:"#296BEF",textAlign:"right",text:["良好","同比高","达标率低"].join(`
`),font:"10px Microsoft YaHei"}},{type:"text",z:100,right:"20",top:"20",style:{fill:"#296BEF",text:["优秀","同比高","达标率高"].join(`
`),font:"10px Microsoft YaHei"}},{type:"text",z:100,right:"20",bottom:"20",style:{fill:"#296BEF",text:["一般","同比低","达标率高"].join(`
`),font:"10px Microsoft YaHei"}},{type:"text",z:100,left:"20",bottom:"20",style:{fill:"#296BEF",textAlign:"right",text:["加油","同比低","达标率低"].join(`
`),font:"10px Microsoft YaHei"}}],xAxis:{show:!1,axisLine:{lineStyle:{color:"#ddd"}},axisLabel:{color:"#666"},splitLine:{show:!1,lineStyle:{color:"#eee"}},splitArea:{show:!1}},yAxis:{show:!1,axisLine:{lineStyle:{color:"#ddd"}},axisLabel:{color:"#666"},splitLine:{show:!1,lineStyle:{color:"#eee"}},splitArea:{show:!1}},series:[{type:"scatter",symbolSize:40,data:[["199.9","-43.2","宋伊","1235","199.9","-43.2"],["72.7","-35.7","杨东","353","72.7","-35.7"],["76.2","-32.5","郑洪","432","76.2","-32.5"],["74.8","-34.8","段凤","359","74.8","-34.8"],["73.2","-28.0","余珊","284","73.2","-28.0"],["83.8","-18.6","张忠","736","83.8","-18.6"],["76.6","-25.5","刘一泓","751","76.6","-25.5"],["79.3","-22.7","梁洪亮","614","79.3","-22.7"],["80.7","-32.2","宋兰","363","80.7","-32.2"],["78.7","-28.9","易斌","482","78.7","-28.9"],["78.7","-18.4","余鸿","606","78.7","-18.4"]],label:{show:!0,position:"bottom",formatter:"{b}"},itemStyle:{normal:{color:"#FF6520",opacity:.3,label:{show:!0,fontSize:10,color:"#666666"}},labelLine:{show:!0}},markLine:{silent:!0,symbol:["none","none"],precision:2,lineStyle:{type:"solid",color:"#666666"},label:{color:"#666666",position:"end",formatter:"{b}"},data:[{name:`达标
率85.1%`,xAxis:"85.1"},{name:`同比
-22.0%`,yAxis:"-22.0"}]}}]};
