var data=[{name:"钓鱼",children:[{name:"政府",value:6},{name:"金融",value:1},{name:"科研",value:1}]},{name:"病毒",children:[{name:"教育",value:2},{name:"媒体",value:1},{name:"科研",value:1}]},{name:"APT攻击",children:[{name:"政府",value:3},{name:"金融",children:[{name:"银行",value:3},{name:"证券",value:1}]}]},{name:"DDOS攻击",children:[{name:"教育",value:5},{name:"科研",value:3},{name:"金融",value:2}]}],modes=["2012Budget","2011Budget","Growth"];option={title:{text:"treemap drilldown",subtext:"2018/06",left:"leafDepth"},tooltip:{},series:[{name:"全部",type:"treemap",visibleMin:300,data,leafDepth:2,label:{fontSize:16,formatter:function(e){var a=[e.name,e.value+"次"];return a.join(`
`)}},levels:[{itemStyle:{normal:{borderColor:"#555",borderWidth:4,gapWidth:4}}},{colorSaturation:[.3,.6],itemStyle:{normal:{borderColorSaturation:.7,gapWidth:2,borderWidth:2}}},{colorSaturation:[.3,.5],itemStyle:{normal:{borderColorSaturation:.6,gapWidth:1}}},{colorSaturation:[.3,.5]}]}]};