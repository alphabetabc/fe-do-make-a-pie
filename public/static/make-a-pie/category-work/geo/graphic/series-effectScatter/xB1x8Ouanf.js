var ningxia="/asset/get/s/data-1524554660466-Hk2oiL2hM.json";echarts.extendsMap=function(u,r){var n=this.init(document.getElementById(u)),v={},m={银川市:"yinchuan",石嘴山市:"shizuishan",吴忠市:"wuzhong",中卫市:"zhongwei",固原市:"guyuan"},x={银川市:[106.22848,38.512996],石嘴山市:[106.375659,39.009961],吴忠市:[106.200885,38.019825],中卫市:[105.198232,37.523284],固原市:[106.246878,36.036011]},b={1:"rgba(241, 109, 115, .8)",2:"rgba(255, 235, 59, .7)",3:"rgba(147, 235, 248, 1)"},C={mapName:"china",goDown:!1,bgColor:"#404a59",activeArea:[],data:[],callback:function(e,t,a){}};r&&(r=this.util.extend(C,r));var p=[r.mapName],d=0,l={leftPlus:115,leftCur:150,left:198,top:50},y=[[0,0],[8,11],[0,22]],s={font:'18px "Microsoft YaHei", sans-serif',textColor:"#eee",lineColor:"rgba(147, 235, 248, .8)"},i={resetOption:function(e,t,a){var o=this.createBreadcrumb(a),c=p.indexOf(a),g=t.graphic.length;if(c<0){if(t.graphic.push(o),t.graphic[0].children[0].shape.x2=145,t.graphic[0].children[1].shape.x2=145,t.graphic.length>2)for(var h=0;h<r.data.length;h++)if(a===r.data[h].name+"市"){t.series[0].data=i.initSeriesData([r.data[h]]);break}else t.series[0].data=[];p.push(a),d++}else t.graphic.splice(c+2,g),t.graphic.length<=2&&(t.graphic[0].children[0].shape.x2=60,t.graphic[0].children[1].shape.x2=60,t.series[0].data=i.initSeriesData(r.data)),p.splice(c+1,g),d=c,l.leftCur-=l.leftPlus*(g-c-1);t.geo.map=a,t.geo.zoom=.4,e.clear(),e.setOption(t),this.zoomAnimation(),r.callback(a,t,e)},createBreadcrumb:function(e){var t={银川市:"yinchuan",石嘴山市:"shizuishan",吴忠市:"wuzhong",中卫市:"zhongwei",固原市:"guyuan"},a={type:"group",id:e,left:l.leftCur+l.leftPlus,top:l.top+3,children:[{type:"polyline",left:-90,top:-5,shape:{points:y},style:{stroke:"#fff",key:e},onclick:function(){var o=this.style.key;i.resetOption(n,f,o)}},{type:"text",left:-68,top:"middle",style:{text:e,textAlign:"center",fill:s.textColor,font:s.font},onclick:function(){var o=this.style.text;i.resetOption(n,f,o)}},{type:"text",left:-68,top:10,style:{name:e,text:t[e]?t[e].toUpperCase():"",textAlign:"center",fill:s.textColor,font:'12px "Microsoft YaHei", sans-serif'},onclick:function(){var o=this.style.name;i.resetOption(n,f,o)}}]};return l.leftCur+=l.leftPlus,a},initSeriesData:function(e){for(var t=[],a=0;a<e.length;a++){var o=x[e[a].name];o&&t.push({name:e[a].name,value:o.concat(e[a].value,e[a].level)})}return t},zoomAnimation:function(){var e=null,t=function(a){e||(e=a),e=e+a,n.setOption({geo:{zoom:e}}),e<1&&window.requestAnimationFrame(function(){t(.2)})};window.requestAnimationFrame(function(){t(.2)})}},f={backgroundColor:r.bgColor,graphic:[{type:"group",left:l.left,top:l.top-4,children:[{type:"line",left:0,top:-20,shape:{x1:0,y1:0,x2:60,y2:0},style:{stroke:s.lineColor}},{type:"line",left:0,top:20,shape:{x1:0,y1:0,x2:60,y2:0},style:{stroke:s.lineColor}}]},{id:p[d],type:"group",left:l.left+2,top:l.top,children:[{type:"polyline",left:90,top:-12,shape:{points:y},style:{stroke:"transparent",key:p[0]},onclick:function(){var e=this.style.key;i.resetOption(n,f,e)}},{type:"text",left:0,top:"middle",style:{text:p[0]==="宁夏"?"宁夏":p[0],textAlign:"center",fill:s.textColor,font:s.font},onclick:function(){i.resetOption(n,f,"宁夏")}},{type:"text",left:0,top:10,style:{text:"NINGXIA",textAlign:"center",fill:s.textColor,font:'12px "Microsoft YaHei", sans-serif'},onclick:function(){i.resetOption(n,f,"宁夏")}}]}],geo:{map:r.mapName,zoom:1,label:{normal:{show:!0,textStyle:{color:"#fff"}},emphasis:{textStyle:{color:"#fff"}}},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .2)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}},regions:r.activeArea.map(function(e){return typeof e!="string"?{name:e.name,itemStyle:{normal:{areaColor:e.areaColor||"#389BB7"}},label:{normal:{show:e.showLabel,textStyle:{color:"#fff"}}}}:{name:e,itemStyle:{normal:{borderColor:"#91e6ff",areaColor:"#389BB7"}}}})},series:[{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",rippleEffect:{period:15,scale:6,brushType:"fill"},hoverAnimation:!0,itemStyle:{normal:{color:function(e){return b[e.value[3]]},shadowBlur:10,shadowColor:"#333"}},data:i.initSeriesData(r.data)}]};return n.setOption(f),n.on("click",function(e){window.open()}),n.setMap=function(e){var t=this;e.indexOf("市")<0&&(e=e+"市");var a=m[e];if(a){window.open("ShowView640100.ftl");var o="./map/"+a+".json";$.get(o,function(c){v=c,echarts.registerMap(e,c),i.resetOption(t,f,e)})}},n},$.getJSON(ningxia,function(u){echarts.registerMap("宁夏",u);var r=echarts.extendsMap("chart-panel",{bgColor:"#154e90",mapName:"宁夏",goDown:!1,data:[{name:"银川市",value:10,level:1},{name:"石嘴山市",value:12,level:2},{name:"吴忠市",value:11,level:3},{name:"中卫市",value:16,level:2},{name:"固原市",value:12,level:1}]})});
