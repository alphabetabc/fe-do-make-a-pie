option={backgroundColor:"#FFFFFF",title:{text:"投诉举报问题排名"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},saveAsImage:{show:!0}}},legend:{data:["投诉举报数"],top:30,left:"17%"},grid:{left:"1%",right:"50%",containLabel:!0},xAxis:{type:"value",position:"top",splitLine:{show:!1},boundaryGap:[0,.01]},yAxis:{type:"category",axisLabel:{interval:{default:0},formatter:function(e){var a="",t=e.length,r=4,i=Math.ceil(t/r);if(t>r){var o="";o=e.substring(0,15),a=o+"..."}else a=e;return a}},data:["无证生产","违法转让、出租生产许可证","改变生产工艺等许可条件而未依法办理变更手续的","委托无《食品生产许可证》企业进行生产","违法使用或者滥用食品添加剂、非法添加非食用物质","违法使用或者滥用食品添加剂、非法添加非食用物质","使用不合格原辅材料（过期的、失效的、变质的、污秽不洁的、回收的、受到其他污染的食品）","生产国家明令禁止生产的食品","生产场所不能持续保持应当具备的环境条件、卫生要求","食品生产人员未建立或执行从业人员健康管理制度","采购食品原材料、食品添加剂未建立进货台账","食品产品未进行出厂检验","违反《食品标识管理规定》","未按规定实施食品责令召回","未按规定实施食品主动召回","婴幼儿配方乳粉未按规定进行备案","其他"]},series:[{name:"投诉举报数",barWidth:"60%",itemStyle:{normal:{color:function(e){var a=["#60C0DD"];return a[e.dataIndex]},shadowColor:"rgba(0, 0, 0, 0.5)"}},type:"bar",data:[263,423,623,953,1103,1403,1805,2163,2520,2734,2994,3270,3444,3630,3820,4034,4294]}]};
