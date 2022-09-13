function setCatData(a,e,r){for(var t=0;t<a.length;t++)listdata.push({name:a[t],symbolSize:r||10,category:e,label:{normal:{textStyle:{color:colors[e]}}}})}function setLinkData(a,e,r){for(var t=0;t<a.length;t++)links.push({source:a[t],target:e,lineStyle:{normal:{color:r}}})}for(var legendes=["基本数据","税收数据","欠税信息","行政处罚信息","重大违法信息","增值税申报信息","缴税情况","税务信用评级","所得税年度汇算清缴","企业画像"],colors=["#72d3f9","#4185f7","#62abe1","#3060ba","#0057a6","#00a3d0","#03a7dc","#16dcdc","#2976b2","#2976b2"],texts=[],i=0;i<legendes.length;i++)texts.push({name:legendes[i],itemStyle:{normal:{color:colors[i]}}});var listdata=[],cat1=["基本数据","企业名称","社会统一信用代码","生产经营地址","纳税人状态","登记日期","生产经营地址（共管户国税为准）","法定代表人","行业类型","纳税人类型","国地最早开业（设立）日期","登记注册类型（共管户国税为准）","纳税人登记状态（共管户国税为准）","增值税最早申报日期","营业税最早申报日期"],cat2=["税收数据","所属日期起","所属日期止","应税销售收入","入库税额","入库税额（消）","入库税额（营）","入库税额（企）","减免税额（增）","减免税额（消）","减免税额（营）","减免税额（企）"],cat3=["欠税信息","经营地点","增值税欠税金额","消费税欠税金额","所得税欠税金额"],cat4=["行政处罚信息","案件名称","行政处罚类别","行政处罚结果","行政处罚事由","行政处罚依据","处罚金额","行政处罚日期","处罚截止日期","处罚机关","当前状态"],cat5=["重大违法信息","中介机构","从业人员","案件性质","主要违法事实","处罚情况"],cat6=["增值税申报信息","增值税申报信息-年度","申报月份","按适用税率计税销售额","应补退税额","按简易办法计税销售额","免、抵、退办法出口销售额","免税销售额"],cat7=["缴税情况","缴税情况-年度","属期起止","税种代码","税款种类","实缴时间","实缴税额"],cat8=["税务信用评级","信用级别","信用评级年度","信用评分分数"],cat9=["所得税年度汇算清缴","所得税年度汇算清缴-年度","汇算清缴日期","营业收入","应纳税所得额","应纳所得税额"],cat10=["企业"];setCatData(cat1,0),setCatData(cat2,1),setCatData(cat3,2),setCatData(cat4,3),setCatData(cat5,4),setCatData(cat6,5),setCatData(cat7,6),setCatData(cat8,7),setCatData(cat9,8),setCatData(cat10,9,15);var links=[];setLinkData(cat1,"基本数据",colors[0]),setLinkData(cat2,"税收数据",colors[1]),setLinkData(cat3,"欠税信息",colors[2]),setLinkData(cat4,"行政处罚信息",colors[3]),setLinkData(cat5,"重大违法信息",colors[4]),setLinkData(cat6,"增值税申报信息",colors[5]),setLinkData(cat7,"缴税情况",colors[6]),setLinkData(cat8,"税务信用评级",colors[7]),setLinkData(cat9,"所得税年度汇算清缴",colors[8]),setLinkData(legendes,"企业",colors[9]);var planePath="path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",option={backgroundColor:new echarts.graphic.RadialGradient(.4,.4,.7,[{offset:0,color:"#162436"},{offset:1,color:"#000"}]),legend:{data:legendes,textStyle:{color:"#fff"},icon:"circle",type:"scroll",orient:"vertical",left:10,top:20,bottom:20,itemWidth:10,itemHeight:10,selected:{基本数据:!1}},tooltip:{formatter:function(a){if(a.data.name)return legendes[a.data.category]+">"+a.name}},animationDurationUpdate:300,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"force",symbol:planePath,symbolSize:5,roam:!0,focusNodeAdjacency:!0,legendHoverLink:!0,draggable:!0,force:{repulsion:30,gravity:.03,edgeLength:50,layoutAnimation:!0},categories:texts,data:listdata,links,lineStyle:{normal:{opacity:.9,width:1.5,curveness:0}}}]};
