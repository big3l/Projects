////////////////////////////////////////////////////

class Rectangle {
    constructor(height, width) {
        this.h = height;
        this.w = width;
    }
    get area() {
        return this.h * this.w;
    }

}
let rectangle2 = new Rectangle(200, 200);

document.write(rectangle2.area);

////////////////////////////////////////////////////

class BaseItem {
    constructor(text) {
        this.t = text;
    }
    drawli() {
        let li = document.createElement("li");
        let textNode = document.createTextNode(this.t);
        li.appendChild(textNode);
        document.getElementById("parent1").appendChild(li);
    }
    drawdiv() {
        let div = document.createElement("div");
        let textNode = document.createTextNode(this.t);
        div.appendChild(textNode);
        document.getElementById("parent2").appendChild(div);
    }
    //setter
    set content(text) {
        this.t = text;
    }
}

class StyledItem extends BaseItem {
    constructor(text, style) {
        super(text);
        this.s = style;
    }
    styleli() {
        let li = document.createElement("li");
        li.setAttribute("style", this.s);
        let textNode = document.createTextNode(this.t);
        li.appendChild(textNode);
        document.getElementById("parent1").appendChild(li);
    }
    stylediv() {
        let div = document.createElement("div");
        div.setAttribute("style", this.s);
        let textNode = document.createTextNode(this.t);
        div.appendChild(textNode);
        document.getElementById("parent2").appendChild(div);
    }
    //getter
    get itemStyle() {
        return this.s;
    }
    set restyle(style) {
        this.s = style;
    }
}

let item1 = new BaseItem("Lorem ipsum, sse repellat, nesciunt inventore quos nemo explicabo cupiditate. Ducimus, dolor.");
item1.drawli();

let style1 = new StyledItem("This item is style1", "color:blue;border:5px solid green;background:pink");
style1.styleli();


let item2 = new BaseItem("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui corporis blanditiis neque optio ad reprehenderit animi nisi vitae expedita doloremque");
item2.drawdiv();
item2.content = "This is the new content from set";
item2.drawdiv();


let style2 = new StyledItem("This item is style2", "color:red; border: 5px dotted orange; background:lightblue");
style2.stylediv();
style2.restyle = "color:yellow; border:7px dashed blue; background:lightgreen";
style2.stylediv();


////////////////////////////////////////////////////