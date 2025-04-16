export const generatePetCreatedErrorInfo = (pet) => {
    return `One or more properties were incomplete or not valid.
List of required properties:
* name      : needs to be a String, received ${pet.name}
* specie   : needs to be a String, received ${pet.specie}
* birthDate : needs to be a valid date (YYYY-MM-DD), received ${pet.birthDate}`;
};