app.title="极坐标系下的堆叠柱状图";var data=[[4700,8e3,6292.857],[9300,39e3,25772.73],[9800,15900,12800],[12e3,35e3,19941.67],[5500,12e3,6850],[8300,2e4,12278.57],[8e3,14e3,10263.1],[15500,36e3,25936.67],[11e3,36e3,17354.55],[6e3,13e3,8819.12],[9300,27800,15725],[11e3,19e3,15003.33],[4e3,8e3,5937.5],[5500,2e4,12199.74],[12100,25e3,17755.88],[4700,25e3,8170.588]],cities=["新洲区","武昌区","青山区","硚口区","鄂州","经开区","江夏区","江汉区","江岸区","黄陂区","洪山区","汉阳区","汉南区","东西湖区","东湖高新区","蔡甸区"],barHeight=50;option={title:{text:"在武汉买房子有多贵？",subtext:"各城区房价（数据来源：https://www.numbeo.com）"},toolbox:{show:!0,feature:{saveAsImage:{show:!0,excludeComponents:["toolbox"],pixelRatio:2}}},legend:{show:!0,data:["价格范围","均值"]},grid:{top:100},angleAxis:{type:"category",data:cities},tooltip:{show:!0,formatter:function(t){var a=t.dataIndex;return cities[a]+"<br>最低："+data[a][0]+"<br>最高："+data[a][1]+"<br>平均："+data[a][2]}},radiusAxis:{},polar:{},series:[{type:"bar",itemStyle:{normal:{color:"transparent"}},data:data.map(function(t){return t[0]}),coordinateSystem:"polar",stack:"最大最小值",silent:!0},{type:"bar",data:data.map(function(t){return t[1]-t[0]}),coordinateSystem:"polar",name:"价格范围",stack:"最大最小值"},{type:"bar",itemStyle:{normal:{color:"transparent"}},data:data.map(function(t){return t[2]-barHeight}),coordinateSystem:"polar",stack:"均值",silent:!0,z:10},{type:"bar",data:data.map(function(t){return barHeight*2}),coordinateSystem:"polar",name:"均值",stack:"均值",barGap:"-100%",z:10}],legend:{show:!0,data:["A","B","C"]}};