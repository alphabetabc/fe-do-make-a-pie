var uploadedDataURL="/asset/get/s/data-1478257028861-Hk6YF19el.json";$.get(uploadedDataURL,function(e){myChart.hideLoading(),echarts.registerMap("广东省",e),option={tooltip:{trigger:"item"},legend:{orient:"horizontal",y:"bottom",x:"center",data:["70次以上","10次以下"],itemWidth:30,itemHeight:30,textStyle:{color:"#fff"}},geo:{map:"广东省",layoutCenter:["55%","50%"],layoutSize:"109%",label:{emphasis:{show:!0}},roam:!1,mapLocation:{width:"110%",height:"97%"},geoCoord:{越秀:[113.27,23.13],荔湾:[113.23,23.13],广州市:[113.27,23.13],海珠:[113.25,23.1],天河:[113.35,23.12],白云:[113.27,23.17],黄埔:[113.45,23.1],番禺:[113.35,22.95],花都:[113.22,23.4],增城:[113.83,23.3],从化:[113.58,23.55],韶关市:[113.6,24.82],武江:[113.57,24.8],浈江:[113.6,24.8],曲江:[113.6,24.68],始兴:[114.07,24.95],仁化:[113.75,25.08],翁源:[114.13,24.35],新丰:[114.2,24.07],乐昌:[113.35,25.13],南雄:[114.3,25.12],深圳市:[114.05,22.55],罗湖:[114.12,22.55],福田:[114.05,22.53],南山:[113.92,22.52],宝安:[113.9,22.57],龙岗:[114.27,22.73],盐田:[114.22,22.55],珠海市:[113.57,22.27],香洲:[113.55,22.27],斗门:[113.28,22.22],金湾:[113.4,22.07],汕头市:[116.68,23.35],龙湖:[116.72,23.37],金平:[116.7,23.37],潮阳:[116.6,23.27],潮南:[116.43,23.25],澄海:[116.77,23.48],南澳:[117.02,23.42],佛山市:[113.12,23.02],南海:[113.15,23.03],顺德市:[113.3,22.8],三水:[112.87,23.17],高明:[112.88,22.9],江门市:[113.08,22.58],新会:[113.03,22.47],台山:[112.78,22.25],开平:[112.67,22.38],鹤山:[112.97,22.77],恩平:[112.3,22.18],湛江市:[110.35,21.27],赤坎:[110.37,21.27],霞山:[110.4,21.2],坡头:[110.47,21.23],麻章:[110.32,21.27],遂溪:[110.25,21.38],徐闻:[110.17,20.33],廉江:[110.27,21.62],雷州:[110.08,20.92],吴川:[110.77,21.43],茂名市:[110.92,21.67],茂南:[110.92,21.63],茂港:[111.02,21.47],电白:[111,21.5],高州:[110.85,21.92],化州:[110.63,21.67],信宜:[110.95,22.35],肇庆市:[112.47,23.05],端州:[112.48,23.05],鼎湖:[112.57,23.17],广宁:[112.43,23.63],怀集:[112.18,23.92],封开:[111.5,23.43],德庆:[111.77,23.15],高要:[112.45,23.03],四会:[112.68,23.33],惠州市:[114.42,23.12],惠城:[114.4,23.08],惠阳:[114.47,22.8],博罗:[114.28,23.18],惠东:[114.72,22.98],龙门:[114.25,23.73],梅州市:[116.12,24.28],梅江:[116.12,24.32],梅县:[116.05,24.28],大埔:[116.7,24.35],丰顺:[116.18,23.77],五华:[115.77,23.93],平远:[115.88,24.57],蕉岭:[116.17,24.67],兴宁:[115.73,24.15],汕尾市:[115.37,22.78],海丰:[115.33,22.97],陆河:[115.65,23.3],陆丰:[115.65,22.95],河源市:[114.7,23.73],源城:[114.7,23.73],紫金:[115.18,23.63],龙川:[115.25,24.1],连平:[114.48,24.37],和平:[114.93,24.45],东源:[114.77,23.82],阳江市:[111.98,21.87],江城:[111.95,21.87],阳西:[111.62,21.75],阳东:[112.02,21.88],阳春:[111.78,22.18],清远市:[113.03,23.7],清城:[113.02,23.7],佛冈:[113.53,23.88],阳山:[112.63,24.48],清新:[112.98,23.73],英德:[113.4,24.18],连州:[112.38,24.78],东莞市:[113.75,23.05],中山市:[113.38,22.52],潮州市:[116.62,23.67],湘桥:[116.63,23.68],潮安:[116.68,23.45],饶平:[117,23.67],揭阳市:[116.37,23.55],揭东:[116.42,23.57],揭西:[115.83,23.43],惠来:[116.28,23.03],普宁:[116.18,23.3],云浮市:[112.03,22.92],云城:[112.03,22.93],新兴:[112.23,22.7],郁南:[111.53,23.23],云安:[112,23.08],罗定:[111.57,22.77]},itemStyle:{normal:{areaColor:"#3aa1bc",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}},series:[{name:"70次以上",type:"effectScatter",coordinateSystem:"geo",data:[{name:"广州市",value:[113.27,23.13,150]}],rippleEffect:{period:40,scale:10,brushType:"fill"},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#C7AB0E"}}},{name:"10次以下",type:"effectScatter",coordinateSystem:"geo",data:[{name:"清远市",value:[113.12,23.02,250]}],rippleEffect:{period:1.5,scale:1.5,brushType:"fill"},label:{normal:{formatter:"{b}",position:"right",show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#CD3E0A"}}}]},myChart.setOption(option)});
