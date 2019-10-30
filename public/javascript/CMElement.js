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

    // Function to set styles based on amount of arguments
    setStyle() {
        this.cmStyles.setStyle(this.cmStyle, Array.from(arguments));
        return this;
    }

    // Function to unset styles based on amount of arguments
    unsetStyle() {
        this.cmStyles.unsetStyle(this.cmStyle, Array.from(arguments));
        return this;
    }

    // Function to set atribute and values
    setAttribute(_name, _values) {
        this.element.setAttribute(_name, Array([_values]));
        return this;
    }

    // Function to set background color
    background(_color) {
        this.cmStyle.background = _color;
        return this;
    }

    // Function to set text color
    color(_color) {
        this.cmStyle.color = _color;
        return this;
    }

    // Function to set transform with rotation
    rotate(_deg) {
        this.cmStyle.transform = `rotate(${_deg}deg)`;
        return this;
    }

    // Function to set inner content of element
    content(_content) {
        this.element.innerHTML = _content;
        return this;
    }

    // Function to append a element to the current cmElement 
    append(_type, _id, _cmMatch) {
        let _cmElement = new CMElement(_type, _id, this.element);

        _cmMatch.cmElements.push(_cmElement);
        _cmElement.anchor.append(_cmElement.element);
        
        return _cmElement;
    }

    // Function to set cmElement color
    setCmColor() {
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

        return this;
    }

    // Function to add event listener to cmElement
    setTriggerEvent(event, callback) {
        this.element.addEventListener(event, callback);
        return this;
    }

    // Function to remove element
    destroy(){
        this.element.remove();
    }
}
/*End of color match element class*/