for(var oridata=[[120,132,101,134,90,230,210],[2,182,191,234,290,330,310],[150,232,201,154,190,330,410]],data0=[],data1=[],data2=[],total,i=0,l=oridata[0].length;i<l;i++)total=oridata[0][i]+oridata[1][i]+oridata[2][i],data0.push(Math.round(oridata[0][i]/total*100)),data1.push(Math.round(oridata[1][i]/total*100)),data2.push(100-data0[data0.length-1]-data1[data1.length-1]);option={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["邮件营销","联盟广告","视频广告"]},toolbox:{show:!0,orient:"vertical",x:"right",y:"center",feature:{mark:!0,dataView:{readOnly:!1},magicType:["line","bar"],restore:!0,saveAsImage:!0}},calculable:!0,xAxis:[{type:"value",splitArea:{show:!0}}],yAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],series:[{name:"邮件营销",type:"bar",stack:"广告",data:data0},{name:"联盟广告",type:"bar",stack:"广告",data:data1},{name:"视频广告",type:"bar",stack:"广告",data:data2}]};
