function loadJSON(){var F,O,k,T,K,Q,b;a=myChart,a.showLoading(),F=$(".panel").find("option:selected").last(),F.attr("selected",!0),O=F.val().split("|"),k=O[0],T=O[1],K=F.text(),Q={subdistrict:1,extensions:"all"},b=new AMap.DistrictSearch(Q),b.setSubdistrict(1),b.setLevel(k),b.search(K,function(Y,J){function R(){this.type="FeatureCollection",this.features=[]}function A(){this.type="Feature",this.id="",this.properties={name:"",cp:[],childNum:1},this.geometry={type:"Polygon",coordinates:[]}}function D(e,c){var n,t,i,r=[],o=[],m=[],u=e.boundaries.length;if(u===1){for(n=e.boundaries[0],t=0;t<n.length;t++)r[0]=n[t].lng,r[1]=n[t].lat,o.push(r),r=[];c.push(o)}else for(i=0;u>i;i++){for(n=e.boundaries[i],t=0;t<n.length;t++)r[0]=n[t].lng,r[1]=n[t].lat,o.push(r),r=[];m.push(o),o=[],c.push(m),m=[]}}function q(e){e.UTF8Encoding=!0;var c=e.features;return c?(c.forEach(function(n){var t=n.geometry.encodeOffsets=[],i=n.geometry.coordinates;n.geometry.type==="Polygon"?i.forEach(function(r,o){i[o]=W(r,t[o]=[])}):n.geometry.type==="MultiPolygon"&&i.forEach(function(r,o){t[o]=[],r.forEach(function(m,u){i[o][u]=W(m,t[o][u]=[])})})}),e):void 0}function W(e,c){var n,t,i="",r=P(e[0][0]),o=P(e[0][1]);for(c[0]=r,c[1]=o,n=0;n<e.length;n++)t=e[n],i+=j(t[0],r),i+=j(t[1],o),r=P(t[0]),o=P(t[1]);return i}function P(e){return Math.ceil(1024*e)}function j(e,c){return e=P(e),e-=c,64+(e<<1^e>>15)==8232&&e--,e=e<<1^e>>15,String.fromCharCode(e+64)}function B(e,c,n){var t,i,r,o=new R,m=o.features,u=e[0],E=u.districtList,g=u.citycode,s=0;if(g.length)for(t=0,i=E.length;i>t;t++)s++,b.search(E[t].name,function(l,h){function L(d,f){var p,y,x,C,v,S;for(p=new A,y=[],x=[],C=0,v=d.length;v>C;C++)if(S=d[C],S.citycode===f)return p.id=S.adcode,p.properties.name=S.name,p.properties.childNum=S.boundaries.length,p.properties.childNum>1&&(p.geometry.type="MultiPolygon"),y[0]=S.center.lng,y[1]=S.center.lat,p.properties.cp=y,y=[],D(S,x),p.geometry.coordinates=x,x=[],p}s--;var w=h.districtList,M=L(w,T);M&&m.push(M),s===0&&(c&&(o=q(o)),n(o),b.setSubdistrict(1))});else for(t=0,i=E.length;i>t;t++)r=E[t].name,s++,b.search(r,function(l,h){function L(d){var f,p,y,x,C,v;for(f=new A,p=[],y=[],x=0,C=d.length;C>x;x++)return v=d[x],f.id=v.adcode,f.properties.name=v.name,f.properties.childNum=v.boundaries.length,f.properties.childNum>1&&(f.geometry.type="MultiPolygon"),p[0]=v.center.lng,p[1]=v.center.lat,f.properties.cp=p,p=[],D(v,y),f.geometry.coordinates=y,y=[],f}s--;var w=h.districtList,M=L(w);m.push(M),s===0&&(o=q(o),n(o),b.setSubdistrict(1))})}function U(e,c,n){function t(g,s){var l,h,L,w,M,d;for(l=new A,h=[],L=[],w=0,M=g.length;M>w;w++)if(d=g[w],d.citycode==s)return l.id=d.adcode,l.properties.name=d.name,l.properties.childNum=d.boundaries.length,l.properties.childNum>1&&(l.geometry.type="MultiPolygon"),h[0]=d.center.lng,h[1]=d.center.lat,l.properties.cp=h,h=[],D(d,L),l.geometry.coordinates=L,l}function i(g){var s=new A,l=[],h=[];return s.id=g.adcode,s.properties.name=g.name,s.properties.childNum=g.boundaries.length,s.properties.childNum>1&&(s.geometry.type="MultiPolygon"),l[0]=g.center.lng,l[1]=g.center.lat,s.properties.cp=l,l=[],D(g,h),s.geometry.coordinates=h,s}var r,o=new R,m=o.features,u=e[0],E=(u.citycode,u.level);r=E==="district"?t(e,T):i(u),m.push(r),c&&(o=q(o)),n(o),b.setSubdistrict(1)}function z(e){echarts.registerMap("mapArea",e),$("#"+a.getDom().id).contextmenu(function(){return!1}),a.clear(),a.setOption({color:["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],backgroundColor:"#333",textStyle:{color:"#eee",fontFamily:"Microsoft YaHei",fontSize:12,fontStyle:"normal",fontWeight:"normal"},title:{text:$(".panel select:eq(-2) option:selected").text(),subtext:"注：点击下钻，右击跳出（目前只支持到县市级）",textStyle:{color:"#fff"}},geo:{map:"mapArea",roam:!0,selectedMode:"single",itemStyle:{normal:{borderColor:"rgba(100,149,237,1)",borderWidth:1.5,areaColor:"#1b1b1b"}}}}),a.on("geoselectchanged",function(c){}),a.getZr().on("mousedown",function(c){switch(c.event.which){case 3:$(".panel select").length>2&&($(".panel select:last-child").remove(),$(".panel select:last-child").remove(),loadJSON())}}),a.hideLoading()}switch(k){case"district":case"biz_area":U(J.districtList,!0,z);break;default:B(J.districtList,!0,z);var N=$("<select></select>");switch(N.change(function(){$(this).nextAll().remove(),$(this).val()||$(this).remove(),loadJSON()}),N.appendTo($(".panel")),k){case"country":N.append($('<option value="">--  所有省(行政区,直辖市)  --</option>'));break;case"province":N.append($('<option value="">--  所有城市  --</option>'));break;case"city":N.append($('<option value="">--  所有区县  --</option>'))}J.districtList[0].districtList.forEach(function(e){N.append($('<option value="'+e.level+(e.citycode?"|"+e.citycode:"")+'">'+e.name+"</option>"))})}})}$("body").append($('<div class="panel" style="position: absolute;background-color: #fff;border: solid 1px silver;box-shadow: 3px 4px 3px 0px silver;right: 10px;top: 10px;padding: 5px 10px;font-size: 12px;border-radius: 4px">请选择区域：<select><option selected="selected" value="country">中国</option></select></div>')),loadJSON();
