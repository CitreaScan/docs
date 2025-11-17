# Getting Started

**How to use CitreaScan to explore the Citrea blockchain**

## Accessing CitreaScan

Visit [https://citreascan.com](https://citreascan.com) to access the CitreaScan blockchain explorer for Citrea Testnet.

## Understanding the Homepage

The CitreaScan homepage provides an overview of the Citrea network activity:

### Network Statistics
- **Total Blocks**: Number of blocks produced
- **Total Transactions**: Cumulative transaction count
- **Average Block Time**: Time between blocks
- **Total Addresses**: Unique addresses on the network

### Latest Activity
- **Recent Blocks**: Most recently mined blocks with timestamps and transaction counts
- **Latest Transactions**: Real-time feed of new transactions
- **Gas Tracker**: Current network gas prices

## Searching the Blockchain

Use the universal search bar at the top of any page to find:

### Search by Transaction Hash
Enter a complete transaction hash (66 characters starting with `0x`) to view transaction details.

**Example**: `0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef`

**What you'll see**:
- Transaction status (Success, Failed, Pending)
- Block confirmation number
- Timestamp and age
- From and To addresses
- Value transferred
- Transaction fee (Gas used × Gas price)
- Input data and logs
- Internal transactions (if any)

### Search by Address
Enter any wallet address or contract address (42 characters starting with `0x`).

**Example**: `0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb`

**For Wallet Addresses**:
- Current balance
- Transaction history (sent and received)
- Token balances (ERC-20, ERC-721, ERC-1155)
- Internal transactions
- Analytics and charts

**For Contract Addresses**:
- Contract source code (if verified)
- Read contract functions
- Write contract functions
- Contract events and logs
- Contract creator and creation transaction

### Search by Block Number
Enter a block number or block hash to view block details.

**Example Block Number**: `12345`
**Example Block Hash**: `0xabcdef...`

**What you'll see**:
- Block height and hash
- Timestamp
- Number of transactions
- Block proposer/validator
- Gas used and gas limit
- Base fee and priority fee
- Block size and nonce

### Search by Token
Enter a token name or contract address to view token information:
- Token details (name, symbol, decimals)
- Total supply and holders
- Transfer history
- Token contract address

## Exploring Transactions

### Transaction Status
- ✅ **Success**: Transaction executed successfully
- ❌ **Failed**: Transaction reverted or failed
- ⏳ **Pending**: Transaction waiting for confirmation

### Understanding Gas
- **Gas Limit**: Maximum gas you're willing to spend
- **Gas Used**: Actual gas consumed
- **Gas Price**: Price per unit of gas (in Gwei)
- **Transaction Fee**: Gas Used × Gas Price

### Transaction Types
- **Transfer**: Simple value transfer between addresses
- **Contract Call**: Interaction with a smart contract
- **Contract Creation**: Deploying a new smart contract
- **Internal Transaction**: Contract-to-contract interaction

## Working with Smart Contracts

### Viewing Contract Code
For verified contracts, you can:
1. View the Solidity source code
2. Check the compiler version and settings
3. Review the constructor arguments
4. See the ABI (Application Binary Interface)

### Reading Contract Data
Use the "Read Contract" tab to:
- Query public state variables
- Call view/pure functions
- Inspect contract storage

### Interacting with Contracts
Use the "Write Contract" tab to:
- Connect your wallet (MetaMask, WalletConnect, etc.)
- Execute state-changing functions
- Send transactions to the contract

## Network Connection & RPC

### RPC Endpoint

To connect your wallet or dApp to Citrea Testnet, use the following RPC endpoint:

```
https://rpc.testnet.citreascan.com
```

**Quick Setup for MetaMask:**
1. Open MetaMask and click the network dropdown
2. Select "Add Network Manually"
3. Enter:
   - **Network Name**: Citrea Testnet
   - **RPC URL**: `https://rpc.testnet.citreascan.com`
   - **Chain ID**: [TBD]
   - **Currency Symbol**: cBTC
   - **Block Explorer URL**: `https://testnet.citreascan.com`

For detailed RPC documentation, code examples, and integration guides, see the [Network & RPC](/network-rpc) page.

## API Access

CitreaScan provides comprehensive API endpoints for developers:

### REST API
Access blockchain data programmatically through the Blockscout API.

**API Documentation**: [https://citreascan.com/api-docs](https://citreascan.com/api-docs)

**Base URL**: `https://citreascan.com/api/v2`

### Common API Endpoints
- `/addresses/{address}` - Account balance and transaction list
- `/smart-contracts/{address}` - Contract ABI and source code
- `/blocks` and `/transactions` - Block and transaction details
- `/tokens/{address}/transfers` - Token transfer events
- `/stats` - Network statistics and gas price oracle

### API Documentation
Visit [citreascan.com/api-docs](https://citreascan.com/api-docs) for:
- Complete endpoint reference
- Request/response examples
- Authentication details
- Rate limiting information

## Advanced Features

### Verified Contracts
Look for the ✓ checkmark next to contract addresses to ensure the source code has been verified and matches the deployed bytecode.

### Token Approvals
Check which contracts have approval to spend your tokens - important for security.

### Internal Transactions
View contract-to-contract calls that occur within a transaction.

### Event Logs
Inspect emitted events from smart contract executions.

## Tips for Effective Use

1. **Bookmark Addresses**: Save frequently viewed addresses for quick access
2. **Use Filters**: Filter transaction lists by type, status, or time period
3. **Check Confirmations**: Wait for multiple block confirmations for high-value transactions
4. **Verify Contracts**: Always verify contracts before interacting with them
5. **Monitor Gas Prices**: Check current gas prices before submitting transactions

## Next Steps

- Read the [Overview](/overview) to learn more about Citrea and CitreaScan's capabilities
- Check the [FAQ](/faq) for answers to common questions
- Visit [Citrea Documentation](https://docs.citrea.xyz) for network-specific information
