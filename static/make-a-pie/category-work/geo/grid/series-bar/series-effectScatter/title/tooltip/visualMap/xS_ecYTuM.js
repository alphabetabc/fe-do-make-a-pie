$.getJSON("/asset/get/s/data-1567588182028-i2QuSn-Tj.json",function(d){$.getJSON("/asset/get/s/data-1540540866203--zuExg59A.json",function(u){let r="rgba(31, 60, 69,.88)",n="whitesmoke",l="仿宋",c=$(myChart.getDom());c.css({"font-family":l,color:n});const b=u.features.map(function(t){return{name:t.properties.name,label:{show:!1},itemStyle:{areaColor:"rgb(52, 66, 88)",borderColor:n,borderWidth:.521,borderType:"solid"}}});d.features=d.features.filter(function(t){return!["北京市","天津市","河北省"].find(function(o){return t.properties.name==o})}).concat(u.features),echarts.registerMap("map",d);function a(t,o){var e;if(isNaN(t))switch(t){case"暂无":e="gray";break;case"优":e="#43ce17";break;case"良":e="#efdc31";break;case"轻度污染":e="#fa0";break;case"中度污染":e="#ff401a";break;case"重度污染":e="#d20040";break;case"严重污染":e="#9c0a4e";break;case"AQI":e="hsl(40,100%,50%)";break;case"臭氧":e="hsl(80,100%,50%)";break;case"二氧化硫":e="hsl(120,100%,50%)";break;case"二氧化氮":e="hsl(160,100%,50%)";break;case"一氧化碳":e="hsl(200,100%,50%)";break;case"细颗粒物":e="hsl(240,100%,50%)";break;case"可吸入颗粒物":e="hsl(280,100%,50%)";break;default:break}else{let m=function(s){return s<=50?"优":s<=100?"良":s<=150?"轻度污染":s<=200?"中度污染":s<=300?"重度污染":"严重污染"};var i=m;e=a(m(t))}return e}option={backgroundColor:"rgb(33,33,33)",title:{text:"京津冀空气质量",subtext:"数据来源：中国环境监测总站",sublink:"http://123.127.175.45:8082/",left:10,bottom:"400",textStyle:{color:n}},grid:{backgroundColor:r,show:!1,containLabel:!0,zlevel:"2",left:"10",bottom:"180",width:"30%",height:"30%",borderWidth:0},xAxis:{type:"value",splitLine:{show:!1},show:!1},geo:{roam:!0,zoom:7,scaleLimit:{min:4,max:9},center:[116.3985,39.5],map:"map",itemStyle:{areaColor:r,borderColor:"gray",borderType:"dotted"},label:{show:!0,rotate:90,backgroundColor:r,borderColor:"#ddd",borderWidth:2,fontFamily:l,fontWeight:"bold",fontSize:13,color:n,padding:3},regions:b,silent:!0},visualMap:[{seriesIndex:0,backgroundColor:"whitesmoke",bottom:2,left:2,borderRadius:0,itemWidth:38,itemGap:4,padding:5,inverse:!0,pieces:[{value:"NaN",label:"暂无",color:a("暂无")},{min:0,max:50,label:"优",color:a("优")},{min:51,max:100,label:"良",color:a("良")},{min:101,max:150,label:"轻度",color:a("轻度污染")},{min:151,max:200,label:"中度",color:a("中度污染")},{min:201,max:300,label:"重度",color:a("重度污染")},{min:301,label:"严重",color:a("严重污染")}],textStyle:{color:"black"}}],tooltip:{trigger:"item",confine:!0,enterable:!0,textStyle:{fontFamily:l}},series:[{type:"effectScatter",coordinateSystem:"geo",symbol:"rect",symbolSize:function(t,o){var e=[12*o.name.length,25];return e},showEffectOn:"render",rippleEffect:{brushType:"stroke"},tooltip:{formatter:function(t){const o=t.data.data;var e=$("<ul><li><b>"+t.name+"</b></li></ul>");e.css({"font-size":"small","border-radius":"5px","list-style":"none",padding:"10px","box-shadow":"0 1px 4px #ddd",color:t.color}),e.children().first().css({"font-size":"large","border-bottom":"1px double"}),o.code&&e.data("code",o.code);let i={title:{text:o.name},grid:{show:!0},yAxis:{type:"category",axisLabel:{rotate:-45,textStyle:{color:"white"},show:!1},data:[],show:!1,name:o.name,nameLocation:"end",nameTextStyle:{color:"white"}},series:[{},{zlevel:"2",type:"bar",gridIndex:0,label:{normal:{show:!0,position:"insideLeft",formatter:"{b}:{c}",fontFamily:l,fontWeight:"bold"}},data:[]}]};return e.children().first().find("b").css({color:"whitesmoke","text-shadow":"0 1px 2px black"}),o.aqi&&(e.children().first().append('<b style="font-size: xx-large;float: right;">'+o.aqi+"</b>"),i.yAxis.data.push("AQI"),i.series[1].data.push({value:o.aqi,itemStyle:{color:a(o.aqi)}})),o.pm2_5&&($("<li><b>细颗粒物：</b>"+o.pm2_5+"<span>μg/m<sup>3</sup></span></li>").appendTo(e),i.yAxis.data.push("细颗粒物"),i.series[1].data.push({value:o.pm2_5,itemStyle:{color:a("细颗粒物")}})),o.pm10&&($("<li><b>可吸入颗粒物：</b>"+o.pm10+"<span>μg/m<sup>3</sup></span></li>").appendTo(e),i.yAxis.data.push("可吸入颗粒物"),i.series[1].data.push({value:o.pm10,itemStyle:{color:a("可吸入颗粒物")}})),o.o3&&($("<li><b>臭氧：</b>"+o.o3+"<span>μg/m<sup>3</sup></span></li>").appendTo(e),i.yAxis.data.push("臭氧"),i.series[1].data.push({value:o.o3,itemStyle:{color:a("臭氧")}})),o.co&&($("<li><b>一氧化碳：</b>"+o.co+"<span>mg/m<sup>3</sup></span></li>").appendTo(e),i.yAxis.data.push("一氧化碳"),i.series[1].data.push({value:o.co,itemStyle:{color:a("一氧化碳")}})),o.so2&&($("<li><b>二氧化硫：</b>"+o.so2+"<span>μg/m<sup>3</sup></span></li>").appendTo(e),i.yAxis.data.push("二氧化硫"),i.series[1].data.push({value:o.so2,itemStyle:{color:a("二氧化硫")}})),e.children("li").find("span").css("font-size","xx-small"),myChart.setOption(i),e.prop("outerHTML")}},hoverAnimation:!0,label:{normal:{formatter:"{b}",show:!0,backgroundColor:r,borderColor:"#ddd",borderWidth:1,fontFamily:l,fontWeight:"bold",fontSize:13,color:"whitesmoke",padding:4}},itemStyle:{normal:{shadowBlur:10,shadowColor:"#333"}}}]};const p=$("<table></table>");p.css({position:"fixed",right:"12px",bottom:"21px","z-index":9,"box-shadow":"0 1px 4px #ddd","background-color":r}),p.appendTo(c),option.series[0].data=[{name:"张家口市",o3:61,pubtime:"2018-12-28 14:00:00",latitude:"40.812435",pm2_5:10,so2:6,aqi:23,pm10:23,code:"131200",co:.2,longitude:"114.89305"},{name:"秦皇岛市",o3:55,pubtime:"2018-12-28 14:00:00",latitude:"39.9366",pm2_5:15,so2:10,aqi:28,pm10:28,code:"130300",co:.8,longitude:"119.60482"},{name:"承德市",o3:58,pubtime:"2018-12-28 14:00:00",latitude:"40.96416",pm2_5:7,so2:6,aqi:31,pm10:31,code:"130800",co:.3,longitude:"117.92774"},{name:"北京市",o3:53,pubtime:"2018-12-28 14:00:00",latitude:"40.045975",pm2_5:9,so2:3,aqi:32,pm10:32,code:"110000",co:.3,longitude:"116.39825"},{name:"石家庄市",o3:57,pubtime:"2018-12-28 14:00:00",latitude:"38.03179861125",pm2_5:15,so2:12,aqi:34,pm10:34,code:"130100",co:.7,longitude:"114.4970652875"},{name:"唐山市",o3:55,pubtime:"2018-12-28 14:00:00",latitude:"39.6449533333333",pm2_5:19,so2:8,aqi:36,pm10:36,code:"130200",co:.6,longitude:"118.182916666667"},{name:"廊坊市",o3:58,pubtime:"2018-12-28 14:00:00",latitude:"39.54584",pm2_5:12,so2:4,aqi:40,pm10:40,code:"131000",co:.5,longitude:"116.72406"},{name:"沧州市",o3:65,pubtime:"2018-12-28 14:00:00",latitude:"38.3157666666667",pm2_5:16,so2:12,aqi:45,pm10:45,code:"130900",co:.5,longitude:"116.871566666667"},{name:"天津市",o3:51,pubtime:"2018-12-28 14:00:00",latitude:"39.0985566666667",pm2_5:8,so2:6,aqi:51,pm10:52,code:"120000",co:.4,longitude:"117.319033333333"},{name:"保定市",o3:54,pubtime:"2018-12-28 14:00:00",latitude:"38.8762666666667",pm2_5:24,so2:18,aqi:52,pm10:53,code:"130600",co:.6,longitude:"115.4852"},{name:"衡水市",o3:55,pubtime:"2018-12-28 14:00:00",latitude:"37.74335",pm2_5:28,so2:12,aqi:54,pm10:57,code:"131100",co:.6,longitude:"115.6743"},{name:"邢台市",o3:52,pubtime:"2018-12-28 14:00:00",latitude:"37.0771",pm2_5:31,so2:14,aqi:54,pm10:58,code:"130500",co:.5,longitude:"114.506675"},{name:"邯郸市",o3:49,pubtime:"2018-12-28 14:00:00",latitude:"36.60786",pm2_5:32,so2:18,aqi:64,pm10:77,code:"130400",co:.8,longitude:"114.513875"}].filter(function(t){return t.latitude&&t.longitude}).map(function(t,o){t.value=[t.longitude,t.latitude].concat(t.aqi);var e=$("<tr><td>"+(o+1)+"</td><td>"+t.name+"</td><td>"+(t.aqi?t.aqi:"--")+"</td></tr>");return e.appendTo(p),e.children().not(":eq(1)").css({"text-align":"center"}),e.children().css({"border-bottom":"1px dotted"}),e.children().last().css("background-color",a(t.aqi)),{name:t.name,value:t.value,data:t}}),myChart.setOption(option)})});
