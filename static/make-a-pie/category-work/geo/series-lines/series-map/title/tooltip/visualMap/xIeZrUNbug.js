var devCoordMap={上海:[121.4648,31.2891],广东:[113.8953,22.901],山西:[111.4783,36.1615],新疆:[85.9236,40.5883],河北:[115.0488,39.0948],甘肃:[103.5901,36.3043],内蒙古:[110.3467,41.4899],北京:[116.4551,40.2539],北海:[109.314,21.6211],江苏:[119.6062,32.9208],广西:[108.479,23.1152],江西:[116.0046,28.6633],福建:[118.1689,24.6478],合肥:[117.29,32.0581],陕西:[108.4131,34.8706],黑龙江:[127.9688,47.368],辽宁:[123.452841,41.702663],天津:[117.4219,39.4189],安徽:[117.0123,32.2121],四川:[103.9526,30.7617],西藏:[91.1865,30.1465],云南:[102.9199,25.4663],浙江:[120.5313,29.1773],湖南:[111.5327,27.0319],湖北:[112.3896,30.6628],山东:[117.1582,36.8701],海南:[110.3893,19.8516],青海:[96.8038,36.2207],贵州:[106.6992,26.7682],河南:[113.4668,34.1234],重庆:[107.7539,30.1904],"重庆市,两江新区":[107.7539,30.1904],宁夏:[106.3586,36.8775],吉林:[125.8154,43.6584],香港:[115.1215,22.1235],澳门:[112.1211,22.2111],台北:[120.1111,23.2435],杭州市:[120.153576,30.287459],湖州市:[120.102398,30.867198],舟山市:[122.106863,30.016028],宁波市:[121.549792,29.868388],绍兴市:[120.582112,29.997117],台州市:[121.428599,28.661378],温州市:[120.672111,28.000575],金华市:[119.649506,29.089524],丽水市:[119.921786,28.451993],嘉兴市:[120.750865,30.762653],衢州市:[118.87263,28.941708]},heatmapData=[{name:"广东",value:1231504},{name:"广西",value:244021},{name:"江苏",value:1195364},{name:"重庆",value:95391},{name:"河南",value:965647},{name:"江西",value:70156},{name:"四川",value:450312},{name:"上海",value:216872},{name:"福建",value:178888},{name:"山东",value:254030},{name:"陕西",value:38428},{name:"甘肃",value:15553},{name:"河北",value:17326},{name:"北京",value:70792},{name:"贵州",value:25085},{name:"湖北",value:176955},{name:"湖南",value:651054},{name:"安徽",value:64842},{name:"海南",value:1273},{name:"黑龙江",value:6544},{name:"吉林",value:19254},{name:"辽宁",value:21955},{name:"内蒙古",value:18729},{name:"宁夏",value:226},{name:"青海",value:631},{name:"山西",value:15421},{name:"天津",value:38650},{name:"西藏",value:8},{name:"新疆",value:5},{name:"云南",value:91198},{name:"浙江",value:432749}];function convertData(e){for(var o=[],l=0;l<e.length;l++){var a=e[l],r=devCoordMap[a.source],t=devCoordMap[a.target];r&&t&&o.push({fromName:a.source,toName:a.target,coords:[r,t],value:a.num})}return o}var lineData=[{target:"广东",source:"广东",num:226940},{target:"广东",source:"宁夏",num:109039},{target:"广东",source:"河南",num:88608},{target:"广东",source:"江苏",num:61944},{target:"广东",source:"上海",num:44233}];option={title:{show:!0,text:"中国地图",textStyle:{fontWeight:"bold",fontSize:20,color:"#F1F1F3"},top:20,left:"center"},aspectScale:.85,tooltip:{trigger:"item",formatter:function(e){return e.seriesType==="lines"?e.data.fromName+">"+e.data.toName+":"+e.data.value:e.seriesType==="map"?e.data&&e.data.value>0?e.data.name+"<br>拦截次数11111："+e.data.value:"":e.name}},visualMap:{show:!1,min:0,seriesIndex:0,pieces:[{gt:1e5,label:"3级"},{gt:5e4,lte:1e5,label:"2级"},{lt:5e4,label:"1级"}],calculable:!1,inRange:{color:["#41a2b7","#ffd841","#ff6f5b"]},textStyle:{color:"#fff"}},geo:{map:"china",label:{normal:{show:!0,textStyle:{color:"#4a4a4a"}},emphasis:{show:!0,textStyle:{color:"#fff"}}},center:[104.114129,37.550339],zoom:1,regions:[{name:"中国",label:{normal:{show:!1}},itemStyle:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:0,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(6, 18, 51, .5)"},{offset:1,color:"rgba(6, 18, 51, 1)"}],globalCoord:!1},shadowColor:"rgba(255, 255, 255, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:30}}],roam:!1,itemStyle:{normal:{borderColor:"rgba(37, 142, 183, .3)",borderWidth:1,areaColor:"#012a74",shadowColor:"rgba(255, 255, 255, .3)",shadowOffsetX:-2,shadowOffsetY:-3,shadowBlur:10},emphasis:{areaColor:"#389BB7",borderWidth:0}}},series:[{name:"区域热力值",type:"map",geoIndex:0,data:heatmapData},{type:"lines",symbol:["circle","none"],zlevel:2,effect:{show:!0,period:6,trailLength:.2,symbol:"arrow",symbolSize:10},lineStyle:{normal:{color:"#afec2a",width:1,opacity:.8,curveness:.2}},data:convertData(lineData)},{type:"lines",symbol:["circle","none"],zlevel:2,effect:{show:!0,period:6,trailLength:.2,symbol:"arrow",symbolSize:10},lineStyle:{normal:{color:"#afec2a",width:1,opacity:.8,curveness:.2}},data:convertData(lineData)}]};
