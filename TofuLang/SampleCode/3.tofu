x = "hi";

blueprint for Person {
    name = "";
    age = "age";
    gender = x;
    occupation = "";

    setName(newName) = name = newName;
    setAge(newAge) = age = newAge;
    setGender(newGender) = gender = newGender;
    setOccupation(newOccup) = occupation = newOccup;
}

person = make Person;
person.setName("Bryan");
print(person.name);
print(person.age);