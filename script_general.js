(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"shadow":false,"definitions": [{"class":"Panorama","hfovMin":"150%","thumbnailUrl":"media/panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8_t.jpg","partial":false,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"class":"TiledImageResourceLevel","url":"media/panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18},{"width":6144,"rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12},{"width":3072,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6}]},"thumbnailUrl":"media/panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_5CDC29D8_4C39_C1F0_41D0_B860ECD2B340"],"label":trans('panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8.label'),"id":"panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8","hfovMax":130,"data":{"label":"360 VR"},"pitch":0,"adjacentPanoramas":[{"distance":4.65,"yaw":-111.05,"class":"AdjacentPanorama","select":"this.overlay_5CDC29D8_4C39_C1F0_41D0_B860ECD2B340.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_5CDC29D8_4C39_C1F0_41D0_B860ECD2B340"},"panorama":"this.panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853"}],"hfov":360},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","pressedIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464_pressed_rollover.png","class":"IconButton","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC804C48_BF7C_035C_41C4_51F38A661464.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"minHeight":60,"data":{"name":"IconButton GYRO"},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","pressedIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628_pressed_rollover.png","class":"IconButton","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"minHeight":60,"data":{"name":"IconButton HS "},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"textDecoration":"none","width":280,"paddingTop":0,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"label4056","fontFamily":"Arial","paddingRight":0,"paddingLeft":0,"top":17,"verticalAlign":"middle","fontColor":"#FFFFFF","class":"Label","toolTipHorizontalAlign":"center","height":50,"text":trans('label4056.text'),"maxHeight":50,"fontSize":30,"maxWidth":280,"fontStyle":"normal","minHeight":50,"right":"1.45%","minWidth":280,"fontWeight":"bold","borderSize":0,"data":{"name":"Label28174"}},{"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8_camera"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC819C46_BF7C_0354_415E_028207B038AC","pressedIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed.png","paddingRight":0,"paddingLeft":0,"top":"6.78%","verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC_pressed_rollover.png","class":"IconButton","toolTipHorizontalAlign":"center","height":60,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, null, null, false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, null, null, false)}.bind(this); if(!this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F.get('visible')){ visibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) } else { invisibleFunc(this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F) }","iconURL":"skin/IconButton_AC819C46_BF7C_0354_415E_028207B038AC.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"minHeight":60,"right":"0.6%","minWidth":60,"borderSize":0,"data":{"name":"image button menu"}},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8","camera":"this.panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8_camera"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853","camera":"this.panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853_camera"}],"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist"},{"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"borderRadius":0,"playbackBarBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadOpacity":1,"playbackBarBorderColor":"#AAAAAA","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":2,"playbackBarBorderRadius":4,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"shadow":false,"playbackBarHeight":20,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"paddingRight":0,"progressBackgroundColorRatios":[0,1],"paddingLeft":0,"toolTipBackgroundColor":"#999999","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":12,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#666666","progressOpacity":1,"progressRight":10,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0,1],"toolTipHorizontalAlign":"center","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":10,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#222222","#444444"],"subtitlesPaddingLeft":5,"progressBackgroundOpacity":1,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#AAAAAA","subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"toolTipFontWeight":"normal","playbackBarHeadShadowVerticalLength":0,"progressBarBackgroundColor":["#222222","#444444"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#EEEEEE","#CCCCCC"],"playbackBarHeadHeight":30,"progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":1,"subtitlesBorderColor":"#FFFFFF","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF0000","playbackBarHeadShadowHorizontalLength":0,"playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"progressHeight":20,"borderSize":0,"toolTipPaddingRight":6,"progressBorderSize":2,"minWidth":100,"subtitlesFontFamily":"Arial","subtitlesOpacity":1,"subtitlesBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":4,"transitionDuration":500,"progressBorderRadius":4,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","top":0,"playbackBarProgressBackgroundColorRatios":[0,1],"bottom":0,"surfaceReticleColor":"#FFFFFF","progressLeft":10,"surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","subtitlesTextShadowHorizontalLength":1,"class":"ViewerArea","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"toolTipShadowColor":"#333333","vrPointerSelectionTime":1500,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":0.5,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"left":0,"vrPointerColor":"#FFFFFF","right":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"playbackBarRight":0},{"class":"PlayList","items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8_camera","media":"this.panorama_427AF0F0_4C1A_DFCD_41CC_A6DA9F1213F8","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853","camera":"this.panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853_camera","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","class":"IconButton","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137.png","maxHeight":60,"mode":"push","transparencyActive":true,"maxWidth":60,"rollOverIconURL":"skin/IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137_rollover.png","minHeight":1,"data":{"name":"IconButton FB"},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","class":"IconButton","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89.png","maxHeight":60,"mode":"push","transparencyActive":true,"maxWidth":60,"rollOverIconURL":"skin/IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89_rollover.png","minHeight":60,"data":{"name":"IconButton VR"},"minWidth":60,"borderSize":0},{"borderRadius":0,"gap":10,"width":110,"overflow":"visible","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"paddingBottom":0,"id":"Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE","horizontalAlign":"center","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","bottom":"4.6%","contentOpaque":false,"scrollBarOpacity":0.5,"class":"Container","toolTipHorizontalAlign":"center","height":110,"layout":"horizontal","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","creationPolicy":"inAdvance","minHeight":1,"right":"0%","minWidth":1,"shadow":false,"borderSize":0,"data":{"name":"button menu sup"}},{"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853_camera"},{"itemThumbnailShadowVerticalLength":3,"gap":10,"right":"0.12%","borderRadius":5,"itemThumbnailShadowBlurRadius":8,"itemLabelTextDecoration":"none","itemLabelFontFamily":"Arial","itemThumbnailHeight":75,"itemLabelHorizontalAlign":"center","paddingTop":10,"propagateClick":false,"backgroundOpacity":0,"scrollBarMargin":2,"itemBorderRadius":0,"itemLabelFontColor":"#FFFFFF","itemVerticalAlign":"middle","paddingBottom":10,"id":"ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","itemBackgroundColor":[],"horizontalAlign":"left","itemPaddingRight":3,"itemThumbnailWidth":75,"paddingLeft":20,"itemPaddingLeft":3,"itemOpacity":1,"itemLabelFontWeight":"normal","paddingRight":20,"verticalAlign":"top","bottom":"0.02%","itemHorizontalAlign":"center","itemThumbnailScaleMode":"fit_outside","scrollBarOpacity":0.5,"playList":"this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist","itemLabelFontSize":14,"class":"ThumbnailList","toolTipHorizontalAlign":"center","height":135.02,"itemBackgroundColorDirection":"vertical","itemBackgroundOpacity":0,"itemPaddingTop":3,"selectedItemLabelFontColor":"#FFCC00","scrollBarVisible":"rollOver","scrollBarWidth":10,"itemThumbnailShadowHorizontalLength":3,"layout":"horizontal","itemThumbnailShadowColor":"#000000","scrollBarColor":"#FFFFFF","itemBackgroundColorRatios":[],"rollOverItemBackgroundOpacity":0,"itemThumbnailShadow":true,"itemThumbnailOpacity":1,"selectedItemLabelFontWeight":"bold","itemLabelPosition":"bottom","left":"0.01%","itemLabelGap":9,"itemLabelFontStyle":"normal","itemThumbnailShadowOpacity":0.54,"minHeight":20,"data":{"name":"ThumbnailList35762"},"itemThumbnailShadowSpread":1,"shadow":false,"minWidth":20,"itemThumbnailBorderRadius":50,"itemPaddingBottom":3,"borderSize":0,"rollOverItemLabelFontWeight":"normal","itemMode":"normal"},{"shadow":false,"borderRadius":0,"width":60,"cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"center","paddingBottom":0,"id":"IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","pressedIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed.png","paddingRight":0,"paddingLeft":0,"verticalAlign":"middle","pressedRollOverIconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF_pressed_rollover.png","class":"IconButton","toolTipHorizontalAlign":"center","height":60,"iconURL":"skin/IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF.png","maxHeight":60,"mode":"toggle","transparencyActive":true,"maxWidth":60,"minHeight":60,"data":{"name":"IconButton FULLSCREEN"},"minWidth":60,"borderSize":0},{"shadow":false,"borderRadius":0,"gap":10,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.Container_AC811C43_BF7C_034C_41DD_1E88AB09B3BE"],"paddingBottom":0,"id":"Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","horizontalAlign":"left","paddingRight":0,"paddingLeft":0,"top":"17.26%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"class":"Container","toolTipHorizontalAlign":"center","height":430,"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":430,"creationPolicy":"inAdvance","maxWidth":85,"minHeight":430,"right":"1.22%","minWidth":85,"borderSize":0,"data":{"name":"--SETTINGS"}},{"shadow":false,"borderRadius":0,"gap":3,"width":85,"overflow":"scroll","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"scrollBarMargin":2,"children":["this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137"],"paddingBottom":0,"id":"Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F","horizontalAlign":"center","paddingRight":0,"paddingLeft":0,"top":"14%","verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"class":"Container","toolTipHorizontalAlign":"center","height":320,"layout":"vertical","scrollBarVisible":"rollOver","scrollBarWidth":10,"scrollBarColor":"#000000","maxHeight":320,"creationPolicy":"inAdvance","maxWidth":85,"minHeight":320,"right":"0%","minWidth":85,"borderSize":0,"data":{"name":"-button set"}},{"shadow":false,"borderRadius":0,"width":80,"url":"skin/Image_A15825F1_AD39_D33D_41CD_0C70008BA88C.png","cursor":"hand","paddingTop":0,"propagateClick":true,"backgroundOpacity":0,"horizontalAlign":"left","paddingBottom":0,"id":"Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","paddingRight":0,"paddingLeft":0,"top":21.17,"verticalAlign":"top","class":"Image","toolTipHorizontalAlign":"center","height":85,"click":"this.openLink(this.translate('LinkBehaviour_A4D1DCCC_BF24_0354_41BC_7B57F239723C.source'), '_blank')","maxHeight":80,"left":26.3,"maxWidth":80,"minHeight":80,"data":{"name":"Image4995"},"minWidth":80,"borderSize":0,"scaleMode":"fill"},{"buttonToggleHotspots":"this.IconButton_AC803C48_BF7C_035C_41E2_97D2A98CB628","surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89","displayPlaybackBar":true,"buttonToggleGyroscope":"this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464","aaEnabled":true,"touchControlMode":"drag_rotation","gyroscopeEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"thumbnailUrl":"media/panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853_t.jpg","partial":false,"class":"Panorama","label":trans('panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853.label'),"hfovMin":"150%","hfovMax":130,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"class":"TiledImageResourceLevel","url":"media/panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18},{"width":6144,"rowCount":2,"class":"TiledImageResourceLevel","url":"media/panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12},{"width":3072,"rowCount":1,"class":"TiledImageResourceLevel","url":"media/panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853_0/{face}/2/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6}]},"thumbnailUrl":"media/panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"hfov":360,"pitch":0,"data":{"label":"3602 VR"},"id":"panorama_5C556CEE_4C0B_C7D3_41A2_28D544CF5853"},{"areas":["this.HotspotPanoramaOverlayArea_5CDF39D9_4C39_C1F0_41D2_8A060E9F01E3"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 01","hasPanoramaAction":true},"useHandCursor":true,"items":[{"distance":50,"yaw":-111.05,"hfov":6,"class":"HotspotPanoramaOverlayImage","vfov":6,"horizontalAlign":"center","data":{"label":"Arrow 01"},"verticalAlign":"middle","image":"this.AnimatedImageResource_5C9CC992_4C06_4E76_41C8_4BA15E9E24FD","pitch":-20.08,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_5CDC29D8_4C39_C1F0_41D0_B860ECD2B340"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_5CDF39D9_4C39_C1F0_41D2_8A060E9F01E3"},{"rowCount":3,"class":"AnimatedImageResource","frameCount":9,"colCount":3,"frameDuration":62,"levels":[{"height":255,"width":282,"class":"ImageResourceLevel","url":"media/res_5DC3395F_4C3A_CEEF_41AD_2163EF175573_0.png"}],"id":"AnimatedImageResource_5C9CC992_4C06_4E76_41C8_4BA15E9E24FD"}],"borderRadius":0,"backgroundColorDirection":"vertical","gap":10,"width":"100%","mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"defaultVRPointer":"gaze","paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"translate":TDV.Tour.Script.translate,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"initAnalytics":TDV.Tour.Script.initAnalytics,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getKey":TDV.Tour.Script.getKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"openLink":TDV.Tour.Script.openLink,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"clone":TDV.Tour.Script.clone,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playAudioList":TDV.Tour.Script.playAudioList,"textToSpeech":TDV.Tour.Script.textToSpeech,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"init":TDV.Tour.Script.init,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneCamera":TDV.Tour.Script.cloneCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"registerKey":TDV.Tour.Script.registerKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"showWindow":TDV.Tour.Script.showWindow,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMainViewer":TDV.Tour.Script.getMainViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMapLocation":TDV.Tour.Script.setMapLocation,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getComponentByName":TDV.Tour.Script.getComponentByName,"setValue":TDV.Tour.Script.setValue,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setLocale":TDV.Tour.Script.setLocale,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"existsKey":TDV.Tour.Script.existsKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"shareSocial":TDV.Tour.Script.shareSocial,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getOverlays":TDV.Tour.Script.getOverlays},"paddingRight":0,"paddingLeft":0,"scrollBarMargin":2,"vrPolyfillScale":1,"verticalAlign":"top","buttonToggleFullscreen":"this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF","horizontalAlign":"left","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"class":"Player","children":["this.MainViewer","this.label4056","this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4","this.Image_A15825F1_AD39_D33D_41CD_0C70008BA88C","this.Container_AC80FC48_BF7C_035C_41DF_EAF55BA98CED","this.IconButton_AC819C46_BF7C_0354_415E_028207B038AC","this.Container_AC806C47_BF7C_0354_41B4_D4E895D34D8F"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#000000"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"creationPolicy":"inAdvance","left":602.7,"backgroundPreloadEnabled":true,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AC807C47_BF7C_0354_41DA_D10D6D13DE89,this.IconButton_AC804C48_BF7C_035C_41C4_51F38A661464,this.IconButton_AC80EC48_BF7C_035C_41D8_41C8A2A2F137], 'cardboardAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_A1035095_AD38_51E5_41E2_55F13EC12CB4_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_AC800C48_BF7C_035C_41E0_3292DD4746FF].forEach(function(component) { component.set('visible', false); }) }","minHeight":20,"data":{"defaultLocale":"fr","name":"Player28156","initialScale":0.65,"locales":{"fr":"locale/fr.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"volume":1,"speechOnTooltip":false,"rate":1}},"minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Tue Aug 13 2024