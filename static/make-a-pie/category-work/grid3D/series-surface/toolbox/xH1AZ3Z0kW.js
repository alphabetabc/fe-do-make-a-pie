var sin=Math.sin,cos=Math.cos,pow=Math.pow,sqrt=Math.sqrt,cosh=Math.cosh,sinh=Math.sinh,exp=Math.exp,PI=Math.PI,square=function(t){return t*t},mod2=function(t,i){var r=t%i;return r>0?r:r+i},theta1=-(20/9)*PI,theta2=15*PI;function getParametricEquation(t,i){return{u:{min:0,max:1,step:1/24},v:{min:theta1,max:theta2,step:(theta2-theta1)/575},x:function(r,a){var e=PI/2*exp(-a/(8*PI)),n=1.9565284531299512*square(r)*square(1.2768869870150188*r-1)*sin(e),s=1-square(1.25*square(1-mod2(3.6*a,2*PI)/PI)-.25)/2,o=s*(r*sin(e)+n*cos(e));return o*sin(a)+t},y:function(r,a){var e=PI/2*exp(-a/(8*PI)),n=1.9565284531299512*square(r)*square(1.2768869870150188*r-1)*sin(e),s=1-square(1.25*square(1-mod2(3.6*a,2*PI)/PI)-.25)/2,o=s*(r*sin(e)+n*cos(e));return o*cos(a)+i},z:function(r,a){var e=PI/2*exp(-a/(8*PI)),n=1.9565284531299512*square(r)*square(1.2768869870150188*r-1)*sin(e),s=1-square(1.25*square(1-mod2(3.6*a,2*PI)/PI)-.25)/2,o=s*(r*sin(e)+n*cos(e));return s*(r*cos(e)-n*sin(e))}}}function createSeries(t,i,r){return{type:"surface",parametric:!0,shading:"realistic",silent:!0,wireframe:{show:!1},realisticMaterial:{roughness:.7,metalness:0,textureTiling:[200,20]},parametricEquation:getParametricEquation(t,i)}}option={toolbox:{feature:{saveAsImage:{backgroundColor:"#111"}},iconStyle:{normal:{borderColor:"#fff"}},left:0},xAxis3D:{type:"value"},yAxis3D:{type:"value"},zAxis3D:{type:"value"},grid3D:{show:!1,boxWidth:200,boxDepth:200,axisPointer:{show:!1},axisLine:{lineStyle:{color:"#fff"}},postEffect:{enable:!0,SSAO:{enable:!0,radius:10,intensity:1}},temporalSuperSampling:{enable:!0},light:{main:{intensity:1,shadow:!0},ambient:{intensity:0},ambientCubemap:{texture:"/asset/get/s/data-1491838644249-ry33I7YTe.hdr",exposure:1,diffuseIntensity:1,specularIntensity:1}},viewControl:{}},series:[createSeries(1.5,1.5),createSeries(-1.5,-1.5),createSeries(-1.5,1.5),createSeries(1.5,-1.5),createSeries(0,0)]};