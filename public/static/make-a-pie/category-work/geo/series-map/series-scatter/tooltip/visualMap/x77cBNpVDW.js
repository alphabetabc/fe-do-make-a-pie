var data=[{name:"北京移动数据中心-马连道机房",value:["116.489356","39.94083"],date:"2019-10-01",city:"北京市"}],data2=[{name:"北京",value:177},{name:"天津",value:42},{name:"河北",value:102},{name:"山西",value:81},{name:"内蒙古",value:47},{name:"辽宁",value:67},{name:"吉林",value:82},{name:"黑龙江",value:66},{name:"上海",value:24},{name:"江苏",value:92},{name:"浙江",value:114},{name:"安徽",value:109},{name:"福建",value:116},{name:"江西",value:91},{name:"山东",value:119},{name:"河南",value:137},{name:"湖北",value:116},{name:"湖南",value:114},{name:"重庆",value:91},{name:"四川",value:125},{name:"贵州",value:62},{name:"云南",value:83},{name:"西藏",value:9},{name:"陕西",value:80},{name:"甘肃",value:56},{name:"青海",value:10},{name:"宁夏",value:18},{name:"新疆",value:67},{name:"广东",value:123},{name:"广西",value:59},{name:"海南",value:14}];option={backgroundColor:"#efefef",tooltip:{show:!0,trigger:"item",triggerOn:"click",padding:0,enterable:!0,transitionDuration:1,textStyle:{color:"#000",decoration:"none"},formatter:function(e){console.log(e);const{data:a}=e,t=a.type;let o="数据中心";return` <div style="width: 280px; background: rgba(22, 80, 158, 0.8); border: 1px solid rgba(7, 166, 255, 0.7);">
                                <div style="color: #fff; padding: 10px; font-size: 16px; border-bottom: 2px solid #0c8bdd;">${a.name}</div>
                                <p style="color: #fff;padding: 5px 10px;font-size: 14px;">建设位置：${a.city}</p>
                                <p style="color: #fff;padding: 5px 10px;font-size: 14px;">建设时间：${a.date}</p>
                                <p style="color: #fff;padding: 5px 10px;font-size: 14px;">设施类型：${o}</p>
                              </div>`}},visualMap:{show:!0,min:0,max:200,left:"left",top:"bottom",text:["高","低"],calculable:!0,seriesIndex:[1],inRange:{color:["#00467F","#A5CC82"]}},geo:{show:!0,map:"china",label:{normal:{show:!0,color:"#fff"},emphasis:{color:"#000000",fontSize:14,show:!0}},roam:!0,scaleLimit:{min:1.2,max:15},zoom:1.2,itemStyle:{normal:{borderWidth:1,borderColor:"#029fd4",areaColor:"#2F639A"},emphasis:{areaColor:"#2F639A"}}},series:[{name:"散点",type:"scatter",coordinateSystem:"geo",data,symbol:"pin",symbolSize:30,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{color:"#33C481"},emphasis:{color:"#f00"}}},{type:"map",map:"china",geoIndex:0,aspectScale:.75,showLegendSymbol:!1,label:{normal:{show:!0},emphasis:{show:!1,textStyle:{color:"#fff"}}},roam:"scale",itemStyle:{normal:{areaColor:"#031525",borderColor:"#3B5077"},emphasis:{areaColor:"#2B91B7"}},animation:!1,data:data2}]},myChart.on("click",e=>{if(e.componentType==="series"&&e.componentSubType==="scatter"){const a=e.dataIndex;myChart.dispatchAction({type:"downplay",seriesIndex:0}),myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:a})}});
