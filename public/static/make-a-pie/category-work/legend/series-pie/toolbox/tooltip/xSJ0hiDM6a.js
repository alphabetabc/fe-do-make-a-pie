for(var scaleData=[{name:"总户数",value:1234},{name:"总人口数",value:4700},{name:"已覆盖户数",value:1200},{name:"已覆盖人口数",value:3687}],data=[],color=["rgb(255, 153, 153)","rgb(255, 176, 63)","rgb(61, 186, 45)","rgb(43, 166, 254)"],i=0;i<scaleData.length;i++)data.push({data:scaleData[i].value,value:scaleData[i].value,name:scaleData[i].name});var seriesObj=[{name:"",type:"pie",clockWise:!1,radius:[0,200],hoverAnimation:!1,startAngle:-30,itemStyle:{normal:{label:{show:!0,position:"inner",fontSize:14,lineHeight:15,color:"rgba(255,255,255,1)",formatter:function(e){return e.name!==""?e.data.data:""}}}},data},{name:"",type:"pie",clockWise:!1,radius:[100,200],hoverAnimation:!1,startAngle:-30,itemStyle:{normal:{label:{show:!0,position:"outside",fontSize:18,formatter:function(e){return e.name!==""?e.name:""}},labelLine:{length:30,length2:60,show:!0}}},data}];option={backgroundColor:"#fff",tooltip:{show:!1},color,legend:{show:!0},toolbox:{show:!1},series:seriesObj};
