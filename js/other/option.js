// Создать класс options
// - Он должен содержать свойства: height, width, bg, fontSize, textAlign
// - Он должен содержать метод, создающий новый div на странице, записывающий в него любой текст
//  и при помощи cssText изменять свой стиль из переданных параметров
// - Создать новый объект через класс
// - Вызвать его метод и получить элемент на странице

class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  creAte() {
    let newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.style.cssText = `height:${this.height}px; width:${this.width}px;
     background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
  }
}

const seconOption = new Options(5, 2, "bclack", 12, "left");
seconOption.creAte();
