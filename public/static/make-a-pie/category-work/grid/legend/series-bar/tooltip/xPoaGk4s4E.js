for(var data1=[320,600,901,934,1290,1330,1320],data2=[430,182,191,234,290,250,310],data3=[150,212,201,154,190,300,540],data4=[230,182,191,234,290,250,310],data5=[150,212,108,154,190,300,0],i=0;i<data3.length;i++)data5[i]==0?data4[i]==0?data3[i]==0?data2[i]==0?data1[i]={value:data1[i],itemStyle:{barBorderRadius:[0,20,20,0]}}:data2[i]={value:data2[i],itemStyle:{barBorderRadius:[0,20,20,0]}}:data3[i]={value:data3[i],itemStyle:{barBorderRadius:[0,20,20,0]}}:data4[i]={value:data4[i],itemStyle:{barBorderRadius:[0,20,20,0]}}:data5[i]={value:data5[i],itemStyle:{barBorderRadius:[0,20,20,0]}};option={backgroundColor:"#fff",tooltip:{trigger:"axis",axisPointer:{type:"shadow",shadowStyle:{color:"rgba(210,219,238,0.2)"}}},legend:{data:["A等级","B等级","C等级","D等级","E等级"]},xAxis:{type:"value"},yAxis:{type:"category",realtimeSort:!0,data:["高端电子装备和仪器制造","高端电子装备和仪器制造","高端电子装备和仪器制造","高端电子装备和仪器制造","高端电子装备和仪器制造","高端电子装备和仪器制造","高端电子装备和仪器制造"],axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"#555",letterSpacing:"5"}},grid:{left:"0%",right:"4%",bottom:"3%",containLabel:!0},series:[{name:"A等级",type:"bar",stack:"总量",barMaxWidth:40,itemStyle:{normal:{color:"#4059cc"}},label:{normal:{show:!0,position:"inside",formatter:function(e){return e.value>0?e.value:""}}},data:data1},{name:"B等级",type:"bar",stack:"总量",barMaxWidth:40,itemStyle:{normal:{color:"#22378a"}},label:{normal:{show:!0,position:"inside",formatter:function(e){return e.value>0?e.value:""}}},data:data2},,{name:"C等级",type:"bar",stack:"总量",barMaxWidth:40,itemStyle:{normal:{color:"#39488a"}},label:{normal:{show:!0,position:"inside",formatter:function(e){return e.value>0?e.value:""}}},data:data3},,{name:"D等级",type:"bar",stack:"总量",barMaxWidth:40,itemStyle:{normal:{color:"#7684C1"}},label:{normal:{show:!0,position:"inside",formatter:function(e){return e.value>0?e.value:""}}},data:data4},{name:"E等级",type:"bar",stack:"总量",barMaxWidth:40,itemStyle:{normal:{color:"#a2ade1"}},label:{normal:{show:!0,position:"inside",formatter:function(e){return e.value>0?e.value:""}}},data:data5}]};