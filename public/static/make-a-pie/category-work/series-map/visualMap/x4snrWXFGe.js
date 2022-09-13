$(`<div id="container"></div>
    <div class="input-card">
            <h4>下属行政区查询</h4>
            <div class="input-item">
                <div class="input-item-prepend"><span class="input-item-text">省市区</span></div>
                <select id='province' style="width:100px"></select>
            </div>
            <div class="input-item">
                <div class="input-item-prepend"><span class="input-item-text">地级市</span></div>
                <select id='city' style="width:100px"></select>
            </div>
            <div class="input-item">
                <div class="input-item-prepend"><span class="input-item-text">区县</span></div>
                <select id='district' style="width:100px"></select>
            </div>
             <div class="input-item-" style='display: none;'>
        <div class="input-item-prepend"><span class="input-item-text" >街道</span></div>
        <select id='street' style="width:100px" onchange='setCenter(this)'></select>
    </div>
            <p>请选择文件命名方式</p>
            <div class="radio">
                <input type="radio" value="name" name="nameType">地域名称
                <input type="radio" value="code" checked name="nameType">地域行政编码
            </div>
            <div class="input-item download" @click="download">下载geoJson数据</div>
        </div>`).appendTo($("#chart-panel")),$("*").css({"box-sizing":"border-box"}),$("#container").css({position:"absolute",width:"100%",left:"0",top:"0",height:"100%"}),$(".input-card").css({position:"fixed",top:"10px",left:"10px",height:"300px",display:"flex","flex-direction":"column","min-width":"0","word-wrap":"break-word","background-color":"#fff","background-clip":"border-box","border-radius":".25rem",width:"22rem","border-width":"0","border-radius":"0.4rem","box-shadow":"0 2px 6px 0 rgba(114, 124, 245, .5)",bottom:"1rem",right:"1rem","-ms-flex":"1 1 auto",flex:"1 1 auto",padding:"0.75rem 1.25rem","z-index":"10"}),$(".input-item").css({position:"relative",display:"-ms-flexbox",display:"flex","-ms-flex-wrap":"wrap","flex-wrap":"wrap","-ms-flex-align":"center","align-items":"center",width:"100%",height:"3rem"}),$(".input-item-text").css({width:"6rem","text-align":"justify",padding:"0.4rem 0.7rem",display:"inline-block","text-justify":"distribute-all-lines","text-align-last":"justify","-moz-text-align-last":"justify","-webkit-text-align-last":"justify","-ms-flex-align":"center","align-items":"center","margin-bottom":"0","font-size":"1rem"," font-weight":"400","line-height":"1.5",color:"#495057","text-align":"center","white-space":"nowrap","background-color":"#e9ecef",border:"1px solid #ced4da","border-radius":".25rem","border-bottom-right-radius":"0","border-top-right-radius":"0",height:"calc(2.2rem + 2px)"});var url="",background=`#fff url(${url}) no-repeat right .75rem center`;$("select").css({display:"inline-block",width:"100%",padding:".375rem 1.75rem .375rem .75rem","line-height":"1.5",color:"#495057","vertical-align":"middle","background-size":"8px 10px",border:"1px solid #ced4da","border-radius":".25rem","-webkit-appearance":"none","-moz-appearance":"none",appearance:"none",position:"relative","-ms-flex":"1 1 auto",flex:"1 1 auto",width:"1%","border-top-left-radius":"0","border-bottom-left-radius":"0",height:"calc(2.2rem + 2px)","margin-bottom":"0"}),$(".radio").css({margin:"3px 0"}),$($("#chart-panel").children("div").get(0)).css({position:"absolute","z-index":"8"}),$(".download").css({display:"-webkit-box",display:"-ms-flexbox",display:"flex","-webkit-box-pack":"center","-ms-flex-pack":"center","justify-content":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center",border:"1px solid #ced4da","border-radius":".25rem","background-color":"#e9ecef",color:"#495057","text-align":"center",cursor:"pointer"});var map,district,polygons=[],mapData=[],cityCode=1e5,cityName="中国",areaCode=1e4,geoJsonData="",citySelect=document.getElementById("city"),districtSelect=document.getElementById("district"),areaSelect=document.getElementById("street"),areaData={};$("select").change(function(){search(this)}),map=new AMap.Map("container",{resizeEnable:!0,center:[116.30946,39.937629],zoom:3});var opts={subdistrict:1,showbiz:!1};district=new AMap.DistrictSearch(opts),district.search("中国",function(e,i){e=="complete"&&getData(i.districtList[0],"",1e5)});function echartsMapClick(e){!e.data||e.data.level=="street"||(cityName=e.data.name,cityCode=e.data.cityCode,district.setLevel(e.data.level),district.setExtensions("all"),district.search(e.data.cityCode,(i,a)=>{i==="complete"&&getData(a.districtList[0],e.data.level,e.data.cityCode)}))}function loadMapData(e){AMapUI.loadUI(["geo/DistrictExplorer"],i=>{var a=window.districtExplorer=new i({eventSupport:!0,map});a.loadAreaNode(e,(s,r)=>{if(s){console.error(s);return}let d={};d.features=r.getSubFeatures(),loadMap(cityName,d),geoJsonData=d})})}function downloadJson(){var e=$("input[name='nameType']:checked").val(),i=new Blob([JSON.stringify(geoJsonData)],{type:"text/plain;charset=utf-8"});let a=cityName;e==="code"&&(a=cityCode),saveAs(i,`${a}.geoJson`)}function loadMap(e,i){if(i){echarts.registerMap(e,i);var a={backgroundColor:"rgba(0,0,0,.6)",visualMap:{type:"piecewise",pieces:[{max:30,label:"安全",color:"#2c9a42"},{min:30,max:60,label:"警告",color:"#d08a00"},{min:60,label:"危险",color:"#c23c33"}],color:"#fff",textStyle:{color:"#fff"},visibility:"off"},series:[{name:"数据名称",type:"map",roam:!1,mapType:e,selectedMode:"single",showLegendSymbol:!1,visibility:"off",itemStyle:{normal:{color:"#ccc",areaColor:"#fff",borderColor:"#fff",borderWidth:.5,label:{show:!0,textStyle:{color:"rgb(249, 249, 249)"}}},emphasis:{areaColor:!1,borderColor:"#fff",areaStyle:{color:"#fff"},label:{show:!0,textStyle:{color:"rgb(249, 249, 249)"}}}},data:mapData}]};myChart.setOption(a)}}myChart.on("click",echartsMapClick),$(".download").on("click",downloadJson);function getData(e,i,a){var s=e.boundaries;if(s){for(var r=0,d=s.length;r<d;r++){var v=new AMap.Polygon({map,strokeWeight:1,strokeColor:"#0091ea",fillColor:"#80d8ff",fillOpacity:.2,path:s[r]});polygons.push(v)}map.setFitView()}i==="province"?(citySelect.innerHTML="",districtSelect.innerHTML=""):i==="city"&&(districtSelect.innerHTML="");var c=e.districtList;if(c){var f=new Option("--请选择--"),u=c[0].level;if(u==="street"){let h=geoJsonData.features,n={};for(let w in h)h[w].properties.name==cityName&&(n.features=[].concat(h[w]));mapData=[],mapData.push({name:cityName,value:Math.random()*100,level:u}),loadMap(cityName,n),geoJsonData=n;return}var g=document.querySelector("#"+u);g.add(f),mapData=[];for(var r=0,d=c.length;r<d;r++){var y=c[r].name,C=c[r].adcode;mapData.push({name:y,value:Math.random()*100,cityCode:C,level:u});var x=c[r].level;f=new Option(y),f.setAttribute("value",x),f.center=c[r].center,f.adcode=c[r].adcode,g.add(f)}loadMapData(a),areaData[u]=g}}function search(e){console.log("111");for(var i=0,a=polygons.length;i<a;i++)polygons[i].setMap(null);var s=e[e.options.selectedIndex],r=s.text,d=s.adcode;cityName=r,cityCode=d,district.setLevel(s.value),district.setExtensions("all"),district.search(d,function(v,c){v==="complete"&&getData(c.districtList[0],e.id,d)})}function setCenter(e){map.setCenter(e[e.options.selectedIndex].center)}var saveAs=saveAs||function(e){"use strict";if(!(typeof e>"u"||typeof navigator<"u"&&/MSIE [1-9]\./.test(navigator.userAgent))){var i=e.document,a=function(){return e.URL||e.webkitURL||e},s=i.createElementNS("http://www.w3.org/1999/xhtml","a"),r="download"in s,d=function(t){var o=new MouseEvent("click");t.dispatchEvent(o)},v=/constructor/i.test(e.HTMLElement)||e.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent),f=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},u="application/octet-stream",g=1e3*40,y=function(t){var o=function(){typeof t=="string"?a().revokeObjectURL(t):t.remove()};setTimeout(o,g)},C=function(t,o,m){o=[].concat(o);for(var l=o.length;l--;){var b=t["on"+o[l]];if(typeof b=="function")try{b.call(t,m||t)}catch(k){f(k)}}},x=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},h=function(t,o,m){m||(t=x(t));var l=this,b=t.type,k=b===u,p,M=function(){C(l,"writestart progress write writeend".split(" "))},L=function(){if((c||k&&v)&&e.FileReader){var S=new FileReader;S.onloadend=function(){var E=c?S.result:S.result.replace(/^data:[^;]*;/,"data:attachment/file;"),O=e.open(E,"_blank");O||(e.location.href=E),E=void 0,l.readyState=l.DONE,M()},S.readAsDataURL(t),l.readyState=l.INIT;return}if(p||(p=a().createObjectURL(t)),k)e.location.href=p;else{var I=e.open(p,"_blank");I||(e.location.href=p)}l.readyState=l.DONE,M(),y(p)};if(l.readyState=l.INIT,r){p=a().createObjectURL(t),setTimeout(function(){s.href=p,s.download=o,d(s),M(),y(p),l.readyState=l.DONE});return}L()},n=h.prototype,w=function(t,o,m){return new h(t,o||t.name||"download",m)};return typeof navigator<"u"&&navigator.msSaveOrOpenBlob?function(t,o,m){return o=o||t.name||"download",m||(t=x(t)),navigator.msSaveOrOpenBlob(t,o)}:(n.abort=function(){},n.readyState=n.INIT=0,n.WRITING=1,n.DONE=2,n.error=n.onwritestart=n.onprogress=n.onwrite=n.onabort=n.onerror=n.onwriteend=null,w)}}(typeof self<"u"&&self||typeof window<"u"&&window||this.content);typeof module<"u"&&module.exports?module.exports.saveAs=saveAs:typeof define<"u"&&define!==null&&define.amd!==null&&define("FileSaver.js",function(){return saveAs});