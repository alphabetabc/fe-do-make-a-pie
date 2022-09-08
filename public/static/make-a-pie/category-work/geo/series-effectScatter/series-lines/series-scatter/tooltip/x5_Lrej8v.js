var chinaGeoCoordMap={黑龙江:[127.9688,45.368],内蒙古:[110.3467,41.4899],吉林:[125.8154,44.2584],北京市:[116.4551,40.2539],辽宁:[123.1238,42.1216],河北:[114.4995,38.1006],天津:[117.4219,39.4189],山西:[112.3352,37.9413],陕西:[109.1162,34.2004],甘肃:[103.5901,36.3043],宁夏:[106.3586,38.1775],青海:[101.4038,36.8207],新疆:[87.9236,43.5883],西藏:[91.11,29.97],四川:[103.9526,30.7617],重庆:[108.384366,30.439702],山东:[117.1582,36.8701],河南:[113.4668,34.6234],江苏:[118.8062,31.9208],安徽:[117.29,32.0581],湖北:[114.3896,30.6628],浙江:[119.5313,29.8773],福建:[119.4543,25.9222],江西:[116.0046,28.6633],湖南:[113.0823,28.2568],贵州:[106.6992,26.7682],云南:[102.9199,25.4663],广东:[113.12244,23.009505],广西:[108.479,23.1152],海南:[110.3893,19.8516],上海:[121.4648,31.2891]},chinaDatas=[[{name:"黑龙江",value:0,price:100,num:2}],[{name:"内蒙古",value:0,price:100,num:2}],[{name:"吉林",value:0,price:100,num:2}],[{name:"辽宁",value:0,price:100,num:2}],[{name:"河北",value:0,price:100,num:2}],[{name:"天津",value:0,price:100,num:2}],[{name:"山西",value:0,price:100,num:2}],[{name:"陕西",value:0,price:100,num:2}],[{name:"甘肃",value:0,price:100,num:2}],[{name:"宁夏",value:0,price:100,num:2}],[{name:"青海",value:0,price:100,num:2}],[{name:"新疆",value:0,price:100,num:2}],[{name:"西藏",value:0,price:100,num:2}],[{name:"四川",value:0,price:100,num:2}],[{name:"重庆",value:0,price:100,num:2}],[{name:"山东",value:0,price:100,num:2}],[{name:"河南",value:0,price:100,num:2}],[{name:"江苏",value:0,price:100,num:2}],[{name:"安徽",value:0,price:100,num:2}],[{name:"湖北",value:0,price:100,num:2}],[{name:"浙江",value:0,price:100,num:2}],[{name:"福建",value:0,price:100,num:2}],[{name:"江西",value:0,price:100,num:2}],[{name:"湖南",value:0,price:100,num:2}],[{name:"贵州",value:0,price:100,num:2}],[{name:"广西",value:0,price:100,num:2}],[{name:"海南",value:0,price:100,num:2}]],convertData=function(r){for(var i=[],e=0;e<r.length;e++){var n=r[e],l=[116.4551,40.2539],a=chinaGeoCoordMap[n[0].name];l&&a&&i.push([{coord:l,value:n[0].value},{coord:a,dataItem:n}])}return i};let redName="新疆";var planePath="path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705",series=[];[["北京市",chinaDatas]].forEach(function(r,i){series.push({type:"lines",zlevel:2,effect:{show:!0,period:4,trailLength:.1,symbol:"circle",symbolSize:3,color:"#fff"},lineStyle:{normal:{width:.7,opacity:.5,curveness:.2,color:function(e){return"#ffa022"}},color:"red"},tooltip:{trigger:"item",backgroundColor:"rgba(8, 18, 42, 0.85)",borderColor:"#040616",showDelay:0,hideDelay:0,enterable:!0,transitionDuration:0,extraCssText:"z-index:100",formatter:function(e,n,l){let a="",t=e.data.dataItem[0].name,o=e.data.dataItem[0].price,u=e.data.dataItem[0].num;a="<div style='color:#fff;'><span>北京->"+t+"</span><br/><span>均价："+o+"</span>,<span>线路数："+u+"</span></div>";let c='<div class="mapTableContent"><div class="tableTop">北京 -> 新疆</div> <div class="tableList"> <div class="item itemTop"> <p>城市</p> <p>均价</p> <p>线路数</p> </div> <div class="item"> <p>新疆-1</p> <p>100</p> <p>1</p> </div> <div class="item"> <p>新疆-2</p> <p>200</p> <p>2</p> </div> </div> </div>';return t==redName?c:a}},data:convertData(r[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:4,brushType:"fill",scale:2.2},symbol:"circle",symbolSize:function(e){return 5},itemStyle:{normal:{show:!1,color:function(e){return"#ffa022"},borderWidth:0,shadowColor:"#b5e8fa",shadowBlur:4}},tooltip:{trigger:"item",backgroundColor:"rgba(8, 18, 42, 0.85)",borderColor:"#040616",showDelay:0,hideDelay:0,enterable:!0,transitionDuration:0,extraCssText:"z-index:100",formatter:function(e,n,l){let a="",t=e.data.dataItem[0].name,o=e.data.dataItem[0].price,u=e.data.dataItem[0].num;return a="<div style='color:#fff;padding:10px;'><span>北京->"+t+"</span><br/><span>均价："+o+"</span><br/><span>线路数："+u+"</span></div>",a}},data:r[1].map(function(e){return{dataItem:e,name:e[0].name,value:chinaGeoCoordMap[e[0].name].concat([e[0].value])}})},{type:"scatter",coordinateSystem:"geo",zlevel:1,rippleEffect:{period:4,brushType:"stroke",scale:4},symbol:"circle",color:"rgba(128, 220, 251, .6)",symbolSize:20,data:[{name:r[0],value:chinaGeoCoordMap[r[0]].concat([10])}]})}),option={tooltip:{trigger:"item",backgroundColor:"rgba(166, 200, 76, 0.82)",borderColor:"#040616",showDelay:0,hideDelay:0,enterable:!0,transitionDuration:0,extraCssText:"z-index:100"},backgroundColor:"#001d3d",geo:{map:"china",zoom:1,label:{emphasis:{show:!1}},roam:!1,itemStyle:{normal:{color:"#092765",borderColor:"#6481a0",borderWidth:1},emphasis:{color:"rgba(37, 43, 61, .5)"}}},series};
