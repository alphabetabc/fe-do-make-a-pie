var beijing="/asset/get/s/data-1546486013100-z-CmDYTVq.json",yanqing="/asset/get/s/data-1546395533660-mTgatXcmV.json",dongcheng="/asset/get/s/data-1546070060791-7oD7pZd8V.json",tongzhou="/asset/get/s/data-1546070060791-7oD7pZd8V.json",daxing="/asset/get/s/data-1546070060791-7oD7pZd8V.json",fangshan="/asset/get/s/data-1546070060791-7oD7pZd8V.json",fengtai="/asset/get/s/data-1546070060791-7oD7pZd8V.json",xicheng="/asset/get/s/data-1546070060791-7oD7pZd8V.json",chaoyang="/asset/get/s/data-1546070060791-7oD7pZd8V.json",shijingshan="/asset/get/s/data-1546070060791-7oD7pZd8V.json",haidian="/asset/get/s/data-1546070060791-7oD7pZd8V.json",mentougou="/asset/get/s/data-1546070060791-7oD7pZd8V.json",shunyi="/asset/get/s/data-1546070060791-7oD7pZd8V.json",changping="/asset/get/s/data-1546070060791-7oD7pZd8V.json",huairou="/asset/get/s/data-1546070060791-7oD7pZd8V.json",miyun="/asset/get/s/data-1546070060791-7oD7pZd8V.json",pinggu="/asset/get/s/data-1546070060791-7oD7pZd8V.json";echarts.extendsMap=function(p,n){var o=this.init(document.getElementById(p)),h={},u={通州区:tongzhou,大兴区:daxing,房山区:fangshan,丰台区:fengtai,西城区:xicheng,东城区:dongcheng,朝阳区:chaoyang,石景山区:shijingshan,海淀区:haidian,门头沟区:mentougou,顺义区:shunyi,昌平区:changping,怀柔区:huairou,密云区:miyun,平谷区:pinggu,延庆区:yanqing},x={通州:[116.708603,39.802486],大兴:[116.338033,39.728908],房山:[116.139157,39.735535],丰台:[116.286968,39.863642],西城:[116.366794,39.915309],东城:[116.418757,39.917544],朝阳:[116.486409,39.921489],石景山:[116.195445,39.914601],海淀:[116.310316,39.956074],门头沟:[116.105381,39.937183],顺义:[116.653525,40.128936],昌平:[116.235906,40.218085],怀柔:[116.637122,40.324272],密云:[116.843352,40.377362],平谷:[117.112335,40.144783],延庆:[115.985006,40.465325],延庆1号主变:[115.985006,40.465325],延庆2号主变:[116.185006,40.375325],延庆3号主变:[116.285006,40.685325],延庆4号主变:[116.385006,40.595325],延庆5号主变:[115.785006,40.505325]},D={1:"rgba(241, 109, 115, .8)",2:"rgba(76, 175, 80, .7)",3:"rgba(147, 235, 248, 0.7)"},j={mapName:"china",goDown:!1,bgColor:"#ffcfb8",activeArea:[],data:[],regionData:[],callback:function(e,t,a){}};n&&(n=this.util.extend(j,n));var c=[n.mapName],v=0,r={leftPlus:115,leftCur:150,left:198,top:50},y=[[0,0],[8,11],[0,22]],f={font:'18px "Microsoft YaHei", sans-serif',textColor:"#000",lineColor:"#000"},s={resetOption:function(e,t,a){var i=this.createBreadcrumb(a),g=c.indexOf(a),d=t.graphic.length;if(g<0){if(t.graphic.push(i),t.graphic[0].children[0].shape.x2=145,t.graphic[0].children[1].shape.x2=145,t.graphic.length>2)for(var m=0;m<n.data.length;m++)if(a===n.data[m].name+"区"){t.series[0].data=s.initSeriesData(n.regionData);break}else t.series[0].data=[];c.push(a),v++}else t.graphic.splice(g+2,d),t.graphic.length<=2&&(t.graphic[0].children[0].shape.x2=60,t.graphic[0].children[1].shape.x2=60,t.series[0].data=s.initSeriesData(n.data)),c.splice(g+1,d),v=g,r.leftCur-=r.leftPlus*(d-g-1);t.geo.map=a,t.geo.zoom=.4,e.clear(),e.setOption(t),this.zoomAnimation(),n.callback(a,t,e)},createBreadcrumb:function(e){var t={通州区:"tongzhou",大兴区:"daxing",房山区:"fangshan",丰台区:"fengtai",西城区:"xicheng",东城区:"dongcheng",朝阳区:"chaoyang",石景山区:"shijingshan",海淀区:"haidian",门头沟区:"mentougou",顺义区:"shunyi",昌平区:"changping",怀柔区:"huairou",密云区:"miyun",平谷区:"pinggu",延庆区:"yanqing"},a={type:"group",id:e,left:r.leftCur+r.leftPlus,top:r.top+3,children:[{type:"polyline",left:-90,top:-5,shape:{points:y},style:{stroke:"#000",key:e},onclick:function(){var i=this.style.key;s.resetOption(o,l,i)}},{type:"text",left:-68,top:"middle",style:{text:e,textAlign:"center",fill:f.textColor,font:f.font},onclick:function(){var i=this.style.text;s.resetOption(o,l,i)}},{type:"text",left:-68,top:10,style:{name:e,text:t[e]?t[e].toUpperCase():"",textAlign:"center",fill:f.textColor,font:'12px "Microsoft YaHei", sans-serif'},onclick:function(){var i=this.style.name;s.resetOption(o,l,i)}}]};return r.leftCur+=r.leftPlus,a},initSeriesData:function(e){for(var t=[],a=0;a<e.length;a++){var i=x[e[a].name];i&&t.push({name:e[a].name,value:i.concat(e[a].value,e[a].level)})}return t},zoomAnimation:function(){var e=null,t=function(a){e||(e=a),e=e+a,o.setOption({geo:{zoom:e}}),e<1&&window.requestAnimationFrame(function(){t(.2)})};window.requestAnimationFrame(function(){t(.2)})}},l={graphic:[{type:"group",left:r.left,top:r.top-4,children:[{type:"line",left:0,top:-20,shape:{x1:0,y1:0,x2:60,y2:0},style:{stroke:f.lineColor}},{type:"line",left:0,top:20,shape:{x1:0,y1:0,x2:60,y2:0},style:{stroke:f.lineColor}}]},{id:c[v],type:"group",left:r.left+2,top:r.top,children:[{type:"polyline",left:90,top:-12,shape:{points:y},style:{stroke:"transparent",key:c[0]},onclick:function(){var e=this.style.key;s.resetOption(o,l,e)}},{type:"text",left:0,top:"middle",style:{text:c[0]==="北京"?"北京市":c[0],textAlign:"center",fill:f.textColor,font:f.font},onclick:function(){s.resetOption(o,l,"北京")}},{type:"text",left:0,top:10,style:{text:"BEIJING",textAlign:"center",fill:f.textColor,font:'12px "Microsoft YaHei", sans-serif'},onclick:function(){s.resetOption(o,l,"北京")}}]}],geo:{map:n.mapName,roam:!0,label:{normal:{show:!0,textStyle:{color:"#000"}}},itemStyle:{normal:{areaColor:"#ffcfb8",borderColor:"#111"},emphasis:{areaColor:"#eaca1e"}}},series:[{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",rippleEffect:{period:15,scale:6,brushType:"fill"},hoverAnimation:!0,itemStyle:{normal:{color:function(e){return D[e.value[3]]},shadowBlur:10,shadowColor:"#333"}},data:s.initSeriesData(n.data)}]};return o.setOption(l),o.on("click",function(e){var t=this;if(n.goDown&&e.name!==c[v]&&u[e.name]){var a=u[e.name];$.get(a,function(i){h=i,echarts.registerMap(e.name,i),s.resetOption(t,l,e.name)})}}),o.setMap=function(e){var t=this;e.indexOf("区")<0&&(e=e+"区");var a=u[e];if(a){var i="./map/"+a+".json";$.get(i,function(g){h=g,echarts.registerMap(e,g),s.resetOption(t,l,e)})}},o};function getTempData(p){var n=[];return p=="beijing"&&(n=[{name:"朝阳",value:10,level:1},{name:"通州",value:12,level:2},{name:"延庆",value:11,level:3},{name:"石景山",value:16,level:2},{name:"海淀",value:12,level:1}]),p=="yanqing"&&(n=[{name:"延庆1号主变",value:10,level:1},{name:"延庆2号主变",value:12,level:2},{name:"延庆3号主变",value:11,level:3},{name:"延庆4号主变",value:16,level:2},{name:"延庆5号主变",value:12,level:1}]),n}$.getJSON(beijing,function(p){echarts.registerMap("北京",p);var n=echarts.extendsMap("chart-panel",{bgColor:"#154e90",mapName:"北京",goDown:!0,callback:function(o,h,u){console.log(o,h,u)},data:getTempData("beijing"),regionData:getTempData("yanqing")})});