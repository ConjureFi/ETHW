# ETHW
This repo allows you to use a simple script to check oracle data, specifically for the reference oracle for ETHPOW.

## Use
Simply
`git clone https://github.com/ConjureFi/ETHW`
into the repo,
`npm install``
and then run `node ethw.js`

All feeds will and associated IDs and info will show. To use the feeds 

## Interface
/**
 * @dev Interface of the OpenOracleFramework contract
 */
interface IOpenOracleFramework {
    /**
    * @dev getHistoricalFeeds function lets the caller receive historical values for a given timestamp
    *
    * @param feedIDs the array of feedIds
    * @param timestamps the array of timestamps
    */
    function getHistoricalFeeds(uint256[] memory feedIDs, uint256[] memory timestamps) external view returns (uint256[] memory);

    /**
    * @dev getFeeds function lets anyone call the oracle to receive data (maybe pay an optional fee)
    *
    * @param feedIDs the array of feedIds
    */
    function getFeeds(uint256[] memory feedIDs) external view returns (uint256[] memory, uint256[] memory, uint256[] memory);

    /**
    * @dev getFeed function lets anyone call the oracle to receive data (maybe pay an optional fee)
    *
    * @param feedID the array of feedId
    */
    function getFeed(uint256 feedID) external view returns (uint256, uint256, uint256);

    /**
    * @dev getFeedList function returns the metadata of a feed
    *
    * @param feedIDs the array of feedId
    */
    function getFeedList(uint256[] memory feedIDs) external view returns(string[] memory, uint256[] memory, uint256[] memory, uint256[] memory, uint256[] memory);
}`

## Use
### SOLIDITY
Take feedID in the fn params or hardcode

`uint256 feedID = x;
uint256 feedPrice, uint256 feedTimeStamp, uint256 feedDecimals = IOpenOracleFramework(0x00f0feed50dcdf57b4f1b532e8f5e7f291e0c84b).getFeed(feedID);`
