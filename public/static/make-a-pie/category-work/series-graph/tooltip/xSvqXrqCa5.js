var dataArr=[{id:1,applicationName:"service",startTime:"2021-08-04T08:12:00.000+0800",status:1,runTime:"2day5h",value:2},{id:2,applicationName:"voucher",startTime:"2021-08-06T00:57:00.000+0800",status:0,runTime:"0day12h",value:2},{id:3,applicationName:"file",startTime:"2021-08-05T10:35:00.000+0800",status:0,runTime:"1day3h",value:2},{id:4,applicationName:"finance-conf",startTime:"2021-08-01T10:35:00.000+0800",status:0,runTime:"5day3h",value:2},{id:5,applicationName:"sms",startTime:"2021-07-29T02:31:00.000+0800",status:0,runTime:"8day11h",value:2},{id:6,applicationName:"bookkeeping",startTime:"2021-08-01T10:35:00.000+0800",status:0,runTime:"5day3h",value:2},{id:7,applicationName:"gateway",startTime:"2021-08-01T10:13:00.000+0800",status:0,runTime:"5day3h",value:2},{id:8,applicationName:"sequence",startTime:"2021-07-01T05:42:00.000+0800",status:0,runTime:"36day8h",value:2},{id:9,applicationName:"job",startTime:"2021-07-26T02:54:00.000+0800",status:0,runTime:"11day10h",value:2},{id:10,applicationName:"cdic",startTime:"2021-07-27T02:54:00.000+0800",status:0,runTime:"10day10h",value:2},{id:11,applicationName:"iftp-agency-company",startTime:"2021-08-01T10:13:00.000+0800",status:0,runTime:"5day3h",value:2},{id:12,applicationName:"base-invoice",startTime:"2021-08-01T01:24:00.000+0800",status:0,runTime:"5day12h",value:2},{id:13,applicationName:"itp-company",startTime:"2021-08-01T02:51:00.000+0800",status:0,runTime:"5day10h",value:2},{id:14,applicationName:"cep-company",startTime:"2021-07-29T05:36:00.000+0800",status:0,runTime:"8day8h",value:2},{id:15,applicationName:"cp-gateway",startTime:"2021-07-27T09:42:00.000+0800",status:0,runTime:"10day4h",value:2},{id:16,applicationName:"base-ocr",startTime:"2021-07-22T09:46:00.000+0800",status:0,runTime:"15day3h",value:2},{id:17,applicationName:"ifp-report",startTime:"2021-08-02T10:14:00.000+0800",status:0,runTime:"4day3h",value:2},{id:18,applicationName:"ce-auth",startTime:"2021-08-03T02:53:00.000+0800",status:0,runTime:"3day10h",value:2},{id:19,applicationName:"adin-server",startTime:"2021-05-27T09:49:00.000+0800",status:0,runTime:"71day3h",value:2},{id:20,applicationName:"bse-icinfo",startTime:"2021-07-14T06:40:00.000+0800",status:0,runTime:"23day7h",value:2},{id:21,applicationName:"cep-loan",startTime:"2021-08-03T08:58:00.000+0800",status:0,runTime:"3day4h",value:2},{id:22,applicationName:"cep-statistics",startTime:"2021-08-06T10:28:00.000+0800",status:0,runTime:"0day3h",value:2},{id:23,applicationName:"bae-tax",startTime:"2021-08-05T08:35:00.000+0800",status:0,runTime:"1day5h",value:2},{id:24,applicationName:"itp-auth",startTime:"2021-08-01T08:12:00.000+0800",status:0,runTime:"5day5h",value:2}];let newData=dataArr.map(a=>(a.name=a.applicationName.slice(0,1)+".."+a.applicationName.slice(a.applicationName.indexOf("-")+1,a.applicationName.indexOf("-")+2),a.symbolSize=80,a.draggable=!0,a.itemStyle={normal:{color:a.status==0?"#0B6941":"#CA2917"}},a));option={backgroundColor:"rgba(14, 26, 64, 1)",label:{fontSize:20},tooltip:{trigger:"item",padding:1,formatter:a=>{let i="<div>";return i+=`<div style="width:140px;font-size:12px;white-space:normal;padding:4px 10px;background-color:${a.color};">`,i+=`<div style="color:#fff;opacity:0.5;;font-size:12px;">${a.data.runTime}</div>`,i+=`<div style="color:#fff;font-size:16px">${a.data.applicationName}</div>`,i+=`<div style="color:#fff;opacity:0.5;;font-size:12px;">${a.data.value}个实例</div>`,i+="</div>",i+="</div>",i}},animationDurationUpdate:function(a){return a*6},series:[{type:"graph",layout:"force",force:{repulsion:200,edgeLength:0},roam:!0,label:{normal:{show:!0}},data:newData}]};