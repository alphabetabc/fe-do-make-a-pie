const createSvg=(s,e)=>`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
        x="0px" y="0px" 
        viewBox="0 0 32 128"
        xml:space="preserve"
    >
        <style>
            .st2 {
                fill: transparent;
                stroke: ${s};
                stroke-width: ${e}px;
                filter: url(#chart-inset-shadow);
            }
        </style>
        <defs>
            <filter id="chart-inset-shadow" width="200%" height="200%" x="-50%" y="-50%">
        		<feGaussianBlur in="SourceGraphic" result="gass" stdDeviation="${e*.75}" />
        		<feMerge>
        			<feMergeNode in="gass" />
        		</feMerge>
        	</filter>
        </defs>
        <path class="st2" d="M0 0 L32 0 L32 128 L0 128 Z" />
    </svg>
`,svgString=createSvg("#156dff",8),svg=new Blob([svgString],{type:"image/svg+xml;charset=utf-8"}),DOMURL=window.URL||window.webkitURL||window,insetShadowUrl=DOMURL.createObjectURL(svg),dataSet=[["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],[120,200,150,80,70,110,130]];option={backgroundColor:"#101631",xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255, 0.5)"},splitLine:{show:!1},data:dataSet[0]},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{color:"rgba(255,255,255, 0.5)"},splitLine:{show:!0,lineStyle:{type:"dashed",color:"rgba(255,255,255,0.1)",width:2}}},series:[{data:dataSet[1],type:"pictorialBar",symbol:"image://"+insetShadowUrl,barWidth:50},{data:dataSet[1],type:"bar",barWidth:50,itemStyle:{color:"transparent",borderWidth:3,borderColor:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#156dff"},{offset:1,color:"#00eaeb"}]),shadowColor:"blue",shadowBlur:12,shadowOffsetX:0,shadowOffsetY:0}}]};
