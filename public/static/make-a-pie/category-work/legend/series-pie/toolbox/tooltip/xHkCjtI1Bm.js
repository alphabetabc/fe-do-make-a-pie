for(var scaleData=[{name:"工程建设",value:10},{name:"产权交易",value:10},{name:"土地交易",value:10},{name:"其他交易",value:10},{name:"土地交易",value:10},{name:"其他交易",value:10}],rich={white:{color:"#ddd",align:"center",padding:[3,0]}},placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},data=[],color=["#00ffff","#00cfff","#006ced","#ffe000","#ffa800","#ff5b00","#ff3000"],i=0;i<scaleData.length;i++)data.push({value:scaleData[i].value,name:scaleData[i].name,itemStyle:{normal:{borderWidth:5,shadowBlur:20,borderColor:color[i],shadowColor:color[i]}}},{value:2,name:"",itemStyle:placeHolderStyle});var seriesObj=[{name:"",type:"pie",clockWise:!1,radius:[195,200],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,position:"outside",color:"#ddd",formatter:function(e){for(var l=0,o=0,a=0;a<scaleData.length;a++)o+=scaleData[a].value;return l=(e.value/o*100).toFixed(0),e.name!==""?e.name+`
{white|占比`+l+"%}":""},rich},labelLine:{length:30,length2:100,show:!0,color:"#00ffff"}}},data}];option={backgroundColor:"#04243E",tooltip:{show:!1},legend:{show:!1},toolbox:{show:!1},series:seriesObj};
