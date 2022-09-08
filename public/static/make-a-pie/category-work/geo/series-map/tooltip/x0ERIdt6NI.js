var uploadedDataURL="/asset/get/s/data-1528971808162-BkOXf61WX.json";$.getJSON(uploadedDataURL,function(t){echarts.registerMap("china",t);let o=["南海诸岛","北京","天津","上海","重庆","河北","河南","云南","辽宁","黑龙江","湖南","安徽","山东","新疆","江苏","浙江","江西","湖北","广西","甘肃","山西","内蒙古","陕西","吉林","福建","贵州","广东","青海","西藏","四川","宁夏","海南","台湾","香港","澳门"],s=[0,524,13,140,75,13,83,11,19,15,69,260,39,4,31,104,36,1052,33,347,9,157,22,4,18,5,2398,41,0,484,404,22,3,5,225],r=[],l="万元",a={黑龙江:{research:1e3,order:2400,repair:200}};for(let e=0;e<o.length;e++)r.push({name:o[e],value:s[e]});let i={tooltip:{show:!0,enterable:!0,backgroundColor:"white",padding:10,extraCssText:"box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);border-radius: 24px;opacity: 0.8;border: 2px solid white;width: 274px;height: 193px;",textStyle:{color:"red"},formatter:function(e){return`
              <ul class="map-tooltip">
                <li class="title">
                  <p class="circle"></p>
                  <p class="province">省份</p>
                  <p class="province-name">${e.name}</p>
                </li>
                <li>
                  <p class="name">科研费:</p>
                  <p class="color" style="color:#048AFC">${a[e.name]&&a[e.name].research||0}${l}</p>
                </li>
                <li>
                  <p class="name">订购费:</p>
                  <p class="color" style="color:#F98519">${a[e.name]&&a[e.name].order||0}${l}</p>
                </li>
                <li>
                  <p class="name">维修费:</p>
                  <p class="color" style="color:#04BFFC">${a[e.name]&&a[e.name].repair||0}${l}</p>
                </li>
              </ul>
            `}},geo:[{map:"china",show:!0,roam:!1,regions:[{name:"南海诸岛",value:0,itemStyle:{normal:{opacity:0,label:{show:!1}}}}],layoutSize:"100%",center:[104.2,36.1],itemStyle:{normal:{borderColor:"#CADBF4",borderWidth:8,areaColor:"#CADBF4"},emphasis:{areaColor:"#CADBF4"}},label:{emphasis:{show:!1}}},{map:"china",show:!0,roam:!1,regions:[{name:"南海诸岛",value:0,itemStyle:{normal:{opacity:0,label:{show:!1}}}}],label:{emphasis:{show:!1}},layoutSize:"100%",aspectScale:.76,itemStyle:{normal:{borderColor:"white",borderWidth:4,areaColor:"#CADBF4"},emphasis:{areaColor:"#CADBF4"}}}],series:[{type:"map",map:"china",aspectScale:.75,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{borderColor:"#F6FBFE",borderWidth:.8,areaColor:{type:"linear-gradient",x:0,y:900,x2:300,y2:0,colorStops:[{offset:.5,color:"#5FACF2"},{offset:1,color:"#B2F5F0"}],global:!0}},emphasis:{show:!1}},data:r}]};myChart.setOption(i)});
