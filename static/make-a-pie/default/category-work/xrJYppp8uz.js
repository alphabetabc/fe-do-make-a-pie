var dataTime=[];$.get("http://fund.10jqka.com.cn/000697/json/jsonljjz.json",function(e){console.log(e)});var ljjz_000697=[["20140826","1.0000"],["20140829","1.0010"],["20140901","1.0060"],["20140905","1.0170"],["20140909","1.0170"],["20140912","1.0370"],["20140919","1.0370"],["20140926","1.0520"],["20140930","1.0720"],["20141010","1.0720"],["20141017","1.0450"],["20141024","1.0400"],["20141027","1.0540"],["20141028","1.0850"],["20141029","1.1030"],["20141030","1.0980"],["20141031","1.0870"],["20141103","1.1070"],["20141104","1.0900"],["20141105","1.0820"],["20141106","1.0990"],["20141107","1.0990"],["20141110","1.1010"],["20141111","1.0660"],["20141112","1.0920"],["20141113","1.0870"],["20141114","1.0750"],["20141117","1.1050"],["20141118","1.1210"],["20141119","1.1430"],["20141120","1.1360"],["20141121","1.1350"],["20141124","1.1500"],["20141125","1.1850"],["20141126","1.2110"],["20141127","1.2170"],["20141128","1.2460"],["20141201","1.2690"],["20141202","1.2750"],["20141203","1.2820"],["20141204","1.3340"],["20141205","1.3130"],["20141208","1.2580"],["20141209","1.1730"],["20141210","1.2050"],["20141211","1.1970"],["20141212","1.2580"],["20141215","1.3360"],["20141216","1.3460"],["20141217","1.3560"],["20141218","1.3470"],["20141219","1.3210"],["20141222","1.2280"],["20141223","1.1890"],["20141224","1.2010"],["20141225","1.2260"],["20141226","1.2270"],["20141229","1.1700"],["20141230","1.1500"],["20141231","1.1610"],["20150105","1.1500"],["20150106","1.1890"],["20150107","1.1930"],["20150108","1.2020"],["20150109","1.2130"],["20150112","1.2470"],["20150113","1.2770"],["20150114","1.2730"],["20150115","1.2820"],["20150116","1.3490"],["20150119","1.3190"],["20150120","1.3800"],["20150121","1.4050"],["20150122","1.4070"],["20150123","1.3520"],["20150126","1.4060"],["20150127","1.4170"],["20150128","1.3960"],["20150129","1.3740"],["20150130","1.3510"],["20150202","1.3930"],["20150203","1.4670"],["20150204","1.4820"],["20150205","1.5200"],["20150206","1.4540"],["20150209","1.4500"],["20150210","1.5010"],["20150211","1.5450"],["20150212","1.5470"],["20150213","1.5700"],["20150216","1.6320"],["20150217","1.6420"],["20150225","1.5880"],["20150226","1.5950"],["20150227","1.6420"],["20150302","1.6910"],["20150303","1.6610"],["20150304","1.7000"],["20150305","1.7070"],["20150306","1.6580"],["20150309","1.7040"],["20150310","1.7400"],["20150311","1.7370"],["20150312","1.7260"],["20150313","1.7960"],["20150316","1.8840"],["20150317","1.8810"],["20150318","1.9090"],["20150319","1.9110"],["20150320","1.9850"],["20150323","2.0800"],["20150324","2.1670"],["20150325","2.1880"],["20150326","2.0930"],["20150327","2.1310"],["20150330","2.0350"],["20150331","2.1040"],["20150401","2.1560"],["20150402","2.2160"],["20150403","2.2530"],["20150407","2.2950"],["20150408","2.2570"],["20150409","2.2860"],["20150410","2.3500"],["20150413","2.4060"],["20150414","2.4000"],["20150415","2.2310"],["20150416","2.2530"],["20150417","2.2210"],["20150420","2.1520"],["20150421","2.2930"],["20150422","2.4000"],["20150423","2.4610"],["20150424","2.4750"],["20150427","2.4880"],["20150428","2.4200"],["20150429","2.5290"],["20150430","2.6830"],["20150504","2.6430"],["20150505","2.5800"],["20150506","2.7000"],["20150507","2.7740"],["20150508","2.9710"],["20150511","3.1930"],["20150512","3.3990"],["20150513","3.3390"],["20150514","3.1890"],["20150515","3.2420"],["20150518","3.3880"],["20150519","3.3970"],["20150520","3.4550"],["20150521","3.4890"],["20150522","3.4420"],["20150525","3.3370"],["20150526","3.4580"],["20150527","3.3850"],["20150528","3.2560"],["20150529","3.4050"],["20150601","3.5460"],["20150602","3.6940"],["20150603","3.8050"],["20150604","3.7300"],["20150605","3.6960"],["20150608","3.4600"],["20150609","3.4050"],["20150610","3.5200"],["20150611","3.5500"],["20150612","3.5510"],["20150615","3.3310"],["20150616","3.1750"],["20150617","3.3860"],["20150618","3.1930"],["20150619","3.0660"],["20150623","3.1200"],["20150624","3.0490"],["20150625","2.8510"],["20150626","2.5930"],["20150629","2.3430"],["20150630","2.4490"],["20150701","2.3000"],["20150702","2.1440"],["20150703","2.0020"],["20150706","1.9020"],["20150707","1.7790"],["20150708","1.6450"],["20150709","1.7150"],["20150710","1.8150"],["20150713","1.9320"],["20150714","1.9720"],["20150715","1.8430"],["20150716","1.8350"],["20150717","1.9510"],["20150720","2.0160"],["20150721","2.0720"],["20150722","2.0870"],["20150723","2.1710"],["20150724","2.1600"],["20150727","2.0030"],["20150728","1.8520"],["20150729","1.9410"],["20150730","1.8130"],["20150731","1.7350"],["20150803","1.6140"],["20150804","1.7270"],["20150805","1.7000"],["20150806","1.6750"],["20150807","1.7800"],["20150810","1.8950"],["20150811","1.9160"],["20150812","1.8500"],["20150813","1.9310"],["20150814","1.9450"],["20150817","1.9570"],["20150818","1.8030"],["20150819","1.8770"],["20150820","1.8120"],["20150821","1.6820"],["20150824","1.5430"],["20150825","1.4160"],["20150826","1.3310"],["20150827","1.3710"],["20150828","1.4590"],["20150831","1.3890"],["20150901","1.2920"],["20150902","1.2350"],["20150907","1.2690"],["20150908","1.3330"],["20150909","1.4000"],["20150910","1.3720"],["20150911","1.4050"],["20150914","1.2980"],["20150915","1.2100"],["20150916","1.3030"],["20150917","1.2970"],["20150918","1.3310"],["20150921","1.4120"],["20150922","1.4260"],["20150923","1.4410"],["20150924","1.4580"],["20150925","1.3830"],["20150928","1.4570"],["20150929","1.4360"],["20150930","1.4260"],["20151008","1.5080"],["20151009","1.5310"],["20151012","1.6170"],["20151013","1.6590"],["20151014","1.6490"],["20151015","1.7210"],["20151016","1.7710"],["20151019","1.7810"],["20151020","1.8530"],["20151021","1.7410"],["20151022","1.8180"],["20151023","1.8570"],["20151026","1.8500"],["20151027","1.8860"],["20151028","1.8060"],["20151029","1.8180"],["20151030","1.8440"],["20151102","1.7970"],["20151103","1.7880"],["20151104","1.9120"],["20151105","1.9270"],["20151106","2.0080"],["20151109","2.0730"],["20151110","2.0790"],["20151111","2.1260"],["20151112","2.0950"],["20151113","2.0370"],["20151116","2.1130"],["20151117","2.0730"],["20151118","2.0190"],["20151119","2.1100"],["20151120","2.1570"],["20151123","2.1030"],["20151124","2.1460"],["20151125","2.2040"],["20151126","2.1780"],["20151127","2.0440"],["20151130","2.0480"],["20151201","1.9980"],["20151202","1.9590"],["20151203","2.0400"],["20151204","2.0250"],["20151207","2.0560"],["20151208","2.0590"],["20151209","2.0680"],["20151210","2.0640"],["20151211","2.0480"],["20151214","2.0680"],["20151215","2.1030"],["20151216","2.1300"],["20151217","2.1890"],["20151218","2.1610"],["20151221","2.1470"],["20151222","2.1680"],["20151223","2.1170"],["20151224","2.1050"],["20151225","2.1160"],["20151228","2.0790"],["20151229","2.0690"],["20151230","2.0970"],["20151231","2.0390"],["20160104","1.8770"],["20160105","1.8180"],["20160106","1.8670"],["20160107","1.7110"],["20160108","1.7120"],["20160111","1.5830"],["20160112","1.5780"],["20160113","1.5010"],["20160114","1.5820"],["20160115","1.5340"],["20160118","1.5880"],["20160119","1.6520"],["20160120","1.6310"],["20160121","1.5450"],["20160122","1.5740"],["20160125","1.5920"],["20160126","1.4760"],["20160127","1.4680"],["20160128","1.3760"],["20160129","1.4330"],["20160201","1.4090"],["20160202","1.4840"],["20160203","1.4930"],["20160204","1.5260"],["20160205","1.4880"],["20160215","1.5050"],["20160216","1.5870"],["20160217","1.6290"],["20160218","1.6120"],["20160219","1.6230"],["20160222","1.6620"],["20160223","1.6620"],["20160224","1.6310"],["20160225","1.5110"],["20160226","1.4920"],["20160229","1.4020"],["20160301","1.4280"],["20160302","1.4890"],["20160303","1.4910"],["20160304","1.4170"],["20160307","1.4530"],["20160308","1.4710"],["20160309","1.4340"],["20160310","1.4030"],["20160311","1.3980"],["20160314","1.4710"],["20160315","1.4600"],["20160316","1.4450"],["20160317","1.5160"],["20160318","1.5930"],["20160321","1.6380"],["20160322","1.6300"],["20160323","1.6750"],["20160324","1.6370"],["20160325","1.6290"],["20160328","1.6150"],["20160329","1.5850"],["20160330","1.6590"],["20160331","1.6550"],["20160401","1.6430"],["20160405","1.6970"],["20160406","1.6950"],["20160407","1.6710"],["20160408","1.6550"],["20160411","1.6820"],["20160412","1.6700"],["20160413","1.6950"],["20160414","1.7110"],["20160415","1.7040"],["20160418","1.6730"],["20160419","1.6780"],["20160420","1.5930"],["20160421","1.5670"],["20160422","1.5890"],["20160425","1.5750"],["20160426","1.5910"],["20160427","1.5870"],["20160428","1.5870"],["20160429","1.5840"],["20160503","1.6410"],["20160504","1.6420"],["20160505","1.6580"],["20160506","1.5890"],["20160509","1.5310"],["20160510","1.5220"],["20160511","1.4920"],["20160512","1.4970"],["20160513","1.4850"],["20160516","1.5090"],["20160517","1.5260"],["20160518","1.4830"],["20160519","1.4930"],["20160520","1.5130"],["20160523","1.5330"],["20160524","1.5200"],["20160525","1.5150"],["20160526","1.5270"],["20160527","1.5160"],["20160530","1.5130"],["20160531","1.5940"],["20160601","1.6080"],["20160602","1.6250"],["20160603","1.6390"],["20160606","1.6440"],["20160607","1.6430"],["20160608","1.6350"],["20160613","1.5400"],["20160614","1.5310"],["20160615","1.5840"],["20160616","1.5760"],["20160617","1.5830"],["20160620","1.5920"],["20160621","1.5770"],["20160622","1.6170"],["20160623","1.6210"],["20160624","1.6090"],["20160627","1.6520"],["20160628","1.6630"],["20160629","1.6600"],["20160630","1.6660"],["20160701","1.6520"],["20160704","1.6780"],["20160705","1.6800"],["20160706","1.6840"],["20160707","1.6740"],["20160708","1.6780"],["20160711","1.6720"],["20160712","1.6870"],["20160713","1.7050"],["20160714","1.7060"],["20160715","1.6880"],["20160718","1.6840"],["20160719","1.6960"],["20160720","1.6970"],["20160721","1.6960"],["20160722","1.6790"],["20160725","1.6710"],["20160726","1.6900"],["20160727","1.5940"],["20160728","1.5710"],["20160729","1.5530"],["20160801","1.5380"],["20160802","1.5530"],["20160803","1.5530"],["20160804","1.5720"],["20160805","1.5530"],["20160808","1.5700"],["20160809","1.5830"],["20160810","1.5760"],["20160811","1.5450"],["20160812","1.5570"],["20160815","1.6060"],["20160816","1.6060"],["20160817","1.6140"],["20160818","1.6080"],["20160819","1.6110"],["20160822","1.5850"],["20160823","1.5880"],["20160824","1.6030"],["20160825","1.5940"],["20160826","1.5970"],["20160829","1.5990"],["20160830","1.5990"],["20160831","1.5910"],["20160901","1.5840"],["20160902","1.5790"],["20160905","1.5830"],["20160906","1.6120"],["20160907","1.6070"],["20160908","1.6150"],["20160909","1.5940"],["20160912","1.5430"],["20160913","1.5480"],["20160914","1.5450"],["20160919","1.5650"],["20160920","1.5610"],["20160921","1.5630"],["20160922","1.5680"],["20160923","1.5630"],["20160926","1.5320"],["20160927","1.5450"],["20160928","1.5410"],["20160929","1.5450"],["20160930","1.5560"],["20161010","1.5980"],["20161011","1.5980"],["20161012","1.5950"],["20161013","1.5950"],["20161014","1.5920"],["20161017","1.5750"],["20161018","1.5970"],["20161019","1.5960"],["20161020","1.6090"],["20161021","1.6000"],["20161024","1.6150"],["20161025","1.6200"],["20161026","1.6060"],["20161027","1.6020"],["20161028","1.5960"],["20161031","1.5940"],["20161101","1.6050"],["20161102","1.5880"],["20161103","1.5930"],["20161104","1.5840"],["20161107","1.5810"],["20161108","1.5900"],["20161109","1.5700"],["20161110","1.5910"],["20161111","1.5930"],["20161114","1.6020"],["20161115","1.6160"],["20161116","1.6150"],["20161117","1.6020"],["20161118","1.5970"],["20161121","1.5950"],["20161122","1.6180"],["20161123","1.6180"],["20161124","1.5930"],["20161125","1.6050"],["20161128","1.5960"],["20161129","1.5830"],["20161130","1.5970"],["20161201","1.5960"],["20161202","1.5710"],["20161205","1.5640"],["20161206","1.5610"],["20161207","1.5720"],["20161208","1.5550"],["20161209","1.5410"],["20161212","1.4520"],["20161213","1.4480"],["20161214","1.4370"],["20161215","1.4470"],["20161216","1.4700"],["20161219","1.4570"],["20161220","1.4520"],["20161221","1.4590"],["20161222","1.4560"],["20161223","1.4430"],["20161226","1.4430"],["20161227","1.4400"],["20161228","1.4310"],["20161229","1.4300"],["20161230","1.4300"],["20161231","1.4300"],["20170103","1.4360"],["20170104","1.4530"],["20170105","1.4610"],["20170106","1.4370"],["20170109","1.4390"],["20170110","1.4350"],["20170111","1.4240"],["20170112","1.4120"],["20170113","1.3840"],["20170116","1.3250"],["20170117","1.3450"],["20170118","1.3340"],["20170119","1.3270"],["20170120","1.3510"],["20170123","1.3580"],["20170124","1.3450"],["20170125","1.3530"],["20170126","1.3740"],["20170203","1.3660"],["20170206","1.3820"],["20170207","1.3760"],["20170208","1.3870"],["20170209","1.3940"],["20170210","1.3830"],["20170213","1.3890"],["20170214","1.3860"],["20170215","1.3730"],["20170216","1.3770"],["20170217","1.3670"],["20170220","1.3710"],["20170221","1.3930"],["20170222","1.4000"],["20170223","1.4030"],["20170224","1.4180"],["20170227","1.4230"],["20170228","1.4240"],["20170301","1.4310"],["20170302","1.4280"],["20170303","1.4440"],["20170306","1.4620"],["20170307","1.4650"],["20170308","1.4440"],["20170309","1.4380"],["20170310","1.4350"],["20170313","1.4550"],["20170314","1.4530"],["20170315","1.4470"],["20170316","1.4580"],["20170317","1.4450"],["20170320","1.4450"],["20170321","1.4440"],["20170322","1.4340"],["20170323","1.4390"],["20170324","1.4430"],["20170327","1.4310"],["20170328","1.4270"],["20170329","1.4210"],["20170330","1.3940"],["20170331","1.3930"],["20170405","1.4150"],["20170406","1.4190"],["20170407","1.4200"],["20170410","1.3990"],["20170411","1.3960"],["20170412","1.3870"],["20170413","1.3920"],["20170414","1.3760"],["20170417","1.3540"],["20170418","1.3450"],["20170419","1.3310"],["20170420","1.3320"],["20170421","1.3140"],["20170424","1.2910"],["20170425","1.3000"],["20170426","1.3110"],["20170427","1.3220"],["20170428","1.3260"],["20170502","1.3220"],["20170503","1.3230"],["20170504","1.3240"],["20170505","1.3150"],["20170508","1.3150"],["20170509","1.3290"],["20170510","1.3230"],["20170511","1.3200"],["20170512","1.3110"],["20170515","1.3200"],["20170516","1.3510"],["20170517","1.3530"],["20170518","1.3410"],["20170519","1.3330"],["20170522","1.3220"],["20170523","1.2970"],["20170524","1.3010"],["20170525","1.3010"],["20170526","1.2890"],["20170531","1.2890"],["20170601","1.2620"],["20170602","1.2740"],["20170605","1.2880"],["20170606","1.2960"],["20170607","1.3220"],["20170608","1.3210"],["20170609","1.3220"],["20170612","1.3020"],["20170613","1.3150"],["20170614","1.3050"],["20170615","1.3270"],["20170616","1.3240"],["20170619","1.3290"],["20170620","1.3330"],["20170621","1.3410"],["20170622","1.3210"],["20170623","1.3210"],["20170626","1.3380"],["20170627","1.3370"],["20170628","1.3230"],["20170629","1.3340"],["20170630","1.3320"],["20170703","1.3440"],["20170704","1.3310"],["20170705","1.3500"],["20170706","1.3530"],["20170707","1.3560"],["20170710","1.3380"],["20170711","1.3330"],["20170712","1.3260"],["20170713","1.3260"],["20170714","1.3150"],["20170717","1.2500"],["20170718","1.2350"],["20170719","1.2610"],["20170720","1.2620"],["20170721","1.2630"],["20170724","1.2650"],["20170725","1.2700"],["20170726","1.2650"],["20170727","1.2900"],["20170728","1.2920"],["20170731","1.2970"],["20170801","1.2970"],["20170802","1.2840"],["20170803","1.2860"],["20170804","1.2730"],["20170807","1.2830"],["20170808","1.2900"],["20170809","1.2970"],["20170810","1.2950"],["20170811","1.2850"],["20170814","1.3250"],["20170815","1.3370"],["20170816","1.3480"],["20170817","1.3610"],["20170818","1.3510"],["20170821","1.3540"],["20170822","1.3620"],["20170823","1.3460"],["20170824","1.3330"],["20170825","1.3490"],["20170828","1.3760"],["20170829","1.3740"],["20170830","1.3920"],["20170831","1.4010"],["20170901","1.4310"],["20170904","1.4560"],["20170905","1.4630"],["20170906","1.4700"],["20170907","1.4650"],["20170908","1.4720"],["20170911","1.5110"],["20170912","1.4830"],["20170913","1.4980"],["20170914","1.4970"],["20170915","1.4790"],["20170918","1.4920"],["20170919","1.4830"],["20170920","1.4920"],["20170921","1.4590"],["20170922","1.4440"],["20170925","1.4240"],["20170926","1.4400"],["20170927","1.4680"],["20170928","1.4640"],["20170929","1.4740"],["20171009","1.4850"],["20171010","1.4840"],["20171011","1.4630"],["20171012","1.4520"],["20171013","1.4700"],["20171016","1.4550"],["20171017","1.4440"],["20171018","1.4300"],["20171019","1.4280"],["20171020","1.4720"],["20171023","1.4820"],["20171024","1.4910"],["20171025","1.4940"],["20171026","1.5060"],["20171027","1.4990"],["20171030","1.4700"],["20171031","1.5060"],["20171101","1.5270"],["20171102","1.4990"],["20171103","1.4830"],["20171106","1.4800"],["20171107","1.4750"],["20171108","1.4880"],["20171109","1.4860"],["20171110","1.4960"],["20171113","1.4910"],["20171114","1.4580"],["20171115","1.4040"],["20171116","1.4000"],["20171117","1.3430"],["20171120","1.3780"],["20171121","1.3780"],["20171122","1.3790"],["20171123","1.3450"],["20171124","1.3490"],["20171127","1.2990"],["20171128","1.3340"],["20171129","1.3330"],["20171130","1.3260"],["20171201","1.3480"],["20171204","1.3390"],["20171205","1.2910"],["20171206","1.3050"],["20171207","1.2850"],["20171208","1.3050"],["20171211","1.3390"],["20171212","1.3500"],["20171213","1.3410"],["20171214","1.3310"],["20171215","1.3100"],["20171218","1.2910"],["20171219","1.2930"],["20171220","1.2820"],["20171221","1.2980"],["20171222","1.2990"],["20171225","1.2730"],["20171226","1.2770"],["20171227","1.2770"],["20171228","1.2850"],["20171229","1.2910"],["20171231","1.2910"],["20180102","1.2950"],["20180103","1.3270"],["20180104","1.3350"],["20180105","1.3340"],["20180108","1.3430"],["20180109","1.3380"],["20180110","1.3330"],["20180111","1.3540"],["20180112","1.3320"],["20180115","1.2810"],["20180116","1.2770"],["20180117","1.2590"],["20180118","1.2680"],["20180119","1.2850"],["20180122","1.3080"],["20180123","1.3190"],["20180124","1.3470"],["20180125","1.3290"],["20180126","1.3370"],["20180129","1.3280"],["20180130","1.3200"],["20180131","1.2960"],["20180201","1.2660"],["20180202","1.2820"],["20180205","1.2560"],["20180206","1.2030"],["20180207","1.2080"],["20180208","1.2410"],["20180209","1.2160"],["20180212","1.2820"],["20180213","1.2810"],["20180214","1.2890"],["20180222","1.3290"],["20180223","1.3440"],["20180226","1.3870"],["20180227","1.3960"],["20180228","1.4270"],["20180301","1.4500"]];ljjz_000697.forEach(function(e){dataTime.push(e[0])});function markdate(e){var o=[];return e.forEach(function(t){o.push(t[1])}),o}option={backgroundColor:"#394056",title:{text:"基金对比图",textStyle:{fontWeight:"normal",fontSize:16,color:"#F1F1F3"},left:"6%"},tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#57617B"}}},legend:{icon:"rect",itemWidth:14,itemHeight:5,itemGap:13,data:["南宁-曼芭","桂林-曼芭","南宁-甲米"],right:"4%",textStyle:{fontSize:12,color:"#F1F1F3"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:"#57617B"}},data:dataTime}],yAxis:[{type:"value",axisTick:{show:!1},axisLine:{lineStyle:{color:"#57617B"}},axisLabel:{margin:10,textStyle:{fontSize:14}},splitLine:{lineStyle:{color:"#57617B"}}}],dataZoom:[{type:"inside",start:50,end:100},{show:!0,type:"slider",y:"90%",start:50,end:100}],series:[{name:"南宁-曼芭",type:"line",lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(137, 189, 27, 0.3)"},{offset:.8,color:"rgba(137, 189, 27, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(137,189,27)"}},data:markdate(ljjz_000697)},{name:"桂林-曼芭",type:"line",lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(0, 136, 212, 0.3)"},{offset:.8,color:"rgba(0, 136, 212, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(0,136,212)"}},data:markdate(ljjz_000697)},{name:"南宁-甲米",type:"line",lineStyle:{normal:{width:1}},areaStyle:{normal:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(219, 50, 51, 0.3)"},{offset:.8,color:"rgba(219, 50, 51, 0)"}],!1),shadowColor:"rgba(0, 0, 0, 0.1)",shadowBlur:10}},itemStyle:{normal:{color:"rgb(219,50,51)"}},data:markdate(ljjz_000697)}]};
