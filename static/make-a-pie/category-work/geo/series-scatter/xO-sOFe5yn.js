var house="image:///asset/get/s/data-1592811891877-_oI8eFNbB.png",hangzhou="/asset/get/s/data-1589003571047-8Xg37jcwv.json",mapDate=[{name:"江干区",value:[120.185,30.274]},{name:"拱墅区",value:[120.182,30.351]},{name:"西湖区",value:[120.091,30.27]},{name:"滨江区",value:[120.21,30.209]},{name:"萧山区",value:[120.254,30.159]},{name:"余杭区",value:[120.295,30.427]},{name:"富阳区",value:[119.956,30.05]},{name:"桐庐县",value:[119.675,29.784]},{name:"淳安县",value:[119.058,29.613]},{name:"建德市",value:[119.28,29.464]},{name:"临安区",value:[119.712,30.227]},{name:"钱塘新区",value:[120.485,30.284]}],mapSelect=[[{name:"临安区",selected:!0}]];echarts.extendsMap=function(a,e){var t=this.init(document.getElementById(a)),n={mapName:"杭州",goDown:!1,activeArea:[{name:"临安区",selected:!0}],data:[],callback:function(r,l,m){}};e&&(e=this.util.extend(n,e));var o={backgroundColor:"#336699",geo:{map:e.mapName,zoom:1.2,label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:10}},emphasis:{textStyle:{color:"#640000"}}},itemStyle:{normal:{borderColor:"#3fdaff",borderWidth:1,areaColor:"transparent"},emphasis:{areaColor:"#eee",borderWidth:0}},regions:mapSelect[0]},series:[{type:"scatter",coordinateSystem:"geo",symbol:house,symbolSize:20,hoverAnimation:!1,data:mapDate}]};return t.setOption(o),t},$.getJSON(hangzhou,function(a){echarts.registerMap("杭州",a);var e=echarts.extendsMap("chart-panel",{mapName:"杭州",goDown:!0,callback:function(t,n,o){}})});
