let dataPie=[{value:257,name:"摄像头",color:"#1682de",color2:"#0d2b46"},{value:82,name:"照明",color:"#2aa6d5",color2:"#123241"},{value:35,name:"消防",color:"#4259e2",color2:"#192148"},{value:168,name:"门禁",color:"#adb6c7",color2:"#34383f"},{value:82,name:"空调",color:"#e7102a",color2:"#461421"}],baseDataPie=[],baseDataPie2=[],total=0;for(var i=0;i<dataPie.length;i++)total+=dataPie[i].value;for(var i=0;i<dataPie.length;i++)baseDataPie.push({value:dataPie[i].value,name:dataPie[i].name,itemStyle:{normal:{color:dataPie[i].color,borderWidth:10,borderColor:dataPie[i].color}},labelLine:{show:!1,length:50},label:{show:!1}},{value:total*.05,name:"留白",itemStyle:{normal:{color:"transparent",borderWidth:10,borderColor:"transparent"}},label:{show:!1}}),baseDataPie2.push({value:dataPie[i].value,name:dataPie[i].name+"内框",itemStyle:{normal:{color:dataPie[i].color2,borderWidth:10,borderColor:dataPie[i].color2}}},{value:total*.05,name:"留白",itemStyle:{normal:{color:"transparent",borderWidth:10,borderColor:"transparent"}}});option={backgroundColor:"#021228",title:{text:"552",subtext:"设备总数",textStyle:{color:"#cfdfee",fontSize:18,fontWeight:800,fontFamily:"",textShadowColor:"#154d73",textShadowBlur:50},subtextStyle:{align:"center",fontSize:12,color:["#85c7e3"]},x:"center",y:"center"},tooltip:{show:!0,trigger:"item",formatter:"{a}：{b} <br/>占比：{d}%"},grid:{left:"1%",right:"1%",top:"1%",bottom:"1%"},series:[{name:"告警",type:"pie",clockWise:!1,hoverAnimation:!1,center:["50%","50%"],radius:["46%","49%"],tooltip:{show:!1},data:baseDataPie},{name:"",type:"pie",clockWise:!1,hoverAnimation:!1,center:["50%","50%"],radius:["43%","46%"],tooltip:{show:!1},label:{show:!1},data:baseDataPie2}]};