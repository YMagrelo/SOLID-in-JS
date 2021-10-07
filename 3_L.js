//Liskov substitution principle

class Person {

}

class Member extends  Person{
    access() {
        console.log('You have a permission');
    }
}

class Guest extends Person{
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {

    }
}

class Backend extends Member {
    canCrateBackend() {

    }
}

class PersonFromDifferentCompany extends Guest {
    access() {
    throw new Error('You do not have an access, go home')}
}


function openSecretDoor(person) {
  person.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
openSecretDoor(new PersonFromDifferentCompany());
