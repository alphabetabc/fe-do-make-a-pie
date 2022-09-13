var title_n="新一线城市房价与工资（2018年第一季度）",geoCoordMap={天津:[117.2,39.13],杭州:[120.19,30.26],成都:[104.06,30.67],东莞:[113.75,23.04],沈阳:[123.38,41.8],南京:[118.78,32.04],苏州:[120.62,31.32],无锡:[120.29,31.59],青岛:[120.33,36.07],郑州:[113.65,34.76],武汉:[114.31,30.52],宁波:[121.56,29.86],长沙:[113,28.21],重庆:[106.54,29.59],西安:[108.95,34.27]},rawData={天津:[21604,6978],杭州:[21420,8434],成都:[12580,7185],东莞:[14083,8023],沈阳:[8060,6173],南京:[25764,7616],苏州:[15588,7450],无锡:[9627,7154],青岛:[19226,6787],郑州:[12748,6815],武汉:[16306,7266],宁波:[17434,8062],长沙:[9968,7048],重庆:[7242,7348],西安:[9235,6393]};function makeMapData(a){for(var t=[],e=0;e<a.length;e++){var o=geoCoordMap[a[e][0]];o&&t.push({name:a[e][0],value:o.concat(a[e].slice(1))})}return t}option={animation:!1,backgroundColor:"#eee",title:{text:title_n,subtext:"红色为房价，黄色为平均工资",left:"center",textStyle:{color:"#000"}},geo:{scaleLimit:{min:1,max:1},map:"china",roam:!0,zoom:1.155,center:[102.925798,35.296079],label:{emphasis:{show:!0,areaColor:"#75a8f9"}},itemStyle:{normal:{borderColor:"#05dcd9",borderWidth:1,areaColor:"#929499"},emphasis:{show:!0,areaColor:"#5e97f2"}}},series:[]};function renderEachCity(){var a={xAxis:[],yAxis:[],grid:[],series:[]};echarts.util.each(rawData,function(t,e){var o=geoCoordMap[e],i=myChart.convertToPixel("geo",o),s=rawData[e];e+="",inflationData=t,a.xAxis.push({id:e,gridId:e,type:"category",name:e,nameLocation:"middle",nameGap:3,splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},axisLine:{onZero:!1,lineStyle:{color:"#000",width:1}},data:["数据A","数据B"],z:100}),a.yAxis.push({id:e,gridId:e,splitLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},axisLine:{show:!1,lineStyle:{color:"#1C70B6"}},z:100}),a.grid.push({id:e,width:30,height:s[0]*.001,left:i[0],top:i[1]+5-s[0]*.001,z:100}),a.series.push({id:e,type:"bar",xAxisId:e,yAxisId:e,barGap:0,barCategoryGap:0,data:inflationData,z:100,itemStyle:{normal:{color:function(r){var l=["red","yellow","#15e178"];return l[r.dataIndex]}}}})}),myChart.setOption(a)}setTimeout(renderEachCity,0);function throttle(a,t,e){var o,i=0,s=0,r=null,l,c,h;t=t||0;function n(){s=new Date().getTime(),r=null,a.apply(c,h||[])}var m=function(){o=new Date().getTime(),c=this,h=arguments,l=o-(e?i:s)-t,clearTimeout(r),e?r=setTimeout(n,t):l>=0?n():r=setTimeout(n,-l),i=o};return m}var throttledRenderEachCity=throttle(renderEachCity,0);myChart.on("click",function(a){console.log("点击显示柱状图",a),a.seriesId?console.log("图表",a.seriesId):console.log("地图",a.region.name),$(".tongJiTu").remove()});