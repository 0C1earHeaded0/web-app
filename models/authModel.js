// import * as argon2 from 'argon2';
// import * as jwt from 'jsonwebtoken';
// class AuthService {

//     generateToken(user) {
//         const data = {
//             _id: user._id,
//             email: user.email
//         };
//         const signature = 'MySuP3R_z3kr3t';
//         const expiration = '6h';

//         return jwt.sign({data, }, signature, {expiresIn: expiration});
//     }
//     async Login(email, password) {
//         const userRecord = await UserModel.findOne(email);
//         if (!userRecord) {
//             throw new Error('User not found');
//         } else {
//             const correctPassword = await argon2.verify(userRecord.password, password);
//             if (!correctPassword) {
//                 throw new Error('Incorrect password')
//             }
//         }

//         return {
//             user: {
//                 email: userRecord.email
//             },
//             token: this.generateJWT(userRecord)
//         }
//     }
// }