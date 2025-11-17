# Network & RPC Information

**Connect to Citrea Testnet**

## Network Details

### Citrea Testnet
Citrea is Bitcoin's first ZK Rollup - a layer 2 blockchain that brings EVM compatibility to Bitcoin through zero-knowledge proofs.

| Property | Value |
|----------|-------|
| **Network Name** | Citrea Testnet |
| **Chain ID** | TBD |
| **Currency Symbol** | cBTC |
| **Block Explorer** | https://testnet.citreascan.com |

## RPC Endpoints

### Public RPC Endpoint

The following RPC endpoint is available for connecting to Citrea Testnet:

```
https://rpc.testnet.citreascan.com
```

**Capabilities:**
- Full Ethereum JSON-RPC compatibility
- WebSocket support for real-time events
- Archive node access for historical data
- Free public access (rate limits may apply)

### Using with MetaMask

To add Citrea Testnet to MetaMask:

1. Open MetaMask and click the network dropdown
2. Select "Add Network" or "Add Network Manually"
3. Enter the following details:

```
Network Name: Citrea Testnet
RPC URL: https://rpc.testnet.citreascan.com
Chain ID: [TBD]
Currency Symbol: cBTC
Block Explorer URL: https://testnet.citreascan.com
```

4. Click "Save" to add the network

### Using with Web3 Libraries

#### Web3.js

```javascript
const Web3 = require('web3');
const web3 = new Web3('https://rpc.testnet.citreascan.com');

// Get latest block number
const blockNumber = await web3.eth.getBlockNumber();
console.log('Current block:', blockNumber);

// Get account balance
const balance = await web3.eth.getBalance('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
console.log('Balance:', web3.utils.fromWei(balance, 'ether'), 'cBTC');
```

#### Ethers.js

```javascript
const { ethers } = require('ethers');
const provider = new ethers.JsonRpcProvider('https://rpc.testnet.citreascan.com');

// Get latest block number
const blockNumber = await provider.getBlockNumber();
console.log('Current block:', blockNumber);

// Get account balance
const balance = await provider.getBalance('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');
console.log('Balance:', ethers.formatEther(balance), 'cBTC');
```

#### Viem

```typescript
import { createPublicClient, http } from 'viem';

const client = createPublicClient({
  transport: http('https://rpc.testnet.citreascan.com'),
});

// Get latest block number
const blockNumber = await client.getBlockNumber();
console.log('Current block:', blockNumber);
```

### Using with Hardhat

Add Citrea Testnet to your `hardhat.config.js`:

```javascript
module.exports = {
  networks: {
    citreaTestnet: {
      url: "https://rpc.testnet.citreascan.com",
      chainId: [TBD],
      accounts: [process.env.PRIVATE_KEY] // Use environment variables for private keys
    }
  }
};
```

Deploy contracts:
```bash
npx hardhat run scripts/deploy.js --network citreaTestnet
```

### Using with Foundry

Add to your `foundry.toml`:

```toml
[rpc_endpoints]
citrea_testnet = "https://rpc.testnet.citreascan.com"
```

Deploy contracts:
```bash
forge create --rpc-url citrea_testnet --private-key $PRIVATE_KEY src/MyContract.sol:MyContract
```

## Supported RPC Methods

Citrea Testnet supports standard Ethereum JSON-RPC methods:

### Block Methods
- `eth_blockNumber` - Returns the current block number
- `eth_getBlockByNumber` - Returns block information by number
- `eth_getBlockByHash` - Returns block information by hash
- `eth_getBlockTransactionCountByNumber` - Returns transaction count in a block

### Transaction Methods
- `eth_sendRawTransaction` - Submits a signed transaction
- `eth_getTransactionByHash` - Returns transaction by hash
- `eth_getTransactionReceipt` - Returns transaction receipt
- `eth_getTransactionCount` - Returns nonce for an address
- `eth_estimateGas` - Estimates gas for a transaction

### Account Methods
- `eth_getBalance` - Returns account balance
- `eth_getCode` - Returns contract bytecode
- `eth_call` - Executes a call without creating a transaction
- `eth_getStorageAt` - Returns storage value at position

### Network Methods
- `eth_chainId` - Returns chain ID
- `eth_gasPrice` - Returns current gas price
- `net_version` - Returns network ID
- `web3_clientVersion` - Returns client version

### Filter & Event Methods
- `eth_newFilter` - Creates a new filter
- `eth_newBlockFilter` - Creates a block filter
- `eth_getFilterChanges` - Returns filter changes
- `eth_getLogs` - Returns logs matching filter criteria

## Rate Limits

The public RPC endpoint has the following rate limits:

- **Requests per second**: Reasonable usage allowed
- **Batch requests**: Supported (max 100 requests per batch)
- **WebSocket connections**: Supported

For production applications with higher requirements, consider running your own node or contact the Citrea team for dedicated RPC access.

## Best Practices

### Security
- **Never expose private keys** in code or configuration files
- Use environment variables for sensitive data
- Implement proper error handling for RPC calls

### Performance
- Use batch requests when querying multiple data points
- Cache responses when appropriate
- Implement retry logic for failed requests
- Consider using WebSocket for real-time data

### Reliability
- Implement fallback RPC endpoints if available
- Handle network errors gracefully
- Monitor RPC response times
- Set appropriate timeouts for requests

## Testing RPC Connection

Test your RPC connection using curl:

```bash
curl -X POST https://rpc.testnet.citreascan.com \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1
  }'
```

Expected response:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x116ff90"
}
```

## Getting Testnet Tokens

To interact with Citrea Testnet, you'll need testnet cBTC:

1. Visit the [Citrea Faucet](https://faucet.citrea.xyz)
2. Connect your wallet
3. Request testnet tokens
4. Tokens will be sent to your address

## Troubleshooting

### Connection Issues

**Problem**: Unable to connect to RPC endpoint

**Solutions**:
- Verify the RPC URL is correct
- Check your internet connection
- Ensure no firewall is blocking the connection
- Try using a different network or VPN

### Transaction Failures

**Problem**: Transactions are failing or reverting

**Solutions**:
- Check account balance for sufficient cBTC
- Increase gas limit if out of gas
- Verify contract address and ABI are correct
- Check transaction parameters for errors

### Slow Responses

**Problem**: RPC requests are timing out or slow

**Solutions**:
- Implement request timeouts (recommended: 30s)
- Use batch requests instead of multiple single requests
- Consider the time of day and network congestion
- Check if the endpoint is experiencing high load

## Additional Resources

- [Citrea Documentation](https://docs.citrea.xyz) - Official Citrea network documentation
- [CitreaScan Explorer](https://testnet.citreascan.com) - Blockchain explorer
- [CitreaScan API](/getting-started#api-access) - Explorer API documentation
- [Ethereum JSON-RPC Specification](https://ethereum.org/en/developers/docs/apis/json-rpc/) - Standard RPC methods

## Support

For RPC-related issues or questions:
- **GitHub**: [github.com/CitreaScan/docs/issues](https://github.com/CitreaScan/docs/issues)
- **Citrea Discord**: Join the community for support
- **Documentation**: [docs.citreascan.com](https://docs.citreascan.com)
