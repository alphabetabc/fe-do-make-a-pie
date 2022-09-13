function randomData(){return Math.round(Math.random()*100)}var data=[{name:"齐齐哈尔"},{name:"盐城"},{name:"青岛"},{name:"金昌"},{name:"泉州"},{name:"拉萨"},{name:"上海浦东"},{name:"攀枝花"},{name:"威海"},{name:"承德"},{name:"汕尾"},{name:"克拉玛依"},{name:"重庆市"},{name:"北京市"}],geoCoordMap={齐齐哈尔:[123.97,47.33],盐城:[120.13,33.38],青岛:[120.33,36.07],金昌:[102.188043,38.520089],泉州:[118.58,24.93],拉萨:[91.11,29.97],上海浦东:[121.48,31.22],攀枝花:[101.718637,26.582347],威海:[122.1,37.5],承德:[117.93,40.97],汕尾:[115.375279,22.786211],克拉玛依:[84.77,45.59],重庆市:[108.384366,30.439702],北京市:[116.4551,40.2539]},planePath="path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",dataFrom="北京市";myChart.setOption({series:[{type:"map",map:"china"}]});var convertData=function(a){for(var t=[],e=0;e<a.length;e++){var n=geoCoordMap[a[e].name];n&&t.push({name:a[e].name,value:n.concat(a[e].value)})}return t};option={title:{text:"中国大区分布图",subtext:"中国的八大区分布",itemGap:30,left:"center",textStyle:{color:"#1a1b4e",fontStyle:"normal",fontWeight:"bold",fontSize:30},subtextStyle:{color:"#58d9df",fontStyle:"normal",fontWeight:"bold",fontSize:16}},tooltip:{trigger:"item"},visualMap:{min:0,max:100,left:"left",top:"bottom",text:["高","低"],calculable:!0,inRange:{color:["#ffffff","#E0DAFF","#ADBFFF","#9CB4FF","#6A9DFF","#3889FF"]}},toolbox:{show:!0,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},geo:{map:"china",zoom:1.2,label:{normal:{show:!0,color:"#c1c4c8"},emphasis:{show:!1,color:"#292929"}},roam:!0,itemStyle:{normal:{areaColor:"#fbfbfb",borderColor:"#b9b4b7"},emphasis:{areaColor:"#05ff09"}}},series:[{name:"北京市",type:"lines",zlevel:2,symbolSize:10,effect:{show:!0,period:6,symbol:planePath,trailLength:0,symbolSize:15},lineStyle:{normal:{color:"#c60fff",width:2,opacity:.5,curveness:.2}},data:data.map(function(a){return{fromName:dataFrom,toName:a.name,coords:[geoCoordMap[dataFrom],geoCoordMap[a.name]]}})},{name:"供需占比",type:"effectScatter",coordinateSystem:"geo",data:convertData(data),symbolSize:8,showEffectOn:"render",rippleEffect:{scale:5,brushType:"stroke"},hoverAnimation:!0,label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#c60fff",shadowBlur:20,shadowColor:"#333"}}},{type:"map",mapType:"china",geoIndex:0,label:{normal:{show:!0},emphasis:{show:!0}},data:[{name:"北京",value:randomData()},{name:"天津",value:randomData()},{name:"上海",value:randomData()},{name:"重庆",value:randomData()},{name:"河北",value:randomData()},{name:"河南",value:randomData()},{name:"云南",value:randomData()},{name:"辽宁",value:randomData()},{name:"黑龙江",value:randomData()},{name:"湖南",value:randomData()},{name:"安徽",value:randomData()},{name:"山东",value:randomData()},{name:"新疆",value:randomData()},{name:"江苏",value:randomData()},{name:"浙江",value:randomData()},{name:"江西",value:randomData()},{name:"湖北",value:randomData()},{name:"广西",value:randomData()},{name:"甘肃",value:randomData()},{name:"山西",value:randomData()},{name:"内蒙古",value:randomData()},{name:"陕西",value:randomData()},{name:"吉林",value:randomData()},{name:"福建",value:randomData()},{name:"贵州",value:randomData()},{name:"广东",value:randomData()},{name:"青海",value:randomData()},{name:"西藏",value:randomData()},{name:"四川",value:randomData()},{name:"宁夏",value:randomData()},{name:"海南",value:randomData()},{name:"台湾",value:randomData()},{name:"香港",value:randomData()},{name:"澳门",value:randomData()}]}]},myChart.setOption(option),myChart.on("mouseover",function(a){var t=a.name;(t=="广东"||t=="广西"||t=="海南")&&(myChart.dispatchAction({type:"highlight",name:"广东"}),myChart.dispatchAction({type:"highlight",name:"广西"}),myChart.dispatchAction({type:"highlight",name:"海南"})),(t=="山东"||t=="江苏"||t=="浙江"||t=="安徽"||t=="福建"||t=="上海")&&(myChart.dispatchAction({type:"highlight",name:"山东"}),myChart.dispatchAction({type:"highlight",name:"江苏"}),myChart.dispatchAction({type:"highlight",name:"浙江"}),myChart.dispatchAction({type:"highlight",name:"安徽"}),myChart.dispatchAction({type:"highlight",name:"福建"}),myChart.dispatchAction({type:"highlight",name:"上海"})),(t=="湖北"||t=="湖南"||t=="河南"||t=="江西")&&(myChart.dispatchAction({type:"highlight",name:"湖北"}),myChart.dispatchAction({type:"highlight",name:"湖南"}),myChart.dispatchAction({type:"highlight",name:"河南"}),myChart.dispatchAction({type:"highlight",name:"江西"})),(t=="北京"||t=="天津"||t=="河北"||t=="山西"||t=="内蒙古")&&(myChart.dispatchAction({type:"highlight",name:"北京"}),myChart.dispatchAction({type:"highlight",name:"天津"}),myChart.dispatchAction({type:"highlight",name:"河北"}),myChart.dispatchAction({type:"highlight",name:"山西"}),myChart.dispatchAction({type:"highlight",name:"内蒙古"})),(t=="宁夏"||t=="新疆"||t=="青海"||t=="陕西"||t=="甘肃")&&(myChart.dispatchAction({type:"highlight",name:"宁夏"}),myChart.dispatchAction({type:"highlight",name:"新疆"}),myChart.dispatchAction({type:"highlight",name:"青海"}),myChart.dispatchAction({type:"highlight",name:"陕西"}),myChart.dispatchAction({type:"highlight",name:"甘肃"})),(t=="四川"||t=="云南"||t=="贵州"||t=="西藏"||t=="重庆")&&(myChart.dispatchAction({type:"highlight",name:"四川"}),myChart.dispatchAction({type:"highlight",name:"云南"}),myChart.dispatchAction({type:"highlight",name:"贵州"}),myChart.dispatchAction({type:"highlight",name:"西藏"}),myChart.dispatchAction({type:"highlight",name:"重庆"})),(t=="辽宁"||t=="吉林"||t=="黑龙江")&&(myChart.dispatchAction({type:"highlight",name:"辽宁"}),myChart.dispatchAction({type:"highlight",name:"吉林"}),myChart.dispatchAction({type:"highlight",name:"黑龙江"})),(t=="台湾"||t=="香港"||t=="澳门")&&(myChart.dispatchAction({type:"highlight",name:"台湾"}),myChart.dispatchAction({type:"highlight",name:"香港"}),myChart.dispatchAction({type:"highlight",name:"澳门"}))}),myChart.on("mouseout",function(a){var t=a.name;(t=="广东"||t=="广西"||t=="海南")&&(myChart.dispatchAction({type:"downplay",name:"广东"}),myChart.dispatchAction({type:"downplay",name:"广西"}),myChart.dispatchAction({type:"downplay",name:"海南"})),(t=="山东"||t=="江苏"||t=="浙江"||t=="安徽"||t=="福建"||t=="上海")&&(myChart.dispatchAction({type:"downplay",name:"山东"}),myChart.dispatchAction({type:"downplay",name:"江苏"}),myChart.dispatchAction({type:"downplay",name:"浙江"}),myChart.dispatchAction({type:"downplay",name:"安徽"}),myChart.dispatchAction({type:"downplay",name:"福建"}),myChart.dispatchAction({type:"downplay",name:"上海"})),(t=="湖北"||t=="湖南"||t=="河南"||t=="江西")&&(myChart.dispatchAction({type:"downplay",name:"湖北"}),myChart.dispatchAction({type:"downplay",name:"湖南"}),myChart.dispatchAction({type:"downplay",name:"河南"}),myChart.dispatchAction({type:"downplay",name:"江西"})),(t=="北京"||t=="天津"||t=="河北"||t=="山西"||t=="内蒙古")&&(myChart.dispatchAction({type:"downplay",name:"北京"}),myChart.dispatchAction({type:"downplay",name:"天津"}),myChart.dispatchAction({type:"downplay",name:"河北"}),myChart.dispatchAction({type:"downplay",name:"山西"}),myChart.dispatchAction({type:"downplay",name:"内蒙古"})),(t=="宁夏"||t=="新疆"||t=="青海"||t=="陕西"||t=="甘肃")&&(myChart.dispatchAction({type:"downplay",name:"宁夏"}),myChart.dispatchAction({type:"downplay",name:"新疆"}),myChart.dispatchAction({type:"downplay",name:"青海"}),myChart.dispatchAction({type:"downplay",name:"陕西"}),myChart.dispatchAction({type:"downplay",name:"甘肃"})),(t=="四川"||t=="云南"||t=="贵州"||t=="西藏"||t=="重庆")&&(myChart.dispatchAction({type:"downplay",name:"四川"}),myChart.dispatchAction({type:"downplay",name:"云南"}),myChart.dispatchAction({type:"downplay",name:"贵州"}),myChart.dispatchAction({type:"downplay",name:"西藏"}),myChart.dispatchAction({type:"downplay",name:"重庆"})),(t=="辽宁"||t=="黑龙江"||t=="吉林")&&(myChart.dispatchAction({type:"downplay",name:"辽宁"}),myChart.dispatchAction({type:"downplay",name:"黑龙江"}),myChart.dispatchAction({type:"downplay",name:"吉林"})),(t=="台湾"||t=="香港"||t=="澳门")&&(myChart.dispatchAction({type:"downplay",name:"台湾"}),myChart.dispatchAction({type:"downplay",name:"香港"}),myChart.dispatchAction({type:"downplay",name:"澳门"}))});
