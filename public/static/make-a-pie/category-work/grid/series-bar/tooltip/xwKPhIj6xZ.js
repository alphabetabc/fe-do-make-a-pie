var data=[50,70,50,60,80,90],className=["1年级","2年级","3年级","4年级","5年级","6年级"],colorList=["#39B3FF","#47E0E0","#7891D9","#83D978","#C7A530","#FF8439"],defaultData=[500,500,500,500,500,500];option={backgroundColor:"rgb(13,29,78)",grid:{left:"5%",right:"5%",bottom:"5%",top:"10%",containLabel:!0},tooltip:{show:!1,trigger:"axis",axisPointer:{type:"none"},formatter:function(a){return a[0].name+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>"+a[0].seriesName+" : "+a[0].value}},xAxis:{axisLabel:{color:"rgb(28,136,190)",width:100},type:"value",splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:defaultData},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,textStyle:{color:"rgb(30,147,200)"}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:className},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"#ffffff",fontSize:"12"},formatter:function(a){}},data}],series:[{name:"完成率1",type:"bar",stack:"aa",zlevel:1,itemStyle:{normal:{barBorderRadius:0,color:a=>"rgb(1,160,234)"}},barWidth:20,data},{name:"完成率2",type:"bar",stack:"aa",zlevel:1,itemStyle:{normal:{barBorderRadius:0,color:a=>"rgb(145,203,116)"}},barWidth:20,data},{name:"完成率3",type:"bar",stack:"aa",zlevel:1,itemStyle:{normal:{barBorderRadius:0,color:a=>"rgb(250,200,89)"}},barWidth:20,data},{name:"完成率4",type:"bar",stack:"aa",zlevel:1,itemStyle:{normal:{barBorderRadius:0,color:a=>"rgb(255,144,1)"}},barWidth:20,data},{name:"完成率5",type:"bar",stack:"aa",zlevel:1,itemStyle:{normal:{barBorderRadius:0,color:a=>"rgb(2,235,250)"}},barWidth:20,data},{name:"背景",type:"bar",barWidth:20,barGap:"-100%",data:defaultData,itemStyle:{normal:{color:"#1B375E",barBorderRadius:0}}}]};