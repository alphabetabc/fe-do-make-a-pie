let dataList=[{num:65,name:"专项资金项目基本信息"},{num:39,name:"科研合同签订信息"},{num:30,name:"个人缴费记录明细表接口"},{num:28,name:"采购情况汇总表纪委接口"},{num:21,name:"科研资金拨付进度"},{num:18,name:"公告/公示录入情况表(非法定招标)纪委接口"},{num:17,name:"根据统—社会信用代码/企业名称返回严重违法失信数据"},{num:17,name:"住建通讯录"},{num:16,name:"专项资金公司基本信息"},{num:16,name:"根据股东、董监事人员、财务等高管姓名和身份证号码返回企业主体信息"}];var datas={Xdata:[],Ydata:[]};dataList.length>0&&dataList.forEach(M=>{datas.Xdata.push(M.name),datas.Ydata.push(M.num)}),option={backgroundColor:"#010A31",grid:{left:"2%",right:"2%",bottom:"-10%",top:"2%",height:"99%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:function(M){return M[0].name+" : "+M[0].value}},dataZoom:[{type:"inside",yAxisIndex:0,startValue:0,endValue:10,filterMode:"filter",height:4,bottom:10,handleSize:"300%",handleIcon:"image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg2NDg1MzkzMjI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3MzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI2Ljc0Mjg1NyAwIDAgMjI2Ljc0Mjg1NyAwIDUxMnMyMjYuNzQyODU3IDUxMiA1MTIgNTEyIDUxMi0yMjYuNzQyODU3IDUxMi01MTItMjI2Ljc0Mjg1Ny01MTItNTEyLTUxMnogbTAgODc3LjcxNDI4NmMtMjA0LjggMC0zNjUuNzE0Mjg2LTE2MC45MTQyODYtMzY1LjcxNDI4Ni0zNjUuNzE0Mjg2czE2MC45MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2LTM2NS43MTQyODYgMzY1LjcxNDI4NiAxNjAuOTE0Mjg2IDM2NS43MTQyODYgMzY1LjcxNDI4Ni0xNjAuOTE0Mjg2IDM2NS43MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2eiIgZmlsbD0iIzRBQkRDRiIgcC1pZD0iNDczNiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0zNjUuNzE0Mjg2IDBhMzY1LjcxNDI4NiAzNjUuNzE0Mjg2IDAgMSAwIDczMS40Mjg1NzIgMCAzNjUuNzE0Mjg2IDM2NS43MTQyODYgMCAxIDAtNzMxLjQyODU3MiAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDczNyI+PC9wYXRoPjwvc3ZnPg==",handleStyle:{color:"#0E1557"},backgroundColor:"#1c3a75",fillerColor:"#295fcc",borderColor:"transparent",textStyle:{color:"transparent"},dataBackground:{areaStyle:{opacity:0},lineStyle:{opacity:0}}},{type:"inside",yAxisIndex:1,startValue:0,endValue:8,filterMode:"filter",height:4,bottom:10,handleSize:"300%",handleIcon:"image://data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTg2NDg1MzkzMjI2IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQ3MzUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNTEyIDBDMjI2Ljc0Mjg1NyAwIDAgMjI2Ljc0Mjg1NyAwIDUxMnMyMjYuNzQyODU3IDUxMiA1MTIgNTEyIDUxMi0yMjYuNzQyODU3IDUxMi01MTItMjI2Ljc0Mjg1Ny01MTItNTEyLTUxMnogbTAgODc3LjcxNDI4NmMtMjA0LjggMC0zNjUuNzE0Mjg2LTE2MC45MTQyODYtMzY1LjcxNDI4Ni0zNjUuNzE0Mjg2czE2MC45MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2LTM2NS43MTQyODYgMzY1LjcxNDI4NiAxNjAuOTE0Mjg2IDM2NS43MTQyODYgMzY1LjcxNDI4Ni0xNjAuOTE0Mjg2IDM2NS43MTQyODYtMzY1LjcxNDI4NiAzNjUuNzE0Mjg2eiIgZmlsbD0iIzRBQkRDRiIgcC1pZD0iNDczNiI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIgNTEybS0zNjUuNzE0Mjg2IDBhMzY1LjcxNDI4NiAzNjUuNzE0Mjg2IDAgMSAwIDczMS40Mjg1NzIgMCAzNjUuNzE0Mjg2IDM2NS43MTQyODYgMCAxIDAtNzMxLjQyODU3MiAwWiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iNDczNyI+PC9wYXRoPjwvc3ZnPg==",handleStyle:{color:"#0E1557"},backgroundColor:"#1c3a75",fillerColor:"#295fcc",borderColor:"transparent",textStyle:{color:"transparent"},dataBackground:{areaStyle:{opacity:0},lineStyle:{opacity:0}}}],xAxis:{show:!1,type:"value"},yAxis:[{type:"category",inverse:!0,axisLabel:{show:!0,interval:0,textStyle:{color:"#fff",fontSize:14},formatter:function(M){var e=M;return e.length>8&&(e=e.substring(0,8)+"..."),e}},splitLine:{show:!1},axisTick:{show:!1},axisLine:{show:!1},data:datas.Xdata},{type:"category",inverse:!0,axisTick:"none",axisLine:"none",show:!1,axisLabel:{textStyle:{color:"#ffffff",fontSize:"10"}},data:datas.Ydata}],series:[{name:"值",type:"bar",zlevel:1,itemStyle:{color:new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"#18B3FF"},{offset:1,color:"#3253FF"}],!1)},label:{normal:{color:"#00FBFE",show:!0,formatter:"{c}",position:"right"}},barWidth:14,data:datas.Ydata}]};
