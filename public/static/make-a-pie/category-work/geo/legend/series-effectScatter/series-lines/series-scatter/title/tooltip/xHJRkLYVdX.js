var uploadedDataURL="/asset/get/s/data-1545288264988-dJuw8gGVb.png",jnMap="/asset/get/s/data-1545269022588-ITAd8LEcz.json",map_data={jiangyin_value:[{name:"江宁产业云",value:400},{name:"江宁开发区",value:120},{name:"滨江开发区",value:40},{name:"江宁高新园",value:150},{name:"4号",value:250}],jiangyin_geoCoordMap:{江宁产业云:[118.602219,32.02533],江宁开发区:[118.789233,31.92715],滨江开发区:[118.592459,31.830597],江宁高新园:[118.864742,31.853386]},JNdata:[[{name:"江宁开发区"},{name:"江宁产业云",value:"200"}],[{name:"滨江开发区"},{name:"江宁产业云",value:"200"}],[{name:"江宁高新园"},{name:"江宁产业云",value:"200"}]]};$.getJSON(jnMap,function(m){echarts.registerMap("jiangning",m);var n=map_data.JNdata,l=function(a){for(var o=[],e=0;e<a.length;e++){var t=map_data.jiangyin_geoCoordMap[a[e].name];t&&o.push({name:a[e].name,value:t.concat(a[e].value)})}return o},f=function(a){for(var o=[],e=0;e<a.length;e++){var t=map_data.jiangyin_geoCoordMap[a[e][0].name];t&&o.push({name:a[e][0].name,value:t.concat(a[e][1].value)})}return o},u=function(a){for(var o=[],e=0;e<a.length;e++){var t=a[e],i=map_data.jiangyin_geoCoordMap[t[0].name],s=map_data.jiangyin_geoCoordMap[t[1].name];i&&s&&o.push({fromName:t[0].name,toName:t[1].name,coords:[i,s]})}return o},c=["#f4e925"],r=[];[["产业云",n]].forEach(function(a,o){r.push({name:"飞线",type:"lines",zlevel:2,effect:{animation:!1,show:!0,constantSpeed:70,trailLength:.5,color:"#fff",symbolSize:4},lineStyle:{normal:{color:c[o],width:0,curveness:.2}},data:u(a[1])},{name:"地区",type:"scatter",coordinateSystem:"geo",data:l(map_data.jiangyin_value),symbolSize:function(e){return e[2]/15},label:{normal:{formatter:"{b}",position:"right",show:!1},emphasis:{show:!0}},itemStyle:{normal:{color:"#BBA02C"}}},{name:"接收点",type:"effectScatter",coordinateSystem:"geo",data:l(map_data.jiangyin_value.sort(function(e,t){return t.value-e.value}).slice(0,1)),symbolSize:function(e){return e[2]/100},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#f4e925",shadowBlur:10,shadowColor:"#333"}},zlevel:1},{name:"",type:"effectScatter",coordinateSystem:"geo",data:f(n),symbolSize:function(e){return e[2]/10},showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0}},itemStyle:{normal:{color:"#fff",shadowBlur:10,shadowColor:"#333"}},zlevel:1}),console.log(r)}),option={backgroundColor:"#0b0c26",title:[{text:"产业云分布",subtext:"南京市江宁区",left:"center",textStyle:{color:"#fff"}}],tooltip:{trigger:"item",formatter:"{b}"},grid:{right:40,top:100,bottom:40,width:"30%"},legend:{orient:"vertical",top:"bottom",left:"right",data:["企业分布情况"],textStyle:{color:"#fff"},selectedMode:"single"},geo:{map:"jiangning",label:{emphasis:{show:!1}},roam:!0,itemStyle:{normal:{areaColor:"#133095",borderColor:"#404a59"},emphasis:{areaColor:"#2a333d"}}},series:r},myChart.setOption(option)});
