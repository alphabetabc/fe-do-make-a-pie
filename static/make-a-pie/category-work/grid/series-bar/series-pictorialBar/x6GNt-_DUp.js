var yLabel=["一月","二月","三月","四月","五月"],yData=[4800,4280,3515,2940,2780],bgData=[5e3,5e3,5e3,5e3,5e3];option={grid:{left:"10%",right:"20%",bottom:"10%",top:"10%",containLabel:!0},xAxis:{show:!1,type:"value"},tooltip:{formatter:function(t){return t.name+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgb(47,215,255)'></span>销量 : "+t.value+"万m³"}},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,margin:15,textStyle:{color:"rgb(188,217,230)",fontSize:19},verticalAlign:"bottom",align:"top",padding:[0,0,25,80]},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:yLabel},{zlevel:3,type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!0,axisLabel:{textStyle:{color:"rgb(188,217,230)",fontSize:"20",padding:[0,0,0,0]},formatter:function(t){return t+" 万m³"}},data:yData}],series:[{name:"销量",type:"bar",zlevel:3,itemStyle:{normal:{color:"rgb(43,196,253)"}},barWidth:15,data:yData},{z:1,type:"pictorialBar",symbolPosition:"end",symbolRotate:"180",symbolSize:[20,15],color:"rgb(43,196,253)",data:yData,symbol:"triangle",symbolOffset:["52%",0]},{type:"bar",barWidth:15,barGap:"-100%",itemStyle:{normal:{color:"rgb(71,134,163)"}},data:bgData,z:0}]};
