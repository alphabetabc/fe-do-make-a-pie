var uploadedDataURL="/asset/get/s/data-1621233061320-EE4u68dTg.json";$.get(uploadedDataURL,f=>{var a=JSON.parse(f);echarts.registerMap("hedi",a);var s={};if(a&&a.features&&a.features.length>0)for(var t=0;t<a.features.length;t++){var l=a.features[t],o=l.properties||{};o&&o.name&&(s[o.name]=o.center||[])}var r={title:{text:"河地市"},visualMap:{show:!1,max:100,seriesIndex:[3],inRange:{color:["#A5DCF4","#006edd"]}},geo:[{map:"hedi",roam:!1,zoom:1.1,scaleLimit:{min:0,max:3},itemStyle:{normal:{areaColor:"#013C62",shadowColor:"#013C62",shadowBlur:20,shadowOffsetX:-5,shadowOffsetY:15}},tooltip:{show:!1}}],series:[{type:"effectScatter",coordinateSystem:"geo",z:5,data:[{city:"吉安",value:[114.986373,27.111699]}],symbolSize:14,label:{normal:{show:!0,formatter(e){return`{fline|地点：${e.data.city}}
{tline|${e.data.info||"发生xx集件"}}`},position:"top",backgroundColor:"rgba(254,174,33,.8)",padding:[0,0],borderRadius:3,lineHeight:32,color:"#f7fafb",rich:{fline:{padding:[0,10,10,10],color:"#ffffff"},tline:{padding:[10,10,0,10],color:"#ffffff"}}},emphasis:{show:!0}},itemStyle:{color:"#feae21"}},{name:"河地市人口密度",type:"map",zoom:"1.1",mapType:"hedi",legend:{show:!0},label:{show:!0,emphasis:{color:"#fff"}},itemStyle:{normal:{areaColor:"#fff",color:"#fff"},emphasis:{areaColor:"rgb(0, 102, 255)"}},data:[],tooltip:{show:!1}}]};myChart.setOption(r),myChart.on("click",function(e){if(console.log(e),e.componentType==="series"&&e.seriesIndex===1){var i=e.name,n=s[i];r.series[0].data=[{city:i,value:n}],myChart.setOption(r,!0),myChart.dispatchAction({type:"highlight",seriesIndex:e.seriesIndex,dataIndex:e.dataIndex})}})});
