window.dataList=[{name:"南海诸岛",value:0},{name:"北京",value:425e3},{name:"天津",value:68458},{name:"上海",value:6e4},{name:"重庆",value:79248},{name:"河北",value:147188},{name:"河南",value:233600},{name:"云南",value:49496},{name:"辽宁",value:119081},{name:"黑龙江",value:99126},{name:"湖南",value:122847},{name:"安徽",value:165e3},{name:"山东",value:313190},{name:"新疆",value:42597},{name:"江苏",value:249e3},{name:"浙江",value:11e4},{name:"江西",value:96505},{name:"湖北",value:162800},{name:"广西",value:53800},{name:"甘肃",value:62300},{name:"山西",value:14e4},{name:"内蒙古",value:75366},{name:"陕西",value:93661},{name:"吉林",value:80852},{name:"福建",value:58e3},{name:"贵州",value:58589},{name:"广东",value:174e3},{name:"青海",value:8829},{name:"西藏",value:3641},{name:"四川",value:174815},{name:"宁夏",value:11011},{name:"海南",value:14138},{name:"台湾",value:0},{name:"香港",value:0},{name:"澳门",value:0}],option={title:{text:"2020全国考研报考人数",subtext:"数据来源:百度百科",itemGap:30,left:"center",textStyle:{color:"#000",fontStyle:"normal",fontWeight:"bold",fontSize:30},subtextStyle:{color:"#646464",fontStyle:"normal",fontWeight:"bold",fontSize:16}},tooltip:{triggerOn:"click",formatter:function(e,a,l){return e.value==.5?e.name+"：考研报考人数":e.seriesName+"<br />"+e.name+"："+e.value}},visualMap:{min:0,max:45e4,left:20,bottom:40,showLabel:!0,text:["高","低"],pieces:[{min:24e4,label:"> 24 万人",color:"#000079"},{min:8e4,max:24e4,label:"8 - 24 万人",color:"#4A4AFF"},{min:5e3,max:8e4,label:"0.5 - 8 万人",color:"#9393FF"},{min:500,max:5e3,label:"0.05 - 0.5 万人",color:"#B9B9FF"},{max:500,label:"< 0.05 万人",color:"#C7C7E2"}],show:!0},geo:{map:"china",roam:!1,scaleLimit:{min:1,max:2},zoom:1.2,top:115,label:{normal:{show:!0,fontSize:"10",formatter:"{a}",color:"rgba(0,0,0,0.7)"}},itemStyle:{normal:{borderColor:"rgba(0, 0, 0, 0.2)"},emphasis:{areaColor:"#f2d5ad",shadowOffsetX:0,shadowOffsetY:0,borderWidth:0}}},series:[{name:"2020考研报考人数",type:"map",geoIndex:0,data:window.dataList}]};
