var uploadedDataURL="/asset/get/s/data-1640589484383-TgctXdaF8.png",mapName="china",data=[{name:"天津",value:4075},{name:"湖北",value:500},{name:"湖南",value:3212},{name:"江西",value:5e3},{name:"甘肃",value:550},{name:"浙江",value:1233}],geoCoordMap={},mapFeatures=echarts.getMap(mapName).geoJson.features;mapFeatures.forEach(function(e){var o=e.properties.name;geoCoordMap[o]=e.properties.cp});for(var max=4e3,pointData=[],i=0;i<data.length;i++){var geoCoord=geoCoordMap[data[i].name];geoCoord&&pointData.push({name:data[i].name,value:geoCoord.concat(data[i].value)})}option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{right:"10%",top:5,bottom:"10%",left:"10%"},geo:[{map:mapName,zlevel:-1,zoom:1,silent:!0,layoutCenter:["50%","50%"],layoutSize:"100%",roam:!1,itemStyle:{normal:{borderColor:"rgba(192,245,249,.8)",borderWidth:3,shadowColor:"#6FFDFF",shadowOffsetY:0,shadowBlur:10}},label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:12,fontFamily:"Arial"}},emphasis:{show:!1,color:"#fff"}}},{show:!0,map:mapName,zoom:1,layoutCenter:["50%","50%"],layoutSize:"100%",label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:12,fontFamily:"Arial"}},emphasis:{color:"#fff"}},blur:{label:{show:!0,color:"#000"}},roam:!1,itemStyle:{normal:{label:{show:!0,color:"#fff"},color:"#fff",borderColor:"#32CBE0",borderWidth:1.5,areaColor:{type:"linear-gradient",x:0,y:1e3,x2:0,y2:0,colorStops:[{offset:.5,color:"#0D59C1"},{offset:1,color:"#53C9C7"}],global:!0}},emphasis:{label:{show:!0,color:"#fff"},borderWidth:3,borderColor:"rgba(255, 230, 175,0.8)",shadowColor:"rgba(255, 230, 175,0.5)",shadowBlur:30,textStyle:{color:"#fff",fontSize:12,backgroundColor:"transparent"},areaColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1cfbfe"},{offset:1,color:"#3348e7"}],!1)}}},{type:"map",map:mapName,zlevel:-2,zoom:1,layoutCenter:["50%","51.4%"],layoutSize:"100%",roam:!1,silent:!0,itemStyle:{normal:{borderColor:"rgba(35, 161, 184,0.5)",shadowColor:"rgba(35, 161, 184,0.8)",shadowOffsetY:5,shadowBlur:15,areaColor:"#257AB2"}}},{type:"map",map:mapName,zlevel:-3,zoom:1,layoutCenter:["50%","52.4%"],layoutSize:"100%",roam:!1,silent:!0,itemStyle:{normal:{borderColor:"rgba(7, 65, 117,0.5)",shadowColor:"rgba(7, 65, 117,0.8)",shadowOffsetY:15,shadowBlur:8,areaColor:"#0A2763"}}}],series:[{type:"map",layoutCenter:["50%","50%"],layoutSize:"100%",label:{normal:{show:!1,textStyle:{color:"#fff",fontSize:12}},emphasis:{color:"#fff"}},map:mapName,tooltip:{trigger:"item",backgroundColor:"transparent",borderColor:"transparent",extraCssText:"z-index:100;color:#fff;",confine:!0,formatter:function(e,o,l){var a="",t=e.name,r=e.value?e.value:0;return a=`<div style="box-shadow: 0 0 10px #3BD9D9; padding: 10px; position: absolute; top: 0; left:0;  border-radius: 4px; border: 1px solid #04b9ff; background: linear-gradient(to bottom,  #51bfd4 0%,rgba(35,90,178,.8) 100%);">
                             <div style='color:#F4BD59; font-size: 14px;'>${t}</div>
                             <div style="display: flex; align-items: center;padding-top: 6px;">
                              <div style="height: 6px; width: 6px; border-radius: 50%; background:#F4BD59; margin-right: 10px;"></div> <span style='color:#fff;font-size: 12px;margin-right: 20px;'>tooltip</span><span style="font-size: 12px;font-family: 'PangMenZhengDao'">${r}</span>
                             </div>
                          </div>`,a}},itemStyle:{normal:{label:{show:!0,color:"#fff"},color:"#fff",borderColor:"#32CBE0",borderWidth:1.5,areaColor:{type:"linear-gradient",x:0,y:1e3,x2:0,y2:0,colorStops:[{offset:.5,color:"#0D59C1"},{offset:1,color:"#53C9C7"}],global:!0}},emphasis:{label:{show:!0,color:"#fff"},borderWidth:3,borderColor:"rgba(255, 230, 175,0.8)",shadowColor:"rgba(255, 230, 175,0.5)",shadowBlur:30,textStyle:{color:"#fff",fontSize:12,backgroundColor:"transparent"},areaColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1cfbfe"},{offset:1,color:"#3348e7"}],!1)}},data},{type:"effectScatter",coordinateSystem:"geo",rippleEffect:{brushType:"fill"},label:{show:!0,color:"#fff",formatter:function(e){return e.name}},symbolSize:function(e){var o=e[2];return o<max?15:20},showEffectOn:"render",itemStyle:{normal:{color:"#FEBE13",shadowBlur:10,shadowColor:"#333"}},zlevel:6,data:pointData},{type:"custom",coordinateSystem:"geo",renderItem:function(e,o){return{type:"image",style:{image:uploadedDataURL,x:o.coord([pointData[e.dataIndex].value[0],pointData[e.dataIndex].value[1]])[0]-6,y:o.coord([pointData[e.dataIndex].value[0],pointData[e.dataIndex].value[1]])[1]-34}}},zlevel:10,data:pointData}]};var count=0,timer=null,chart=echarts.init(document.getElementById("chart-panel")),dataLength=option.series[0].data.length;timer&&clearInterval(timer),timer=setInterval(()=>{chart.dispatchAction({type:"downplay",seriesIndex:0}),chart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:count%dataLength}),chart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:count%dataLength}),count++},3e3),chart.on("mouseover",function(e){clearInterval(timer),chart.dispatchAction({type:"downplay",seriesIndex:0}),chart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.dataIndex}),chart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:e.dataIndex})}),chart.on("mouseout",function(e){timer&&clearInterval(timer),timer=setInterval(function(){chart.dispatchAction({type:"downplay",seriesIndex:0}),chart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:count%dataLength}),chart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:count%dataLength}),count++},3e3)});