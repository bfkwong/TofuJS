blueprint for Person {
    name;
    gender;
    age;
    occupation;

    setName(newName) = name = newName;
    setAge(newAge) = age = newAge;
    setGender(newGender) = gender = newGender;
    setOccupation(newOccup) = occupation = newOccup;
}

person = make Person;
person.setName("Bryan");

person.age = 20;

print(person.name);
print(person.gender);