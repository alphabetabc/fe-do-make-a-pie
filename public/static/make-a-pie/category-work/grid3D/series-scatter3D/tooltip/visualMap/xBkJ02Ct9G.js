$.getJSON("https://api.douban.com/v2/movie/top250?count=100&callback=?",{},function(s){var i=[],c=["1990~94","1995~99","2000~04","2005~09","2010~14","2014~19"],o=f(s.subjects);function f(a){var t=[];return $.each(a,function(d,e){var r="";1990<=parseInt(e.year)&&parseInt(e.year)<=1994?r="1990~94":1995<=parseInt(e.year)&&parseInt(e.year)<=1999?r="1995~99":2e3<=parseInt(e.year)&&parseInt(e.year)<=2004?r="2000~04":2005<=parseInt(e.year)&&parseInt(e.year)<=2009?r="2005~09":2010<=parseInt(e.year)&&parseInt(e.year)<=2014?r="2010~14":2015<=parseInt(e.year)&&parseInt(e.year)<=2019&&(r="2014~19"),$.each(e.genres,function(u,n){n!="剧情"&&(i.indexOf(n)<0&&i.push(n),t.push([n,r,e.collect_count,e.rating.average,parseInt(Math.random()*8+2),e.year,e.title,n]))})}),t}function p(a){var t=0;return $.each(o,function(d,e){e.indexOf(a)>-1&&t++}),a+t}option={backgroundColor:"#333",tooltip:{formatter:function(a){var t=a.value;return"片名："+t[6]+"<br>类别："+t[0]+"<br>"}},visualMap:[{dimension:4,show:!1,min:2,max:10,top:0,inRange:{symbolSize:[10,40]}},{dimension:7,categories:i,textStyle:{color:"#fff"},formatter:function(a){return p(a)},inRange:{color:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3","#87d465","#4b949d","#744b9d","#9d4b5e","#9a9d4b","#8d4b9d","#a0b84b","#eac892","#92eadf","#abea92","#ea92a5","#abc7f1","#dfea92"]}}],xAxis3D:{type:"category",name:"类别",data:i},yAxis3D:{type:"category",name:"年代",data:c},zAxis3D:{type:"value",name:"评论人数"},grid3D:{boxWidth:220,axisLine:{lineStyle:{color:"#fff"}},axisPointer:{show:!1},viewControl:{alpha:10,beta:20,distance:200}},series:[{type:"scatter3D",name:"喜欢影片",symbolSize:20,data:o,label:{show:!0,formatter:function(a){return a.data[6]}}}]},myChart.setOption(option)});
