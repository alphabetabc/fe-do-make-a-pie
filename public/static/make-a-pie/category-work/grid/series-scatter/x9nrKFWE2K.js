var reslult=[{name:"电力热力",value:130,color:"#20F397",position:[0,60],fontSize:"12",number:"2"},{name:"水利环境",value:150,color:"#FEF009",position:[20,30],fontSize:"14",number:"4"},{name:"批发零售",value:130,color:"#02DDDF",position:[20,70],number:"2",fontSize:"12"},{name:"制造业",value:170,color:"#FF0000",position:[45,50],number:"4",fontSize:"18"},{name:"房地产",value:140,color:"#00FFFF",position:[46,90],fontSize:"13",number:"3"},{name:"交通运输",value:70,color:"#FF7E00",position:[65,75],fontSize:"18",number:"2"},{name:"居民服务",value:140,color:"#00FFFF",position:[80,33],number:"4",fontSize:"11"},{name:"教育",value:130,color:"#601986",position:[90,53],fontSize:"11",number:"2"}],data=[];reslult.map(o=>{data.push({name:o.name,value:o.position,symbolSize:o.value,label:{normal:{formatter:function(e){var r="",l=e.name.length,a=parseInt(o.number),m=Math.ceil(l/a);if(l>a)for(var n=0;n<m;n++){var i="",t=n*a,s=t+a;n==m-1?i=e.name.substring(t):i=e.name.substring(t,s)+`
`,r+=i}else r=e.name;return r},show:!0,textStyle:{fontSize:o.fontSize,fontFamily:"Microsoft YaHei",color:"#FFFFFF",fontWeight:"bold",opacity:1}}},itemStyle:{normal:{color:new echarts.graphic.RadialGradient(.5,.5,1,[{offset:.2,color:"rgba(27, 54, 72, 0.3)"},{offset:1,color:o.color}]),opacity:1,borderWidth:1,borderColor:o.color}}})}),option={backgroundColor:"rgba(36, 130, 160, 1)",grid:{show:!1,top:10,bottom:10},xAxis:[{gridIndex:0,type:"value",show:!1,min:0,max:100,nameLocation:"middle",nameGap:5}],yAxis:[{gridIndex:0,min:0,show:!1,max:100,nameLocation:"middle",nameGap:30}],series:[{type:"scatter",symbol:"circle",symbolSize:120,label:{normal:{show:!0,formatter:"{b}",color:"#fff",textStyle:{fontSize:"20"}}},animationDurationUpdate:500,animationEasingUpdate:500,animationDelay:function(o){return o*100},data}]};