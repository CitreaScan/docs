# Frequently Asked Questions

## About Citrea & CitreaScan

### What is Citrea?
Citrea is Bitcoin's first ZK Rollup - a layer 2 blockchain that settles on Bitcoin. It uses zero-knowledge proofs to process transactions off-chain and verify them on Bitcoin, combining Bitcoin's security with Ethereum's smart contract capabilities through full EVM compatibility.

### What is CitreaScan?
CitreaScan is the dedicated blockchain explorer for Citrea Testnet, powered by Blockscout. It provides a comprehensive interface for exploring transactions, blocks, addresses, and smart contracts on the Citrea network.

### Is CitreaScan free to use?
Yes, CitreaScan is completely free to use. Anyone can access the explorer to view blockchain data, search transactions, and interact with smart contracts.

### What is Blockscout?
Blockscout is the #1 open-source blockchain explorer that powers CitreaScan. It provides proven reliability, comprehensive features, and extensive API support for blockchain exploration.

## Using CitreaScan

### How do I search for a transaction?
Paste the complete transaction hash (66 characters starting with `0x`) into the search bar. The transaction details page will show status, gas fees, addresses involved, and more.

### How can I view my wallet balance?
Enter your wallet address (42 characters starting with `0x`) in the search bar. You'll see your balance, transaction history, token holdings (ERC-20, ERC-721, ERC-1155), and internal transactions.

### Why is my transaction showing as pending?
A pending status means your transaction has been broadcast but hasn't been included in a block yet. This typically takes seconds to minutes depending on:
- Network congestion
- Gas price you set
- Transaction complexity

### How do I check if my transaction succeeded?
Look for the status indicator:
- ✅ Green checkmark = Success
- ❌ Red X = Failed/Reverted
- ⏳ Clock = Pending

Failed transactions still consume gas for the computation attempted.

## Understanding Citrea

### How does Citrea differ from other L2s?
Citrea is unique because it:
- **Settles on Bitcoin** (not Ethereum)
- Uses **zero-knowledge proofs** for security
- Provides **full EVM compatibility** on Bitcoin
- Is the first **zkEVM rollup** on Bitcoin

### Is Citrea Testnet safe to use?
Citrea Testnet is for testing purposes only. Do not use real assets or production applications on testnet. Use it to:
- Test smart contracts
- Develop and debug dApps
- Experiment with transactions
- Learn about the network

### What is a zkEVM?
A zkEVM (Zero-Knowledge Ethereum Virtual Machine) is a virtual machine that executes smart contracts while generating zero-knowledge proofs. This allows Citrea to verify transactions on Bitcoin without revealing all transaction details, combining privacy with security.

## Smart Contracts

### How do I verify a smart contract?
1. Navigate to your contract address on CitreaScan
2. Click on the "Contract" tab
3. Select "Verify & Publish"
4. Enter your source code, compiler version, and optimization settings
5. Submit for verification

Verified contracts display their source code and allow direct interaction.

### Can I interact with contracts on CitreaScan?
Yes! For verified contracts:
- **Read Contract**: Query public functions and state variables (no wallet needed)
- **Write Contract**: Execute state-changing functions (requires wallet connection)

### What wallets work with CitreaScan?
CitreaScan supports standard Web3 wallets:
- MetaMask
- WalletConnect
- Coinbase Wallet
- Other EVM-compatible wallets

## Technical Questions

### How often is the data updated?
CitreaScan updates in real-time as new blocks are added to the Citrea blockchain. Block times on Citrea Testnet are typically a few seconds.

### Can I use CitreaScan to send transactions?
No, CitreaScan is a read-only explorer. To send transactions:
1. Use a Web3 wallet (MetaMask, etc.)
2. Connect to Citrea network
3. Send transactions through your wallet
4. Track them on CitreaScan

### What is gas on Citrea?
Gas is the unit measuring computational effort required to execute operations. Similar to Ethereum:
- **Gas Limit**: Maximum gas you're willing to spend
- **Gas Price**: Amount you pay per gas unit
- **Transaction Fee**: Gas Used × Gas Price

### Can I access historical data?
Yes, CitreaScan provides complete blockchain history from genesis block to present. Search any historical transaction, block, or address.

### Does CitreaScan have an API?
Yes! CitreaScan provides:
- **REST API**: Standard HTTP endpoints for blockchain data
- **GraphQL API**: Flexible query interface
- **WebSocket**: Real-time event subscriptions

Visit the API documentation for details and endpoints.

## Tokens & NFTs

### How do I find my tokens on CitreaScan?
Search for your address, then check the "Tokens" tab to see:
- ERC-20 token balances
- ERC-721 NFTs
- ERC-1155 multi-tokens

### What is token approval?
Token approval allows smart contracts to spend tokens on your behalf. Check your "Token Approvals" to see which contracts have spending permissions - important for security.

### Can I see NFT metadata?
Yes, for ERC-721 and ERC-1155 tokens, CitreaScan displays:
- Token ID
- Metadata (if available)
- Owner history
- Transfer events

## Troubleshooting

### Why can't I find my transaction?
Possible reasons:
- Transaction is still pending (wait a few moments)
- Wrong network (ensure you're on Citrea Testnet)
- Incorrect transaction hash (verify the hash)
- Transaction failed to broadcast (check your wallet)

### What does "out of gas" mean?
Your transaction ran out of gas before completing. Increase the gas limit when retrying. The consumed gas is still charged.

### Why is my contract interaction failing?
Common causes:
- Insufficient gas limit
- Function requirements not met (e.g., insufficient balance)
- Contract logic rejection
- Incorrect function parameters

Check the error message in the transaction details for specifics.

## Support & Resources

### Where can I get help?
- **GitHub**: [github.com/CitreaScan](https://github.com/CitreaScan)
- **Citrea Docs**: [docs.citrea.xyz](https://docs.citrea.xyz)
- **CitreaScan Docs**: [docs.citreascan.com](https://docs.citreascan.com)

### How do I report a bug?
Submit bug reports through our [GitHub Issues](https://github.com/CitreaScan/docs/issues) page with:
- Detailed description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### Is CitreaScan open source?
Yes, CitreaScan is built on Blockscout, which is open source. The repositories are:
- `CitreaScan/blockscout` - Explorer backend
- `CitreaScan/frontend` - Frontend application
- `CitreaScan/blockscout-rs` - Rust microservices

### Where can I learn more about Citrea?
- Official website: [citrea.xyz](https://citrea.xyz)
- Documentation: [docs.citrea.xyz](https://docs.citrea.xyz)
- Blog: [blog.citrea.xyz](https://blog.citrea.xyz)
- GitHub: [github.com/chainwayxyz/citrea](https://github.com/chainwayxyz/citrea)
