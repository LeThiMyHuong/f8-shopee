(()=>{"use strict";var e,a,d,c,b,f,o={},t={};function r(e){if(t[e])return t[e].exports;var a=t[e]={id:e,loaded:!1,exports:{}};return o[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=o,r.x=e=>{},r.amdD=function(){throw new Error("define cannot be used indirect")},r.amdO={},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(d,c){if(1&c&&(d=this(d)),8&c)return d;if("object"==typeof d&&d){if(4&c&&d.__esModule)return d;if(16&c&&"function"==typeof d.then)return d}var b=Object.create(null);r.r(b);var f={};e=e||[null,a({}),a([]),a(a)];for(var o=2&c&&d;"object"==typeof o&&!~e.indexOf(o);o=a(o))Object.getOwnPropertyNames(o).forEach((e=>f[e]=()=>d[e]));return f.default=()=>d,r.d(b,f),b},r.d=(e,a)=>{for(var d in a)r.o(a,d)&&!r.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:a[d]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,d)=>(r.f[d](e,a),a)),[])),r.u=e=>(({12:"RouteRedirectLegacyPaths",91:"address.TH_address_to_zip-live-json",117:"PageGroupBuyList",147:"ProductDetailsPage",182:"ShopeeMart",197:"EReceiptForm96",215:"EReceiptForm37",221:"EReceiptForm73",285:"EReceiptForm128",293:"NormalAddressContentAR",369:"PageShareExpiration",425:"EReceiptForm66",462:"PageFlashSale",466:"NormalAddressContentID",473:"RouteRedirectToMyAccountPayment",559:"OfficialShopRecommendPagePopular",561:"PageVerifyPassword",566:"PageVerifyEmail",569:"InformationBlockES",601:"ShopeeFoodPaymentSelectionPage",639:"InstallmentFilter",642:"BannerSDKPlayground",726:"EReceiptForm55",728:"EReceiptForm152",773:"EReceiptForm63",809:"PageSimilarProducts",830:"NormalAddressContentTH",866:"EReceiptForm49",975:"InformationBlockPL",986:"InformationBlockBR",993:"ShopeeMartDealsPage",1086:"ResetPasswordByEmail",1110:"EReceiptForm29",1136:"SignupByOTP",1178:"PageDailyDiscoverCampaign",1179:"InformationBlockVN",1186:"f52c856809e7ffd956e1330b48fbd34d",1200:"PageOAuth",1226:"EReceiptForm133",1235:"EReceiptForm14",1242:"InformationBlockID",1281:"SearchPage",1286:"PFBCookieSetter",1299:"SearchInMicrositePage",1303:"EReceiptForm60",1326:"firebase",1331:"PageRedirectToFlashSaleSMart",1337:"PCSummaryNotificationContainer",1414:"NormalAddressContentCO",1430:"PaymentSelectionPage",1466:"PageVerifyLinkReceiver",1540:"PageYouMayAlsoLike",1575:"RedirectRwBrowseDeal",1602:"NormalAddressContentMY",1615:"RouteRedirectForSBrowser",1670:"NormalAddressContentVN",1714:"UserPage",1951:"EReceiptForm1",1968:"PageDPPaymentSelection",1981:"ResetPassword",2063:"PageAuthenticationIVS",2109:"RedirectRwMyGroups",2142:"LoginByPassword",2161:"PageAddressSelectionDemo",2162:"address.TW-live-json",2249:"EReceiptForm145",2252:"EReceiptForm97",2258:"PageAddressDemo",2357:"EReceiptForm35",2372:"EReceiptForm118",2412:"PageBranchReselection",2446:"PageAntiCrawlerError",2460:"EReceiptForm114",2488:"CollectionPointAddressContentTW",2496:"CollectionPage",2553:"PageVoucherLanding",2601:"OrderListPage",2718:"EReceiptForm5",2810:"address.ID-live-json",2825:"PageUserProfile",2845:"PageIdentityVerification",2854:"RedirectToCoinsHistory",2897:"sentry",2935:"PageItemRatings",2964:"ShopeeMartSearchPage",2975:"hash",3028:"shopee_afs",3046:"InformationBlockCL",3053:"address.MX-live-json",3121:"PageSVSPaymentSelection",3149:"PageSearchUser",3152:"OfficialShopRecommendPageJustForYou",3186:"PageAntiCrawlerVerify",3187:"PageUserGDPRCookieSettings",3269:"EReceiptForm27",3395:"PageShopHotDeals",3423:"EReceiptForm126",3437:"CollectionPointAddressContentSG",3467:"PageDailyDiscover",3507:"PageUserAddress",3519:"EReceiptForm130",3538:"ShopeeMartVoucherLandingPage",3559:"EReceiptForm0",3573:"EReceiptForm19",3621:"PageKYCFreeShipping",3679:"AbandonedCartLandingPage",3754:"PageGenericDownloadApp",3758:"PageUserPassword",3785:"InformationBlockTH",3790:"LikedItemsLandingPage",3809:"NormalAddressContentTW",3817:"EReceiptForm78",3823:"EReceiptForm86",3917:"CoinExpirationPage",3933:"EReceiptForm148",4001:"OrderDetailPage",4006:"InformationBlockFR",4031:"SearchResultVoucher",4044:"address.TH_address_to_zip-en-live-json",4060:"NormalAddressContentBR",4075:"EReceiptForm26",4106:"AccountAddPassword",4147:"CollectionPointAddressContentGeneric",4166:"EReceiptForm107",4255:"PageVerifyQr",4269:"EReceiptForm146",4281:"PageRedirectAutoCollection",4325:"MyAccountPage",4343:"PageAuthenticationShopeePay",4344:"PageLINEIntegration",4376:"PageAllCategories",4406:"address.PH-live-json",4474:"PageVerifyCaptcha",4518:"DebugInformation",4540:"EReceiptForm32",4557:"PageIntegrationAddressCallback",4571:"PageUserGDPR",4575:"DailyDealsLanding",4596:"ReturnPage",4615:"PageWelcomePackage",4643:"EReceiptForm85",4645:"PageFindSimilarProducts",4699:"EReceiptForm89",4702:"RouteRedirectToHome",4735:"PageSeoBrand",4794:"AccountChangePhoneNumber",4812:"address.CL-live-json",4859:"ShopeeMartAddOnDealsPage",4864:"EReceiptForm3",4935:"TopProductPage",5004:"NormalAddressContentPL",5024:"CollectionPointAddressContentMX",5030:"NormalAddressContentCL",5144:"LoginByWhatsappToken",5174:"SocialBindAccount",5216:"address.ID_address_to_zip-live-json",5279:"EReceiptForm20",5322:"LoginByOTP",5345:"EReceiptForm77",5366:"PageAccountRedirect",5375:"AccountChangePassword",5415:"PageOrderReturnInstructions",5440:"PageOrderReturnSelectCourier",5461:"EReceiptForm8",5479:"ComponentBuilderPlayground",5483:"InformationBlockPH",5484:"SeparateBundleLanding",5500:"ProductLabelLanding",5703:"address.TH-en-live-json",5738:"PageShopeeBuddy",5770:"EReceiptForm136",5823:"PCLazyFooter",5847:"address.TW_address_to_zip-live-json",5873:"address.TH-live-json",5897:"PageIframeDataPipe",5959:"InformationBlockSG",6046:"EReceiptForm42",6057:"SearchResultFilterApplied",6081:"InformationBlockAR",6082:"address.CO-live-json",6147:"EReceiptForm45",6184:"ShopeePlayPaymentSelectionPage",6197:"EReceiptForm132",6207:"WidgetGallery",6222:"EventPage",6231:"PageTopProductsCategoryLanding",6239:"NewUserTopProductLanding",6243:"PageFromSameShop",6255:"ShopeeMartLCategoryPage",6326:"LogisticAddressModal",6368:"EReceiptForm82",6377:"CollectionPointAddressContentTH",6470:"PageShopRatings",6485:"AccountChangePhoneNumberV2",6491:"EReceiptForm58",6539:"LogisticsSelectionModal",6547:"AccountAddPhoneNumberV2",6623:"EReceiptForm139",6743:"LoginByQRCode",6756:"address.VN-live-json",6776:"InformationBlockIN",6805:"EReceiptForm135",6830:"PageVerifyOTPV",6849:"address.AR-live-json",6922:"PageReportUser",6979:"CollectionPointAddressContentMY",6980:"EReceiptForm34",6995:"test-sdk-new",7026:"MarketplacePaymentPage",7037:"ProductLabelFilter",7066:"EReceiptForm50",7086:"EReceiptForm116",7116:"EReceiptForm57",7119:"shopee-phonelib",7133:"NormalAddressContentMX",7171:"PageVerifyEmailLinkSender",7173:"EReceiptForm22",7194:"EReceiptForm141",7412:"EReceiptForm102",7464:"HotWordList",7537:"FindSimilarProductResult",7565:"WebTrackerBridge",7598:"PageIntegrationTWEInvoice",7642:"PurchaseListPage",7708:"NewUserDealsLanding",7761:"PageBrandSale",7776:"PageVerifyLinkSender",7791:"EReceiptForm38",7793:"CookieConsentBannerV2",7813:"SingleBundleLanding",7839:"InformationBlockMY",7857:"PageCaptchaDemo",7905:"EReceiptForm88",7917:"EReceiptForm62",7925:"address.TW_zip_to_address-live-json",7942:"EReceiptForm92",7950:"shopee_duss",7978:"EReceiptForm91",7997:"ShopeeMartBuyAgainPage",8009:"PageAntiCrawlerTest",8010:"CollectionPointAddressContentPL",8035:"PageSearch",8044:"CurationFilter",8067:"NormalAddressContentSG",8097:"PageCRM",8112:"PageDownloadApp",8122:"address.BR-live-json",8130:"SearchResultCorrected",8153:"EReceiptForm71",8214:"EReceiptForm65",8225:"FooterInfoBlockPreview",8257:"InformationBlockTW",8293:"MartSearchNoResultGeneral",8299:"address.PL-live-json",8345:"EReceiptForm110",8357:"CollectionPointAddressContentPH",8419:"EReceiptForm138",8422:"EReceiptForm100",8501:"ShopRecommendedForYouPage",8505:"EReceiptForm70",8517:"EReceiptForm104",8534:"PageVerifyEmailLinkReceiver",8616:"InformationBlockMX",8623:"InformationBlockCO",8630:"CollectionPointAddressContentID",8637:"PageUserEmail",8681:"EReceiptForm12",8696:"ShopSearchPage",8713:"PageLKPPSSO",8729:"PageGDPRCookieGuestSetting",8731:"EReceiptForm31",8798:"PageFlashSaleSMart",8845:"NormalAddressContentPH",8850:"EReceiptForm54",8861:"EReceiptForm43",8912:"EReceiptForm15",8953:"ProgramForm",8958:"EReceiptForm9",8969:"EReceiptForm112",8970:"EReceiptForm11",8972:"test-sdk-stable",9090:"PageUserPayment",9148:"PageCheckout",9171:"EReceiptForm124",9196:"address.SG-live-json",9211:"EReceiptForm52",9276:"PageNotification",9358:"AccountAddPhoneNumber",9393:"PageUserPhone",9489:"ShopeeMartRecommendationSeeMore",9607:"EReceiptForm6",9611:"PageDevtool",9618:"EReceiptForm108",9633:"EReceiptForm99",9695:"db0f232d6248515605a4ab4db4344121",9720:"EReceiptForm105",9729:"NormalAddressContentES",9796:"EReceiptForm120",9802:"address.MY-live-json",9924:"PageCustomKYCTW",9936:"EReceiptForm83",9968:"LegacyFindSimilarProductResult"}[e]||e)+"."+{12:"630a908f21550251",91:"f29524e140e33b1b",117:"9c382dcae6ef93d2",147:"c532960ada10258a",182:"ca97fc34c5f08c98",197:"08859525c1bebd7a",215:"1cd156eedb06d606",218:"8060563f05948159",221:"29087d87d76bbdb3",285:"9c7e15be14075414",293:"a53290b474a22f9e",369:"f401d854473e3cdf",425:"f8f3835bb52a5d8b",462:"40762e43b619ae43",466:"b54273a013652ffa",473:"b7b4d054b8a7b878",559:"c979279a46812853",561:"f4ba35c9381c533e",566:"6edc64086243a66c",569:"372a80862c7343fb",601:"a76ec1697b21598a",639:"d2b73dc74a77138a",642:"07e9dba8eb68beb5",726:"5710ba39f0c96d5c",728:"d89086d9bdaa512b",731:"7cb82b375d5de792",753:"1905a73e8e5f3828",756:"629aa5fdf8a3117f",773:"fea716d2c7a956e3",782:"696db3973790ab6e",809:"84ec8f0c3054a46f",830:"7cbff3b1daa07933",866:"1d4a928808f12225",952:"08957f1ab0d79f81",975:"c917fce712cfab08",986:"d85d87a05d3c4727",991:"11f8046c044b656a",993:"923a9d25244956d5",1086:"4d26b8d3e42f1df0",1110:"aaf605f00a931add",1127:"1845eed66eee9609",1136:"474e71581ba417ec",1178:"5a2d92ef87210250",1179:"d5dff76d181a796c",1186:"89b29e32a308f1d7",1200:"13b7198180dd4c37",1226:"aa1f1798d0abb6ae",1235:"5564b43e33cf1b88",1242:"d8b835aa4da76bac",1281:"5598f21c64b291f8",1286:"a12a5fa67b840218",1299:"0d101df8e07a4fac",1301:"9d3d805b323d0e2b",1303:"c52a5e9479219af5",1326:"063f44ec1b4e878f",1331:"84bcfc5c88a5bace",1337:"7bb0a3e45592e52d",1414:"e5ef9898513c88eb",1430:"aac3a5e44175be96",1466:"8b838f9a119f1f58",1482:"2ee73bc1260fadd6",1540:"cd9f39970dd280f5",1575:"33a7d264ced13db5",1602:"b5e5f6636506b28b",1615:"d0b31e55016269de",1641:"923ff9c9e7035955",1670:"fccb74b3f5863dec",1714:"f3e666b6ad3d6cd7",1797:"433068c2b74859d7",1916:"e8457172ad649159",1918:"63690924a25a4c82",1951:"6194cb0e5749c89e",1959:"5c247170b08baa0d",1968:"e9263b1690640467",1981:"df50fbac366b179d",2021:"044dfdce4e74e5f6",2063:"18fd59b9a0511803",2072:"ae1e0ef11a774083",2109:"c528852890908d30",2142:"54e155634d42255f",2161:"c5cc3d03e5b31342",2162:"a81345009a013974",2249:"87cc0dc1090b385c",2252:"7b39ad4e0f5fd1be",2258:"b0fb2a3b30c0590a",2330:"73f1c121203c5515",2357:"ab3cdf16ec39afef",2372:"b5f0fcc7c66d2273",2387:"a91f0889df09e175",2412:"115d379fcdc634f8",2446:"b60165ac7c70c497",2460:"04abdbb2eb121ec6",2488:"3e79cfdffe3a3ccd",2496:"e437c74038d50e94",2553:"ceb03d643b62bfaf",2601:"274259b1b06b3ab2",2718:"cb0a270b5180d792",2810:"55289d8e47dc796b",2825:"313a9ef369bb2834",2845:"b3cd1e181ffb77d8",2854:"8d9d1f423746f7fa",2874:"eed7f1d1ebea47ca",2897:"04486e863335364d",2935:"fd76bc63e5aae608",2964:"4c39ec648b5372de",2975:"205e091bcbe76dcc",3028:"098199a3f35f3908",3046:"5462d4b6f432d301",3053:"28f5e6744a69221a",3121:"3d0db27eea1924e2",3149:"1dc765fa2fd72b87",3152:"06d8e86fdc2e45d3",3186:"297a599b52b39ee9",3187:"329bf0422e093d80",3196:"2eda0e4faf6addff",3269:"6ccc654c21bfa4dd",3352:"2dad3a652dcc29fc",3395:"24957f8482fa5ecb",3423:"547ec746abc8ee42",3437:"616b034daf7aafd5",3467:"1e5923958f8e93c3",3507:"e8f1716328eb4bf1",3519:"81b8db64966ce276",3538:"dc303687f5a95910",3559:"f6b3f2185d5eceaf",3573:"8625716a05428755",3621:"70f0f7109a27579d",3679:"e2ae57d3383bcc11",3726:"7fb6109c05151b9e",3754:"9cd3fddab5b56948",3758:"f10c84d804083baf",3785:"880c1d27324dd8bb",3790:"2d2b0a665dc62ce5",3809:"ef48060a4c628f2c",3817:"1e4a094e4f6ac209",3823:"2610bcbd79443935",3917:"634ec856f3a124a9",3933:"d22397a605627ac5",4001:"4c2fbe7f41642616",4006:"5c6198d725e4c3a9",4031:"327323bb5b6980bf",4044:"abcd1e148285cbd6",4060:"9517f20f461fbbb8",4075:"004a2bf375a61cd7",4106:"1992f459122fd924",4136:"174afeee0516f19a",4147:"39e65a586e8aa8c7",4166:"71837abd9fb6108e",4255:"b87f6c1063b8bc25",4269:"81f6eda5ae917f6e",4281:"474eb17174df620a",4325:"0b1d2b8b757f0723",4343:"b34f60dcb57629ca",4344:"239ccae1b93531cd",4376:"d2d8a4047eb4ba45",4406:"9f9afbd6c31a8744",4474:"351317f2c92853c7",4495:"1cbac69b043e2c73",4518:"46a534a744f89102",4540:"6d359b6f028d0060",4557:"09783277596b04ce",4571:"46c2a23da01b01db",4574:"db44dfadfdfeac72",4575:"8a056ee58adfdf86",4596:"6be939b815b4b5ce",4615:"a3167a1f1dc9a17d",4643:"06c9a50424d5f7a6",4645:"f2ed6f0af29250ac",4685:"7dc7d76a1cdd9e4f",4699:"e9fa5383a92e65d4",4702:"6708f3025062992d",4721:"7ffb3396adbc03d3",4735:"8914d6805d437d83",4744:"f9016d535d87f474",4771:"5b2956958f7fc223",4794:"c3f31fc888c2bdde",4812:"723abcdaa6070b75",4859:"b615eba5b4e9f1c3",4864:"30885ccced244195",4921:"08924d482757f346",4935:"5dd009705df667e2",5004:"4ac51299ce447aa0",5016:"59ed308a426a0d5c",5024:"3b9f1e5fab75d819",5030:"0d78bbc249226959",5119:"5dc7de33b0da4970",5128:"9df930aecc378295",5144:"5f31c6f22b43cced",5174:"6806804ed097271c",5210:"dd35e2979bac3aec",5216:"94d3da6237c95dfd",5279:"55eb028df6acb718",5293:"bce39acb7018f58c",5322:"3cc7c7b6c24c440b",5345:"b48b152462e0f921",5356:"2e2f7e9907d44f03",5366:"74bcfb217bbe9022",5375:"3f47b36528675452",5415:"def82ac7fa719079",5423:"305caa5462b5fc6f",5440:"eb1d4a0ca97b9704",5461:"a21c67d4ac3f392c",5479:"485d2a5e637db840",5483:"d827c0ec1b3ba2d2",5484:"b7e7a2b404034d88",5500:"ae8c00bed5ee215e",5604:"d314744211679bdc",5703:"4ea5847d1168c6d1",5738:"8524250743fe4a56",5770:"ca9adf9246a4b0c2",5818:"541c3a15854f1e57",5823:"0b51a72d1d3614b5",5847:"d75376938371be47",5873:"4ebe37e83f9a0454",5897:"34575470a946e375",5959:"4ac7cd6e5f92b5a2",6046:"ea7596a6a3ea0fc2",6057:"f8e6b84fa4e45911",6073:"57e18e86193e869d",6081:"56134bc2148d642d",6082:"fea009e7a4a4d96c",6134:"66bc3cd9d5e4ff4d",6147:"843c18dcd1566c7e",6156:"32aeb353c6f62bdd",6184:"de333eede416de03",6197:"1c28cc19f8f95da7",6207:"9bd454eb104d6be7",6222:"155aaa4f666c98e7",6231:"b9f0618250f874ce",6239:"4d4c5d8658ffda20",6243:"1618e0c282a3bb9c",6255:"20a28570cc3f6220",6266:"ef2c501b6d7eff8f",6326:"27b0a49e15bfa9bd",6368:"c402b8147833838c",6377:"48530d390d9c33ef",6470:"b92e33829e627fe0",6485:"9a053482be23b71f",6491:"e75dcd523058f8da",6539:"e09e6a0e7da47359",6547:"60a9d80598c208b2",6623:"b87a37e18f13728f",6645:"716373c16952967e",6666:"c6ba5375c92b003f",6677:"c5e5104fb8ba1d83",6743:"66c836d725e2b67a",6756:"efe8e9e59f039ef3",6776:"a2532c318819ca27",6805:"0258e9d1a05aa0da",6830:"c36d123377c45ced",6849:"84afb54119fdd733",6858:"2c234eb988121d1b",6908:"75ffa028f4d8d6d8",6922:"f08138cb0efd65bd",6979:"6260dc5b182eeb44",6980:"cebb0765c76be3be",6995:"fae9ee62d5fbe1bc",7026:"b8f7f128ffe5db96",7037:"88b62ed42627130b",7045:"712a9732b3bff828",7066:"83f529906d793373",7086:"b5ed964f4bc0c0c7",7088:"3c25a308537caa40",7116:"977b358c49e8cdb3",7119:"92d4232b7555bec2",7133:"312a52204fa59476",7139:"96aa3cd1377b80a8",7171:"b18abf3782ababeb",7172:"bbb5ff14a3ae198e",7173:"a569079c522c7294",7194:"9ecbaf8604b0ea18",7321:"b89fd8ad8b8e5706",7412:"ec1b17045e5145bc",7464:"12e5edfcac71e568",7507:"1a06df7f7ae9126e",7510:"70f937e5b92e960d",7537:"439e429b44abf700",7565:"60579b43a25eae10",7578:"de3ee097c449601e",7598:"03ecd230ab336c20",7624:"ade6f4ec36f2bdfc",7642:"bea43eb17d4c851f",7708:"f17e905815097103",7761:"20105a61652c2e82",7766:"dc7aa390ae7c3217",7776:"c07e57eee3c3fdc0",7791:"d73057ff297df9c8",7793:"4413d1d63e2410ff",7813:"c845227bf41a11ed",7839:"a0b45d56f126ded2",7856:"d49bcb0ec1719acc",7857:"891250da27251f3e",7905:"31ef73739837c2a2",7915:"52d6dd091bc50096",7917:"6675c332ce6a27e6",7925:"79f3445c3a203606",7942:"e34bdccd464c282a",7950:"6844fed9a90d9302",7974:"6b57484196dd7dbc",7978:"e2b8e9dc97656513",7997:"9276884544edf0cc",8009:"96bb45eaa4bc8926",8010:"5026ac3b88db1d75",8035:"149a4f0b5aa49bbb",8044:"2e08eacb604c2428",8067:"658871a36e505cdc",8097:"f4441c2c46024892",8112:"34247d692d9ca4e7",8122:"0d1c53ba2d59a05b",8130:"4c17c76157ab06bd",8153:"d43b63ac452bcdc2",8185:"c39dda6fe5f65451",8214:"ecb7f669a6700ef6",8225:"0c96b42666a6d64b",8237:"1324ff70bf0c89ff",8257:"bdcebcd5edefb404",8293:"bc4bc9d67754dd02",8299:"ae39ed9c4dd85d53",8313:"69e0fe797cf75d3c",8330:"6c46dbae2d66ad4a",8345:"0e71e5a47156bf09",8357:"44492408975800c4",8419:"fecdf492003c4874",8422:"250ab4ab00a7a19e",8501:"99f30268c860ca28",8505:"499dd3d768e8b697",8517:"c2c2d4fe442ca9a3",8534:"54b252f7d1283567",8616:"28d9b78e3325ee66",8623:"61161cdc76b8b37f",8630:"5a917f01caabc84c",8637:"3cc89d77155c7653",8681:"f798818f070a3ef1",8696:"a760790effd19deb",8713:"8c5afb68a6bcd3ea",8729:"d1a0a9678cc2cdd3",8731:"63f5b1e9d916b21f",8798:"5cd9883b62697b8b",8833:"20cfdf523db667c3",8845:"6fcfa4980356ce3a",8850:"1dded939e4359c05",8861:"4f9aad326094d943",8912:"fcd195e6945debf3",8953:"686a5c8c57293f82",8958:"57222ca00110239d",8969:"266dfc33ed3d8596",8970:"030084f6d2978bb4",8972:"d8a729ce12022415",9090:"68cdd44ce49308b1",9107:"0999acbfcb7b88dd",9127:"2297da5826fe270c",9148:"c6959e65712c609d",9170:"133301c3c262bc6e",9171:"f434a276a30451a4",9196:"250855bc86ec79dd",9211:"03d0e2bc4d4d8776",9239:"2efed327de96eace",9276:"2f2884d0a43450ab",9358:"74f4125000c10f2f",9393:"645726387d8fdaab",9489:"931b430674f4913c",9562:"fe785d2e2fbff229",9607:"7410471838724503",9611:"49ce0778bf78b1a8",9618:"c8a1cd20dedce495",9633:"7b17244197a9d085",9669:"c6194c190d2def07",9695:"7c1b3a8b702db266",9720:"cea832a3910614ce",9729:"22619f87b4d9ca21",9796:"1c0a1fa8156278dc",9802:"fed7dfa3089e301d",9894:"5bd2f822e935a6a4",9924:"abfeefc1340d2b67",9936:"e8d0fb64abf645a7",9948:"069f0596c4a711ce",9968:"d063bfd6ce9af465"}[e]+".js"),r.miniCssF=e=>4296===e?"bundle.c29ad01f78e9b14b.css":e+"."+{197:"08859525c1bebd7a",215:"1cd156eedb06d606",285:"9c7e15be14075414",293:"a53290b474a22f9e",369:"f401d854473e3cdf",425:"f8f3835bb52a5d8b",466:"b54273a013652ffa",559:"c979279a46812853",561:"f4ba35c9381c533e",566:"6edc64086243a66c",569:"372a80862c7343fb",601:"a76ec1697b21598a",642:"07e9dba8eb68beb5",726:"5710ba39f0c96d5c",728:"d89086d9bdaa512b",773:"fea716d2c7a956e3",809:"84ec8f0c3054a46f",830:"7cbff3b1daa07933",866:"1d4a928808f12225",952:"08957f1ab0d79f81",975:"c917fce712cfab08",986:"d85d87a05d3c4727",993:"923a9d25244956d5",1086:"4d26b8d3e42f1df0",1110:"aaf605f00a931add",1136:"474e71581ba417ec",1178:"5a2d92ef87210250",1179:"d5dff76d181a796c",1200:"13b7198180dd4c37",1226:"aa1f1798d0abb6ae",1235:"5564b43e33cf1b88",1242:"d8b835aa4da76bac",1281:"5598f21c64b291f8",1299:"0d101df8e07a4fac",1303:"c52a5e9479219af5",1337:"7bb0a3e45592e52d",1414:"e5ef9898513c88eb",1466:"8b838f9a119f1f58",1540:"cd9f39970dd280f5",1602:"b5e5f6636506b28b",1670:"fccb74b3f5863dec",1714:"f3e666b6ad3d6cd7",1951:"6194cb0e5749c89e",1968:"e9263b1690640467",1981:"df50fbac366b179d",2063:"18fd59b9a0511803",2142:"54e155634d42255f",2161:"c5cc3d03e5b31342",2249:"87cc0dc1090b385c",2252:"7b39ad4e0f5fd1be",2258:"b0fb2a3b30c0590a",2357:"ab3cdf16ec39afef",2412:"115d379fcdc634f8",2446:"b60165ac7c70c497",2460:"04abdbb2eb121ec6",2488:"3e79cfdffe3a3ccd",2496:"e437c74038d50e94",2553:"ceb03d643b62bfaf",2601:"274259b1b06b3ab2",2718:"cb0a270b5180d792",2825:"313a9ef369bb2834",2845:"b3cd1e181ffb77d8",2964:"4c39ec648b5372de",3046:"5462d4b6f432d301",3121:"3d0db27eea1924e2",3149:"1dc765fa2fd72b87",3152:"06d8e86fdc2e45d3",3186:"297a599b52b39ee9",3187:"329bf0422e093d80",3269:"6ccc654c21bfa4dd",3395:"24957f8482fa5ecb",3437:"616b034daf7aafd5",3467:"1e5923958f8e93c3",3507:"e8f1716328eb4bf1",3519:"81b8db64966ce276",3538:"dc303687f5a95910",3573:"8625716a05428755",3621:"70f0f7109a27579d",3679:"e2ae57d3383bcc11",3754:"9cd3fddab5b56948",3758:"f10c84d804083baf",3785:"880c1d27324dd8bb",3790:"2d2b0a665dc62ce5",3809:"ef48060a4c628f2c",3817:"1e4a094e4f6ac209",3823:"2610bcbd79443935",4001:"4c2fbe7f41642616",4006:"5c6198d725e4c3a9",4060:"9517f20f461fbbb8",4075:"004a2bf375a61cd7",4106:"1992f459122fd924",4147:"39e65a586e8aa8c7",4166:"71837abd9fb6108e",4255:"b87f6c1063b8bc25",4325:"0b1d2b8b757f0723",4343:"b34f60dcb57629ca",4344:"239ccae1b93531cd",4376:"d2d8a4047eb4ba45",4474:"351317f2c92853c7",4518:"46a534a744f89102",4540:"6d359b6f028d0060",4557:"09783277596b04ce",4571:"46c2a23da01b01db",4575:"8a056ee58adfdf86",4596:"6be939b815b4b5ce",4615:"a3167a1f1dc9a17d",4643:"06c9a50424d5f7a6",4645:"f2ed6f0af29250ac",4699:"e9fa5383a92e65d4",4721:"7ffb3396adbc03d3",4735:"8914d6805d437d83",4794:"c3f31fc888c2bdde",4864:"30885ccced244195",5004:"4ac51299ce447aa0",5024:"3b9f1e5fab75d819",5030:"0d78bbc249226959",5144:"5f31c6f22b43cced",5174:"6806804ed097271c",5322:"3cc7c7b6c24c440b",5345:"b48b152462e0f921",5375:"3f47b36528675452",5415:"def82ac7fa719079",5440:"eb1d4a0ca97b9704",5461:"a21c67d4ac3f392c",5479:"485d2a5e637db840",5483:"d827c0ec1b3ba2d2",5484:"b7e7a2b404034d88",5500:"ae8c00bed5ee215e",5738:"8524250743fe4a56",5770:"ca9adf9246a4b0c2",5823:"0b51a72d1d3614b5",5959:"4ac7cd6e5f92b5a2",6046:"ea7596a6a3ea0fc2",6081:"56134bc2148d642d",6184:"de333eede416de03",6197:"1c28cc19f8f95da7",6207:"9bd454eb104d6be7",6231:"b9f0618250f874ce",6239:"4d4c5d8658ffda20",6243:"1618e0c282a3bb9c",6255:"20a28570cc3f6220",6326:"27b0a49e15bfa9bd",6368:"c402b8147833838c",6377:"48530d390d9c33ef",6470:"b92e33829e627fe0",6485:"9a053482be23b71f",6491:"e75dcd523058f8da",6539:"e09e6a0e7da47359",6547:"60a9d80598c208b2",6623:"b87a37e18f13728f",6666:"c6ba5375c92b003f",6743:"66c836d725e2b67a",6776:"a2532c318819ca27",6805:"0258e9d1a05aa0da",6830:"c36d123377c45ced",6922:"f08138cb0efd65bd",6979:"6260dc5b182eeb44",6980:"cebb0765c76be3be",7026:"b8f7f128ffe5db96",7066:"83f529906d793373",7086:"b5ed964f4bc0c0c7",7116:"977b358c49e8cdb3",7133:"312a52204fa59476",7171:"b18abf3782ababeb",7194:"9ecbaf8604b0ea18",7412:"ec1b17045e5145bc",7464:"12e5edfcac71e568",7537:"439e429b44abf700",7598:"03ecd230ab336c20",7642:"bea43eb17d4c851f",7708:"f17e905815097103",7766:"dc7aa390ae7c3217",7776:"c07e57eee3c3fdc0",7791:"d73057ff297df9c8",7793:"4413d1d63e2410ff",7813:"c845227bf41a11ed",7839:"a0b45d56f126ded2",7857:"891250da27251f3e",7905:"31ef73739837c2a2",7917:"6675c332ce6a27e6",7942:"e34bdccd464c282a",7978:"e2b8e9dc97656513",7997:"9276884544edf0cc",8009:"96bb45eaa4bc8926",8010:"5026ac3b88db1d75",8067:"658871a36e505cdc",8112:"34247d692d9ca4e7",8214:"ecb7f669a6700ef6",8257:"bdcebcd5edefb404",8293:"bc4bc9d67754dd02",8313:"69e0fe797cf75d3c",8345:"0e71e5a47156bf09",8357:"44492408975800c4",8419:"fecdf492003c4874",8422:"250ab4ab00a7a19e",8501:"99f30268c860ca28",8505:"499dd3d768e8b697",8517:"c2c2d4fe442ca9a3",8534:"54b252f7d1283567",8616:"28d9b78e3325ee66",8623:"61161cdc76b8b37f",8630:"5a917f01caabc84c",8637:"3cc89d77155c7653",8681:"f798818f070a3ef1",8696:"a760790effd19deb",8713:"8c5afb68a6bcd3ea",8729:"d1a0a9678cc2cdd3",8731:"63f5b1e9d916b21f",8845:"6fcfa4980356ce3a",8850:"1dded939e4359c05",8912:"fcd195e6945debf3",8958:"57222ca00110239d",8969:"266dfc33ed3d8596",8970:"030084f6d2978bb4",9090:"68cdd44ce49308b1",9148:"c6959e65712c609d",9170:"133301c3c262bc6e",9211:"03d0e2bc4d4d8776",9276:"2f2884d0a43450ab",9358:"74f4125000c10f2f",9489:"931b430674f4913c",9607:"7410471838724503",9611:"49ce0778bf78b1a8",9618:"c8a1cd20dedce495",9633:"7b17244197a9d085",9720:"cea832a3910614ce",9729:"22619f87b4d9ca21",9924:"abfeefc1340d2b67",9936:"e8d0fb64abf645a7",9948:"069f0596c4a711ce",9968:"d063bfd6ce9af465"}[e]+".css",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="shopee-pc:",r.l=(e,a,b,f)=>{if(d[e])d[e].push(a);else{var o,t;if(void 0!==b)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var s=n[i];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==c+b){o=s;break}}o||(t=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",c+b),o.src=e),d[e]=[a];var l=(a,c)=>{o.onerror=o.onload=null,clearTimeout(p);var b=d[e];if(delete d[e],o.parentNode&&o.parentNode.removeChild(o),b&&b.forEach((e=>e(c))),a)return a(c)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),t&&document.head.appendChild(o)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/",b=e=>new Promise(((a,d)=>{var c=r.miniCssF(e),b=r.p+c;if(((e,a)=>{for(var d=document.getElementsByTagName("link"),c=0;c<d.length;c++){var b=(o=d[c]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(b===e||b===a))return o}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){var o;if((b=(o=f[c]).getAttribute("data-href"))===e||b===a)return o}})(c,b))return a();((e,a,d,c)=>{var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onerror=b.onload=f=>{if(b.onerror=b.onload=null,"load"===f.type)d();else{var o=f&&("load"===f.type?"missing":f.type),t=f&&f.target&&f.target.href||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");r.code="CSS_CHUNK_LOAD_FAILED",r.type=o,r.request=t,b.parentNode.removeChild(b),c(r)}},b.href=a,document.head.appendChild(b)})(e,b,a,d)})),f={6658:0},r.f.miniCss=(e,a)=>{f[e]?a.push(f[e]):0!==f[e]&&{197:1,215:1,285:1,293:1,369:1,425:1,466:1,559:1,561:1,566:1,569:1,601:1,642:1,726:1,728:1,773:1,809:1,830:1,866:1,952:1,975:1,986:1,993:1,1086:1,1110:1,1136:1,1178:1,1179:1,1200:1,1226:1,1235:1,1242:1,1281:1,1299:1,1303:1,1337:1,1414:1,1466:1,1540:1,1602:1,1670:1,1714:1,1951:1,1968:1,1981:1,2063:1,2142:1,2161:1,2249:1,2252:1,2258:1,2357:1,2412:1,2446:1,2460:1,2488:1,2496:1,2553:1,2601:1,2718:1,2825:1,2845:1,2964:1,3046:1,3121:1,3149:1,3152:1,3186:1,3187:1,3269:1,3395:1,3437:1,3467:1,3507:1,3519:1,3538:1,3573:1,3621:1,3679:1,3754:1,3758:1,3785:1,3790:1,3809:1,3817:1,3823:1,4001:1,4006:1,4060:1,4075:1,4106:1,4147:1,4166:1,4255:1,4325:1,4343:1,4344:1,4376:1,4474:1,4518:1,4540:1,4557:1,4571:1,4575:1,4596:1,4615:1,4643:1,4645:1,4699:1,4721:1,4735:1,4794:1,4864:1,5004:1,5024:1,5030:1,5144:1,5174:1,5322:1,5345:1,5375:1,5415:1,5440:1,5461:1,5479:1,5483:1,5484:1,5500:1,5738:1,5770:1,5823:1,5959:1,6046:1,6081:1,6184:1,6197:1,6207:1,6231:1,6239:1,6243:1,6255:1,6326:1,6368:1,6377:1,6470:1,6485:1,6491:1,6539:1,6547:1,6623:1,6666:1,6743:1,6776:1,6805:1,6830:1,6922:1,6979:1,6980:1,7026:1,7066:1,7086:1,7116:1,7133:1,7171:1,7194:1,7412:1,7464:1,7537:1,7598:1,7642:1,7708:1,7766:1,7776:1,7791:1,7793:1,7813:1,7839:1,7857:1,7905:1,7917:1,7942:1,7978:1,7997:1,8009:1,8010:1,8067:1,8112:1,8214:1,8257:1,8293:1,8313:1,8345:1,8357:1,8419:1,8422:1,8501:1,8505:1,8517:1,8534:1,8616:1,8623:1,8630:1,8637:1,8681:1,8696:1,8713:1,8729:1,8731:1,8845:1,8850:1,8912:1,8958:1,8969:1,8970:1,9090:1,9148:1,9170:1,9211:1,9276:1,9358:1,9489:1,9607:1,9611:1,9618:1,9633:1,9720:1,9729:1,9924:1,9936:1,9948:1,9968:1}[e]&&a.push(f[e]=b(e).then((()=>{f[e]=0}),(a=>{throw delete f[e],a})))},(()=>{var e={6658:0},a=[];r.f.j=(a,d)=>{var c=r.o(e,a)?e[a]:void 0;if(0!==c)if(c)d.push(c[2]);else if(/^(1110|1281|9211)$/.test(a))e[a]=0;else{var b=new Promise(((d,b)=>{c=e[a]=[d,b]}));d.push(c[2]=b);var f=r.p+r.u(a),o=new Error;r.l(f,(d=>{if(r.o(e,a)&&(0!==(c=e[a])&&(e[a]=void 0),c)){var b=d&&("load"===d.type?"missing":d.type),f=d&&d.target&&d.target.src;o.message="Loading chunk "+a+" failed.\n("+b+": "+f+")",o.name="ChunkLoadError",o.type=b,o.request=f,c[1](o)}}),"chunk-"+a,a)}};var d=e=>{},c=(c,b)=>{for(var f,o,[t,n,i,s]=b,l=0,p=[];l<t.length;l++)o=t[l],r.o(e,o)&&e[o]&&p.push(e[o][0]),e[o]=0;for(f in n)r.o(n,f)&&(r.m[f]=n[f]);for(i&&i(r),c&&c(b);p.length;)p.shift()();return s&&a.push.apply(a,s),d()},b=("undefined"!=typeof self?self:this).webpackChunkshopee_pc=("undefined"!=typeof self?self:this).webpackChunkshopee_pc||[];function f(){for(var d,c=0;c<a.length;c++){for(var b=a[c],f=!0,o=1;o<b.length;o++){var t=b[o];0!==e[t]&&(f=!1)}f&&(a.splice(c--,1),d=r(r.s=b[0]))}return 0===a.length&&(r.x(),r.x=e=>{}),d}b.forEach(c.bind(null,0)),b.push=c.bind(null,b.push.bind(b));var o=r.x;r.x=()=>(r.x=o||(e=>{}),(d=f)())})(),r.x()})();
//# sourceMappingURL=https://shopee.sg/assets/webpack-runtime.477701d920316ffb.js.map