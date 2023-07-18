function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{J0pt:function(n,t,e){"use strict";e.r(t),e.d(t,"OldReceiptModule",(function(){return v}));var i,c,b,o=e("ofXK"),r=e("uSiG"),d=e("tyNb"),a=e("zD6u"),P=e("fXoL"),O=e("Yp1t"),l=[{path:"",component:(i=function(){function n(t,e){_classCallCheck(this,n),this.receiptService=t,this.router=e,this.getedDataIdFromRoute=[],this.$childEl=[],this.isNull=function(n){return void 0===n||!n||0===n.length}}return _createClass(n,[{key:"ngAfterViewInit",value:function(){var n=this;this.unSubReceipt=this.receiptService.receipt$.subscribe((function(t){n.isNull(t)?(n.getedDataIdFromRoute=window.location.pathname.split("/")[1],n.router.navigateByUrl("/"+n.getedDataIdFromRoute+"/bill?checked=1")):(console.log(t),n.$childEl=t)}))}},{key:"exportAsPrint",value:function(){window.print(),window.close()}},{key:"ngOnDestroy",value:function(){this.unSubReceipt.unsubscribe()}}]),n}(),i.\u0275fac=function(n){return new(n||i)(P.Kb(a.a),P.Kb(d.c))},i.\u0275cmp=P.Eb({type:i,selectors:[["app-receipt"]],decls:211,vars:41,consts:[[1,"main_section"],[1,"_first"],[1,"borders","non_border"],[1,"abfa"],[1,"second_article"],[1,"borders"],[1,"details"],[1,"text_part"],[1,"dynamic_details"],[1,"_second"],[1,"borders","horizontal_alignment"],[1,"inner_div"],[1,"outer_div"],[1,"_third"],[1,"borders","first_child"],[1,"details","last_child"],[1,"grid_area2"],[1,"borders","pay_section"],[1,"_forth"],[1,"__content_img"],["src","assets/imgs/iranFlag.jpeg","alt",""],[1,"__content"],[1,"_button_section"],[1,"pay_button",3,"click"],[1,"info"],[1,"advice"]],template:function(n,t){1&n&&(P.Pb(0,"section"),P.Pb(1,"div",0),P.Pb(2,"div",1),P.Pb(3,"div",2),P.Pb(4,"div",3),P.Pb(5,"article"),P.vc(6,"\u0648\u0632\u0627\u0631\u062a \u0646\u06cc\u0631\u0648- \u0634\u0631\u06a9\u062a \u0622\u0628 \u0648 \u0641\u0627\u0636\u0644\u0627\u0628 \u0627\u0633\u062a\u0627\u0646 \u0627\u0635\u0641\u0647\u0627\u0646"),P.Ob(),P.Ob(),P.Pb(7,"article"),P.Pb(8,"div"),P.vc(9,"\u062a\u0644\u0641\u0646 \u062d\u0648\u0627\u062f\u062b: 122"),P.Ob(),P.Pb(10,"div",4),P.vc(11,"\u062e\u062f\u0645\u0627\u062a \u063a\u06cc\u0631 \u062d\u0636\u0648\u0631\u06cc \u0628\u0627 \u062a\u0644\u0641\u0646 1522"),P.Ob(),P.Ob(),P.Ob(),P.Pb(12,"div",5),P.Pb(13,"div",6),P.Pb(14,"div",7),P.vc(15,"\u0634\u0647\u0631"),P.Ob(),P.Pb(16,"div",8),P.vc(17),P.Ob(),P.Ob(),P.Pb(18,"div",6),P.Pb(19,"div",7),P.vc(20,"\u0645\u0634\u062a\u0631\u06a9 \u06af\u0631\u0627\u0645\u06cc"),P.Ob(),P.Pb(21,"div",8),P.vc(22),P.Ob(),P.Ob(),P.Pb(23,"div",6),P.Pb(24,"div",7),P.vc(25,"\u0622\u062f\u0631\u0633"),P.Ob(),P.Pb(26,"div",8),P.vc(27,"-----"),P.Ob(),P.Ob(),P.Pb(28,"div",6),P.Pb(29,"div",7),P.vc(30,"\u06a9\u062f \u067e\u0633\u062a\u06cc"),P.Ob(),P.Pb(31,"div",8),P.vc(32,"-----"),P.Ob(),P.Ob(),P.Ob(),P.Pb(33,"div",5),P.Pb(34,"div",6),P.Pb(35,"div",7),P.vc(36,"\u06a9\u0627\u0631\u0628\u0631\u06cc"),P.Ob(),P.Pb(37,"div",8),P.vc(38),P.Ob(),P.Ob(),P.Pb(39,"div",6),P.Pb(40,"div",7),P.vc(41,"\u062a\u0639\u062f\u0627\u062f \u0648\u0627\u062d\u062f:"),P.Ob(),P.Pb(42,"div",8),P.vc(43,"-----"),P.Ob(),P.Ob(),P.Pb(44,"div",6),P.Pb(45,"div",7),P.vc(46,"\u0638\u0631\u0641\u06cc\u062a \u0642\u0631\u0627\u0631\u062f\u0627\u062f\u06cc "),P.Ob(),P.Pb(47,"div",8),P.vc(48),P.Ob(),P.Ob(),P.Ob(),P.Pb(49,"div",5),P.Pb(50,"div",6),P.Pb(51,"div",7),P.vc(52,"\u06a9\u062f \u062a\u0639\u0631\u0641\u0647"),P.Ob(),P.Ob(),P.Pb(53,"div",6),P.Pb(54,"div",7),P.vc(55,"\u0642\u0637\u0631 \u06a9\u0646\u062a\u0648\u0631"),P.Ob(),P.Pb(56,"div",8),P.vc(57),P.Ob(),P.Ob(),P.Pb(58,"div",6),P.Pb(59,"div",7),P.vc(60,"\u0648\u0636\u0639\u06cc\u062a \u06a9\u0646\u062a\u0648\u0631"),P.Ob(),P.Pb(61,"div",8),P.vc(62),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Pb(63,"div",9),P.Pb(64,"div",5),P.Pb(65,"div",6),P.Pb(66,"div",7),P.vc(67,"\u0634\u0645\u0627\u0631\u0647 \u0631\u062f\u06cc\u0641"),P.Ob(),P.Pb(68,"div",8),P.vc(69),P.Ob(),P.Ob(),P.Pb(70,"div",6),P.Pb(71,"div",7),P.vc(72,"\u0634\u0645\u0627\u0631\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9"),P.Ob(),P.Pb(73,"div",8),P.vc(74),P.Ob(),P.Ob(),P.Pb(75,"div",6),P.Pb(76,"div",7),P.vc(77,"\u0634\u0645\u0627\u0631\u0647 \u0628\u0631\u06af\u0647:"),P.Ob(),P.Pb(78,"div",8),P.vc(79),P.Ob(),P.Ob(),P.Ob(),P.Pb(80,"div",10),P.Pb(81,"div",11),P.vc(82," \u062a\u0627\u0631\u06cc\u062e \u0642\u0631\u0627\u0626\u062a "),P.Ob(),P.Pb(83,"div",12),P.Pb(84,"div",6),P.Pb(85,"div",7),P.vc(86,"\u067e\u06cc\u0634\u06cc\u0646"),P.Ob(),P.Pb(87,"div",8),P.vc(88),P.Ob(),P.Ob(),P.Pb(89,"div",6),P.Pb(90,"div",7),P.vc(91,"\u06a9\u0646\u0648\u0646\u06cc"),P.Ob(),P.Pb(92,"div",8),P.vc(93),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Pb(94,"div",5),P.Pb(95,"div",6),P.Pb(96,"div",7),P.vc(97,"\u062a\u0639\u062f\u0627\u062f \u0631\u0648\u0632"),P.Ob(),P.Pb(98,"div",8),P.vc(99),P.Ob(),P.Ob(),P.Ob(),P.Pb(100,"div",10),P.Pb(101,"div",11),P.vc(102," \u0634\u0645\u0627\u0631\u0647 \u06a9\u0646\u062a\u0648\u0631 "),P.Ob(),P.Pb(103,"div",12),P.Pb(104,"div",6),P.Pb(105,"div",7),P.vc(106,"\u067e\u06cc\u0634\u06cc\u0646"),P.Ob(),P.Pb(107,"div",8),P.vc(108),P.Ob(),P.Ob(),P.Pb(109,"div",6),P.Pb(110,"div",7),P.vc(111,"\u06a9\u0646\u0648\u0646\u06cc:"),P.Ob(),P.Pb(112,"div",8),P.vc(113),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Pb(114,"div",5),P.Pb(115,"div",6),P.Pb(116,"div",7),P.vc(117,"\u0645\u0635\u0631\u0641 \u0628\u0647 \u0645\u062a\u0631\u0645\u06a9\u0639\u0628"),P.Ob(),P.Pb(118,"div",8),P.vc(119),P.Ob(),P.Ob(),P.Pb(120,"div",6),P.Pb(121,"div",7),P.vc(122,"\u0645\u0635\u0631\u0641 \u0628\u0647 \u0644\u06cc\u062a\u0631 "),P.Ob(),P.Pb(123,"div",8),P.vc(124),P.Ob(),P.Ob(),P.Pb(125,"div",6),P.Pb(126,"div",7),P.vc(127,"\u0645\u062a\u0648\u0633\u0637 \u0645\u0635\u0631\u0641 \u0645\u0627\u0647\u0627\u0646\u0647/ \u0645\u062a\u0631 \u0645\u06a9\u0639\u0628 "),P.Ob(),P.Pb(128,"div",8),P.vc(129),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Pb(130,"div",13),P.Pb(131,"div",14),P.Pb(132,"p"),P.vc(133," \u0634\u0631\u062d \u0627\u0642\u0644\u0627\u0645 \u0648 \u0645\u0628\u0627\u0644\u063a \u0628\u0647 \u0631\u06cc\u0627\u0644"),P.Ob(),P.Pb(134,"div",6),P.Pb(135,"div",7),P.vc(136,"\u0628\u0647\u0627\u06cc \u0622\u0628 \u0645\u0635\u0631\u0641\u06cc "),P.Ob(),P.Pb(137,"div",8),P.vc(138),P.ac(139,"perCurrencySplitter"),P.Ob(),P.Ob(),P.Pb(140,"div",6),P.Pb(141,"div",7),P.vc(142,"\u06a9\u0627\u0631\u0645\u0632\u062f \u062f\u0641\u0639 \u0641\u0627\u0636\u0644\u0627\u0628 "),P.Ob(),P.Pb(143,"div",8),P.vc(144),P.ac(145,"perCurrencySplitter"),P.Ob(),P.Ob(),P.Pb(146,"div",6),P.Pb(147,"div",7),P.vc(148,"\u0645\u0627\u0644\u06cc\u0627\u062a \u0648 \u0639\u0648\u0627\u0631\u0636"),P.Ob(),P.Pb(149,"div",8),P.vc(150),P.ac(151,"perCurrencySplitter"),P.Ob(),P.Ob(),P.Pb(152,"div",6),P.Pb(153,"div",7),P.vc(154,"\u0642\u0627\u0646\u0648\u0646 \u0628\u0648\u062f\u062c\u0647 "),P.Ob(),P.Pb(155,"div",8),P.vc(156),P.ac(157,"perCurrencySplitter"),P.Ob(),P.Ob(),P.Pb(158,"div",6),P.Pb(159,"div",7),P.vc(160,"\u0628\u062f\u0647\u06a9\u0627\u0631\u06cc \u06cc\u0627 \u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631\u06cc \u0642\u0628\u0644\u06cc"),P.Ob(),P.Pb(161,"div",8),P.vc(162),P.ac(163,"perCurrencySplitter"),P.Ob(),P.Ob(),P.Pb(164,"div",15),P.Pb(165,"div",7),P.vc(166,"\u062c\u0645\u0639"),P.Ob(),P.Pb(167,"div",8),P.vc(168),P.ac(169,"perCurrencySplitter"),P.Ob(),P.Ob(),P.Ob(),P.Pb(170,"div",16),P.Pb(171,"div",17),P.Pb(172,"div",6),P.Pb(173,"div",7),P.vc(174,"\u0645\u0628\u0644\u063a \u0642\u0627\u0628\u0644 \u067e\u0631\u062f\u0627\u062e\u062a"),P.Ob(),P.Pb(175,"div",8),P.vc(176),P.ac(177,"perCurrencySplitter"),P.Ob(),P.Ob(),P.Pb(178,"div",6),P.Pb(179,"div",7),P.vc(180,"\u0645\u0647\u0644\u062a \u067e\u0631\u062f\u0627\u062e\u062a"),P.Ob(),P.Pb(181,"div",8),P.vc(182),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Pb(183,"div",18),P.Pb(184,"div",19),P.Lb(185,"img",20),P.Ob(),P.Pb(186,"h3"),P.vc(187," \u0622\u0628\u060c \u0632\u0646\u062f\u06af\u06cc \u0628\u062e\u0634 \u0627\u0633\u062a... "),P.Ob(),P.Pb(188,"div",21),P.Pb(189,"div",5),P.Pb(190,"div",6),P.Pb(191,"div",7),P.vc(192,"\u0634\u0646\u0627\u0633\u0647 \u0642\u0628\u0636"),P.Ob(),P.Pb(193,"div",8),P.vc(194),P.Ob(),P.Ob(),P.Ob(),P.Pb(195,"div",5),P.Pb(196,"div",6),P.Pb(197,"div",7),P.vc(198,"\u0634\u0646\u0627\u0633\u0647 \u067e\u0631\u062f\u0627\u062e\u062a"),P.Ob(),P.Pb(199,"div",8),P.vc(200),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Ob(),P.Pb(201,"div",22),P.Pb(202,"button",23),P.Xb("click",(function(){return t.exportAsPrint()})),P.vc(203,"\u067e\u0631\u06cc\u0646\u062a \u0642\u0628\u0636"),P.Ob(),P.Ob(),P.Pb(204,"section",24),P.Pb(205,"div",25),P.Pb(206,"p"),P.vc(207,"* \u0645\u0634\u062a\u0631\u06a9\u06cc\u0646 \u062f\u0627\u0631\u0627\u06cc \u0648\u0627\u062d\u062f \u0647\u0627\u06cc \u0645\u0633\u06a9\u0648\u0646\u06cc \u0648 \u063a\u06cc\u0631 \u0645\u0633\u06a9\u0648\u0646\u06cc \u0645\u0646\u0647\u0627\u06cc \u0634\u0635\u062a \u0648 \u067e\u0627\u06cc\u06cc\u0646 \u062a\u0631 \u0645\u0648\u0638\u0641 \u0628\u0647 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0648\u0627\u0644\u0648 \u06cc\u06a9 \u0637\u0631\u0641\u0647 \u0641\u0627\u0636\u0644\u0627\u0628 \u062c\u0647\u062a \u062c\u0644\u0648\u06af\u06cc\u0631\u06cc \u0627\u0632 \u067e\u0633 \u0632\u062f\u06af\u06cc \u0641\u0627\u0636\u0644\u0627\u0628 \u062f\u0631 \u0645\u0648\u0627\u0642\u0639 \u0628\u0627\u0631\u0646\u062f\u06af\u06cc \u0645\u06cc \u0628\u0627\u0634\u0646\u062f * \u0647\u0631 \u06af\u0648\u0646\u0647 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0631 \u0646\u0648\u0639 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u062a\u0639\u062f\u0627\u062f \u0648\u0627\u062d\u062f \u0645\u0644\u06a9 \u062e\u0648\u062f \u0631\u0627 \u062f\u0631 \u0627\u0633\u0631\u0639 \u0648\u0642\u062a \u0628\u0647 \u0648\u0627\u062d\u062f \u0645\u0634\u062a\u0631\u06a9\u06cc\u0646 \u0627\u062f\u0627\u0631\u0647 \u0622\u0628 \u0648 \u0641\u0627\u0636\u0644\u0627\u0628 \u0645\u0646\u0637\u0642\u0647 \u0645\u0631\u0628\u0648\u0637\u0647 \u0627\u0639\u0644\u0627\u0645 \u0641\u0631\u0645\u0627\u06cc\u06cc\u062f. * \u062f\u0631 \u0647\u0646\u06af\u0627\u0645 \u0639\u0632\u06cc\u0645\u062a \u0628\u0647 \u062e\u0627\u0631\u062c \u0627\u0632 \u0645\u0646\u0632\u0644 \u0628\u0631\u0627\u06cc \u0645\u062f\u062a \u0637\u0648\u0644\u0627\u0646\u06cc \u06cc\u0627 \u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0628\u0648\u062f\u0646 \u0645\u0644\u06a9\u060c \u062d\u062a\u0645\u0627 \u0648\u0627\u0644\u0648 \u0628\u0639\u062f \u0627\u0632 \u06a9\u0646\u062a\u0648\u0631 \u0631\u0627 \u0628\u0628\u0646\u062f\u06cc\u062f \u062a\u0627 \u062f\u0686\u0627\u0631 \u062e\u0633\u0627\u0631\u062a \u0646\u0627\u0634\u06cc \u0627\u0632 \u0647\u062f\u0631 \u0631\u0641\u062a \u0622\u0628 \u0646\u0634\u0648\u06cc\u062f * \u062e\u0631\u06cc\u062f\u0627\u0631\u0627\u0646 \u0648 \u0645\u0648\u062c\u0631\u0627\u0646 \u0648\u0627\u062d\u062f \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0627\u0631\u0627\u06cc \u0627\u0646\u0634\u0639\u0627\u0628 \u0622\u0628 \u0648 \u0641\u0627\u0636\u0644\u0627\u0628 \u0647\u0633\u062a\u0646\u062f \u0628\u0627\u06cc\u062f \u0647\u0646\u06af\u0627\u0645 \u0645\u0639\u0627\u0645\u0644\u0647 \u06cc\u0627 \u062a\u062e\u0644\u06cc\u0647 \u0645\u0644\u06a9\u060c \u0628\u0631\u06af \u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628 \u0645\u0637\u0627\u0644\u0628\u0647 \u0646\u0645\u0627\u06cc\u0646\u062f \u062a\u0627 \u0628\u0639\u062f\u0627 \u0628\u0647 \u0639\u0644\u062a \u0628\u062f\u0647\u06cc \u06cc\u0627 \u0642\u0637\u0639\u06cc \u0622\u0628 \u0645\u0648\u0627\u062c\u0647 \u0646\u0634\u0648\u0646\u062f. \u0636\u0645\u0646\u0627 \u0628\u0647 \u0645\u0646\u062f\u0631\u062c\u0627\u062a \u0628\u0631\u06af\u0647 \u062a\u0633\u0648\u06cc\u0647 \u0646\u06cc\u0632 \u062a\u0648\u062c\u0647 \u0634\u0648\u062f. * \u062f\u0631 \u0645\u0648\u0627\u0631\u062f \u0645\u0634\u0631\u0648\u062d \u0632\u06cc\u0631 \u0627\u0646\u0634\u0639\u0627\u0628 \u0645\u0634\u062a\u0631\u06a9 \u06cc\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646\u0646\u062f\u0647 \u0628\u0647 \u0637\u0648\u0631 \u0645\u0648\u0642\u062a \u0642\u0637\u0639 \u0645\u06cc \u06af\u0631\u062f\u062f: \u0627\u0644\u0641 - \u0639\u062f\u0645 \u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0644\u06cc\u0647 \u062f\u06cc\u0648\u0646 \u062f\u0631 \u0645\u0648\u0639\u062f \u0645\u0642\u0631\u0631 \u0628 - \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u063a\u06cc\u0631 \u0645\u062c\u0627\u0632 \u0627\u0632 \u0627\u0646\u0634\u0639\u0627\u0628 \u0648\u0627\u06af\u0630\u0627\u0631 \u0634\u062f\u0647 \u0622\u0628 \u0648 \u0641\u0627\u0636\u0644\u0627\u0628 \u062c - \u0644\u0648\u0644\u0647 \u06a9\u0634\u06cc \u0627\u0646\u0634\u0639\u0627\u0628 \u0628\u0647 \u0645\u0644\u06a9 \u062f\u06cc\u06af\u0631 \u062f - \u0646\u0635\u0628 \u067e\u0645\u067e \u0628\u0647 \u0637\u0648\u0631 \u0645\u0633\u062a\u0642\u06cc\u0645 \u0628\u0631 \u0631\u0648\u06cc \u0627\u0646\u0634\u0639\u0627\u0628 \u0647 - \u0639\u062f\u0645 \u0627\u0645\u06a9\u0627\u0646 \u062e\u0648\u0627\u0646\u062f\u0646 \u06a9\u0646\u062a\u0648\u0631 \u0628\u0631\u0627\u06cc \u0633\u0647 \u062f\u0648\u0631\u0647 \u0645\u062a\u0648\u0627\u0644\u06cc * \u062f\u0631 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0627\u0646\u0634\u0639\u0627\u0628 \u0628\u0647 \u0637\u0648\u0631 \u062f\u0627\u06cc\u0645 \u062c\u0645\u0639 \u0622\u0648\u0631\u06cc \u0645\u06cc \u0634\u0648\u062f : \u0627\u0644\u0641 - \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0631\u0686\u06cc\u062f\u0646 \u0627\u0646\u0634\u0639\u0627\u0628 \u062a\u0648\u0633\u0637 \u0645\u0634\u062a\u0631\u06a9 \u0628 - \u0647\u0631\u06af\u0627\u0647 \u0633\u0647 \u0633\u0627\u0644 \u0627\u0632 \u0642\u0637\u0639 \u0645\u0648\u0642\u062a \u0628\u06af\u0630\u0631\u062f \u0648 \u0648\u0636\u0639\u06cc\u062a \u0627\u0646\u0634\u0639\u0627\u0628 \u0645\u0634\u062e\u0635 \u0646\u06af\u0631\u062f\u062f \u062c - \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u06a9\u0647 \u067e\u0633 \u0627\u0632 \u06af\u0630\u0634\u062a \u06cc\u06a9 \u0633\u0627\u0644 \u0627\u0632 \u0642\u0637\u0639 \u0645\u0648\u0642\u062a \u0628\u062f\u0647\u06cc \u0645\u0634\u062a\u0631\u06a9 \u0628\u0647 50 \u062f\u0631\u0635\u062f \u0647\u0632\u06cc\u0646\u0647 \u0628\u0631\u0642\u0631\u0627\u0631\u06cc \u0627\u0646\u0634\u0639\u0627\u0628 \u0628\u0631\u0633\u062f \u062f - \u062f\u0631 \u0635\u0648\u0631\u062a\u06cc \u062a\u06a9\u0631\u0627\u0631 \u062a\u062e\u0644\u0641 \u0648 \u0648\u0635\u0644 \u062e\u0648\u062f\u0633\u0631\u0627\u0646\u0647 \u0627\u0646\u0634\u0639\u0627\u0628"),P.Ob(),P.Ob(),P.Pb(208,"div",25),P.Pb(209,"p"),P.vc(210," * \u0628\u0627 \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0647 \u0645\u0648\u0642\u0639 \u0627\u06cc\u0646 \u0635\u0648\u0631\u062a\u062d\u0633\u0627\u0628 \u060c \u0645\u0627 \u0631\u0627 \u062f\u0631 \u062a\u0648\u0633\u0639\u0647 \u0648 \u0628\u0647\u0628\u0648\u062f \u0622\u0628\u0631\u0633\u0627\u0646\u06cc \u0648 \u062f\u0641\u0639 \u0641\u0627\u0636\u0644\u0627\u0628 \u06cc\u0627\u0631\u06cc \u0646\u0645\u0627\u06cc\u06cc\u062f. * \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628 \u0634\u0645\u0627 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0645\u0635\u0631\u0641 \u0645\u0627\u0647\u0627\u0646\u0647 \u0645\u062d\u0627\u0633\u0628\u0647 \u0645\u06cc \u0634\u0648\u062f. \u0628\u0627 \u0635\u0631\u0641\u0647 \u062c\u0648\u06cc\u06cc \u062f\u0631 \u0645\u0635\u0631\u0641 \u060c \u0639\u0644\u0627\u0648\u0647 \u0628\u0631 \u062d\u0641\u0638 \u0645\u0646\u0627\u0628\u0639 \u0622\u0628\u06cc \u06a9\u0634\u0648\u0631\u060c \u0645\u0628\u0644\u063a \u0635\u0648\u0631\u062a\u062d\u0633\u0627\u0628 \u0622\u0628 \u0628\u0647\u0627 \u0646\u06cc\u0632 \u06a9\u0627\u0647\u0634 \u0645\u06cc \u06cc\u0627\u0628\u062f. * \u062f\u0631 \u0635\u0648\u0631\u062a \u0639\u062f\u0645 \u062f\u0631\u06cc\u0627\u0641\u062a \u0635\u0648\u0631\u062a \u062d\u0633\u0627\u0628 \u067e\u0633 \u0627\u0632 \u06af\u0630\u0634\u062a \u062f\u0648 \u0645\u0627\u0647 \u0627\u0632 \u0622\u062e\u0631\u06cc\u0646 \u0635\u0648\u0631\u062a\u062d\u0633\u0627\u0628 \u0628\u0647 \u0627\u062f\u0627\u0631\u0647 \u0622\u0628 \u0648 \u0641\u0627\u0636\u0644\u0627\u0628 \u0645\u0631\u0628\u0648\u0637\u0647 \u0645\u0631\u0627\u062c\u0639\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f. * \u0639\u062f\u0645 \u062f\u0631\u06cc\u0627\u0641\u062a \u0635\u0648\u0631\u062a\u062d\u0633\u0627\u0628 \u062a\u0648\u0633\u0637 \u0645\u0634\u062a\u0631\u06a9 \u0627\u0632 \u062a\u0639\u0647\u062f \u067e\u0631\u062f\u0627\u062e\u062a \u0648\u06cc \u0646\u0645\u06cc \u06a9\u0627\u0647\u062f \u0648 \u062f\u0631 \u0635\u0648\u0631\u062a \u0639\u062f\u0645 \u062d\u0636\u0648\u0631 \u0645\u0634\u062a\u0631\u06a9 \u062f\u0631 \u0645\u062d\u0644 \u0645\u0644\u06a9 \u062f\u0631 \u0632\u0645\u0627\u0646 \u0645\u0631\u0627\u062c\u0639\u0647 \u0645\u0627\u0645\u0648\u0631 \u062b\u0628\u062a \u0634\u0645\u0627\u0631\u0647 \u06a9\u0646\u062a\u0648\u0631\u060c \u0645\u0634\u062a\u0631\u06a9 \u0645\u0648\u0638\u0641 \u0627\u0633\u062a \u062c\u0647\u062a \u0627\u0639\u0644\u0627\u0645 \u0634\u0645\u0627\u0631\u0647 \u06a9\u0646\u062a\u0648\u0631 \u0648 \u062f\u0631\u06cc\u0627\u0641\u062a \u0635\u0648\u0631\u062a\u062d\u0633\u0627\u0628 \u0628\u0647 \u0633\u0627\u0645\u0627\u0646\u0647 1522 \u06a9\u0644\u06cc\u062f 5 \u062a\u0645\u0627\u0633 \u062d\u0627\u0635\u0644 \u0646\u0645\u0627\u06cc\u06cc\u062f. * \u0645\u062d\u0641\u0638\u0647 \u0627\u0646\u0634\u0639\u0627\u0628 \u0648\u0627\u062d\u062f \u062e\u0648\u062f \u0631\u0627 \u0647\u0645\u06cc\u0634\u0647 \u0645\u0631\u062a\u0628 \u0646\u06af\u0647 \u062f\u0627\u0631\u06cc\u062f \u062a\u0627 \u062f\u0631 \u0645\u0648\u0642\u0639 \u0628\u0631\u0648\u0632 \u062d\u0627\u062f\u062b\u0647 \u062f\u0686\u0627\u0631 \u062e\u0633\u0627\u0631\u062a \u0646\u0634\u0648\u06cc\u062f \u0648 \u0627\u0632 \u0647\u0631\u06af\u0648\u0646\u0647 \u062f\u0633\u062a\u06a9\u0627\u0631\u06cc \u06a9\u0646\u062a\u0648\u0631 \u0622\u0628 \u062c\u062f\u0627 \u062e\u0648\u062f\u0627\u0631\u06cc \u0646\u0645\u0627\u06cc\u06cc\u062f * \u0647\u0631 \u06af\u0648\u0646\u0647 \u0627\u0634\u062a\u0628\u0627\u0647 \u0645\u0646\u062f\u0631\u062c \u062f\u0631 \u0627\u06cc\u0646 \u0642\u0628\u0636 \u0642\u0627\u0628\u0644 \u0627\u0635\u0644\u0627\u062d \u0627\u0633\u062a \u0628\u0631\u0627\u06cc \u06a9\u0633\u0628 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0648 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u0644\u06cc\u0647 \u062e\u062f\u0645\u0627\u062a \u063a\u06cc\u0631 \u062d\u0636\u0648\u0631\u06cc\u060c \u0645\u06cc \u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u0647 \u067e\u0631\u062a\u0627\u0644 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u0628\u0647 \u0622\u062f\u0631\u0633 www.abfaesfahan.ir \u0645\u0631\u0627\u062c\u0639\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f \u0628\u0631\u0627\u06cc \u0627\u0637\u0644\u0627\u0639 \u0627\u0632 \u0631\u0648\u0634 \u0647\u0627\u06cc \u0645\u0635\u0631\u0641 \u0628\u0647\u06cc\u0646\u0647 \u0622\u0628 \u0628\u0647 \u067e\u0631\u062a\u0627\u0644 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0645\u0635\u0631\u0641 \u0627\u06cc\u0646 \u0634\u0631\u06a9\u062a \u0628\u0647 \u0622\u062f\u0631\u0633 www.abnama.ir \u0645\u0631\u0627\u062c\u0639\u0647 \u0646\u0645\u0627\u06cc\u06cc\u062f "),P.Ob(),P.Ob(),P.Ob()),2&n&&(P.zb(17),P.xc("",t.$childEl.zoneTitle," "),P.zb(5),P.wc(t.$childEl.fullName),P.zb(16),P.wc(t.$childEl.karbariTitle),P.zb(10),P.wc(t.$childEl.zarfiatQarardadi),P.zb(9),P.xc("",t.$childEl.qotr," "),P.zb(5),P.xc("",t.$childEl.counterStateId," "),P.zb(7),P.xc(" ",t.$childEl.radif,""),P.zb(5),P.xc("",t.$childEl.eshterak," "),P.zb(5),P.xc("",t.$childEl.barge," "),P.zb(9),P.xc("",t.$childEl.preCounterReadingDate," "),P.zb(5),P.xc("",t.$childEl.currentCounterReadingDate," "),P.zb(6),P.xc("",t.$childEl.days," "),P.zb(9),P.xc(" ",t.$childEl.preCounterNumber,""),P.zb(5),P.xc("",t.$childEl.currentCounterNumber," "),P.zb(6),P.wc(t.$childEl.masraf),P.zb(5),P.wc(t.$childEl.masrafLiter),P.zb(5),P.wc(t.$childEl.masrafAverage),P.zb(9),P.wc(P.bc(139,27,t.$childEl.abBaha)),P.zb(6),P.wc(P.bc(145,29,t.$childEl.karmozdFazelab)),P.zb(6),P.wc(P.bc(151,31,t.$childEl.maliat)),P.zb(6),P.wc(P.bc(157,33,t.$childEl.budget)),P.zb(6),P.wc(P.bc(163,35,t.$childEl.preBedOrBes)),P.zb(6),P.wc(P.bc(169,37,t.$childEl.jam)),P.zb(8),P.wc(P.bc(177,39,t.$childEl.payable)),P.zb(6),P.wc(t.$childEl.deadLine),P.zb(12),P.wc(t.$childEl.billId),P.zb(6),P.wc(t.$childEl.payId))},pipes:[O.a],styles:["button[_ngcontent-%COMP%]{color:#fff;font-size:1.4rem;line-height:1.5;font-weight:700;font-family:inherit;padding:.375rem .75rem;height:3rem;min-width:20rem;width:93%;outline:none;border-radius:30px;background-color:#116fff;box-shadow:0 0 10px rgba(17,111,255,.5);margin-bottom:.9rem;cursor:pointer;display:flex;place-items:center;align-items:center;justify-content:center;place-content:space-evenly}@media screen and (max-width:414px){button[_ngcontent-%COMP%]{font-size:1.3rem}}section[_ngcontent-%COMP%]{border-radius:15px;direction:rtl;overflow:auto;margin:1rem 0 2rem;background:#fff;border:1px solid}section[_ngcontent-%COMP%]   .main_section[_ngcontent-%COMP%]{display:flex;margin:auto auto 2rem;padding:0 .1rem}@media (min-width:1024px){section[_ngcontent-%COMP%]   .main_section[_ngcontent-%COMP%]{justify-content:center}}._first[_ngcontent-%COMP%], ._forth[_ngcontent-%COMP%], ._second[_ngcontent-%COMP%], ._third[_ngcontent-%COMP%]{max-width:22rem;min-width:15rem;width:auto;height:auto;align-self:flex-end;margin-top:.18rem}._first[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%], ._forth[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%], ._second[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%], ._third[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%]{border:.2rem solid;border-radius:15px;font-weight:800;margin:.2rem}._first[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], ._forth[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], ._second[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%], ._third[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;margin-bottom:.5rem}._first[_ngcontent-%COMP%]{width:20rem}._first[_ngcontent-%COMP%]   .second_article[_ngcontent-%COMP%]{color:#b3377f}._first[_ngcontent-%COMP%]   .non_border[_ngcontent-%COMP%]{border:none!important}._first[_ngcontent-%COMP%]   .abfa[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:4rem;height:4rem}._first[_ngcontent-%COMP%]   .abfa[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{color:#569bc4;font-size:1.2rem}._forth[_ngcontent-%COMP%]   .__content_img[_ngcontent-%COMP%]{height:15.8rem}@media (min-width:550px){._forth[_ngcontent-%COMP%]   .__content_img[_ngcontent-%COMP%]{height:17.6rem}}._forth[_ngcontent-%COMP%]   .__content_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:.2rem solid;border-radius:15px}._forth[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{text-align:center;color:#569bc4;font-size:1.78rem}._forth[_ngcontent-%COMP%]   .__content[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%]{border-color:#c9e6ea;background-color:#c6edfe}._forth[_ngcontent-%COMP%]   .__content[_ngcontent-%COMP%]   .borders[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:block;align-items:unset;width:auto;margin-bottom:.5rem;text-align:center}._forth[_ngcontent-%COMP%]   .__content[_ngcontent-%COMP%]   .text_part[_ngcontent-%COMP%]{font-size:1.6rem}._forth[_ngcontent-%COMP%]   .dynamic_details[_ngcontent-%COMP%], ._forth[_ngcontent-%COMP%]   .text_part[_ngcontent-%COMP%]{width:100%;font-size:1.5rem}._second[_ngcontent-%COMP%]{margin-top:auto;width:18rem}._second[_ngcontent-%COMP%]   .horizontal_alignment[_ngcontent-%COMP%]{display:flex;padding:0 .5rem!important}._second[_ngcontent-%COMP%]   .horizontal_alignment[_ngcontent-%COMP%]   .inner_div[_ngcontent-%COMP%]{align-items:center;display:flex;border-left:.1rem solid;width:40%;margin-left:1rem}._second[_ngcontent-%COMP%]   .horizontal_alignment[_ngcontent-%COMP%]   .outer_div[_ngcontent-%COMP%]{width:65%}._second[_ngcontent-%COMP%]   .horizontal_alignment[_ngcontent-%COMP%]   .outer_div[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex-direction:row}._second[_ngcontent-%COMP%]   .horizontal_alignment[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{display:flex;flex-direction:column}._second[_ngcontent-%COMP%]   .horizontal_alignment[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .text_part[_ngcontent-%COMP%]{width:100%}._third[_ngcontent-%COMP%]{width:17rem}._third[_ngcontent-%COMP%]   .pay_section[_ngcontent-%COMP%]{border-color:#c5a6b8!important;background-color:#fcdbf0;color:#ea1919}._third[_ngcontent-%COMP%]   .last_child[_ngcontent-%COMP%]{display:block!important;text-align:center;border-top:.2rem solid;margin-top:40%}._third[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0 0 2rem;border-bottom:.2rem solid;text-align:center;margin:auto;font-size:1.2rem}._third[_ngcontent-%COMP%]   .dynamic_details[_ngcontent-%COMP%], ._third[_ngcontent-%COMP%]   .text_part[_ngcontent-%COMP%]{width:100%}.dynamic_details[_ngcontent-%COMP%], .text_part[_ngcontent-%COMP%]{width:50%;padding:0 .2rem;font-size:.87rem;font-weight:700;font-size:1.2rem}.dynamic_details[_ngcontent-%COMP%]{direction:ltr}button[_ngcontent-%COMP%]{width:100%}._button_section[_ngcontent-%COMP%]{width:21rem;margin:auto}.info[_ngcontent-%COMP%]{display:flex;overflow:auto}.info[_ngcontent-%COMP%]   .advice[_ngcontent-%COMP%]{margin:.2rem;border:2px solid;border-radius:15px;padding:.2rem;font-size:1.2rem;width:50%;min-width:22rem}@media print{.main_section[_ngcontent-%COMP%]{size:landscape;page-break-after:always;zoom:80%;margin:0;width:64rem}}"]}),i)}],_=((b=function n(){_classCallCheck(this,n)}).\u0275mod=P.Ib({type:b}),b.\u0275inj=P.Hb({factory:function(n){return new(n||b)},imports:[[d.f.forChild(l)],d.f]}),b),v=((c=function n(){_classCallCheck(this,n)}).\u0275mod=P.Ib({type:c}),c.\u0275inj=P.Hb({factory:function(n){return new(n||c)},imports:[[o.b,r.a,_]]}),c)}}]);