/*Start of color match class*/
class ColorMatch {
    constructor(applicationAnchor, alternatives) {
        this.GIPHY_API_KEY = "CaSL6msn6ZiI41msBeEsg5n2KgImDh9c";

        this.applicationAnchor = applicationAnchor;

        this.alternatives = alternatives || 5;

        this.cmElements = [];

        // Header
        this.headerElementContainer = this.addElement('div', 'headerElementContainer', this.applicationAnchor);
        this.headerElementContainer.setStyle('flex', 'row', 'between', 'alignCenter', 'h6em', 'bgDark0_6');

        /* Start Of Burger Menu */
        // Burger Menu
        this.headerElementBurgerMenuIcon = this.addElement('div', 'headerElementBurgerMenu', this.headerElementContainer);
        this.headerElementBurgerMenuIcon.setStyle('flex', 'column', 'evenly', 'alignCenter', 'w2em', 'h2_5em', 'ml2em', 'pointer');
        
        /*  Start Of Burger Menu Icon */
        this.headerElementBurgerMenuIcon_1 = this.addElement('div', '', this.headerElementBurgerMenuIcon);
        this.headerElementBurgerMenuIcon_1.setStyle('w100pc', 'h0_25em', 'bgLight1');

        this.headerElementBurgerMenuIcon_2 = this.addElement('div', '', this.headerElementBurgerMenuIcon);
        this.headerElementBurgerMenuIcon_2.setStyle('w100pc', 'h0_25em', 'bgLight1');
        
        this.headerElementBurgerMenuIcon_3 = this.addElement('div', '', this.headerElementBurgerMenuIcon);
        this.headerElementBurgerMenuIcon_3.setStyle('w100pc', 'h0_25em', 'bgLight1');
        /* End Of Burger Menu Icon */

        // Burger Menu Overlay
        this.burgerMenuOverlay = this.addElement('div', 'burgerMenuOverlay', this.applicationAnchor);
        this.burgerMenuOverlay.setStyle('absolute', 't0em', 'l0em', 'flex', 'column', 'between', 'bgDark0_8', 'w100pc', 'h100pc', 'hidden');

        // Burger Menu Header
        this.burgerMenuHeader = this.addElement('div', 'burgerMenuHeader', this.burgerMenuOverlay);
        this.burgerMenuHeader.setStyle('flex', 'row', 'between', 'alignCenter', 'h6em', 'bgDark0_6');
        
        this.burgerMenuCloseIconContainer = this.addElement('div', 'burgerMenuCloseIcon', this.burgerMenuHeader);
        this.burgerMenuCloseIconContainer.setStyle('flex', 'column', 'evenly', 'alignCenter', 'w2em', 'h2_5em', 'ml2em', 'pointer');
        
        // Burger Close Icon
        this.burgerMenuCloseIconImage = this.addElement('img', '', this.burgerMenuCloseIconContainer);
        this.burgerMenuCloseIconImage.element.src = "public/images/icons/X.png";
        this.burgerMenuCloseIconImage.setStyle('w100pc');
        
        // Burger Menu Title
        this.burgerMenuHeaderTitle = this.addElement('div', 'burgerMenuHeaderTitle', this.burgerMenuHeader);
        this.burgerMenuHeaderTitle.element.innerHTML = "Settings";
        this.burgerMenuHeaderTitle.setStyle('fs3em');

        // Spacing Element
        this.spacingElement = this.addElement('div', 'headerSpacerElement', this.burgerMenuHeader);

        // Burger Menu Row
        this.burgerMenuSettings = this.addElement('div', 'burgerMenuSettings', this.burgerMenuOverlay);
        this.burgerMenuSettings.setStyle('flex', 'column', 'center', 'alignCenter', 'grow');

        this.amountSettings = this.addElement('div', 'amountSettings', this.burgerMenuSettings);
        

        // Burger Menu Icon On Click
        this.headerElementBurgerMenuIcon.setTriggerEvent('click', (_event) => {
            this.headerElementBurgerMenuIcon.setStyle('hidden');
            this.burgerMenuOverlay.unsetStyle('hidden');
        });

        this.burgerMenuCloseIconContainer.setTriggerEvent('click', (_event) => {
            this.headerElementBurgerMenuIcon.unsetStyle('hidden');
            this.burgerMenuOverlay.setStyle('hidden');
        });
        /* End Of Burger Menu */

        // Header Title
        this.headerElementTitle = this.addElement('div', 'headerElementTitle', this.headerElementContainer);
        this.headerElementTitle.element.innerHTML = "Color Match";
        this.headerElementTitle.setStyle('fs3em');
        
        // Spacing Element
        this.spacingElement = this.addElement('div', 'headerSpacerElement', this.headerElementContainer);

        // Gif Overlay Container
        this.gifOverlayElementContainer = this.addElement('div', 'gifOverlayElementContainer', this.applicationAnchor);
        this.gifOverlayElementContainer.setStyle('absolute', 't0em', 'l0em', 'flex', 'column', 'center', 'alignCenter', 'w100pc', 'h100pc', 'bgDark0_8', 'hidden');
        this.gifOverlayElementContainer.setTriggerEvent('click', this.hideGifOverlay());

        // Gif Overlay Text Display 
        this.gifOverlayElementText = this.addElement('div', 'gifOverlayElementText', this.gifOverlayElementContainer);
        this.gifOverlayElementText.setStyle('fs5em', 'm1em', 'textCenter');

        // Gif Overlay Image Display
        this.gifOverlayElementImageContainer = this.addElement('div', 'gifOverlayElementImageContainer', this.gifOverlayElementContainer);
        this.gifOverlayElementImageContainer.setStyle('flex', 'center', 'alignCenter', 'w90pc', 'h50pc');

        // Answer Element Container
        this.answerElementContainer = this.addElement('div', 'answerElementContainer', this.applicationAnchor);
        this.answerElementContainer.setStyle('flex', 'row', 'center', 'h20pc');
        
        // Answer Element
        this.answerElementColor = this.addElement('div', 'answerElementColor', this.answerElementContainer);
        this.answerElementColor.setStyle('w20em', 'h20em', 'bgLight1');
        
        // Alternative Answers Element Container
        this.altElementContainer = this.addElement('div', 'alternativeElementsContainer', this.applicationAnchor);
        this.altElementContainer.setStyle('flex', 'row', 'evenly', 'wrap');

        // Stats Elements Container
        this.statsElementContainer = this.addElement('div', 'statsElementContainer', this.applicationAnchor);
        this.statsElementContainer.setStyle('flex', 'row', 'evenly', 'alignCenter', 'fs2em', 'h5em', 'bgDark0_3');

        // Status Elements Array
        this.statusElements = [];

        // Status Element json data
        this.stats = {
            "Guesses": 0,
            "Correct": 0,
            "Wrong": 0
        };

        this.initialize(this.applicationAnchor);
    }

    // Initialize app on startup
    initialize() {
        this.newAlternatives();
        this.newStats();
    }

    // User Click Answer Alternative handler
    guessColor(_event) {
        let _cmElement = this.getCMElement(_event.target);
        _cmElement.unsetStyle('scale1_2', 'bSolid', 'bcLight1', 'bw0_2em');
        
        if(_cmElement.cmColor == this.answerElementColor.cmColor){
            console.log("Correct guess");
            this.correctAnswer();
        } else {
            console.log("Wrong guess");
            this.wrongAnswer();
        }

        this.updateStatusElements();
    }

    // User Answer Correct handler
    correctAnswer() {
        this.stats.Guesses += 1;
        this.stats.Correct += 1;

        this.getGif("win, correct, best, awesome, yes");
        this.gifOverlayElementText.element.innerHTML = "You guessed correct!";
        this.gifOverlayElementText.setStyle('cGreen');
    }

    // User Answer Wrong handler
    wrongAnswer() {
        this.stats.Guesses += 1;
        this.stats.Wrong += 1;

        this.getGif("wrong, fail, error, no");
        this.gifOverlayElementText.element.innerHTML = "You guessed wrong!";
        this.gifOverlayElementText.setStyle('cRed');
    }

    // XMLHttp Get function
    request(_url, options) {
        console.log(_url);

        return new Promise((resolve, reject) => {
            let http = new XMLHttpRequest();

            http.responseType = options ? options.responseType : null;

            http.onreadystatechange = () => {
                if(http.readyState == 4 && http.status == 200) {
                    return resolve(http.response);
                }

                if(http.status == 404){
                    return reject(http.status);
                }
            };
            
            http.open('GET', _url);
            http.send();
        });
    }

    // Async Get Gif function
    async getGif(tag){
        let response = await this.request(`https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=${this.GIPHY_API_KEY}&limit=5`)
        .then((res) => {
            return JSON.parse(res);
        }).catch((err) => {
            console.error(`Error while fetching Gif: ${err}`);
        });

        this.displayGif(response.data.image_url);
    }

    // Async Display Gif function
    async displayGif(_url) {
        let _cmElement = this.addElement('img', 'gifOverlayElementImage', this.gifOverlayElementImageContainer);
        _cmElement.setStyle('wInherit', 'hInherit', 'max-w100pc', 'max-h100pc');
        _cmElement.element.src = _url;

        this.gifOverlayElementContainer.unsetStyle('hidden');
        
        let delay = await this.calculateDuration(_url);

       this.hideGifOverlay(delay);
    }

    // Hide Gif function
    hideGifOverlay(delay) {
        delay = delay || 0;
        setTimeout(() => {
            this.gifOverlayElementContainer.setStyle('hidden');
            this.removeCMElementChildren(this.gifOverlayElementImageContainer);
            this.newColors();
        }, delay);
    }

    // Calculate Gif Duration
    async calculateDuration(_url) {
        return new Promise((resolve, reject) => {
            this.request(_url, {"responseType": "arraybuffer"})
            .then((data) => {
                let d = new Uint8Array(data);
                let bin = '';
                let duration = 0;
                
                for (var i = 0; i < d.length; i++) {
                    bin += String.fromCharCode( d[i] );
                    
                    // Find a Graphic Control Extension hex(21F904__ ____ __00)
                    if (d[i] == 0x21 
                        && d[i + 1] == 0xF9 
                        && d[i + 2] == 0x04 
                        && d[i + 7] == 0x00) {
                        // Swap 5th and 6th bytes to get the delay per frame
                        var delay = (d[i + 5] << 8) || (d[i + 4] & 0xFF);
                        
                        // Should be aware browsers have a minimum frame delay 
                        // e.g. 6ms for IE, 2ms modern browsers (50fps)
                        duration += delay < 2 ? 10 : delay * 10.0;
                    }
                }

                return resolve(duration);
            }).catch((err) => {
                console.error(`Error while fetching Gif for duration: ${err}`);
            });
        });
    }

    // New Alternatives
    newAlternatives() {
        for (let i = 0; i < this.alternatives; i++) {
            let _cmElement = this.addElement('div', `display${i}`, this.altElementContainer);
            _cmElement.setStyle('flex', 'row', 'w10em', 'h10em', 'm1em', 'pointer', 'transitionAllEase0_3s');
            _cmElement.setColor();
            
            _cmElement.setTriggerEvent('click', (e) => this.guessColor(e));

            // Hover Over Answer Alternative Effect
            _cmElement.setTriggerEvent('mouseover', (_event) => this.getCMElement(_event.target).setStyle('scale1_2', 'bSolid', 'bcLight1', 'bw0_2em'));
            _cmElement.setTriggerEvent('mouseout', (_event) => this.getCMElement(_event.target).unsetStyle('scale1_2', 'bSolid', 'bcLight1', 'bw0_2em'));
        }
        
        this.answerElementColor.setColor(this.getRandomElementColor());
    }

    // Create New Stats based on Stats json data
    newStats() {
        Object.keys(this.stats).forEach((key) => {
            let _cmElement = this.addElement('div', `statsElement${key}`, this.statsElementContainer);
            _cmElement.element.setAttribute('data', key);
            _cmElement.element.setAttribute('value', this.stats[key]);
            _cmElement.element.innerHTML = `${key}: ${this.stats[key]}`;

            this.statusElements.push(_cmElement);
        });
    }

    // Add New Color Match Element 
    addElement(_type, _id, _anchor) {
        _anchor = _anchor.element || this.applicationAnchor;

        let _cmElement = new CMElement(_type, _id, _anchor);

        this.cmElements.push(_cmElement);
        _cmElement.anchor.append(_cmElement.element);
        
        return _cmElement;
    }

    // Get Color Match Element
    getCMElement(_element) {
        let res = null;

        this.cmElements.forEach((_cmElement) => {
            if(_cmElement.element.id == _element.id && !res){
                res = _cmElement;
            }
        });

        return res;
    }

    // Get Random Answer Alternative Element Color
    getRandomElementColor() {
        let rnd = Math.floor(Math.random() * this.altElementContainer.element.children.length);
        return this.getCMElement(this.altElementContainer.element.children[rnd]).cmColor;
    }

    // Update Status Element
    updateStatusElements() {
        Object.keys(this.stats).forEach((key) => {
            this.statusElements.forEach((statusElement) => {
                if(statusElement.element.getAttribute('data') == key){
                    statusElement.element.value = this.stats[key];
                    statusElement.element.innerHTML = `${key}: ${this.stats[key]}`;
                }
            });
        });
    }

    // Make New Alternative Colors
    newColors() {
        this.removeCMElementChildren(this.altElementContainer);
        this.newAlternatives();
    }

    // Remove Color Match Element Children and DOM Elements
    removeCMElementChildren (_cmElementParent) {
        while(_cmElementParent.element.firstChild) {
            let cmElement = this.getCMElement(_cmElementParent.element.firstChild);

            this.cmElements.forEach((_cmElement, index) => {
                if(_cmElement == cmElement){
                    this.cmElements.splice(index, 1);
                }
            });

            _cmElementParent.element.removeChild(_cmElementParent.element.firstChild);
        }
    }

}
/*End of color match class*/