s = [1, 2, 3, 4, 5];

for each item in s {
  print(item);
}

for each item in s {
  if (item > 3) is true then {
    print(100);
  } or else {
    print(item);
  }
}
