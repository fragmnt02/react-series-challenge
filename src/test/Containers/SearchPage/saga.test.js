import {doQuerySearch, querySearchWatcher} from "../../../Containers/HomePage/saga"

describe('>>>testFunction0 ',()=>{
   const action = {type: 'QUERY_TRENDING'}
   const generator = doQuerySearch(action) 
   it('+++ must call testFunction1', () => {
      //const generator = testFunction1("Gethyl") 
      const testValue = generator.next().value
      expect(testValue).toEqual(call(testFunction1,action.output))
   });
   it('+++ must call a delay 1000', () => {
      //const generator = testFunction1("Gethyl") 
      const testValue = generator.next().value
      expect(testValue).toEqual(call(delay, 1000))
   });
   it('+++ ASYNC_FETCH_INITIAL action', () => {
      //const generator = testFunction1("Gethyl") 
      const testValue = generator.next().value
      expect(testValue).toEqual(put(querySearchWatcher()))
   }); 
   it('+++ call function to fetch testData.json', () => {
      //const generator = testFunction1("Gethyl") 
      const testValue = generator.next().value
      expect(testValue).toEqual(call(querySearchWatcher))
   });
   it('+++ ASYNC_FETCH_SUCCESS action', () => {
      
      const dummyOutput = "Dummy Output" ,
            testValue = generator.next(dummyOutput).value
      expect(testValue).toEqual(put(querySearchWatcher(dummyOutput)))
   }); 
   
});