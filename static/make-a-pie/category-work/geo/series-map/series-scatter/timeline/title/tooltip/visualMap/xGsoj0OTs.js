let uploadedDataURL="/asset/get/s/data-1564648280635-lBUMhhbt2.json";$.getJSON(uploadedDataURL,function(r){echarts.registerMap("lol",r);let n={遵义市:[106.937265,27.996626],六盘水市:[104.846743,26.184643],黔东南苗族侗族自治州:[108.977488,26.583352],铜仁市:[108.591555,27.818346],黔西南布依族苗族自治州:[105.597971,25.28812],贵阳市:[106.713478,26.878343],黔南布依族苗族自治州:[107.27156,25.758219],毕节市:[105.28501,27.01693],安顺市:[105.932188,26.045544]},a=[{name:"遵义市",value:1183.15},{name:"六盘水市",value:80.17},{name:"黔东南苗族侗族自治州",value:81.78},{name:"铜仁市",value:78.63},{name:"黔西南布依族苗族自治州",value:76.37},{name:"贵阳市",value:78.01},{name:"黔南布依族苗族自治州",value:74.93},{name:"毕节市",value:76.87},{name:"安顺市",value:77.06}],s={baseOption:{timeline:{show:!1},tooltip:{trigger:"item",formatter:"{b}: {c}万"}},options:[{backgroundColor:"white",title:{text:"不同工作地点人群的评价分布",subtext:"",sublink:"http://42.123.101.206:81/tjnj/2018/zk/indexch.htm",left:"center",top:"10",textStyle:{color:"black",fontSize:24}},visualMap:{min:70,max:85,left:"20",bottom:"50",text:["85","70"],calculable:!1,inRange:{color:["yellow","orangered","red"]},textStyle:{color:"black",fontSize:15},itemWidth:20,itemHeight:150},geo:{show:!0,map:"lol",itemStyle:{normal:{areaColor:"transparent",borderColor:"transparent",shadowColor:"transparent",shadowBlur:30},emphasis:{areaColor:"black"}}},series:[{name:"light",type:"scatter",coordinateSystem:"geo",data:function(t){let l=[];for(let e=0;e<t.length;e++){let o=n[t[e].name];o&&l.push({name:t[e].name,value:o.concat(t[e].value)})}return l}(a),symbolSize:1,label:{normal:{formatter:"{b}",fontSize:10,show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"transparent",areaColor:"transparent",borderColor:"transparent",label:{show:!0,textStyle:{color:"black",fontSize:16}}}}},{center:"center",data:a,label:{emphasis:{show:!1},normal:{show:!1}},mapType:"lol",roam:!1,type:"map"}]}]};myChart.setOption(s)});
