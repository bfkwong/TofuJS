blueprint for Car {
    color = "red";

    changeColor(newColor) = color = newColor;
    printColor() = print(color);
}

x = make Car;
x.printColor();
x.changeColor("blue");
x.printColor();