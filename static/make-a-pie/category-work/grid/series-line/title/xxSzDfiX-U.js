var totalData=600,onlineData=300,offlineData=200,warnData=100,maxData=800,value1=(totalData/maxData).toFixed(2),value2=(onlineData/totalData).toFixed(2),value3=(offlineData/totalData).toFixed(2),value4=(warnData/totalData).toFixed(2),data1=[value1,value1,value1,value1],data2=[value2,value2,value2,value2],data3=[value3,value3,value3,value3],data4=[value4,value4,value4,value4];option={title:[{text:"圆形图-动态水流2 ?",x:"50%",y:30,textAlign:"center",textStyle:{fontSize:"30",fontWeight:"100",color:"#333",textAlign:"center"}},{text:"总数："+(value1*100).toFixed(0)+"%",left:"30%",top:"30%",textAlign:"center",textStyle:{fontSize:"30",fontWeight:"400",color:"#02456d",textAlign:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#fff",textShadowBlur:"0",textShadowOffsetX:0,textShadowOffsetY:1}},{text:"在线："+(value2*100).toFixed(0)+"%",left:"30%",top:"70%",textAlign:"center",textStyle:{fontSize:"30",fontWeight:"400",color:"#295008",textAlign:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#fff",textShadowBlur:"0",textShadowOffsetX:0,textShadowOffsetY:1}},{text:"离线："+(value3*100).toFixed(0)+"%",left:"70%",top:"30%",textAlign:"center",textStyle:{fontSize:"30",fontWeight:"400",color:"#a06a0a",textAlign:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#fff",textShadowBlur:"0",textShadowOffsetX:0,textShadowOffsetY:1}},{text:"告警："+(value4*100).toFixed(0)+"%",left:"70%",top:"70%",textAlign:"center",textStyle:{fontSize:"30",fontWeight:"400",color:"red",textAlign:"center",textBorderColor:"rgba(0, 0, 0, 0)",textShadowColor:"#fff",textShadowBlur:"0",textShadowOffsetX:0,textShadowOffsetY:1}}],series:[{type:"liquidFill",radius:"30%",center:["30%","30%"],amplitude:5,data:data1,backgroundStyle:{borderWidth:1,color:"transparent"},outline:{show:!0,itemStyle:{borderWidth:0},borderDistance:0},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"rgba(0, 108, 154, 1)"},{offset:.5,color:"rgba(0, 155, 219, .5)"},{offset:0,color:"rgba(0, 155, 219, 0)"}],globalCoord:!1},label:{normal:{formatter:""}}},{type:"liquidFill",radius:"30%",center:["30%","70%"],amplitude:20,data:data2,backgroundStyle:{borderWidth:1,color:"transparent"},outline:{show:!0,itemStyle:{borderWidth:0},borderDistance:0},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"rgba(74, 134, 21, 1)"},{offset:.5,color:"rgba(119, 185, 63, .5)"},{offset:0,color:"rgba(119, 185, 63, 0)"}],globalCoord:!1},label:{normal:{formatter:""}}},{type:"liquidFill",radius:"30%",center:["70%","30%"],data:data3,backgroundStyle:{borderWidth:1,color:"transparent"},outline:{show:!0,itemStyle:{borderWidth:0},borderDistance:0},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"rgba(189, 126, 12, 1)"},{offset:.5,color:"rgba(251, 173, 23, .5)"},{offset:0,color:"rgba(251, 173, 23, 0)"}],globalCoord:!1},label:{normal:{formatter:""}}},{type:"liquidFill",radius:"30%",center:["70%","70%"],amplitude:5,data:data4,backgroundStyle:{borderWidth:1,color:"transparent"},outline:{show:!0,itemStyle:{borderWidth:0},borderDistance:0},color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:1,color:"rgba(169, 14, 115, 1)"},{offset:.5,color:"rgba(255, 0, 0, .5)"},{offset:0,color:"rgba(255, 0, 0, 0)"}],globalCoord:!1},label:{normal:{formatter:""}}}]};
