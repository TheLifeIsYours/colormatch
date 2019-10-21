/*Start of color match element class*/
class CMElement {
    constructor(type, id, anchor) {
        this.cmStyles = new CMStyles();

        this.anchor = anchor;
        this.element = document.createElement(type);
        this.element.id = id;
        
        this.cmStyle = this.element.style;

        this.cmColor = this.cmStyle.background;

        this.cmSize = new cmVect2();
        this.cmWidth = this.cmStyle.width;
        this.cmHeight = this.cmStyle.height;

        this.cmPos = new cmVect2();
        this.cmLeft = this.cmStyle.left;
        this.cmTop = this.cmStyle.top;
    }

    setStyle() {
        this.cmStyles.setStyle(this.cmStyle, Array.from(arguments));
    }

    unsetStyle() {
        this.cmStyles.unsetStyle(this.cmStyle, Array.from(arguments));
    }

    setColor() {
        //rgba(255, 255, 255)
        //255, 255, 255
        let _color = null;

        if(arguments.length == 3 || arguments.length == 0) {
            let r = arguments[0] || Math.floor(Math.random() * 255);
            let g = arguments[1] || Math.floor(Math.random() * 255);
            let b = arguments[2] || Math.floor(Math.random() * 255);

            _color = `rgb(${r}, ${g}, ${b})`;
        } else {
            _color = arguments[0];
        }
        
        this.cmStyles.setStyle(this.cmStyle, 'background', _color);
        this.cmColor = _color;
    }

    setPosition(_cmVect2) {
        this.cmLeft = _cmVect2.x;
        this.cmRight = _cmVect2.y;
    }

    setSize(_cmVect2) {
        this.cmWidth = _cmVect2.x;
        this.cmHeight = _cmVect2.y;
    }

    setTriggerEvent(event, callback) {
        this.element.addEventListener(event, callback);
    }

    callback_test() {
        console.log(this);
    }

    destroy(){
        this.element.remove();
    }
}
/*End of color match element class*/