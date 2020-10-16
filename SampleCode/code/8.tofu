blueprint for Cat {
    name;
    gender; 
    weight;
    age;
    breed;
    spayed;
    other;
}

cat = make Cat;
cat.name = "Tofu";
cat.gender = "female";
cat.weight = 10;
cat.age = 1; 
cat.breed = "Domestic Shorthair";
cat.spayed = true;

print(cat.name);
print(cat.gender);
print(cat.weight);
print(cat.age);
print(cat.breed);
print(cat.spayed);
print(cat.other);