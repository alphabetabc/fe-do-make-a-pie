var bgColor="#10286B",shadowColor="#374b86",value=80;option={backgroundColor:bgColor,title:{text:`${value}`,left:"center",top:"center",textStyle:{color:"#fff",fontSize:35,fontFamily:"DINAlternate-Bold"},subtextStyle:{color:"#ff",fontSize:15,fontFamily:"PingFangSC-Regular",top:"center"},itemGap:-4},series:[{name:"pie1",type:"pie",clockWise:!0,radius:["70px","75px"],itemStyle:{normal:{label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,data:[{value,name:"completed",itemStyle:{normal:{borderWidth:5,borderColor:{colorStops:[{offset:0,color:"#7940FE"},{offset:1,color:"#2A69EC"}]},color:{colorStops:[{offset:0,color:"#7940FE"},{offset:1,color:"#2A69EC"}]},label:{show:!1},labelLine:{show:!1}}}},{name:"gap",value:100-value,itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}}]}]};
