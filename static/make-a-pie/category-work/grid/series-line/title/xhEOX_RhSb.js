for(var scaleData=[{name:"高中以上",value:20},{name:"高中",value:15},{name:"初中",value:10},{name:"小学",value:10},{name:"文盲",value:2}],rich={white:{color:"#fff",align:"center",fontWeight:"bold",padding:[3,0]}},placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},data=[],color1=["rgb(255, 153, 153)","rgb(255, 176, 63)","rgb(61, 186, 45)","rgb(43, 166, 254)","rgb(255,222,0)","rgb(255,0,0)"],i=0;i<scaleData.length;i++)data.push({value:scaleData[i].value,name:scaleData[i].name,itemStyle:{normal:{borderWidth:4,shadowBlur:30,borderColor:"rgb(43, 166, 254)",shadowColor:"rgb(43, 166, 254)",color:"rgb(43, 166, 254)",opacity:.75}}},{value:2,name:"",itemStyle:placeHolderStyle});var seriesObj=[{name:"",type:"pie",clockWise:!1,radius:[80,160],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,position:"inner",fontWeight:"bold",formatter:function(e){for(var r=0,l=0,a=0;a<scaleData.length;a++)l+=scaleData[a].value;return r=(e.value/l*100).toFixed(0),e.name!==""?e.name+`
{white|占比`+r+"%}":""},rich},labelLine:{show:!1}}},data}];option={tooltip:{show:!1},legend:{show:!1},toolbox:{show:!1},series:seriesObj};
