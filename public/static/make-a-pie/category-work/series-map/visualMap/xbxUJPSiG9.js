var mapData=[];this.opts={subdistrict:1,showbiz:!1},this.district=new AMap.DistrictSearch(this.opts),this.district.search("中国",(e,a)=>{e=="complete"&&getData(a.districtList[0],"",1e5)});function getData(e,a,o){var l=e.boundaries||[];if(l)for(var t=0,r=l.length;t<r;t++)var y=new AMap.Polygon({map:this.map,strokeWeight:1,strokeColor:"#0091ea",fillColor:"#80d8ff",fillOpacity:.2,path:l[t]});var i=e.districtList||[];if(i){var s=new Option("--请选择--"),c=i[0].level;if(c==="street"){let f=this.geoJsonData.features||[],n={};for(let h in f)f[h].properties.name==this.cityName&&(n.features=[].concat(f[h]));mapData=[],mapData.push({name:this.cityName,value:Math.random()*100,level:c}),loadMap(this.cityName,n),this.geoJsonData=n;return}mapData=[];for(var t=0,r=i.length;t<r;t++){var d=i[t].name,p=i[t].adcode;mapData.push({name:d,value:Math.random()*100,cityCode:p,level:c});var v=i[t]&&i[t].level;s=new Option(d),s.setAttribute("value",v),s.center=i[t].center,s.adcode=i[t].adcode}loadMapData(o)}}function loadMapData(e){AMapUI.loadUI(["geo/DistrictExplorer"],a=>{var o=window.districtExplorer=new a({eventSupport:!0,map:this.map});o.loadAreaNode(e,(l,t)=>{if(l){console.error(l);return}let r={};r.features=t.getSubFeatures(),loadMap(this.cityName,r),this.geoJsonData=r})})}function loadMap(e,a){if(Object.keys(a).length!==0&&a){echarts.registerMap(e,a);var o={visualMap:{type:"piecewise",pieces:[{max:30,label:"安全",color:"#2c9a42"},{min:30,max:60,label:"警告",color:"#d08a00"},{min:60,label:"危险",color:"#c23c33"}],color:"#fff",textStyle:{color:"#fff"},visibility:"off"},series:[{name:"数据名称",type:"map",roam:!1,mapType:e,selectedMode:"single",showLegendSymbol:!1,visibility:"off",itemStyle:{normal:{color:"#ccc",areaColor:"#fff",borderColor:"#fff",borderWidth:.5,label:{show:!0,textStyle:{color:"rgb(249, 249, 249)"}}},emphasis:{areaColor:!1,borderColor:"#fff",areaStyle:{color:"#fff"},label:{show:!0,textStyle:{color:"rgb(249, 249, 249)"}}}},data:mapData}]};myChart.setOption(o)}}myChart.on("click",echartsMapClick);var that=this;function echartsMapClick(e){!e.data||e.data.level=="street"||(that.cityName=e.data.name,that.cityCode=e.data.cityCode,that.district.setLevel(e.data.level),that.district.setExtensions("all"),that.district.search(e.data.cityCode,(a,o)=>{a==="complete"&&getData(o.districtList[0],e.data.level,e.data.cityCode)}))}
