var bd="/asset/get/s/data-1618898514270-IsqqHGtbY.json",fp="/asset/get/s/data-1618899525486-wkO5rxyAM.json",ly="/asset/get/s/data-1618899757492-WnGtLt6Yk.json",yx="/asset/get/s/data-1618906123836-ahRSeBbEE.json",dz="/asset/get/s/data-1618906432180-c93kCPvh8.json",qy="/asset/get/s/data-1618911164355-PhByrCUVp.json",tx="/asset/get/s/data-1618911169152-Mftb_e2Yd.json",mapname=bd,color1={x:0,y:0,x2:0,y2:1,type:"linear",global:!1,colorStops:[{offset:0,color:"rgb(22,255,255, 0)"},{offset:1,color:"rgb(22,255,255, 0.6)"}]},mapJson=[{name:"阜平县",json:fp},{name:"涞源县",json:ly},{name:"易县",json:ly},{name:"定州市",json:dz},{name:"曲阳县",json:qy},{name:"唐县",json:tx}],mapDate=[{name:"阜平县",value:[114.198801,38.847276],datas:1354,img:"image://asset/get/s/data-1619059442567-s5l7-f8Eu9.png"},{name:"涞源县",value:[114.723966,39.292095],datas:1402,img:"image://asset/get/s/data-1619059442567-s5l7-f8Eu9.png"},{name:"易县",value:[115.245576,39.311674],datas:2468,img:"image://asset/get/s/data-1619059838735-QE9mBZmhh.png"},{name:"定州市",value:[115.050014,38.460198],datas:768,img:"image://asset/get/s/data-1619321685306-EvjlgDOXi.png"},{name:"曲阳县",value:[114.654083,38.700813],datas:589,img:"image://asset/get/s/data-1619059838735-QE9mBZmhh.png"},{name:"唐县",value:[114.798254,38.898656],datas:1500,img:"image://asset/get/s/data-1619321685306-EvjlgDOXi.png"}],geoCoordMap={阜平县:[114.198801,38.847276],涞源县:[114.723966,39.292095],易县:[115.245576,39.311674],定州市:[115.050014,38.460198],曲阳县:[114.654083,38.700813],唐县:[114.798254,38.898656]},customerBatteryCityData=[{name:"阜平县",value:50},{name:"涞源县",value:20},{name:"易县",value:60},{name:"定州市",value:70},{name:"曲阳县",value:120},{name:"唐县",value:70}];function lineMaxHeight(){const a=Math.max(...customerBatteryCityData.map(e=>e.value));return .9/a}function lineData(){return customerBatteryCityData.map(a=>({coords:[geoCoordMap[a.name],[geoCoordMap[a.name][0],geoCoordMap[a.name][1]+a.value*lineMaxHeight()]]}))}var domImg=document.createElement("img");domImg.style.height=domImg.height=domImg.width=domImg.style.width="8px",domImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE4MTE0OTgyQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE4MTE0OTgzQTdDQzExRUI4Q0RBRkMwQkFGMTY2NDhEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTgxMTQ5ODBBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTgxMTQ5ODFBN0NDMTFFQjhDREFGQzBCQUYxNjY0OEQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4v4trwAAAAVklEQVR42mL0D225cu0hAzWAjpY8C9CsL19/wIV4uDnI5gKNYmKgKhjcxrFAggBZiBIuyDhqRQWQOxoVo1ExGhWjUTEaFYMiKoB1LVq1TXZUAI0CCDAAcAlaxCt7dtQAAAAASUVORK5CYII=";var domImgHover=document.createElement("img");domImgHover.style.height=domImgHover.height=domImgHover.width=domImgHover.style.width="8px",domImgHover.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAIAAAAmKNuZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFDQ0Q2RjYyQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFDQ0Q2RjYzQTdDRDExRUI4ODUxRDIxRjkzMEExNzg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QUNDRDZGNjBBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUNDRDZGNjFBN0NEMTFFQjg4NTFEMjFGOTMwQTE3ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6FboimAAAASklEQVR42mIUnL9XtHsDAzXA69IARjWtXJYX7+FCfyQEKeEyMVAVDG7jWCB+RhaihAsybjQqRqNiNCpGo2I0KoZZVDBSt9oGCDAAhYNrvRu3DWEAAAAASUVORK5CYII=";var img2="image://asset/get/s/data-1619318279159-o6ZbTGoO0.png";let index=-1;myChart.showLoading("default",{text:"统计中，请稍候...",maskColor:"#2957A2",textColor:"#fff"}),myChart.on("click",function(a){var e=mapJson.filter(t=>t.name==a.name);mapname=e[0].json,mapDate=[],$('<div class="back">〈 返回</div>').appendTo($("#chart-panel")),$(".back").css({position:"absolute",left:"17px",top:"25px",color:"rgb(222,222,222)","font-size":"12px",cursor:"pointer",border:"1px solid rgba(255, 255, 255, .5)",padding:"0px 6px 1px 0px","border-radius":"3px","z-index":"100"}),$(".back").click(function(){mapname=bd,mapDate=[{name:"阜平县",value:[114.198801,38.847276],datas:1354,img:"image://asset/get/s/data-1619059442567-s5l7-f8Eu9.png"},{name:"涞源县",value:[114.723966,39.292095],datas:1402,img:"image://asset/get/s/data-1619059442567-s5l7-f8Eu9.png"},{name:"易县",value:[115.245576,39.311674],datas:2468,img:"image://asset/get/s/data-1619059838735-QE9mBZmhh.png"},{name:"定州市",value:[115.050014,38.460198],datas:768,img:"image://asset/get/s/data-1619321685306-EvjlgDOXi.png"},{name:"曲阳县",value:[114.654083,38.700813],datas:589,img:"image://asset/get/s/data-1619059838735-QE9mBZmhh.png"},{name:"唐县",value:[114.798254,38.898656],datas:1500,img:"image://asset/get/s/data-1619321685306-EvjlgDOXi.png"}],$(".back").css({position:"absolute",left:"17px",top:"-25px",color:"rgb(222,222,222)","font-size":"15px",cursor:"pointer","z-index":"100"}),mapInit()}),mapInit()}),setTimeout(function(){mapInit()},1e3);var mapInit=()=>{$.getJSON(mapname,function(a){echarts.registerMap("bd",a),myChart.hideLoading(),option={backgroundColor:"#2957A2",title:{top:20,text:"河北省",subtext:"",x:"center",textStyle:{color:"#fff",fontWeight:100,fontSize:14}},geo:[{type:"map",roam:!0,label:{normal:{show:!1,textStyle:{color:"#fff"}},emphasis:{textStyle:{color:"#fff"}}},itemStyle:{normal:{borderColor:"#2ab8ff",borderWidth:1,areaColor:{image:domImg,repeat:"repeat"},shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:0,shadowOffsetX:0,shadowOffsetY:1},emphasis:{areaColor:{image:domImgHover,repeat:"repeat"},borderColor:"#2ab8ff",borderWidth:1,shadowColor:"rgba(0, 255, 255, 0.7)",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:1,label:{show:!1}}},zoom:1.1,roam:!0,map:"bd",zlevel:2,silent:!0},{map:"bd",aspectScale:.75,layoutCenter:["50%","50%"],layoutSize:"102%",silent:!0,roam:!0,z:0,zlevel:1,itemStyle:{normal:{areaColor:"rgba(0, 15, 40, 0.5)",shadowColor:"rgba(0, 0, 0, 1)",shadowBlur:20,shadowOffsetX:5,shadowOffsetY:5,borderColor:"rgba(0, 0, 0, 0.7)",borderWidth:.5},emphasis:{areaColor:"#2AB8FF",borderWidth:1,color:"green",label:{show:!1}}}}],series:[{tooltip:{show:!1},type:"effectScatter",coordinateSystem:"geo",rippleEffect:{scale:10,brushType:"stroke"},showEffectOn:"render",itemStyle:{normal:{shadowColor:"#0ff",shadowBlur:10,shadowOffsetX:0,shadowOffsetY:0,color:"rgb(22,255,255, 1)"}},label:{normal:{color:"#fff"}},symbol:"circle",symbolSize:[10,5],data:mapDate,zlevel:3}]},myChart.setOption(option)})};
