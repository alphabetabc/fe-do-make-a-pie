var imgUrl="/asset/get/s/data-1597998044111-QKRPvTkC7.jpeg",uploadedDataURL="/asset/get/s/data-1597996859368-p2XZDxby3.json",geoCoordMap={A城:[117.760945,39.000893],B城:[117.702878,39.024217],C城:[117.671833,39.04137],D城:[117.674276,39.035316],E城:[117.709346,39.034083],F城:[117.718545,39.042154],G城:[117.719695,39.033411],H城:[117.703022,39.02276],I城:[117.763101,39.023769],J城:[117.70834,38.995173]},geoCoordData=[{name:"A城",value:"35",info:{img:imgUrl}},{name:"B城",value:"60",info:{img:imgUrl}},{name:"C城",value:"25",info:{img:imgUrl}},{name:"E城",value:"45",info:{img:imgUrl}},{name:"D城",value:"55",info:{img:imgUrl}},{name:"F城",value:"10",info:{img:imgUrl}},{name:"G城",value:"20",info:{img:imgUrl}},{name:"H城",value:"30",info:{img:imgUrl}},{name:"I城",value:"40",info:{img:imgUrl}},{name:"J城",value:"50",info:{img:imgUrl}}],convertData=function(e){for(var o=[],t=0;t<e.length;t++){var a=geoCoordMap[e[t].name];a&&o.push({name:e[t].name,value:a.concat(e[t].value),info:e[t].info||{}})}return o},option={backgroundColor:"#020933",title:{text:"天津市滨海新区",top:20,subtext:"",sublink:"",left:"center",textStyle:{color:"#ccc"}},tooltip:{trigger:"item",triggerOn:"click",showDelay:0,transitionDuration:.2,enterable:!0,formatter:function(e){if(console.log(e),e.data)return`
          <div>
            <img src="${(e.data.info||{}).img}" alt="">
            <div>
            <span>名字：</span>
            <span>${e.name}</span>
</div>
<button onclick="lookVideoGo('${e.name}')">查看</button>
					</div>
        `},backgroundColor:"#fff"},visualMap:{min:0,max:100,calculable:!0,show:!0,color:["#f44336","#fc9700","#ffde00","#ffde00","#00eaff"],textStyle:{color:"#fff"}},geo:{map:"tjbh",type:"map",aspectScale:.75,zoom:1.1,roam:!1,itemStyle:{normal:{areaColor:"#013C62",shadowColor:"#182f68",shadowOffsetX:0,shadowOffsetY:25},emphasis:{areaColor:"#2AB8FF",borderWidth:0,color:"green",label:{show:!1}}}},series:[{map:"tjbh",type:"map",label:{normal:{show:!0,textStyle:{color:"#fff"}},emphasis:{textStyle:{color:"#fff"}}},itemStyle:{normal:{borderColor:"#2ab8ff",borderWidth:1.5,areaColor:"#12235c"},emphasis:{areaColor:"#2AB8FF",borderWidth:0,color:"green"}},zoom:1.1,roam:!0},{type:"scatter",coordinateSystem:"geo",symbolSize:5,label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},hoverAnimation:!0,itemStyle:{normal:{color:"#fff"}},zlevel:1,data:convertData(geoCoordData)},{type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:[40,40],label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9},formatter(e){return e.data.value[2]}}},hoverAnimation:!0,itemStyle:{normal:{color:"#D8BC37"}},zlevel:1,data:convertData(geoCoordData)}]},lookVideoGo=function(e){console.log(e)},getData=function(){$.get(uploadedDataURL,function(e){echarts.registerMap("tjbh",e),myChart.setOption(option)})};getData(),myChart.on("georoam",function(e){var o=myChart.getOption();e.zoom!=null&&e.zoom!=null&&(o.geo[0].zoom=o.series[0].zoom),o.geo[0].center=o.series[0].center,myChart.dispatchAction({type:"restore"}),myChart.setOption(o)});
