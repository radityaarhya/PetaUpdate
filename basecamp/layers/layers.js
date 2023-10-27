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
var format_ChekPointBasecampPanitia_1 = new ol.format.GeoJSON();
var features_ChekPointBasecampPanitia_1 = format_ChekPointBasecampPanitia_1.readFeatures(json_ChekPointBasecampPanitia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChekPointBasecampPanitia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChekPointBasecampPanitia_1.addFeatures(features_ChekPointBasecampPanitia_1);
var lyr_ChekPointBasecampPanitia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChekPointBasecampPanitia_1, 
                style: style_ChekPointBasecampPanitia_1,
                interactive: true,
                title: '<img src="styles/legend/ChekPointBasecampPanitia_1.png" /> ChekPoint Basecamp Panitia'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ChekPointBasecampPanitia_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ChekPointBasecampPanitia_1];
lyr_ChekPointBasecampPanitia_1.set('fieldAliases', {'name_loc': 'name_loc', 'link': 'link', });
lyr_ChekPointBasecampPanitia_1.set('fieldImages', {'name_loc': 'TextEdit', 'link': '', });
lyr_ChekPointBasecampPanitia_1.set('fieldLabels', {'name_loc': 'no label', 'link': 'no label', });
lyr_ChekPointBasecampPanitia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});