for(var dy=[-361363.453,-284805.14,341953621e-2,187901976e-2,188747.16,186319912e-2,327007.32,485804.15,-18326.19,179925208e-2,835435.97,490270.26],zt=[],label=[],i=0;i<dy.length;i++){var obj=[];if(i===0){var x=parseFloat(dy[i]);x<0?label.push({value:dy[i],coord:[i,x],label:{position:"bottom",show:!0,fontSize:10,color:"green"}}):label.push({value:dy[i],coord:[i,x]}),obj.push(0),obj.push(dy[i]),obj.push(dy[i]),obj.push(dy[i]),zt.push(obj)}else{var start=zt[i-1][1],val=parseFloat(dy[i]),end=start+val;dy[i]<0?label.push({value:dy[i],coord:[i,end],label:{position:"bottom",show:!0,fontSize:10,color:"green"}}):label.push({value:dy[i],coord:[i,end]}),obj.push(start),obj.push(end),obj.push(end),obj.push(end),zt.push(obj)}}option={title:{text:"阶梯瀑布图",textStyle:{color:"blue",fontWeight:"bold"},subtextStyle:{color:"#aaa",fontStyle:"italic"},left:"center"},xAxis:{data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{type:"value",scale:!0},series:[{type:"candlestick",data:zt,itemStyle:{color:"red",color0:"green",borderWidth:0},markPoint:{symbol:"rect",symbolSize:1e-15,label:{show:!0,color:"red",position:"top",fontSize:10,formatter:function(e){return e.data.value}},data:label},emphasis:{itemStyle:{borderWidth:0}}}]};