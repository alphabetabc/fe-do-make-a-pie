var uploadedDataURL="/asset/get/s/data-1623054469980-RoWoKFH3M.geojson";window.dataList=[{name:"贵阳市",value:"100"},{name:"六盘水市",value:"50"},{name:"遵义市",value:"0"},{name:"安顺市",value:"0"},{name:"毕节市",value:"0"},{name:"铜仁市",value:"0"},{name:"黔西南州",value:"0"},{name:"黔东南州",value:"0"},{name:"黔南州",value:"0"}],option={backgroundColor:"#041c4e",title:{top:10,text:"贵州地图",left:"center",textStyle:{color:"#fff"}},tooltip:{show:!0,formatter:function(e){return e.name+"："+e.data.value+"人"},textStyle:{fontSize:25}},visualMap:{type:"continuous",orient:"horizontal",itemWidth:10,itemHeight:80,text:["高","低"],showLabel:!0,seriesIndex:[0],min:0,max:100,inRange:{color:["rgba(26,82,231, 1)","rgba(255,163,54, 1)","rgba(254,100,70, 1)"]},textStyle:{color:"#7B93A7"},bottom:30,left:"left"},geo:{map:"贵州",aspectScale:1.23,roam:!1,right:"30",scaleLimit:{min:1,max:2},zoom:1.23,label:{normal:{show:!0,fontSize:"25",color:"#fff"},emphasis:{color:"white"}},itemStyle:{normal:{borderColor:"rgba(147, 235, 248, 1)",borderWidth:1,shadowOffsetX:-12,shadowOffsetY:12,shadowBlur:1},emphasis:{areaColor:"#0b38b0"}}},series:[{name:"确诊病例",type:"map",geoIndex:0,data:window.dataList}]};