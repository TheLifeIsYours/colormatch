class CMGiphy {
    constructor() {
        this.GIPHY_API_KEY = "CaSL6msn6ZiI41msBeEsg5n2KgImDh9c";
        this.gifs = [];

        this.gif = class {
            constructor(options) {
                let {_url, _container, _delay, _isDead, _destroyContainer} = options != (null || undefined) ? options : {};

                this.url = _url;
                this.container = _container;
                this.lifetime = _delay;

                this.isDead = _isDead ? true : false;
                this.destroyContainer = _destroyContainer ? true : false;

                this.gif = new Image();

                this.gif.addEventListener('load', () => {
                    this.display();

                    setTimeout(() => {
                        this.isDead = true;
                    }, this.lifetime);
                });

                this.addSrc();
            }


            addSrc() {
                this.gif.src = this.url;
            }


            display() {
                this.container.append(this.gif);
            }

            destroy() {
                this.container.querySelectorAll('img').forEach((img) => {
                    if (img.src == this.url) {
                        this.destroyContainer ? img.parentNode.remove() : img.remove();
                    }
                });
            }
        }
    }

    async spawnGif(options) {

        let url = await this.getGifURL(options);
        let calculateDelay = await this.calculateDelay(url);

        let newGif = new this.gif(_container, url);
        
      	let {container, tags, destroyContainer, fixedDelay, callbacks} = (options != (null || undefined)) ? options : {};

      	newGif.destroyContainer = destroyContainer ?  true : false;
      	newGif.lifetime = fixedDelay || calculateDelay;

        this.gifs.push(newGif);
        this.updateGifs();
    }

    async getGifURL(tag) {
        let response = await this.request(`https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=${this.GIPHY_API_KEY}&limit=5`)
            .then((res) => {
                return JSON.parse(res);
            }).catch((err) => {
                console.error(`Error while fetching Gif: ${err}`);
            });

        return response.data.image_url;
    }

    updateGifs() {
        this.gifs.forEach((gif, index) => {
            if (gif.isDead) {
                gif.destroy();
                this.gifs.splice(index, 1);
            }
        });

        if (this.gifs.length >= 1) {
            setTimeout(() => {
                this.updateGifs();
                console.log("Update GIF");
            }, 2000);
        }
    }

    async calculateDelay(_url) {
        return new Promise(async (resolve, reject) => {
            let data = await this.request(_url, {
                "responseType": "arraybuffer"
            });

            let d = new Uint8Array(data);
            let bin = '';
            let duration = 0;

            for (let i = 0; i < d.length; i++) {
                bin += String.fromCharCode(d[i]);

                // Find a Graphic Control Extension hex(21F904__ ____ __00)
                if (d[i] == 0x21 &&
                    d[i + 1] == 0xF9 &&
                    d[i + 2] == 0x04 &&
                    d[i + 7] == 0x00) {
                    // Swap 5th and 6th bytes to get the delay per frame
                    let delay = (d[i + 5] << 8) || (d[i + 4] & 0xFF);

                    // Should be aware browsers have a minimum frame delay 
                    // e.g. 6ms for IE, 2ms modern browsers (50fps)
                    duration += delay < 2 ? 10 : delay * 10.0;
                }
            }

            return resolve(duration);
        }).catch((err) => {
            console.error(`Error while fetching Gif for duration: ${err}`);
        });
    }

    // XMLHttp Get function
    request(_url, options) {
        return new Promise((resolve, reject) => {
            let http = new XMLHttpRequest();

            http.responseType = options ? options.responseType : "";

            http.onreadystatechange = () => {
                if (http.readyState == 4 && http.status == 200) {
                    return resolve(http.response);
                }

                if (http.status == 404) {
                    return reject(http.status);
                }
            };

            http.open('GET', _url);
            http.send();
        });
    }
}