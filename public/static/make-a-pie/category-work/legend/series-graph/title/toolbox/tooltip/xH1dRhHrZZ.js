for(var data=["文艺","人文社科","经管","励志","科技","生活"],c=[],m=[],n=[],l=[800,700,750,850,1e3,1200],a=["星星上的人","心无挂碍","解忧杂货店","小王子","次第花开","老人与海","影响力","金字塔原理","阿米巴经营","断舍离","非暴力沟通","人性的弱点营","时间重生","虚空：宇宙源起何处","无限之书：从宇宙边","太空之眼 : 哈勃","肌肉健美训练图解","如果可以去流浪","孤独星球","最好的时光在路上"],d=[280,220,300,200,240,260,300,200,250,300,200,350,300,200,180,320,320,350,250,280],i=0;i<data.length;i++)c.push({name:data[i],value:l[i],symbolSize:9,category:data[i],draggable:"true"}),m.push({source:"借阅频次高的书类进行排名",target:data[i]}),n.push({name:data[i]});for(var k=0;k<a.length;k++)k<3?(c.push({name:a[k],value:d[k],symbolSize:18,category:"文艺",draggable:"true"}),m.push({source:"文艺",target:a[k]})):k<6?(c.push({name:a[k],value:d[k],symbolSize:18,category:"人文社科",draggable:"true"}),m.push({source:"人文社科",target:a[k]})):k<9?(c.push({name:a[k],value:d[k],symbolSize:18,category:"经管",draggable:"true"}),m.push({source:"经管",target:a[k]})):k<12?(c.push({name:a[k],value:d[k],symbolSize:18,category:"励志",draggable:"true"}),m.push({source:"励志",target:a[k]})):k<16?(c.push({name:a[k],value:d[k],symbolSize:18,category:"科技",draggable:"true"}),m.push({source:"科技",target:a[k]})):k<20&&(c.push({name:a[k],value:d[k],symbolSize:18,category:"生活",draggable:"true"}),m.push({source:"生活",target:a[k]}));c.push({name:"借阅频次高的书类进行排名",symbolSize:3,category:"借阅频次高的书类进行排名",draggable:"true",value:[]}),option={backgroundColor:new echarts.graphic.RadialGradient(.3,.3,.8,[{offset:0,color:"#f7f8fa"},{offset:1,color:"#cdd0d5"}]),title:{text:"书类排名"},tooltip:{},legend:[{formatter:function(e){return echarts.format.truncateText(e,40,"14px Microsoft Yahei","…")},tooltip:{show:!0},selectedMode:"false",bottom:20,data:["文艺","人文社科","经管","励志","科技","生活","音像"]}],toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!0},restore:{show:!0},saveAsImage:{show:!0}}},animationDuration:3e3,animationEasingUpdate:"quinticInOut",series:[{name:"借阅频次高的书类进行排名",type:"graph",layout:"force",force:{repulsion:50},data:c,links:m,categories:n,focusNodeAdjacency:!0,roam:!0,label:{normal:{show:!0,position:"top"}},lineStyle:{normal:{color:"source",curveness:0,type:"solid"}}}]};
