var uploadedDataURL="/asset/get/s/data-1499156198404-H1AJkAOEZ.json";$.get(uploadedDataURL,function(o){echarts.registerMap("GD",o);let t=[["116.424697","39.927967",1334],["116.358141","39.913919",9334],["116.765487","40.136573",834],["116.290679","39.857184",2334],["116.17672","39.949198",6734],["116.177807","40.062966",1234],["115.905234","40.010063",2634],["115.941902","39.708825",1334],["116.747351","39.814339",1178],["116.737316","40.137897",634],["116.226118","40.225311",534],["116.402095","39.655493",2334],["116.621138","40.432762",1334],["117.117604","40.192158",4534],["117.065719","40.500122",724],["116.016705","40.507607",334]],a=[];t.map(e=>{a.push(...new Array(3).fill(e))});let r=Math.max(...t.map(e=>e[2])),l=Math.min(...t.map(e=>e[2]));myChart.setOption(option={backgroundColor:"#ccc",tooltip:{show:!1,trigger:"item",axisPointer:{type:"shadow"}},visualMap:{bottom:20,left:10,show:!0,color:["#ff4601","#fffc00","#87cffa"],min:l,max:r,calculable:!0,textStyle:{color:"#fff",fontSize:12}},grid:{height:"100%",width:"100%"},geo:{map:"GD",label:{show:!0},top:"center",left:"100",roam:!0,width:"90%",height:"95%",zoom:.9,label:{normal:{show:!0,color:"#fff"},emphasis:{color:"#fff"}},itemStyle:{normal:{areaColor:"#76b1ff",borderColor:"#eee",shadowColor:"#76b1ff",shadowBlur:10,borderWidth:1},emphasis:{areaColor:"#409EFF",borderWidth:0}}},series:[{mapType:"GD",top:"center",left:"center",width:"65%",height:"95%",name:"AQI",type:"heatmap",coordinateSystem:"geo",blurSize:40,data:a,emphasis:{show:!1,itemStyle:{areaColor:"rgb(255,255,0,1)"}}}]})});