# Overview

**CitreaScan - Blockchain Explorer for Citrea Network**

## What is CitreaScan?

CitreaScan is the dedicated blockchain explorer for the Citrea Testnet, powered by Blockscout - the leading open-source blockchain explorer. It provides a comprehensive and user-friendly interface for exploring and analyzing the Citrea blockchain.

## What is Citrea?

Citrea is Bitcoin's first ZK Rollup - a groundbreaking layer 2 solution that enhances Bitcoin's capabilities with zero-knowledge technology. As a Type 2 zkEVM (Zero-Knowledge Ethereum Virtual Machine), Citrea processes transactions off-chain and settles them on Bitcoin with cryptographic proofs.

### Key Features of Citrea Network:
- **Bitcoin Settlement**: Every transaction is fully secured by zero-knowledge proofs and verified by Bitcoin
- **EVM Compatible**: Fully compatible with Ethereum Virtual Machine, enabling EVM developers to build on Bitcoin
- **ZK Technology**: Uses zero-knowledge proofs for efficient and secure transaction processing
- **Scalability**: Processes numerous zkEVM transaction batches efficiently

## CitreaScan Features

### Transaction Tracking
Search and view detailed information about any transaction on the Citrea network:
- Transaction hash and status
- Block confirmation
- Gas fees and execution details
- From/To addresses
- Input data and logs
- Transaction value

### Address Exploration
Look up any address to view:
- Current balance
- Complete transaction history
- Token holdings (ERC-20, ERC-721, ERC-1155)
- Smart contract code (if applicable)
- Internal transactions

### Block Information
Explore individual blocks:
- Block height and hash
- Timestamp
- Validator information
- Transaction count
- Gas usage statistics
- Parent and child blocks

### Smart Contract Interaction
- View verified smart contract source code
- Read contract state
- Interact with contract functions
- View contract events and logs
- Analyze contract creation details

### API Access
CitreaScan provides comprehensive APIs for developers to:
- Query blockchain data programmatically
- Integrate blockchain information into applications
- Build analytics and monitoring tools

## Technical Architecture

CitreaScan is built on **Blockscout**, the #1 open-source blockchain explorer:
- **Backend**: Elixir-based indexer and API
- **Frontend**: TypeScript/Next.js application
- **Indexer Services**: Rust-based microservices (blockscout-rs)
- **Real-time Updates**: WebSocket connections for live data
- **API Standards**: RESTful and GraphQL APIs

## Use Cases

### For Users
- Monitor your wallet and transactions
- Verify payment completion
- Track token balances
- Explore network activity

### For Developers
- Debug smart contracts with detailed execution traces
- Verify deployed contract source code
- Analyze transaction data and events
- Use APIs for dApp integration
- Monitor contract interactions

### For Researchers & Analysts
- Study network statistics and trends
- Analyze on-chain activity patterns
- Research ZK Rollup performance
- Track Bitcoin settlement proofs

## Why CitreaScan?

As Citrea brings zkEVM capabilities to Bitcoin, CitreaScan provides the essential infrastructure for transparency and accessibility. Whether you're a user checking a transaction, a developer deploying contracts, or a researcher analyzing the network, CitreaScan offers the tools you need to interact with Bitcoin's first ZK Rollup.
