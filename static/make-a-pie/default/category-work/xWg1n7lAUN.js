const map=Loca.create(myChart.getDom().id,{pitch:52});map.on("mapload",function(){map.getMap().plugin(["AMap.ControlBar"],function(){var e=new AMap.ControlBar({position:{right:"0",bottom:"-173px"}});map.getMap().addControl(e)}),map.getMap().plugin(["AMap.MapType"],function(){var e=new AMap.MapType({liteStyle:!0});map.getMap().addControl(e)}),map.getMap().plugin(["AMap.Scale"],function(){var e=new AMap.Scale;map.getMap().addControl(e)}),map.getMap().plugin(["AMap.ToolBar"],function(){var e=new AMap.ToolBar;map.getMap().addControl(e)}),map.getMap().on("complete",function(){var e=new AMap.InfoWindow({autoMove:!0});this.on("mousemove",function(o){var t=$("#lnglat");t.length||(t=$("<div></div>"),t.prop("id","lnglat"),t.appendTo($("#"+this.J.id)),t.css({position:"fixed","background-color":"white",padding:".52%","box-shadow":"0px 1px 4px #ddd"})),$("#lnglat").show(),t.css({top:o.pixel.y+21,left:o.pixel.x+12}),this.plugin("AMap.Geocoder",function(){new AMap.Geocoder().getAddress([o.lnglat.lng,o.lnglat.lat],function(n,a){if(n==="complete"&&a.regeocode){var v=a.regeocode.formattedAddress;t.html(v+"<br/>"+[o.lnglat.lng,o.lnglat.lat].join(","))}else $("#lnglat").hide()})})}),this.on("mouseleave",function(){$("#lnglat").hide()});function s(o,t){e.setContent(o+"<br>经度："+t[0]+"<br>纬度："+t[1]),e.open(map.getMap(),new AMap.LngLat(t[0],t[1])),map.getMap().setCenter(t),map.getMap().setZoom(15)}function A(o,t){var n;$.ajax({type:"post",url:"http://apis.map.qq.com/ws/geocoder/v1/",dataType:"jsonp",async:!1,data:{key:"4ERBZ-DVSWW-VHMR6-O26OJ-65VZ6-4HBRD",output:"jsonp",address:o},success:function(a){if(a.result&&a.result.location)n=[a.result.location.lng,a.result.location.lat],t(o,n);else{let u=function(c,f){var p;$.ajax({type:"post",url:"http://restapi.amap.com/v3/geocode/geo",dataType:"jsonp",async:!1,data:{key:"cb83484daa1f719b2a64dd48f66f60a3",address:c},success:function(d){if(d.geocodes&&d.geocodes.length)p=d.geocodes[0].location.split(","),f(c,p);else{let h=function(M,m){$.ajax({type:"post",url:"http://api.map.baidu.com/geocoder/v2/",dataType:"jsonp",async:!1,data:{ak:"ZUONbpqGBsYGXNIYHicvbAbM",output:"json",address:M},success:function(l){l.result&&l.result.location&&(p=[l.result.location.lng,l.result.location.lat],m(M,p))}})};var x=h;h(c,f)}}})};var v=u;u(o,t)}}})}this.plugin(["AMap.Geolocation"],function(){new AMap.Geolocation().getCurrentPosition(function(o,t){t.position&&s(t.formattedAddress,[t.position.lng,t.position.lat])})});var i=$("<div></div>"),r=$('<input id="tipinput" type="text" placeholder="请输入要查询的地址" />');i.css({position:"fixed","line-height":2,left:"100px","text-align":"center","box-shadow":"0 1px 4px #ddd",border:"navajowhite",padding:"1% 4%","background-color":"#2e465699","max-width":"80%"}),r.css({"line-height":2,"text-align":"center","box-shadow":"0 1px 4px #ddd",border:"navajowhite",padding:"1% 4%"}),i.append(r);var g=$("<button>搜索</button>");g.css({"line-height":2,"margin-left":"-8%",color:"white","background-color":"#2f2525","font-weight":"bold"}),i.append(g),$(this.getContainer()).after(i),this.plugin(["AMap.Autocomplete","AMap.PlaceSearch"],function(){var o=new AMap.Autocomplete({input:"tipinput"}),t=new AMap.PlaceSearch({map:map.getMap()});AMap.event.addListener(o,"select",n);function n(a){t.setCity(a.poi.adcode),t.search(a.poi.name),console.log(a.poi),s(a.poi.name,[a.poi.location.lng,a.poi.location.lat])}})})});
