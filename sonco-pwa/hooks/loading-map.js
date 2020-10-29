{
  "--loading-map": component => {
    setTimeout(() => {
      var $ts = jQuery.noConflict();
  
      $ts(document).ready(function() {
        $ts(function() {
            $ts('#soncoMap').vectorMap({
                map: 'us_lcc',
                zoomButtons: false,
                showTooltip: false,
                backgroundColor: '#fafafa',
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                zoomOnScroll: false,
                regionStyle: {
                    initial: {
                        fill: '#898989',
                        "fill-opacity": 1,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": 1,
                        cursor: 'default'
                    },
                    selected: {
                        fill: 'yellow',
                        "fill-opacity": 0.8
                    },
                    selectedHover: {}
                },
                markerStyle: {
                    initial: {
                        fill: '#C2363E',
                        stroke: 'transparent',
                        r: 8
                    },
                    hover: {
                        fill: '#fc3b46',
                        stroke: 'transparent',
                        cursor: 'pointer',
                    }
                },
                markerLabelStyle: {
                    initial: {
                        'font-family': 'Verdana',
                        'font-size': '20',
                        cursor: 'default',
                        fill: 'transparent'
                    },
                    hover: {
                        cursor: 'pointer'
                    }
                },
                onRegionClick: function(e, code) {
                    e.preventDefault();
                },
                onRegionTipShow: function(e, label, code) {
                    e.preventDefault();
                },
                onRegionSelected: function(e, code, isSelected, selectedRegions) {
                    e.preventDefault();
                },
                markers: [{
                    latLng: [41.7, -71.41],
                    name: 'Warwick, RI',
                }, {
                    latLng: [35.26, -81.19],
                    name: 'Gastonia, NC'
                }, {
                    latLng: [33.89, -118.34],
                    name: 'Rancho Domingues, CA'
                }, {
                    latLng: [41.88, -87.63],
                    name: 'Chicago, IL'
                }, {
                    latLng: [41.1, -74.85],
                    name: 'Bristol, PA'
                }, {
                    latLng: [27.95, -82.46],
                    name: 'Tampa, FL'
                }, {
                    latLng: [29.76, -95.37],
                    name: 'Houston, TX'
                }, {
                    latLng: [39.77, -86.16],
                    name: 'Indianapolis, IN'
                }, {
                    latLng: [39.74, -75.54],
                    name: 'Wilmington, DE'
                }, {
                    latLng: [39.14, -78.20],
                    name: 'Washington DC'
                }]
            });
        });

        $ts('body').on('click touchstart', '#soncoMap .jvectormap-element', function() {
          var thisIndex = $ts(this).attr('data-index');
          var texto = document.getElementById('sc-washigton-dc');
          switch (thisIndex) {
            case "0":
              texto.innerHTML = '<span class="output_title">Rhode Island</span>450 Pavilion Ave.<br />Warwick, RI 0288';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDawaiS7WIYV1SuptzAo8jf3yHjOKAjKDI&q=450+Pavilion+Ave,Warwick+RI');
              break;
            case "1":
              texto.innerHTML = '<span class="output_title">North Carolina</span>712 W Airline Ave<br />Gastonia, NC 19007';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDawaiS7WIYV1SuptzAo8jf3yHjOKAjKDI&q=712+W+Airline+Ave,Gastonia+NC');
              break;
            case "2":
              texto.innerHTML = '<span class="output_title">California</span>18300 S. Wilmington Avenue, Suite 100<br />Rancho Dominguez, CA 90220';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.9387877198465!2d-118.23685108478986!3d33.86546838065716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cb34a94923bd%3A0x1341d2fa20c8b200!2s18300+S+Wilmington+Ave+%23100%2C+Compton%2C+CA+90220%2C+EUA!5e0!3m2!1spt-BR!2sbr!4v1535400182963');
              break;
            case "3":
              texto.innerHTML = '<span class="output_title">Illinois</span>1636 Summer Street<br />Chicago, IL 46327';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.3815160886484!2d-87.49173468456745!3d41.60426097924488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8811de5aae336453%3A0x9009148889ce26b2!2s1636+Summer+St%2C+Hammond%2C+IN+46320%2C+EUA!5e0!3m2!1spt-BR!2sbr!4v1535400336266');
              break;
            case "4":
              texto.innerHTML = '<span class="output_title">Pennsylvania</span>805 N. Wilson Ave - Suite 206<br />Bristol, PA 19007';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDawaiS7WIYV1SuptzAo8jf3yHjOKAjKDI&q=805+N.+Wilson+Ave+Suite+206,Bristol+PA');
              break;
            case "5":
              texto.innerHTML = '<span class="output_title">Florida</span>8147 Eagle Palm Drive<br />Tampa, FL 19007';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3526.6401596989763!2d-82.3672319!3d27.8823221!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2d03e6efca7b3%3A0xec72f67f1db2b05!2sSonco+Crowd+%26+Traffic+Control!5e0!3m2!1spt-BR!2sbr!4v1535400413023');
              break;
            case "6":
              texto.innerHTML = '<span class="output_title">Texas</span>3030 Greens RD<br />Houston, TX 77032';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3457.0337822658717!2d-95.3428032!3d29.9497069!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b69adea38f47%3A0x9e52381850ed4f3a!2sSonco+Crowd+%26+Traffic+Control!5e0!3m2!1spt-BR!2sbr!4v1535400463587');
              break;
            case "7":
              texto.innerHTML = '<span class="output_title">Indianapolis</span>2855 N. Franklin Rd<br />Indianapolis, IN 46219';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.911572909767!2d-86.02682008462247!3d39.80897527944042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4ec7a048ed21%3A0x5cd723f40bc82d3a!2s2855+N+Franklin+Rd%2C+Indianapolis%2C+IN+46219%2C+EUA!5e0!3m2!1spt-BR!2sbr!4v1535400510212');
              break;
            case "8":
              texto.innerHTML = '<span class="output_title">Delaware</span>1300 Vandever Ave<br />Wilmington, DE 19802';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.7367656157394!2d-75.53302338462439!3d39.745563479448755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd357737f22b%3A0x1fa7f2c691b39edc!2s1300+Vandever+Ave%2C+Wilmington%2C+DE+19802%2C+EUA!5e0!3m2!1spt-BR!2sbr!4v1535400558552');
              break;
            case "9":
              texto.innerHTML = '<span class="output_title">Washington DC</span>6500 Ammendale RD<br />Beltsville, MD 20705';
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDawaiS7WIYV1SuptzAo8jf3yHjOKAjKDI&q=6500+Ammendale+RD');
              break;
            default:
              texto.innerHTML = '<span class="output_title">Washington DC</span>6500 Ammendale RD<br />Beltsville, MD 20705' ;
              $ts('#signzilla-location-txt').css('display', 'block');
              $ts("#location_googlemaps").attr('src', 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDawaiS7WIYV1SuptzAo8jf3yHjOKAjKDI&q=6500+Ammendale+RD');
              break;
            }
          });
        });
      }, 1100)
  }
}