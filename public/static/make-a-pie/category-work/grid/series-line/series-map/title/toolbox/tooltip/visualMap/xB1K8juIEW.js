option={backgroundColor:"#404a59",title:[{text:"横纵向分布",subtext:"by lyc",left:"center",textStyle:{color:"#fff",fontSize:16}}],tooltip:{trigger:"none",axisPointer:{lineStyle:{color:"#57617B"}}},visualMap:{show:!1,min:0,max:180,left:"left",top:"bottom",text:["高","低"],calculable:!0,colorLightness:[.2,100],color:["#c05050","#e5cf0d","#5ab1ef"],dimension:0},toolbox:{show:!1,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},grid:[{right:40,top:100,bottom:40,width:"20%",height:"60%",containLabel:!0},{top:"78%",width:"60%",bottom:10,left:"20%",height:"20%",containLabel:!0}],xAxis:[{position:"top",type:"value",boundaryGap:!1,axisLabel:{show:!0},splitLine:{show:!1,lineStyle:{color:"#57617B"}},axisLine:{show:!0,lineStyle:{color:"#57617B"}},axisTick:{show:!0}},{gridIndex:1,position:"top",type:"category",data:["-180","-179","-178","-177","-176","-175","-174","-173","-172","-171","-170","-169","-168","-167","-166","-165","-164","-163","-162","-161","-160","-159","-158","-157","-156","-155","-154","-153","-152","-151","-150","-149","-148","-147","-146","-145","-144","-143","-142","-141","-140","-139","-138","-137","-136","-135","-134","-133","-132","-131","-130","-129","-128","-127","-126","-125","-124","-123","-122","-121","-120","-119","-118","-117","-116","-115","-114","-113","-112","-111","-110","-109","-108","-107","-106","-105","-104","-103","-102","-101","-100","-99","-98","-97","-96","-95","-94","-93","-92","-91","-90","-89","-88","-87","-86","-85","-84","-83","-82","-81","-80","-79","-78","-77","-76","-75","-74","-73","-72","-71","-70","-69","-68","-67","-66","-65","-64","-63","-62","-61","-60","-59","-58","-57","-56","-55","-54","-53","-52","-51","-50","-49","-48","-47","-46","-45","-44","-43","-42","-41","-40","-39","-38","-37","-36","-35","-34","-33","-32","-31","-30","-29","-28","-27","-26","-25","-24","-23","-22","-21","-20","-19","-18","-17","-16","-15","-14","-13","-12","-11","-10","-9","-8","-7","-6","-5","-4","-3","-2","-1","0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156","157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179"],splitLine:{show:!1},axisLine:{show:!0,lineStyle:{color:"#57617B"}},axisTick:{show:!0},axisLabel:{show:!0,interval:19}}],yAxis:[{type:"category",inverse:!0,data:["90","89","88","87","86","85","84","83","82","81","80","79","78","77","76","75","74","73","72","71","70","69","68","67","66","65","64","63","62","61","60","59","58","57","56","55","54","53","52","51","50","49","48","47","46","45","44","43","42","41","40","39","38","37","36","35","34","33","32","31","30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14","13","12","11","10","9","8","7","6","5","4","3","2","1","0","-1","-2","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12","-13","-14","-15","-16","-17","-18","-19","-20","-21","-22","-23","-24","-25","-26","-27","-28","-29","-30","-31","-32","-33","-34","-35","-36","-37","-38","-39","-40","-41","-42","-43","-44","-45","-46","-47","-48","-49","-50","-51","-52","-53","-54","-55","-56","-57","-58","-59","-60","-61","-62","-63","-64","-65","-66","-67","-68","-69","-70","-71","-72","-73","-74","-75","-76","-77","-78","-79","-80","-81","-82","-83","-84","-85","-86","-87","-88","-89","-90"],axisTick:{alignWithLabel:!0},axisLine:{show:!0,lineStyle:{color:"#57617B"}},axisLabel:{show:!0,interval:9}},{type:"value",boundaryGap:!1,gridIndex:1,splitLine:{show:!1,lineStyle:{color:"#57617B"}},axisLine:{show:!0,lineStyle:{color:"#57617B"}},axisTick:{show:!0},inverse:!0}],series:[{z:1,name:"纵向分布",type:"map",map:"world",left:"20%",right:"20%",zoom:.75,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}},roam:!0},{name:"纬向分布",z:2,type:"line",smooth:!0,symbol:"circle",symbolSize:5,itemStyle:{normal:{color:"rgb(137,189,27)",borderColor:"rgba(137,189,2,0.27)",borderWidth:12}},label:{normal:{show:!1},emphasis:{show:!1}},tooltip:{trigger:"item",axisPointer:{lineStyle:{color:"#57617B"}}},data:[0,0,0,0,0,0,0,0,.0187,.0309,.016,.0213,.0128,.057,.2395,.7574,.9551,2.3329,3.0699,4.7374,5.5312,6.276,6.5013,8.6772,7.5541,7.4287,7.4645,8.3163,9.3063,7.4295,6.2113,6.0143,4.799,5.1848,6.3116,8.2189,8.248,6.9975,5.8466,5.4849,4.5586,6.0796,8.4692,9.6849,12.1818,9.6149,8.6559,9.0352,7.734,5.1794,5.166,6.6773,6.0658,2.3962,1.8867,2.2767,1.7949,1.691,2.5316,1.9464,1.7699,.8962,.6724,.7997,.5852,1.1979,1.5227,1.3569,.803,.5752,.4545,.7966,.5978,.8414,.7303,.7518,1.1235,1.1103,1.4353,.7483,.7126,.9944,1.4917,1.077,.7263,.9461,.8591,.8081,1.3984,.9921,4.4202,4.7219,4.1248,2.5007,2.0597,1.6204,1.5902,1.5501,1.7289,1.1778,.9646,1.2745,1.1787,.9878,.7044,1.3972,1.1452,.8794,.7846,.8103,1.3046,.496,.4829,.4469,.3335,.6654,.842,1.279,.818,.7519,1.1408,.3606,.9691,.6542,.3845,.303,.1541,.1627,.3644,.2154,.2372,.2328,.1393,.1433,.141,.2503,.3119,.1483,.2241,.2328,.1992,.118,.0655,.0519,.1158,.021,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{name:"经向面积分布",z:2,type:"line",xAxisIndex:1,yAxisIndex:1,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{emphasis:{color:"rgb(254,153,78)"}},tooltip:{trigger:"item",axisPointer:{lineStyle:{color:"#57617B"}}},data:[.1135,.1186,.1342,.317,.3129,.6149,.3655,.5243,.5873,.46,.4719,.7773,1.0659,1.161,1.1354,1.0728,.9286,.9638,.6326,.5439,.5134,.4517,.6384,.6821,.9519,1.1034,1.7664,2.0187,3.9378,3.084,3.3732,5.161,3.9565,3.9436,1.8625,1.1036,1.1481,1.1112,.4577,.3194,.2944,.6687,.8695,.4118,1.0435,.561,2.0884,4.2312,7.6169,8.6192,7.9054,6.8351,4.3668,.8948,.5009,.6827,.826,.6287,.8518,.5843,.5884,.3379,.2971,.5143,.7964,.6594,1.0329,1.1227,1.2197,1.6352,1.3574,1.0382,1.2574,1.4057,1.1883,1.3908,1.8184,1.4624,1.2023,.9719,1.5619,.921,1.0694,.8698,.9551,1.0096,1.2623,1.161,1.2683,1.3831,.8137,1.0423,.8252,.5425,.8099,.6214,.7086,.7413,.8049,1.4938,.9158,1.0665,.9751,1.0595,1.1184,.9519,.992,1.1851,1.2409,.4973,.75,.9031,.8596,.6542,.6128,1.0629,1.2728,1.0191,.9818,1.09,.7549,.4858,.6755,.8987,.664,.5053,.6678,.5358,.3561,.3391,.2759,.7523,.3458,.3361,.4344,.5531,.4977,.5171,1.1752,.9311,.8947,.6878,.5609,.5506,.519,.6465,.4844,.3436,.3724,.4766,.6307,.4832,.3842,.4269,.4162,.3424,.2575,.3498,.389,.3504,.1737,.08,.0386,.0632,.0509,.0924,.1853,.1408,.1199,.1742,.1766,.1032,.1465,.1615,.2351,.1926,.1696,.0895,.058,.0249,.0445,.0426,.077,.0657,.034,.0514,.0295,.0164,.0363,.0204,.0033,.0051,.0309,.1803,.4381,.5315,.3477,.3303,.287,.2775,.2936,.2705,.5201,.4933,.3926,.2666,.1948,.1786,.1896,.1399,.1159,.0813,.1425,.1118,.0994,.0917,.0707,.0407,.1091,.1344,.1026,.1067,.1059,.289,.5507,.4073,.4103,.3653,.3438,.3573,.3338,.4316,.6432,.7921,.8569,.7946,1.0746,1.3844,1.4136,1.3235,1.2769,1.2391,1.3161,1.8653,2.0659,1.8437,2.0634,2.0952,2.3495,2.2778,2.1486,2.1829,2.4016,2.4643,2.0858,2.2611,2.5169,2.4162,2.6457,3.0328,3.65,3.3087,2.4531,2.5733,2.6774,2.4575,1.998,2.1613,2.5421,2.3384,2.5314,4.7188,5.0941,3.3863,1.6164,2.1708,3.5368,2.9242,2.3437,1.6881,1.5227,2.1739,3.2209,3.0349,3.5044,3.3182,3.2584,3.3198,2.873,3.031,2.698,2.8393,1.8374,1.8778,1.7959,1.902,2.2296,1.2328,1.6467,1.5409,1.1127,1.4804,1.3071,1.1494,.9807,.8322,1.1351,.8966,.9835,.8343,.6616,.2675,.1611,.339,.1651,.1125,.2451,.2687,.1534,.1351,.2136,.0963,.074,.029,.0108,.001,3e-4,5e-4,4e-4,.004,.0054,.0059,.0216,.008,.0166,.0188,.0358,.0489,.0592,.0409,.0531,.0137,.1125,.1491,.0682,.0568,.0592,.0423,.0714,.069,.1267,.2,.174,.2452,.228,.1999,.1008,.1737,.4659,.5191]},{name:"经向水域率",z:2,type:"line",xAxisIndex:1,yAxisIndex:1,label:{normal:{show:!1},emphasis:{show:!1}},itemStyle:{emphasis:{color:"rgb(254,153,78)"}},tooltip:{trigger:"item",axisPointer:{lineStyle:{color:"#57617B"}}},data:[.0026,.0028,.0032,.0075,.0068,.0128,.0076,.0104,.0104,.0079,.008,.0114,.0137,.0139,.0129,.012,.0105,.0107,.007,.0057,.0052,.0045,.0066,.007,.0098,.0113,.0179,.0211,.0416,.0332,.0371,.0573,.045,.0464,.0235,.0141,.0151,.0147,.0064,.005,.0048,.0109,.0135,.0059,.0147,.0081,.0308,.0672,.1367,.1817,.178,.1601,.1002,.0203,.0113,.0161,.02,.0159,.0229,.016,.016,.0092,.0081,.0141,.022,.0182,.0273,.0286,.0295,.0384,.0321,.0253,.0275,.0282,.0225,.025,.032,.026,.0218,.0182,.0313,.0196,.0233,.0192,.0216,.0231,.0298,.0274,.03,.0331,.0195,.0235,.0182,.0112,.016,.0122,.0134,.0126,.0129,.0247,.0142,.0162,.015,.017,.018,.017,.0188,.0235,.0247,.0096,.0145,.0174,.0162,.011,.0095,.0158,.0201,.0182,.0177,.0192,.0139,.0099,.0143,.0183,.0132,.0101,.0135,.0115,.0084,.0076,.0062,.0161,.0072,.0072,.0094,.0126,.0119,.0118,.0266,.0201,.0196,.0131,.0126,.0142,.0141,.0189,.015,.0122,.0148,.0221,.0352,.0323,.0482,.0694,.0617,.0383,.0265,.0398,.0447,.0406,.0212,.0126,.0084,.0115,.0091,.015,.0267,.0195,.0165,.0243,.0255,.0141,.0227,.025,.0291,.0312,.0333,.021,.0201,.0141,.0288,.0306,.0555,.0472,.0307,.0377,.0256,.0194,.0783,.0841,.0178,.0143,.0255,.0851,.1229,.1333,.0755,.0585,.044,.0388,.0413,.0357,.066,.0605,.0549,.0403,.0334,.0328,.0339,.0251,.0219,.0166,.0292,.0223,.0193,.0174,.0136,.0079,.0205,.0251,.0186,.0187,.018,.0443,.0798,.0554,.0469,.0428,.0382,.0364,.0317,.0361,.0518,.0612,.0562,.0357,.0446,.0529,.0518,.0482,.0456,.0426,.0422,.0567,.0631,.0553,.0592,.0574,.0648,.0616,.0577,.0567,.0601,.0581,.0472,.0508,.0562,.0535,.0575,.0648,.0767,.076,.0642,.07,.0763,.071,.0579,.0608,.0693,.0624,.0696,.1441,.1614,.0974,.0447,.0638,.1099,.0937,.0722,.0515,.0396,.0454,.0608,.0548,.0602,.052,.0454,.043,.0338,.0339,.0315,.0349,.0235,.0246,.025,.0271,.0331,.0192,.0267,.0258,.0191,.0262,.0242,.0219,.0186,.0161,.0229,.0191,.022,.0199,.017,.0072,.0045,.0096,.0049,.0034,.0076,.0089,.0055,.0056,.0125,.0066,.0059,.0028,.0019,2e-4,1e-4,1e-4,1e-4,9e-4,.0012,.0014,.0052,.002,.0047,.0048,.0095,.0159,.0232,.0181,.026,.0072,.0127,.0092,.0036,.0027,.0025,.0017,.0027,.0021,.0031,.0047,.004,.0056,.0051,.0043,.0022,.0037,.0099,.0117]}]};
