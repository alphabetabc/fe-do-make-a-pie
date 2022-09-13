var parentJson=null,parentInfo=[{cityName:"四川",level:"city",code:51e4}];getGeoJson(51e4);var timeFn=null;function getGeoJson(e){AMapUI.loadUI(["geo/DistrictExplorer"],t=>{var a=new t;a.loadAreaNode(e,function(l,r){if(l){console.error(l);return}let o=r.getSubFeatures();if(o.length>0)parentJson=o;else if(o.length===0&&(o=parentJson.filter(i=>{if(i.properties.adcode==e)return i}),o.length===0))return;proceData(o)})})}function proceData(e){let t=[{name:"甘孜藏族自治州",cityCode:"513300",value:"460"},{name:"乐山市",cityCode:"511100",value:"1372"},{name:"自贡市",cityCode:"510300",value:"851"},{name:"广元市",cityCode:"510800",value:"720"},{name:"眉山市",cityCode:"511400",value:"1139"},{name:"宜宾市",cityCode:"511500",value:"772"},{name:"攀枝花市",cityCode:"510400",value:"8143"},{name:"凉山彝族自治州",cityCode:"513400",value:"723"},{name:"达州市",cityCode:"511700",value:"705"},{name:"雅安市",cityCode:"511800",value:"448"},{name:"泸州市",cityCode:"510500",value:"1194"},{name:"巴中市",cityCode:"511900",value:"560"},{name:"广安市",cityCode:"511600",value:"373"},{name:"成都市",cityCode:"510100",value:"4543"},{name:"内江市",cityCode:"511000",value:"716"},{name:"遂宁市",cityCode:"510900",value:"521"},{name:"德阳市",cityCode:"510600",value:"1075"},{name:"阿坝藏族羌族自治州",lr:"421",cityCode:"513200",value:"285"},{name:"绵阳市",cityCode:"510700",value:"1180"},{name:"资阳市",cityCode:"512000",value:"682"},{name:"南充市",cityCode:"511300",value:"1352"}];e.map(l=>{t.forEach(r=>{l.properties.adcode==r.cityCode&&(r.level=l.properties.level)})});let a={};a.features=e,initEcharts(t,a)}function initEcharts(e,t){let a=[];e.map(function(o){a.push(o.value)});let l=Math.max.apply(null,a),r=Math.min.apply(null,a);echarts.registerMap("Map",t),myChart.setOption({backgroundColor:"rgb(20,28,52)",tooltip:{trigger:"item"},visualMap:{type:"piecewise",min:r,max:l,splitNumber:5,left:35,bottom:50,itemWidth:21,itemHeight:8,showLabel:!1,orient:"horizontal",text:["高","低"],itemGap:2,textStyle:{color:"#fff"},inRange:"",color:["rgba(7, 83, 114,0.8)","rgba(24, 100, 141,0.9)","rgba(33, 122, 168,0.8)","rgba(28, 138, 187,0.7)","rgba(34, 156, 199,0.8)"],show:!0},series:[{name:"地图",type:"map",map:"Map",roam:!0,zoom:1,aspectScale:.9,data:e,itemStyle:{normal:{show:!0,areaColor:"#2E98CA",borderColor:"rgb(185, 220, 227)",borderWidth:"1"}},label:{normal:{show:!0,textStyle:{color:"rgb(249, 249, 249)",fontSize:12}},emphasis:{show:!0,textStyle:{color:"#000"}}}}]},!0)}myChart.on("click",e=>{clearTimeout(timeFn),timeFn=setTimeout(function(){if(!e.value){alert("暂无数据");return}if(parentInfo[parentInfo.length-1].code==e.data.cityCode)return;let t=e.data;parentInfo.push({cityName:t.name,level:t.level,code:t.cityCode}),getGeoJson(t.cityCode)},250)}),myChart.on("dblclick",function(e){if(clearTimeout(timeFn),!(parentInfo.length<1)){if(parentInfo.length===1){getGeoJson(parentInfo[parentInfo.length-1].code);return}parentInfo.pop(),getGeoJson(parentInfo[parentInfo.length-1].code)}});
