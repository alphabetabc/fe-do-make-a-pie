var data={id:"echartPie",value:[12,32,54,12],legend:["人质","要不要投降","过期","追梦的蚂蚁"],color:["#3FA7DC","#7091C4","#5170A2","#E1CA74"],title:"饼图"},seriesData=[];data.value.forEach(function(t,o){seriesData.push({value:t,name:data.legend[o]})});var option={backgroundColor:"#fff",title:{x:"2%",y:"2%",textStyle:{fontWeight:400,fontSize:16,color:"#687284"},text:data.title||""},tooltip:{trigger:"item",show:data.tooltipShow!==!1},legend:{orient:"horizontal",top:16,icon:"circle",selectedMode:!1,itemWidth:6,itemHeight:6,itemGap:6,borderRadius:6,data:data.legend},series:[{type:"pie",hoverAnimation:data.hoverAnimation!==!1,radius:["40%","67%"],color:data.color,label:{normal:{position:"inner",formatter:function(t){if(!t.percent)return"";var o=Math.round(t.percent*10)/10,e=o.toString(),i=e.indexOf(".");for(i<0&&(i=e.length,e+=".");e.length<=i+1;)e+="0";return e+"%"},textStyle:{color:"#fff",fontSize:12}}},labelLine:{normal:{show:!1}},data:seriesData}]};