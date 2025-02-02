import { expect } from 'chai'
import {
    getArrayOfPhoneNumbers,
    employeeIsLazy,
    getArrayOfCompleteNames,
    getArrayOfLazyEmployees,
    getAllLazyEmployeeTags,
    removeDuplicatesFromTagArray,
} from '../workouts/arrays1.js'
import { employees } from '../workouts/arrays1.data.js'


describe('getArrayOfPhoneNumbers', () => {
    const expectedResult = [
        '6626626622',
        '6626626622',
        '4562349212',
        '4531114141',
        '6367879949',
    ]
    const actualResult = getArrayOfPhoneNumbers(employees)

    it('should return an array', () => {
        expect(actualResult).to.be.an('array')
    })

    it('should contain all the phone numbers', () => {
        expect(actualResult).to.deep.equal(expectedResult)
    })
})

describe('getArrayOfCompleteNames', () => {
    const expectedResult = [
        'Contrarian, Zeno',
        'Contrarian, Zed',
        'Garfield, Oedipus',
        'Leigh, Cyrus',
        'Cartwright, Doonesbury'
    ]
    const actualResult = getArrayOfCompleteNames(employees)

    it('should return an array', () => {
        expect(actualResult).to.be.an('array')
    })

    it('should contain the correct formatted names', () => {
        expect(actualResult).to.deep.equal(expectedResult)
    })
})

describe('employeeIsLazy', () => {
    const expectedResults = [
        true,
        true,
        false,
        true,
        false,
    ]

    it('should return true for employees with a "lazy" tag', () => {
        for (let i=0; i<expectedResults.length; i++) {
            const expectedResult = expectedResults[i]
            const actualResult = employeeIsLazy(employees[i])
            expect(actualResult).to.equal(expectedResult)
        }
    })
})

describe('getArrayOfLazyEmployees', () => {
    const expectedResult = [
        employees[0],
        employees[1],
        employees[3],
    ]
    const actualResult = getArrayOfLazyEmployees(employees)

    it('should return an array', () => {
        expect(actualResult).to.be.an('array')
    })

    it('should return all of, and only, the lazy employees', () => {
        expect(actualResult).to.deep.equal(expectedResult)
    })
})

describe('getAllLazyEmployeeTags', () => {
    const expectedResult = [
        'weird',
        'lazy',
        'wiseass',
        'contrarian',
        'lazy',
        'wiseass',
        'lazy',
        'tall',
        'stoic',
    ]

    const actualResult = getAllLazyEmployeeTags(employees)

    it('should return an array', () => {
        expect(actualResult).to.be.an('array')
    })

    it('should return all tags from lazy employees', () => {
        expect(actualResult).to.have.all.members(expectedResult)
    })

    it('should return ONLY tags from lazy employees', () => {
        expect(expectedResult).to.have.all.members(actualResult)
    })
})

describe('removeDuplicatesFromTagArray', () => {
    const expectedResult = [
        'weird',
        'lazy',
        'wiseass',
        'contrarian',
        'tall',
        'stoic',
    ]

    const actualResult = removeDuplicatesFromTagArray(getAllLazyEmployeeTags(employees))
   
    it('should return an array', () => {
        expect(actualResult).to.be.an('array')
    })

    it('should return all unique tags from lazy employees', () => {
        expect(expectedResult).to.have.all.members(actualResult)
    })

    it('should return ONLY unique tags from lazy employees', () => {
        expect(actualResult).to.have.all.members(expectedResult)
    })
})