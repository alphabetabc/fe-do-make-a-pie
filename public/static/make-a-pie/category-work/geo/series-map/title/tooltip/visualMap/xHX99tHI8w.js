var allData=[{name:"北京",value:18.174},{name:"天津",value:18.174},{name:"河北",value:18.174},{name:"山西",value:18.174},{name:"内蒙古",value:18.174},{name:"安徽",value:17.296},{name:"上海",value:17.296},{name:"江苏",value:17.296},{name:"浙江",value:17.296},{name:"江西",value:17.296},{name:"福建",value:17.296},{name:"山东",value:17.296},{name:"河南",value:16.757},{name:"湖北",value:16.757},{name:"湖南",value:16.757},{name:"广东",value:16.68},{name:"广西",value:16.68},{name:"海南",value:16.68},{name:"陕西",value:18.084},{name:"甘肃",value:18.084},{name:"宁夏",value:18.084},{name:"青海",value:18.084},{name:"新疆",value:18.084},{name:"黑龙江",value:16.557},{name:"吉林",value:16.557},{name:"辽宁",value:16.557},{name:"云南",value:16.565},{name:"重庆",value:16.565},{name:"四川",value:16.565},{name:"西藏",value:16.565},{name:"贵州",value:16.565}];loadMap("/asset/get/s/data-1527045631990-r1dZ0IM1X.json","china");var timeFn=null;function loadMap(t,a){$.get(t,function(l){if(l){echarts.registerMap(a,l);var u={tooltip:{show:!0,formatter:function(e){if(e.data)return e.name+"："+e.data.value}},visualMap:{min:0,max:1e3,left:26,bottom:40,showLabel:!0,pieces:[{gt:28,label:"高质量",color:"#b7d6f3"},{gt:18,lte:28,label:"中质量",color:"#3598c1"},{gte:13,lte:18,label:"中低质量",color:"#b7d6f3"},{gt:0,lt:13,label:"低质量",color:"#edfbfb"}],show:!0},series:[{name:"MAP",type:"map",mapType:a,data:allData,selectedMode:"false",label:{normal:{show:!0,formatter:function(e){var n="";return e&&e.name&&e.value&&(n="{a|"+e.name+`}
{b|`+e.value+"}"),n},rich:{a:{},b:{fontFamily:"Microsoft YaHei",fontSize:14,width:16,height:16,textAlign:"center",padding:4}}},emphasis:{show:!1}}}]};myChart.setOption(u)}else alert("无法加载该地图")})}