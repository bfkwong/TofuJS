map = {
        "1": 2, 
        "3": 4, 
        "5": {
          "6": 7
        },
        "7": [1,2]
      };

list = [1,2,3,4,5, {"1": 2}]; 

print(map["1"]);
print(map["5"]["6"]);

map["1"] = 10; 
map["5"]["6"] = 11; 

print(map["1"]);
print(map["5"]["6"]);

print(list[1]);
print(list[5]["1"]);

list[1] = 12; 
list[5]["1"] = 15; 

print(list[1]);
print(list[5]["1"]);

print(map["7"][0]);
map["7"][0] = 18; 
print(map["7"][0]);
