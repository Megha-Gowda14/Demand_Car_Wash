const expect=require('chai').expect;
const request=require('supertest');

const app=require('../../../Backend/Admin/app.js');
const conn=require('../DBconnect.js');

describe("POST/admin/car-func/addCar",()=>{

    before((done)=>{
        conn.connect()
        .then(()=>done())
        .catch((err)=>done(err));
    })

    after((done)=>{
        conn.close()
        .then(()=>done())
        .catch((err)=>done(err));
    })

    describe("given car schema doesnot match ",()=>{
        it('no token provided and status code 403',(done)=>{
            request(app)
            .post("/admin/car-func/addCar")
            .send(
                {
                name:7348
                }
            )
            .then(response=>{
                expect(response.statusCode).to.be.equal(403);               
                done()
            })
           .catch((err)=>{
                console.log(err);
                throw(err);
            })  
        });
    })
    
})
