$('<div class="back">返 回</div>').appendTo($("#chart-panel")),$(".back").css({position:"absolute",left:"25px",top:"25px",color:"rgb(179, 239, 255)","font-size":"16px",cursor:"pointer","z-index":"100"}),$(".back").click(function(){parentInfo.length!==1&&(parentInfo.pop(),getGeoJson(parentInfo[parentInfo.length-1].code))});var geoJson={features:[]},parentInfo=[{cityName:"全国",level:"china",code:1e5}],timeTitle=["10.1","10.2","10.3","10.4","10.5","10.6","10.7","10.8"];getGeoJson(1e5);function getGeoJson(l){AMapUI.loadUI(["geo/DistrictExplorer"],t=>{var n=new t;n.loadAreaNode(l,function(e,a){if(e){console.error(e);return}let i=a.getSubFeatures();if(i.length>0)geoJson.features=i;else if(i.length===0&&(geoJson.features=geoJson.features.filter(r=>r.properties.adcode==l),geoJson.features.length===0))return;getMapData()})})}function getMapData(){let l={},t={};l={"10.1":[{name:"山西省",value:20,level:"province",cityCode:0},{name:"河北省",value:225,level:"province",cityCode:0},{name:"河南省",value:5,level:"province",cityCode:0},{name:"山东省",value:27,level:"province",cityCode:0},{name:"广东省",value:4,level:"province",cityCode:0},{name:"北京",value:3,level:"province",cityCode:0},{name:"不列颠哥伦比亚",value:1,level:"province",cityCode:0},{name:"湖北省",value:1,level:"province",cityCode:0},{name:"重庆",value:1,level:"province",cityCode:0},{name:"陕西省",value:1,level:"province",cityCode:0},{name:"广西",value:1,level:"province",cityCode:0},{name:"江苏省",value:1,level:"province",cityCode:0},{name:"江西省",value:1,level:"province",cityCode:0}],"10.2":[{name:"河北省",value:294,level:"province",cityCode:0},{name:"河南省",value:2,level:"province",cityCode:0},{name:"山东省",value:7,level:"province",cityCode:0},{name:"南苏拉威西",value:1,level:"province",cityCode:0},{name:"山西省",value:41,level:"province",cityCode:0},{name:"江苏省",value:1,level:"province",cityCode:0},{name:"北京",value:5,level:"province",cityCode:0},{name:"陕西省",value:1,level:"province",cityCode:0},{name:"广东省",value:1,level:"province",cityCode:0}],"10.3":[{name:"河北省",value:333,level:"province",cityCode:0},{name:"移动",value:4,level:"province",cityCode:0},{name:"河南省",value:18,level:"province",cityCode:0},{name:"广东省",value:3,level:"province",cityCode:0},{name:"山东省",value:7,level:"province",cityCode:0},{name:"山西省",value:34,level:"province",cityCode:0},{name:"天津",value:24,level:"province",cityCode:0},{name:"北京",value:7,level:"province",cityCode:0},{name:"江苏省",value:1,level:"province",cityCode:0},{name:"青海省",value:1,level:"province",cityCode:0},{name:"云南省",value:2,level:"province",cityCode:0},{name:"浙江省",value:1,level:"province",cityCode:0},{name:"四川省",value:1,level:"province",cityCode:0},{name:"陕西省",value:2,level:"province",cityCode:0},{name:"甘肃省",value:1,level:"province",cityCode:0}],"10.4":[{name:"山西省",value:28,level:"province",cityCode:0},{name:"河北省",value:242,level:"province",cityCode:0},{name:"山东省",value:4,level:"province",cityCode:0},{name:"天津",value:6,level:"province",cityCode:0},{name:"河南省",value:14,level:"province",cityCode:0},{name:"福建省",value:1,level:"province",cityCode:0},{name:"陕西省",value:1,level:"province",cityCode:0},{name:"江苏省",value:4,level:"province",cityCode:0},{name:"安徽省",value:2,level:"province",cityCode:0},{name:"浙江省",value:2,level:"province",cityCode:0},{name:"移动",value:1,level:"province",cityCode:0},{name:"青海省",value:1,level:"province",cityCode:0},{name:"四川省",value:1,level:"province",cityCode:0}],"10.5":[{name:"江苏省",value:3,level:"province",cityCode:0},{name:"河北省",value:232,level:"province",cityCode:0},{name:"黑龙江省",value:1,level:"province",cityCode:0},{name:"山西省",value:29,level:"province",cityCode:0},{name:"北京",value:3,level:"province",cityCode:0},{name:"安徽省",value:1,level:"province",cityCode:0},{name:"山东省",value:6,level:"province",cityCode:0},{name:"重庆",value:1,level:"province",cityCode:0},{name:"河南省",value:18,level:"province",cityCode:0},{name:"内蒙古",value:1,level:"province",cityCode:0}],"10.6":[{name:"河北省",value:369,level:"province",cityCode:0},{name:"河南省",value:9,level:"province",cityCode:0},{name:"重庆",value:1,level:"province",cityCode:0},{name:"山西省",value:38,level:"province",cityCode:0},{name:"山东省",value:60,level:"province",cityCode:0},{name:"天津",value:7,level:"province",cityCode:0},{name:"北京",value:4,level:"province",cityCode:0},{name:"湖南省",value:1,level:"province",cityCode:0},{name:"湖北省",value:1,level:"province",cityCode:0},{name:"四川省",value:1,level:"province",cityCode:0},{name:"广东省",value:1,level:"province",cityCode:0},{name:"江苏省",value:2,level:"province",cityCode:0},{name:"陕西省",value:1,level:"province",cityCode:0},{name:"江西省",value:1,level:"province",cityCode:0},{name:"吉林省",value:1,level:"province",cityCode:0},{name:"广西",value:1,level:"province",cityCode:0},{name:"辽宁省",value:1,level:"province",cityCode:0}],"10.7":[{name:"河北省",value:186,level:"province",cityCode:0},{name:"山东省",value:14,level:"province",cityCode:0},{name:"天津",value:2,level:"province",cityCode:0},{name:"江苏省",value:1,level:"province",cityCode:0},{name:"广东省",value:1,level:"province",cityCode:0},{name:"山西省",value:12,level:"province",cityCode:0},{name:"河南省",value:3,level:"province",cityCode:0},{name:"广西",value:1,level:"province",cityCode:0},{name:"北京",value:1,level:"province",cityCode:0},{name:"移动",value:1,level:"province",cityCode:0},{name:"云南省",value:1,level:"province",cityCode:0}],"10.8":[{name:"河北省",value:105,level:"province",cityCode:0},{name:"山东省",value:8,level:"province",cityCode:0},{name:"北京",value:2,level:"province",cityCode:0},{name:"重庆",value:1,level:"province",cityCode:0},{name:"内蒙古",value:1,level:"province",cityCode:0},{name:"山西省",value:11,level:"province",cityCode:0},{name:"河南省",value:2,level:"province",cityCode:0},{name:"四川省",value:1,level:"province",cityCode:0},{name:"移动",value:1,level:"province",cityCode:0},{name:"天津",value:1,level:"province",cityCode:0}]};for(let n=0;n<timeTitle.length;n++){t[timeTitle[n]]=[];for(let e=0;e<geoJson.features.length;e++){let a=Math.random()*3e3;console.log(l[timeTitle[n]]),console.log(geoJson.features[e].properties.name),t[timeTitle[n]].push({name:geoJson.features[e].properties.name,value:[geoJson.features[e].properties.center[0],geoJson.features[e].properties.center[1],a],cityCode:geoJson.features[e].properties.adcode})}}initEchartMap(l,t)}function initEchartMap(l,t){parentInfo.length===1?echarts.registerMap("china",geoJson):echarts.registerMap("map",geoJson);var n={timeline:{data:timeTitle,axisType:"category",autoPlay:!0,playInterval:3e3,left:"10%",right:"10%",bottom:"2%",width:"80%",label:{normal:{textStyle:{color:"rgb(179, 239, 255)"}},emphasis:{textStyle:{color:"#fff"}}},symbolSize:10,lineStyle:{color:"#8df4f4"},checkpointStyle:{borderColor:"#8df4f4",color:"#53D9FF",borderWidth:2},controlStyle:{showNextBtn:!0,showPrevBtn:!0,normal:{color:"#53D9FF",borderColor:"#53D9FF"},emphasis:{color:"rgb(58,115,192)",borderColor:"rgb(58,115,192)"}}},baseOption:{animation:!0,animationDuration:900,animationEasing:"cubicInOut",animationDurationUpdate:900,animationEasingUpdate:"cubicInOut",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{right:"2%",top:"12%",bottom:"8%",width:"20%"},toolbox:{feature:{restore:{show:!1},dataView:{optionToContent:function(e){let a=e.series[0].data,i='<th  style="padding: 0 20px">所在地区</th><th style="padding: 0 20px">销售额</th>',r="",v=`<table border="1" style="margin-left:20px;border-collapse:collapse;font-size:14px;text-align:left;"><tbody><tr>${i} </tr>`;for(let o=0;o<a.length;o++)v+=`<tr>
                              <td style="padding: 0 50px">${a[o].name}</td>
                              <td style="padding: 0 50px">${a[o].value}万</td>
                              </tr>`;return v+="</tbody></table>",v}},saveAsImage:{name:parentInfo[parentInfo.length-1].cityName+"销售额统计图"},dataZoom:{show:!1},magicType:{show:!1}},iconStyle:{normal:{borderColor:"#1990DA"}},top:15,right:35},geo:{map:parentInfo.length===1?"china":"map",zoom:1.1,roam:!0,center:parentInfo.length===1?["118.83531246","32.0267395887"]:!1,tooltip:{trigger:"item",formatter:e=>{let a=e.value[2];return window.isNaN(a)&&(a=0),"<div style='text-align:left'>"+e.name+":<br />销售额："+a+"万</div>"}},label:{normal:{show:!0,color:"rgb(249, 249, 249)",formatter:e=>{switch(e.name){case"内蒙古自治区":e.name="内蒙古";break;case"西藏自治区":e.name="西藏";break;case"新疆维吾尔自治区":e.name="新疆";break;case"宁夏回族自治区":e.name="宁夏";break;case"广西壮族自治区":e.name="广西";break;case"香港特别行政区":e.name="香港";break;case"澳门特别行政区":e.name="澳门";break;default:break}return e.name}},emphasis:{show:!0,color:"#f75a00"}},itemStyle:{normal:{areaColor:"#24CFF4",borderColor:"#53D9FF",borderWidth:1.3,shadowBlur:15,shadowColor:"rgb(58,115,192)",shadowOffsetX:7,shadowOffsetY:6},emphasis:{areaColor:"#8dd7fc",borderWidth:1.6,shadowBlur:25}}}},options:[]};timeTitle.forEach(e=>{var a=[],i=[],r=l[e][l[e].length-1].value,v=l[e][0].value;l[e].length===1&&(r=0),l[e].forEach(o=>{a.unshift(o.name),i.unshift(o.value)}),n.options.push({backgroundColor:"#012248",title:[{left:"center",top:10,text:e+parentInfo[parentInfo.length-1].cityName+"游客来源",textStyle:{color:"rgb(179, 239, 255)",fontSize:16}}],visualMap:{min:r,max:v,left:"3%",bottom:"5%",calculable:!0,seriesIndex:[0],inRange:{color:["#24CFF4","#2E98CA","#1E62AC"]},textStyle:{color:"#24CFF4"}},xAxis:{type:"value",scale:!0,position:"top",boundaryGap:!1,splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#455B77"}},axisTick:{show:!1},axisLabel:{margin:2,textStyle:{color:"#c0e6f9"}}},yAxis:{type:"category",nameGap:16,axisLine:{show:!0,lineStyle:{color:"#455B77"}},axisTick:{show:!1},axisLabel:{interval:0,textStyle:{color:"#c0e6f9"}},data:a},series:[{name:e+"游客来源",type:"map",geoIndex:0,map:parentInfo.length===1?"china":"map",roam:!0,zoom:1.3,tooltip:{trigger:"item",formatter:o=>{let c=o.value;return o.name=="南海诸岛"?void 0:(window.isNaN(c)&&(c=0),"<div style='text-align:left'>"+o.name+":"+c+"人</div>")}},label:{normal:{show:!1},emphasis:{show:!1}},data:l[e]},{name:"散点",type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"fill"},itemStyle:{normal:{color:"#F4E925",shadowBlur:10,shadowColor:"#333"}},symbolSize:function(o){return o[2]==v?27:10},showEffectOn:"render"},{type:"bar",barGap:"-100%",barCategoryGap:"60%",itemStyle:{normal:{color:"#11AAFE"},emphasis:{show:!1}},data:i}]})}),myChart.setOption(n,!0),myChart.off("click"),myChart.on("click",echartsMapClick)}function echartsMapClick(l){if(l.data){if(parentInfo[parentInfo.length-1].code==l.data.cityCode)return;let t=l.data;parentInfo.push({cityName:t.name,level:t.level,code:t.cityCode}),getGeoJson(t.cityCode)}else return}