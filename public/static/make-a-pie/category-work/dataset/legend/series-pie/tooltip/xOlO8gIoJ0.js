let pieData=[{name:"总数量",value:100},{name:"在线数量",value:60},{name:"在线率",value:40}];var titleArr=[],seriesArr=[];pieData.forEach(function(e,a){titleArr.push({text:e.name,left:a*35+15.5+"%",top:"70%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:"20",color:"white",textAlign:"center"}}),seriesArr.push({type:"pie",name:"外层细圆环",radius:["36%","37%"],center:[a*34+15.5+"%","45%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{color:"#6e7175"}},label:{show:!1},data:[100]},{type:"pie",name:"内层层细圆环",radius:["24%","25%"],center:[a*34+15.5+"%","45%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{color:"#6e7175"}},label:{show:!1},data:[100]},{type:"pie",zlevel:3,silent:!0,radius:["20%","21%"],center:[a*34+15.5+"%","45%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:dotArr()})}),seriesArr.push({name:pieData[0].name,type:"pie",clockWise:!1,radius:["28%","33%"],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0ff"},{offset:1,color:"#5467df"}]),label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:[0*34+15.5+"%","45%"],data:[{value:pieData[0].value,label:{normal:{formatter:function(e){return e.value},position:"center",show:!0,textStyle:{fontSize:"25",color:"#1cc7ff"}}}}]},{name:pieData[1].name,type:"pie",clockWise:!1,radius:["28%","33%"],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0ff"},{offset:1,color:"#5467df"}]),label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:[1*34+15.5+"%","45%"],data:[{value:pieData[1].value,label:{normal:{formatter:function(e){return e.value},position:"center",show:!0,textStyle:{fontSize:"25",color:"#1cc7ff"}}}},{value:pieData[0].value-pieData[1].value,name:"invisible",itemStyle:{normal:{color:"rgba(0,0,0,0)"},emphasis:{color:"rgba(0,0,0,0)"}}}]},{name:pieData[2].name,type:"pie",clockWise:!1,radius:["28%","33%"],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0ff"},{offset:1,color:"#5467df"}]),label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:[2*34+15.5+"%","45%"],data:[{value:pieData[2].value,label:{normal:{formatter:function(e){return e.value+"%"},position:"center",show:!0,textStyle:{fontSize:"25",color:"#1cc7ff"}}}},{value:100-pieData[2].value,name:"invisible",itemStyle:{normal:{color:"rgba(0,0,0,0)"},emphasis:{color:"rgba(0,0,0,0)"}}}]}),option={grid:{left:"5%",right:"2%",bottom:"0%",top:"0%",containLabel:!0},backgroundColor:"black",title:titleArr,series:seriesArr};function dotArr(){let e=[];for(var a=0;a<80;a++)a%2===0?e.push({name:(a+1).toString(),value:1,itemStyle:{normal:{color:"#676a6c",borderWidth:1,borderColor:"#676a6c"}}}):e.push({name:(a+1).toString(),value:2,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return e}
