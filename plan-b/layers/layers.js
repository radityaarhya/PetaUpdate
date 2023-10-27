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
var format_ShortcutPanitia_3 = new ol.format.GeoJSON();
var features_ShortcutPanitia_3 = format_ShortcutPanitia_3.readFeatures(json_ShortcutPanitia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShortcutPanitia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShortcutPanitia_3.addFeatures(features_ShortcutPanitia_3);
var lyr_ShortcutPanitia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShortcutPanitia_3, 
                style: style_ShortcutPanitia_3,
                interactive: true,
                title: '<img src="styles/legend/ShortcutPanitia_3.png" /> Shortcut Panitia'
            });
var format_NAVDAR12_4 = new ol.format.GeoJSON();
var features_NAVDAR12_4 = format_NAVDAR12_4.readFeatures(json_NAVDAR12_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVDAR12_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVDAR12_4.addFeatures(features_NAVDAR12_4);
var lyr_NAVDAR12_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAVDAR12_4, 
                style: style_NAVDAR12_4,
                interactive: true,
                title: '<img src="styles/legend/NAVDAR12_4.png" /> NAVDAR 1-2'
            });
var format_CheckPointNavdar12_5 = new ol.format.GeoJSON();
var features_CheckPointNavdar12_5 = format_CheckPointNavdar12_5.readFeatures(json_CheckPointNavdar12_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointNavdar12_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointNavdar12_5.addFeatures(features_CheckPointNavdar12_5);
var lyr_CheckPointNavdar12_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointNavdar12_5, 
                style: style_CheckPointNavdar12_5,
                interactive: true,
                title: '<img src="styles/legend/CheckPointNavdar12_5.png" /> CheckPoint Navdar 1-2'
            });
var format_CheckPointJuritPlanB_6 = new ol.format.GeoJSON();
var features_CheckPointJuritPlanB_6 = format_CheckPointJuritPlanB_6.readFeatures(json_CheckPointJuritPlanB_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointJuritPlanB_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointJuritPlanB_6.addFeatures(features_CheckPointJuritPlanB_6);
var lyr_CheckPointJuritPlanB_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointJuritPlanB_6, 
                style: style_CheckPointJuritPlanB_6,
                interactive: true,
                title: '<img src="styles/legend/CheckPointJuritPlanB_6.png" /> CheckPoint Jurit Plan-B'
            });
var format_DropPointuntukPlannAB_7 = new ol.format.GeoJSON();
var features_DropPointuntukPlannAB_7 = format_DropPointuntukPlannAB_7.readFeatures(json_DropPointuntukPlannAB_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DropPointuntukPlannAB_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DropPointuntukPlannAB_7.addFeatures(features_DropPointuntukPlannAB_7);
var lyr_DropPointuntukPlannAB_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DropPointuntukPlannAB_7, 
                style: style_DropPointuntukPlannAB_7,
                interactive: true,
                title: '<img src="styles/legend/DropPointuntukPlannAB_7.png" /> DropPoint untuk Plann A-B'
            });
var format_ChekPointBasecampPanitia_8 = new ol.format.GeoJSON();
var features_ChekPointBasecampPanitia_8 = format_ChekPointBasecampPanitia_8.readFeatures(json_ChekPointBasecampPanitia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChekPointBasecampPanitia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChekPointBasecampPanitia_8.addFeatures(features_ChekPointBasecampPanitia_8);
var lyr_ChekPointBasecampPanitia_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChekPointBasecampPanitia_8, 
                style: style_ChekPointBasecampPanitia_8,
                interactive: true,
                title: '<img src="styles/legend/ChekPointBasecampPanitia_8.png" /> ChekPoint Basecamp Panitia'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_JalanDroppointAkeWelcoming_1.setVisible(true);lyr_JURITPLANB_2.setVisible(true);lyr_ShortcutPanitia_3.setVisible(true);lyr_NAVDAR12_4.setVisible(true);lyr_CheckPointNavdar12_5.setVisible(true);lyr_CheckPointJuritPlanB_6.setVisible(true);lyr_DropPointuntukPlannAB_7.setVisible(true);lyr_ChekPointBasecampPanitia_8.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_JalanDroppointAkeWelcoming_1,lyr_JURITPLANB_2,lyr_ShortcutPanitia_3,lyr_NAVDAR12_4,lyr_CheckPointNavdar12_5,lyr_CheckPointJuritPlanB_6,lyr_DropPointuntukPlannAB_7,lyr_ChekPointBasecampPanitia_8];
lyr_JalanDroppointAkeWelcoming_1.set('fieldAliases', {'name': 'name', });
lyr_JURITPLANB_2.set('fieldAliases', {'nama': 'nama', });
lyr_ShortcutPanitia_3.set('fieldAliases', {'nama_jalan': 'nama_jalan', });
lyr_NAVDAR12_4.set('fieldAliases', {'nama': 'nama', });
lyr_CheckPointNavdar12_5.set('fieldAliases', {'nama_loc': 'nama_loc', 'img': 'img', 'bayangan': 'bayangan', });
lyr_CheckPointJuritPlanB_6.set('fieldAliases', {'nama_loc': 'nama_loc', 'bayangan': 'bayangan', 'img': 'img', });
lyr_DropPointuntukPlannAB_7.set('fieldAliases', {'img': 'img', 'nama_loc': 'nama_loc', });
lyr_ChekPointBasecampPanitia_8.set('fieldAliases', {'name_loc': 'name_loc', 'link': 'link', });
lyr_JalanDroppointAkeWelcoming_1.set('fieldImages', {'name': 'TextEdit', });
lyr_JURITPLANB_2.set('fieldImages', {'nama': 'TextEdit', });
lyr_ShortcutPanitia_3.set('fieldImages', {'nama_jalan': 'TextEdit', });
lyr_NAVDAR12_4.set('fieldImages', {'nama': 'TextEdit', });
lyr_CheckPointNavdar12_5.set('fieldImages', {'nama_loc': 'TextEdit', 'img': 'TextEdit', 'bayangan': 'TextEdit', });
lyr_CheckPointJuritPlanB_6.set('fieldImages', {'nama_loc': 'TextEdit', 'bayangan': 'TextEdit', 'img': 'TextEdit', });
lyr_DropPointuntukPlannAB_7.set('fieldImages', {'img': 'TextEdit', 'nama_loc': 'TextEdit', });
lyr_ChekPointBasecampPanitia_8.set('fieldImages', {'name_loc': 'TextEdit', 'link': '', });
lyr_JalanDroppointAkeWelcoming_1.set('fieldLabels', {'name': 'no label', });
lyr_JURITPLANB_2.set('fieldLabels', {'nama': 'no label', });
lyr_ShortcutPanitia_3.set('fieldLabels', {'nama_jalan': 'no label', });
lyr_NAVDAR12_4.set('fieldLabels', {'nama': 'no label', });
lyr_CheckPointNavdar12_5.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', 'bayangan': 'no label', });
lyr_CheckPointJuritPlanB_6.set('fieldLabels', {'nama_loc': 'no label', 'bayangan': 'no label', 'img': 'no label', });
lyr_DropPointuntukPlannAB_7.set('fieldLabels', {'img': 'no label', 'nama_loc': 'no label', });
lyr_ChekPointBasecampPanitia_8.set('fieldLabels', {'name_loc': 'no label', 'link': 'no label', });
lyr_ChekPointBasecampPanitia_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});