describe('multiply 2 no`s', () => {
    test('2 * 3', () => {
        const a = 2;
        const b = 3;
        expect(a*b).toEqual(5);
    });
});

function bloop() {
    return null;
  }
  
test('bloop returns null', () => {
    expect(bloop()).toBeNull();
});

drinkSomeLaCroix();
    if (thirstInfo()) {
    drinkMoreLaCroix();
    }

test('drinking La Croix leads to having thirst info', () => {
    drinkSomeLaCroix();
    expect(thirstInfo()).toBeTruthy();
});

test('the best drink for octopus flavor is undefined', () => {
    expect(bestDrinkForFlavor('octopus')).toBeUndefined();
  });
//You could write expect(bestDrinkForFlavor('octopus')).toBe(undefined), 
//but it's better practice to avoid referring to undefined directly in your code.