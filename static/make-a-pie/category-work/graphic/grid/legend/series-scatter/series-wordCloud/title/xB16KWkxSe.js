var rightBook="/asset/get/s/data-1483080241722-ry5VfFmrx.png",leftBook="/asset/get/s/data-1483080235153-ByX4GFQrx.png",bookBg="/asset/get/s/data-1483079771848-B1VDlK7Bx.png",tagsAll="/asset/get/s/data-1482907856060-SJ_0x1brx.json",tagsRead="/asset/get/s/data-1482907801586-BJzsgkbrl.json",colors=["#555","#fff"];option={title:{text:"羡辙豆瓣读书 tag",bottom:0,left:"center"},series:[{type:"wordCloud",gridSize:20,sizeRange:[12,45],rotationRange:[0,0],shape:"circle",data:[],left:50,width:"45%",top:60,height:"72%",textStyle:{normal:{color:"#555"},emphasis:{color:"#109b85"}}},{type:"wordCloud",gridSize:20,sizeRange:[12,45],rotationRange:[0,0],shape:"circle",data:[],left:"52%",width:"45%",top:60,height:"72%",textStyle:{normal:{color:colors[1]},emphasis:{color:"#109b85"}}},{type:"scatter",data:[],color:[colors[0]],name:"所有读过想读的书"},{type:"scatter",data:[],color:[colors[1]],name:"2016读过的书"}],legend:{data:["所有读过想读的书","2016读过的书"],show:!0},xAxis:{type:"value",show:!1},yAxis:{type:"value",show:!1},graphic:{elements:[{type:"image",style:{image:bookBg,width:window.innerWidth-60,x:30,y:40,height:window.innerHeight-100}}]}};var tagsAllData=[],tagsReadData=[];$.getJSON(tagsAll,function(a){for(var e in a)tagsAllData.push({name:e,value:a[e]});$.getJSON(tagsRead,function(t){for(var o in t)tagsReadData.push({name:o,value:t[o]});loadImage()})});function loadImage(){var a=new Image;a.onload=o,a.src=leftBook;var e=new Image;e.onload=o,e.src=rightBook;var t=0;function o(){++t,t===2&&(console.log(myChart),myChart.setOption({series:[{maskImage:a,data:tagsAllData},{maskImage:e,data:tagsReadData}]}))}}