var jsonData={RECORDS:[{enterprises:"XX汽车有限公司",TotalTax:1111111111111e-2,TotalTax_Rank:1,TotalTaxLeave:55555555555e-2,TotalTaxLeave_Rank:7,TotalContribute:44444444444e-2,TotalContribute_Rank:6,TotalAppropriation:11111111111e-2,TotalAppropriation_Rank:9},{enterprises:"XX股份有限公司XX分公司",TotalTax:888888888888e-2,TotalTax_Rank:2,TotalTaxLeave:111111111111e-2,TotalTaxLeave_Rank:2,TotalContribute:888888888888e-3,TotalContribute_Rank:2,TotalAppropriation:222222222223e-3,TotalAppropriation_Rank:5},{enterprises:"XX公司",TotalTax:666666666666e-2,TotalTax_Rank:3,TotalTaxLeave:333333333333e-2,TotalTaxLeave_Rank:1,TotalContribute:111111111111e-2,TotalContribute_Rank:1,TotalAppropriation:222222222222e-2,TotalAppropriation_Rank:1}]},dataStyle={normal:{shadowBlur:40,shadowColor:"rgba(40, 40, 40, 0.5)"}},placeHolderStyle={normal:{color:"rgba(0,0,0,0)"},emphasis:{color:"rgba(0,0,0,0)"}};option={title:{text:"开发区2015-2017年度税收前三名企业对比",target:"self",textStyle:{color:"#000",fontSize:23,fontWeight:"bold"}},tooltip:{show:!0,formatter:function(e){if(e.name!="invisible"&&e.name!="是否与第一名统一税收比例"){var a=e.seriesName;return a+='<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+e.color+'"></span>'+e.name+": "+e.value.toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"("+e.percent+"%)",e.name=="税收"?a+="<br/>税收排名: "+jsonData.RECORDS[Math.floor(e.seriesIndex/4)].TotalTax_Rank:e.name=="留成"?a+="<br/>留成排名: "+jsonData.RECORDS[Math.floor(e.seriesIndex/4)].TotalTaxLeave_Rank:e.name=="财力贡献"?a+="<br/>财力贡献排名: "+jsonData.RECORDS[Math.floor(e.seriesIndex/4)].TotalContribute_Rank:e.name=="拨款"&&(a+="<br/>拨款排名: "+jsonData.RECORDS[Math.floor(e.seriesIndex/4)].TotalAppropriation_Rank),a}}},color:["#c23531","#2f4554","#61a0a8","#d48265","#c23531"],legend:{itemGap:12,top:"5%",width:"420",textStyle:{color:"#000",fontSize:18},data:["税收","留成","财力贡献","拨款",{name:"是否与第一名统一税收比例",icon:"circle",textStyle:{fontWeight:"bold"}}]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{type:"pie",center:["50%","33%"],clockWise:!1,radius:[180,200],itemStyle:dataStyle,hoverAnimation:!1,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:jsonData.RECORDS[0].enterprises,data:[{value:jsonData.RECORDS[0].TotalTax,name:"税收"},{value:0,name:"invisible",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["50%","33%"],clockWise:!1,radius:[160,180],itemStyle:dataStyle,hoverAnimation:!1,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:jsonData.RECORDS[0].enterprises,data:[{value:jsonData.RECORDS[0].TotalTaxLeave,name:"留成"},{value:jsonData.RECORDS[0].TotalTax-jsonData.RECORDS[0].TotalTaxLeave,name:"invisible",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["50%","33%"],clockWise:!1,hoverAnimation:!1,radius:[140,160],itemStyle:dataStyle,name:jsonData.RECORDS[0].enterprises,data:[{value:jsonData.RECORDS[0].TotalContribute,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:"财力贡献"},{value:jsonData.RECORDS[0].TotalAppropriation,label:{normal:{show:!0,formatter:"{d}%"}},labelLine:{normal:{length:0,show:!0,length:0,length2:2}},name:"拨款"},{value:jsonData.RECORDS[0].TotalTax-jsonData.RECORDS[0].TotalContribute-jsonData.RECORDS[0].TotalAppropriation,name:"invisible",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["50%","33%"],clockWise:!1,hoverAnimation:!1,radius:[0,1],itemStyle:dataStyle,name:jsonData.RECORDS[0].enterprises,label:{normal:{show:!0,position:"center",color:"black",formatter:["{title|{a}}{abg|}","  {stringHead|指标名}{valueHead|指标值}{rateHead|排名}","{hr|}","    {string|税收}{value|"+(Math.round(jsonData.RECORDS[0].TotalTax*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[0].TotalTax_Rank*100)/100+"}","    {string|留成}{value|"+(Math.round(jsonData.RECORDS[0].TotalTaxLeave*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[0].TotalTaxLeave_Rank*100)/100+"}","  {stringL|财力贡献}{value|"+(Math.round(jsonData.RECORDS[0].TotalContribute*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[0].TotalContribute_Rank*100)/100+"}","    {string|拨款}{value|"+(Math.round(jsonData.RECORDS[0].TotalAppropriation*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[0].TotalAppropriation_Rank*100)/100+"}"].join(`
`),backgroundColor:"#eee",borderColor:"#777",borderWidth:1,borderRadius:4,rich:{title:{color:"#eee",align:"center"},abg:{backgroundColor:"#333",width:"100%",align:"right",height:25,borderRadius:[4,4,0,0]},string:{height:20,align:"left",color:"black",padding:[0,20,0,0]},stringL:{height:20,align:"left",color:"black",padding:[0,10,0,0]},stringHead:{color:"#333",height:24,align:"left",padding:[0,20,0,0]},hr:{borderColor:"#777",width:"100%",align:"right",borderWidth:.5,height:0},value:{width:40,padding:[0,10,0,40],align:"left"},valueHead:{color:"#333",width:40,padding:[0,10,0,30],align:"center"},rate:{width:40,align:"right",padding:[0,10,0,0]},rateHead:{color:"#333",width:40,align:"right",padding:[0,10,0,0]}}}},data:[{value:1,name:"invisible"}]},{type:"pie",center:["33%","67%"],clockWise:!1,radius:[180,200],itemStyle:dataStyle,hoverAnimation:!1,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:jsonData.RECORDS[1].enterprises,data:[{value:jsonData.RECORDS[1].TotalTax,name:"税收"},{value:jsonData.RECORDS[0].TotalTax-jsonData.RECORDS[1].TotalTax,name:"是否与第一名统一税收比例",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["33%","67%"],clockWise:!1,radius:[160,180],itemStyle:dataStyle,hoverAnimation:!1,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:jsonData.RECORDS[1].enterprises,data:[{value:jsonData.RECORDS[1].TotalTaxLeave,name:"留成"},{value:jsonData.RECORDS[1].TotalTax-jsonData.RECORDS[1].TotalTaxLeave,name:"invisible",label:{show:!1},itemStyle:placeHolderStyle},{value:jsonData.RECORDS[0].TotalTax-jsonData.RECORDS[1].TotalTax,name:"是否与第一名统一税收比例",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["33%","67%"],clockWise:!1,hoverAnimation:!1,radius:[140,160],itemStyle:dataStyle,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:jsonData.RECORDS[1].enterprises,data:[{value:jsonData.RECORDS[1].TotalContribute,name:"财力贡献"},{value:jsonData.RECORDS[1].TotalAppropriation,name:"拨款"},{value:jsonData.RECORDS[1].TotalTax-jsonData.RECORDS[1].TotalContribute-jsonData.RECORDS[1].TotalAppropriation,name:"invisible",label:{show:!1},itemStyle:placeHolderStyle},{value:jsonData.RECORDS[0].TotalTax-jsonData.RECORDS[1].TotalTax,name:"是否与第一名统一税收比例",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["33%","67%"],clockWise:!1,hoverAnimation:!1,radius:[0,1],itemStyle:dataStyle,name:jsonData.RECORDS[1].enterprises,label:{normal:{show:!0,position:"center",color:"black",formatter:["{title|{a}}{abg|}","  {stringHead|指标名}{valueHead|指标值}{rateHead|排名}","{hr|}","    {string|税收}{value|"+(Math.round(jsonData.RECORDS[1].TotalTax*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[1].TotalTax_Rank*100)/100+"}","    {string|留成}{value|"+(Math.round(jsonData.RECORDS[1].TotalTaxLeave*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[1].TotalTaxLeave_Rank*100)/100+"}","  {stringL|财力贡献}{value|"+(Math.round(jsonData.RECORDS[1].TotalContribute*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[1].TotalContribute_Rank*100)/100+"}","    {string|拨款}{value|"+(Math.round(jsonData.RECORDS[1].TotalAppropriation*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[1].TotalAppropriation_Rank*100)/100+"}"].join(`
`),backgroundColor:"#eee",borderColor:"#777",borderWidth:1,borderRadius:4,rich:{title:{color:"#eee",align:"center"},abg:{backgroundColor:"#333",width:"100%",align:"right",height:25,borderRadius:[4,4,0,0]},string:{height:20,align:"left",color:"black",padding:[0,20,0,0]},stringL:{height:20,align:"left",color:"black",padding:[0,10,0,0]},stringHead:{color:"#333",height:24,align:"left",padding:[0,20,0,0]},hr:{borderColor:"#777",width:"100%",align:"right",borderWidth:.5,height:0},value:{width:40,padding:[0,10,0,40],align:"left"},valueHead:{color:"#333",width:40,padding:[0,10,0,30],align:"center"},rate:{width:40,align:"right",padding:[0,10,0,0]},rateHead:{color:"#333",width:40,align:"right",padding:[0,10,0,0]}}}},data:[{value:1,name:"invisible"}]},{type:"pie",center:["67%","67%"],clockWise:!1,radius:[180,200],itemStyle:dataStyle,hoverAnimation:!1,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:jsonData.RECORDS[2].enterprises,data:[{value:jsonData.RECORDS[2].TotalTax,name:"税收"},{value:jsonData.RECORDS[0].TotalTax-jsonData.RECORDS[2].TotalTax,name:"是否与第一名统一税收比例",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["67%","67%"],clockWise:!1,radius:[160,180],itemStyle:dataStyle,hoverAnimation:!1,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:jsonData.RECORDS[2].enterprises,data:[{value:jsonData.RECORDS[2].TotalTaxLeave,name:"留成"},{value:jsonData.RECORDS[2].TotalTax-jsonData.RECORDS[2].TotalTaxLeave,name:"invisible",label:{show:!1},itemStyle:placeHolderStyle},{value:jsonData.RECORDS[0].TotalTax-jsonData.RECORDS[2].TotalTax,name:"是否与第一名统一税收比例",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["67%","67%"],clockWise:!1,hoverAnimation:!1,radius:[140,160],itemStyle:dataStyle,label:{normal:{show:!0,position:"inside",formatter:"{d}%"}},name:jsonData.RECORDS[2].enterprises,data:[{value:jsonData.RECORDS[2].TotalContribute,name:"财力贡献"},{value:jsonData.RECORDS[2].TotalAppropriation,name:"拨款"},{value:jsonData.RECORDS[2].TotalTax-jsonData.RECORDS[2].TotalContribute-jsonData.RECORDS[2].TotalAppropriation,name:"invisible",label:{show:!1},itemStyle:placeHolderStyle},{value:jsonData.RECORDS[0].TotalTax-jsonData.RECORDS[2].TotalTax,name:"是否与第一名统一税收比例",label:{show:!1},itemStyle:placeHolderStyle}]},{type:"pie",center:["67%","67%"],clockWise:!1,hoverAnimation:!1,radius:[0,1],itemStyle:dataStyle,name:jsonData.RECORDS[2].enterprises,label:{normal:{show:!0,position:"center",color:"black",formatter:["{title|{a}}{abg|}","  {stringHead|指标名}{valueHead|指标值}{rateHead|排名}","{hr|}","    {string|税收}{value|"+(Math.round(jsonData.RECORDS[2].TotalTax*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[2].TotalTax_Rank*100)/100+"}","    {string|留成}{value|"+(Math.round(jsonData.RECORDS[2].TotalTaxLeave*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[2].TotalTaxLeave_Rank*100)/100+"}","  {stringL|财力贡献}{value|"+(Math.round(jsonData.RECORDS[2].TotalContribute*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[2].TotalContribute_Rank*100)/100+"}","    {string|拨款}{value|"+(Math.round(jsonData.RECORDS[2].TotalAppropriation*100)/100).toString().replace(/(\d)(?=(\d{3})+(\.|$))/g,"$1,")+"}{rate|"+Math.round(jsonData.RECORDS[2].TotalAppropriation_Rank*100)/100+"}"].join(`
`),backgroundColor:"#eee",borderColor:"#777",borderWidth:1,borderRadius:4,rich:{title:{color:"#eee",align:"center"},abg:{backgroundColor:"#333",width:"100%",align:"right",height:25,borderRadius:[4,4,0,0]},string:{height:20,align:"left",color:"black",padding:[0,20,0,0]},stringL:{height:20,align:"left",color:"black",padding:[0,10,0,0]},stringHead:{color:"#333",height:24,align:"left",padding:[0,20,0,0]},hr:{borderColor:"#777",width:"100%",align:"right",borderWidth:.5,height:0},value:{width:40,padding:[0,10,0,40],align:"left"},valueHead:{color:"#333",width:40,padding:[0,10,0,30],align:"center"},rate:{width:40,align:"right",padding:[0,10,0,0]},rateHead:{color:"#333",width:40,align:"right",padding:[0,10,0,0]}}}},data:[{value:1,name:"invisible"}]}]},myChart.setOption(option);