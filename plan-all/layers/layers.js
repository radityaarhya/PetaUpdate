var wms_layers = [];

var format_NAVDAR12danJURIT1tracks_0 = new ol.format.GeoJSON();
var features_NAVDAR12danJURIT1tracks_0 = format_NAVDAR12danJURIT1tracks_0.readFeatures(json_NAVDAR12danJURIT1tracks_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVDAR12danJURIT1tracks_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVDAR12danJURIT1tracks_0.addFeatures(features_NAVDAR12danJURIT1tracks_0);
var lyr_NAVDAR12danJURIT1tracks_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAVDAR12danJURIT1tracks_0, 
                style: style_NAVDAR12danJURIT1tracks_0,
                interactive: true,
                title: '<img src="styles/legend/NAVDAR12danJURIT1tracks_0.png" /> NAVDAR 1-2 dan JURIT-1 — tracks'
            });
var format_JURIT2tracks_1 = new ol.format.GeoJSON();
var features_JURIT2tracks_1 = format_JURIT2tracks_1.readFeatures(json_JURIT2tracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURIT2tracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURIT2tracks_1.addFeatures(features_JURIT2tracks_1);
var lyr_JURIT2tracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURIT2tracks_1, 
                style: style_JURIT2tracks_1,
                interactive: true,
                title: '<img src="styles/legend/JURIT2tracks_1.png" /> JURIT-2 — tracks'
            });
var format_JURITEMERGENSItracks_2 = new ol.format.GeoJSON();
var features_JURITEMERGENSItracks_2 = format_JURITEMERGENSItracks_2.readFeatures(json_JURITEMERGENSItracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITEMERGENSItracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITEMERGENSItracks_2.addFeatures(features_JURITEMERGENSItracks_2);
var lyr_JURITEMERGENSItracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITEMERGENSItracks_2, 
                style: style_JURITEMERGENSItracks_2,
                interactive: true,
                title: '<img src="styles/legend/JURITEMERGENSItracks_2.png" /> JURIT-EMERGENSI — tracks'
            });

        var lyr_GoogleSatelliteHybrid_3 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_JalanDroppointAkeWelcoming_4 = new ol.format.GeoJSON();
var features_JalanDroppointAkeWelcoming_4 = format_JalanDroppointAkeWelcoming_4.readFeatures(json_JalanDroppointAkeWelcoming_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDroppointAkeWelcoming_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDroppointAkeWelcoming_4.addFeatures(features_JalanDroppointAkeWelcoming_4);
var lyr_JalanDroppointAkeWelcoming_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanDroppointAkeWelcoming_4, 
                style: style_JalanDroppointAkeWelcoming_4,
                interactive: true,
                title: '<img src="styles/legend/JalanDroppointAkeWelcoming_4.png" /> Jalan Droppoint-A ke Welcoming'
            });
var format_JURITPLANB_5 = new ol.format.GeoJSON();
var features_JURITPLANB_5 = format_JURITPLANB_5.readFeatures(json_JURITPLANB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITPLANB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITPLANB_5.addFeatures(features_JURITPLANB_5);
var lyr_JURITPLANB_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITPLANB_5, 
                style: style_JURITPLANB_5,
                interactive: true,
                title: '<img src="styles/legend/JURITPLANB_5.png" /> JURIT PLAN-B'
            });
var format_JURITPLANA_6 = new ol.format.GeoJSON();
var features_JURITPLANA_6 = format_JURITPLANA_6.readFeatures(json_JURITPLANA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITPLANA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITPLANA_6.addFeatures(features_JURITPLANA_6);
var lyr_JURITPLANA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITPLANA_6, 
                style: style_JURITPLANA_6,
                interactive: true,
                title: '<img src="styles/legend/JURITPLANA_6.png" /> JURIT PLAN-A'
            });
var format_ShortcutPanitia_7 = new ol.format.GeoJSON();
var features_ShortcutPanitia_7 = format_ShortcutPanitia_7.readFeatures(json_ShortcutPanitia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShortcutPanitia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShortcutPanitia_7.addFeatures(features_ShortcutPanitia_7);
var lyr_ShortcutPanitia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShortcutPanitia_7, 
                style: style_ShortcutPanitia_7,
                interactive: true,
                title: '<img src="styles/legend/ShortcutPanitia_7.png" /> Shortcut Panitia'
            });
var format_NAVDAR12_8 = new ol.format.GeoJSON();
var features_NAVDAR12_8 = format_NAVDAR12_8.readFeatures(json_NAVDAR12_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVDAR12_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVDAR12_8.addFeatures(features_NAVDAR12_8);
var lyr_NAVDAR12_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAVDAR12_8, 
                style: style_NAVDAR12_8,
                interactive: true,
                title: '<img src="styles/legend/NAVDAR12_8.png" /> NAVDAR 1-2'
            });
var format_JURITEMERGENSI_9 = new ol.format.GeoJSON();
var features_JURITEMERGENSI_9 = format_JURITEMERGENSI_9.readFeatures(json_JURITEMERGENSI_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITEMERGENSI_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITEMERGENSI_9.addFeatures(features_JURITEMERGENSI_9);
var lyr_JURITEMERGENSI_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITEMERGENSI_9, 
                style: style_JURITEMERGENSI_9,
                interactive: true,
                title: '<img src="styles/legend/JURITEMERGENSI_9.png" /> JURIT EMERGENSI'
            });
var format_NAVDAREMERGENSI_10 = new ol.format.GeoJSON();
var features_NAVDAREMERGENSI_10 = format_NAVDAREMERGENSI_10.readFeatures(json_NAVDAREMERGENSI_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVDAREMERGENSI_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVDAREMERGENSI_10.addFeatures(features_NAVDAREMERGENSI_10);
var lyr_NAVDAREMERGENSI_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAVDAREMERGENSI_10, 
                style: style_NAVDAREMERGENSI_10,
                interactive: true,
                title: '<img src="styles/legend/NAVDAREMERGENSI_10.png" /> NAVDAR EMERGENSI'
            });
var format_JalanDroppointBRapelling_11 = new ol.format.GeoJSON();
var features_JalanDroppointBRapelling_11 = format_JalanDroppointBRapelling_11.readFeatures(json_JalanDroppointBRapelling_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDroppointBRapelling_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDroppointBRapelling_11.addFeatures(features_JalanDroppointBRapelling_11);
var lyr_JalanDroppointBRapelling_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanDroppointBRapelling_11, 
                style: style_JalanDroppointBRapelling_11,
                interactive: true,
                title: '<img src="styles/legend/JalanDroppointBRapelling_11.png" /> Jalan Droppoint-B-Rapelling'
            });
var format_CheckPointJuritEmergensi_12 = new ol.format.GeoJSON();
var features_CheckPointJuritEmergensi_12 = format_CheckPointJuritEmergensi_12.readFeatures(json_CheckPointJuritEmergensi_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointJuritEmergensi_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointJuritEmergensi_12.addFeatures(features_CheckPointJuritEmergensi_12);
var lyr_CheckPointJuritEmergensi_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointJuritEmergensi_12, 
                style: style_CheckPointJuritEmergensi_12,
                interactive: true,
                title: '<img src="styles/legend/CheckPointJuritEmergensi_12.png" /> CheckPoint Jurit Emergensi'
            });
var format_CheckPointNavdarEmergensi_13 = new ol.format.GeoJSON();
var features_CheckPointNavdarEmergensi_13 = format_CheckPointNavdarEmergensi_13.readFeatures(json_CheckPointNavdarEmergensi_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointNavdarEmergensi_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointNavdarEmergensi_13.addFeatures(features_CheckPointNavdarEmergensi_13);
var lyr_CheckPointNavdarEmergensi_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointNavdarEmergensi_13, 
                style: style_CheckPointNavdarEmergensi_13,
                interactive: true,
                title: '<img src="styles/legend/CheckPointNavdarEmergensi_13.png" /> CheckPoint Navdar Emergensi'
            });
var format_CheckPointNavdar12_14 = new ol.format.GeoJSON();
var features_CheckPointNavdar12_14 = format_CheckPointNavdar12_14.readFeatures(json_CheckPointNavdar12_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointNavdar12_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointNavdar12_14.addFeatures(features_CheckPointNavdar12_14);
var lyr_CheckPointNavdar12_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointNavdar12_14, 
                style: style_CheckPointNavdar12_14,
                interactive: true,
                title: '<img src="styles/legend/CheckPointNavdar12_14.png" /> CheckPoint Navdar 1-2'
            });
var format_CheckPointJuritPlanB_15 = new ol.format.GeoJSON();
var features_CheckPointJuritPlanB_15 = format_CheckPointJuritPlanB_15.readFeatures(json_CheckPointJuritPlanB_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointJuritPlanB_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointJuritPlanB_15.addFeatures(features_CheckPointJuritPlanB_15);
var lyr_CheckPointJuritPlanB_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointJuritPlanB_15, 
                style: style_CheckPointJuritPlanB_15,
                interactive: true,
                title: '<img src="styles/legend/CheckPointJuritPlanB_15.png" /> CheckPoint Jurit Plan-B'
            });
var format_CheckPointJuritPlanA_16 = new ol.format.GeoJSON();
var features_CheckPointJuritPlanA_16 = format_CheckPointJuritPlanA_16.readFeatures(json_CheckPointJuritPlanA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointJuritPlanA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointJuritPlanA_16.addFeatures(features_CheckPointJuritPlanA_16);
var lyr_CheckPointJuritPlanA_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointJuritPlanA_16, 
                style: style_CheckPointJuritPlanA_16,
                interactive: true,
                title: '<img src="styles/legend/CheckPointJuritPlanA_16.png" /> CheckPoint Jurit Plan-A'
            });
var format_DropPointuntukPlannAB_17 = new ol.format.GeoJSON();
var features_DropPointuntukPlannAB_17 = format_DropPointuntukPlannAB_17.readFeatures(json_DropPointuntukPlannAB_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DropPointuntukPlannAB_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DropPointuntukPlannAB_17.addFeatures(features_DropPointuntukPlannAB_17);
var lyr_DropPointuntukPlannAB_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DropPointuntukPlannAB_17, 
                style: style_DropPointuntukPlannAB_17,
                interactive: true,
                title: '<img src="styles/legend/DropPointuntukPlannAB_17.png" /> DropPoint untuk Plann A-B'
            });
var format_DropPointuntukPlanEmergensi_18 = new ol.format.GeoJSON();
var features_DropPointuntukPlanEmergensi_18 = format_DropPointuntukPlanEmergensi_18.readFeatures(json_DropPointuntukPlanEmergensi_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DropPointuntukPlanEmergensi_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DropPointuntukPlanEmergensi_18.addFeatures(features_DropPointuntukPlanEmergensi_18);
var lyr_DropPointuntukPlanEmergensi_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DropPointuntukPlanEmergensi_18, 
                style: style_DropPointuntukPlanEmergensi_18,
                interactive: true,
                title: '<img src="styles/legend/DropPointuntukPlanEmergensi_18.png" /> DropPoint untuk Plan Emergensi'
            });
var format_ChekPointBasecampPanitia_19 = new ol.format.GeoJSON();
var features_ChekPointBasecampPanitia_19 = format_ChekPointBasecampPanitia_19.readFeatures(json_ChekPointBasecampPanitia_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChekPointBasecampPanitia_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChekPointBasecampPanitia_19.addFeatures(features_ChekPointBasecampPanitia_19);
var lyr_ChekPointBasecampPanitia_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChekPointBasecampPanitia_19, 
                style: style_ChekPointBasecampPanitia_19,
                interactive: true,
                title: '<img src="styles/legend/ChekPointBasecampPanitia_19.png" /> ChekPoint Basecamp Panitia'
            });
var group_OLD = new ol.layer.Group({
                                layers: [lyr_NAVDAR12danJURIT1tracks_0,lyr_JURIT2tracks_1,lyr_JURITEMERGENSItracks_2,],
                                title: "OLD"});

lyr_NAVDAR12danJURIT1tracks_0.setVisible(true);lyr_JURIT2tracks_1.setVisible(true);lyr_JURITEMERGENSItracks_2.setVisible(true);lyr_GoogleSatelliteHybrid_3.setVisible(true);lyr_JalanDroppointAkeWelcoming_4.setVisible(true);lyr_JURITPLANB_5.setVisible(true);lyr_JURITPLANA_6.setVisible(true);lyr_ShortcutPanitia_7.setVisible(true);lyr_NAVDAR12_8.setVisible(true);lyr_JURITEMERGENSI_9.setVisible(true);lyr_NAVDAREMERGENSI_10.setVisible(true);lyr_JalanDroppointBRapelling_11.setVisible(true);lyr_CheckPointJuritEmergensi_12.setVisible(true);lyr_CheckPointNavdarEmergensi_13.setVisible(true);lyr_CheckPointNavdar12_14.setVisible(true);lyr_CheckPointJuritPlanB_15.setVisible(true);lyr_CheckPointJuritPlanA_16.setVisible(true);lyr_DropPointuntukPlannAB_17.setVisible(true);lyr_DropPointuntukPlanEmergensi_18.setVisible(true);lyr_ChekPointBasecampPanitia_19.setVisible(true);
var layersList = [group_OLD,lyr_GoogleSatelliteHybrid_3,lyr_JalanDroppointAkeWelcoming_4,lyr_JURITPLANB_5,lyr_JURITPLANA_6,lyr_ShortcutPanitia_7,lyr_NAVDAR12_8,lyr_JURITEMERGENSI_9,lyr_NAVDAREMERGENSI_10,lyr_JalanDroppointBRapelling_11,lyr_CheckPointJuritEmergensi_12,lyr_CheckPointNavdarEmergensi_13,lyr_CheckPointNavdar12_14,lyr_CheckPointJuritPlanB_15,lyr_CheckPointJuritPlanA_16,lyr_DropPointuntukPlannAB_17,lyr_DropPointuntukPlanEmergensi_18,lyr_ChekPointBasecampPanitia_19];
lyr_NAVDAR12danJURIT1tracks_0.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_JURIT2tracks_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_JURITEMERGENSItracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_JalanDroppointAkeWelcoming_4.set('fieldAliases', {'name': 'name', });
lyr_JURITPLANB_5.set('fieldAliases', {'nama': 'nama', });
lyr_JURITPLANA_6.set('fieldAliases', {'nama': 'nama', });
lyr_ShortcutPanitia_7.set('fieldAliases', {'nama_jalan': 'nama_jalan', });
lyr_NAVDAR12_8.set('fieldAliases', {'nama': 'nama', });
lyr_JURITEMERGENSI_9.set('fieldAliases', {'nama': 'nama', });
lyr_NAVDAREMERGENSI_10.set('fieldAliases', {'nama': 'nama', });
lyr_JalanDroppointBRapelling_11.set('fieldAliases', {'nama': 'nama', });
lyr_CheckPointJuritEmergensi_12.set('fieldAliases', {'nama_loc': 'nama_loc', 'bayangan': 'bayangan', 'img': 'img', 'byngn': 'byngn', });
lyr_CheckPointNavdarEmergensi_13.set('fieldAliases', {'name_loc': 'name_loc', 'bayangan': 'bayangan', });
lyr_CheckPointNavdar12_14.set('fieldAliases', {'nama_loc': 'nama_loc', 'img': 'img', 'bayangan': 'bayangan', 'img_url': 'img_url', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', });
lyr_CheckPointJuritPlanB_15.set('fieldAliases', {'nama_loc': 'nama_loc', 'bayangan': 'bayangan', 'img': 'img', });
lyr_CheckPointJuritPlanA_16.set('fieldAliases', {'nama_loc': 'nama_loc', 'img': 'img', 'bayangan': 'bayangan', });
lyr_DropPointuntukPlannAB_17.set('fieldAliases', {'img': 'img', 'nama_loc': 'nama_loc', });
lyr_DropPointuntukPlanEmergensi_18.set('fieldAliases', {'nama_loc': 'nama_loc', 'img': 'img', });
lyr_ChekPointBasecampPanitia_19.set('fieldAliases', {'name_loc': 'name_loc', 'link': 'link', });
lyr_NAVDAR12danJURIT1tracks_0.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_JURIT2tracks_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_JURITEMERGENSItracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_JalanDroppointAkeWelcoming_4.set('fieldImages', {'name': 'TextEdit', });
lyr_JURITPLANB_5.set('fieldImages', {'nama': 'TextEdit', });
lyr_JURITPLANA_6.set('fieldImages', {'nama': 'TextEdit', });
lyr_ShortcutPanitia_7.set('fieldImages', {'nama_jalan': 'TextEdit', });
lyr_NAVDAR12_8.set('fieldImages', {'nama': 'TextEdit', });
lyr_JURITEMERGENSI_9.set('fieldImages', {'nama': 'TextEdit', });
lyr_NAVDAREMERGENSI_10.set('fieldImages', {'nama': 'TextEdit', });
lyr_JalanDroppointBRapelling_11.set('fieldImages', {'nama': 'TextEdit', });
lyr_CheckPointJuritEmergensi_12.set('fieldImages', {'nama_loc': 'TextEdit', 'bayangan': 'Hidden', 'img': 'TextEdit', 'byngn': '', });
lyr_CheckPointNavdarEmergensi_13.set('fieldImages', {'name_loc': 'TextEdit', 'bayangan': 'Hidden', });
lyr_CheckPointNavdar12_14.set('fieldImages', {'nama_loc': 'TextEdit', 'img': 'Hidden', 'bayangan': 'Hidden', 'img_url': 'TextEdit', 'auxiliary_storage_callouts_originx': 'TextEdit', 'auxiliary_storage_callouts_originy': 'TextEdit', 'auxiliary_storage_callouts_destinationx': 'TextEdit', 'auxiliary_storage_callouts_destinationy': 'TextEdit', });
lyr_CheckPointJuritPlanB_15.set('fieldImages', {'nama_loc': 'TextEdit', 'bayangan': 'TextEdit', 'img': 'TextEdit', });
lyr_CheckPointJuritPlanA_16.set('fieldImages', {'nama_loc': 'TextEdit', 'img': 'TextEdit', 'bayangan': 'TextEdit', });
lyr_DropPointuntukPlannAB_17.set('fieldImages', {'img': 'TextEdit', 'nama_loc': 'TextEdit', });
lyr_DropPointuntukPlanEmergensi_18.set('fieldImages', {'nama_loc': 'TextEdit', 'img': 'TextEdit', });
lyr_ChekPointBasecampPanitia_19.set('fieldImages', {'name_loc': 'TextEdit', 'link': '', });
lyr_NAVDAR12danJURIT1tracks_0.set('fieldLabels', {});
lyr_JURIT2tracks_1.set('fieldLabels', {});
lyr_JURITEMERGENSItracks_2.set('fieldLabels', {});
lyr_JalanDroppointAkeWelcoming_4.set('fieldLabels', {'name': 'no label', });
lyr_JURITPLANB_5.set('fieldLabels', {'nama': 'no label', });
lyr_JURITPLANA_6.set('fieldLabels', {'nama': 'no label', });
lyr_ShortcutPanitia_7.set('fieldLabels', {'nama_jalan': 'no label', });
lyr_NAVDAR12_8.set('fieldLabels', {'nama': 'no label', });
lyr_JURITEMERGENSI_9.set('fieldLabels', {'nama': 'no label', });
lyr_NAVDAREMERGENSI_10.set('fieldLabels', {'nama': 'no label', });
lyr_JalanDroppointBRapelling_11.set('fieldLabels', {'nama': 'no label', });
lyr_CheckPointJuritEmergensi_12.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', 'byngn': 'no label', });
lyr_CheckPointNavdarEmergensi_13.set('fieldLabels', {'name_loc': 'no label', });
lyr_CheckPointNavdar12_14.set('fieldLabels', {'nama_loc': 'no label', 'img_url': 'no label', 'auxiliary_storage_callouts_originx': 'no label', 'auxiliary_storage_callouts_originy': 'no label', 'auxiliary_storage_callouts_destinationx': 'no label', 'auxiliary_storage_callouts_destinationy': 'no label', });
lyr_CheckPointJuritPlanB_15.set('fieldLabels', {'nama_loc': 'no label', 'bayangan': 'no label', 'img': 'no label', });
lyr_CheckPointJuritPlanA_16.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', 'bayangan': 'no label', });
lyr_DropPointuntukPlannAB_17.set('fieldLabels', {'img': 'no label', 'nama_loc': 'no label', });
lyr_DropPointuntukPlanEmergensi_18.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', });
lyr_ChekPointBasecampPanitia_19.set('fieldLabels', {'name_loc': 'no label', 'link': 'no label', });
lyr_ChekPointBasecampPanitia_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});