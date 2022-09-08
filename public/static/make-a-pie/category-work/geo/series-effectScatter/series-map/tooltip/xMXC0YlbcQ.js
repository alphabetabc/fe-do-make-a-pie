var geoCoordMap={北京:[116.46,39.92],四川:[104.06,30.67],浙江:[120.19,30.26],山东:[117,36.65],福建:[119.3,26.08],上海:[121.48,31.22],重庆:[106.54,29.59],江西:[115.89,28.68],广东:[113.23,23.16],山西:[112.53,37.87],黑龙江:[126.63,45.75],陕西:[108.95,34.27],辽宁:[123.38,41.8],海南:[110.35,20.02],湖南:[113,28.21],宁夏:[106.27,38.47],河北:[114.48,38.03],云南:[102.73,25.04],湖北:[114.31,30.52],内蒙古:[111.65,40.82],天津:[117.2,39.13],贵州:[106.71,26.57],甘肃:[103.73,36.03],江苏:[118.78,32.04],吉林:[125.35,43.88],河南:[113.65,34.76],青海:[101.74,36.56],安徽:[117.27,31.86],广西:[108.33,22.84],西藏:[91.11,29.97],新疆:[87.68,43.77]},data=[{name:"北京",value:88},{name:"四川",value:88},{name:"浙江",value:87},{name:"山东",value:87},{name:"福建",value:87},{name:"上海",value:87},{name:"重庆",value:87},{name:"云南",value:87},{name:"江西",value:86},{name:"广东",value:85},{name:"山西",value:84},{name:"黑龙江",value:83},{name:"陕西",value:83},{name:"辽宁",value:82},{name:"海南",value:82},{name:"湖南",value:82},{name:"宁夏",value:82},{name:"河北",value:82},{name:"湖北",value:81},{name:"内蒙古",value:81},{name:"天津",value:80},{name:"贵州",value:80},{name:"甘肃",value:80},{name:"江苏",value:80},{name:"吉林",value:80},{name:"河南",value:79},{name:"青海",value:79},{name:"广西",value:78},{name:"安徽",value:77},{name:"新疆",value:76},{name:"西藏",value:76}],convertData=function(e){for(var a=[],o=0;o<e.length;o++){var l=geoCoordMap[e[o].name];l&&a.push({name:e[o].name,value:l.concat(e[o].value)})}return a};myChart.setOption(option={backgroundColor:"#0B2744",tooltip:{trigger:"item",backgroundColor:"rgba(0,0,0,0)",formatter:function(e){var a="";return e.componentSubType==="effectScatter"?(a=`<div style="background:#000259;height:28px;line-height:28px;padding: 0 9px;fontSize:18px">
                            ${e.name}:${e.value[2]}人
                        </div>`,a):(e.componentSubType==="map"&&e.value&&(a=`<div style="display:flex;background:none;position:relative;top:-50px;left:-20px">
                            <div style="height:44px;width:1px;background:#00FFF6">1</div>
                            <div style="background:#000259;height:28px;line-height:28px;padding: 0 9px;fontSize:18px">
                            ${e.name}:${e.value}人</div>
                        </div>`),a)}},geo:{type:"map",map:"china",zlevel:-5,layoutCenter:["50%","50%"],roam:!1,silent:!0,itemStyle:{normal:{borderColor:"#ffffff",borderWidth:3,shadowColor:"#ffffff",shadowColor:"#00F6FF",shadowBlur:15}}},series:[{type:"map",map:"china",zlevel:5,geoIndex:1,data,aspectScale:.75,showLegendSymbol:!0,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!1,itemStyle:{normal:{borderColor:"rgba(111, 253, 255, 1)",borderWidth:.5,areaColor:{type:"linear-gradient",x:0,y:600,x2:0,y2:0,colorStops:[{offset:0,color:"RGBA(37,108,190,1)"},{offset:1,color:"RGBA(15,169,195,1)"}],global:!0}},emphasis:{areaColor:{type:"linear-gradient",x:0,y:600,x2:0,y2:0,colorStops:[{offset:0,color:"RGBA(37,108,190,1)"},{offset:1,color:"RGBA(15,169,195,1)"}],global:!0}}}},{type:"effectScatter",coordinateSystem:"geo",geoIndex:0,symbol:"circle",symbolSize:6,showEffectOn:"render",rippleEffect:{brushType:"stroke",scale:10},hoverAnimation:!0,label:{show:!1,formatter:e=>e.data[2],position:"right",color:"#fff",fontSize:14,distance:10},itemStyle:{color:"rgba(0, 255, 246, 1)"},zlevel:12,data:convertData(data)},{type:"effectScatter",coordinateSystem:"geo",geoIndex:0,silent:!0,symbol:"circle",symbolSize:4,showEffectOn:"render",rippleEffect:{brushType:"stroke",scale:6},hoverAnimation:!0,label:{formatter:"",position:"right",color:"#fff",fontSize:14,distance:10,show:!0},itemStyle:{color:"rgba(255, 255, 255, 0.8)"},zlevel:6,data:convertData(data)}]});
