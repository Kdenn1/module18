const { Schema, Types } = require('mongoose');
const dateFormat = require('../util/dateFormat');

const responseSchema = new Schema(
    {
        responseId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        responseBody: {
            type: String,
            required: true,
            validate: [({ length }) => length <= 200, 'Responses are limited to 200 characters max']
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
)

module.exports = responseSchema;