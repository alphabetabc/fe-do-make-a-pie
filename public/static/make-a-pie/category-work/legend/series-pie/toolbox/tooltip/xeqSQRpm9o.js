for(var scaleData=[{name:"工程建设",value:10},{name:"产权交易",value:100}],rich={white:{color:"#ddd",align:"center",padding:[3,0]}},placeHolderStyle={normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},data=[],color=["#00ffff","#ffa800","#ff5b00","#ff3000"],i=0;i<scaleData.length;i++)data.push({value:scaleData[i].value,name:scaleData[i].name,itemStyle:{normal:{borderWidth:8,shadowBlur:0,borderColor:color[i],shadowColor:color[i]}}},{value:3,name:"",itemStyle:placeHolderStyle});var seriesObj=[{name:"",roseType:"radius",type:"pie",clockWise:!1,radius:[105,100],hoverAnimation:!1,itemStyle:{normal:{label:{show:!1}}},data}];option={backgroundColor:"#04243E",tooltip:{show:!0},color,legend:{icon:"circle",top:"44%",right:"20%",itemGap:30,textStyle:{color:"#fff"}},toolbox:{show:!1},series:seriesObj};