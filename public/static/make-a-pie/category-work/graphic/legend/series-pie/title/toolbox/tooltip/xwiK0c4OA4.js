for(var img="/asset/get/s/data-1619312902117-G2jtCPn7m.png",trafficWay=[{name:"奎宁",value:20},{name:"小宁",value:10},{name:"小奎",value:10},{name:"小陈",value:30}],data=[],color=["#00ffff","#00cfff","#006ced","#ffe000","#ffa800","#ff5b00","#ff3000"],i=0;i<trafficWay.length;i++)data.push({value:trafficWay[i].value,name:trafficWay[i].name,itemStyle:{normal:{borderWidth:5,shadowBlur:20,borderColor:color[i],shadowColor:color[i]}}},{value:2,name:"",itemStyle:{normal:{label:{show:!1},labelLine:{show:!1},color:"rgba(0, 0, 0, 0)",borderColor:"rgba(0, 0, 0, 0)",borderWidth:0}}});var seriesOption=[{name:"",type:"pie",clockWise:!1,radius:[105,109],hoverAnimation:!1,itemStyle:{normal:{label:{show:!0,position:"outside",color:"#ddd",formatter:function(e){for(var o=0,a=0,t=0;t<trafficWay.length;t++)a+=trafficWay[t].value;return o=(e.value/a*100).toFixed(0),e.name!==""?e.name+`

占百分比：`+o+"%":""}},labelLine:{length:30,length2:100,show:!0,color:"#00ffff"}}},data}];option={backgroundColor:"#0A2E5D",color,title:{text:"前端技术栈统计",top:"48%",textAlign:"center",left:"49%",textStyle:{color:"#fff",fontSize:14,fontWeight:"400"}},graphic:{elements:[{type:"image",z:3,style:{image:img,width:178,height:178},left:"center",top:"center",position:[100,100]}]},tooltip:{show:!1},legend:{icon:"circle",orient:"horizontal",right:250,bottom:100,align:"right",textStyle:{color:"#fff"},itemGap:20},toolbox:{show:!1},series:seriesOption};
