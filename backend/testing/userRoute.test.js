import request from 'supertest';
import app from '../index.js';

const userApi = describe('User API', () => {
    it('should get all users', async () => {
        const response = await request(app).get('/users')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            {
                "count": 7,
                "data": [
                    {
                        "_id": "656f539d3ad4ad44f417e600",
                        "username": "Zahran Hanif Fathanmubbin",
                        "name": "Zahran Hanif Fathanmubbin",
                        "email": "zahranhanif1@gmail.com",
                        "createdAt": "2023-12-05T16:45:17.442Z",
                        "updatedAt": "2023-12-08T13:42:28.959Z",
                        "__v": 0,
                        "birthdate": "2023-12-27T00:00:00.000Z",
                        "gender": "Pria",
                        "address": "rhrhrf",
                        "role": "user"
                    },
                    {
                        "_id": "656f5e35f0e1f5462d606923",
                        "username": "indahstr",
                        "name": "indahsut",
                        "email": "indah@mail",
                        "password": "haloges",
                        "createdAt": "2023-12-05T17:30:29.982Z",
                        "updatedAt": "2023-12-14T18:18:25.671Z",
                        "__v": 0,
                        "birthdate": "2023-12-01T00:00:00.000Z",
                        "role": "user"
                    },
                    {
                        "_id": "6571ce4d42ef9d2088f0703e",
                        "username": "hali.admin",
                        "name": "admin",
                        "email": "hali.admin@mail.com",
                        "password": "1234",
                        "address": "dirumah",
                        "gender": "Wanita",
                        "birthdate": "2002-02-02T00:00:00.000Z",
                        "profileImage": "",
                        "createdAt": "2023-12-07T13:53:17.800Z",
                        "updatedAt": "2023-12-07T13:53:34.859Z",
                        "__v": 0,
                        "role": "admin"
                    },
                    {
                        "_id": "65720335b7769fe39ff8260d",
                        "username": "Zahran Hanif",
                        "name": "Zahran Hanif",
                        "email": "haniffathanmubin24@gmail.com",
                        "createdAt": "2023-12-07T17:39:01.004Z",
                        "updatedAt": "2023-12-11T15:16:02.015Z",
                        "__v": 0,
                        "birthdate": "2023-12-04T00:00:00.000Z",
                        "gender": "Pria",
                        "role": "user"
                    },
                    {
                        "_id": "65720a1e6f54470b92ae83d3",
                        "username": "ayam",
                        "name": "ayam",
                        "email": "ayam@gmail.com",
                        "password": "$2b$10$Ry.26QoFM9UEfkYihk/aP.7aGYpNy8GL/DLz2l3sn27djzSz8DHMq",
                        "createdAt": "2023-12-07T18:08:30.667Z",
                        "updatedAt": "2023-12-08T13:42:48.939Z",
                        "__v": 0,
                        "birthdate": "2023-12-21T00:00:00.000Z",
                        "role": "user"
                    },
                    {
                        "_id": "657b1c6f6209564d6b6928da",
                        "username": "Singa",
                        "email": "singa@gmail.com",
                        "password": "$2b$10$JfYacwnMPdizURQnkAjb0uOPueQtfC1gHBe.myghsx6mu43vuNfkm",
                        "role": "user",
                        "createdAt": "2023-12-14T15:17:03.930Z",
                        "updatedAt": "2023-12-14T18:18:05.450Z",
                        "__v": 0,
                        "name": "indah"
                    },
                    {
                        "_id": "657b4c27bd63c02aa662f7aa",
                        "username": "Singa2",
                        "email": "singa2@gmail.com",
                        "password": "$2b$10$GG45mZkAQM4xrk2qHk0TMezLRPG0qwRmZlGwr2ncjStOyNP2gT7fG",
                        "role": "user",
                        "createdAt": "2023-12-14T18:40:39.241Z",
                        "updatedAt": "2023-12-14T18:40:39.241Z",
                        "__v": 0
                    }
                ]
            }
        )
    });

    it('should get user by id', async () => {
        const response = await request(app).get('/users/656f539d3ad4ad44f417e600')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            {
                "data": {
                    "_id": "656f539d3ad4ad44f417e600",
                    "username": "Zahran Hanif Fathanmubbin",
                    "name": "Zahran Hanif Fathanmubbin",
                    "email": "zahranhanif1@gmail.com",
                    "createdAt": "2023-12-05T16:45:17.442Z",
                    "updatedAt": "2023-12-08T13:42:28.959Z",
                    "__v": 0,
                    "birthdate": "2023-12-27T00:00:00.000Z",
                    "gender": "Pria",
                    "address": "rhrhrf",
                    "role": "user"
                }
            }
        )
    }, 10000)

    it('should delete user', async () => {
        const response = await request(app).delete('/users/65713138ac1ca758d06a752f')
        expect(response.status).toBe(200)
    })

    it('find username', async () => {
        const response = await request(app).get('/users/login/find/indahstr')
        expect(response.status).toBe(200)
        expect(response.body).toEqual(
            {
                "data": {
                    "_id": "656f5e35f0e1f5462d606923",
                    "username": "indahstr",
                    "name": "indahsut",
                    "email": "indah@mail",
                    "password": "haloges",
                    "createdAt": "2023-12-05T17:30:29.982Z",
                    "updatedAt": "2023-12-14T18:18:25.671Z",
                    "__v": 0,
                    "birthdate": "2023-12-01T00:00:00.000Z",
                    "role": "user"
                }
            }
        )
    }, 10000)

    it('edit name', async () => {
        const editName = {
            "name": "indah"
        }
        const response = await request(app)
            .put('/users/edit/indahstr')
            .send(editName)

        expect(response.status).toBe(200)
        expect(response.body).toEqual(expect.objectContaining({
            "name": expect.stringContaining("indah")
        }))
    }, 10000)


});

const loginRegister = describe('Register User', () => {
    it('should register user', async () => {
        const registerUser = {
            "username": "Ngetess",
            "email": "ngetess@gmail.com",
            "password": "ngetess"
        }
        const response = await request(app)
            .post('/users')
            .send(registerUser)

        expect(response.status).toBe(201)
        expect(response.body).toEqual(expect.objectContaining({
            "username": expect.stringContaining("Ngetes")
        }))
    })

    it('should login by email', async () => {
        // Login by email
        const loginUser = {
            "email": "singa@gmail.com",
            "password": "buntutsinga"
        }
        const loginResponse = await request(app)
            .post('/users/login/find')
            .send(loginUser)

        expect(loginResponse.status).toBe(200)
        expect(loginResponse.body).toEqual(expect.objectContaining({
            "message": expect.stringContaining("Success")
        }))

        // Extract token
        const token = loginResponse.body.token

        // Logout using the token
        const logoutResponse = await request(app)
            .post('/logout')
            .set('Authorization', `Bearer ${token}`)

        expect(logoutResponse.status).toBe(200)
        expect(logoutResponse.body).toEqual(
            {
                "message": "User logged out successfully"
            }
        )
    })
})