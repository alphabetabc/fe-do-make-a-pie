var chinaGeoCoordMap={黑龙江:[127.9688,45.368],内蒙古:[110.3467,41.4899],吉林:[125.8154,44.2584],北京市:[116.4551,40.2539],辽宁:[123.1238,42.1216],河北:[114.4995,38.1006],天津:[117.4219,39.4189],山西:[112.3352,37.9413],陕西:[109.1162,34.2004],甘肃:[103.5901,36.3043],宁夏:[106.3586,38.1775],青海:[101.4038,36.8207],新疆:[87.9236,43.5883],西藏:[91.11,29.97],四川:[103.9526,30.7617],重庆:[108.384366,30.439702],山东:[117.1582,36.8701],河南:[113.4668,34.6234],江苏:[118.8062,31.9208],安徽:[117.29,32.0581],湖北:[114.3896,30.6628],浙江:[119.5313,29.8773],福建:[119.4543,25.9222],江西:[116.0046,28.6633],湖南:[113.0823,28.2568],贵州:[106.6992,26.7682],云南:[102.9199,25.4663],广东:[113.12244,23.009505],广西:[108.479,23.1152],海南:[110.3893,19.8516],上海:[121.4648,31.2891]},chinaDatas=[[{name:"黑龙江",value:1}],[{name:"内蒙古",value:1}],[{name:"吉林",value:1}],[{name:"辽宁",value:1}],[{name:"河北",value:1}],[{name:"天津",value:1}],[{name:"山西",value:1}],[{name:"陕西",value:1}],[{name:"甘肃",value:1}],[{name:"宁夏",value:1}],[{name:"青海",value:1}],[{name:"新疆",value:1}],[{name:"西藏",value:1}],[{name:"四川",value:1}],[{name:"上海",value:1}]],datasa=[{name:"北京",value:177},{name:"天津",value:42},{name:"河北",value:102},{name:"山西",value:81},{name:"内蒙古",value:47},{name:"辽宁",value:67},{name:"吉林",value:82},{name:"黑龙江",value:66},{name:"上海",value:24},{name:"江苏",value:92},{name:"浙江",value:114},{name:"安徽",value:109},{name:"福建",value:116},{name:"江西",value:91},{name:"山东",value:119},{name:"河南",value:137},{name:"湖北",value:116},{name:"湖南",value:114},{name:"重庆",value:91},{name:"四川",value:125},{name:"贵州",value:62},{name:"云南",value:83},{name:"西藏",value:9},{name:"陕西",value:80},{name:"甘肃",value:56},{name:"青海",value:10},{name:"宁夏",value:18},{name:"新疆",value:67},{name:"广东",value:123},{name:"广西",value:59},{name:"海南",value:14},{name:"台湾",value:14}],convertData=function(e){for(var l=[],a=0;a<e.length;a++){var o=e[a],r=chinaGeoCoordMap[o[0].name],n=[108.384366,30.439702];r&&n&&l.push({fromName:o[0].name,toName:"重庆",coords:[r,n],value:o[0].value,visualMap:!1,color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#f00"},{offset:1,color:"#fff"}],global:!1}})}return l},series=[],color=["#57df1c"];[["重庆",chinaDatas]].forEach(function(e,l){console.log(e),series.push({type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:0,symbol:"arrow",color:"red",symbolSize:6},lineStyle:{normal:{width:1,opacity:1,curveness:.3,type:"dashed",color:{type:"linear",x:0,y:0,x2:1,y2:0,colorStops:[{offset:0,color:"#f00"},{offset:1,color:"#fff"}],global:!1}}},label:{normal:{show:!1,position:"middle",formatter:"{b}"}},data:convertData(e[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{color:"#ffdede",period:6,brushType:"fill",scale:4},label:{normal:{show:!0,position:"bottom",formatter:"{b}",textStyle:{color:"#fff",fontSize:"12px"}}},symbol:"circle",symbolSize:5,itemStyle:{normal:{show:!0,color:"#f00"}},data:e[1].map(function(a){return{name:a[0].name,value:chinaGeoCoordMap[a[0].name]==null?"":chinaGeoCoordMap[a[0].name].concat([a[0].value]),visualMap:!1}})},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{color:"#ffdede",period:6,brushType:"fill",scale:4},label:{normal:{show:!0,position:"right",formatter:"{b}",textStyle:{color:"#fff"}},emphasis:{show:!0}},symbol:"circle",symbolSize:6,itemStyle:{normal:{show:!0,color:"#fff"}},data:[{name:e[0],value:chinaGeoCoordMap[e[0]].concat([10])}]},{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:datasa})}),option={tooltip:{trigger:"item",formatter:function(e,l,a){return e.seriesType=="effectScatter"?e.marker+e.data.name+""+e.data.value[2]:e.seriesType=="lines"?e.data.fromName+" -> "+e.data.toName+"<br />"+e.data.value:e.name}},visualMap:{show:!0,min:0,max:200,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[3],inRange:{color:["#00467F","#A5CC82"]}},geo:{map:"china",roam:!0,zoom:1.14,label:{emphasis:{show:!0}},itemStyle:{normal:{show:!1,color:"rgba(48,97,186，0)",borderColor:"rgba(0, 0, 0,0)"},emphasis:{show:!1,color:"#2B91B7"}}},series};
