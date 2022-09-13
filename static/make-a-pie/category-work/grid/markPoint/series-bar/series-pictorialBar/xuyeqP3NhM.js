const createSvg=(e,s)=>`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" 
        viewBox="0 0 32 128"
        xml:space="preserve"
    >
        <style>
            .st2 {
                fill: rgba(138, 167, 216, 0.1);
                stroke: ${e};
                stroke-width: ${s}px;
                filter: url(#chart-inset-shadow);
            }
        </style>
        <defs>
            <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
        		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${s*.75}" />
        		<feMerge>
        			<feMergeNode in="gass" />
        		</feMerge>
        	</filter>
        </defs>
        <path class="st2" d="M0 0 L32 0 L32 128 L0 128 Z" />
    </svg>
`,svgString=createSvg("rgba(138, 167, 216, 0.3)",6),svg=new Blob([svgString],{type:"image/svg+xml;charset=utf-8"}),DOMURL=window.URL||window.webkitURL||window,insetShadowUrl=DOMURL.createObjectURL(svg);var data=[{name:"功能1",value:20},{name:"功能2",value:82},{name:"功能3",value:91},{name:"功能4",value:34},{name:"功能5",value:90},{name:"功能6",value:30},{name:"功能7",value:10}];option={backgroundColor:"#041730",xAxis:{data:data.map(e=>e.name),axisLine:{show:!1},axisLabel:{show:!0,color:"#B3D6FF"},axisTick:{show:!1}},yAxis:{axisLine:{show:!1},axisLabel:{show:!1},splitLine:{show:!1},axisTick:{show:!1}},series:[{name:"a",tooltip:{show:!1},type:"bar",barWidth:10,itemStyle:{color:"#8AA7D8",barBorderRadius:[5,5,0,0]},data},{tooltip:{show:!1},type:"pictorialBar",symbol:"image://"+insetShadowUrl,symbolRepeat:!1,symbolClip:!0,symbolSize:["22","100%"],data:[100,100,100,100,100,100,100],legendHoverLink:!1,markPoint:{symbol:"image://"+insetShadowUrl,symbolSize:[22,32],symbolOffset:[0,-24],data:[{value:20,xAxis:0,yAxis:100},{value:82,xAxis:1,yAxis:100},{value:91,xAxis:2,yAxis:100},{value:34,xAxis:3,yAxis:100},{value:90,xAxis:4,yAxis:100},{value:30,xAxis:5,yAxis:100},{value:10,xAxis:6,yAxis:100}],label:{color:"#ffffff"}}}]};
