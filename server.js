const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/test';

// MongoClient.connect(url,(err,db)=>{
//     if(err){
//         console.log('could not connect');
//     }
//     console.log('connected!')
//     db.close();
// })

//Insert Multiple Data
// MongoClient.connect(url,(err,db)=>{

//     const cars = [
//         {model:"Chevy",year:"2017"},
//         {model:"Nissan",year:"2018"},

//     ]

//     db.collection('Cars').insertMany(cars,(err,res)=>{
//         if(err){
//             return console.log('cannot insert: ${err}')
//         }
//          console.log(res.ops)
//     })

//     db.close();
// })   

//How to Get Data
MongoClient.connect(url,(err,db)=>{

    // db.collection('Cars').find({year:'2017'})
    // .skip(1)
    // .limit(1)
    // .sort({"_id":-1})
    // .toArray()
    // .then(data=>{
    //     console.log(data)
    // });

    //To Delete Many Data
    //  db.collection('Cars').deleteMany({year:'2017'},(err,doc)=>{
    //      console.log(doc);
    //  })

    //To Update Data
    db.collection('Cars').findOneAndUpdate(
        {
            name:"Francis"
        },
        {
            $set:{
                lastname:"Smith"
            },
            $inc:{
                age:+2
            }
        },
        {
            upsert:true,
            returnOriginal:true
        },
        (err,doc)=>{
            console.log(doc);
        }
    )
    db.close();
})