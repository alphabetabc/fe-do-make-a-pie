var data1=[{name:"北京",value:[225236,2,22342]}],geoCoordMap={北京:[116.39,39.93]},convertData=function(e){for(var r=[],o=0;o<e.length;o++){var t=geoCoordMap[e[o].name];t&&r.push({name:e[o].name,value:t.concat(e[o].value)})}return r},pointSize=10,option={backgroundColor:"#030511",tooltip:{trigger:"item",show:!0,borderWidth:2,borderColor:"#19A3C6",textStyle:{fontSize:18},formatter:function(e){var r="<p>北京楼金融街楼宇</p>";return r+="<div>楼宇总面积："+e.value[2]+" ㎡</div>",r+="<div>楼宇数量："+e.value[3]+" 栋</div>",r+="<div>总能耗："+e.value[4]+" 元</div>",r}},geo:{map:"china",label:{emphasis:{show:!1}},zoom:1.2,itemStyle:{normal:{areaColor:"#030511",borderWidth:1,borderColor:"#40959C"},emphasis:{areaColor:"#2C8087"}}},series:[{name:"北京楼金融街楼宇",type:"effectScatter",coordinateSystem:"geo",data:convertData(data1),symbolSize:pointSize,showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"top",show:!0}},itemStyle:{normal:{color:"#19A3C6",shadowBlur:10,shadowColor:"black"}},zlevel:1}]};
