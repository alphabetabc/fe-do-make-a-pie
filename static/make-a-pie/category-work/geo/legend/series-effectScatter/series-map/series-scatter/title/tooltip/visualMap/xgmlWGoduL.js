var uploadedDataURL="/asset/get/s/data-1517645039291-B1vgpymUz.json";$.getJSON(uploadedDataURL,function(u){echarts.registerMap("zhongguo",u),myChart.hideLoading();var f={上海:[121,31.25],南京:[118.776,32.05932],芜湖:[118.3959,31.3536],合肥:[117.2827,31.87],杭州:[120.21,30.25],台州:[121.44,28.66],盐城:[119.97,33.33],宁波:[121.5,30.32],常州:[119.94,32.02],四川:[104.112035,30.630737]},t=[{name:"上海",value:74.7},{name:"南京",value:86.26},{name:"芜湖",value:92.7},{name:"合肥",value:85.08},{name:"杭州",value:82.54},{name:"台州",value:68.73},{name:"盐城",value:80.1},{name:"宁波",value:68.63},{name:"常州",value:73.77},{name:"安徽",value:59.8},{name:"江苏",value:59.8},{name:"浙江",value:59.8}],l=1e5,n=900,m=20,s=50,r=function(e){for(var a=[],o=0;o<e.length;o++){var i=f[e[o].name];i&&a.push({name:e[o].name,value:i.concat(e[o].value)})}return a};console.log(r(t)),option={title:{text:"长三角城市集群",subtext:"",x:"center",textStyle:{color:"#ccc"}},tooltip:{trigger:"item",formatter:function(e){return typeof e.value[2]>"u"?e.name+" : "+e.value:e.name+" : "+e.value[2]}},legend:{orient:"vertical",y:"bottom",x:"right",data:["sell_area"],textStyle:{color:"#fff"}},visualMap:{show:!1,min:0,max:500,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#0f0c29","#302b63","#24243e"]}},geo:{show:!0,map:"zhongguo",label:{normal:{show:!1},emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}}},series:[{name:"credit_pm2.5",type:"scatter",coordinateSystem:"geo",data:r(t),symbolSize:function(e){return e[2]/1e4},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#05C3F9"}}},{type:"map",map:"zhongguo",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!1},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:!0,itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:t},{name:"点",type:"scatter",coordinateSystem:"geo",symbol:"pin",symbolSize:function(e){var a=(m-s)/(l-n),o=s-a*n;return o=m-a*l,a*e[2]+o},label:{normal:{show:!0,textStyle:{color:"#fff",fontSize:9}}},itemStyle:{normal:{color:"#F62157"}},zlevel:6,data:r(t)},{name:"Top 5",type:"effectScatter",coordinateSystem:"geo",data:r(t.sort(function(e,a){return a.value-e.value}).slice(0,5)),symbolSize:function(e){return e[2]/5e3},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!1}},itemStyle:{normal:{color:"#05C3F9",shadowBlur:10,shadowColor:"#05C3F9"}},zlevel:1}]},myChart.setOption(option)});