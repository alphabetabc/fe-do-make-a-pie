var latlong={};latlong.WGQ={latitude:42.5,longitude:1.5},latlong.JS={latitude:24,longitude:54},latlong.TJ={latitude:-20,longitude:30};var mapData=[{code:"WGQ",name:"Afghanistan",value:20},{code:"JS",name:"Albania",value:30},{code:"TJ",name:"Zimbabwe",value:50}],max=-1/0,min=1/0;mapData.forEach(function(e){e.value>max&&(max=e.value),e.value<min&&(min=e.value)}),option={title:{text:"VPN接入源地区统计",subtext:"From WuXi AppTec",left:"center",top:"top",textStyle:{}},tooltip:{trigger:"item",formatter:function(e){var a=(e.value+"").split(".");return a=a[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g,"$1,")+"."+a[1],e.seriesName+"<br/>"+e.name+" : "+a}},visualMap:{show:!1,min:0,max,inRange:{symbolSize:[6,60]}},geo:{type:"map",map:"world",roam:!0,label:{emphasis:{show:!1}},itemStyle:{normal:{},emphasis:{}}},series:[{type:"scatter",coordinateSystem:"geo",data:mapData.map(function(e){return{name:e.name,value:[latlong[e.code].longitude,latlong[e.code].latitude,e.value],label:{emphasis:{position:"right",show:!0}},itemStyle:{normal:{color:e.color}}}})}]};