option={title:{text:"",subtext:""},tooltip:{trigger:"axis",formatter:function(t,l,r){for(var o="",e=0;e<t.length;e++)o+=t[e].axisValue+":"+(Math.round(t[e].value)+"0").match(/\d{2}/g)[0].replace(/0(?=\d)/g,"")+"%",o+="<br>";return o}},graphic:[{type:"text",z:100,left:"0",top:"middle",style:{fill:"#000",text:"分项投诉人数",font:"14px Microsoft YaHei"}},{type:"group",left:"70%",top:"center",children:[{type:"rect",z:100,left:"center",top:"middle",shape:{width:190,height:190},style:{fill:"#146fb9",stroke:"#555",lineWidth:0,shadowBlur:0}},{type:"text",z:100,left:"center",top:"middle",style:{fill:"#fff",text:"231个",font:"35px Microsoft YaHei"}},{type:"text",z:100,left:"center",top:"25",style:{fill:"#fff",text:"总投诉人数",font:"14px Microsoft YaHei"}}]}],legend:{show:!1,data:[""],textStyle:{color:"#666"}},xAxis:[{show:!1,type:"value",axisLabel:{formatter:function(t){return t+"%"}},axisLine:{lineStyle:{color:"#000"}},splitLine:{show:!1}}],grid:{top:"8%",left:"20%",right:"30%",bottom:"0%",containLabel:!0},yAxis:[{type:"category",axisLine:{show:!1,lineStyle:{color:"#000"}},axisTick:{show:!1},data:["大唐","前台","客房","餐厅","康乐"]}],series:[{name:"",type:"bar",barGap:1,barWidth:23,label:{normal:{show:!0,textStyle:{color:"#000"},position:"right",formatter:function(t){return Math.round(Number(t.data))+"%"}}},barCategoryGap:"0",data:[4,4,4.5,4.2,4.5],itemStyle:{normal:{barBorderRadius:14,ipsosLowAvgColor:"#146fb9",color:"#146fb9"},lowAvg:{color:"#f0f"}}}]};
