var seriesData=[{name:"二元",value:"40000"},{name:"大白",value:"40000"},{name:"长大",value:"53000"},{name:"杜洛克",value:"40000"},{name:"三元",value:"60000"},{name:"大长",value:"10000"},{name:"PIC",value:"20000"}],legendData=["二元","大白","长大","杜洛克","三元","大长","PIC"],colorList=["#73DDFF","#73ACFF","#FDD56A","#FDB36A","#FD866A","#9E87FF","#58D5FF"];option={backgroundColor:{type:"linear",x:0,y:0,x2:1,y2:1,colorStops:[{offset:0,color:"#0f2c70"},{offset:1,color:"#091732"}],globalCoord:!1},title:{text:"品种",x:"center",y:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",borderColor:"rgba(255,255,255,.3)",backgroundColor:"rgba(13,5,30,.6)",borderWidth:1,padding:5,formatter:function(e){var a=e.marker+""+e.data.name+"</br>数量："+e.data.value+"头</br>占比："+e.percent+"%";return a}},legend:{type:"scroll",orient:"vertical",left:"left",align:"auto",top:"middle",textStyle:{color:"#fff"},data:legendData},series:[{type:"pie",z:3,center:["50%","50%"],radius:["25%","45%"],clockwise:!0,avoidLabelOverlap:!0,hoverOffset:15,itemStyle:{normal:{color:function(e){return colorList[e.dataIndex]}}},label:{show:!0,position:"outside",formatter:`{a|{b}：{d}%}
{hr|}`,rich:{hr:{backgroundColor:"t",borderRadius:3,width:3,height:3,padding:[3,3,0,-12]},a:{padding:[-30,15,-20,15]}}},labelLine:{normal:{length:20,length2:30,lineStyle:{width:1}}},data:seriesData},{name:"第一层环",type:"pie",z:2,tooltip:{show:!1},center:["50%","50%"],radius:["45%","58%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{color:"rgba(1,15,80,.4)"},emphasis:{color:"rgba(1,15,80,.4)"}},label:{show:!1},data:[100]},{name:"第二层环",type:"pie",z:1,tooltip:{show:!1},center:["50%","50%"],radius:["58%","76%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{color:"rgba(0,15,69,.2)"},emphasis:{color:"rgba(0,15,69,.2)"}},label:{show:!1},data:[100]}]};