// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Create a mapping to store candidate vote counts
    mapping(string => uint256) public votes;

    // Function to vote for a candidate
    function voteForCandidate(string memory candidate) public {
        votes[candidate] += 1;
    }

    // Function to get the vote count for a candidate
    function getVoteCount(string memory candidate) public view returns (uint256) {
        return votes[candidate];
    }
}