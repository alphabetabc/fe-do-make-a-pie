for(var colors=["#FFAE57","#FF7853","#EA5151","#CC3F57","#9A2555"],bgColor="#2E2733",itemStyle={star5:{color:colors[0]},star4:{color:colors[1]},star3:{color:colors[2]},star2:{color:colors[3]}},data=[{name:"对公收入条线",itemStyle:{color:colors[1]},children:[{name:"对公中收",children:[{name:"5☆",children:[{name:"疼"},{name:"慈悲"},{name:"楼下的房客"}]},{name:"4☆",children:[{name:"虚无的十字架"},{name:"无声告白"},{name:"童年的终结"}]},{name:"3☆",children:[{name:"疯癫老人日记"}]}]},{name:"其他",children:[{name:"5☆",children:[{name:"纳博科夫短篇小说全集"}]},{name:"4☆",children:[{name:"安魂曲"},{name:"人生拼图版"}]},{name:"3☆",children:[{name:"比起爱你，我更需要你"}]}]}]},{name:"非虚构",itemStyle:{color:colors[2]},children:[{name:"设计",children:[{name:"5☆",children:[{name:"无界面交互"}]},{name:"4☆",children:[{name:"数字绘图的光照与渲染技术"},{name:"日本建筑解剖书"}]},{name:"3☆",children:[{name:`奇幻世界艺术
&RPG地图绘制讲座`}]}]},{name:"社科",children:[{name:"5☆",children:[{name:"痛点"}]},{name:"4☆",children:[{name:"卓有成效的管理者"},{name:"进化"},{name:"后物欲时代的来临"}]},{name:"3☆",children:[{name:"疯癫与文明"}]}]},{name:"心理",children:[{name:"5☆",children:[{name:"我们时代的神经症人格"}]},{name:"4☆",children:[{name:"皮格马利翁效应"},{name:"受伤的人"}]},{name:"3☆"},{name:"2☆",children:[{name:"迷恋"}]}]},{name:"居家",children:[{name:"4☆",children:[{name:"把房子住成家"},{name:"只过必要生活"},{name:"北欧简约风格"}]}]},{name:"绘本",children:[{name:"5☆",children:[{name:"设计诗"}]},{name:"4☆",children:[{name:"假如生活糊弄了你"},{name:"博物学家的神秘动物图鉴"}]},{name:"3☆",children:[{name:"方向"}]}]},{name:"哲学",children:[{name:"4☆",children:[{name:"人生的智慧"}]}]},{name:"技术",children:[{name:"5☆",children:[{name:"代码整洁之道"}]},{name:"4☆",children:[{name:"Three.js 开发指南"}]}]}]}],j=0;j<data.length;++j)for(var level1=data[j].children,i=0;i<level1.length;++i){for(var block=level1[i].children,bookScore=[],bookScoreId,star=0;star<block.length;++star){var style=function(e){switch(e){case"5☆":return bookScoreId=0,itemStyle.star5;case"4☆":return bookScoreId=1,itemStyle.star4;case"3☆":return bookScoreId=2,itemStyle.star3;case"2☆":return bookScoreId=3,itemStyle.star2}}(block[star].name);block[star].label={color:style.color,downplay:{opacity:.5}},block[star].children&&(style={opacity:1,color:style.color},block[star].children.forEach(function(e){e.value=1,e.itemStyle=style,e.label={color:style.color};var n=1;(bookScoreId===0||bookScoreId===3)&&(n=5),bookScore[bookScoreId]?bookScore[bookScoreId].value+=n:bookScore[bookScoreId]={color:colors[bookScoreId],value:n}}))}level1[i].itemStyle={color:data[j].itemStyle.color}}option={backgroundColor:bgColor,color:colors,series:[{type:"sunburst",center:["50%","48%"],data,sort:function(e,n){return e.depth===1?n.getValue()-e.getValue():e.dataIndex-n.dataIndex},label:{rotate:"radial",color:bgColor},itemStyle:{borderColor:bgColor,borderWidth:2},levels:[{},{r0:0,r:40,label:{rotate:0}},{r0:40,r:105},{r0:115,r:140,itemStyle:{shadowBlur:2,shadowColor:colors[2],color:"transparent"},label:{rotate:"tangential",fontSize:10,color:colors[0]}},{r0:140,r:145,itemStyle:{shadowBlur:80,shadowColor:colors[0]},label:{position:"outside",textShadowBlur:5,textShadowColor:"#333"},downplay:{label:{opacity:.5}}}]}]};
