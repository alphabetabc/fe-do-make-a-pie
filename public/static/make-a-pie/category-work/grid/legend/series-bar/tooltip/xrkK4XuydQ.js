var data1=[80,98,60,53],data2=[30,32,30,27],data3=function(){for(var t=[],e=0;e<data1.length;e++)t.push(data1[e]+data2[e]);return t}(),max=130;option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){for(var e=t[0].name,r=0,a=0,o=t.length;a<o;a++)r+=t[a].value;r=r/2;for(var a=0,o=t.length-1;a<o;a++)e+="<br/>"+t[a].seriesName+" : "+parseFloat(t[a].value)+"("+(100*parseFloat(t[a].value)/parseFloat(r)).toFixed(2)+"%)";return e}},color:["#C0504D","#4F81BD"],legend:{data:["预算余额","已使用金额"],bottom:"0%"},grid:{left:"3%",right:"4%",top:"10%",bottom:"6%",containLabel:!0},xAxis:{type:"category",data:["总经办","财务处","勘察设计","投资事业部"]},yAxis:{type:"value",splitNumber:10,max},series:[{name:"预算余额",type:"bar",stack:"sum",barWidth:"30%",itemStyle:{normal:{label:{show:!0},color:"#4F81BD"}},data:data1},{name:"已使用金额",type:"bar",stack:"sum",barWidth:"30%",itemStyle:{normal:{label:{show:!0},color:"#C0504D"}},data:data2},{name:"总计",type:"bar",stack:"sum",label:{normal:{offset:["50","80"],show:!0,position:"insideBottom",formatter:"{c}",textStyle:{color:"#000"}}},itemStyle:{normal:{color:"rgba(128, 128, 128, 0)"}},data:data3}]};