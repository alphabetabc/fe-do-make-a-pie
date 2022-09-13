let iconRQ="image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII=",data=[{name:"北京",value:[116.24,39.55,100]},{name:"深圳",value:[114.271522,22.753644]},{name:"重庆",value:[106.54,29.59]},{name:"南京",value:[118.78,32.04]}],mapData=[{name:"广东",selected:!0},{name:"安徽",selected:!0},{name:"北京",selected:!0},{name:"重庆",selected:!0}],LableData=[{name:"北京",value:[118.24,35.55,100],lable:[10,1]},{name:"重庆",value:[108.54,24.59],lable:[10,1]},{name:"南京",value:[118.78,26.04],lable:[10,1]}];option={backgroundColor:"#000f1e",xAxis:[],yAxis:[],grid:[],geo:{map:"china",aspectScale:.85,layoutCenter:["50%","50%"],layoutSize:"140%",itemStyle:{normal:{shadowColor:"#276fce",shadowOffsetX:0,shadowOffsetY:15,opacity:.5},emphasis:{areaColor:"#276fce"}},regions:[{name:"南海诸岛",itemStyle:{areaColor:"rgba(0, 10, 52, 1)",borderColor:"rgba(0, 10, 52, 1)",normal:{opacity:0,label:{show:!1,color:"#009cc9"}}},label:{show:!1,color:"#FFFFFF",fontSize:12}}]},series:[{type:"map",name:"map",mapType:"china",aspectScale:.85,layoutCenter:["50%","50%"],layoutSize:"140%",zoom:1,scaleLimit:{min:1,max:2},itemStyle:{normal:{areaColor:"#0c274b",borderColor:"#1cccff",borderWidth:1.5,opacity:1},emphasis:{areaColor:"#0c274b",borderColor:"#087cf9",borderWidth:5,opacity:1,label:{show:!1,color:"#fff"}}}},{name:"首都",type:"scatter",coordinateSystem:"geo",data:[{name:"首都",value:[116.24,41.55,100]}],symbol:iconRQ,symbolSize:20,label:{normal:{show:!1},emphasis:{show:!1}}},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,symbolSize:8,rippleEffect:{period:3,scale:5,brushType:"fill"},label:{normal:{show:!0,position:"right",formatter:"{b}",color:"#b3e2f2",fontWeight:"bold",fontSize:18}},data,itemStyle:{normal:{show:!0,color:"#c0e6f2",shadowBlur:20,shadowColor:"#fff"},emphasis:{areaColor:"#f00"}}},{type:"lines",zlevel:1,polyline:!0,effect:{show:!0,period:10,trailLength:.7,color:"#fff",symbol:"arrow",symbolSize:6},lineStyle:{normal:{color:"#fff",width:1.5,curveness:.2,shadowColor:"#fff"}},data:[{fromName:"深圳",toName:"北京",coords:[[114.271522,22.753644],[116.24,39.55],[114.271522,22.753644]]},{fromName:"深圳",toName:"浙江",coords:[[114.271522,22.753644],[118.78,32.04],[114.271522,22.753644]]},{fromName:"深圳",toName:"重庆",coords:[[114.271522,22.753644],[106.54,29.59],[114.271522,22.753644]]}]},{name:"lable",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:[50,20],hoverAnimation:!0,zlevel:2,label:{normal:{show:!0,textStyle:{color:"#fff8a8",fontSize:16,fontWeight:"bold",lineHeight:15},formatter:function(e){return e.data.lable[0]+"G/"+e.data.lable[1]+"G"}}},itemStyle:{normal:{color:"transparent",opacity:1}},showEffectOn:"render",rippleEffect:{brushType:"stroke"},data:LableData}]},myChart.on("mouseover",function(e){let t=myChart.getOption();e.name=="深圳"?(t.series[0].itemStyle.opacity=.5,myChart.setOption(t),myChart.dispatchAction({type:"highlight",name:"广东"})):e.name=="北京"?(t.series[0].itemStyle.opacity=.5,myChart.setOption(t),myChart.dispatchAction({type:"highlight",name:"北京"}),console.log(e)):e.name=="南京"?(t.series[0].itemStyle.opacity=.5,myChart.setOption(t),myChart.dispatchAction({type:"highlight",name:"安徽"})):e.name=="重庆"?(t.series[0].itemStyle.opacity=.5,myChart.setOption(t),myChart.dispatchAction({type:"highlight",name:"重庆"})):myChart.dispatchAction({type:"downplay",name:e.name})}),myChart.on("mouseout",function(e){myChart.dispatchAction({type:"downplay",name:e.name}),myChart.setOption(option)}),myChart.on("click",function(e){let t=myChart.getOption();for(let a=0;a<t.series[2].data.length;a++)e.name==t.series[2].data[a].name&&console.log(e.name)}),setInterval(function(){for(let t=0;t<LableData.length;t++)LableData[t].lable[1]=getRandom(10,100,0),LableData[t].lable[0]=getRandom(1,10,0);let e=myChart.getOption();e.series[4].data=LableData,myChart.setOption(e)},6e4);function getRandom(e,t,a){let o=t-e,l=Math.random();return(e+o*l).toFixed(a)}