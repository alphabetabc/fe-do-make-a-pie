var cities=[{name:"广东",value:[113.2563,23.1297]},{name:"河南",value:[113.6806,34.7553]},{name:"山东",value:[117.001,36.6885]},{name:"辽宁",value:[123.439,41.8068]},{name:"江苏",value:[118.8046,32.0641]},{name:"浙江",value:[120.2004,30.2793]},{name:"陕西",value:[108.9523,34.3366]},{name:"上海",value:[121.4771,31.2278]},{name:"台湾",value:[120.8961,23.9694]},{name:"天津",value:[117.2081,39.1428]},{name:"北京",value:[116.3852,39.9156]},{name:"江西",value:[115.8545,28.683]},{name:"湖南",value:[112.9603,28.223]},{name:"吉林",value:[126.5907,43.8725]},{name:"四川",value:[104.0712,30.6613]},{name:"山西",value:[112.559,37.8746]},{name:"湖北",value:[114.2973,30.5921]},{name:"云南",value:[102.7176,25.0482]},{name:"福建",value:[119.3082,26.0718]},{name:"广西",value:[108.3592,22.8205]},{name:"黑龙江",value:[126.6484,45.7622]},{name:"新疆",value:[87.6007,43.8223]},{name:"重庆",value:[106.5343,29.5813]},{name:"宁夏",value:[106.2196,38.4879]},{name:"河北",value:[114.513,38.0648]},{name:"安徽",value:[117.2868,31.8534]},{name:"甘肃",value:[103.8428,36.0568]},{name:"青海",value:[101.7893,36.6353]},{name:"内蒙古",value:[111.7341,40.8387]},{name:"海南",value:[110.3452,20.0255]},{name:"西藏",value:[91.1192,29.6722]},{name:"贵州",value:[106.6673,26.6208]}],path2=[{fromName:"广东",toName:"广西",coords:[[113.2563,23.1297],[108.3592,22.8205]]},{fromName:"广东",toName:"北京",coords:[[113.2563,23.1297],[116.3852,39.9156]]},{fromName:"河南",toName:"黑龙江",coords:[[113.6806,34.7553],[126.6484,45.7622]]},{fromName:"山东",toName:"浙江",coords:[[117.001,36.6885],[120.2004,30.2793]]},{fromName:"辽宁",toName:"北京",coords:[[123.439,41.8068],[116.3852,39.9156]]},{fromName:"广东",toName:"山东",coords:[[113.2563,23.1297],[117.001,36.6885]]},{fromName:"江苏",toName:"黑龙江",coords:[[118.8046,32.0641],[126.6484,45.7622]]},{fromName:"浙江",toName:"浙江",coords:[[120.2004,30.2793],[120.2004,30.2793]]},{fromName:"江苏",toName:"新疆",coords:[[118.8046,32.0641],[87.6007,43.8223]]},{fromName:"江苏",toName:"天津",coords:[[118.8046,32.0641],[117.2081,39.1428]]},{fromName:"江苏",toName:"湖北",coords:[[118.8046,32.0641],[114.2973,30.5921]]},{fromName:"陕西",toName:"重庆",coords:[[108.9523,34.3366],[106.5343,29.5813]]},{fromName:"江苏",toName:"吉林",coords:[[118.8046,32.0641],[126.5907,43.8725]]},{fromName:"上海",toName:"湖北",coords:[[121.4771,31.2278],[114.2973,30.5921]]},{fromName:"陕西",toName:"宁夏",coords:[[108.9523,34.3366],[106.2196,38.4879]]},{fromName:"浙江",toName:"湖北",coords:[[120.2004,30.2793],[114.2973,30.5921]]},{fromName:"江苏",toName:"河北",coords:[[118.8046,32.0641],[114.513,38.0648]]},{fromName:"上海",toName:"北京",coords:[[121.4771,31.2278],[116.3852,39.9156]]},{fromName:"江苏",toName:"云南",coords:[[118.8046,32.0641],[102.7176,25.0482]]},{fromName:"台湾",toName:"安徽",coords:[[120.8961,23.9694],[117.2868,31.8534]]},{fromName:"天津",toName:"北京",coords:[[117.2081,39.1428],[116.3852,39.9156]]},{fromName:"北京",toName:"四川",coords:[[116.3852,39.9156],[104.0712,30.6613]]},{fromName:"北京",toName:"甘肃",coords:[[116.3852,39.9156],[103.8428,36.0568]]},{fromName:"山东",toName:"甘肃",coords:[[117.001,36.6885],[103.8428,36.0568]]},{fromName:"北京",toName:"新疆",coords:[[116.3852,39.9156],[87.6007,43.8223]]},{fromName:"浙江",toName:"甘肃",coords:[[120.2004,30.2793],[103.8428,36.0568]]},{fromName:"北京",toName:"黑龙江",coords:[[116.3852,39.9156],[126.6484,45.7622]]},{fromName:"广东",toName:"四川",coords:[[113.2563,23.1297],[104.0712,30.6613]]},{fromName:"江苏",toName:"甘肃",coords:[[118.8046,32.0641],[103.8428,36.0568]]},{fromName:"广东",toName:"甘肃",coords:[[113.2563,23.1297],[103.8428,36.0568]]},{fromName:"北京",toName:"北京",coords:[[116.3852,39.9156],[116.3852,39.9156]]},{fromName:"浙江",toName:"黑龙江",coords:[[120.2004,30.2793],[126.6484,45.7622]]},{fromName:"浙江",toName:"北京",coords:[[120.2004,30.2793],[116.3852,39.9156]]},{fromName:"山东",toName:"山东",coords:[[117.001,36.6885],[117.001,36.6885]]},{fromName:"广东",toName:"青海",coords:[[113.2563,23.1297],[101.7893,36.6353]]},{fromName:"上海",toName:"上海",coords:[[121.4771,31.2278],[121.4771,31.2278]]},{fromName:"山东",toName:"上海",coords:[[117.001,36.6885],[121.4771,31.2278]]},{fromName:"江西",toName:"山东",coords:[[115.8545,28.683],[117.001,36.6885]]},{fromName:"河南",toName:"河南",coords:[[113.6806,34.7553],[113.6806,34.7553]]},{fromName:"江西",toName:"海南",coords:[[115.8545,28.683],[110.3452,20.0255]]},{fromName:"江西",toName:"江西",coords:[[115.8545,28.683],[115.8545,28.683]]},{fromName:"江西",toName:"云南",coords:[[115.8545,28.683],[102.7176,25.0482]]},{fromName:"江西",toName:"新疆",coords:[[115.8545,28.683],[87.6007,43.8223]]},{fromName:"江苏",toName:"江西",coords:[[118.8046,32.0641],[115.8545,28.683]]},{fromName:"浙江",toName:"上海",coords:[[120.2004,30.2793],[121.4771,31.2278]]},{fromName:"江西",toName:"广东",coords:[[115.8545,28.683],[113.2563,23.1297]]},{fromName:"江苏",toName:"山东",coords:[[118.8046,32.0641],[117.001,36.6885]]},{fromName:"江苏",toName:"北京",coords:[[118.8046,32.0641],[116.3852,39.9156]]},{fromName:"江西",toName:"湖南",coords:[[115.8545,28.683],[112.9603,28.223]]},{fromName:"江西",toName:"贵州",coords:[[115.8545,28.683],[106.6673,26.6208]]},{fromName:"江西",toName:"湖北",coords:[[115.8545,28.683],[114.2973,30.5921]]},{fromName:"河南",toName:"海南",coords:[[113.6806,34.7553],[110.3452,20.0255]]},{fromName:"江苏",toName:"湖南",coords:[[118.8046,32.0641],[112.9603,28.223]]},{fromName:"山东",toName:"新疆",coords:[[117.001,36.6885],[87.6007,43.8223]]},{fromName:"浙江",toName:"广东",coords:[[120.2004,30.2793],[113.2563,23.1297]]},{fromName:"江西",toName:"宁夏",coords:[[115.8545,28.683],[106.2196,38.4879]]},{fromName:"江西",toName:"广西",coords:[[115.8545,28.683],[108.3592,22.8205]]},{fromName:"云南",toName:"云南",coords:[[102.7176,25.0482],[102.7176,25.0482]]},{fromName:"江西",toName:"上海",coords:[[115.8545,28.683],[121.4771,31.2278]]},{fromName:"山东",toName:"广东",coords:[[117.001,36.6885],[113.2563,23.1297]]},{fromName:"河南",toName:"江西",coords:[[113.6806,34.7553],[115.8545,28.683]]},{fromName:"河南",toName:"北京",coords:[[113.6806,34.7553],[116.3852,39.9156]]},{fromName:"江西",toName:"北京",coords:[[115.8545,28.683],[116.3852,39.9156]]},{fromName:"福建",toName:"江西",coords:[[119.3082,26.0718],[115.8545,28.683]]},{fromName:"北京",toName:"江西",coords:[[116.3852,39.9156],[115.8545,28.683]]},{fromName:"河南",toName:"重庆",coords:[[113.6806,34.7553],[106.5343,29.5813]]}],path3=[{fromName:"上海",toName:"山东",coords:[[121.4771,31.2278],[117.001,36.6885]]},{fromName:"江苏",toName:"上海",coords:[[118.8046,32.0641],[121.4771,31.2278]]},{fromName:"山东",toName:"安徽",coords:[[117.001,36.6885],[117.2868,31.8534]]},{fromName:"山东",toName:"辽宁",coords:[[117.001,36.6885],[123.439,41.8068]]},{fromName:"上海",toName:"辽宁",coords:[[121.4771,31.2278],[123.439,41.8068]]},{fromName:"江西",toName:"甘肃",coords:[[115.8545,28.683],[103.8428,36.0568]]},{fromName:"天津",toName:"天津",coords:[[117.2081,39.1428],[117.2081,39.1428]]},{fromName:"浙江",toName:"浙江",coords:[[120.2004,30.2793],[120.2004,30.2793]]},{fromName:"山东",toName:"浙江",coords:[[117.001,36.6885],[120.2004,30.2793]]},{fromName:"江西",toName:"辽宁",coords:[[115.8545,28.683],[123.439,41.8068]]},{fromName:"江苏",toName:"山东",coords:[[118.8046,32.0641],[117.001,36.6885]]},{fromName:"江西",toName:"广东",coords:[[115.8545,28.683],[113.2563,23.1297]]},{fromName:"江西",toName:"黑龙江",coords:[[115.8545,28.683],[126.6484,45.7622]]},{fromName:"江西",toName:"江西",coords:[[115.8545,28.683],[115.8545,28.683]]},{fromName:"山东",toName:"黑龙江",coords:[[117.001,36.6885],[126.6484,45.7622]]},{fromName:"上海",toName:"安徽",coords:[[121.4771,31.2278],[117.2868,31.8534]]},{fromName:"上海",toName:"广东",coords:[[121.4771,31.2278],[113.2563,23.1297]]},{fromName:"广东",toName:"内蒙古",coords:[[113.2563,23.1297],[111.7341,40.8387]]},{fromName:"上海",toName:"内蒙古",coords:[[121.4771,31.2278],[111.7341,40.8387]]},{fromName:"江西",toName:"四川",coords:[[115.8545,28.683],[104.0712,30.6613]]},{fromName:"河南",toName:"吉林",coords:[[113.6806,34.7553],[126.5907,43.8725]]},{fromName:"上海",toName:"广西",coords:[[121.4771,31.2278],[108.3592,22.8205]]},{fromName:"湖南",toName:"广西",coords:[[112.9603,28.223],[108.3592,22.8205]]},{fromName:"江西",toName:"天津",coords:[[115.8545,28.683],[117.2081,39.1428]]},{fromName:"江西",toName:"吉林",coords:[[115.8545,28.683],[126.5907,43.8725]]},{fromName:"湖南",toName:"湖南",coords:[[112.9603,28.223],[112.9603,28.223]]},{fromName:"山东",toName:"天津",coords:[[117.001,36.6885],[117.2081,39.1428]]},{fromName:"河南",toName:"辽宁",coords:[[113.6806,34.7553],[123.439,41.8068]]},{fromName:"河南",toName:"甘肃",coords:[[113.6806,34.7553],[103.8428,36.0568]]},{fromName:"吉林",toName:"辽宁",coords:[[126.5907,43.8725],[123.439,41.8068]]},{fromName:"四川",toName:"宁夏",coords:[[104.0712,30.6613],[106.2196,38.4879]]},{fromName:"江西",toName:"湖北",coords:[[115.8545,28.683],[114.2973,30.5921]]},{fromName:"山东",toName:"山东",coords:[[117.001,36.6885],[117.001,36.6885]]},{fromName:"上海",toName:"海南",coords:[[121.4771,31.2278],[110.3452,20.0255]]},{fromName:"江西",toName:"云南",coords:[[115.8545,28.683],[102.7176,25.0482]]},{fromName:"山西",toName:"吉林",coords:[[112.559,37.8746],[126.5907,43.8725]]},{fromName:"陕西",toName:"青海",coords:[[108.9523,34.3366],[101.7893,36.6353]]},{fromName:"江苏",toName:"浙江",coords:[[118.8046,32.0641],[120.2004,30.2793]]},{fromName:"江西",toName:"青海",coords:[[115.8545,28.683],[101.7893,36.6353]]},{fromName:"山东",toName:"四川",coords:[[117.001,36.6885],[104.0712,30.6613]]},{fromName:"四川",toName:"辽宁",coords:[[104.0712,30.6613],[123.439,41.8068]]},{fromName:"四川",toName:"甘肃",coords:[[104.0712,30.6613],[103.8428,36.0568]]},{fromName:"广东",toName:"广东",coords:[[113.2563,23.1297],[113.2563,23.1297]]},{fromName:"浙江",toName:"广东",coords:[[120.2004,30.2793],[113.2563,23.1297]]},{fromName:"江西",toName:"西藏",coords:[[115.8545,28.683],[91.1192,29.6722]]},{fromName:"湖北",toName:"湖北",coords:[[114.2973,30.5921],[114.2973,30.5921]]},{fromName:"湖北",toName:"甘肃",coords:[[114.2973,30.5921],[103.8428,36.0568]]},{fromName:"上海",toName:"吉林",coords:[[121.4771,31.2278],[126.5907,43.8725]]},{fromName:"浙江",toName:"天津",coords:[[120.2004,30.2793],[117.2081,39.1428]]},{fromName:"河南",toName:"天津",coords:[[113.6806,34.7553],[117.2081,39.1428]]},{fromName:"湖南",toName:"云南",coords:[[112.9603,28.223],[102.7176,25.0482]]},{fromName:"河南",toName:"安徽",coords:[[113.6806,34.7553],[117.2868,31.8534]]},{fromName:"江西",toName:"河南",coords:[[115.8545,28.683],[113.6806,34.7553]]},{fromName:"江苏",toName:"江苏",coords:[[118.8046,32.0641],[118.8046,32.0641]]},{fromName:"江西",toName:"河北",coords:[[115.8545,28.683],[114.513,38.0648]]},{fromName:"江西",toName:"内蒙古",coords:[[115.8545,28.683],[111.7341,40.8387]]},{fromName:"山东",toName:"河南",coords:[[117.001,36.6885],[113.6806,34.7553]]}],planePath="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";option={backgroundColor:"#404a59",title:{text:"路径",left:"center",textStyle:{color:"#fff"}},legend:{top:"15%",left:"45%",data:["二类","三类"],textStyle:{color:"#fff",fontSize:16},selectedMode:"multiple"},geo:{map:"china",label:{emphasis:{show:!1,color:"#fff"}},roam:!0,itemStyle:{normal:{areaColor:"#323c48",borderColor:"#606a79"},emphasis:{areaColor:"#2a333d"}}},series:[{name:"城市",type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}",color:"#fff"}},itemStyle:{normal:{color:"#808a99"}},data:cities},{name:"二类",type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#aaa",symbolSize:1},symbol:["none","arrow"],lineStyle:{normal:{color:"rgba(255,183,35,0.2)",opacity:.3,width:.8,curveness:.2}},data:path2},{name:"三类",type:"lines",zlevel:1,effect:{show:!0,period:6,trailLength:.7,color:"#aaa",symbolSize:1},symbol:["none","arrow"],lineStyle:{normal:{color:"rgba(70,183,240,0.2)",opacity:.3,width:1,curveness:.2}},data:path3}]};