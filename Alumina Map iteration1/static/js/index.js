/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
// Themes end


// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_worldHigh;

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Center on the groups by default
chart.homeZoomLevel = 6;
chart.homeGeoPoint = { longitude: 10, latitude: 51 };

// Polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
polygonSeries.nonScalingStroke = true;
polygonSeries.strokeOpacity = 0.5;

// Image series
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
var imageTemplate = imageSeries.mapImages.template;
imageTemplate.propertyFields.longitude = "longitude";
imageTemplate.propertyFields.latitude = "latitude";
imageTemplate.nonScaling = true;

var image = imageTemplate.createChild(am4core.Image);
image.propertyFields.href = "imageURL";
image.width = 50;
image.height = 50;
image.horizontalCenter = "middle";
image.verticalCenter = "middle";

var label = imageTemplate.createChild(am4core.Label);
label.text = "{label}";
label.horizontalCenter = "middle";
label.verticalCenter = "top";
label.dy = 20;

imageSeries.data = [
{
  "latitude": 22.495,
  "longitude": 88.3247,
  "imageURL": "https://svgshare.com/i/ECh.svg",
  "width": 15,
  "height": 15,
  "label": "Deepali Pandey"
},{
  "latitude": 20.2704,
  "longitude": 85.8274,
  "imageURL": "https://svgur.com/i/ECX.svg",
  "width": 15,
  "height": 15,
  "label": "Soham Pathak"
}, {
  "latitude": 30.38,
  "longitude":100.12 ,
  "imageURL": "https://www.amcharts.com/lib/images/weather/animated/thunder.svg",
  "width": 32,
  "height": 32,
  "label": "Soham Pathak : High Radius"
}, {
  "latitude": 52.520007,
  "longitude": 13.404954,
  "imageURL": "https://www.amcharts.com/lib/images/weather/animated/cloudy-day-1.svg",
  "width": 32,
  "height": 32,
  "label": "Berlin: +13C"
}, {
  "latitude": 52.229676,
  "longitude": 21.012229,
  "imageURL": "https://www.amcharts.com/lib/images/weather/animated/day.svg",
  "width": 32,
  "height": 32,
  "label": "Warsaw: +22C"
}, {
  "latitude": 41.872389,
  "longitude": 12.480180,
  "imageURL": "https://www.amcharts.com/lib/images/weather/animated/day.svg",
  "width": 32,
  "height": 32,
  "label": "Rome: +29C"
}, {
  "latitude": 51.507351,
  "longitude": -0.127758,
  "imageURL": "https://www.amcharts.com/lib/images/weather/animated/rainy-7.svg",
  "width": 32,
  "height": 32,
  "label": "London: +10C"
}, {
  "latitude": 59.329323,
  "longitude": 18.068581,
  "imageURL": "https://www.amcharts.com/lib/images/weather/animated/rainy-4.svg",
  "width": 32,
  "height": 32,
  "label": "Stockholm: +8C"
} ];