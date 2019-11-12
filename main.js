var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 3;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Purple"] = 4] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
