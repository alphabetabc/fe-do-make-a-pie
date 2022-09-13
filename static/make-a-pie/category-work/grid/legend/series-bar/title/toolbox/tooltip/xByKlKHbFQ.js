app.title="堆叠柱状图";function divide(e){for(var a=[],t=0;t<e.length;t++)a.push(e[t]/1e3);return a}option={title:[{text:"美国国债总额及持有者构成",left:"center"},{text:"数据来源：US Treasury Bulletin, 2018年9月刊",top:"96%",left:"5%",textStyle:{fontSize:12}}],toolbox:{feature:{saveAsImage:{show:!0,pixelRatio:5}}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{top:"6%",data:["外国持有","国内投资者","美联储和政府账户","其他","搜索引擎","百度","谷歌","必应","其他"]},grid:{left:"3%",right:"4%",bottom:"5%",containLabel:!0},xAxis:[{axisLabel:{interval:1,rotate:45},type:"category",data:["2008年3月","2008年6月","2008年9月","2008年12月","2009年3月","2009年6月","2009年9月","2009年12月","2010年3月","2010年6月","2010年9月","2010年12月","2011年3月","2011年6月","2011年9月","2011年12月","2012年3月","2012年6月","2012年9月","2012年12月","2013年3月","2013年6月","2013年9月","2013年12月","2014年3月","2014年6月","2014年9月","2014年12月","2015年3月","2015年6月","2015年9月","2015年12月","2016年3月","2016年6月","2016年9月","2016年12月","2017年3月","2017年6月","2017年9月","2017年12月","2018年3月"]}],yAxis:[{name:"万亿美元",type:"value"}],series:[{name:"外国持有",type:"bar",stack:"广告",data:divide([2506.3,2587.4,2802.4,3077.2,3265.7,3460.8,3570.6,3685.1,3877.9,4070,4324.2,4435.6,4481.4,4690.6,4912.1,5006.9,5145.1,5310.9,5476.1,5573.8,5725,5595,5652.8,5792.6,5948.3,6018.7,6069.2,6157.7,6172.6,6163.1,6105.9,6146.2,6284.4,6279.1,6155.9,6006.3,6075.3,6151.9,6301.9,6284.9,6216.6])},{name:"国内投资者",type:"bar",stack:"广告",data:divide([4371,4410.3,4819.1,5184.5,5378,5604.3,5736.4,5882.3,6163.2,6359.6,6676.7,6869,6951,7146.6,7526.6,7811.9,8103.9,8274.3,8604,8679.7,8869.1,8597.1,8498,8784.7,9078.8,9155.4,9368.7,9593.7,7082.4,6889.4,6582.6,6737.9,6805.9,6718.7,6721.9,6599.2,6369,6056.7,6226.3,6155.3,6377.6])},{name:"美联储和政府账户",type:"bar",stack:"广告",data:divide([4694.7,4685.8,4692.7,4806.4,4785.2,5026.8,5127.1,5276.9,5259.8,5345.1,5350.5,5656.2,5958.9,6220.4,6328,6439.6,6397.2,6475.8,6446.8,6523.7,6656.8,6773.3,6834.2,7205.3,7301.5,7461,7490.8,7578.9,7521.3,7536.5,7488.7,7711.2,7801.4,7911.2,7863.5,8005.6,7941.1,7943.4,8036.9,8132.1,8086.6])},{name:"其他",type:"bar",stack:"广告",data:divide([371.9,395.9,512.9,708.9,963.7,914.2,1046.3,1152.1,1350.1,1497.1,1534.4,1499.9,1360.1,976.1,935.8,971.4,1081.2,1105.4,1015.4,1229.4,1245.7,1367.8,1406,1361.9,1220.9,1016.2,964.5,968.9,1042.1,1138.7,1276.9,1395.9,1392,1290.9,1417.4,1687,1658.4,1774.4,1657.5,1769.7,2144.3])}]};
