option={title:{text:"监测范围",text:"{a| } 监测范围",top:25,textStyle:{fontSize:26,fontWeight:"normal",lineHeight:27,verticalAlign:"center",rich:{a:{width:4,height:27,backgroundColor:"#5d71cd",verticalAlign:"center"},b:{width:13}}}},tooltip:{formatter:"{a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）",formatter:function(a,t,o){return`
		            	
            	<div class='map_tooltip_box'>
            		<div class='map_tooltip_title ta_c'>${a.name}</div>
            		<div class='map_tooltip_tip'>文章总数: 55555</div>
            		<div class='map_tooltip_infos flex flex_wrap'>
            			<div class='map_tooltip_info flex flex_align_c'>
            				<div class='map_tooltip_info_point map_tooltip_info_point_wx'></div>
            				<div class='map_tooltip_info_txt'>微信公众号: 1220</div>
            			</div>
            			<div class='map_tooltip_info flex flex_align_c'>
            				<div class='map_tooltip_info_point map_tooltip_info_point_user'></div>
            				<div class='map_tooltip_info_txt'>客户端: 6532</div>
            			</div>
            			<div class='map_tooltip_info flex flex_align_c'>
            				<div class='map_tooltip_info_point map_tooltip_info_point_wb'></div>
            				<div class='map_tooltip_info_txt'>微博: 1546</div>
            			</div>
            			<div class='map_tooltip_info flex flex_align_c'>
            				<div class='map_tooltip_info_point map_tooltip_info_point_web'></div>
            				<div class='map_tooltip_info_txt'>网站: 4565</div>
            			</div>
            		</div>
            	</div>

            `},extraCssText:"box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);"},legend:{orient:"vertical",left:"left",data:["文章总数"],textStyle:{fontSize:15}},legend:{show:!0,selectedMode:!1,icon:"none",itemGap:100,top:134/2+110,top:110,left:77,formatter:function(a){return console.log("map legend formatter",arguments),`{top|
}{name|${a}}
{num|614}`},textStyle:{borderRadius:16,rich:{top:{height:15},name:{width:236-30,height:45,fontSize:32,fontFamily:"PingFang SC",color:"rgba(255,255,255,1)",padding:[0,0,0,24]},num:{height:70,fontSize:45,fontFamily:"PingFang SC",fontWeight:"bold",color:"rgba(255,255,255,1)",padding:[0,0,0,80]}}},data:[{name:"公众号",formatter:function(a){return"legend data formatter "+a},textStyle:{width:236,height:134,backgroundColor:{image:"../img/img 47@2x.png",image:"../img/img 471@2x.png",image:"http://pc.wangjiangwei.top/01-private_jobs/01-popular_feelings/code/img/img 471@2x.png"},backgroundColor:"#0FCA8A",color:"blue"}},{name:"微博",textStyle:{width:236,height:134,backgroundColor:{image:"../img/img 42@2x.png",image:"../img/img 472@2x.png",image:"http://pc.wangjiangwei.top/01-private_jobs/01-popular_feelings/code/img/img 472@2x.png"},backgroundColor:"#F8A7A7"}},{name:"客户端",textStyle:{width:236,height:134,backgroundColor:{image:"../img/img 43@2x.png"},backgroundColor:"#4996F7"}},{name:"网站",textStyle:{width:236,height:134,backgroundColor:{image:"../img/img 44@2x.png"},backgroundColor:"#FAAF3A"}}]},series:[{type:"map",name:"公众号",zoom:1,top:340,showLegendSymbol:!1,mapType:"china",label:{normal:{show:!1},emphasis:{show:!0}},itemStyle:{normal:{borderColor:"#FFFFFF",areaColor:"#C3D5E6"},emphasis:{areaColor:"#5A66CA"}},data:[{name:"北京",value:Math.round(Math.random()*1e3)},{name:"天津",value:Math.round(Math.random()*1e3)},{name:"上海",value:Math.round(Math.random()*1e3)},{name:"重庆",value:Math.round(Math.random()*1e3)},{name:"河北",value:Math.round(Math.random()*1e3)},{name:"河南",value:Math.round(Math.random()*1e3)},{name:"云南",value:Math.round(Math.random()*1e3)},{name:"辽宁",value:Math.round(Math.random()*1e3)},{name:"黑龙江",value:Math.round(Math.random()*1e3)},{name:"湖南",value:Math.round(Math.random()*1e3)},{name:"安徽",value:Math.round(Math.random()*1e3)},{name:"山东",value:Math.round(Math.random()*1e3)},{name:"新疆",value:Math.round(Math.random()*1e3)},{name:"江苏",value:Math.round(Math.random()*1e3)},{name:"浙江",value:Math.round(Math.random()*1e3)},{name:"江西",value:Math.round(Math.random()*1e3)},{name:"湖北",value:Math.round(Math.random()*1e3)},{name:"广西",value:Math.round(Math.random()*1e3)},{name:"甘肃",value:Math.round(Math.random()*1e3)},{name:"山西",value:Math.round(Math.random()*1e3)},{name:"内蒙古",value:Math.round(Math.random()*1e3)},{name:"陕西",value:Math.round(Math.random()*1e3)},{name:"吉林",value:Math.round(Math.random()*1e3)},{name:"福建",value:Math.round(Math.random()*1e3)},{name:"贵州",value:Math.round(Math.random()*1e3)},{name:"广东",value:Math.round(Math.random()*1e3)},{name:"青海",value:Math.round(Math.random()*1e3)},{name:"西藏",value:Math.round(Math.random()*1e3)},{name:"四川",value:Math.round(Math.random()*1e3)},{name:"宁夏",value:Math.round(Math.random()*1e3)},{name:"海南",value:Math.round(Math.random()*1e3)},{name:"台湾",value:Math.round(Math.random()*1e3)},{name:"香港",value:Math.round(Math.random()*1e3)},{name:"澳门",value:Math.round(Math.random()*1e3)},{name:"南海诸岛",value:0,itemStyle:{normal:{opacity:0,label:{show:!1}}}}]},{type:"map",name:"微博"},{type:"map",name:"客户端"},{type:"map",name:"网站"}]};
