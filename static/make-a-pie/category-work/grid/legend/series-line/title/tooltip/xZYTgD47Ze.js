var _gridX="15%",_gridY="45%",_gridX2="5%",_gridY2="15%",_unit="k",_rotate=0,_minInterval=0,_xName="x轴",_yName="y轴";option={title:{text:"标题",subtext:"副标题"},xAxis:{name:_xName,type:"category",boundaryGap:!1,axisTick:{show:!1},splitLine:{lineStyle:{width:"0.2",color:"#507b7d"}},axisLine:{show:!1,lineStyle:{color:"rgba(0,0,0,0.4)"}},axisLabel:{show:!0,textStyle:{fontSize:10},rotate:_rotate},data:["10/03","11/03","12/03","13/03","14/03","15/03","16/03"]},yAxis:{scale:!0,name:_yName,nameTextStyle:{color:"rgba(251, 42, 42, 1)",fontSize:12},type:"value",minInterval:_minInterval,axisTick:{show:!1},splitLine:{lineStyle:{width:"0.2",color:"#507b7d"}},axisLine:{show:!1,lineStyle:{color:"rgba(0,0,0,0.4)"}},axisLabel:{show:!0,textStyle:{fontSize:10}}},tooltip:{confine:!0,trigger:"axis",axisPointer:{lineStyle:{type:"dashed",color:"#cccccc"}},formatter:function(o){var t="";t="<div style='text-align:center;'>"+o[0].name+"</div><div style='padding-top:5px;'>";for(var e=0;e<o.length;e++)e>0&&(t+="<div style='padding-top:2px;'>"),t+=o[e].marker+o[e].value+"</span><span style = 'float:right;'>"+_unit+"</span>";return t},borderColor:"rgba(245, 245, 245, 0.8)"},grid:{height:"auto",width:"auto",x:_gridX,y:_gridY,x2:_gridX2,y2:_gridY2},legend:{selectedMode:!1,right:"0%",data:["Courier App","Customer App","Customer Scheduling Order","Official Website","PC Client","VIP Customer Portal"],icon:"circle"},series:[{name:"Courier App",data:["0.00","0.00","0.00","0.00","0.00","0.00","0.00"],type:"line",showSymbol:!1,smooth:.15,itemStyle:{color:"rgba(116,41,201,1.0)"},lineStyle:{width:3},areaStyle:{color:{type:"line",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(116,41,201,0.2)"},{offset:0,color:"rgba(116,41,201,0.1)"}],global:!1}}},{name:"Customer App",data:["0.00","0.00","0.00","0.00","0.00","0.00","0.00"],type:"line",showSymbol:!1,smooth:.15,itemStyle:{color:"rgba(255,108,62,1.0)"},lineStyle:{width:3},areaStyle:{color:{type:"line",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,108,62,0.05)"},{offset:0,color:"rgba(255,108,62,0.01)"}],global:!1}}},{name:"Customer Scheduling Order",data:["0.01","0.02","0.02","0.00","0.00","0.01","0.00"],type:"line",showSymbol:!1,smooth:.15,itemStyle:{color:"rgba(253,189,76,1.0)"},lineStyle:{width:3},areaStyle:{color:{type:"line",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(253,189,76,0.05)"},{offset:0,color:"rgba(253,189,76,0.01)"}],global:!1}}},{name:"Official Website",data:["0.00","0.00","0.00","0.00","0.00","0.00","0.00"],type:"line",showSymbol:!1,smooth:.15,itemStyle:{color:"rgba(63,194,151,1.0)"},lineStyle:{width:3},areaStyle:{color:{type:"line",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(63,194,151,0.05)"},{offset:0,color:"rgba(63,194,151,0.01)"}],global:!1}}},{name:"PC Client",data:["0.00","0.00","0.00","0.00","0.00","0.00","0.00"],type:"line",showSymbol:!1,smooth:.15,itemStyle:{color:"rgba(74,128,244,1.0)"},lineStyle:{width:3},areaStyle:{color:{type:"line",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(74,128,244,0.05)"},{offset:0,color:"rgba(74,128,244,0.01)"}],global:!1}}},{name:"VIP Customer Portal",data:["0.00","0.00","0.00","0.00","0.00","0.00","0.00"],type:"line",showSymbol:!1,smooth:.15,itemStyle:{color:"rgba(255,108,207,1.0)"},lineStyle:{width:3},areaStyle:{color:{type:"line",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"rgba(255,108,207,0.05)"},{offset:0,color:"rgba(255,108,207,0.01)"}],global:!1}}}]};
