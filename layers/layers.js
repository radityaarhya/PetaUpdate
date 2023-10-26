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
var group_OLD = new ol.layer.Group({
                                layers: [lyr_NAVDAR12danJURIT1tracks_0,lyr_JURIT2tracks_1,lyr_JURITEMERGENSItracks_2,],
                                title: "OLD"});

lyr_NAVDAR12danJURIT1tracks_0.setVisible(true);lyr_JURIT2tracks_1.setVisible(true);lyr_JURITEMERGENSItracks_2.setVisible(true);lyr_GoogleSatelliteHybrid_3.setVisible(true);lyr_JalanDroppointAkeWelcoming_4.setVisible(true);lyr_JURITPLANB_5.setVisible(true);lyr_JURITPLANA_6.setVisible(true);lyr_ShortcutPanitia_7.setVisible(true);lyr_NAVDAR12_8.setVisible(true);lyr_JURITEMERGENSI_9.setVisible(true);lyr_NAVDAREMERGENSI_10.setVisible(true);lyr_JalanDroppointBRapelling_11.setVisible(true);
var layersList = [group_OLD,lyr_GoogleSatelliteHybrid_3,lyr_JalanDroppointAkeWelcoming_4,lyr_JURITPLANB_5,lyr_JURITPLANA_6,lyr_ShortcutPanitia_7,lyr_NAVDAR12_8,lyr_JURITEMERGENSI_9,lyr_NAVDAREMERGENSI_10,lyr_JalanDroppointBRapelling_11];
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
lyr_NAVDAR12danJURIT1tracks_0.set('fieldLabels', {});
lyr_JURIT2tracks_1.set('fieldLabels', {});
lyr_JURITEMERGENSItracks_2.set('fieldLabels', {});
lyr_JalanDroppointAkeWelcoming_4.set('fieldLabels', {'name': 'no label', });
lyr_JURITPLANB_5.set('fieldLabels', {'nama': 'no label', });
lyr_JURITPLANA_6.set('fieldLabels', {'nama': 'no label', });
lyr_ShortcutPanitia_7.set('fieldLabels', {'nama_jalan': 'no label', });
lyr_NAVDAR12_8.set('fieldLabels', {'nama': 'no label', });
lyr_JURITEMERGENSI_9.set('fieldLabels', {'nama': 'no label', });
lyr_NAVDAREMERGENSI_10.set('fieldLabels', {'nama': 'header label', });
lyr_JalanDroppointBRapelling_11.set('fieldLabels', {'nama': 'no label', });
lyr_JalanDroppointBRapelling_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});