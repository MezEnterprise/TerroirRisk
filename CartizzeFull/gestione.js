/* =========================================================================
   gestione.js  —  VISTA GESTIONE (modello "kcal della vigna") per Cartizze
   -------------------------------------------------------------------------
   Caricato DOPO app.js, moon.js, resilienza.js. Stesso pattern di override:
   la luna ha priorita', poi la resilienza, poi la gestione, poi base.
   Nessun fetch: dati embeddati, gia' calcolati dal modello kcal.

   MODELLO (validato con agronomo, vocale dell'11/06; CORRETTO 10/8/2026):
   due assi -> DOTAZIONE (vigore medio, NDVI: quanto il terreno nutre da se')
   x TENUTA IDRICA (quanto regge nelle annate secche).
   **CORREZIONE 10/8/2026: TENUTA ora su delta NDMI 2022 (indice idrico),
   non piu' su delta NDVI 2022 (indice fogliare) — la tenuta "idrica" deve
   stare sull'indice dell'acqua. Concordanza con la vecchia formula: 85.1%
   (61/410 parcelle cambiano stato, swap solo R<->D e S<->X come atteso).
   Caso concreto che ha motivato il cambio: AVI_0365 (Vigna La Rivetta,
   Villa Sandi) era "D — serve acqua" su NDVI, e' "R — mantieni" su NDMI —
   contraddiceva la vista Resilienza, che mostra quella parcella come tra
   le piu' resistenti del colle nel 2022.**
   Popolazione: 410/554 parcelle con serie storica completa su entrambi gli
   indici (le insufficient_data e le prive di copertura restano fuori da
   GEST, drawer mostra "dato non disponibile", nessun quinto stato inventato).
   Soglie ricalcolate su questa popolazione (NON piu' 0.728/-0.100 delle
   83 vigne storiche): dotazione 0.000, tenuta_NDMI −0.0723.
   CORREZIONE AGRONOMO (originale, ancora valida): il calo nelle secche e'
   SETE, non fame. In asciutta su Glera la pianta l'azoto se lo procura;
   quindi l'azione sulle vigne vigorose-ma-instabili e' ACQUA, non concime.
   Il concime resta solo come piccola restituzione di cio' che la vendemmia
   asporta (nota trasversale).
   ========================================================================= */

/* parcelle con nome proprio dichiarato (etichetta normata "Vigna", non anonime come le altre) */
const GEST_NOMI = {
  'AVI_0365': 'Vigna La Rivetta \u00b7 Villa Sandi'
};

/* vid -> [dotaz_rel, tenuta_ndmi_2022, stato]  (R=rigogliosa D=discontinua S=sobria X=sofferenza) */
const GEST = {"AVI_0001":[0.0142,-0.1102,"D"],"AVI_0002":[0.0007,-0.0445,"R"],"AVI_0005":[-0.0254,-0.0606,"S"],"AVI_0006":[0.0076,-0.0978,"D"],"AVI_0011":[-0.0412,-0.139,"X"],"AVI_0014":[0.0174,-0.0823,"D"],"AVI_0017":[0.0466,-0.0547,"R"],"AVI_0018":[0.0827,-0.0492,"R"],"AVI_0019":[0.0803,-0.0538,"R"],"AVI_0020":[-0.0305,-0.077,"X"],"AVI_0021":[0.0322,-0.0968,"D"],"AVI_0022":[0.0157,-0.0914,"D"],"AVI_0023":[0.0464,-0.0891,"D"],"AVI_0024":[0.0384,-0.09,"D"],"AVI_0025":[0.0394,-0.0696,"R"],"AVI_0026":[0.0384,-0.0553,"R"],"AVI_0027":[0.0674,-0.0388,"R"],"AVI_0028":[0.0414,-0.0697,"R"],"AVI_0031":[0.0016,-0.0409,"R"],"AVI_0035":[-0.013,-0.0607,"S"],"AVI_0036":[-0.0045,-0.059,"S"],"AVI_0037":[0.0059,-0.1002,"D"],"AVI_0038":[-0.022,-0.1033,"X"],"AVI_0039":[0.0204,-0.0747,"D"],"AVI_0040":[0.0285,-0.0713,"R"],"AVI_0041":[0.0003,-0.0855,"D"],"AVI_0042":[-0.0439,-0.0231,"S"],"AVI_0043":[0.0346,-0.0809,"D"],"AVI_0044":[0.043,-0.0864,"D"],"AVI_0045":[0.052,-0.0846,"D"],"AVI_0047":[0.051,-0.0984,"D"],"AVI_0048":[0.0344,-0.0712,"R"],"AVI_0049":[-0.0038,-0.0912,"X"],"AVI_0050":[0.0073,-0.093,"D"],"AVI_0051":[0.0182,-0.1036,"D"],"AVI_0052":[0.0287,-0.0958,"D"],"AVI_0053":[0.0329,-0.0997,"D"],"AVI_0056":[0.0127,-0.0959,"D"],"AVI_0058":[-0.0013,-0.1355,"X"],"AVI_0059":[-0.0369,-0.1157,"X"],"AVI_0060":[0.0402,-0.0992,"D"],"AVI_0061":[-0.0007,-0.0746,"X"],"AVI_0062":[0.0204,-0.1079,"D"],"AVI_0066":[0.0328,-0.0891,"D"],"AVI_0067":[0.0243,-0.0189,"R"],"AVI_0069":[0.0317,-0.0787,"D"],"AVI_0070":[-0.022,-0.0637,"S"],"AVI_0072":[-0.0826,-0.0655,"S"],"AVI_0074":[-0.0006,-0.0097,"S"],"AVI_0075":[-0.0133,-0.0571,"S"],"AVI_0076":[-0.0156,-0.0444,"S"],"AVI_0077":[-0.0943,-0.0606,"S"],"AVI_0078":[0.0194,-0.0969,"D"],"AVI_0079":[-0.0303,-0.0754,"X"],"AVI_0080":[-0.1251,-0.0589,"S"],"AVI_0081":[-0.0625,-0.0946,"X"],"AVI_0083":[-0.0855,-0.0409,"S"],"AVI_0084":[0.0258,-0.08,"D"],"AVI_0085":[-0.0143,-0.1058,"X"],"AVI_0086":[-0.0683,-0.1151,"X"],"AVI_0087":[-0.0378,-0.111,"X"],"AVI_0088":[-0.0089,-0.1016,"X"],"AVI_0089":[-0.0062,-0.1124,"X"],"AVI_0090":[-0.0088,-0.1283,"X"],"AVI_0092":[-0.0245,-0.1425,"X"],"AVI_0093":[-0.0294,-0.1347,"X"],"AVI_0094":[-0.107,-0.1169,"X"],"AVI_0095":[0.0341,-0.0631,"R"],"AVI_0096":[0.0671,-0.0351,"R"],"AVI_0097":[0.0502,-0.0587,"R"],"AVI_0098":[0.0446,-0.0695,"R"],"AVI_0099":[0.0267,-0.0651,"R"],"AVI_0100":[-0.0432,-0.0683,"S"],"AVI_0101":[0.0251,-0.0842,"D"],"AVI_0102":[-0.0276,-0.0533,"S"],"AVI_0103":[0.0165,-0.0685,"R"],"AVI_0107":[-0.0523,-0.0529,"S"],"AVI_0108":[0.0033,-0.0864,"D"],"AVI_0109":[0.0108,-0.0866,"D"],"AVI_0110":[-0.0211,-0.099,"X"],"AVI_0111":[-0.036,-0.1113,"X"],"AVI_0113":[0.0037,-0.0996,"D"],"AVI_0114":[-0.0371,-0.0886,"X"],"AVI_0116":[0.0453,-0.0917,"D"],"AVI_0117":[0.012,-0.0959,"D"],"AVI_0118":[-0.0124,-0.0554,"S"],"AVI_0119":[-0.016,-0.064,"S"],"AVI_0120":[0.031,-0.1057,"D"],"AVI_0122":[0.0143,-0.1137,"D"],"AVI_0123":[0.0115,-0.0875,"D"],"AVI_0124":[0.0204,-0.0803,"D"],"AVI_0125":[-0.0121,-0.0471,"S"],"AVI_0126":[0.0302,-0.0411,"R"],"AVI_0127":[0.0236,-0.0445,"R"],"AVI_0128":[0.0307,-0.0464,"R"],"AVI_0129":[0.0528,-0.0413,"R"],"AVI_0130":[0.048,-0.0444,"R"],"AVI_0133":[0.0482,-0.0917,"D"],"AVI_0134":[0.0437,-0.0766,"D"],"AVI_0135":[0.0771,-0.0605,"R"],"AVI_0136":[0.0317,-0.0611,"R"],"AVI_0137":[0.015,-0.0593,"R"],"AVI_0138":[0.0553,-0.0617,"R"],"AVI_0146":[0.0426,-0.0884,"D"],"AVI_0147":[0.0242,-0.0807,"D"],"AVI_0148":[0.0487,-0.0637,"R"],"AVI_0150":[0.023,-0.0879,"D"],"AVI_0151":[0.0568,-0.0761,"D"],"AVI_0152":[-0.0062,-0.1025,"X"],"AVI_0153":[-0.0118,-0.0984,"X"],"AVI_0154":[-0.0072,-0.1216,"X"],"AVI_0155":[0.0017,-0.1224,"D"],"AVI_0156":[0.0062,-0.1304,"D"],"AVI_0158":[0.06,-0.1037,"D"],"AVI_0159":[0.0811,-0.0843,"D"],"AVI_0161":[0.0577,-0.1135,"D"],"AVI_0163":[0.0326,-0.066,"R"],"AVI_0164":[0.0139,-0.0906,"D"],"AVI_0165":[0.021,-0.0727,"D"],"AVI_0166":[-0.0247,-0.1075,"X"],"AVI_0168":[-0.0213,-0.0638,"S"],"AVI_0169":[0.0307,-0.0639,"R"],"AVI_0170":[-0.0776,-0.0743,"X"],"AVI_0172":[0.0058,-0.1093,"D"],"AVI_0173":[0.0125,-0.1019,"D"],"AVI_0174":[-0.0045,-0.0992,"X"],"AVI_0175":[-0.0091,-0.1035,"X"],"AVI_0177":[-0.0057,-0.0903,"X"],"AVI_0179":[0.0296,-0.1127,"D"],"AVI_0180":[0.0309,-0.1077,"D"],"AVI_0181":[0.0251,-0.1144,"D"],"AVI_0182":[-0.0282,-0.128,"X"],"AVI_0183":[-0.0019,-0.1045,"X"],"AVI_0184":[0.0131,-0.1015,"D"],"AVI_0185":[-0.0243,-0.1151,"X"],"AVI_0186":[-0.0493,-0.0775,"X"],"AVI_0187":[0.0108,-0.1166,"D"],"AVI_0188":[-0.0277,-0.1207,"X"],"AVI_0189":[-0.0116,-0.1388,"X"],"AVI_0192":[-0.0641,-0.053,"S"],"AVI_0194":[-0.0834,-0.1163,"X"],"AVI_0195":[-0.0436,-0.1075,"X"],"AVI_0196":[0.0245,-0.1074,"D"],"AVI_0197":[0.0125,-0.1233,"D"],"AVI_0198":[-0.038,-0.1239,"X"],"AVI_0199":[0.0071,-0.1364,"D"],"AVI_0200":[0.02,-0.1063,"D"],"AVI_0201":[0.0151,-0.1239,"D"],"AVI_0202":[0.0224,-0.1237,"D"],"AVI_0203":[0.0438,-0.11,"D"],"AVI_0204":[0.0392,-0.1198,"D"],"AVI_0205":[0.0151,-0.1228,"D"],"AVI_0206":[0.0169,-0.1231,"D"],"AVI_0208":[-0.0052,-0.1176,"X"],"AVI_0209":[0.0146,-0.1064,"D"],"AVI_0210":[-0.0069,-0.0795,"X"],"AVI_0211":[0.0124,-0.0818,"D"],"AVI_0212":[-0.1543,-0.0541,"S"],"AVI_0213":[0.004,-0.0578,"R"],"AVI_0214":[-0.006,-0.0542,"S"],"AVI_0217":[-0.0584,0.0269,"S"],"AVI_0219":[-0.0845,0.0072,"S"],"AVI_0222":[0.0008,-0.0446,"R"],"AVI_0225":[-0.179,-0.0361,"S"],"AVI_0226":[-0.1578,-0.0708,"S"],"AVI_0227":[-0.027,-0.1226,"X"],"AVI_0228":[-0.0033,-0.0868,"X"],"AVI_0229":[0.0003,-0.1097,"D"],"AVI_0231":[-0.2661,-0.0208,"S"],"AVI_0235":[-0.0058,-0.0726,"X"],"AVI_0236":[-0.0419,-0.0598,"S"],"AVI_0237":[0.0324,-0.1038,"D"],"AVI_0238":[0.0323,-0.018,"R"],"AVI_0239":[-0.0024,-0.0567,"S"],"AVI_0240":[0.0157,-0.0186,"R"],"AVI_0241":[0.0242,-0.0397,"R"],"AVI_0242":[0.0034,-0.0477,"R"],"AVI_0243":[0.0072,-0.0234,"R"],"AVI_0244":[-0.0058,-0.0372,"S"],"AVI_0245":[0.0355,-0.0451,"R"],"AVI_0246":[0.0272,-0.0426,"R"],"AVI_0247":[0.0186,-0.0383,"R"],"AVI_0248":[0.0229,-0.0599,"R"],"AVI_0249":[0.0165,-0.0583,"R"],"AVI_0254":[0.013,-0.0815,"D"],"AVI_0256":[0.0017,-0.1699,"D"],"AVI_0259":[0.046,-0.0502,"R"],"AVI_0260":[0.0252,-0.0572,"R"],"AVI_0261":[0.0318,-0.0914,"D"],"AVI_0262":[-0.0381,-0.0766,"X"],"AVI_0264":[-0.0004,-0.0821,"X"],"AVI_0266":[0.0176,-0.0704,"R"],"AVI_0268":[-0.0775,-0.0507,"S"],"AVI_0269":[-0.2079,-0.0321,"S"],"AVI_0270":[-0.0042,-0.0509,"S"],"AVI_0271":[-0.0094,-0.048,"S"],"AVI_0272":[0.0408,-0.0837,"D"],"AVI_0273":[0.0383,-0.0722,"R"],"AVI_0274":[0.0367,-0.0655,"R"],"AVI_0275":[0.0015,-0.066,"R"],"AVI_0277":[0.0064,-0.0419,"R"],"AVI_0278":[0.0047,-0.0348,"R"],"AVI_0279":[-0.0462,-0.1056,"X"],"AVI_0281":[-0.107,-0.0799,"X"],"AVI_0282":[-0.1432,-0.0465,"S"],"AVI_0283":[-0.0307,-0.0493,"S"],"AVI_0285":[0.0076,-0.0073,"R"],"AVI_0287":[0.0055,-0.0646,"R"],"AVI_0288":[0.0015,-0.0909,"D"],"AVI_0289":[0.0222,-0.0529,"R"],"AVI_0290":[0.0591,-0.0369,"R"],"AVI_0291":[0.0329,-0.0291,"R"],"AVI_0293":[0.0467,-0.0664,"R"],"AVI_0296":[0.034,-0.0383,"R"],"AVI_0297":[0.0388,-0.0573,"R"],"AVI_0298":[0.0295,-0.0766,"D"],"AVI_0299":[0.0597,-0.0478,"R"],"AVI_0300":[0.0548,-0.0374,"R"],"AVI_0301":[-0.0029,-0.0639,"S"],"AVI_0302":[-0.0316,-0.0391,"S"],"AVI_0303":[0.0128,-0.051,"R"],"AVI_0304":[0.0338,-0.0483,"R"],"AVI_0305":[-0.0225,-0.0073,"S"],"AVI_0306":[0.0202,-0.0357,"R"],"AVI_0307":[-0.0169,-0.0475,"S"],"AVI_0310":[0.056,-0.0646,"R"],"AVI_0311":[-0.0185,-0.0482,"S"],"AVI_0312":[-0.0107,-0.0452,"S"],"AVI_0314":[-0.0241,-0.0495,"S"],"AVI_0315":[-0.0099,-0.0075,"S"],"AVI_0316":[0.0122,-0.0426,"R"],"AVI_0319":[-0.0083,-0.022,"S"],"AVI_0320":[0.0057,-0.0562,"R"],"AVI_0321":[-0.0321,-0.0657,"S"],"AVI_0323":[0.0062,-0.0686,"R"],"AVI_0325":[0.0357,-0.071,"R"],"AVI_0326":[-0.0518,-0.0572,"S"],"AVI_0329":[0.0527,-0.0714,"R"],"AVI_0330":[-0.0042,-0.0521,"S"],"AVI_0331":[-0.0106,-0.0781,"X"],"AVI_0332":[-0.0048,-0.0817,"X"],"AVI_0333":[-0.0484,-0.085,"X"],"AVI_0334":[-0.0069,-0.0503,"S"],"AVI_0335":[0.0001,-0.0387,"R"],"AVI_0336":[0.0258,-0.088,"D"],"AVI_0337":[0.0232,-0.0643,"R"],"AVI_0338":[0.0097,-0.0712,"R"],"AVI_0340":[0.026,-0.0715,"R"],"AVI_0341":[0.0018,-0.068,"R"],"AVI_0343":[0.0373,-0.0622,"R"],"AVI_0344":[0.0153,-0.0589,"R"],"AVI_0345":[-0.075,-0.0618,"S"],"AVI_0346":[0.0373,-0.0501,"R"],"AVI_0349":[0.0032,-0.0402,"R"],"AVI_0350":[0.0139,-0.0679,"R"],"AVI_0351":[0.0343,-0.0159,"R"],"AVI_0352":[0.0166,-0.0247,"R"],"AVI_0353":[-0.1329,-0.0467,"S"],"AVI_0354":[0.0525,-0.0736,"D"],"AVI_0355":[-0.0247,-0.0711,"S"],"AVI_0356":[-0.0435,-0.0641,"S"],"AVI_0357":[0.0082,-0.0479,"R"],"AVI_0358":[0.0319,-0.0359,"R"],"AVI_0361":[0.0258,-0.029,"R"],"AVI_0362":[0.0029,-0.0438,"R"],"AVI_0363":[0.016,-0.0279,"R"],"AVI_0364":[0.0078,-0.0354,"R"],"AVI_0365":[0.0176,-0.058,"R"],"AVI_0366":[0.0411,-0.0724,"D"],"AVI_0367":[0.014,-0.066,"R"],"AVI_0369":[-0.0142,-0.1005,"X"],"AVI_0373":[0.0301,-0.0165,"R"],"AVI_0374":[-0.0155,-0.0412,"S"],"AVI_0375":[-0.0036,-0.0421,"S"],"AVI_0376":[-0.0519,-0.0843,"X"],"AVI_0377":[-0.0032,-0.0728,"X"],"AVI_0378":[-0.0493,-0.0563,"S"],"AVI_0379":[-0.082,-0.0319,"S"],"AVI_0380":[-0.0418,-0.0713,"S"],"AVI_0381":[0.0728,-0.0881,"D"],"AVI_0382":[0.069,-0.1196,"D"],"AVI_0384":[0.0397,-0.065,"R"],"AVI_0386":[-0.0131,-0.0409,"S"],"AVI_0387":[0.0752,-0.0972,"D"],"AVI_0388":[0.041,-0.1052,"D"],"AVI_0389":[0.022,-0.0827,"D"],"AVI_0390":[0.0516,-0.1064,"D"],"AVI_0392":[0.0432,-0.0622,"R"],"AVI_0393":[-0.0269,-0.0544,"S"],"AVI_0394":[-0.1139,-0.0713,"S"],"AVI_0395":[-0.0274,-0.0748,"X"],"AVI_0396":[-0.0447,-0.0548,"S"],"AVI_0397":[-0.008,-0.0683,"S"],"AVI_0398":[0.0166,-0.0552,"R"],"AVI_0399":[-0.0153,-0.0479,"S"],"AVI_0400":[-0.0501,-0.0635,"S"],"AVI_0402":[-0.061,-0.0659,"S"],"AVI_0403":[-0.0371,-0.105,"X"],"AVI_0404":[-0.0147,-0.0908,"X"],"AVI_0405":[-0.0231,-0.0512,"S"],"AVI_0406":[0.0288,-0.0349,"R"],"AVI_0407":[-0.0835,-0.0482,"S"],"AVI_0408":[-0.0463,-0.0494,"S"],"AVI_0409":[0.0585,-0.0474,"R"],"AVI_0410":[0.0277,-0.0573,"R"],"AVI_0411":[0.0036,-0.0768,"D"],"AVI_0412":[0.0322,-0.0042,"R"],"AVI_0413":[0.0027,-0.009,"R"],"AVI_0415":[-0.0203,-0.058,"S"],"AVI_0416":[-0.0064,-0.0573,"S"],"AVI_0417":[0.0745,-0.0135,"R"],"AVI_0418":[0.0196,-0.0741,"D"],"AVI_0421":[0.064,-0.0624,"R"],"AVI_0423":[0.0369,-0.0945,"D"],"AVI_0424":[0.029,-0.0999,"D"],"AVI_0425":[0.0271,-0.096,"D"],"AVI_0426":[-0.023,-0.0659,"S"],"AVI_0427":[0.0302,-0.1008,"D"],"AVI_0429":[0.0467,-0.0919,"D"],"AVI_0430":[0.0396,-0.0929,"D"],"AVI_0433":[0.0105,-0.0679,"R"],"AVI_0434":[0.0197,-0.0858,"D"],"AVI_0437":[0.0465,-0.0707,"R"],"AVI_0439":[0.0141,-0.0777,"D"],"AVI_0440":[-0.0157,-0.0461,"S"],"AVI_0442":[-0.0571,-0.0139,"S"],"AVI_0444":[-0.064,-0.0799,"X"],"AVI_0447":[0.0129,-0.0468,"R"],"AVI_0451":[0.005,-0.0377,"R"],"AVI_0452":[0.0048,-0.0677,"R"],"AVI_0453":[0.0424,-0.036,"R"],"AVI_0454":[-0.0065,-0.0769,"X"],"AVI_0456":[-0.0083,-0.0871,"X"],"AVI_0457":[0.028,-0.043,"R"],"AVI_0459":[-0.0396,-0.0525,"S"],"AVI_0461":[-0.0073,-0.0675,"S"],"AVI_0462":[-0.0003,-0.0847,"X"],"AVI_0463":[0.0111,-0.083,"D"],"AVI_0464":[0.0214,-0.0874,"D"],"AVI_0465":[-0.013,-0.0881,"X"],"AVI_0466":[-0.0243,-0.092,"X"],"AVI_0467":[0.0044,-0.0854,"D"],"AVI_0469":[0.0024,-0.0389,"R"],"AVI_0470":[-0.0184,-0.0537,"S"],"AVI_0471":[0.0122,-0.0705,"R"],"AVI_0472":[-0.0553,-0.0941,"X"],"AVI_0474":[0.0007,-0.0867,"D"],"AVI_0475":[0.0028,-0.0462,"R"],"AVI_0476":[0.0189,-0.0853,"D"],"AVI_0477":[-0.0152,-0.0824,"X"],"AVI_0478":[0.0359,-0.0829,"D"],"AVI_0479":[0.0018,-0.0784,"D"],"AVI_0480":[0.001,-0.0661,"R"],"AVI_0481":[-0.0126,-0.0853,"X"],"AVI_0482":[-0.1019,-0.0817,"X"],"AVI_0483":[-0.0065,-0.078,"X"],"AVI_0484":[0.0503,-0.0933,"D"],"AVI_0485":[-0.0221,-0.1113,"X"],"AVI_0487":[-0.0318,-0.112,"X"],"AVI_0488":[-0.0084,-0.1298,"X"],"AVI_0489":[0.0203,-0.0821,"D"],"AVI_0490":[0.0381,-0.0972,"D"],"AVI_0491":[0.0099,-0.0658,"R"],"AVI_0492":[0.0543,-0.0304,"R"],"AVI_0494":[0.0273,-0.0002,"R"],"AVI_0495":[0.0134,-0.0529,"R"],"AVI_0496":[-0.0005,-0.0479,"S"],"AVI_0497":[-0.0046,-0.03,"S"],"AVI_0498":[-0.0097,-0.0831,"X"],"AVI_0499":[-0.0359,-0.0666,"S"],"AVI_0501":[-0.0002,-0.0381,"S"],"AVI_0502":[0.0207,-0.0328,"R"],"AVI_0503":[-0.0203,-0.0749,"X"],"AVI_0504":[-0.015,-0.0255,"S"],"AVI_0505":[-0.0141,-0.0509,"S"],"AVI_0506":[-0.0137,-0.0583,"S"],"AVI_0507":[-0.0397,-0.0539,"S"],"AVI_0509":[-0.0051,-0.1017,"X"],"AVI_0510":[-0.0065,-0.1014,"X"],"AVI_0511":[-0.0565,-0.1108,"X"],"AVI_0512":[0.026,-0.0961,"D"],"AVI_0513":[-0.0023,-0.0984,"X"],"AVI_0514":[-0.0137,-0.094,"X"],"AVI_0515":[-0.0138,-0.101,"X"],"AVI_0516":[-0.0239,-0.0503,"S"],"AVI_0517":[-0.0103,-0.0627,"S"],"AVI_0518":[0.0071,-0.0769,"D"],"AVI_0519":[0.0121,-0.0693,"R"],"AVI_0520":[-0.0127,-0.0523,"S"],"AVI_0524":[0.0292,-0.0738,"D"],"AVI_0525":[0.0366,-0.0769,"D"],"AVI_0527":[0.0036,-0.0721,"R"],"AVI_0528":[-0.0041,-0.0782,"X"],"AVI_0530":[-0.0082,-0.0768,"X"],"AVI_0531":[-0.0058,-0.0732,"X"],"AVI_0533":[-0.0253,-0.0592,"S"],"AVI_0534":[-0.0122,-0.0778,"X"],"AVI_0537":[-0.0027,-0.1042,"X"],"AVI_0538":[-0.0069,-0.0708,"X"],"AVI_0540":[-0.0079,-0.0785,"X"],"AVI_0541":[-0.0076,-0.05,"S"],"AVI_0542":[-0.0034,-0.112,"X"],"AVI_0543":[-0.0135,-0.0748,"X"],"AVI_0546":[-0.0484,-0.073,"X"],"AVI_0547":[-0.0488,-0.0595,"X"],"AVI_0548":[-0.0303,-0.0566,"X"],"AVI_0549":[-0.0474,-0.0403,"S"],"AVI_0550":[-0.0124,-0.0588,"X"],"AVI_0552":[0.0301,-0.019,"R"],"AVI_0554":[-0.0548,-0.0571,"X"]};

/* definizione dei 4 stati: colore-foglia, nome, azione, testi drawer */
const GEST_STATI = {
  R: { col:'#1D9E75', nome:'Rigogliosa', azione:'mantieni', colAz:'#1D9E75',
       vede:'vigore alto e costante, regge anche le annate secche',
       cosa:'il terreno la nutre da se\u2019: suolo profondo, riserve idriche proprie',
       vigna:'non forzare. solo piccola restituzione di cio\u2019 che la vendemmia asporta',
       cantina:'base solida e regolare; raramente d\u00e0 le punte di concentrazione delle pi\u00f9 magre' },
  D: { col:'#EF9F27', nome:'Discontinua', azione:'acqua', colAz:'#BA7517',
       vede:'vigorosa nelle buone annate, cala quando manca la pioggia',
       cosa:'il limite \u00e8 l\u2019acqua, non il nutrimento: nelle secche ha sete, non fame',
       vigna:'gestione idrica (soccorso, bacino, pacciamatura); concime solo di restituzione',
       cantina:'lo stress idrico lieve pu\u00f2 concentrare zuccheri e aromi. spesso un pregio, da leggere col palato' },
  S: { col:'#B4B2A9', nome:'Sobria', azione:'gestisci', colAz:'#8a8478',
       vede:'vigore contenuto ma stabile negli anni',
       cosa:'pianta in equilibrio su suolo magro, resa naturalmente bassa',
       vigna:'non spingere la crescita; controlla solo il drenaggio',
       cantina:'la magrezza \u00e8 spesso qualit\u00e0 nel Cartizze: bassa resa, pi\u00f9 concentrazione' },
  X: { col:'#993C1D', nome:'In sofferenza', azione:'investi', colAz:'#993C1D',
       vede:'vigore basso e instabile ogni anno',
       cosa:'limite strutturale: la pianta non trova acqua a sufficienza',
       vigna:'qui un bacino o l\u2019irrigazione di soccorso si ripagano nel tempo',
       cantina:'difficile cavarne costanza; da valutare se vale l\u2019investimento idrico' }
};

let gestMode = false;

const _stile_g = stile;
const _ricolora_g = ricolora;
const _aggLegenda_g = aggLegenda;

function _gActive(){ return typeof notturnoMode!=='undefined' && notturnoMode; }
function _gResil(){ return typeof resilMode!=='undefined' && resilMode; }

/* override stile: luna > resilienza > gestione > base */
stile = function(vid){
  if(_gActive() || _gResil() || !gestMode) return _stile_g(vid);
  const sel = vid===vidSel;
  const g = GEST[vid];
  const col = g ? GEST_STATI[g[2]].col : '#333';
  return { fillColor:col,
    fillOpacity: vidSel&&!sel ? 0.4 : 0.72,
    color: sel ? '#f0d878' : '#1a1a1a',
    weight: sel ? 3 : 0.7 };
};

ricolora = function(){
  if(_gActive() || _gResil() || !gestMode) return _ricolora_g();
  for(const vid in layers){
    layers[vid].setStyle(stile(vid));
    const g = GEST[vid], v = DATI[vid];
    if(g){
      const st = GEST_STATI[g[2]];
      const nome = GEST_NOMI[vid] || ((v&&v.c?v.c:'Cartizze') + (v&&v.q?' . '+v.q+' m':''));
      if(layers[vid].getTooltip())
        layers[vid].setTooltipContent(nome+' \u00b7 '+st.nome+' \u2192 '+st.azione);
    }
  }
  aggLegenda();
};

/* legenda: 4 pastiglie-foglia invece della rampa continua */
aggLegenda = function(){
  if(_gActive() || _gResil() || !gestMode){
    const b=document.querySelector('#legend .leg-bar');
    if(b){ b.style.display=''; }
    const ex=document.getElementById('gest-legend'); if(ex) ex.style.display='none';
    return _aggLegenda_g();
  }
  const t=document.getElementById('leg-title');
  const bar=document.querySelector('#legend .leg-bar');
  const labs=document.querySelector('#legend .leg-labels');
  const note=document.getElementById('leg-note');
  if(t) t.textContent='Come si comporta la vigna';
  if(bar) bar.style.display='none';
  if(labs) labs.style.display='none';
  if(note) note.textContent='non quanto \u00e8 verde, ma come gestisce le risorse nel tempo';
  let leg=document.getElementById('gest-legend');
  if(!leg){
    leg=document.createElement('div'); leg.id='gest-legend';
    note.parentNode.insertBefore(leg, note);
  }
  leg.style.display='block';
  leg.innerHTML = ['R','D','S','X'].map(k=>{
    const s=GEST_STATI[k];
    return '<div class="gl-row"><span class="gl-leaf" style="background:'+s.col+'"></span>'+
      '<span class="gl-name">'+s.nome+'</span>'+
      '<span class="gl-az" style="color:'+s.colAz+'">'+s.azione+'</span></div>';
  }).join('');
};

/* drawer: quando gestMode e' attivo, inietta la scheda stato al posto degli indici */
function gestDrawer(vid){
  const g=GEST[vid];
  const body=document.getElementById('drawer-body');
  let box=document.getElementById('gest-card');
  if(!box){
    box=document.createElement('div'); box.id='gest-card';
    body.insertBefore(box, body.firstChild);
  }
  if(!g){
    box.style.display='block';
    box.innerHTML = '<div class="gc-head"><span class="gc-name" style="color:var(--text-mute);">dato non disponibile</span></div>'
      + '<div style="color:var(--text-mute);font-size:12px;padding:4px 0;">'
      + 'serie storica insufficiente per calcolare dotazione/tenuta su questa parcella.</div>';
    return;
  }
  const st=GEST_STATI[g[2]];
  box.style.display='block';
  const nomeParc = GEST_NOMI[vid];
  box.innerHTML =
    (nomeParc ? '<div class="gc-parcname" style="font-size:11px;color:#f0c85a;font-weight:600;margin-bottom:4px;">'+nomeParc+'</div>' : '') +
    '<div class="gc-head"><span class="gc-leaf" style="background:'+st.col+'"></span>'+
      '<span class="gc-name">'+st.nome+'</span>'+
      '<span class="gc-az" style="color:'+st.colAz+';border-color:'+st.colAz+'">'+st.azione+'</span></div>'+
    '<div class="gc-row"><span class="gc-lbl">Cosa vede AVI</span><span class="gc-txt">'+st.vede+'</span></div>'+
    '<div class="gc-row"><span class="gc-lbl">Significato</span><span class="gc-txt">'+st.cosa+'</span></div>'+
    '<div class="gc-row"><span class="gc-lbl">In vigna</span><span class="gc-txt">'+st.vigna+'</span></div>'+
    '<div class="gc-row"><span class="gc-lbl">In cantina</span><span class="gc-txt">'+st.cantina+'</span></div>'+
    '<div class="gc-data">dotazione '+(g[0]>=0?'+':'')+g[0]+' vs media \u00b7 tenuta idrica (NDMI) 2022 '+g[1]+'</div>';
}
function gestDrawerHide(){
  const box=document.getElementById('gest-card'); if(box) box.style.display='none';
}

/* aggancio al click vigna: estendo aggDrawer per mostrare/nascondere la scheda */
if(typeof aggDrawer==='function'){
  const _aggDrawer_g = aggDrawer;
  aggDrawer = function(){
    _aggDrawer_g.apply(this, arguments);
    if(gestMode && vidSel){ gestDrawer(vidSel); }
    else { gestDrawerHide(); }
  };
}

/* ---- UI: bottone foglia, montato in #view-icons (barra alta) ---- */
function buildGestioneUI(){
  const iconHost=document.getElementById('view-icons')||document.getElementById('year-area')||document.body;
  const areaHost=document.getElementById('year-area')||document.body;
  if(document.getElementById('gest-btn')) return;
  const btn=document.createElement('button');
  btn.id='gest-btn'; btn.title='Vista gestione \u00b7 come si comporta la vigna';
  btn.textContent='\uD83C\uDF43'; // 🍃
  iconHost.appendChild(btn);

  const desc=document.createElement('div');
  desc.id='gest-desc'; desc.style.display='none';
  desc.textContent='Non quanto \u00e8 verde una vigna, ma come gestisce acqua e nutrienti nel tempo. Clicca una parcella per il dettaglio.';
  areaHost.parentNode.insertBefore(desc, areaHost.nextSibling);

  function enter(){
    if(_gResil()){
      // spegne la vista resilienza attiva QUALUNQUE sia (⚡ res o 🌊 smooth):
      // cliccare resil-btn alla cieca, da 'smooth', accende invece il fulmine.
      if(typeof exitResil==='function'){ exitResil(); }
      else {
        const activeId = (resilMode==='smooth') ? 'zone-btn' : 'resil-btn';
        const rb=document.getElementById(activeId); if(rb) rb.click();
      }
    }
    const zb=document.getElementById('zone-btn'); if(zb && zb.classList.contains('active')) zb.click();
    gestMode=true;
    const yb=document.getElementById('year-bar'); if(yb) yb.classList.add('disabled');
    const dt=document.getElementById('drawer-tabs'); if(dt) dt.style.display='none';
    desc.style.display='block'; btn.classList.add('active');
    ricolora(); if(vidSel) gestDrawer(vidSel);
  }
  function exit(){
    gestMode=false;
    const yb=document.getElementById('year-bar'); if(yb) yb.classList.remove('disabled');
    const dt=document.getElementById('drawer-tabs'); if(dt) dt.style.display='';
    desc.style.display='none'; btn.classList.remove('active');
    gestDrawerHide(); aggLegenda(); ricolora();
    if(vidSel && typeof aggDrawer==='function') aggDrawer();
  }
  btn.onclick=()=> gestMode ? exit() : enter();

  /* se accendo luna o fulmine mentre gestione e' attiva, spengo gestione */
  ['moon-btn','resil-btn'].forEach(id=>{
    const b=document.getElementById(id);
    if(b) b.addEventListener('click', ()=>{ if(gestMode) exit(); }, true);
  });
}

function avviaGestione(t){
  t=t||0;
  const ya=document.getElementById('year-area');
  if(!ya){ if(t<25){ setTimeout(()=>avviaGestione(t+1),150); return; } }
  try{ buildGestioneUI(); }catch(e){ console.error('[gestione]',e); }
}
if(document.readyState!=='loading') avviaGestione();
else document.addEventListener('DOMContentLoaded',()=>avviaGestione());
