var lishui="/asset/get/s/data-1544543852082-h3S1-o9zM.json",lishui="/asset/get/s/data-1636440084599-yMQrV2I-i.json";$.get(lishui,function(n){echarts.registerMap("ls",n);var s={桐乡高级中学:[120.551085,30.629065],河山中学:[120.460179,30.497779]},t=[{name:"桐乡高级中学",value:250},{name:"河山中学",value:330}],r=function(e){for(var a=[],o=0;o<e.length;o++){var l=s[e[o].name];l&&a.push({name:e[o].name,value:l.concat(e[o].value)})}return a};myChart.setOption(option={title:{text:"桐乡市地图",left:"center",top:"2%",textStyle:{color:"#fff"}},backgroundColor:"#070d18",geo:{map:"ls",zoom:1,aspectScale:1},series:[{type:"map",map:"ls",geoIndex:1,aspectScale:1,showLegendSymbol:!0,zoom:1,label:{normal:{formatter:"{b}",show:!0,textStyle:{color:"#fff"}},emphasis:{show:!0,textStyle:{color:"#05C3F9"}}},roam:!1,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077",borderWidth:1},emphasis:{areaColor:"#070d18",shadowColor:"#1773c3",shadowBlur:20}}},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(e){return e[2]/4},label:{normal:{show:!0,formatter:function(e){return e.value[2]},textStyle:{color:"#fff",fontSize:12}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:r(t)},{name:"",type:"effectScatter",coordinateSystem:"geo",data:r(t),symbolSize:function(e){return e[2]/20},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{show:!1},emphasis:{formatter:function(e){return e.name+":"+e.value[2]},position:"right",show:!0}},itemStyle:{normal:{color:"#05C3F9",shadowBlur:10,shadowColor:"#05C3F9"}},zlevel:1}]})}).error(function(){alert("地图的geoJSON获取失败，请运行服务器")});