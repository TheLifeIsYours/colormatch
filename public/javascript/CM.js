/*Start of color match class*/
class ColorMatch {
    constructor(applicationAnchor, alternatives) {
        this.GIPHY_API_KEY = "CaSL6msn6ZiI41msBeEsg5n2KgImDh9c";

        this.applicationAnchor = applicationAnchor;

        this.alternatives = alternatives || 5;

        this.cmElements = [];

        this.headerElementContainer = this.addElement('div', 'headerElementContainer', this.applicationAnchor);
        this.headerElementContainer.setStyle('flex', 'row', 'center', 'alignCenter', 'h6em', 'bgDark0_6');

        this.headerElementTitle = this.addElement('div', 'headerElementTitle', this.headerElementContainer);
        this.headerElementTitle.setStyle('fs3em');
        this.headerElementTitle.element.innerHTML = "Color Match";

        this.gifOverlayElementContainer = this.addElement('div', 'gifOverlayElementContainer', this.applicationAnchor);
        this.gifOverlayElementContainer.setStyle('absolute', 't0em', 'l0em', 'flex', 'column', 'center', 'alignCenter', 'w100pc', 'h100pc', 'bgDark0_8', 'hidden');

        this.gifOverlayElementText = this.addElement('div', 'gifOverlayElementText', this.gifOverlayElementContainer);
        this.gifOverlayElementText.setStyle('fs5em', 'm1em');

        this.gifOverlayElementImageContainer = this.addElement('div', 'gifOverlayElementImageContainer', this.gifOverlayElementContainer);
        this.gifOverlayElementImageContainer.setStyle('flex', 'center', 'w100pc', 'h50pc');

        this.answerElementContainer = this.addElement('div', 'answerElementContainer', this.applicationAnchor);
        this.answerElementContainer.setStyle('flex', 'row', 'center');
        
        this.answerElementColor = this.addElement('div', 'answerElementColor', this.answerElementContainer);
        this.answerElementColor.setStyle('w20em', 'h20em', 'bgLight1');
        
        this.altElementContainer = this.addElement('div', 'alternativeElementsContainer', this.applicationAnchor);
        this.altElementContainer.setStyle('flex', 'row', 'evenly', 'wrap');

        this.statsElementContainer = this.addElement('div', 'statsElementContainer', this.applicationAnchor);
        this.statsElementContainer.setStyle('flex', 'row', 'evenly', 'alignCenter', 'fs2em', 'h5em', 'bgDark0_3');

        this.statusElements = [];

        this.stats = {
            "Guesses": 0,
            "Correct": 0,
            "Wrongs": 0
        };

        this.initialize(this.applicationAnchor);
    }

    initialize() {
        this.newAlternatives();
        this.newStats();
    }

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

    correctAnswer() {
        this.stats.Guesses += 1;
        this.stats.Correct += 1;

        this.getGif("win, correct, best, awesome, yes");
        this.gifOverlayElementText.element.innerHTML = "You guessed correct!";
        this.gifOverlayElementText.setStyle('cGreen');
    }

    wrongAnswer() {
        this.stats.Guesses += 1;
        this.stats.Wrongs += 1;

        this.getGif("wrong, fail, error, no");
        this.gifOverlayElementText.element.innerHTML = "You guessed wrong!";
        this.gifOverlayElementText.setStyle('cRed');
    }

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

    async getGif(tag){
        let response = await this.request(`https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=${this.GIPHY_API_KEY}&limit=5`)
        .then((res) => {
            return JSON.parse(res);
        }).catch((err) => {
            console.error(`Error while fetching Gif: ${err}`);
        });

        this.displayGif(response.data.image_url);
    }

    async displayGif(_url) {
        let _cmElement = this.addElement('img', 'gifOverlayElementImage', this.gifOverlayElementImageContainer);
        _cmElement.setStyle('h100pc', 'max-w75pc');
        _cmElement.element.src = _url;

        this.gifOverlayElementContainer.unsetStyle('hidden');
        
        let delay = await this.calculateDuration(_url);
        console.log(delay);

        setTimeout(() => {
            this.gifOverlayElementContainer.setStyle('hidden');
            this.removeCMElementChildren(this.gifOverlayElementImageContainer);
            this.newColors();
        }, delay);
    }

    /*Calculate gif duration*/
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

    newAlternatives() {
        for (let i = 0; i < this.alternatives; i++) {
            let _cmElement = this.addElement('div', `display${i}`, this.altElementContainer);
            _cmElement.setStyle('flex', 'row', 'w10em', 'h10em', 'm1em', 'pointer', 'transitionAllEase0_3s');
            _cmElement.setColor();
            
            _cmElement.setTriggerEvent('click', (e) => this.guessColor(e));
            _cmElement.setTriggerEvent('mouseover', (e) => this.hoverIn(e));
            _cmElement.setTriggerEvent('mouseout', (e) => this.hoverOut(e));
        }
        
        this.answerElementColor.setColor(this.getRandomElementColor());
    }

    hoverIn(_event){
        this.getCMElement(_event.target).setStyle('scale1_2', 'bSolid', 'bcLight1', 'bw0_2em');
    }

    hoverOut(_event){
        this.getCMElement(_event.target).unsetStyle('scale1_2', 'bSolid', 'bcLight1', 'bw0_2em');
    }

    newStats() {
        Object.keys(this.stats).forEach((key) => {
            let _cmElement = this.addElement('div', `statsElement${key}`, this.statsElementContainer);
            _cmElement.element.setAttribute('data', key);
            _cmElement.element.setAttribute('value', this.stats[key]);
            _cmElement.element.innerHTML = `${key}: ${this.stats[key]}`;

            this.statusElements.push(_cmElement);
        });
    }

    addElement(_type, _id, _anchor) {
        _anchor = _anchor.element || this.applicationAnchor;

        let _cmElement = new CMElement(_type, _id, _anchor);

        this.cmElements.push(_cmElement);
        _cmElement.anchor.append(_cmElement.element);
        
        return _cmElement;
    }

    getCMElement(_element) {
        let res = null;

        this.cmElements.forEach((_cmElement) => {
            if(_cmElement.element.id == _element.id && !res){
                res = _cmElement;
            }
        });

        return res;
    }

    getRandomElementColor() {
        let rnd = Math.floor(Math.random() * this.altElementContainer.element.children.length);
        return this.getCMElement(this.altElementContainer.element.children[rnd]).cmColor;
    }

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

    newColors() {
        this.removeCMElementChildren(this.altElementContainer);
        this.newAlternatives();
    }

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