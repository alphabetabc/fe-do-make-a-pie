var uploadedDataURL="/asset/get/s/data-1595473893338-SpJOkOU_l.json";myChart.showLoading(),$.getJSON(uploadedDataURL,function(r){echarts.registerMap("guizhou",r),myChart.hideLoading();var l={黔南信创项目2020001:[107.369999,26.758219],黔南信创项目2020002:[107.517196,25.858119],黔南信创项目2020003:[106.917156,25.658219]},n=[{name:"黔南信创项目2020001",value:89},{name:"黔南信创项目2020002",value:70},{name:"黔南信创项目2020003",value:60}],s=function(e){for(var t=[],o=0;o<e.length;o++){var a=l[e[o].name];a&&t.push({name:e[o].name,value:a.concat(e[o].value)})}return t};option={backgroundColor:"#fff",title:{top:20,text:"项目概览",subtext:"",x:"center",textStyle:{color:"rgb(29, 134, 238)"}},tooltip:{trigger:"item",formatter:function(e){return typeof e.value[2]>"u"?e.name:e.name+" : "+e.value[2]+"%"}},visualMap:{show:!1,max:100,seriesIndex:[1],inRange:{color:["#00467F","#A5CC82"]}},geo:{show:!0,map:"guizhou",zoom:1,label:{normal:{show:!0},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{borderColor:"#3fdaff",borderWidth:1,areaColor:{type:"radial",x:.5,y:.5,r:.8,colorStops:[{offset:0,color:"rgba(147, 235, 248, 0)"},{offset:1,color:"rgba(147, 235, 248, .4)"}],globalCoord:!1},shadowColor:"rgba(128, 217, 248, 1)",shadowOffsetX:-2,shadowOffsetY:2,shadowBlur:10},emphasis:{areaColor:"#E6F1FF"}}},series:[{name:"项目闪点",type:"effectScatter",coordinateSystem:"geo",data:s(n),symbolSize:15,showEffectOn:"render",rippleEffect:{period:5,scale:5,brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",color:"black",show:!0}},itemStyle:{normal:{color:"rgb(0,210,122)",shadowBlur:10,shadowColor:"#05C3F9"}},zlevel:1}]},myChart.setOption(option)}),myChart.on("click",function(r){console.log(r),r.componentType=="series"&&(console.log("闪点点击事件"),window.open(encodeURI("https://www.baidu.com/")))});
