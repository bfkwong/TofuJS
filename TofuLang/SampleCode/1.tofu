"fibonacci sequence";

x = 0;
y = 1;
i = 0;

print(x);
print(y);
while (i < 12) is true then {
    temp = y;
    y = x + y;
    x = temp;
    print(y);
    i = i + 1;
}