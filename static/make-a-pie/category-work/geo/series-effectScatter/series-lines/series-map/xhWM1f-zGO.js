var uploadedDataURL="/asset/get/s/data-1528971808162-BkOXf61WX.json",points=[{value:[118.8062,31.9208],itemStyle:{color:"red"},name:"浙江能源"},{value:[119.09648,40.058726],itemStyle:{color:"red"},name:"北方港"},{value:[100.846362,55.254671],itemStyle:{color:"red"},name:"俄罗斯"}],data=[{coords:[[118.8062,31.9208],[119.09648,40.058726]],lineStyle:{color:"yellow"}},{coords:[[118.8062,31.9208],[100.846362,55.254671]],lineStyle:{color:"yellow"}}];let index=-1;var imgPath="image://https://s4.aconvert.com/convert/p3r68-cdx67/asn8w-thtcm.svg";$.getJSON(uploadedDataURL,function(e){echarts.registerMap("china",e),myChart.hideLoading(),option={backgroundColor:"#031439",geo:{map:"china",aspectScale:.75,zoom:1.1,roam:!1,itemStyle:{normal:{areaColor:"#15e3c9",shadowColor:"rgba(0,243,255,0.6)",shadowOffsetX:9,shadowOffsetY:9},emphasis:{areaColor:"#2AB8FF",borderWidth:0,color:"green",label:{show:!1}}},regions:[{name:"南海诸岛",itemStyle:{areaColor:"rgba(0, 10, 52, 1)",borderColor:"rgba(0, 10, 52, 1)",normal:{opacity:0,label:{show:!1,color:"#009cc9"}}}}]},series:[{type:"map",roam:!1,label:{normal:{show:!1,textStyle:{color:"#1DE9B6"}},emphasis:{textStyle:{color:"rgb(183,185,14)"}}},itemStyle:{normal:{borderColor:"rgb(18 126 169 / 58%)",borderWidth:1,areaColor:"#15e3c9"},emphasis:{areaColor:"rgb(46,229,206)",borderWidth:.1}},zoom:1.1,map:"china"},{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",zlevel:1,rippleEffect:{period:6,scale:3},hoverAnimation:!0,label:{normal:{formatter:function(o){return o.data.name},fontSize:16,position:"right",offset:[15,0],color:"#fff",show:!0}},itemStyle:{normal:{color:"#fff",shadowBlur:20}},symbolSize:10,data:points},{type:"lines",zlevel:2,effect:{show:!0,period:8,trailLength:0,symbol:"triangle",symbolSize:[30,30]},lineStyle:{normal:{color:"#1DE9B6",width:0,opacity:0,curveness:-2}},data},{type:"lines",zlevel:3,effect:{show:!0,period:8,trailLength:.7,symbol:"arrow",symbolOffset:["34%","-50%"],symbolSize:[10,10]},lineStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(255 255 0 ,1)"},{offset:.5,color:"rgba(255 255 0 ,0.2)"},{offset:1,color:"rgba(255 255 0 ,0)"}]),width:.3,opacity:.3,curveness:-2}},data}]},myChart.setOption(option,!0)});
