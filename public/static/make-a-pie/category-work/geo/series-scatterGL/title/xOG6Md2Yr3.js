var dataCount=0,CHUNK_COUNT=230;function fetchData(e){if(!(e>=CHUNK_COUNT)){var a=`data/asset/data/gps/gps_${e}.bin`,t=new XMLHttpRequest;t.open("GET",a,!0),t.responseType="arraybuffer",t.onload=function(s){for(var o=new Int32Array(this.response),n=new Float32Array(o.length),l=o.length/2,r=0;r<o.length;r+=2)n[r]=o[r+1]/1e7,n[r+1]=o[r]/1e7;myChart.appendData({seriesIndex:0,data:n}),fetchData(e+1)},t.send()}}option={backgroundColor:"#000",title:{show:!1},geo:{map:"china",roam:!1,label:{emphasis:{show:!1}},silent:!0,itemStyle:{normal:{areaColor:"#1F40BD",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},series:[{name:"弱",type:"scatterGL",progressive:1e6,coordinateSystem:"geo",symbolSize:2,zoomScale:.002,blendMode:"lighter",large:!0,itemStyle:{color:"rgb(20, 15, 2)"},postEffect:{enable:!0},silent:!0,dimensions:["lng","lat"],data:new Float32Array||new Float32Array([121.4737,31.23039,121.4737,31.23039,121.4737,31.23039,121.4737,31.23039,121.4737,31.23039,121.4737,31.23039,121.4737,31.23039,121.4737,31.23039,121.4737,31.23039,121.4737,31.23039,121.4737,31.23039])}]};const startLng=108.1539,endLng=121.5405,startLat=24.1306,endLat=39.9042;function mockData(){const e=[];for(let a=0;a<500;a+=2){const t=(startLat+Math.random()*(endLat-startLat)).toFixed(3),s=(startLng+Math.random()*(endLng-startLng)).toFixed(3);e[a]=Number(s),e[a+1]=Number(t)}return e}setInterval(()=>{const e=mockData();myChart.appendData({seriesIndex:0,data:e}),console.log("interval")},2e3),console.log(echarts);
