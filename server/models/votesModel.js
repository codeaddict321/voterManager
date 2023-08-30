const mongoose = require('mongoose');
const { Schema } = mongoose;
const { model } = mongoose;

const votesSchema = new Schema({
    pollingBoothNumber: Number,
    pollingBoothName: String,
    parentConstituency: String,
    winner2014: String,
    marginPercentage: Number,
    margin: Number,
    totalVoters: Number,
    bjpVotes: Number,
    bjpVotePercentage: Number,
    incVotes: Number,
    incVotePercentage: Number,
    winner2019: String,
    marginPercentage2019: Number,
    margin2019: Number,
    totalVoters2019: Number,
    bjpVotes2019: Number,
    bjpVotePercentage2019: Number,
    incVotes2019: Number,
    incVotePercentage2019: Number
});

const Voter = model('VotesData', votesSchema);
module.exports = Voter;
