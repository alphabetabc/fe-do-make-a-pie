var hzmap="/asset/get/s/data-1600654938067-ihlSWG_62.json",yhmap="/asset/get/s/data-1600653263643-JkbhAV0A0.json",xsmap="/asset/get/s/data-1600653259674-GTpBwKU4O.json",xhmap="/asset/get/s/data-1600653255389-pxTPxjzUc.json",xcmap="/asset/get/s/data-1600653251697-QvFmjFcKd.json",tlmap="/asset/get/s/data-1600653248319-E3YPA5Tlm.json",scmap="/asset/get/s/data-1600653244513-l3K2yAhTB.json",lamap="/asset/get/s/data-1600653223414-5FrpixnXN.json",jgmap="/asset/get/s/data-1600653218036-gjxivnBmR.json",jdmap="/asset/get/s/data-1600653212836-Fys3xysTL.json",gsmap="/asset/get/s/data-1600653207131-SD-0mAm2J.json",fymap="/asset/get/s/data-1600653202961-133VfVqOm.json",camap="/asset/get/s/data-1600653199148-QX4sdweja.json",bjmap="/asset/get/s/data-1600653191497-Jb5ggdJc0.json",mapname=hzmap,mapJson=[{name:"滨江区",json:bjmap},{name:"淳安县",json:camap},{name:"富阳区",json:fymap},{name:"拱墅区",json:gsmap},{name:"建德市",json:jdmap},{name:"江干区",json:jgmap},{name:"临安区",json:lamap},{name:"上城区",json:scmap},{name:"桐庐县",json:tlmap},{name:"下城区",json:xcmap},{name:"西湖区",json:xhmap},{name:"萧山区",json:xsmap},{name:"余杭区",json:yhmap}],mapDate=[{name:"江干区",value:[120.185,30.274,29999]},{name:"拱墅区",value:[120.182,30.351,29999]},{name:"西湖区",value:[120.091,30.27,29999]},{name:"滨江区",value:[120.21,30.209,29999]},{name:"萧山区",value:[120.254,30.159,29999]},{name:"余杭区",value:[120.295,30.427,29999]},{name:"富阳区",value:[119.956,30.05,29999]},{name:"桐庐县",value:[119.675,29.784,29999]},{name:"淳安县",value:[119.058,29.613,29999]},{name:"建德市",value:[119.28,29.464,29999]},{name:"临安区",value:[119.712,30.227,29999]},{name:"钱塘新区",value:[120.485,30.284,29999]}];myChart.showLoading();let index=-1;var timer=setInterval(function(){myChart.dispatchAction({type:"hideTip",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:index+1}),myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:index+1}),index++,index>13&&(index=-1)},2e3);myChart.on("mousemove",function(a){clearInterval(timer),myChart.dispatchAction({type:"downplay",seriesIndex:0}),myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:a.dataIndex}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:a.dataIndex})}),myChart.on("mouseout",function(a){clearInterval(timer),myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:a.dataIndex}),timer=setInterval(function(){myChart.dispatchAction({type:"hideTip",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"showTip",seriesIndex:0,dataIndex:index+1}),myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:index}),myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:index+1}),index++,index>13&&(index=-1)},2e3)}),myChart.on("click",function(a){console.log(a);var e=mapJson.filter(t=>t.name==a.name);console.log(e),mapname=e[0].json,console.log(mapname,"选择地图"),mapDate=[],$('<div class="back">返回杭州市</div>').appendTo($("#chart-panel")),$(".back").css({position:"absolute",left:"17px",top:"25px",color:"rgb(222,222,222)","font-size":"15px",cursor:"pointer","z-index":"100"}),$(".back").click(function(){mapname=hzmap,mapDate=[{name:"江干区",value:[120.185,30.274,29999]},{name:"拱墅区",value:[120.182,30.351,29999]},{name:"西湖区",value:[120.091,30.27,29999]},{name:"滨江区",value:[120.21,30.209,29999]},{name:"萧山区",value:[120.254,30.159,29999]},{name:"余杭区",value:[120.295,30.427,29999]},{name:"富阳区",value:[119.956,30.05,29999]},{name:"桐庐县",value:[119.675,29.784,29999]},{name:"淳安县",value:[119.058,29.613,29999]},{name:"建德市",value:[119.28,29.464,29999]},{name:"临安区",value:[119.712,30.227,29999]},{name:"钱塘新区",value:[120.485,30.284,29999]}],$(".back").css({position:"absolute",left:"17px",top:"-25px",color:"rgb(222,222,222)","font-size":"15px",cursor:"pointer","z-index":"100"}),mapInit()}),mapInit()}),setTimeout(function(){mapInit()},1e3);var mapInit=()=>{console.log("我来了",mapname),$.getJSON(mapname,function(a){echarts.registerMap("hanzhou",a),myChart.hideLoading(),option={backgroundColor:"#020933",title:{top:20,text:"“困难人数” - 杭州市",subtext:"",x:"center",textStyle:{color:"#ccc"}},visualMap:{min:0,max:1e6,right:100,seriesIndex:1,type:"piecewise",bottom:100,textStyle:{color:"#FFFF"},splitList:[{gt:5e4,color:"#F5222D",label:"困难人数大于5万人"},{gte:3e4,lte:5e4,color:"#FA541C ",label:"困难人数3-5万人"},{gte:1e4,lte:3e4,color:"#FA8C16",label:"困难人数1-3万人"},{lte:1e4,color:"#fbe1d6",label:"困难人数小于1万人"}]},geo:{map:"hanzhou",aspectScale:.75,zoom:1.1,roam:!1,itemStyle:{normal:{areaColor:"#013C62",shadowColor:"#182f68",shadowOffsetX:0,shadowOffsetY:25},emphasis:{areaColor:"#2AB8FF",borderWidth:0,color:"green",label:{show:!1}}}},series:[{type:"map",roam:!0,label:{normal:{show:!0,textStyle:{color:"#fff"}},emphasis:{textStyle:{color:"#fff"}}},itemStyle:{normal:{borderColor:"#2ab8ff",borderWidth:1.5,areaColor:"#12235c"},emphasis:{areaColor:"#2AB8FF",borderWidth:0,color:"green"}},zoom:1.1,roam:!1,map:"hanzhou"},{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",rippleEffect:{period:15,scale:4,brushType:"fill"},hoverAnimation:!0,itemStyle:{normal:{color:"#ffff",shadowBlur:10,shadowColor:"#333"}},data:mapDate}]},myChart.setOption(option)})};
