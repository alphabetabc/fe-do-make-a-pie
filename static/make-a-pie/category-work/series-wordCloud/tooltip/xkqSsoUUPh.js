let datas=[{name:"雨伞",value:30},{name:"晴天",value:28},{name:"电话",value:24},{name:"手机",value:23},{name:"下雨",value:22},{name:"暴雨",value:21},{name:"多云",value:20},{name:"雨衣",value:29},{name:"屋檐",value:28},{name:"大风",value:27},{name:"台风",value:26},{name:"下雪",value:25},{name:"打雷",value:24},{name:"小雨",value:30},{name:"中雨",value:18},{name:"大雨",value:14},{name:"雷阵雨",value:13},{name:"下雪",value:12},{name:"小雪",value:11},{name:"中雪",value:10},{name:"大雪",value:9},{name:"暴雪",value:8},{name:"东风",value:7},{name:"南风",value:6},{name:"西北风",value:5},{name:"北风",value:4},{name:"闪电",value:3}];option={tooltip:{show:!0,position:"top",textStyle:{fontSize:30}},series:[{type:"wordCloud",gridSize:60,shape:"circle",sizeRange:[20,70],rotationRange:[0,0],left:"center",top:"center",right:null,bottom:null,width:"90%",height:"80%",drawOutOfBound:!1,textStyle:{normal:{color:function(){return"rgb("+[Math.round(Math.random()*200+55),Math.round(Math.random()*200+55),Math.round(Math.random()*200+55)].join(",")+")"}},emphasis:{shadowBlur:10,shadowColor:"#2ac"}},data:datas}]};