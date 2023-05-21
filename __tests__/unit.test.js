// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('checks if 012-345-6789 is valid', () => {
    expect(functions.isPhoneNumber('(012) 345-6789')).toBe(true);
} );

test('checks if 012 is valid', () => {
    expect(functions.isPhoneNumber('012')).toBe(false);
} );

test('checks if 987-654-3210 is valid', () => {
    expect(functions.isPhoneNumber('(987) 654-3210')).toBe(true);
} );

test('checks if 911 is valid', () => {
    expect(functions.isPhoneNumber('911')).toBe(false);
} );

test('check is abc@defg.com is a valid email', () => {
    expect(functions.isEmail('abc@defg.com')).toBe(true);
});

test('check is abcdefg.com is a valid email', () => {
    expect(functions.isEmail('abcdefg.com')).toBe(false);
});

test('check is chp009@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('chp009@ucsd.edu')).toBe(true);
});

test('check is chp009edu is a valid email', () => {
    expect(functions.isEmail('chp009edu')).toBe(false);
});

test('check is a1_z is a strong password', () => {
    expect(functions.isStrongPassword('a1_z')).toBe(true);
});

test('check is abc is a strong password', () => {
    expect(functions.isStrongPassword('abc')).toBe(false);
});

test('check is z___ is a strong password', () => {
    expect(functions.isStrongPassword('z___')).toBe(true);
});

test('check is abcdef0123456789 is a strong password', () => {
    expect(functions.isStrongPassword('abcdef0123456789')).toBe(false);
});

test('check is 04191999 a valid date', () => {
    expect(functions.isDate('04/19/1999')).toBe(true);
});

test('check is / 5 / 2023 a valid date', () => {
    expect(functions.isDate(' / 5 / 2023')).toBe(false);
});

test('check is 0/0/0000 a valid date', () => {
    expect(functions.isDate('0/0/0000')).toBe(true);
});

test('check is 3/19 a valid date', () => {
    expect(functions.isDate('3/19')).toBe(false);
});

test('check if #000000 is a valid hex color', () => {
    expect(functions.isHexColor('#123456')).toBe(true);
});

test('check if #00000 is a valid hex color', () => {
    expect(functions.isHexColor('#00(000)')).toBe(false);
});

test('check if #FF0000 is a valid hex color', () => {
    expect(functions.isHexColor('#654321')).toBe(true);
});

test('check if #FFF0000 is a valid hex color', () => {
    expect(functions.isHexColor('#FFF0(000)')).toBe(false);
});