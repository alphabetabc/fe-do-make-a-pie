var uploadedDataURL="/asset/get/s/data-1612933506802-jiXTaHwkp.xlsx",uploadedDataURL="/asset/get/s/data-1612933506802-jiXTaHwkp.xlsx";window.dataList=[{name:"安徽",value:2},{name:"澳门",value:0},{name:"北京",value:73},{name:"福建",value:3},{name:"甘肃",value:1},{name:"广东",value:154},{name:"广西",value:2},{name:"贵州",value:0},{name:"海南",value:6},{name:"河北",value:118},{name:"河南",value:5},{name:"黑龙江",value:59},{name:"湖北",value:4},{name:"湖南",value:7},{name:"吉林",value:24},{name:"江苏",value:6},{name:"江西",value:5},{name:"辽宁",value:15},{name:"内蒙古",value:13},{name:"宁夏",value:1},{name:"青海",value:1},{name:"山东",value:6},{name:"山西",value:7},{name:"陕西",value:6},{name:"上海",value:46},{name:"四川",value:11},{name:"台湾",value:0},{name:"天津",value:13},{name:"西藏",value:0},{name:"香港",value:0},{name:"新疆",value:1},{name:"云南",value:1},{name:"浙江",value:4},{name:"重庆",value:2}];var colors=["#000080","#0000FF","#4169E1","#6495ED","#B0C4DE","#C0C0C0"],geoData=[{name:"乌鲁木齐",value:[87.68,43.77]},{name:"广州",value:[113.23,23.16]},{name:"上海",value:[121.48,31.22]}],mapDatas=[];for(let e=0;e<geoData.length;e++)mapDatas.push({name:geoData[e].name+"",value:geoData[e].value.concat(Math.random()*500)});var roam=!1,icon="path://M739.475397 914.697813h-312.445457c-35.729688 0-69.154895-19.156254-87.189607-49.912683L195.799017 619.145061c-25.954063-44.29679-16.656322-99.996259 21.938617-133.534029l3.201919-3.060702c37.552193-30.928345 95.473254-29.803733 131.764736 1.122564v-272.771955c0-56.00953 45.559548-101.598753 101.5701-101.598752 27.471623 0 52.989759 10.674086 72.147036 29.971555 19.241188 19.436639 29.69117 45.25051 29.436368 72.637199l-1.600448 165.416093 210.275701 14.521709c45.027429 4.465699 78.310397 41.402886 78.310396 85.89615l-2.105959 335.943591c-0.364296 55.673886-45.784674 101.00933-101.262086 101.009329zM259.141544 525.693856l-2.613519 2.414998c-18.509526 15.252348-23.172723 41.319998-11.066011 61.934461l144.01164 245.640068c7.894792 13.45338 21.909965 21.460735 37.556286 21.460735h312.445457c23.96169 0 43.594804-19.63516 43.734996-43.791278l2.10903-335.749163c0-14.689531-11.012799-26.991694-25.647072-28.453995l-209.515386-14.465427c-30.223288-2.078331-53.720398-27.500276-53.441036-57.921062l1.600448-165.41507c0.112563-11.937866-4.409418-23.145093-12.780046-31.54335-8.257041-8.342999-19.269841-12.949914-30.952904-12.949914-24.605348 0-44.353072 19.7467-44.353072 44.045057v450.4063l-87.834288-126.400576c-14.015174-19.295423-43.564104-24.098813-63.254523-9.211784z";option={tooltip:{triggerOn:"click",formatter:function(e,a,l){return e.value==.5?e.name+"：有疑似病例":e.seriesName+"<br />"+e.name+"："+e.value}},toolbox:{show:!0,feature:{myTool:{show:!0,title:"平滑开关",icon,onclick:function(){roam=!roam,option.geo.roam=roam,myChart.setOption(option,!0)}}},left:10,top:10},visualMap:{min:0,max:2e3,left:26,bottom:50,showLabel:!0,text:["高","低"],pieces:[{gt:100,label:"> 100",color:colors[0]},{gte:80,lte:100,label:"80 - 100",color:colors[1]},{gte:50,lte:80,label:"50 - 80",color:colors[2]},{gte:20,lt:50,label:"20 - 50",color:colors[3]},{gte:1,lt:20,label:"1 - 20",color:colors[4]},{value:0,color:colors[5]}],show:!0},geo:{map:"china",roam,scaleLimit:{min:1,max:2},zoom:1.23,top:51,label:{normal:{show:!0,fontSize:"12",color:"rgba(0,0,0,0.7)"},emphasis:{color:"red"}},itemStyle:{normal:{borderColor:"rgba(0, 0, 0, 0.2)"},emphasis:{areaColor:"#f2d5ad",shadowOffsetX:0,shadowOffsetY:0,borderWidth:0}}},series:[{name:"数据数量",type:"map",geoIndex:0,data:window.dataList},{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",zlevel:1,rippleEffect:{period:5,scale:4,brushType:"fill"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"bottom",offset:[0,-50],show:!0,fontSize:16}},itemStyle:{color:"rgba(241, 199, 48, 0.93)",shadowBlur:2},emphasis:{label:{offset:[0,-70],formatter:function(e){return"地址："+e.name+`
 订单量：`+e.value[2]},color:"#fff",backgroundColor:"rgba(73, 80, 77, 0.5)",borderRadius:5,padding:5}},symbolSize:function(e){return console.log(Math.sqrt(e[2]),11,"--",e[2]),e[2]>=100?25:16},data:mapDatas}]};