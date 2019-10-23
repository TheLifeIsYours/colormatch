/*Start of color match style class*/
class CMStyles {
    constructor () {
      this.styles = {
        "absolute": {"property": 'position', "attribute": 'absolute'},
        "relative": {"property": 'position', "attribute": 'relative'},

        "hidden": {"property": 'visibility', "attribute": 'hidden'},
        "visible": {"property": 'visibility', "attribute": 'visible'},

        "ofScroll": {"property": 'overflow', "attribute": 'scroll'},
        "ofAuto": {"property": 'overflow', "attribute": 'auto'},
        "ofHidden": {"property": 'overflow', "attribute": 'hidden'},
        "ofX-auto": {"property": 'overflow-y', "attribute": 'auto'},
        "ofX-scroll": {"property": 'overflow-y', "attribute": 'scroll'},
        "ofX-hidden": {"property": 'overflow-y', "attribute": 'hidden'},
        "ofY-auto": {"property": 'overflow-x', "attribute": 'auto'},
        "ofY-scroll": {"property": 'overflow-x', "attribute": 'scroll'},
        "ofY-hidden": {"property": 'overflow-x', "attribute": 'hidden'},

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
        "selectNone": {"property": 'user-select', "attribute": 'none'},
        
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

        "t50pc": {"property": 'top', "attribute": '50%'},

        "l0em": {"property": 'left', "attribute": '0em'},

        "l50pc": {"property": 'left', "attribute": '50%'},

        "translateCenter": {"property": 'transform', "attribute": 'translate(-50%, -50%)'},

        "scale1": {"property": 'transform', "attribute": 'scale(1)'},
        "scale1_05": {"property": 'transform', "attribute": 'scale(1.05)'},
        "scale1_1": {"property": 'transform', "attribute": 'scale(1.1)'},
        "scale1_2": {"property": 'transform', "attribute": 'scale(1.2)'},
        "scale1_5": {"property": 'transform', "attribute": 'scale(1.5)'},
        "scale2": {"property": 'transform', "attribute": 'scale(2)'},

        "wInherit": {"property": 'width', "attribute": 'inherit'},
        "hInherit": {"property": 'height', "attribute": 'inherit'},

        "w0em": {"property": 'width', "attribute": '0em'},
        "w0_25em": {"property": 'width', "attribute": '0.25em'},
        "w0_5em": {"property": 'width', "attribute": '0.5em'},
        "w1em": {"property": 'width', "attribute": '1em'},
        "w1_25em": {"property": 'width', "attribute": '1.25em'},
        "w1_5em": {"property": 'width', "attribute": '1.5em'},
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

        "min-w0em": {"property": 'min-width', "attribute": '0em'},
        "min-w0_25em": {"property": 'min-width', "attribute": '0.25em'},
        "min-w0_5em": {"property": 'min-width', "attribute": '0.5em'},
        "min-w1em": {"property": 'min-width', "attribute": '1em'},
        "min-w1_25em": {"property": 'min-width', "attribute": '1.25em'},
        "min-w1_5em": {"property": 'min-width', "attribute": '1.5em'},
        "min-w2em": {"property": 'min-width', "attribute": '2em'},
        "min-w2_5em": {"property": 'min-width', "attribute": '2.5em'},
        "min-w3em": {"property": 'min-width', "attribute": '3em'},
        "min-w4em": {"property": 'min-width', "attribute": '4em'},
        "min-w5em": {"property": 'min-width', "attribute": '5em'},
        "min-w6em": {"property": 'min-width', "attribute": '6em'},
        "min-w7em": {"property": 'min-width', "attribute": '7em'},
        "min-w8em": {"property": 'min-width', "attribute": '8em'},
        "min-w9em": {"property": 'min-width', "attribute": '9em'},
        "min-w10em": {"property": 'min-width', "attribute": '10em'},
        "min-w20em": {"property": 'min-width', "attribute": '20em'},
        "min-w30em": {"property": 'min-width', "attribute": '30em'},
        "min-w40em": {"property": 'min-width', "attribute": '40em'},

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
  
        "min-h0em": {"property": 'min-height', "attribute": '0em'},
        "min-h0_25em": {"property": 'min-height', "attribute": '0.25em'},
        "min-h0_5em": {"property": 'min-height', "attribute": '0.5em'},
        "min-h1em": {"property": 'min-height', "attribute": '1em'},
        "min-h2em": {"property": 'min-height', "attribute": '2em'},
        "min-h2_5em": {"property": 'min-height', "attribute": '2.5em'},
        "min-h3em": {"property": 'min-height', "attribute": '3em'},
        "min-h4em": {"property": 'min-height', "attribute": '4em'},
        "min-h5em": {"property": 'min-height', "attribute": '5em'},
        "min-h6em": {"property": 'min-height', "attribute": '6em'},
        "min-h7em": {"property": 'min-height', "attribute": '7em'},
        "min-h8em": {"property": 'min-height', "attribute": '8em'},
        "min-h9em": {"property": 'min-height', "attribute": '9em'},
        "min-h10em": {"property": 'min-height', "attribute": '10em'},
        "min-h20em": {"property": 'min-height', "attribute": '20em'},
        "min-h30em": {"property": 'min-height', "attribute": '30em'},
        "min-h40em": {"property": 'min-height', "attribute": '40em'},

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
        "min-h35pc": {"property": 'min-height', "attribute": '35%'},
        "min-h50pc": {"property": 'min-height', "attribute": '50%'},
        "min-h75pc": {"property": 'min-height', "attribute": '75%'},
        "min-h100pc": {"property": 'min-height', "attribute": '100%'},

        "cGreen": {"property": 'color', "attribute": '#0f0'},
        "cRed": {"property": 'color', "attribute": '#f00'},
        "cWhite": {"property": 'color', "attribute": '#fff'},
        "cOrigin": {"property": 'color', "attribute": '#e2e2e2'},
  
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
  
        "bgRed1": {"property": 'background', "attribute": 'rgba(255, 0, 0, 1)'},
        "bgRed0_1": {"property": 'background', "attribute": 'rgba(255, 0, 0, .1)'},
        "bgRed0_2": {"property": 'background', "attribute": 'rgba(255, 0, 0, .2)'},
        "bgRed0_3": {"property": 'background', "attribute": 'rgba(255, 0, 0, .3)'},
        "bgRed0_4": {"property": 'background', "attribute": 'rgba(255, 0, 0, .4)'},
        "bgRed0_5": {"property": 'background', "attribute": 'rgba(255, 0, 0, .5)'},
        "bgRed0_6": {"property": 'background', "attribute": 'rgba(255, 0, 0, .6)'},
        "bgRed0_7": {"property": 'background', "attribute": 'rgba(255, 0, 0, .7)'},
        "bgRed0_8": {"property": 'background', "attribute": 'rgba(255, 0, 0, .8)'},
        "bgRed0_9": {"property": 'background', "attribute": 'rgba(255, 0, 0, .9)'},
        "bgRed0": {"property": 'background', "attribute": 'rgba(255, 0, 0, 0)'},
  
        "bgGreen1": {"property": 'background', "attribute": 'rgba(0, 255, 0, 1)'},
        "bgGreen0_1": {"property": 'background', "attribute": 'rgba(0, 255, 0, .1)'},
        "bgGreen0_2": {"property": 'background', "attribute": 'rgba(0, 255, 0, .2)'},
        "bgGreen0_3": {"property": 'background', "attribute": 'rgba(0, 255, 0, .3)'},
        "bgGreen0_4": {"property": 'background', "attribute": 'rgba(0, 255, 0, .4)'},
        "bgGreen0_5": {"property": 'background', "attribute": 'rgba(0, 255, 0, .5)'},
        "bgGreen0_6": {"property": 'background', "attribute": 'rgba(0, 255, 0, .6)'},
        "bgGreen0_7": {"property": 'background', "attribute": 'rgba(0, 255, 0, .7)'},
        "bgGreen0_8": {"property": 'background', "attribute": 'rgba(0, 255, 0, .8)'},
        "bgGreen0_9": {"property": 'background', "attribute": 'rgba(0, 255, 0, .9)'},
        "bgGreen0": {"property": 'background', "attribute": 'rgba(0, 255, 0, 0)'},
        
        "m0_1em": {"property": 'margin', "attribute": '0.1em'},
        "m0_2em": {"property": 'margin', "attribute": '0.2em'},
        "m0_3em": {"property": 'margin', "attribute": '0.3em'},
        "m0_4em": {"property": 'margin', "attribute": '0.4em'},
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
        
        "p0_1em": {"property": 'padding', "attribute": '0.1em'},
        "p0_2em": {"property": 'padding', "attribute": '0.2em'},
        "p0_25em": {"property": 'padding', "attribute": '0.25em'},
        "p0_3em": {"property": 'padding', "attribute": '0.3em'},
        "p0_5em": {"property": 'padding', "attribute": '0.5em'},
        "p0_6em": {"property": 'padding', "attribute": '0.6em'},
        "p0_7em": {"property": 'padding', "attribute": '0.7em'},
        "p0_8em": {"property": 'padding', "attribute": '0.8em'},
        "p1em": {"property": 'padding', "attribute": '1em'},
        "p1_5em": {"property": 'padding', "attribute": '1.5em'},
        "p2em": {"property": 'padding', "attribute": '2em'},
        "p2_5em": {"property": 'padding', "attribute": '2.5em'},
        "p3em": {"property": 'padding', "attribute": '3em'},
        "p3_5em": {"property": 'padding', "attribute": '3.5em'},
        "p4em": {"property": 'padding', "attribute": '4em'},
        "p4_5em": {"property": 'padding', "attribute": '4.5em'},
        "p5em": {"property": 'padding', "attribute": '5em'},
        "p5_5em": {"property": 'padding', "attribute": '5.5em'},
        
        "pt0em": {"property": 'padding-top', "attribute": '0em'},
        "pt0_1em": {"property": 'padding-top', "attribute": '0.1em'},
        "pt0_2em": {"property": 'padding-top', "attribute": '0.2em'},
        "pt0_25em": {"property": 'padding-top', "attribute": '0.25em'},
        "pt0_3em": {"property": 'padding-top', "attribute": '0.3em'},
        "pt0_5em": {"property": 'padding-top', "attribute": '0.5em'},
        "pt0_6em": {"property": 'padding-top', "attribute": '0.6em'},
        "pt0_7em": {"property": 'padding-top', "attribute": '0.7em'},
        "pt0_8em": {"property": 'padding-top', "attribute": '0.8em'},
        "pt1em": {"property": 'padding-top', "attribute": '1em'},
        "pt1_5em": {"property": 'padding-top', "attribute": '1.5em'},
        "pt2em": {"property": 'padding-top', "attribute": '2em'},
        "pt2_5em": {"property": 'padding-top', "attribute": '2.5em'},
        "pt3em": {"property": 'padding-top', "attribute": '3em'},
        "pt3_5em": {"property": 'padding-top', "attribute": '3.5em'},
        "pt4em": {"property": 'padding-top', "attribute": '4em'},
        "pt4_5em": {"property": 'padding-top', "attribute": '4.5em'},
        "pt5em": {"property": 'padding-top', "attribute": '5em'},
        "pt5_5em": {"property": 'padding-top', "attribute": '5.5em'},

        "pl0em": {"property": 'padding-left', "attribute": '0em'},
        "pl0_1em": {"property": 'padding-left', "attribute": '0.1em'},
        "pl0_2em": {"property": 'padding-left', "attribute": '0.2em'},
        "pl0_25em": {"property": 'padding-left', "attribute": '0.25em'},
        "pl0_3em": {"property": 'padding-left', "attribute": '0.3em'},
        "pl0_5em": {"property": 'padding-left', "attribute": '0.5em'},
        "pl0_6em": {"property": 'padding-left', "attribute": '0.6em'},
        "pl0_7em": {"property": 'padding-left', "attribute": '0.7em'},
        "pl0_8em": {"property": 'padding-left', "attribute": '0.8em'},
        "pl1em": {"property": 'padding-left', "attribute": '1em'},
        "pl1_5em": {"property": 'padding-left', "attribute": '1.5em'},
        "pl2em": {"property": 'padding-left', "attribute": '2em'},
        "pl2_5em": {"property": 'padding-left', "attribute": '2.5em'},
        "pl3em": {"property": 'padding-left', "attribute": '3em'},
        "pl3_5em": {"property": 'padding-left', "attribute": '3.5em'},
        "pl4em": {"property": 'padding-left', "attribute": '4em'},
        "pl4_5em": {"property": 'padding-left', "attribute": '4.5em'},
        "pl5em": {"property": 'padding-left', "attribute": '5em'},
        "pl5_5em": {"property": 'padding-left', "attribute": '5.5em'},

        "pr0em": {"property": 'padding-right', "attribute": '0em'},
        "pr0_1em": {"property": 'padding-right', "attribute": '0.1em'},
        "pr0_2em": {"property": 'padding-right', "attribute": '0.2em'},
        "pr0_25em": {"property": 'padding-right', "attribute": '0.25em'},
        "pr0_3em": {"property": 'padding-right', "attribute": '0.3em'},
        "pr0_5em": {"property": 'padding-right', "attribute": '0.5em'},
        "pr0_6em": {"property": 'padding-right', "attribute": '0.6em'},
        "pr0_7em": {"property": 'padding-right', "attribute": '0.7em'},
        "pr0_8em": {"property": 'padding-right', "attribute": '0.8em'},
        "pr1em": {"property": 'padding-right', "attribute": '1em'},
        "pr1_5em": {"property": 'padding-right', "attribute": '1.5em'},
        "pr2em": {"property": 'padding-right', "attribute": '2em'},
        "pr2_5em": {"property": 'padding-right', "attribute": '2.5em'},
        "pr3em": {"property": 'padding-right', "attribute": '3em'},
        "pr3_5em": {"property": 'padding-right', "attribute": '3.5em'},
        "pr4em": {"property": 'padding-right', "attribute": '4em'},
        "pr4_5em": {"property": 'padding-right', "attribute": '4.5em'},
        "pr5em": {"property": 'padding-right', "attribute": '5em'},
        "pr5_5em": {"property": 'padding-right', "attribute": '5.5em'},

        "pb0em": {"property": 'padding-bottom', "attribute": '0em'},
        "pb0_1em": {"property": 'padding-bottom', "attribute": '0.1em'},
        "pb0_2em": {"property": 'padding-bottom', "attribute": '0.2em'},
        "pb0_25em": {"property": 'padding-bottom', "attribute": '0.25em'},
        "pb0_3em": {"property": 'padding-bottom', "attribute": '0.3em'},
        "pb0_5em": {"property": 'padding-bottom', "attribute": '0.5em'},
        "pb0_6em": {"property": 'padding-bottom', "attribute": '0.6em'},
        "pb0_7em": {"property": 'padding-bottom', "attribute": '0.7em'},
        "pb0_8em": {"property": 'padding-bottom', "attribute": '0.8em'},
        "pb1em": {"property": 'padding-bottom', "attribute": '1em'},
        "pb1_5em": {"property": 'padding-bottom', "attribute": '1.5em'},
        "pb2em": {"property": 'padding-bottom', "attribute": '2em'},
        "pb2_5em": {"property": 'padding-bottom', "attribute": '2.5em'},
        "pb3em": {"property": 'padding-bottom', "attribute": '3em'},
        "pb3_5em": {"property": 'padding-bottom', "attribute": '3.5em'},
        "pb4em": {"property": 'padding-bottom', "attribute": '4em'},
        "pb4_5em": {"property": 'padding-bottom', "attribute": '4.5em'},
        "pb5em": {"property": 'padding-bottom', "attribute": '5em'},
        "pb5_5em": {"property": 'padding-bottom', "attribute": '5.5em'},

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
        "transitionTransformEase0_3s": {"property": 'transition', "attribute": 'transform ease 0.3s, padding ease 0s, margin ease 0s'},
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