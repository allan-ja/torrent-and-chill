const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const userSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    username: String,
    password: { type: String, required: true }
})

userSchema.pre('save', async function(next) {
    var user = this;
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    const hash = await bcrypt.hash(user.password, salt);
    
    user.password = hash;
    next();     
});

userSchema.methods.verifyPassword = function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
}

mongoose.model('users', userSchema);
