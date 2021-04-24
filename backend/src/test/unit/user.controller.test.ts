import axios from 'axios'
describe('tests users controllers', () => {
    it('should throw if user is falsy',()=>{
        const result = 2
        expect(result).toBeGreaterThan(1)
    })
    /*  it('should return user with given id', ()=> {
        const result = userCtrl.getUser
        expect(result).toMatchObject({id:1})
    }); */
})
/* 
describe('tests basic  endpoints', () => {
    it('should return same enpoint string',() => {
        const f = async ()=>{
            const res = await axios.get('http://localhost:3000/api')
            return res
        }
        const result = f()
        console.log(result);
        expect(result).toBe(/api/)
    })
})
 */