const center=["50%","80%"],color=["#09aabe","#86c200","#ffbb00","#ff6f00","#e31404"];let data=[{name:"A",value:1542},{name:"B",value:1765},{name:"C",value:1988},{name:"D",value:2160},{name:"E",value:2580}];const dataArcStyle={label:{show:!0},labelLine:{show:!0,length:0},emphasis:{labelLine:{show:!0}}};data=data.map(e=>(e=Object.assign(e,dataArcStyle),e));const originDataLen=data.length,spanAngle=90,repeatedMultiple=180/spanAngle,addDataLen=parseInt((repeatedMultiple-1)*originDataLen);for(let e=0;e<addDataLen;e++)data.push({name:null,value:0,itemStyle:{color:"rgba(0,0,0,0)"},tooltip:{show:!1}});const dataArc={type:"pie",startAngle:0,roseType:"area",clockwise:!1,center,radius:["30%","70%"],data,label:{show:!1}},backgroundArc0={type:"pie",radius:["0%","0%"],center,silent:!0,clockwise:!1,label:{show:!1},data:[{name:null,value:spanAngle,itemStyle:{color:"rgba(220,220,220,0)",borderColor:"rgba(255,255,255,.3)"}},{name:null,value:360-spanAngle,itemStyle:{color:"rgba(220,220,220,0)"}}]},backgroundArc1=JSON.parse(JSON.stringify(backgroundArc0));option={backgroundColor:"#11011e",color,tooltip:{show:!0},series:[backgroundArc0,backgroundArc1,dataArc]};