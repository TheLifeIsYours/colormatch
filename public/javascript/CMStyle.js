/*Start of color match style class*/
class CMStyles {
    constructor () {
      this.styles = {
        "absolute": {"property": 'position', "attribute": 'absolute'},
        "relative": {"property": 'position', "attribute": 'relative'},

        "hidden": {"property": 'visibility', "attribute": 'hidden'},
        "visible": {"property": 'visibility', "attribute": 'visible'},

        "flex": {"property": 'display', "attribute": 'flex'},
        "row": {"property": 'flex-direction', "attribute": 'row'},
        "column": {"property": 'flex-direction', "attribute": 'column'},
        "wrap": {"property": 'flex-wrap', "attribute": 'wrap'},
        "grow": {"property": 'flex-grow', "attribute": '1'},
        "start": {"property": 'justify-content', "attribute": 'start'},
        "center": {"property": 'justify-content', "attribute": 'center'},
        "around": {"property": 'justify-content', "attribute": 'space-around'},
        "evenly": {"property": 'justify-content', "attribute": 'space-evenly'},
        "between": {"property": 'justify-content', "attribute": 'space-between'},
        "alignCenter": {"property": 'align-items', "attribute": 'center'},

        "textCenter": {"property": 'text-align', "attribute": 'center'},
        
        "pointer": {"property": 'cursor', "attribute": 'pointer'},

        "bSolid": {"property": 'border', "attribute": 'solid'},

        "bw0_1em": {"property": 'border-width', "attribute": '0.1em'},
        "bw0_2em": {"property": 'border-width', "attribute": '0.2em'},
        "bw0_3em": {"property": 'border-width', "attribute": '0.3em'},
        "bw0_4em": {"property": 'border-width', "attribute": '0.4em'},
        "bw0_5em": {"property": 'border-width', "attribute": '0.5em'},
        "bw0_6em": {"property": 'border-width', "attribute": '0.6em'},
        "bw0_7em": {"property": 'border-width', "attribute": '0.7em'},
        "bw0_8em": {"property": 'border-width', "attribute": '0.8em'},
        "bw0_9em": {"property": 'border-width', "attribute": '0.9em'},
        "bw1em": {"property": 'border-width', "attribute": '1em'},

        "bcLight1": {"property": 'border-color', "attribute": 'rgba(255,255,255,1)'},
        "bcLight0_1": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.1)'},
        "bcLight0_2": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.2)'},
        "bcLight0_3": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.3)'},
        "bcLight0_4": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.4)'},
        "bcLight0_5": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.5)'},
        "bcLight0_6": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.6)'},
        "bcLight0_7": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.7)'},
        "bcLight0_8": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.8)'},
        "bcLight0_9": {"property": 'border-color', "attribute": 'rgba(255,255,255,0.9)'},
        
        "bcDark1": {"property": 'border-color', "attribute": 'rgba(0,0,0,1)'},
        "bcDark0_2": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.2)'},
        "bcDark0_3": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.3)'},
        "bcDark0_4": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.4)'},
        "bcDark0_1": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.1)'},
        "bcDark0_5": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.5)'},
        "bcDark0_6": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.6)'},
        "bcDark0_7": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.7)'},
        "bcDark0_8": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.8)'},
        "bcDark0_9": {"property": 'border-color', "attribute": 'rgba(0,0,0,0.9)'},

        "t0em": {"property": 'top', "attribute": '0em'},

        "l0em": {"property": 'left', "attribute": '0em'},

        "scale1": {"property": 'transform', "attribute": 'scale(1)'},
        "scale1_2": {"property": 'transform', "attribute": 'scale(1.2)'},
        "scale1_5": {"property": 'transform', "attribute": 'scale(1.5)'},
        "scale2": {"property": 'transform', "attribute": 'scale(2)'},

        "wInherit": {"property": 'width', "attribute": 'inherit'},
        "hInherit": {"property": 'height', "attribute": 'inherit'},

        "w0em": {"property": 'width', "attribute": '0em'},
        "w0_25em": {"property": 'width', "attribute": '0.25em'},
        "w0_5em": {"property": 'width', "attribute": '0.5em'},
        "w1em": {"property": 'width', "attribute": '1em'},
        "w2em": {"property": 'width', "attribute": '2em'},
        "w2_5em": {"property": 'width', "attribute": '2.5em'},
        "w3em": {"property": 'width', "attribute": '3em'},
        "w4em": {"property": 'width', "attribute": '4em'},
        "w5em": {"property": 'width', "attribute": '5em'},
        "w6em": {"property": 'width', "attribute": '6em'},
        "w7em": {"property": 'width', "attribute": '7em'},
        "w8em": {"property": 'width', "attribute": '8em'},
        "w9em": {"property": 'width', "attribute": '9em'},
        "w10em": {"property": 'width', "attribute": '10em'},
        "w20em": {"property": 'width', "attribute": '20em'},
        "w30em": {"property": 'width', "attribute": '30em'},
        "w40em": {"property": 'width', "attribute": '40em'},

        "w25pc": {"property": 'width', "attribute": '20%'},
        "w50pc": {"property": 'width', "attribute": '50%'},
        "w75pc": {"property": 'width', "attribute": '75%'},
        "w90pc": {"property": 'width', "attribute": '90%'},
        "w100pc": {"property": 'width', "attribute": '100%'},

        "max-w25pc": {"property": 'max-width', "attribute": '25%'},
        "max-w50pc": {"property": 'max-width', "attribute": '50%'},
        "max-w75pc": {"property": 'max-width', "attribute": '75%'},
        "max-w100pc": {"property": 'max-width', "attribute": '100%'},

        "min-w25pc": {"property": 'min-width', "attribute": '25%'},
        "min-w30pc": {"property": 'min-width', "attribute": '30%'},
        "min-w50pc": {"property": 'min-width', "attribute": '50%'},
        "min-w75pc": {"property": 'min-width', "attribute": '75%'},
        "min-w100pc": {"property": 'min-width', "attribute": '100%'},
  
        "h0em": {"property": 'height', "attribute": '0em'},
        "h0_25em": {"property": 'height', "attribute": '0.25em'},
        "h0_5em": {"property": 'height', "attribute": '0.5em'},
        "h1em": {"property": 'height', "attribute": '1em'},
        "h2em": {"property": 'height', "attribute": '2em'},
        "h2_5em": {"property": 'height', "attribute": '2.5em'},
        "h3em": {"property": 'height', "attribute": '3em'},
        "h4em": {"property": 'height', "attribute": '4em'},
        "h5em": {"property": 'height', "attribute": '5em'},
        "h6em": {"property": 'height', "attribute": '6em'},
        "h7em": {"property": 'height', "attribute": '7em'},
        "h8em": {"property": 'height', "attribute": '8em'},
        "h9em": {"property": 'height', "attribute": '9em'},
        "h10em": {"property": 'height', "attribute": '10em'},
        "h20em": {"property": 'height', "attribute": '20em'},
        "h30em": {"property": 'height', "attribute": '30em'},
        "h40em": {"property": 'height', "attribute": '40em'},

        "h20pc": {"property": 'height', "attribute": '20%'},
        "h25pc": {"property": 'height', "attribute": '25%'},
        "h50pc": {"property": 'height', "attribute": '50%'},
        "h75pc": {"property": 'height', "attribute": '75%'},
        "h90pc": {"property": 'height', "attribute": '90%'},
        "h100pc": {"property": 'height', "attribute": '100%'},
        

        "max-h25pc": {"property": 'max-height', "attribute": '25%'},
        "max-h50pc": {"property": 'max-height', "attribute": '50%'},
        "max-h75pc": {"property": 'max-height', "attribute": '75%'},
        "max-h100pc": {"property": 'max-height', "attribute": '100%'},

        "min-h20pc": {"property": 'min-height', "attribute": '20%'},
        "min-h25pc": {"property": 'min-height', "attribute": '25%'},
        "min-h30pc": {"property": 'min-height', "attribute": '30%'},
        "min-h50pc": {"property": 'min-height', "attribute": '50%'},
        "min-h75pc": {"property": 'min-height', "attribute": '75%'},
        "min-h100pc": {"property": 'min-height', "attribute": '100%'},

        "cGreen": {"property": 'color', "attribute": '#0f0'},
        "cRed": {"property": 'color', "attribute": '#f00'},
  
        "bgLight1": {"property": 'background', "attribute": 'rgba(255, 255, 255, 1)'},
        "bgLight0_1": {"property": 'background', "attribute": 'rgba(255, 255, 255, .1)'},
        "bgLight0_2": {"property": 'background', "attribute": 'rgba(255, 255, 255, .2)'},
        "bgLight0_3": {"property": 'background', "attribute": 'rgba(255, 255, 255, .3)'},
        "bgLight0_4": {"property": 'background', "attribute": 'rgba(255, 255, 255, .4)'},
        "bgLight0_5": {"property": 'background', "attribute": 'rgba(255, 255, 255, .5)'},
        "bgLight0_6": {"property": 'background', "attribute": 'rgba(255, 255, 255, .6)'},
        "bgLight0_7": {"property": 'background', "attribute": 'rgba(255, 255, 255, .7)'},
        "bgLight0_8": {"property": 'background', "attribute": 'rgba(255, 255, 255, .8)'},
        "bgLight0_9": {"property": 'background', "attribute": 'rgba(255, 255, 255, .9)'},
        "bgLight0": {"property": 'background', "attribute": 'rgba(255, 255, 255, 0)'},
  
        "bgDark1": {"property": 'background', "attribute": 'rgba(0, 0, 0, 1)'},
        "bgDark0_1": {"property": 'background', "attribute": 'rgba(0, 0, 0, .1)'},
        "bgDark0_2": {"property": 'background', "attribute": 'rgba(0, 0, 0, .2)'},
        "bgDark0_3": {"property": 'background', "attribute": 'rgba(0, 0, 0, .3)'},
        "bgDark0_4": {"property": 'background', "attribute": 'rgba(0, 0, 0, .4)'},
        "bgDark0_5": {"property": 'background', "attribute": 'rgba(0, 0, 0, .5)'},
        "bgDark0_6": {"property": 'background', "attribute": 'rgba(0, 0, 0, .6)'},
        "bgDark0_7": {"property": 'background', "attribute": 'rgba(0, 0, 0, .7)'},
        "bgDark0_8": {"property": 'background', "attribute": 'rgba(0, 0, 0, .8)'},
        "bgDark0_9": {"property": 'background', "attribute": 'rgba(0, 0, 0, .9)'},
        "bgDark0": {"property": 'background', "attribute": 'rgba(0, 0, 0, 0)'},
        
        "m0_5em": {"property": 'margin', "attribute": '0.5em'},
        "m1em": {"property": 'margin', "attribute": '1em'},
        "m1_5em": {"property": 'margin', "attribute": '1.5em'},
        "m2em": {"property": 'margin', "attribute": '2em'},
        "m2_5em": {"property": 'margin', "attribute": '2.5em'},
        "m3em": {"property": 'margin', "attribute": '3em'},
        "m3_5em": {"property": 'margin', "attribute": '3.5em'},
        "m4em": {"property": 'margin', "attribute": '4em'},
        "m4_5em": {"property": 'margin', "attribute": '4.5em'},
        "m5em": {"property": 'margin', "attribute": '5em'},
        "m5_5em": {"property": 'margin', "attribute": '5.5em'},
        
        "ml0_5em": {"property": 'margin-left', "attribute": '0.5em'},
        "ml1em": {"property": 'margin-left', "attribute": '1em'},
        "ml1_5em": {"property": 'margin-left', "attribute": '1.5em'},
        "ml2em": {"property": 'margin-left', "attribute": '2em'},
        "ml2_5em": {"property": 'margin-left', "attribute": '2.5em'},
        "ml3em": {"property": 'margin-left', "attribute": '3em'},
        "ml3_5em": {"property": 'margin-left', "attribute": '3.5em'},
        "ml4em": {"property": 'margin-left', "attribute": '4em'},
        "ml4_5em": {"property": 'margin-left', "attribute": '4.5em'},
        "ml5em": {"property": 'margin-left', "attribute": '5em'},
        "ml5_5em": {"property": 'margin-left', "attribute": '5.5em'},
        
        "mr0_5em": {"property": 'margin-right', "attribute": '0.5em'},
        "mr1em": {"property": 'margin-right', "attribute": '1em'},
        "mr1_5em": {"property": 'margin-right', "attribute": '1.5em'},
        "mr2em": {"property": 'margin-right', "attribute": '2em'},
        "mr2_5em": {"property": 'margin-right', "attribute": '2.5em'},
        "mr3em": {"property": 'margin-right', "attribute": '3em'},
        "mr3_5em": {"property": 'margin-right', "attribute": '3.5em'},
        "mr4em": {"property": 'margin-right', "attribute": '4em'},
        "mr4_5em": {"property": 'margin-right', "attribute": '4.5em'},
        "mr5em": {"property": 'margin-right', "attribute": '5em'},
        "mr5_5em": {"property": 'margin-right', "attribute": '5.5em'},

        "fs1em": {"property": 'font-size', "attribute": '1em'},
        "fs1_1em": {"property": 'font-size', "attribute": '1.1em'},
        "fs1_2em": {"property": 'font-size', "attribute": '1.2em'},
        "fs1_3em": {"property": 'font-size', "attribute": '1.3em'},
        "fs1_4em": {"property": 'font-size', "attribute": '1.4em'},
        "fs1_5em": {"property": 'font-size', "attribute": '1.5em'},
        "fs1_6em": {"property": 'font-size', "attribute": '1.6em'},
        "fs1_7em": {"property": 'font-size', "attribute": '1.7em'},
        "fs1_8em": {"property": 'font-size', "attribute": '1.8em'},
        "fs1_9em": {"property": 'font-size', "attribute": '1.9em'},
        "fs2em": {"property": 'font-size', "attribute": '2em'},
        "fs3em": {"property": 'font-size', "attribute": '3em'},
        "fs4em": {"property": 'font-size', "attribute": '4em'},
        "fs5em": {"property": 'font-size', "attribute": '5em'},
        "fs6em": {"property": 'font-size', "attribute": '6em'},
        "fs7em": {"property": 'font-size', "attribute": '7em'},
        "fs8em": {"property": 'font-size', "attribute": '8em'},
        "fs9em": {"property": 'font-size', "attribute": '9em'},
        "fs10em": {"property": 'font-size', "attribute": '10em'},

        "transitionAllEase0_3s": {"property": 'transition', "attribute": 'all ease 0.3s'},
      };
    }
    
    setStyle(_cmeStyle, _styles, _attribute) {
        if(Array.isArray(_styles)){
            _styles.forEach((_style) => {
                _style = this.styles[_style];
                _cmeStyle[_style.property] = _style.attribute;
            });
        } else {
            _cmeStyle[_styles] = _attribute;
        }
    }

    unsetStyle(_cmeStyle, _styles) {
        if(Array.isArray(_styles)){
            _styles.forEach((_style) => {
                _style = this.styles[_style];
                _cmeStyle[_style.property] = "";
            });
        } else {
            _cmeStyle[_styles] = "";
        }
    }
  }
  /*End of color match style class*/