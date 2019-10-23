/*Start of color match element class*/
class CMElement {
    constructor(type, id, anchor) {
        this.cmStyles = new CMStyles();

        this.anchor = anchor;
        this.element = document.createElement(type);
        this.element.id = id;
        
        this.cmStyle = this.element.style;

        this.cmColor = this.cmStyle.background;
    }

    setStyle() {
        this.cmStyles.setStyle(this.cmStyle, Array.from(arguments));
        return this;
    }

    unsetStyle() {
        this.cmStyles.unsetStyle(this.cmStyle, Array.from(arguments));
        return this;
    }

    setAttribute(_name, _value) {
        this.element.setAttribute(_name, Array([_value]));
        return this;
    }

    background(_color) {
        this.cmStyle.background = _color;
        return this;
    }

    color(_color) {
        this.cmStyle.color = _color;
        return this;
    }

    rotate(_deg) {
        this.cmStyle.transform = `rotate(${_deg}deg)`;
        return this;
    }

    content(_content) {
        this.element.innerHTML = _content;
        return this;
    }

    append(_type, _id, _cmMatch) {
        let _cmElement = new CMElement(_type, _id, this.element);

        _cmMatch.cmElements.push(_cmElement);
        _cmElement.anchor.append(_cmElement.element);
        
        return _cmElement;
    }

    setCmColor() {
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

    setTriggerEvent(event, callback) {
        this.element.addEventListener(event, callback);
    }

    destroy(){
        this.element.remove();
    }
}
/*End of color match element class*/