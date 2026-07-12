const ANNI = ['2017','2018','2019','2020','2021','2022','2023','2024','2025'];
const DEFAULT_YEAR = '2022';

// Bounding box Barolo DOCG — limita zoom out

const DOCG_BOUNDARY = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[7.919063047561974,44.607947564019526],[7.919067357105115,44.60800301939629],[7.919089605410634,44.60814564337659],[7.919107661183374,44.608431142632305],[7.9191254987459105,44.60871318918405],[7.919140866459957,44.60889586396016],[7.919154091154571,44.6090530640187],[7.919158025307401,44.609097297317184],[7.91917527819953,44.609200571524156],[7.919209683130462,44.60936604593888],[7.919244367046539,44.60950525405451],[7.919249481622895,44.609525774389255],[7.919275743455116,44.60964286626894],[7.9192882808393765,44.609699368428856],[7.91932612869679,44.60985805125134],[7.919407046166584,44.61017022514509],[7.919439147354378,44.61029572726291],[7.919465988942771,44.61047295543255],[7.919598630940663,44.61110693200214],[7.920969732951376,44.61976881063056],[7.920079195919743,44.62021051216822],[7.918780673143613,44.62090041246449],[7.9183728580398025,44.62113961642636],[7.916918369163665,44.62208008582263],[7.9158348587239225,44.62272697717163],[7.9156187557171585,44.62282395111631],[7.9136240851257735,44.62298502689543],[7.912892763628545,44.62299606665137],[7.912323430943188,44.62310767507853],[7.9114245558871,44.62331516097445],[7.910604158104711,44.623370346540995],[7.909760582041978,44.6233172772461],[7.909418604011103,44.623404035727],[7.908474708493924,44.623322988463855],[7.907529627522556,44.62330494012697],[7.906750425914392,44.62318044441598],[7.906213397253156,44.622914223184594],[7.90575232560122,44.622630723418006],[7.905290588199158,44.622383227701896],[7.905092153922938,44.62221027492621],[7.904892204268032,44.62211832920154],[7.9044894160224715,44.622087455534924],[7.904342077484859,44.621878979294145],[7.904235829019039,44.622166039886544],[7.9038363136648675,44.62263033803059],[7.903745550074407,44.62276450023604],[7.903703494780989,44.62298916303831],[7.903367835767335,44.623409053646675],[7.903361558923746,44.62374208754733],[7.903402974522937,44.62421961937581],[7.9032691732585585,44.62529863406845],[7.903340044963655,44.62555138687168],[7.903638800592179,44.62575231615016],[7.903737252473145,44.62587929738776],[7.903733525078403,44.626077317647216],[7.90360290016068,44.62631912923248],[7.903622338771844,44.62662539950941],[7.903645003439445,44.62676065508851],[7.903856214798289,44.626924730975745],[7.904054146497422,44.627124691302306],[7.904100325207078,44.62735019621765],[7.903979422470049,44.627745143274595],[7.903823248848921,44.62800471827449],[7.903781365640098,44.6282203760322],[7.904028077036543,44.62917701151531],[7.903946167029376,44.629509319233506],[7.903804970827468,44.62964300187799],[7.903814863680774,44.62978713666861],[7.90371113925872,44.629939182703275],[7.9036564807197625,44.63016371961309],[7.903418051537594,44.63077360183549],[7.903449077316759,44.63113399925152],[7.903543124550582,44.631495001750864],[7.904137819717436,44.632049872729176],[7.904569501990061,44.63255815822228],[7.90487869474497,44.63287621356486],[7.905107179089695,44.63346356993785],[7.904593464890172,44.63396277787421],[7.904255199964458,44.634517687714585],[7.9045814823717775,44.63526802683196],[7.904737383045572,44.635692643948765],[7.904910644627333,44.63586535556864],[7.90664781053869,44.636683239375635],[7.9069231109549065,44.63813527777671],[7.907067532036546,44.63917195226564],[7.907450219131573,44.63960773755739],[7.907619189596704,44.64068065354688],[7.907608190769064,44.6412657084546],[7.907809408132989,44.64263601786956],[7.9077555970483075,44.642815550289434],[7.907626307700688,44.64298535880755],[7.907102795485397,44.64333144670758],[7.905913347462427,44.64422029241653],[7.905518774977856,44.64441456226795],[7.904911228091748,44.644534768898005],[7.9048338856888885,44.64462405071164],[7.903730381558859,44.6449645501308],[7.902909502286712,44.64502868199258],[7.902235160156461,44.645346283427344],[7.902078596935308,44.64562385528387],[7.9012318125120204,44.64572373356421],[7.900736349295803,44.64591701604358],[7.899763821472174,44.6466638503353],[7.8988911080223705,44.64746565464259],[7.899174791102238,44.64780148244033],[7.899620689870583,44.64822890078095],[7.899691912022968,44.64846365447863],[7.8992925167107835,44.64890992737402],[7.899498681877615,44.649344032410646],[7.90009095881788,44.65003393236657],[7.90022539641318,44.65026029263564],[7.9001833121718175,44.65048494819752],[7.900132368537382,44.65051146319587],[7.9006501976334915,44.65113762989869],[7.901171273906668,44.65159277128707],[7.902303222808194,44.651756712591734],[7.903261541431536,44.65176592948746],[7.903485412173908,44.651263941777906],[7.903591550642682,44.65098588413926],[7.904519663461596,44.65058968816014],[7.904449484922175,44.65096711696884],[7.9042733924592,44.65227978949463],[7.904403153781534,44.653424351337236],[7.904469352332571,44.6545953086726],[7.904870887340526,44.65738092780902],[7.90513848040979,44.65991319403138],[7.904666313744152,44.6608719257564],[7.903127424025911,44.66154132885134],[7.901845154101628,44.661979116882115],[7.901662288351439,44.662310445614814],[7.9002889828815706,44.66355756337519],[7.898966762654253,44.664102961116875],[7.898057137907248,44.66484138309434],[7.893691723295003,44.66686969924279],[7.894732346484139,44.66787006292862],[7.898742842141155,44.66992541301116],[7.899997524747667,44.6669576801036],[7.901421161404889,44.663721510755586],[7.905055029346112,44.662454941655255],[7.906765424609774,44.66654612835076],[7.907761636731713,44.666404384165276],[7.908430830405432,44.66721705290934],[7.909490147940645,44.66730088665401],[7.910889977523447,44.670015013894265],[7.910817026734466,44.671886845913804],[7.911476449207965,44.672379274788824],[7.912425663155573,44.67289246839129],[7.9130652683677765,44.673096621731645],[7.91372489180708,44.67358003759333],[7.913996676613362,44.673888708411276],[7.9154786003699344,44.67425390535383],[7.915648040030699,44.67430564943358],[7.916130946249277,44.6704184046495],[7.916599842591211,44.66555012841095],[7.9172268897328175,44.66439476192242],[7.917694458223621,44.66231963042744],[7.918319340963255,44.66263163750265],[7.921991634501153,44.66322455204479],[7.928363954298364,44.665157100068924],[7.930919327970777,44.66681952340355],[7.932396460137457,44.66881391205822],[7.935475850899781,44.67136154712914],[7.936607727169653,44.67470666273465],[7.937750328129564,44.67612893034624],[7.938820556623964,44.676710426249436],[7.940599894470605,44.67761383345584],[7.94352595004492,44.677676980576905],[7.945503534708752,44.676470934478694],[7.947324651322158,44.67623568459017],[7.9509406257248525,44.67595774512405],[7.95189845116428,44.67496479565582],[7.953278803960219,44.674703053383524],[7.954738664325908,44.67439529884029],[7.955869945710223,44.673059187713946],[7.956782513064729,44.671587195540475],[7.957602229741358,44.67090148760948],[7.956285093416251,44.6697821416078],[7.954942797474981,44.668020268338935],[7.956086990891652,44.66758616889232],[7.957912146869805,44.666286013753826],[7.960485188695914,44.664896084919825],[7.963383210996876,44.66295988836453],[7.965251213417863,44.66289580829084],[7.968816729768505,44.6645001095028],[7.970808569821649,44.66587787531285],[7.972790546922546,44.66667288967556],[7.973886583717597,44.667393031419465],[7.975620719274515,44.66637021427437],[7.975039764294847,44.66458154662067],[7.976766640766184,44.65436618886009],[7.977642034678265,44.658371133772604],[7.982621838855313,44.6685794172312],[7.986056823561887,44.667646699615624],[7.989569568793485,44.666588526669294],[7.993156874370967,44.66340633397167],[7.995249386050067,44.663487781349076],[7.995609844040399,44.66452623573147],[7.99692336318087,44.66297135028272],[7.9985169743746,44.66272426430093],[8.001526750170907,44.66154428618949],[8.003832173491226,44.66024105757163],[8.004426898668974,44.65792359952835],[8.004319823628032,44.65607715249353],[8.007332685658703,44.65395178491922],[8.006734955701871,44.65276726284422],[8.00518302486294,44.652807765402635],[8.003331452332516,44.65193638670459],[8.002394473091815,44.65215326629417],[8.00043139791507,44.651902037826076],[7.998011095321583,44.65110661025554],[7.995808494696441,44.650123997013836],[7.993310967090756,44.649426815870626],[7.990742852009521,44.64844088197852],[7.992144191294528,44.64762502896181],[7.993766001371295,44.64354318839336],[7.997209143990785,44.64277225072867],[7.999907769167151,44.63836667644681],[8.003747812355181,44.63722090827351],[8.00531592988938,44.63326445908886],[8.007518271129147,44.63166350527425],[8.007769721904117,44.62915359667155],[8.008532697921495,44.627936858947045],[8.007028710659938,44.62726957812471],[8.006914703775504,44.62757692171782],[8.005866988842138,44.627429494095885],[8.005190428052835,44.62690718278186],[8.005173067851183,44.62611106051332],[8.005097316262182,44.624716555130924],[8.004966879788364,44.624458755934675],[8.006318918927185,44.62448777914161],[8.006992930728087,44.62436456547249],[8.006675103059449,44.623567023775855],[8.006313911372668,44.62300839189871],[8.007185559324073,44.62231878668317],[8.007578320189072,44.62187632891145],[8.007470376311923,44.62102238303639],[8.007376040744413,44.62057781826182],[8.007813429896755,44.62011069844635],[8.009017889092178,44.61991648737639],[8.010200529567829,44.6194110291015],[8.011016374140663,44.618819173748676],[8.011282653556,44.61854293840323],[8.011174897951994,44.61804189487237],[8.010140954331998,44.61824965903609],[8.009458278789527,44.618015679073366],[8.009308616802425,44.617519219577936],[8.009628665063035,44.61683314381621],[8.009647404154151,44.61643536677223],[8.00967558760343,44.61601505526982],[8.010203877297853,44.61519330575925],[8.010984802292036,44.61482719034888],[8.011593549780939,44.61459523127636],[8.011502288047282,44.61422607773262],[8.010885146497666,44.61332806530028],[8.010686736400626,44.612400820926084],[8.010259308964862,44.611626993726],[8.009750367095647,44.61145406873423],[8.008804102547185,44.61134124907881],[8.008445646238306,44.61110117634983],[8.008165572203911,44.610838189034105],[8.00797803090153,44.610867086824435],[8.007689385154679,44.61058820002677],[8.007439514066354,44.610469305402816],[8.007076173803172,44.6103604239774],[8.006523563927935,44.61005595430252],[8.006011043466769,44.60969592396798],[8.005490900539955,44.60915729222003],[8.005070330870655,44.60880141866118],[8.004798082738983,44.60863981063104],[8.004554589299987,44.60832822398207],[8.004437056942674,44.608054195331974],[8.004151068399393,44.607690213887324],[8.003789532057633,44.60727139119553],[8.003683978267615,44.60695412859704],[8.003449890675732,44.60633880802707],[8.003343859463902,44.605933885975105],[8.003537529481925,44.60570014340997],[8.003932806371965,44.60541051978558],[8.00441373364101,44.605104452822324],[8.004608471757217,44.60475219901442],[8.005140158251074,44.60432113606483],[8.005336271581545,44.603861195430774],[8.005906313319151,44.60335773832659],[8.006331938988206,44.60307502455394],[8.006959493781206,44.602669439402796],[8.0067970694648,44.60219782107799],[8.006877487712018,44.601991453157325],[8.00694325652411,44.6017578402592],[8.006954344707681,44.6008011751623],[8.006547460148553,44.60069154076501],[8.006044765911096,44.600108400413546],[8.006002699530033,44.59993832111765],[8.006039252209566,44.59947832516824],[8.006069443295933,44.59933316499997],[8.00622021144285,44.59896250526668],[8.006454994629745,44.59829705119655],[8.006631847862861,44.59790375499189],[8.007233993979053,44.59768635530363],[8.007919847378703,44.59729103679585],[8.007877934314655,44.59680934313488],[8.009095929950094,44.596143687129995],[8.009690349779007,44.595553096830834],[8.009578486355293,44.59522196364551],[8.009272148694883,44.59445677312968],[8.008990507711504,44.59409956105676],[8.008718158909614,44.593588094520044],[8.008390404932992,44.59328848368887],[8.008156418477695,44.592681818438656],[8.007950553822697,44.59243918880979],[8.007280572137041,44.59211866752237],[8.006736102657879,44.591895096942665],[8.006312793343517,44.59141224021488],[8.006038728807015,44.59115351094691],[8.00567828054518,44.59081479133376],[8.005044653279501,44.5905303548951],[8.00520081606503,44.5900562149905],[8.005738709091226,44.589115000172235],[8.006012064735033,44.588427811031444],[8.005946567730426,44.588223572455675],[8.005366818315524,44.587895669569185],[8.004985253488108,44.58757663202083],[8.004037674678417,44.58674889866901],[8.003752488598217,44.586386508218254],[8.003482445754107,44.5863225191152],[8.003014335719929,44.58641440675962],[8.002724628183609,44.58641548005711],[8.002498236885478,44.58638395230211],[8.001970007004743,44.586564127291076],[8.001723153798482,44.586457567152316],[8.001443505448215,44.5864467149823],[8.001042539088823,44.58651730212039],[8.000859877145547,44.58641740043356],[8.000612807862066,44.58654499789265],[8.000606082463806,44.58671298017484],[8.000277152122754,44.586702495806335],[8.000095386793355,44.586853628900315],[7.999873684276328,44.586751395972065],[7.999591005820088,44.58667980674264],[7.99957531109433,44.58675389900973],[7.999476731312053,44.58684589669935],[7.999240810702539,44.58684853641965],[7.9990005769023504,44.587078805876395],[7.998818886593477,44.58698900376888],[7.998447453823322,44.58707169444956],[7.998193972385045,44.58607905076506],[7.997980341726749,44.58560625259802],[7.997761608026242,44.584988566994504],[7.997295729309541,44.58443867912597],[7.997111471480371,44.58416904587029],[7.996534145564086,44.58382355155121],[7.995538872365191,44.58332959975911],[7.993892973748382,44.582299906167144],[7.99181677591222,44.5814443649495],[7.990505296830638,44.580802603269355],[7.990108776480548,44.58077012924114],[7.989458042338111,44.58012557765302],[7.988034473787474,44.579843615086794],[7.987219633435231,44.57975268579931],[7.986244192634063,44.579032756021554],[7.985493413976912,44.57787508321128],[7.985208595543844,44.57733657551593],[7.9847962214444745,44.577461458163626],[7.984497338749167,44.577465858845905],[7.98383624984449,44.57731152596825],[7.981609085223358,44.577582037923506],[7.981236313831941,44.5776875182152],[7.982170142778689,44.579162189935644],[7.981829954060165,44.580608561269095],[7.979780534398428,44.581832624184145],[7.977677274389807,44.58181381527382],[7.975817584633281,44.58155408472429],[7.973854874124315,44.58070823657815],[7.97200127179636,44.58010640441071],[7.969574805105577,44.58198407162067],[7.967983597866721,44.58292396465506],[7.963127225211905,44.582591897601375],[7.96091246026887,44.58176155158351],[7.95921363753341,44.58096286254484],[7.957807101088657,44.58002277021726],[7.956726416131617,44.57847346987665],[7.954513513183013,44.57755297784741],[7.952609006079078,44.577697571681156],[7.949963085482763,44.57914067267371],[7.947427465011925,44.57935137288996],[7.94533845462305,44.57854885712302],[7.944686457806211,44.576676524410004],[7.943925218129416,44.57521383464571],[7.943058763917949,44.57418934666902],[7.942632812035168,44.573773976902814],[7.941657667021792,44.57299922982223],[7.940900832341796,44.57243212703996],[7.939652354931099,44.57210324592332],[7.938314909442964,44.57274906725445],[7.936889596433805,44.57355503126397],[7.935470819647955,44.57400093526583],[7.934742732796941,44.57662289524795],[7.9339811237277615,44.57791811874457],[7.933914783247059,44.578402602908945],[7.934128722696028,44.5805782963493],[7.933076971066408,44.580919566528436],[7.932303106988254,44.58121841546189],[7.93159022438261,44.58162585813086],[7.9311281668400975,44.58157120591689],[7.930649312211742,44.581193881801845],[7.930252890674913,44.580811944328644],[7.929435708763819,44.58014516376524],[7.929111675112013,44.57987873758036],[7.928707509110058,44.57949085236583],[7.928456451346712,44.5794040708816],[7.928132745031547,44.5794788242548],[7.926871918987256,44.57910007470075],[7.926415279244904,44.579492129806],[7.926148680860780,44.58038112035286],[7.925921838177911,44.58071820372766],[7.925802644351116,44.58093065046468],[7.925470330766993,44.58139542342183],[7.925035447241064,44.58190616929176],[7.924507039794701,44.582417509142],[7.924058388884175,44.582369404536074],[7.923527063287018,44.58234605915611],[7.923285522302269,44.58265039134367],[7.923438126016835,44.58299536779723],[7.923041658364177,44.58315612440464],[7.922368706030425,44.58329606777289],[7.922057196814602,44.58347128850743],[7.921679533387482,44.58356573395433],[7.921254528247081,44.583841411630836],[7.921714592177171,44.58499179131981],[7.92180985459693,44.58515181997741],[7.922108839522232,44.58570660720203],[7.92278328934238,44.58609210479906],[7.924493031361362,44.58700347876594],[7.924757074683541,44.586807715628815],[7.924467020026771,44.586361891713665],[7.924787555870749,44.586115008106134],[7.925176184460584,44.58617606676312],[7.925345651504169,44.58611082664585],[7.9255687702513855,44.586036728404146],[7.926044180503868,44.585965218664015],[7.926394763900232,44.585890841017765],[7.926797287088263,44.586158678477595],[7.927396539969202,44.58623732818151],[7.9274710490476465,44.586469834800305],[7.927774552145531,44.586671839354985],[7.928156645840096,44.58694215393418],[7.928640803355077,44.58756461444632],[7.928586297509099,44.58781052101155],[7.928422499036755,44.58808893657269],[7.928240130049573,44.588255590951626],[7.927553724742641,44.58867720039909],[7.926980553283908,44.58842456488817],[7.926370141463194,44.58873391545433],[7.9258934375037535,44.589989792362715],[7.924697586245765,44.59172824272896],[7.924693440377362,44.592011810959654],[7.923898447069755,44.59266299386363],[7.922342561129445,44.59439287137207],[7.92210975571965,44.59478860466817],[7.920632873615371,44.5964850210515],[7.919045531799647,44.59782938189443],[7.918901937864977,44.598098095305254],[7.919086727930197,44.59832491200915],[7.9178948237489415,44.59872773286115],[7.91592938993241,44.59939326889092],[7.9124779305109,44.60203418614509],[7.911647542257073,44.603313633156944],[7.912844774699252,44.60398223482797],[7.9144843536981035,44.60525820629733],[7.916521134460325,44.60618682411035],[7.918532730058333,44.606439974708486],[7.919059527428718,44.607930389754344],[7.919063047561974,44.607947564019526]]]}}]};

const BAROLO_BOUNDS = L.latLngBounds([44.50, 7.75], [44.75, 8.15]);

const SATELLITE = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Esri · Sentinel-2 NDVI · bortle.it', maxZoom: 18
});

const COMUNI_COLORS = {
  'Barolo':'#c9a84c','Castiglione Falletto':'#e07b54','Cherasco':'#a0c878',
  'Diano d Alba':'#78b4c8','Grinzane Cavour':'#b478c8','La Morra':'#c87878',
  'Monforte d Alba':'#78c8a0','Novello':'#c8b478','Roddi':'#7878c8',
  'Serralunga d Alba':'#c87898','Verduno':'#98c878'
};

let VIGNETO, NDVI, MORFO, META;
let selectedYear = DEFAULT_YEAR;
let selectedGid = null;
let colorMode = 'ndvi';
let mgaLayers = {};
let charts = {};
let ndviMean = {};
let ndviRange = {};
let metaById = {};
let featureByGid = {};

Promise.all([
  fetch('data/vigneto.geojson').then(r => r.json()),
  fetch('data/ndvi.json').then(r => r.json()),
  fetch('data/morfo.json').then(r => r.json()),
  fetch('data/mga_meta.json').then(r => r.json()),
]).then(([vigneto, ndvi, morfo, meta]) => {
  VIGNETO = vigneto; NDVI = ndvi; MORFO = morfo; META = meta;
  meta.forEach(m => metaById[String(m.id)] = m);
  vigneto.features.forEach(f => featureByGid[String(f.properties.gid)] = f);
  precompute();
  initMap();
  buildPanel();
  buildYearBar();
  addBoundary();
  renderMGA();
});


function addBoundary() {
  L.geoJSON(DOCG_BOUNDARY, {
    style: {
      color: '#8b2a2a',
      weight: 2,
      fillOpacity: 0,
      dashArray: '6,4',
      opacity: 0.8
    }
  }).addTo(map);
}

function precompute() {
  ANNI.forEach(y => {
    const vals = Object.values(NDVI).map(m => m[y]).filter(v => v != null);
    ndviMean[y] = vals.reduce((a,b) => a+b, 0) / vals.length;
    ndviRange[y] = { min: Math.min(...vals), max: Math.max(...vals) };
  });
}

function ndviColor(val, year) {
  if (val == null) return '#333';
  const {min, max} = ndviRange[year];
  const t = Math.max(0, Math.min(1, (val - min) / (max - min)));
  // Palette terrosa estesa — 11 stops per transizioni più morbide
  const stops = [
    [0.0,  [139, 58, 42]],   // mattone scuro
    [0.1,  [160, 82, 61]],   // terracotta scuro
    [0.2,  [184, 115, 74]],  // terracotta medio
    [0.3,  [200, 149, 92]],  // sabbia scura
    [0.4,  [212, 180, 110]], // paglia
    [0.5,  [200, 184, 112]], // giallo-verde oliva
    [0.6,  [176, 190, 110]], // oliva chiaro
    [0.7,  [154, 175, 98]],  // oliva medio
    [0.8,  [130, 170, 90]],  // oliva
    [0.9,  [107, 148, 74]],  // bosco chiaro
    [1.0,  [82, 130, 62]]    // verde bosco
  ];
  for (let i = 0; i < stops.length-1; i++) {
    const [t0,c0]=stops[i],[t1,c1]=stops[i+1];
    if (t >= t0 && t <= t1) {
      const f = (t-t0)/(t1-t0);
      return `rgb(${Math.round(c0[0]+f*(c1[0]-c0[0]))},${Math.round(c0[1]+f*(c1[1]-c0[1]))},${Math.round(c0[2]+f*(c1[2]-c0[2]))})`;
    }
  }
  return '#888';
}

function mgaColor(gid) {
  if (colorMode === 'comune') {
    const m = metaById[gid];
    return m ? (COMUNI_COLORS[m.comune] || '#888') : '#888';
  }
  return ndviColor(NDVI[gid] ? NDVI[gid][selectedYear] : null, selectedYear);
}

// Converte coordinate GeoJSON [lon,lat] → Leaflet [lat,lon], gestisce Polygon e MultiPolygon
function geojsonToLeaflet(geometry) {
  if (geometry.type === 'Polygon') {
    return geometry.coordinates.map(ring => ring.map(pt => [pt[1], pt[0]]));
  } else { // MultiPolygon
    return geometry.coordinates.map(poly => poly.map(ring => ring.map(pt => [pt[1], pt[0]])));
  }
}

function initMap() {
  window.map = L.map('map', {
    zoomControl: false,
    attributionControl: false,
    maxBounds: BAROLO_BOUNDS,
    maxBoundsViscosity: 0.9,
    minZoom: 12
  }).setView([44.625, 7.955], 13);
  L.control.zoom({ position: 'bottomright' }).addTo(map);
  SATELLITE.addTo(map);
  L.geoJSON(DOCG_BOUNDARY, { style: { color: '#8b2a2a', weight: 2, fill: false, dashArray: '6,4', opacity: 0.85 } }).addTo(map);
  setupSwitches();
}

function setupSwitches() {}

function renderMGA() {
  // Ordina per area decrescente — grandi sotto, piccole sopra
  const sorted = [...VIGNETO.features].sort((a,b) =>
    b.properties.area_vigneto_mq - a.properties.area_vigneto_mq
  );

  sorted.forEach(f => {
    const gid = String(f.properties.gid);
    const color = mgaColor(gid);
    const ndviVal = NDVI[gid] ? NDVI[gid][selectedYear] : null;
    const nome = f.properties.nome;

    if (mgaLayers[gid]) {
      mgaLayers[gid].setStyle({ fillColor: color, color: color, fillOpacity: ndviVal == null ? 0.12 : 0.72 });
    } else {
      const latlngs = geojsonToLeaflet(f.geometry);
      const poly = L.polygon(latlngs, {
        color: color, weight: 0.8,
        fillColor: color, fillOpacity: ndviVal == null ? 0.12 : 0.72, opacity: 0.9
      });
      poly.on('click', () => {
      selectMGA(gid);
      const isMobile = window.innerWidth <= 768;
      const drawerW = isMobile ? 0 : 385;
      map.fitBounds(poly.getBounds(), {
        paddingTopLeft: [60, 60],
        paddingBottomRight: [drawerW + 40, isMobile ? 120 : 60],
        maxZoom: 15
      });
    });
      poly.on('mouseover', function() {
        if (gid === selectedGid) return;
        this.setStyle({ fillOpacity: 0.9, color: '#ffffff', weight: 1.2 });
        this.bringToFront();
        this.bindTooltip(`<strong>${nome}</strong><br>NDVI ${selectedYear}: ${ndviVal != null ? ndviVal.toFixed(3) : '—'}`,
          { sticky: true, direction: 'top', offset: [0,-4] }).openTooltip();
      });
      poly.on('mouseout', function() {
        if (gid === selectedGid) return;
        this.setStyle({ fillOpacity: ndviVal == null ? 0.12 : 0.72, color: color, weight: 0.8, opacity: 0.9 });
        this.unbindTooltip();
      });
      poly.addTo(map);
      mgaLayers[gid] = poly;
    }
  });
}

function selectMGA(gid) {
  selectedGid = gid;
  const f = featureByGid[gid];
  const props = f ? f.properties : {};
  const meta = metaById[gid];
  const morfo = MORFO[gid];

  document.getElementById('meta-name').textContent = props.nome || `MGA ${gid}`;
  if (morfo) {
    document.getElementById('meta-quota').textContent = Math.round(morfo.em);
    document.getElementById('meta-slope').textContent = morfo.sl.toFixed(1);
    document.getElementById('meta-asp').textContent = morfo.ad;
  }

  Object.entries(mgaLayers).forEach(([g, l]) => {
    l.setStyle({ weight: g == gid ? 1.5 : 0.8, color: g == gid ? '#ffffff' : mgaColor(g), opacity: g == gid ? 1 : 0.85 });
  });
  mgaLayers[gid].bringToFront();

  document.querySelectorAll('.mga-item').forEach(el => el.classList.toggle('active', el.dataset.gid == gid));

  const ha = props.area_vigneto_mq ? (props.area_vigneto_mq/10000).toFixed(1) : '—';
  const nPart = props.n_particelle || props.npart || null;
  const partStr = nPart ? ` · ${nPart} parcelle` : '';
  // Quota + esposizione dal dataset morfologico — "carta d'identità"
  const m = MORFO[gid];
  const morfoStr = m ? ` · ${Math.round(m.em)} m · ${m.ad}` : '';
  document.getElementById('drawer-title').textContent = props.nome || `MGA ${gid}`;
  document.getElementById('drawer-subtitle').textContent = `${props.comune || ''} · ${ha} ha vitati${partStr}${morfoStr}`;
  document.getElementById('drawer').classList.add('open');
  document.body.classList.add('drawer-open');

  updateDrawer(gid);
}


function buildPanel() {
  const list = document.getElementById('comuni-list');
  const byComune = {};
  META.forEach(m => {
    if (!byComune[m.comune]) byComune[m.comune] = [];
    byComune[m.comune].push(m);
  });

  Object.entries(byComune).forEach(([comune, mgas]) => {
    mgas.sort((a,b) => a.nome.localeCompare(b.nome));
    const group = document.createElement('div');
    group.className = 'comune-group';
    const header = document.createElement('div');
    header.className = 'comune-header';
    const dot = `<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${COMUNI_COLORS[comune]||'#888'};margin-right:6px"></span>`;
    header.innerHTML = `<span>${dot}${comune}</span><span style="color:var(--text-mute);font-size:10px">${mgas.length}</span>`;
    const mgaList = document.createElement('div');
    mgaList.className = 'mga-list';

    mgas.forEach(m => {
      const item = document.createElement('div');
      item.className = 'mga-item';
      item.textContent = m.nome;
      item.dataset.gid = m.id;
      item.onclick = () => {
        selectMGA(m.id);
        const f = featureByGid[m.id];
        if (f) {
          const coords = f.geometry.type === 'Polygon'
            ? f.geometry.coordinates[0]
            : f.geometry.coordinates[0][0];
          const bounds = L.latLngBounds(coords.map(p => [p[1],p[0]]));
          map.fitBounds(bounds, { padding: [80, 80], maxZoom: 16 });
        }
      };
      mgaList.appendChild(item);
    });

    header.onclick = () => mgaList.classList.toggle('open');
    group.appendChild(header);
    group.appendChild(mgaList);
    list.appendChild(group);
  });

  document.getElementById('search').oninput = e => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.mga-item').forEach(item => {
      const match = item.textContent.toLowerCase().includes(q);
      item.style.display = match ? '' : 'none';
      if (match && q) item.closest('.mga-list').classList.add('open');
    });
    if (!q) document.querySelectorAll('.mga-list').forEach(l => l.classList.remove('open'));
  };
}

function buildYearBar() {
  const bar = document.getElementById('year-bar');

  // Switch NDVI/Comune a sinistra
  const switchWrap = document.createElement('div');
  switchWrap.style.cssText = 'display:flex;gap:2px;margin-right:12px;border-right:1px solid var(--border);padding-right:12px';
  ['ndvi','comune'].forEach(mode => {
    const b = document.createElement('button');
    b.className = 'yr-btn' + (mode === colorMode ? ' active' : '');
    b.textContent = mode === 'ndvi' ? 'NDVI' : 'Comune';
    b.onclick = () => {
      colorMode = mode;
      document.querySelectorAll('.cm-btn-inline').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.getElementById('year-bar').style.opacity = '1';
      
      renderMGA();
    };
    b.classList.add('cm-btn-inline');
    switchWrap.appendChild(b);
  });
  bar.appendChild(switchWrap);

  // Anni
  ANNI.forEach(y => {
    const btn = document.createElement('button');
    btn.className = 'yr-btn' + (y === selectedYear ? ' active' : '');
    btn.textContent = y;
    btn.onclick = () => {
      selectedYear = y;
      document.querySelectorAll('.yr-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Riattiva lo switch corretto
      document.querySelectorAll('.cm-btn-inline').forEach(b => {
        b.classList.toggle('active', b.textContent.toLowerCase() === colorMode || 
          (b.textContent === 'NDVI' && colorMode === 'ndvi') ||
          (b.textContent === 'Comune' && colorMode === 'comune'));
      });
      if (colorMode === 'ndvi') renderMGA();
      if (selectedGid) updateDrawer(selectedGid);
    };
    bar.appendChild(btn);
  });
}

document.getElementById('drawer-close').onclick = () => {
  document.getElementById('drawer').classList.remove('open');
  document.body.classList.remove('drawer-open');
  if (selectedGid && mgaLayers[selectedGid]) {
    mgaLayers[selectedGid].setStyle({ weight: 0.8, color: mgaColor(selectedGid) });
  }
  selectedGid = null;
  document.querySelectorAll('.mga-item').forEach(el => el.classList.remove('active'));
};

/* ============================================================ */
/* DRAWER v9 — JS additivo                                        */
/*                                                                */
/* PREREQUISITI nell'app.js esistente:                            */
/*  - sostituire updateDrawer() con la versione qui sotto        */
/*  - sostituire il subtitle in selectMGA() rimuovendo "Vigneto" */
/*    (vedi commento §SUBTITLE)                                  */
/*  - rimuovere il vecchio binding .tab-btn in fondo al file     */
/* ============================================================ */


/* ============================================================ */
/* §SUBTITLE — patch da applicare dentro selectMGA()              */
/* Cerca:                                                         */
/*   const cov = props.copertura_pct ? ...                       */
/*   ...                                                          */
/*   document.getElementById('drawer-subtitle').textContent =    */
/*     `${props.comune || ''} · ${ha} ha · Vigneto: ${cov}...`;  */
/* Sostituisci con:                                              */
/*   const nPart = props.n_particelle || props.npart || null;    */
/*   const partStr = nPart ? ` · ${nPart} parcelle` : '';        */
/*   document.getElementById('drawer-subtitle').textContent =    */
/*     `${props.comune || ''} · ${ha} ha${partStr}`;             */
/*                                                                */
/* NB: se in vigneto.geojson non c'è ancora il campo parcelle,   */
/* il subtitle resta "Comune · X ha" — nessun errore.            */
/* ============================================================ */


/* Stato globale del drawer v9 */
let drawerIndex = 'ndvi';        // 'ndvi' | 'ndmi' | 'ndre'
let andamentoMode = 'abs';       // 'abs' | 'delta'
let stagionalitaView = 'heatmap';// 'heatmap' | 'decadica'

/* Mappa indice → dataset. Quando arriveranno NDMI/NDRE, qui */
/* basterà sostituire null con il dataset corrispondente. */
function getIndexData() {
  if (drawerIndex === 'ndvi') return NDVI;
  return null; // placeholder NDMI / NDRE
}
function getIndexMean() {
  if (drawerIndex === 'ndvi') return ndviMean;
  return null;
}

/* Tooltip metodologici — testi brevi + riferimento al paragrafo */
const INFO_TIPS = {
  serie: {
    body: 'Serie annuale dell\'indice spettrale sulla parcella selezionata. Aggregazione mediana dei pixel utili sulla finestra fenologica luglio–agosto.',
    ref: '§A.3 — Metodologia'
  },
  delta: {
    body: 'Differenza tra il valore medio della MGA e la media della denominazione, calcolata anno per anno e poi mediata sul periodo. Tutte le analisi sono espresse in Δ relativo (cfr. §A.2.1: AVI non classifica in assoluto).',
    ref: '§A.2.1 — Δ su sé stessa'
  },
  stagionalita: {
    body: 'Heatmap dei valori annuali della parcella. Vista decadica in arrivo con l\'estensione della finestra di estrazione a giugno–agosto.',
    ref: '§A.5.5 — Finestra temporale'
  },
  morfo: {
    body: 'Quota, pendenza ed esposizione derivate da DTM 5m della Regione Piemonte, calcolate sui pixel interni alla geometria del vigneto reale.',
    ref: '§A.5.6 — Ritaglio uso del suolo'
  }
};

/* ============================================================ */
/* Sostituto integrale di updateDrawer()                          */
/* ============================================================ */
let _updateDrawerPending = null;
function updateDrawer(gid) {
  if (_updateDrawerPending) cancelAnimationFrame(_updateDrawerPending);
  _updateDrawerPending = requestAnimationFrame(() => {
    _updateDrawerPending = null;
    _updateDrawerImpl(gid);
  });
}

function _updateDrawerImpl(gid) {
  const dataSrc = getIndexData();
  const meanSrc = getIndexMean();
  const morfo = MORFO[gid];

  // Se dati non disponibili (NDMI/NDRE futuri), svuota grafici e mostra messaggio
  if (!dataSrc) {
    renderEmptyState(drawerIndex);
    return;
  }

  const idxData = dataSrc[gid] || {};
  const vals    = ANNI.map(y => idxData[y] ?? null);
  const means   = ANNI.map(y => meanSrc[y]);
  const deltas  = ANNI.map((y,i) => vals[i] != null ? +(vals[i] - means[i]).toFixed(4) : null);

  renderSintesi(gid, vals, means, deltas, morfo);
  renderAndamento(vals, means, deltas);
  renderStagionalita(idxData);
  renderMorfo(morfo);

  // aggiorna etichette indice ovunque
  document.querySelectorAll('.syn-idx-label').forEach(el => el.textContent = drawerIndex.toUpperCase());
  const andLbl = document.getElementById('and-label');
  if (andLbl) andLbl.textContent = `Serie ${drawerIndex.toUpperCase()} 2017–2025`;
  const stagLbl = document.getElementById('stag-label');
  if (stagLbl) stagLbl.textContent = `${drawerIndex.toUpperCase()} per anno`;
}

function renderEmptyState(idx) {
  // Sintesi
  const badges = document.getElementById('syn-badges');
  if (badges) badges.innerHTML = `<span class="syn-badge">${idx.toUpperCase()} — dati in arrivo</span>`;
  document.getElementById('syn-delta-num').textContent = '—';
  document.getElementById('syn-delta-frame').textContent = `${idx.toUpperCase()} non ancora calcolato.`;
  document.getElementById('syn-src-body').textContent = '—';

  // chart sparkline vuoto
  if (charts.sparkline) charts.sparkline.destroy();
}

/* ============================================================ */
/* RENDER — Sintesi                                              */
/* ============================================================ */
function renderSintesi(gid, vals, means, deltas, morfo) {
  // 1) Sparkline 9 anni
  if (charts.sparkline) charts.sparkline.destroy();
  charts.sparkline = new Chart(document.getElementById('chart-sparkline'), {
    type: 'line',
    data: {
      labels: ANNI,
      datasets: [{
        data: vals,
        borderColor: '#c9a84c',
        backgroundColor: 'rgba(201,168,76,0.08)',
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: '#c9a84c',
        fill: true
      }, {
        data: means,
        borderColor: 'rgba(139,42,42,0.5)',
        borderDash: [3,3],
        tension: 0.3,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: '#888', font: { size: 9 } }, grid: { display: false } },
        y: { display: false }
      }
    }
  });

  // 2) Badge annate notevoli — top/bottom Δ
  const badgeData = ANNI.map((y,i) => ({ y, d: deltas[i] })).filter(x => x.d != null);
  badgeData.sort((a,b) => Math.abs(b.d) - Math.abs(a.d));
  const top3 = badgeData.slice(0, 3);
  const badgesEl = document.getElementById('syn-badges');
  badgesEl.innerHTML = top3.map(x => {
    const cls = x.d > 0.02 ? 'cool' : (x.d < -0.04 ? 'extreme' : (x.d < 0 ? 'warm' : ''));
    const arrow = x.d > 0 ? '↑' : '↓';
    const intensity = Math.abs(x.d) > 0.04 ? arrow + arrow : arrow;
    return `<span class="syn-badge ${cls}">${x.y} ${intensity} ${x.d > 0 ? '+' : ''}${x.d.toFixed(3)}</span>`;
  }).join('');

  // 3) Δ medio + percentile
  const validDeltas = deltas.filter(d => d != null);
  const meanDelta = validDeltas.length 
    ? validDeltas.reduce((a,b)=>a+b,0) / validDeltas.length 
    : null;

  // calcolo percentile: Δ medio di ogni MGA → posizione della corrente
  const allMeanDeltas = Object.keys(getIndexData()).map(g => {
    const idx = getIndexData()[g] || {};
    const ds = ANNI.map(y => idx[y] != null ? idx[y] - getIndexMean()[y] : null).filter(v => v != null);
    return ds.length ? ds.reduce((a,b)=>a+b,0) / ds.length : null;
  }).filter(v => v != null).sort((a,b) => a - b);
  
  let pctile = null;
  if (meanDelta != null && allMeanDeltas.length) {
    const pos = allMeanDeltas.findIndex(v => v >= meanDelta);
    pctile = pos === -1 ? 100 : Math.round((pos / allMeanDeltas.length) * 100);
  }

  const dEl = document.getElementById('syn-delta-num');
  const fEl = document.getElementById('syn-delta-frame');
  if (meanDelta != null) {
    dEl.textContent = (meanDelta > 0 ? '+' : '') + meanDelta.toFixed(3);
    dEl.classList.toggle('pos', meanDelta > 0);
    dEl.classList.toggle('neg', meanDelta < 0);

    // framing relativo — niente "Rank" esplicito, descrizione qualitativa
    let frame = '';
    if (pctile != null) {
      if (pctile >= 80) frame = `Tra le MGA <strong>più vigorose</strong> rispetto alla media DOCG (${pctile}° percentile).`;
      else if (pctile >= 60) frame = `Sopra la mediana, <strong>moderatamente più vigorosa</strong> della media DOCG.`;
      else if (pctile >= 40) frame = `<strong>In linea</strong> con la media della denominazione.`;
      else if (pctile >= 20) frame = `Sotto la mediana, <strong>più contenuta</strong> della media DOCG.`;
      else frame = `Tra le MGA <strong>più contenute</strong> rispetto alla media DOCG (${pctile}° percentile).`;
    }
    fEl.innerHTML = frame;
  } else {
    dEl.textContent = '—';
    fEl.innerHTML = '';
  }

  // 4) Morfo: popolato da renderMorfo() (4 card complete dentro Sintesi)

  // 5) Origine dati
  const nValid = vals.filter(v => v != null).length;
  document.getElementById('syn-src-body').textContent =
    `Sentinel-2 L2A · ${nValid}/${ANNI.length} anni · finestra lug–ago · DTM 5m Regione Piemonte`;
}

/* ============================================================ */
/* RENDER — Andamento (ex Serie + vs Media fusi)                  */
/* ============================================================ */
function renderAndamento(vals, means, deltas) {
  if (charts.andamento) charts.andamento.destroy();

  const baseOpts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: andamentoMode === 'abs', labels: { color: '#888', font: { size: 10 } } } },
    scales: {
      x: { ticks: { color: '#888', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
      y: { ticks: { color: '#888', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  };

  if (andamentoMode === 'abs') {
    charts.andamento = new Chart(document.getElementById('chart-andamento'), {
      type: 'line',
      data: { labels: ANNI, datasets: [
        { label: 'MGA', data: vals, borderColor: '#c9a84c', backgroundColor: 'rgba(201,168,76,0.1)', tension: 0.3, pointRadius: 4, pointBackgroundColor: '#c9a84c' },
        { label: 'Media DOCG', data: means, borderColor: '#8b2a2a', borderDash: [4,4], tension: 0.3, pointRadius: 0 }
      ]},
      options: baseOpts
    });
  } else {
    charts.andamento = new Chart(document.getElementById('chart-andamento'), {
      type: 'bar',
      data: { labels: ANNI, datasets: [
        { data: deltas, backgroundColor: deltas.map(v => v == null ? '#333' : v >= 0 ? 'rgba(145,207,96,0.7)' : 'rgba(215,48,39,0.7)') }
      ]},
      options: baseOpts
    });
  }
}

/* ============================================================ */
/* RENDER — Stagionalità (oggi solo heatmap; decadica disabled)   */
/* ============================================================ */
function renderStagionalita(idxData) {
  const hc = document.getElementById('heatmap-container');
  const dWrap = document.getElementById('decadica-wrap');
  if (!hc) return;

  if (stagionalitaView === 'heatmap') {
    hc.hidden = false;
    dWrap.hidden = true;
    hc.innerHTML = '';

    const range = (drawerIndex === 'ndvi') ? ndviRange : null;
    const mean = (drawerIndex === 'ndvi') ? ndviMean : null;

    ANNI.forEach((y, i) => {
      const val = idxData[y];
      let pct = 0;
      let meanPct = null;
      if (range && range[y]) {
        const { min, max } = range[y];
        if (val != null && max > min) {
          pct = Math.max(4, Math.min(100, ((val - min) / (max - min)) * 100));
        }
        if (mean && mean[y] != null && max > min) {
          meanPct = Math.max(0, Math.min(100, ((mean[y] - min) / (max - min)) * 100));
        }
      }
      const row = document.createElement('div');
      row.className = 'heatmap-row';
      row.style.setProperty('--bar-delay', (i * 50) + 'ms');
      const meanMarker = meanPct != null
        ? `<div class="heatmap-mean" style="left:${meanPct}%" title="Media DOCG ${y}: ${mean[y].toFixed(3)}"></div>`
        : '';
      row.innerHTML = `
        <span class="heatmap-year">${y}</span>
        <div class="heatmap-track">
          <div class="heatmap-bar" style="width:${pct}%; background:${ndviColor(val, y)}"></div>
          ${meanMarker}
        </div>
        <span class="heatmap-val">${val ? val.toFixed(3) : '—'}</span>
      `;
      hc.appendChild(row);
    });
  } else {
    hc.hidden = true;
    dWrap.hidden = false;
    // Decadica: placeholder finché non arrivano i dati
  }
}

/* ============================================================ */
/* RENDER — Morfo (identica a prima)                              */
/* ============================================================ */
function renderMorfo(morfo) {
  const mg = document.getElementById('morfo-grid');
  if (!morfo) { mg.innerHTML = ''; return; }
  mg.innerHTML = `
    <div class="morfo-card"><div class="mc-label">Quota media</div><div class="mc-val">${Math.round(morfo.em)}<span class="mc-unit">m slm</span></div></div>
    <div class="morfo-card"><div class="mc-label">Escursione</div><div class="mc-val">${Math.round(morfo.ex-morfo.ei)}<span class="mc-unit">m</span></div></div>
    <div class="morfo-card"><div class="mc-label">Pendenza</div><div class="mc-val">${morfo.sl.toFixed(1)}<span class="mc-unit">°</span></div></div>
    <div class="morfo-card"><div class="mc-label">Esposizione</div><div class="mc-val">${morfo.ad}<span class="mc-unit">(${Math.round(morfo.am)}°)</span></div></div>
  `;
}

/* ============================================================ */
/* BINDING — Tab, indice, segment toggle, info tip                */
/* ============================================================ */

// Tab — sostituisce il binding originale in fondo all'app.js
document.querySelectorAll('#drawer-tabs .tab-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('#drawer-tabs .tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('#drawer-body .tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    // Toggle classe per legenda marker (fallback senza :has)
    document.body.classList.toggle('tab-stagionalita-active', btn.dataset.tab === 'stagionalita');
  };
});

// Stato iniziale: tab Sintesi attiva → legenda marker off
document.body.classList.remove('tab-stagionalita-active');

// Selettore indice globale
document.querySelectorAll('.idx-btn').forEach(btn => {
  btn.onclick = () => {
    if (btn.disabled || btn.classList.contains('disabled')) return;
    document.querySelectorAll('.idx-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    drawerIndex = btn.dataset.idx;
    if (selectedGid) updateDrawer(selectedGid);
  };
});

// Toggle Andamento (Valori / Δ)
document.querySelectorAll('#tab-andamento .seg-btn').forEach(btn => {
  btn.onclick = () => {
    if (btn.disabled) return;
    document.querySelectorAll('#tab-andamento .seg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    andamentoMode = btn.dataset.mode;
    if (selectedGid) updateDrawer(selectedGid);
  };
});

// Toggle Stagionalità (Heatmap / Decadica)
document.querySelectorAll('#tab-stagionalita .seg-btn').forEach(btn => {
  btn.onclick = () => {
    if (btn.disabled) return;
    document.querySelectorAll('#tab-stagionalita .seg-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    stagionalitaView = btn.dataset.view;
    if (selectedGid) updateDrawer(selectedGid);
  };
});

// Info tip — popover singolo riutilizzato
(function bindInfoTips() {
  const pop = document.getElementById('info-popover');
  const body = document.getElementById('ip-body');
  const ref = document.getElementById('ip-ref');

  function show(target) {
    const key = target.dataset.info;
    const info = INFO_TIPS[key];
    if (!info) return;
    body.textContent = info.body;
    ref.textContent = info.ref;
    pop.hidden = false;
    // posizione: sotto il tip, allineato a sinistra
    const rect = target.getBoundingClientRect();
    const popH = pop.offsetHeight;
    const popW = pop.offsetWidth;
    let top = rect.bottom + 6;
    let left = rect.left;
    // se sfora a destra del viewport, ancora a sinistra
    if (left + popW > window.innerWidth - 8) left = window.innerWidth - popW - 8;
    // se sfora in basso, mostra sopra
    if (top + popH > window.innerHeight - 8) top = rect.top - popH - 6;
    pop.style.top = top + 'px';
    pop.style.left = left + 'px';
  }
  function hide() { pop.hidden = true; }

  document.body.addEventListener('mouseover', e => {
    if (e.target.classList && e.target.classList.contains('info-tip')) show(e.target);
  });
  document.body.addEventListener('mouseout', e => {
    if (e.target.classList && e.target.classList.contains('info-tip')) hide();
  });
  // Mobile/tap
  document.body.addEventListener('click', e => {
    if (e.target.classList && e.target.classList.contains('info-tip')) {
      if (pop.hidden) show(e.target); else hide();
      e.stopPropagation();
    } else {
      hide();
    }
  });
})();
