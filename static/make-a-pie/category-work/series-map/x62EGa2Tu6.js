var weatherIcons={up:"./data/asset/img/arrow-up.png",down:"./data/asset/img/arrow-down.png"};function mapTooltipClick(a){console.log(a)}option={animation:!0,animationDurationUpdate:1e3,animationEasingUpdate:"cubicInOut",series:[{type:"map",mapType:"china",roam:!0,symbol:"image://https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555990951533&di=9b6f2e190bc10d76d52d73d98a0be4d9&imgtype=0&src=http%3A%2F%2Fpic29.nipic.com%2F20130530%2F12174133_162640398000_2.jpg",symbolSize:100,label:{normal:{show:!0,formatter:function(a){for(var o="",n=option.series,e=0;e<n[0].data.length;e++)n[0].data[e].name==a.name&&(o+=`    {img1|ddd}      {img2|ccc}      {img3|ddd}   
  5个      3个        2个 `);return o},position:"inside",backgroundColor:{image:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555954951870&di=11f835f33261dccc2f8db30529c05367&imgtype=0&src=http%3A%2F%2Fpic.qiushibaike.com%2Fsystem%2Favtnew%2F1006%2F10067419%2Fmedium%2Fdefault_avatar.jpg"},padding:[5,5],borderRadius:5,borderWidth:2,borderColor:"rgba(255,0,0,0.5)",color:"#777",fontSize:9,rich:{img1:{backgroundColor:{},color:"red"},img2:{backgroundColor:{},color:"#fff"},img3:{backgroundColor:{},color:"#ddd"},valueUp:{color:"#019D2D",fontSize:12},valueDown:{color:"#019D2D",fontSize:12},up:{height:14,align:"center",backgroundColor:{image:weatherIcons.up}},down:{height:14,align:"center",backgroundColor:{image:weatherIcons.down}}}},emphasis:{show:!0}},data:[{name:"北京",value:10},{name:"天津",value:10},{name:"上海",value:10},{name:"重庆",value:10},{name:"河北",value:10},{name:"河南",value:10},{name:"云南",value:10},{name:"辽宁",value:10},{name:"黑龙江",value:10},{name:"湖南",value:10},{name:"安徽",value:10},{name:"山东",value:10},{name:"新疆",value:10},{name:"江苏",value:10},{name:"浙江",value:10},{name:"江西",value:10},{name:"湖北",value:10},{name:"广西",value:10},{name:"甘肃",value:10},{name:"山西",value:10},{name:"内蒙古",value:10},{name:"陕西",value:10},{name:"吉林",value:10},{name:"福建",value:10},{name:"贵州",value:10},{name:"广东",value:10},{name:"青海",value:10},{name:"西藏",value:10},{name:"四川",value:10},{name:"宁夏",value:10},{name:"海南",value:10},{name:"台湾",value:10},{name:"香港",value:10},{name:"澳门",value:10}],itemStyle:{normal:{borderColor:"#fefefe",areaColor:"#179125",borderWidth:1,show:!0},emphasis:{areaColor:"#179125",color:"#179125",borderWidth:2,show:!0}}}]};function randomData(){return[Math.round(Math.random()*1e3),Math.random()>.6]}
