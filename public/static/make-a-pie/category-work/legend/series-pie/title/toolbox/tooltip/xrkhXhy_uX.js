for(var scaleData=[{name:"大豆",value:10},{name:"玉米",value:10},{name:"小麦",value:10}],placeHolderStyle={normal:{color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}},data=[],color=["#ff0000","#00ff00","#33aaff"],i=0;i<scaleData.length;i++)data.push({value:scaleData[i].value,name:scaleData[i].name,itemStyle:{normal:{borderWidth:5,shadowBlur:20,borderColor:color[i],shadowColor:color[i],color:color[i]}},label:{normal:{formatter:scaleData[i].name+scaleData[i].value,textStyle:{fontSize:16}}}},{value:.5,name:"",itemStyle:placeHolderStyle});var seriesObj=[{name:"",type:"pie",clockWise:!1,radius:[119,120],hoverAnimation:!1,data}];option={backgroundColor:"#04243E",title:{text:"title中是背景相关属性",x:"center",y:"center",textStyle:{fontWeight:"normal",fontSize:18,color:"#fff"}},tooltip:{show:!1},legend:{show:!1},toolbox:{show:!1},series:seriesObj};