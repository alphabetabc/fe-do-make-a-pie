for(var scaleData=[{name:"办公类",value:10},{name:"照明类",value:10},{name:"空调类",value:10},{name:"其他",value:10},{name:"电梯类",value:10}].reverse(),rich={white:{color:"#ddd",align:"center",padding:[3,0]}},placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},data=[],color=["rgba(22, 172, 142, 1)","rgba(0, 251, 183, 1)","rgba(248, 136, 42, 1)","rgba(20, 218, 255, 1)","rgba(6, 232, 219, 1)"].reverse(),colorBorder=["rgba(22, 172, 142, 0.4)","rgba(0, 251, 183, 0.4)","rgba(248, 136, 42, 0.4)","rgba(20, 218, 255, 0.4)","rgba(6, 232, 219, 0.4)"].reverse(),i=0;i<scaleData.length;i++)data.push({data:scaleData[i].value,value:20,name:scaleData[i].name,itemStyle:{normal:{color:color[i],borderWidth:20,borderColor:colorBorder[i]}}},{value:8,name:"",itemStyle:placeHolderStyle});var seriesObj=[{name:"",type:"pie",clockWise:!1,radius:[100,200],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,position:"outside",color:"#ddd",formatter:function(e){for(var l=0,r=0,a=0;a<scaleData.length;a++)r+=scaleData[a].value;return l=(e.value/r*100).toFixed(0),e.name!==""?e.name:""},rich},labelLine:{length:30,length2:60,show:!0}}},data}];option={backgroundColor:"#04243E",tooltip:{show:!1},legend:{show:!1},toolbox:{show:!1},series:seriesObj};