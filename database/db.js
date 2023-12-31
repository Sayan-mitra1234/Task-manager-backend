const mongoose =require('mongoose') ;

const Connection = async (username, password) => {
    const URL = `mongodb+srv://user:taskmangementapp@cluster0.02r1ha1.mongodb.net/?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

module.exports= Connection;