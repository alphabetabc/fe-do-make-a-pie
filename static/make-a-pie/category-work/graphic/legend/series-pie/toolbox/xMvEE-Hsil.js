for(var trafficWay=[{name:"火车",value:20},{name:"飞机",value:10}],data=[],color=["#00EDFF","#FFE954"],i=0;i<trafficWay.length;i++)data.push({value:trafficWay[i].value,name:trafficWay[i].name},{value:.5,name:"",itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}});var seriesOption=[{name:"",type:"pie",clockWise:!1,radius:[160,178],hoverAnimation:!0,label:{normal:{position:"inner",show:!1}},data}];option={backgroundColor:"#000",grid:{left:"3%",right:"10%",bottom:"3%",top:"25%",containLabel:!0},color,graphic:[{type:"group",top:"middle",left:"center",id:"data",children:[{type:"text",id:"current",top:"middle",style:{text:"21680",font:'bolder 26px "SourceHanSansCN-Regular", sans-serif',fill:"#ffffff",lineHeight:28,textAlign:"center"}},{type:"text",id:"all",top:15,style:{text:"评价总数",font:'bolder 18px "SourceHanSansCN-Regular", sans-serif',fill:"#ffffff",lineHeight:28,textAlign:"center"}}]}],legend:{show:!1,icon:"circle",orient:"horizontal",data:["火车","飞机"],right:340,bottom:150,align:"right",textStyle:{color:"#fff"},itemGap:20},toolbox:{show:!1},series:seriesOption};
