let yLabel=["幼儿园","小一","小二","小三","小四","小五","小六","初一","初二","初三","高一","高二","高三"],yData=[653,755,705,655,675,654,802,769,513,755,755,1051,726],bgData=[];for(let e in yData)bgData.push(2e3);option={grid:{left:"5%",right:"5%",bottom:"5%",top:"10%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(e){return e[0].name+"<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>"+e[0].seriesName+" : "+e[0].value+" <br/>"}},xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,margin:40,textStyle:{color:"#1B2841",fontSize:14}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:yLabel},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",name:"ssss",nameLocation:"start",nameTextStyle:{color:"#1B2841",fontSize:14,fontFamily:"PingFangSC-Regular",verticalAlign:"bottom",align:"left",padding:[0,0,0,20]},show:!0,axisLabel:{margin:21,textStyle:{color:"#1666FF",fontSize:"18",fontFamily:"HelveticaNeue-Medium"}},data:yData}],series:[{name:"人数",type:"bar",zlevel:1,itemStyle:{normal:{barBorderRadius:4,color:"#1666FF",shadowBlur:0,shadowColor:"rgba(87,220,222,0.7)"}},barWidth:8,data:yData},{name:"背景",type:"bar",barWidth:8,barGap:"-100%",data:bgData,itemStyle:{normal:{color:"#E5E5E5 ",barBorderRadius:4}}}]};