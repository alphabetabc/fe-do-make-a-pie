var uploadedDataURL="/asset/get/s/data-1482909900836-H1BC_1WHg.json";$.get(uploadedDataURL,function(v){echarts.registerMap("shanghai",v),myChart.setOption({series:[{type:"map",map:"shanghai"}]});var o={黄浦区:[121.490317,31.222771],徐汇区:[121.43752,31.179973],长宁区:[121.4222,31.218123],静安区:[121.448224,31.229003],普陀区:[121.392499,31.241701],闸北区:[121.465689,31.25318],虹口区:[121.491832,31.26097],杨浦区:[121.522797,31.270755],闵行区:[121.375972,31.111658],宝山区:[121.489934,31.398896],嘉定区:[121.250333,31.383524],浦东新区:[121.7795171,31.13357039],金山区:[121.330736,30.724697],松江区:[121.223543,31.03047],青浦区:[121.113021,31.151209],奉贤区:[121.458472,30.912345],崇明县:[121.397516,31.626946]},s=0,u=1e3,m=[{name:"黄浦区",value:219},{name:"徐汇区",value:339},{name:"长宁区",value:412},{name:"静安区",value:429},{name:"普陀区",value:389},{name:"闸北区",value:352},{name:"虹口区",value:329},{name:"杨浦区",value:532},{name:"闵行区",value:299},{name:"宝山区",value:139},{name:"嘉定区",value:440},{name:"浦东新区",value:89},{name:"金山区",value:652},{name:"松江区",value:415},{name:"青浦区",value:329},{name:"奉贤区",value:752},{name:"崇明县",value:399}];function c(e,r){var a=[];return m.map(l=>{l.name!==e&&a.push([{name:e},{id:r,name:l.name,value:l.value}])}),a}var f=c("浦东新区",1),g=[[{name:"浦东新区"},{id:1,name:"徐汇区",value:75}],[{name:"浦东新区"},{id:1,name:"嘉定区",value:35}]],p="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",h=function(e){for(var r,a,l=0;l<e.length;l++){var n=e[l];if(n[1].id==1)return r=.2,r;if(n[1].id==2)return a=-.2,a}},d=function(e){for(var r=[],a=0;a<e.length;a++){var l=e[a],n=o[l[0].name],t=o[l[1].name];l[1].id==1?n&&t&&r.push([{coord:n},{coord:t,value:l[1].value}]):l[1].id==2&&n&&t&&r.push([{coord:n},{coord:t}])}return r},i=[];[["1",f]].forEach(function(e,r){i.push({name:e[0],type:"lines",zlevel:2,effect:{show:!0,period:6,trailLength:.1,symbol:p,symbolSize:10},lineStyle:{normal:{width:1,opacity:.4,curveness:h(e[1]),color:"#fff"}},data:d(e[1])},{type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{period:2,brushType:"stroke",scale:3},label:{normal:{show:!0,position:"bottom",formatter:"{b}"}},symbol:"circle",symbolSize:function(a){return a[2]/30},itemStyle:{normal:{show:!0}},data:e[1].map(function(a){return{name:a[1].name,value:o[a[1].name].concat([a[1].value])}})})}),i.push({type:"map",map:"shanghai",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,roam:!0,animation:!1,data:m}),option={backgroundColor:"#173b84",textStyle:{color:"#fff"},title:{text:"上海送货",subtext:"数据可更换，去掉头尾注释可直接应用到本地",left:"center"},tooltip:{trigger:"item",backgroundColor:"rgba(12, 204, 104, 0.92)",borderColor:"#FFFFCC",showDelay:0,hideDelay:0,enterable:!0,transitionDuration:0,extraCssText:"z-index:100",formatter:function(e,r,a){var l="",n=e.name,t=e.value;return l="<span style='color:#fff;'>"+n+"</span><br/>数据："+t,l}},visualMap:[{show:!1,min:s,max:u,color:["#ff3333","orange","yellow","lime","aqua"]},{show:!1,min:s,max:u,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[2],dimension:0,inRange:{color:["#9074c3","#4487d5","#7e9e8e","#51a2c2"]},textStyle:{color:"#fff"}}],geo:{map:"shanghai",zoom:1,roam:!0,label:{show:!1},itemStyle:{areaColor:"#4487d5",borderColor:"#3B5077",borderWidth:1},emphasis:{label:{show:!1},itemStyle:{areaColor:"#2B91B7",borderWidth:0}}},series:i},myChart.setOption(option)});
