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
var format_ShortcutPanitia_1 = new ol.format.GeoJSON();
var features_ShortcutPanitia_1 = format_ShortcutPanitia_1.readFeatures(json_ShortcutPanitia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShortcutPanitia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShortcutPanitia_1.addFeatures(features_ShortcutPanitia_1);
var lyr_ShortcutPanitia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ShortcutPanitia_1, 
                style: style_ShortcutPanitia_1,
                interactive: true,
                title: '<img src="styles/legend/ShortcutPanitia_1.png" /> Shortcut Panitia'
            });
var format_NAVDAR12danJURIT1tracks_2 = new ol.format.GeoJSON();
var features_NAVDAR12danJURIT1tracks_2 = format_NAVDAR12danJURIT1tracks_2.readFeatures(json_NAVDAR12danJURIT1tracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVDAR12danJURIT1tracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVDAR12danJURIT1tracks_2.addFeatures(features_NAVDAR12danJURIT1tracks_2);
var lyr_NAVDAR12danJURIT1tracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NAVDAR12danJURIT1tracks_2, 
                style: style_NAVDAR12danJURIT1tracks_2,
                interactive: true,
                title: '<img src="styles/legend/NAVDAR12danJURIT1tracks_2.png" /> NAVDAR 1-2 dan JURIT-1 — tracks'
            });
var format_JURIT2tracks_3 = new ol.format.GeoJSON();
var features_JURIT2tracks_3 = format_JURIT2tracks_3.readFeatures(json_JURIT2tracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURIT2tracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURIT2tracks_3.addFeatures(features_JURIT2tracks_3);
var lyr_JURIT2tracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURIT2tracks_3, 
                style: style_JURIT2tracks_3,
                interactive: true,
                title: '<img src="styles/legend/JURIT2tracks_3.png" /> JURIT-2 — tracks'
            });
var format_JURITEMERGENSItracks_4 = new ol.format.GeoJSON();
var features_JURITEMERGENSItracks_4 = format_JURITEMERGENSItracks_4.readFeatures(json_JURITEMERGENSItracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JURITEMERGENSItracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JURITEMERGENSItracks_4.addFeatures(features_JURITEMERGENSItracks_4);
var lyr_JURITEMERGENSItracks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JURITEMERGENSItracks_4, 
                style: style_JURITEMERGENSItracks_4,
                interactive: true,
                title: '<img src="styles/legend/JURITEMERGENSItracks_4.png" /> JURIT-EMERGENSI — tracks'
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
                title: '<img src="styles/legend/CheckPointNavdar12_5.png" /> CheckPoint Navdar 1&2'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_ShortcutPanitia_1.setVisible(true);lyr_NAVDAR12danJURIT1tracks_2.setVisible(true);lyr_JURIT2tracks_3.setVisible(true);lyr_JURITEMERGENSItracks_4.setVisible(true);lyr_CheckPointNavdar12_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_ShortcutPanitia_1,lyr_NAVDAR12danJURIT1tracks_2,lyr_JURIT2tracks_3,lyr_JURITEMERGENSItracks_4,lyr_CheckPointNavdar12_5];
lyr_ShortcutPanitia_1.set('fieldAliases', {'nama_jalan': 'nama_jalan', });
lyr_NAVDAR12danJURIT1tracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_JURIT2tracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_JURITEMERGENSItracks_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_CheckPointNavdar12_5.set('fieldAliases', {'nama_loc': 'nama_loc', 'bayangan': 'bayangan', 'img': 'img', });
lyr_ShortcutPanitia_1.set('fieldImages', {'nama_jalan': 'TextEdit', });
lyr_NAVDAR12danJURIT1tracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_JURIT2tracks_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_JURITEMERGENSItracks_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_CheckPointNavdar12_5.set('fieldImages', {'nama_loc': 'TextEdit', 'bayangan': 'Hidden', 'img': 'TextEdit', });
lyr_ShortcutPanitia_1.set('fieldLabels', {'nama_jalan': 'no label', });
lyr_NAVDAR12danJURIT1tracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_JURIT2tracks_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'header label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_JURITEMERGENSItracks_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_CheckPointNavdar12_5.set('fieldLabels', {'nama_loc': 'no label', 'img': 'no label', });
lyr_CheckPointNavdar12_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});