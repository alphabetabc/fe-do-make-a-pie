loadMap("/asset/get/s/data-1591152454850-nnifVpUft.json","china");let provincesName=["上海","河北","山西","内蒙古","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广东","广西","海南","四川","贵州","云南","西藏","陕西","甘肃","青海","宁夏","新疆","北京","天津","重庆","香港","澳门","台湾"],item=[];provincesName.map(e=>{let a={code:"12",area:e,board_num:Math.random()*100,ask_num:500+Math.random()*1e3,sign_num:Math.random()*10};item.push(a)}),item.map(function(e){return e.name=e.area,e.value=e.ask_num,e});function loadMap(e,a){$.get(e,function(n){if(n){echarts.registerMap(a,n);var r={title:{text:"全国地域分析",left:"center"},tooltip:{formatter:function(t){return t.data?t.name+"<br>咨询数:"+t.data.ask_num+"<br>留言数:"+t.data.board_num+"<br>用户数:"+t.data.sign_num+"<br>":t.name+"<br>咨询数:"+0+"<br>留言数:"+0+"<br>用户数:"+0+"<br>"}},visualMap:{min:0,max:1500,left:"left",top:"bottom",text:["高","低"],calculable:!0,inRange:{color:["#A5DCF4","#006edd"]},show:!0},toolbox:{show:!0,feature:{saveAsImage:{pixelRatio:4}}},series:[{type:"map",mapType:a,selectedMode:"false",label:{normal:{show:!0},emphasis:{show:!0}},data:item}]};myChart.setOption(r)}else alert("无法加载该地图")})}
