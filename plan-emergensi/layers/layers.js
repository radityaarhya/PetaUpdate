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
var format_JURITEMERGENSI_1 = new ol.format.GeoJSON();
var features_JURITEMERGENSI_1 = format_JURITEMERGENSI_1.readFeatures(json_JURITEMERGENSI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITEMERGENSI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITEMERGENSI_1.addFeatures(features_JURITEMERGENSI_1);
var lyr_JURITEMERGENSI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITEMERGENSI_1, 
                style: style_JURITEMERGENSI_1,
                interactive: true,
                title: '<img src="styles/legend/JURITEMERGENSI_1.png" /> JURIT EMERGENSI'
            });
var format_NAVDAREMERGENSI_2 = new ol.format.GeoJSON();
var features_NAVDAREMERGENSI_2 = format_NAVDAREMERGENSI_2.readFeatures(json_NAVDAREMERGENSI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVDAREMERGENSI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVDAREMERGENSI_2.addFeatures(features_NAVDAREMERGENSI_2);
var lyr_NAVDAREMERGENSI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAVDAREMERGENSI_2, 
                style: style_NAVDAREMERGENSI_2,
                interactive: true,
                title: '<img src="styles/legend/NAVDAREMERGENSI_2.png" /> NAVDAR EMERGENSI'
            });
var format_JalanDroppointBRapelling_3 = new ol.format.GeoJSON();
var features_JalanDroppointBRapelling_3 = format_JalanDroppointBRapelling_3.readFeatures(json_JalanDroppointBRapelling_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDroppointBRapelling_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDroppointBRapelling_3.addFeatures(features_JalanDroppointBRapelling_3);
var lyr_JalanDroppointBRapelling_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanDroppointBRapelling_3, 
                style: style_JalanDroppointBRapelling_3,
                interactive: true,
                title: '<img src="styles/legend/JalanDroppointBRapelling_3.png" /> Jalan Droppoint-B-Rapelling'
            });
var format_CheckPointJuritEmergensi_4 = new ol.format.GeoJSON();
var features_CheckPointJuritEmergensi_4 = format_CheckPointJuritEmergensi_4.readFeatures(json_CheckPointJuritEmergensi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointJuritEmergensi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointJuritEmergensi_4.addFeatures(features_CheckPointJuritEmergensi_4);
var lyr_CheckPointJuritEmergensi_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointJuritEmergensi_4, 
                style: style_CheckPointJuritEmergensi_4,
                interactive: true,
                title: '<img src="styles/legend/CheckPointJuritEmergensi_4.png" /> CheckPoint Jurit Emergensi'
            });
var format_CheckPointNavdarEmergensi_5 = new ol.format.GeoJSON();
var features_CheckPointNavdarEmergensi_5 = format_CheckPointNavdarEmergensi_5.readFeatures(json_CheckPointNavdarEmergensi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CheckPointNavdarEmergensi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CheckPointNavdarEmergensi_5.addFeatures(features_CheckPointNavdarEmergensi_5);
var lyr_CheckPointNavdarEmergensi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CheckPointNavdarEmergensi_5, 
                style: style_CheckPointNavdarEmergensi_5,
                interactive: true,
                title: '<img src="styles/legend/CheckPointNavdarEmergensi_5.png" /> CheckPoint Navdar Emergensi'
            });
var format_DropPointuntukPlanEmergensi_6 = new ol.format.GeoJSON();
var features_DropPointuntukPlanEmergensi_6 = format_DropPointuntukPlanEmergensi_6.readFeatures(json_DropPointuntukPlanEmergensi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DropPointuntukPlanEmergensi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DropPointuntukPlanEmergensi_6.addFeatures(features_DropPointuntukPlanEmergensi_6);
var lyr_DropPointuntukPlanEmergensi_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DropPointuntukPlanEmergensi_6, 
                style: style_DropPointuntukPlanEmergensi_6,
                interactive: true,
                title: '<img src="styles/legend/DropPointuntukPlanEmergensi_6.png" /> DropPoint untuk Plan Emergensi'
            });
var format_ChekPointBasecampPanitia_7 = new ol.format.GeoJSON();
var features_ChekPointBasecampPanitia_7 = format_ChekPointBasecampPanitia_7.readFeatures(json_ChekPointBasecampPanitia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChekPointBasecampPanitia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChekPointBasecampPanitia_7.addFeatures(features_ChekPointBasecampPanitia_7);
var lyr_ChekPointBasecampPanitia_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChekPointBasecampPanitia_7, 
                style: style_ChekPointBasecampPanitia_7,
                interactive: true,
                title: '<img src="styles/legend/ChekPointBasecampPanitia_7.png" /> ChekPoint Basecamp Panitia'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_JURITEMERGENSI_1.setVisible(true);lyr_NAVDAREMERGENSI_2.setVisible(true);lyr_JalanDroppointBRapelling_3.setVisible(true);lyr_CheckPointJuritEmergensi_4.setVisible(true);lyr_CheckPointNavdarEmergensi_5.setVisible(true);lyr_DropPointuntukPlanEmergensi_6.setVisible(true);lyr_ChekPointBasecampPanitia_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_JURITEMERGENSI_1,lyr_NAVDAREMERGENSI_2,lyr_JalanDroppointBRapelling_3,lyr_CheckPointJuritEmergensi_4,lyr_CheckPointNavdarEmergensi_5,lyr_DropPointuntukPlanEmergensi_6,lyr_ChekPointBasecampPanitia_7];
lyr_JURITEMERGENSI_1.set('fieldAliases', {'nama': 'nama', });
lyr_NAVDAREMERGENSI_2.set('fieldAliases', {'nama': 'nama', });
lyr_JalanDroppointBRapelling_3.set('fieldAliases', {'nama': 'nama', });
lyr_CheckPointJuritEmergensi_4.set('fieldAliases', {'nama_loc': 'nama_loc', 'bayangan': 'bayangan', 'img': 'img', 'byngn': 'byngn', });
lyr_CheckPointNavdarEmergensi_5.set('fieldAliases', {'name_loc': 'name_loc', 'bayangan': 'bayangan', });
lyr_DropPointuntukPlanEmergensi_6.set('fieldAliases', {'nama_loc': 'nama_loc', 'img': 'img', });
lyr_ChekPointBasecampPanitia_7.set('fieldAliases', {'name_loc': 'name_loc', 'link': 'link', });
lyr_JURITEMERGENSI_1.set('fieldImages', {'nama': 'TextEdit', });
lyr_NAVDAREMERGENSI_2.set('fieldImages', {'nama': 'TextEdit', });
lyr_JalanDroppointBRapelling_3.set('fieldImages', {'nama': 'TextEdit', });
lyr_CheckPointJuritEmergensi_4.set('fieldImages', {'nama_loc': 'TextEdit', 'bayangan': 'Hidden', 'img': 'TextEdit', 'byngn': '', });
lyr_CheckPointNavdarEmergensi_5.set('fieldImages', {'name_loc': 'TextEdit', 'bayangan': 'Hidden', });
lyr_DropPointuntukPlanEmergensi_6.set('fieldImages', {'nama_loc': 'TextEdit', 'img': 'TextEdit', });
lyr_ChekPointBasecampPanitia_7.set('fieldImages', {'name_loc': 'TextEdit', 'link': '', });
lyr_JURITEMERGENSI_1.set('fieldLabels', {'nama': 'no label', });
lyr_NAVDAREMERGENSI_2.set('fieldLabels', {'nama': 'no label', });
lyr_JalanDroppointBRapelling_3.set('fieldLabels', {'nama': 'no label', });
lyr_CheckPointJuritEmergensi_4.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', 'byngn': 'no label', });
lyr_CheckPointNavdarEmergensi_5.set('fieldLabels', {'name_loc': 'no label', });
lyr_DropPointuntukPlanEmergensi_6.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', });
lyr_ChekPointBasecampPanitia_7.set('fieldLabels', {'name_loc': 'no label', 'link': 'no label', });
lyr_ChekPointBasecampPanitia_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});