const mongoose = require('mongoose');

const jobSchemaDetails = {
    title: {
        type: String
    },
    description: {
        type: String
    },
    location: {
        type: String
    },
    skills: {
        type: [String]
    },
    minExprienceRequired: {
        type: Number
    },
    salary: {
        type: Number
    },
    isVacant: {
        type: Boolean
    }
}

const jobSchema = mongoose.Schema(jobSchemaDetails);

const model = mongoose.model("jobs", jobSchema);

module.exports = model;