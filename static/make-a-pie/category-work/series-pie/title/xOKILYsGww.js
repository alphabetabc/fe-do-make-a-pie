let pieData=[{name:"总数量",value:89}];function getDataArr(l){let a=[];for(var e=0;e<l;e++)e%2===0?a.push({name:(e+1).toString(),value:1,itemStyle:{normal:{color:"#676a6c",borderWidth:1,borderColor:"#676a6c"}}}):a.push({name:(e+1).toString(),value:2,itemStyle:{normal:{color:"rgba(0,0,0,0)",borderWidth:0,borderColor:"rgba(0,0,0,0)"}}});return a}var seriesArr=[];option={grid:{left:"5%",right:"2%",bottom:"0%",top:"0%",containLabel:!0},backgroundColor:"black",title:{text:pieData[0].name,left:"50%",top:"68%",textAlign:"center",textStyle:{fontWeight:"normal",fontSize:"20",color:"white",textAlign:"center"}},series:[{type:"pie",name:"外层细圆环",radius:["40%","42%"],center:["50%","45%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{color:"#6e7175"}},label:{show:!1},data:[100]},{type:"pie",zlevel:3,silent:!0,radius:["17.5%","18%"],center:["50%","45%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:getDataArr(70)},{type:"pie",zlevel:3,silent:!0,radius:["25.5%","26%"],center:["50%","45%"],clockWise:!1,label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:getDataArr(100)},{type:"pie",zlevel:3,silent:!0,radius:["33.5%","34%"],center:["50%","45%"],label:{normal:{show:!1}},labelLine:{normal:{show:!1}},data:getDataArr(150)}]},option.series[5]={name:pieData[0].name,type:"pie",clockWise:!1,radius:["39%","43%"],itemStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0ff"},{offset:1,color:"#5467df"}]),label:{show:!1},labelLine:{show:!1}}},hoverAnimation:!1,center:["50%","45%"],data:[{value:pieData[0].value,label:{normal:{formatter:function(l){return l.value},position:"center",show:!0,textStyle:{fontSize:"25",color:"#1cc7ff"}}}},{value:100-pieData[0].value,name:"invisible",itemStyle:{normal:{color:"rgba(0,0,0,0)"},emphasis:{color:"rgba(0,0,0,0)"}}}]};
