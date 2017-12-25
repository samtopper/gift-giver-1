import { max_number } from './index';

describe('max_number', () => {
    
    test('returns 0', () => {
        expect(max_number( [] )).toEqual(0);
    });

    test('returns the max number', () => {
        expect(max_number([1,2,3])).toEqual(3);
    });
});