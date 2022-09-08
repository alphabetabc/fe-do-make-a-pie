var GDEcharts=function(t){this.container=document.getElementById(t.containerId),this.adcode=t.adcode?t.adcode:1e5,this.echartOption=t.echartOption,this.gridWidth=60,this.gridHeight=40,this.geoData={type:"FeatureCollection",features:[]},this.breadcrumbData=[{name:"全国",adcode:1e5}],this.testData=[],this.echart,this.districtExplorer,this.init()};GDEcharts.prototype={constructor,init:function(){this.echart||this.initEchart(),this.districtExplorer||this.initDistrictExplorer(),this.echart.showLoading();var t=this;return setTimeout(function(){t.districtExplorer.loadAreaNode(t.adcode,function(a,r){t.geoData.features=r.getSubFeatures(),echarts.registerMap(t.adcode,t.geoData),t.createBreadcrumb(r),t.createTestData(),t.renderChart()})},500),this},initEchart:function(){this.echart=echarts.init(this.container);var t=this;t.echart.on("georoam",function(a){t.resetChart()}),t.echart.on("click",function(a){var r=a.componentType,i=0;if(a.componentType=="geo")for(var e=a.name,o=t.geoData.features,n=0,h=o.length;n<h;n++){var c=o[n].properties;if(c.name==e){i=c.childrenNum,t.adcode=c.adcode;break}}else i=a.data.childrenNum,t.adcode=a.data.adcode;i>0?t.init():console.log("无下级区域！")})},initDistrictExplorer:function(){var t=this;t.districtExplorer||AMapUI.loadUI(["geo/DistrictExplorer"],function(a){t.districtExplorer=new a})},renderChart:function(){var t=this.echartOption.geo;switch(t.map=this.adcode,this.adcode){case 1e5:t.zoom=1.5,t.center=[104.114129,34.550339];break;case 46e4:t.zoom=5,t.center=[110.33119,19.031971];break;default:t.zoom=null,t.center=null;break}this.echart.hideLoading(),this.echart.clear(),this.echart.setOption(this.echartOption),this.addOverLays(["pie","line"])},resetChart:function(){var t=this,a=this.echart.getOption(),r=a.series,i=a.grid;i&&i.length>0&&i.forEach(function(e,o){var n=t.echart.convertToPixel("geo",e.dCenter);e.left=n[0]-t.gridWidth/2,e.top=n[1]-t.gridHeight/2}),r.forEach(function(e,o){e.center&&(e.center=t.echart.convertToPixel("geo",e.dCenter))}),t.echart.setOption(a)},addOverLays:function(t){t&&t.length>0&&(this.echartOption.grid=[],this.echartOption.xAxis=[],this.echartOption.yAxis=[],this.echartOption.series=[],this.creatSeries(t),console.log(this.echartOption),this.echart.clear(),this.echart.setOption(this.echartOption))},creatSeries:function(t){var a=this,r=this.testData,i=t.length;r.forEach(function(e,o){var n=a.echart.convertToPixel("geo",e.center);t.forEach(function(h,c){switch(h){case"pie":a.createPieSeries(e,o,n);break;case"line":break}})})},createPieSeries:function(t,a,r){this.echartOption.series.push({name:t.name,type:"pie",radius:this.gridHeight/2,dCenter:t.center,center:r,data:[{value:Math.round(Math.random()*420+80),name:"直接访问",adcode:t.adcode,childrenNum:t.childrenNum},{value:Math.round(Math.random()*420+80),name:"邮件营销",adcode:t.adcode,childrenNum:t.childrenNum},{value:Math.round(Math.random()*420+80),name:"联盟广告",adcode:t.adcode,childrenNum:t.childrenNum}],label:{show:!1},animationType:"scale",animationEasing:"elasticOut",animationDelay:function(i){return Math.random()*200}})},createLineSeries:function(t,a,r){this.echartOption.grid.push({left:r[0]-this.gridWidth/2,top:r[1]-this.gridHeight/2,width:this.gridWidth,height:this.gridHeight,dCenter:t.center}),this.echartOption.xAxis.push({gridIndex:a,min:0,max:20,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}}),this.echartOption.yAxis.push({gridIndex:a,min:0,max:20,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}}),this.echartOption.series.push({type:"line",name:t.name,xAxisIndex:a,yAxisIndex:a,lineStyle:{color:"#ff6004"},itemStyle:{borderColor:"#ff6004",borderWidth:1},data:[[2,Math.round(Math.random()*17+3)],[5,Math.round(Math.random()*17+3)],[10,Math.round(Math.random()*17+3)],[12,Math.round(Math.random()*17+3)],[18,Math.round(Math.random()*17+3)]]})},createTestData:function(){for(var t=[],a=this.geoData.features,r=0,i=a.length;r<i;r++){var e=a[r].properties,o=e.centroid?e.centroid:e.center,n={name:e.name,center:o,adcode:e.adcode,childrenNum:e.childrenNum};t.push(n)}this.testData=t},createBreadcrumb:function(t){for(var a=t.getProps(),r=this.breadcrumbData,i=[],e=!1,o=0,n=r.length;o<n;o++)if(i.push(r[o]),r[o].adcode==a.adcode){e=!0;break}e?this.breadcrumbData=i:this.breadcrumbData.push({name:a.name,adcode:a.adcode});var h=[],c="";r=this.breadcrumbData;for(var s=0,n=r.length;s<n;s++)r[s].concatString=c,h=h.concat(this.createBreadcrumbOption(r[s],s)),c=c+r[s].name;this.echartOption.graphic=h},createBreadcrumbOption:function(t,a){var r=this,i={font:'18px "Microsoft YaHei", sans-serif',textColor:"#123456"},e={leftCur:150,top:50,separationSpace:15,separatorWidth:7,wordWidth:17},o=[[0,0],[e.separatorWidth-1,e.separatorWidth],[0,e.separatorWidth*2]],n=e.leftCur+(2*a-1)*e.separationSpace+t.concatString.length*e.wordWidth+(a-1)*e.separatorWidth,h={type:"polyline",left:n,top:e.top,shape:{points:o},silent:!0,bounding:"all"},c=e.leftCur+a*(2*e.separationSpace+e.separatorWidth)+t.concatString.length*e.wordWidth,s={type:"text",left:c,top:e.top,style:{text:t.name,textAlign:"center",fill:i.textColor,font:i.font},onclick:function(){t.adcode!=r.adcode&&(r.adcode=t.adcode,r.init())}};return a==0?[s]:[h,s]}};var echartOption={tooltip:{trigger:"item"},geo:{roam:!0,map:"",label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#304553",borderColor:"#fff"}},silent:!0},visualMap:{show:!1,min:80,max:500,inRange:{colorLightness:[0,1]}},series:[]},chart=new GDEcharts({containerId:"chart-panel",echartOption});
