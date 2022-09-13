var titleDatas=[`机 动
车交
通 违
法 监
控 抓
拍 位
置 信
息`,`道 路
客 运
企 业
信 息`,`文 化
设 施
名 录`,`特 色
产 业
（广 东
省 专
业 镇
信 息）`,`企 业
驰 名
商 标
及 著
名 商
标 信
息`,`水 雨
情 信
息`,`高 管
人 员
信 息`,`商 事
主 体
基 础
信 息`,`市 人
口 规
模 及
分 布
情 况
（年 度）`,`地 税
税 务
登 记
信 息`],cityName=["北京"],nowDatas=[[0,0,123],[0,1,103],[0,2,101],[0,3,80],[0,4,85],[0,5,70],[0,6,60],[0,7,55],[0,8,50],[0,9,40]];option={title:[],singleAxis:[],series:[],backgroundColor:"#013d5a"},echarts.util.each(cityName,function(n,i){option.singleAxis.push({type:"category",boundaryGap:!1,data:titleDatas,top:"26%",height:100/5-19+"%",left:"6%",axisLabel:{interval:0,margin:30,color:"#fff",fontSize:18},axisLine:{lineStyle:{color:"#fff"}},axisTick:{lineStyle:{color:"#fff"}}}),option.series.push({singleAxisIndex:i,coordinateSystem:"singleAxis",type:"scatter",label:{normal:{show:!1,position:"top"}},itemStyle:{normal:{color:function(e){var a=["#9cb3e2","rgba(215,205,251,0.9)","#e2b6e4","#e2b9a7","#dabd73","#dbd586","#d1eb98","#a2e27c","#48d8a9","#00ecee"],t=a.length;return a[e.dataIndex%t]}}},data:[],symbolSize:function(e){return e[1]*.5}})}),echarts.util.each(nowDatas,function(n){option.series[n[0]].data.push([n[1],n[2]])});
