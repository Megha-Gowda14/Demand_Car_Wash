const expect=require('chai').expect;
const request=require('supertest');

const app=require('../../../Backend/Admin/app.js');
const conn=require('../DBconnect.js');

describe("POST/admin/login",()=>{

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

describe("given admin details which does not exist ",()=>{
    it('should give 401 status code',(done)=>{
        request(app)
        .post("/admin/auth/login")
        .send(
            {
            email:"suri@gmail.com",
            password:"suri"
            }
        )
        .then(response=>{
            expect(response.statusCode).to.be.equal(401);               
            done()
        })
       .catch((err)=>{
            console.log(err);
            throw(err);
        })  
    });

})
describe("when the email or password mismatches",()=>{
    it("password mismatch should give 401 status code",(done)=>{
            const response =request(app).post("/admin/auth/login")
            .send({
                email:"meghaa@gmail.com",
                password:"megha"
            }).then(response=>{
                expect(response.statusCode).to.be.equal(401);                
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     });
    })
    describe("when email and password is given correctly",()=>{
        it("gives token with auth successful message and status code set to 200",(done)=>{
                const response =request(app).post("/admin/auth/login")
                .send({
                    email:"megha@gmail.com",
                    password:"megha",
                }).then(response=>{
                    expect(response.statusCode).to.be.equal(200); 
                    this.token=response.body.token                
                    done()
                })
                .catch((err)=>{
                    console.log(err);
                    throw(err);
                }) 
         });
    
})
describe("signup details doesnot match the schema",()=>{
    it("model schema doesnot match and gives a status code set to 400",(done)=>{
            const response =request(app).post("/admin/auth/signup")
            .send({
                name:"this",
                password:"this",
            }).then(response=>{
                expect(response.statusCode).to.be.equal(400); 
                this.token=response.body.token                
                done()
            })
            .catch((err)=>{
                console.log(err);
                throw(err);
            }) 
     });
})
})
