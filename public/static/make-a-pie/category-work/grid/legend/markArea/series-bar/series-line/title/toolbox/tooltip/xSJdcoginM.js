option={title:[{text:"美国储蓄、投资和经常账户赤字",left:"center"},{subtext:`这个图反映的是储蓄缺口（两根折线
之间的阴影部分）和净出口的关系
`,subtextStyle:{fontStyle:"bold"},left:80,top:100}],tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{orient:"vertical",left:"left",data:["投资","储蓄","经常账户赤字"]},grid:{left:"3%",right:"4%",top:"20%",bottom:"3%",containLabel:!0},toolbox:{show:!0,feature:{saveAsImage:{}}},xAxis:{type:"category",data:[1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2e3,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016]},yAxis:{type:"value",name:"千亿美元",axisLabel:{formatter:"{value}"},axisPointer:{snap:!0}},series:[{name:"投资",type:"line",label:{normal:{show:!0,position:"top"}},lineStyle:{normal:{type:"dashed"}},data:[12.84,12.38,13.09,13.99,15.51,16.25,17.52,19.25,20.77,22.53,24.24,23.42,23.69,24.93,27.65,30.41,32.33,32.36,30.59,25.25,27.53,28.78,31.26,32.99,35.11,37.02,36.67]},{name:"储蓄",type:"line",stack:"总量",smooth:!0,label:{normal:{show:!0,position:"bottom"}},data:[12.06,12.1,12.74,13.34,14.58,15.35,16.56,18.23,19.14,19.96,20.48,19.74,19.42,19.9,21.46,23.2,24.62,25.17,23.36,21.3,22.4,22.98,25.6,28.07,30.36,31.78,31.46],markArea:{data:[[{name:"金融危机",xAxis:"2006"},{xAxis:"2009"}]],label:{normal:{show:!0,fontSize:15,fontWeight:"bold",color:"#2f4554"}},itemStyle:{normal:{color:"#61a0a8",opacity:.2}}}},{name:"储蓄缺口",type:"line",smooth:!0,stack:"总量",areaStyle:{normal:{color:"green",opacity:.1}},lineStyle:{normal:{type:"dashed",color:"rgba(0,0,0,0)"}},data:[.78,.28,.35,.65,.93,.9,.96,1.02,1.63,2.57,3.76,3.68,4.27,5.03,6.19,7.21,7.71,7.19,7.23,3.95,5.13,5.8,5.66,4.92,4.75,5.24,5.21]},{name:"经常账户赤字",type:"bar",label:{normal:{show:!0,position:"top"}},itemStyle:{normal:{color:"green",opacity:.6}},data:[.79,.03,.52,.85,1.22,1.14,1.25,1.41,2.15,2.88,4.03,3.9,4.51,5.19,6.32,7.45,8.06,7.11,6.81,3.73,4.31,4.45,4.26,3.5,3.74,4.35,4.52]}]};
