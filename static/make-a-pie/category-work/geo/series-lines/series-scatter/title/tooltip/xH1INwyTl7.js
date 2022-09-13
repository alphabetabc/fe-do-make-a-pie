var rug="/asset/get/s/data-1528704024268-rye72iigQ.js",uploadedDataURL="/asset/get/s/data-1528682054219-Hy0BU8ilm.json",name="china",yuexi="rgba(255, 153, 0, 0.8)",yuedong="rgba(244, 233, 37, 0.8)",zhusanjiao="rgba(0, 153, 0, 0.8)",yuebei="rgba(204, 0, 204, 0.8)",geoCoordMap={清远市:[112.9175,24.3292],北京市:[116.4551,40.2539],韶关市:[113.7964,24.7028],湛江市:[110.3577,20.9894],梅州市:[116.1255,24.1534],河源市:[114.917,23.9722],肇庆市:[112.1265,23.5822],惠州市:[114.6204,23.1647],茂名市:[111.0059,22.0221],江门市:[112.6318,22.1484],阳江市:[111.8298,22.0715],云浮市:[111.7859,22.8516],广州市:[113.5107,23.2196],汕尾市:[115.5762,23.0438],揭阳市:[116.1255,23.313],珠海市:[113.7305,22.1155],佛山市:[112.8955,23.1097],潮州市:[116.7847,23.8293],汕头市:[117.1692,23.3405],深圳市:[114.5435,22.5439],东莞市:[113.8953,22.901],中山市:[113.4229,22.478]},gdata=[{name:"北京市",value:"98652"},{name:"广州市",value:"75986"}],cdata=[{name:"清远市",value:"199"},{name:"韶关市",value:"152"},{name:"湛江市",value:"299"},{name:"梅州市",value:"89"},{name:"河源市",value:"52"},{name:"肇庆市",value:"99"},{name:"惠州市",value:"352"},{name:"茂名市",value:"116"},{name:"江门市",value:"168"},{name:"阳江市",value:"176"},{name:"云浮市",value:"78"},{name:"广州市",value:"468"},{name:"汕尾市",value:"86"},{name:"揭阳市",value:"114"},{name:"珠海市",value:"157"},{name:"佛山市",value:"315"},{name:"潮州市",value:"169"},{name:"汕头市",value:"214"},{name:"深圳市",value:"532"},{name:"东莞市",value:"265"},{name:"中山市",value:"259"}],relevance=[{fromName:"广州市",toName:"北京市",coords:[[113.5107,23.2196],[116.4551,40.2539]],lineStyle:{color:"rgba(255, 153, 0, 0.8)"}},{fromName:"北京市",toName:"广州市",coords:[[116.4551,40.2539],[113.5107,23.2196]],lineStyle:{color:"rgba(255, 255, 0, 0.8)"}}],relation=[{fromName:"湛江市",toName:"广州市",coords:[[110.3577,20.9894],[113.5107,23.2196]],lineStyle:{color:yuexi}},{fromName:"清远市",toName:"广州市",coords:[[112.9175,24.3292],[113.5107,23.2196]],lineStyle:{color:yuebei}},{fromName:"韶关市",toName:"广州市",coords:[[113.7964,24.7028],[113.5107,23.2196]],lineStyle:{color:yuebei}},{fromName:"梅州市",toName:"广州市",coords:[[116.1255,24.1534],[113.5107,23.2196]],lineStyle:{color:yuedong}},{fromName:"河源市",toName:"广州市",coords:[[114.917,23.9722],[113.5107,23.2196]],lineStyle:{color:yuedong}},{fromName:"肇庆市",toName:"广州市",coords:[[112.1265,23.5822],[113.5107,23.2196]],lineStyle:{color:zhusanjiao}},{fromName:"惠州市",toName:"广州市",coords:[[114.6204,23.1647],[113.5107,23.2196]],lineStyle:{color:zhusanjiao}},{fromName:"茂名市",toName:"广州市",coords:[[111.0059,22.0221],[113.5107,23.2196]],lineStyle:{color:yuexi}},{fromName:"江门市",toName:"广州市",coords:[[112.6318,22.1484],[113.5107,23.2196]],lineStyle:{color:zhusanjiao}},{fromName:"阳江市",toName:"广州市",coords:[[111.8298,22.0715],[113.5107,23.2196]],lineStyle:{color:yuexi}},{fromName:"云浮市",toName:"广州市",coords:[[111.7859,22.8516],[113.5107,23.2196]],lineStyle:{color:yuexi}},{fromName:"汕尾市",toName:"广州市",coords:[[115.5762,23.0438],[113.5107,23.2196]],lineStyle:{color:yuedong}},{fromName:"揭阳市",toName:"广州市",coords:[[116.1255,23.313],[113.5107,23.2196]],lineStyle:{color:yuedong}},{fromName:"珠海市",toName:"广州市",coords:[[113.7305,22.1155],[113.5107,23.2196]],lineStyle:{color:zhusanjiao}},{fromName:"佛山市",toName:"广州市",coords:[[112.8955,23.1097],[113.5107,23.2196]],lineStyle:{color:zhusanjiao}},{fromName:"潮州市",toName:"广州市",coords:[[116.7847,23.8293],[113.5107,23.2196]],lineStyle:{color:yuedong}},{fromName:"汕头市",toName:"广州市",coords:[[117.1692,23.3405],[113.5107,23.2196]],lineStyle:{color:yuedong}},{fromName:"深圳市",toName:"广州市",coords:[[114.5435,22.5439],[113.5107,23.2196]],lineStyle:{color:zhusanjiao}},{fromName:"东莞市",toName:"广州市",coords:[[113.8953,22.901],[113.5107,23.2196]],lineStyle:{color:zhusanjiao}},{fromName:"中山市",toName:"广州市",coords:[[113.4229,22.478],[113.5107,23.2196]],lineStyle:{color:zhusanjiao}}],convertData=function(e){for(var o=[],a=0;a<e.length;a++){var r=geoCoordMap[e[a].name];r&&o.push({name:e[a].name,value:r.concat(e[a].value)})}return o};option={backgroundColor:"#154E90",title:{text:"",subtext:"",sublink:""},tooltip:{trigger:"item",formatter:"{b} <br/>{a} : {c}"},geo:[{show:!0,map:"china",label:{normal:{textStyle:{color:"#fff"}},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .1)"}]},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}},regions:[{name:"广州市",label:{show:!0,color:"#FF0"}},{name:"北京",label:{show:!0,color:"#FF0"}}]}],series:[{show:!1,name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:50,label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9},formatter:function(e){return e.value[2]}}},itemStyle:{normal:{color:"rgba(255, 153,0, 0.8)"}},data:convertData(gdata)},{name:"线路",type:"lines",coordinateSystem:"geo",large:!0,left:"2%",top:10,type:"lines",coordinateSystem:"geo",symbol:"none",zlevel:2,effect:{show:!0,symbol:"roundRect",constantSpeed:50,period:2,delay:100,trailLength:.6,symbolSize:6},lineStyle:{normal:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#ed1941"},{offset:1,color:"#ffce7b"}],globalCoord:!1},width:.5,opacity:.8,type:"dotted",curveness:.2}},data:relevance}]},$.get(uploadedDataURL,function(e){echarts.registerMap(name,e),myChart.setOption(option)});var k=1,iCount;setTimeout(function(){iCount=setInterval(function(){loading(k),k=k+.2},150)},5e3);function loading(e){console.log(e);var o=myChart.getOption();console.log(o),e==1&&(o.geo[0].center=[113.5107,23.2196]),e<11?(o.geo[0].zoom=e,myChart.setOption(o)):(o.geo[0].label.show=!0,o.series[0].data=convertData(cdata),o.series[1].data=relation,myChart.setOption(o),clearInterval(iCount))}setTimeout(function(){setInterval(function(){var e=myChart.getOption();e.geo[0].zoom<6&&e.geo[0].label.show==!0?(e.geo[0].label.show=!1,e.series[0].data=convertData(gdata),e.series[1].data=relevance,myChart.setOption(e)):e.geo[0].zoom>6&&e.geo[0].label.show==!1&&(e.geo[0].label.show=!0,e.series[0].data=convertData(cdata),e.series[1].data=relation,myChart.setOption(e))},500)},1e4);