var test_data=[{name:"22",value:"1224760.49"},{name:"33",value:"1418392.50"},{name:"25-29",value:"1318392.50"}],maxData=14183925e-1,seriesd=[],legend=[];for(var j in test_data){legend.indexOf(test_data[j].name==-1)&&legend.push({icon:"rect",name:test_data[j].name});var ra=test_data.length-1-j;seriesd.push({name:test_data[j].name,type:"pie",radius:[ra*20+52+"%",43+ra*20+"%"],itemStyle:{normal:{label:{show:!1}}},hoverAnimation:!1,startAngle:180,center:["45%","75%"],data:[{value:test_data[j].value,name:test_data[j].name,label:{normal:{postion:"center"}}},{value:maxData-test_data[j].value,itemStyle:{normal:{color:"rgba(203,203,203,0.5)",label:{show:!1},labelLine:{show:!1}},emphasis:{color:"rgba(203,203,203,1)"}},name:"showtip_"+test_data[j].value},{value:maxData,itemStyle:{normal:{color:"rgba(0,0,0,0)",label:{show:!0},labelLine:{show:!0}},emphasis:{color:"rgba(0,0,0,0)"}},name:"hide"}]})}var initnum=parseFloat(seriesd[0].data[0].value*100/maxData).toFixed(2);seriesd.push({type:"gauge",z:3,min:0,max:100,splitNumber:5,center:["45%","75%"],radius:"0%",endAngle:0,startAngle:180,axisLabel:{show:!1,formatter:"{value}%"},axisLine:{show:!1,lineStyle:{color:[[1,"rgba(203,203,203,1)"]],width:2}},axisTick:{show:!1,length:5,lineStyle:{color:"auto"}},splitLabel:{show:!1},pointer:{show:!1},splitLine:{show:!1},title:{show:!1},detail:{show:!1},itemStyle:{normal:{color:"#676767"}},data:[{value:initnum}]}),option={maxnum:maxData,tooltip:{show:!0,formatter:function(e){if(e.name=="hide")return null;if(e.name.indexOf("showtip_")!=-1)var a=Number(e.name.split("_")[1]);else var a=e.value;return Number(a)==0?e.seriesName+":"+Number(a):e.seriesName+":"+parseFloat(a*100/maxData).toFixed(2)+"%"}},grid:{top:0,height:0,left:"10%",right:"10%"},series:seriesd,color:["red","#afa"]};
