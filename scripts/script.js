const regex4HEX = RegExp(/^([0-9A-F]{3}){1,2}$/i);
// const regex4RGB = RegExp(/^([0-9]{3}){3}$/);
const regex4RGB = RegExp(/((^[01][0-9][0-9]|2[0-4][0-9]|25[0-5])[\,]([01][0-9][0-9]|2[0-4][0-9]|25[0-5])[\,]([01][0-9][0-9]|2[0-4][0-9]|25[0-5]))/g);

var hexString = "";
var rgbString  = "";

$(".box").click(function() {
    // console.log(this.classList);
    // $(this).removeAttr('placeholder');
    // console.log($(this).val(""));
    $("input#hex").val("");
    $("input#rgb").val("");

    console.log(this.id);
    // console.log(this.value);
    if( this.id == "hex") {

      hexString = "";
      rgbString  = "";

      $('#'+this.id).keydown(function(event) {
      // console.log(event.key);
        if((event.key).length === 1 ) {

          console.log(this.value+event.key);

          hexString = this.value+event.key;

          if (regex4HEX.test(hexString) == true) {

            if (hexString.length == 3) {
              hexString = sixDigitHEX(hexString);
              console.log(hexString);
            }

            $("body").css("background-color", "#"+hexString);

            rgbString = hexTorgb(hexString);

            console.log("rgbString "+ rgbString);

            // $("input#rgb").attr("value", rgbString);
            $("#rgb").val(rgbString);
          }
          else {
            $("#rgb").val("");
          }

        }

        else {
          $("#rgb").val("");
        }
      });

    }
    if( this.id == "rgb") {
      hexString = "";
      rgbString  = "";

      $('#'+this.id).keydown(function(event) {
      // console.log(event.key);
        if((event.key).length === 1 ) {

          if (($("#rgb").val().length === 3) || ($("input#rgb").val().length === 7)) {
              var temp = $("input#rgb").val();
                 $("input#rgb").val(temp+",");
          }

          console.log(this.value+event.key);

          // if(event.key == "Backspace"){
          //   rgbString = this.value;
          // }
          // else{
          //   rgbString = this.value+event.key;
          //
          // }
          rgbString = this.value+event.key;

          if (regex4RGB.test(rgbString) == true) {

            // if (rgbString.length == 3) {
            //   rgbString = sixDigitHEX(rgbString);
            //   console.log(rgbString);
            // }

            $("body").css("background-color",
                          // "rgb(" + rgbString + ")" );

                          "rgb("+Number(rgbString.slice(0,3))+","
                                +Number(rgbString.slice(4,7))+","
                                +Number(rgbString.slice(8,11))+")" );

            hexString = rgbTohex(rgbString);
            // hexString = parseInt(rgbString.slice(0,2), 16);

            console.log("hexString "+ hexString);

            $("#hex").val(hexString);

          }
          else {
            $("#hex").val("");
          }

        }

        else {
          $("#hex").val("");
        }

      });

    }

});

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbTohex(inputRgb) {
  let r = Number(inputRgb.slice(0,3));
  let g = Number(inputRgb.slice(4,7));
  let b = Number(inputRgb.slice(8,11));
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function hexTorgb(inputHex) {
  var r = parseInt(inputHex.slice(0,2), 16);
  console.log("r " + r);
  var g = parseInt(inputHex.slice(2,4), 16);
  var b = parseInt(inputHex.slice(4,6), 16);
  return (r.toString() + "," + g.toString() + "," + b.toString());
}

// function rgbTohex(inputRgb) {
//   var h = parseInt(inputRgb.slice(0,3), 16);
//   var e = parseInt(inputRgb.slice(3,6), 16);
//   var x = parseInt(inputRgb.slice(6,9), 16);
//   // return (h.toString() + "," + e.toString() + "," + x.toString());
//   return (h.toString() + e.toString() + x.toString());
//
// }

// $("input#rgb").val(rgbString);
// function updatePlaceholder(id, value) {
//   $("#"+id).val(value);
// }

function sixDigitHEX (inputString) {
  return inputString[0].toString() +
         inputString[0].toString() +
         inputString[1].toString() +
         inputString[1].toString() +
         inputString[2].toString() +
         inputString[2].toString();
}

function sixDigitRGB (inputString) {
  return inputString[0].toString() +
         inputString[0].toString() +
         inputString[1].toString() +
         inputString[1].toString() +
         inputString[2].toString() +
         inputString[2].toString();
}



// $("#hex").click(function (){
//   $(document).keypress( function (event) {
//
//     console.log(event.key);
//
//      hexString += event.key.toLowerCase();
//      if(hexString.length == 6) {
//        $("body").css("background-color", "#"+hexString);
//
//
//        var rgbValue = hexToRGB(hexString);
//
//        $("input#rgb").attr("value", rgbValue);
//        console.log(hexString);
//        console.log(rgbValue);
//        hexString = "";
//
//
//      }
//
//
//   })
// });



// function stringValid() {
//   /^#([0-9A-F]{3}){1,2}$/
// }


// function hexToRGB (hexValue) {
//   var R = convertCharToDecimal(hexValue[0])*16 +convertCharToDecimal(hexValue[1]);
//   var G = convertCharToDecimal(hexValue[2])*16 +convertCharToDecimal(hexValue[3]);
//   var B = convertCharToDecimal(hexValue[4])*16 +convertCharToDecimal(hexValue[5]);
//   return ("("+R.toString() +"," + G.toString() +"," + B.toString()+")");
// }
//
// function convertCharToDecimal (char) {
//   switch (char) {
//     case "a":
//       return 10;
//       break;
//
//     case "b":
//       return 11;
//       break;
//
//     case "c":
//       return 12;
//       break;
//
//     case "d":
//       return 13;
//       break;
//
//     case "e":
//       return 14;
//       break;
//
//     case "f":
//       return 16;
//         break;
//
//     default:
//       return Number(char);
//
//   }
// }
