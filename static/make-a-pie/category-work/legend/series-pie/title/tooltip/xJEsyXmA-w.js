let dataPie=[{value:52,name:"在线"},{value:36,name:"维修"},{value:31,name:"离线"},{value:15,name:"检修"},{value:17,name:"抢修"},{value:22,name:"其他"}],colorPie=["#173852","#0b2036","#002e49"],colorWrap=["#3087d6","#f6ce54","#4be1ff","#b6e9ff","#18edc9","#6ac5fa"],baseDataPie=[],baseDataWrap=[],total=0;dataPie.forEach(function(e,t,a){total+=e.value});for(let e=0;e<dataPie.length;e++)baseDataWrap.push({value:dataPie[e].value,name:dataPie[e].name,itemStyle:{normal:{color:colorWrap[e],borderWidth:5,borderColor:colorWrap[e],shadowBlur:50,shadowColor:"rgba(7, 132, 250, 0.8)"}}},{value:5,name:"",itemStyle:{normal:{color:"transparent",borderWidth:5,borderColor:"transparent"}},tooltip:{show:!1}}),e<3&&baseDataPie.push({value:dataPie[e].value,name:dataPie[e].name,itemStyle:{normal:{borderWidth:20,borderColor:colorPie[e]}}});option={backgroundColor:"#031223",title:{text:"设备总数",subtext:"10,225",textStyle:{color:"#00b5f3",fontSize:14},subtextStyle:{align:"center",fontSize:16,color:["#85c7e3"],fontWeight:800},x:"23%",y:"center"},grid:{left:"1%",right:"1%",top:"1%",bottom:"1%"},tooltip:{show:!0,trigger:"item",formatter:"{a}：{b} <br/>数量：{c}"},legend:[{data:["在线","维修","离线","检修","抢修","其他"],icon:"vertical",right:"5px",top:"center",orient:"vertical",itemGap:20,itemWidth:15,itemHeight:8,formatter:function(e){let t,a;for(let o=0;o<dataPie.length;o++)dataPie[o].name===e&&(t=dataPie[o].value,a=(t/total*100).toFixed(1));return[a+"%  {yellow|"+t+"}"," {blue|"+e+"}"].join(`
`)},textStyle:{lineHeight:20,color:"#f0f4f6",align:"right",rich:{yellow:{color:"#00b5f3",fontWeight:"bold"},blue:{color:"#4be1ff",align:"right"}}}}],series:[{name:"报警",type:"pie",clockWise:!1,hoverAnimation:!1,center:["30%","50%"],radius:["80%","81%"],label:{normal:{show:!1}},data:baseDataWrap},{name:"",type:"pie",color:colorPie,selectedMode:"single",radius:["55%","58%"],center:["30%","50%"],hoverAnimation:!1,label:{normal:{show:!1}},tooltip:{show:!1},data:baseDataPie}]};
