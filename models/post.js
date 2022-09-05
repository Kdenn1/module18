const { Schema, model, Types } = require('mongoose');
const { post } = require('.');
const dateFormat = require('../util/dateFormat');
const responseSchema = require('./post-response');

//make database for recording user posts 
const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            validate: [({ length }) => length > 0 && length <= 200, 'Posts can only be up to 200 characters in length']
        },
        // set date at which the new item is created 
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            required: true
        },
        responses: [responseSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

postSchema.virtual('responseCount').get(function () {
    return this.responses.length;
});

const post = model('post', postSchema);

module.exports = post;