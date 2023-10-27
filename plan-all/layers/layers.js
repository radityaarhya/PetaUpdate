var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_JalanDroppointAkeWelcoming_1 = new ol.format.GeoJSON();
var features_JalanDroppointAkeWelcoming_1 = format_JalanDroppointAkeWelcoming_1.readFeatures(json_JalanDroppointAkeWelcoming_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDroppointAkeWelcoming_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDroppointAkeWelcoming_1.addFeatures(features_JalanDroppointAkeWelcoming_1);
var lyr_JalanDroppointAkeWelcoming_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanDroppointAkeWelcoming_1, 
                style: style_JalanDroppointAkeWelcoming_1,
                interactive: true,
                title: '<img src="styles/legend/JalanDroppointAkeWelcoming_1.png" /> Jalan Droppoint-A ke Welcoming'
            });
var format_JURITPLANB_2 = new ol.format.GeoJSON();
var features_JURITPLANB_2 = format_JURITPLANB_2.readFeatures(json_JURITPLANB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITPLANB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITPLANB_2.addFeatures(features_JURITPLANB_2);
var lyr_JURITPLANB_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITPLANB_2, 
                style: style_JURITPLANB_2,
                interactive: true,
                title: '<img src="styles/legend/JURITPLANB_2.png" /> JURIT PLAN-B'
            });
var format_JURITPLANA_3 = new ol.format.GeoJSON();
var features_JURITPLANA_3 = format_JURITPLANA_3.readFeatures(json_JURITPLANA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITPLANA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITPLANA_3.addFeatures(features_JURITPLANA_3);
var lyr_JURITPLANA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITPLANA_3, 
                style: style_JURITPLANA_3,
                interactive: true,
                title: '<img src="styles/legend/JURITPLANA_3.png" /> JURIT PLAN-A'
            });
var format_ShortcutPanitia_4 = new ol.format.GeoJSON();
var features_ShortcutPanitia_4 = format_ShortcutPanitia_4.readFeatures(json_ShortcutPanitia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShortcutPanitia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShortcutPanitia_4.addFeatures(features_ShortcutPanitia_4);
var lyr_ShortcutPanitia_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShortcutPanitia_4, 
                style: style_ShortcutPanitia_4,
                interactive: true,
                title: '<img src="styles/legend/ShortcutPanitia_4.png" /> Shortcut Panitia'
            });
var format_NAVDAR12_5 = new ol.format.GeoJSON();
var features_NAVDAR12_5 = format_NAVDAR12_5.readFeatures(json_NAVDAR12_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVDAR12_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVDAR12_5.addFeatures(features_NAVDAR12_5);
var lyr_NAVDAR12_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAVDAR12_5, 
                style: style_NAVDAR12_5,
                interactive: true,
                title: '<img src="styles/legend/NAVDAR12_5.png" /> NAVDAR 1-2'
            });
var format_JURITEMERGENSI_6 = new ol.format.GeoJSON();
var features_JURITEMERGENSI_6 = format_JURITEMERGENSI_6.readFeatures(json_JURITEMERGENSI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITEMERGENSI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITEMERGENSI_6.addFeatures(features_JURITEMERGENSI_6);
var lyr_JURITEMERGENSI_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITEMERGENSI_6, 
                style: style_JURITEMERGENSI_6,
                interactive: true,
                title: '<img src="styles/legend/JURITEMERGENSI_6.png" /> JURIT EMERGENSI'
            });
var format_NAVDAREMERGENSI_7 = new ol.format.GeoJSON();
var features_NAVDAREMERGENSI_7 = format_NAVDAREMERGENSI_7.readFeatures(json_NAVDAREMERGENSI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVDAREMERGENSI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVDAREMERGENSI_7.addFeatures(features_NAVDAREMERGENSI_7);
var lyr_NAVDAREMERGENSI_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAVDAREMERGENSI_7, 
                style: style_NAVDAREMERGENSI_7,
                interactive: true,
                title: '<img src="styles/legend/NAVDAREMERGENSI_7.png" /> NAVDAR EMERGENSI'
            });
var format_JalanDroppointBRapelling_8 = new ol.format.GeoJSON();
var features_JalanDroppointBRapelling_8 = format_JalanDroppointBRapelling_8.readFeatures(json_JalanDroppointBRapelling_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDroppointBRapelling_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDroppointBRapelling_8.addFeatures(features_JalanDroppointBRapelling_8);
var lyr_JalanDroppointBRapelling_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanDroppointBRapelling_8, 
                style: style_JalanDroppointBRapelling_8,
                interactive: true,
                title: '<img src="styles/legend/JalanDroppointBRapelling_8.png" /> Jalan Droppoint-B-Rapelling'
            });
var format_CheckPointJuritEmergensi_9 = new ol.format.GeoJSON();
var features_CheckPointJuritEmergensi_9 = format_CheckPointJuritEmergensi_9.readFeatures(json_CheckPointJuritEmergensi_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointJuritEmergensi_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointJuritEmergensi_9.addFeatures(features_CheckPointJuritEmergensi_9);
var lyr_CheckPointJuritEmergensi_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointJuritEmergensi_9, 
                style: style_CheckPointJuritEmergensi_9,
                interactive: true,
                title: '<img src="styles/legend/CheckPointJuritEmergensi_9.png" /> CheckPoint Jurit Emergensi'
            });
var format_CheckPointNavdarEmergensi_10 = new ol.format.GeoJSON();
var features_CheckPointNavdarEmergensi_10 = format_CheckPointNavdarEmergensi_10.readFeatures(json_CheckPointNavdarEmergensi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointNavdarEmergensi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointNavdarEmergensi_10.addFeatures(features_CheckPointNavdarEmergensi_10);
var lyr_CheckPointNavdarEmergensi_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointNavdarEmergensi_10, 
                style: style_CheckPointNavdarEmergensi_10,
                interactive: true,
                title: '<img src="styles/legend/CheckPointNavdarEmergensi_10.png" /> CheckPoint Navdar Emergensi'
            });
var format_CheckPointNavdar12_11 = new ol.format.GeoJSON();
var features_CheckPointNavdar12_11 = format_CheckPointNavdar12_11.readFeatures(json_CheckPointNavdar12_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointNavdar12_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointNavdar12_11.addFeatures(features_CheckPointNavdar12_11);
var lyr_CheckPointNavdar12_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointNavdar12_11, 
                style: style_CheckPointNavdar12_11,
                interactive: true,
                title: '<img src="styles/legend/CheckPointNavdar12_11.png" /> CheckPoint Navdar 1-2'
            });
var format_CheckPointJuritPlanB_12 = new ol.format.GeoJSON();
var features_CheckPointJuritPlanB_12 = format_CheckPointJuritPlanB_12.readFeatures(json_CheckPointJuritPlanB_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointJuritPlanB_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointJuritPlanB_12.addFeatures(features_CheckPointJuritPlanB_12);
var lyr_CheckPointJuritPlanB_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointJuritPlanB_12, 
                style: style_CheckPointJuritPlanB_12,
                interactive: true,
                title: '<img src="styles/legend/CheckPointJuritPlanB_12.png" /> CheckPoint Jurit Plan-B'
            });
var format_CheckPointJuritPlanA_13 = new ol.format.GeoJSON();
var features_CheckPointJuritPlanA_13 = format_CheckPointJuritPlanA_13.readFeatures(json_CheckPointJuritPlanA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointJuritPlanA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointJuritPlanA_13.addFeatures(features_CheckPointJuritPlanA_13);
var lyr_CheckPointJuritPlanA_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointJuritPlanA_13, 
                style: style_CheckPointJuritPlanA_13,
                interactive: true,
                title: '<img src="styles/legend/CheckPointJuritPlanA_13.png" /> CheckPoint Jurit Plan-A'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_JalanDroppointAkeWelcoming_1.setVisible(true);lyr_JURITPLANB_2.setVisible(true);lyr_JURITPLANA_3.setVisible(true);lyr_ShortcutPanitia_4.setVisible(true);lyr_NAVDAR12_5.setVisible(true);lyr_JURITEMERGENSI_6.setVisible(true);lyr_NAVDAREMERGENSI_7.setVisible(true);lyr_JalanDroppointBRapelling_8.setVisible(true);lyr_CheckPointJuritEmergensi_9.setVisible(true);lyr_CheckPointNavdarEmergensi_10.setVisible(true);lyr_CheckPointNavdar12_11.setVisible(true);lyr_CheckPointJuritPlanB_12.setVisible(true);lyr_CheckPointJuritPlanA_13.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_JalanDroppointAkeWelcoming_1,lyr_JURITPLANB_2,lyr_JURITPLANA_3,lyr_ShortcutPanitia_4,lyr_NAVDAR12_5,lyr_JURITEMERGENSI_6,lyr_NAVDAREMERGENSI_7,lyr_JalanDroppointBRapelling_8,lyr_CheckPointJuritEmergensi_9,lyr_CheckPointNavdarEmergensi_10,lyr_CheckPointNavdar12_11,lyr_CheckPointJuritPlanB_12,lyr_CheckPointJuritPlanA_13];
lyr_JalanDroppointAkeWelcoming_1.set('fieldAliases', {'name': 'name', });
lyr_JURITPLANB_2.set('fieldAliases', {'nama': 'nama', });
lyr_JURITPLANA_3.set('fieldAliases', {'nama': 'nama', });
lyr_ShortcutPanitia_4.set('fieldAliases', {'nama_jalan': 'nama_jalan', });
lyr_NAVDAR12_5.set('fieldAliases', {'nama': 'nama', });
lyr_JURITEMERGENSI_6.set('fieldAliases', {'nama': 'nama', });
lyr_NAVDAREMERGENSI_7.set('fieldAliases', {'nama': 'nama', });
lyr_JalanDroppointBRapelling_8.set('fieldAliases', {'nama': 'nama', });
lyr_CheckPointJuritEmergensi_9.set('fieldAliases', {'nama_loc': 'nama_loc', 'bayangan': 'bayangan', 'img': 'img', 'byngn': 'byngn', });
lyr_CheckPointNavdarEmergensi_10.set('fieldAliases', {'name_loc': 'name_loc', 'bayangan': 'bayangan', });
lyr_CheckPointNavdar12_11.set('fieldAliases', {'nama_loc': 'nama_loc', 'img': 'img', 'bayangan': 'bayangan', });
lyr_CheckPointJuritPlanB_12.set('fieldAliases', {'nama_loc': 'nama_loc', 'bayangan': 'bayangan', 'img': 'img', });
lyr_CheckPointJuritPlanA_13.set('fieldAliases', {'nama_loc': 'nama_loc', 'img': 'img', 'bayangan': 'bayangan', });
lyr_JalanDroppointAkeWelcoming_1.set('fieldImages', {'name': 'TextEdit', });
lyr_JURITPLANB_2.set('fieldImages', {'nama': 'TextEdit', });
lyr_JURITPLANA_3.set('fieldImages', {'nama': 'TextEdit', });
lyr_ShortcutPanitia_4.set('fieldImages', {'nama_jalan': 'TextEdit', });
lyr_NAVDAR12_5.set('fieldImages', {'nama': 'TextEdit', });
lyr_JURITEMERGENSI_6.set('fieldImages', {'nama': 'TextEdit', });
lyr_NAVDAREMERGENSI_7.set('fieldImages', {'nama': 'TextEdit', });
lyr_JalanDroppointBRapelling_8.set('fieldImages', {'nama': 'TextEdit', });
lyr_CheckPointJuritEmergensi_9.set('fieldImages', {'nama_loc': 'TextEdit', 'bayangan': 'Hidden', 'img': 'TextEdit', 'byngn': '', });
lyr_CheckPointNavdarEmergensi_10.set('fieldImages', {'name_loc': 'TextEdit', 'bayangan': 'Hidden', });
lyr_CheckPointNavdar12_11.set('fieldImages', {'nama_loc': 'TextEdit', 'img': 'TextEdit', 'bayangan': 'TextEdit', });
lyr_CheckPointJuritPlanB_12.set('fieldImages', {'nama_loc': 'TextEdit', 'bayangan': 'TextEdit', 'img': 'TextEdit', });
lyr_CheckPointJuritPlanA_13.set('fieldImages', {'nama_loc': 'TextEdit', 'img': 'TextEdit', 'bayangan': 'TextEdit', });
lyr_JalanDroppointAkeWelcoming_1.set('fieldLabels', {'name': 'no label', });
lyr_JURITPLANB_2.set('fieldLabels', {'nama': 'no label', });
lyr_JURITPLANA_3.set('fieldLabels', {'nama': 'no label', });
lyr_ShortcutPanitia_4.set('fieldLabels', {'nama_jalan': 'no label', });
lyr_NAVDAR12_5.set('fieldLabels', {'nama': 'no label', });
lyr_JURITEMERGENSI_6.set('fieldLabels', {'nama': 'no label', });
lyr_NAVDAREMERGENSI_7.set('fieldLabels', {'nama': 'no label', });
lyr_JalanDroppointBRapelling_8.set('fieldLabels', {'nama': 'no label', });
lyr_CheckPointJuritEmergensi_9.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', 'byngn': 'no label', });
lyr_CheckPointNavdarEmergensi_10.set('fieldLabels', {'name_loc': 'no label', });
lyr_CheckPointNavdar12_11.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', 'bayangan': 'no label', });
lyr_CheckPointJuritPlanB_12.set('fieldLabels', {'nama_loc': 'no label', 'bayangan': 'no label', 'img': 'no label', });
lyr_CheckPointJuritPlanA_13.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', 'bayangan': 'no label', });
lyr_CheckPointJuritPlanA_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});