var reslult=[{id:1,name:"1电力热力",num:0,size:150,color:"#00DEFF",position:[50,50]},{id:2,name:"2水利环境",num:0,size:130,color:"#0c6491",position:[10,30]},{id:3,name:"3批发零售",num:0,size:100,color:"#0c6491",position:[75,65]},{id:4,name:"4制造业",num:0,size:100,color:"#0c6491",position:[27,65]},{id:5,name:"5房地产",num:0,size:100,color:"#0c6491",position:[68,17]},{id:6,name:"6交通运输",num:0,size:70,color:"#0c6491",position:[8,90]},{id:7,name:"7居民服务",num:0,size:70,color:"#0c6491",position:[35,5]},{id:8,name:"8教育",num:0,size:70,color:"#0c6491",position:[65,89]},{id:9,name:"9教育",num:0,size:70,color:"#0c6491",position:[98,90]},{id:10,name:"10教育",num:0,size:70,color:"#0c6491",position:[90,30]}],data=[];reslult.map(o=>{data.push({name:o.name,number:o.num,value:o.position,symbolSize:o.size,itemStyle:{normal:{color:new echarts.graphic.RadialGradient(.5,.5,1,[{offset:.2,color:"rgba(27, 54, 72, 0.3)"},{offset:1,color:o.color}]),borderWidth:3,borderColor:o.color}}})}),option={backgroundColor:"#061438",grid:{show:!1,top:10,bottom:10},xAxis:[{type:"value",show:!1,min:0,max:100}],yAxis:[{min:0,show:!1,max:100}],series:[{type:"scatter",symbol:"circle",symbolSize:120,label:{normal:{show:!0,formatter:"{b},{c}",color:"#fff",textStyle:{fontSize:"20"}}},animationDurationUpdate:500,animationEasingUpdate:500,animationDelay:function(o){return o*100},data}]};