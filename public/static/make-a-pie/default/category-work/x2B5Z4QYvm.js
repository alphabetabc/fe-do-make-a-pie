var map;function initMap(n){var l=mars3d.Util.merge(n,{scene:{center:{lat:26.339073,lng:118.495643,alt:937783,heading:355,pitch:-58}}});map=new mars3d.Map("mars3dContainer",l),map.basemap=2017;let a=new mars3d.layer.GeoJsonLayer({name:"安徽各市",url:"//data.mars3d.cn/file/geojson/areas/340000_full.json",symbol:{type:"polygon",styleOptions:{materialType:mars3d.MaterialType.PolyGradient,color:"#3388cc",opacity:.7,alphaPower:1.3,label:{text:"{name}",opacity:1,font_size:25,color:"#fff",font_family:"楷体",outline:!1,scaleByDistance:!0,scaleByDistance_far:2e7,scaleByDistance_farValue:.1,scaleByDistance_near:1e3,scaleByDistance_nearValue:1}},callback:function(e,o){let t=e.gdp*5;return{color:getColor(),diffHeight:t}}},popup:"{name} : {gdp}亿元  "});map.addLayer(a),a.on(mars3d.EventType.load,function(e){console.log("数据加载完成",e)}),a.on(mars3d.EventType.click,function(e){console.log("单击了图层",e)})}let arrColor=["rgb(15,176,255)","rgb(18,76,154)","#40C4E4","#42B2BE","rgb(51,176,204)","#8CB7E5","rgb(0,244,188)","#139FF0"],index=0;function getColor(){return arrColor[++index%arrColor.length]}
