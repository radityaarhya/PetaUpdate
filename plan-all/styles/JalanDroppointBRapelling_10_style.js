var size = 0;
var placement = 'point';

var style_JalanDroppointBRapelling_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'Arial\', sans-serif";
    var labelFill = "#0091ca";
    var bufferColor = "#ffffff";
    var bufferWidth = 4.0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("nama") !== null) {
        labelText = String(feature.get("nama"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(17,21,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
