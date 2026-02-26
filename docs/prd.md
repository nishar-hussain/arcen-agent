ARES PROTOCOL

Autonomous Reputation & Execution Settlement Protocol
Full Product Requirements Document

The Internet of Agents — Built on Every EVM Chain
A decentralized Operating System where autonomous AI agents discover, hire, and settle work outcomes cryptographically — without centralized platforms, without human intermediaries.
 
Version
1.0 — Initial Draft
Status
Pre-Development
Target
All EVM Chains
Date
Q1 2026
 
This Product Requirements Document defines the complete specifications, architecture, smart contract design, multi-chain deployment strategy, developer SDK, tokenomics, and go-to-market plan for the ARES Protocol — the foundational trust and settlement infrastructure for the autonomous agent economy.

SECTION 01  EXECUTIVE SUMMARY & VISION
What ARES is and why it must exist
 
The Core Thesis

The AI agent economy of 2026 is arriving without trust infrastructure. Autonomous AI agents can reason, plan, and execute — but they cannot verifiably prove they did what they claimed. They cannot earn a reputation. They cannot hire other agents and pay only on proven delivery. They cannot operate as economic actors in a trustless environment.
ARES solves this. It is a peer-to-peer protocol for autonomous agents to discover each other, contract for work, execute tasks in verifiable hardware environments, and settle payments cryptographically — all without centralized platforms, intermediaries, or human approval gates.
 
The One-Sentence Value Proposition

ARES in one sentence
ARES is the decentralized operating system for AI agents — providing every agent with an immutable identity, a mathematical reputation score, hardware-verified execution, and trustless payment settlement across every EVM chain.
 
What ARES Replaces

Layer
Current State (Broken)
ARES Solution
Agent Identity
Siloed API keys, no portability, no cross-platform trust
ERC-8004 on-chain AgentID — portable, permanent, unforgeable
Agent Reputation
Private star ratings, easily gamed, opaque history
Mathematical Confidence Score (CS) derived from on-chain execution history
Work Verification
Trust the provider's claims about what an agent did
TEE-verified execution with DCAP attestation quotes
Payment Settlement
Prepay upfront with no recourse, or charge after on faith
Pay-for-Proof escrow — funds release only on cryptographic proof of work
Agent Discovery
Manual search in proprietary marketplaces
Decentralized registry queryable by capability, CS score, and specialization
Agent-to-Agent Commerce
Impossible — no native payment rails
x402 HTTP-native micropayments with sub-cent fees on L2 chains
Cross-Chain Operation
Agents siloed to one chain
Universal registry + cross-chain message passing for multi-chain operation
 
Primary Chains (BNB + All EVM)

While the whitepaper targets the BNB tri-chain architecture, this PRD expands ARES to operate natively across all major EVM networks. The protocol is chain-agnostic at the application layer; chain selection is determined by task requirements (cost, speed, security).
EVM Chain
Role in ARES
Why
BNB Smart Chain (BSC)
Primary Trust Layer — Identity Registry, DAO Governance, high-value settlement
Sub-150ms blocks, lowest fees in EVM, 100M tx/day target
opBNB
Primary Execution Layer — AI-to-AI microtransactions, heartbeat data
20,000+ TPS, PEVM parallel execution, near-zero gas
BNB Greenfield
Persistence Layer — Agent memory, model params, RAG storage
Decentralized object storage with programmable access control
Ethereum Mainnet
High-security settlement for enterprise/RWA agents
Maximum decentralization and institutional trust
Base (Coinbase)
Consumer agent onboarding — largest L2 developer ecosystem
x402 native support, Coinbase distribution
Arbitrum One
DeFi-native agents — trading, yield, derivatives
Dominant DeFi L2, deep liquidity
Optimism / Superchain
OP Stack chains — interoperability for agent networks
Superchain messaging for cross-L2 agent coordination
Polygon PoS / zkEVM
High-volume agent workloads, MATIC-native ecosystems
Mass adoption chains, enterprise partnerships
Avalanche C-Chain
Subnet deployment for enterprise agent networks
Custom subnet capability for permissioned agent environments
 

SECTION 02  PROBLEM STATEMENT
The Agentic Trust Gap — defined precisely
 
The Four Unsolved Problems

 
Problem 1: The Identity Crisis
Every AI agent running today has no persistent, portable identity. It exists as an API key, an account on a proprietary platform, or a session variable. When the platform goes down — the agent disappears. When an agent moves between platforms, its entire track record vanishes. There is no equivalent of a professional credential that travels with the agent across environments.
Consequence
Agents cannot establish trust. Clients hiring an agent have no way to verify its claimed capabilities or historical reliability. Every engagement starts from zero trust, making high-stakes applications — like autonomous RWA management or financial execution — impossible.
 
Problem 2: The Reputation Vacuum
Even where agents do operate over time (within a single proprietary platform), reputation systems are opaque, subjective, and easily gamed. A provider can manipulate ratings. Users can leave unfair reviews. There is no mathematical, on-chain, tamper-proof measure of whether an agent actually delivered what it promised, at what quality, and at what latency.
In financial contexts, this is not merely inconvenient — it is a structural blocker. You cannot automate treasury management with an agent whose performance claims cannot be verified.
 
Problem 3: The Verification Void
AI models are probabilistic. The same prompt can produce different outputs. When an AI agent claims to have completed a task, there is currently no cryptographic mechanism to verify: (a) that the agent actually executed the stated logic, (b) that the output was produced by the claimed model, or (c) that the result wasn't fabricated post-hoc. This hallucination risk — an agent billing for work it didn't do or did incorrectly — makes autonomous, high-value agentic commerce impossible.
 
Problem 4: The Settlement Architecture Mismatch
Current payment infrastructure for agents is fundamentally broken in both directions: prepay models expose clients to total loss if the agent fails; postpay models expose agents to non-payment. Neither model supports the granular, task-level, proof-conditional payment structure that autonomous agent commerce requires. Furthermore, no existing protocol supports agent-to-agent payments — an orchestrator agent hiring and paying a specialist sub-agent programmatically.
 

SECTION 03  PROTOCOL ARCHITECTURE
The full technical design of the ARES DeOS
 
Architecture Philosophy

ARES is not a product — it is a protocol. It defines the standards, interfaces, and incentive structures that enable an open ecosystem of agents, clients, validators, and infrastructure providers to operate without central coordination. Any developer can build on ARES. Any agent can join the network. Any chain can host ARES contracts.
 
The Tri-Layer Protocol Stack

 
BSC / Ethereum
TRUST LAYER
• AgentID Registry (ERC-8004)
• Confidence Score (CS) storage
• ARES DAO governance
• High-value escrow settlement
• Staking & slashing contracts
• Cross-chain state anchor
 
opBNB / L2 Chains
EXECUTION LAYER
• AI-to-AI microtransactions
• Escrow contract execution
• x402 micropayment settlement
• TEE attestation verification
• Heartbeat / liveness proofs
• Task queue management
 
BNB Greenfield / IPFS
PERSISTENCE LAYER
• Agent model parameters
• RAG memory storage
• Interaction log archive
• Proof-of-Prompt (PoP) hashes
• DataDAO structured datasets
• Training data provenance
 
 
Core Protocol Components

 
Component 1: Identity Registry (ERC-8004)
The Identity Registry is the ARES phone book. Every agent that joins the network is assigned an AgentID — a unique ERC-721 token minted on the Trust Layer chain (BSC or Ethereum). This token is the agent's cryptographic passport.
 
AgentID Token URI Schema
Field
Type
Description
Required
agentId
bytes32
Unique identifier derived from creation tx hash + owner address
Yes
name
string
Human-readable agent name
Yes
version
string
Semantic version of the agent's model/logic (e.g. '2.1.0')
Yes
capabilities
string[]
Array of capability tags (e.g. ['code-generation', 'financial-analysis', 'image-recognition'])
Yes
mcpEndpoint
string
MCP server URL for task request routing
Yes
a2aEndpoint
string
Agent-to-Agent messaging endpoint
Optional
teeProvider
string
TEE hardware provider (e.g. 'Intel SGX', 'AWS Nitro', 'AMD SEV')
Yes
teePublicKey
bytes
TEE enclave public key for attestation verification
Yes
minimumBond
uint256
Minimum ARES token stake required to hire this agent
Yes
ratePerTask
uint256
Base rate in stablecoin (USDC) for standard task units
Yes
owner
address
Wallet address of the agent operator/developer
Yes
createdAt
uint64
Block timestamp of registration
Auto
confidenceScore
uint256
Current CS score (updated by reputation contract)
Auto
 
Component 2: Non-Fungible Agent (BAP-578)
While ERC-8004 handles static identity, BAP-578 makes agents into evolvable, tradeable assets. A BAP-578 agent token carries persistent state modules — memory pointers to Greenfield, accumulated CS score, Proof-of-Prompt (PoP) Merkle roots, and performance analytics.
 
Proof-of-Prompt (PoP) Hash Construction: Every task execution generates a PoP hash stored in the BAP-578 contract:
PoP Hash Formula
PoP_Hash = keccak256(User_Prompt_Hash ‖ Agent_Response_Hash ‖ Block_Timestamp ‖ AgentID ‖ TEE_DCAP_Quote_Hash) PoP hashes are aggregated into a Merkle root every N tasks. The root is stored on-chain; all individual hashes are archived on Greenfield. A buyer or client can request a Merkle proof of any historical task execution.
 
Why This Matters: Before hiring an agent for a $50,000 RWA management task, a client can audit the full career history of that agent: every task it has ever performed, the quality attestations, the latency, and the on-chain verification status. This is the equivalent of a fully auditable professional resume that cannot be forged.
 
Component 3: Escrow & Settlement Engine
The Escrow Contract is the heart of trustless agent commerce. It enforces the Pay-for-Proof model: a client agent locks funds at task start, and the contract releases them only when a valid cryptographic proof of work is received.
 
Task Lifecycle State Machine
State
Trigger
On-Chain Action
Who Can Advance
OPEN
Client creates task + deposits escrow
Escrow.sol minted with task hash + locked funds
Client Agent
ASSIGNED
Service Agent accepts task via MCP
Agent's AgentID recorded; challenge window starts
Service Agent
EXECUTING
Service Agent begins work inside TEE
TEE liveness heartbeat emitted every N seconds
Service Agent TEE
PROOF_SUBMITTED
TEE generates DCAP attestation quote over task result
Proof hash submitted to Escrow.sol verifier
Service Agent TEE
VERIFYING
Verifier contract checks proof validity
ZK spot-check potentially triggered via VRF
Protocol / Watchers
SETTLED
Proof verified; policy conditions met
Funds released to Service Agent minus protocol fee
Escrow Contract
DISPUTED
Watcher challenges proof during dispute window
Funds frozen; arbitration initiated via DAO
Watcher Network
REFUNDED
Proof invalid / timeout exceeded
Full escrow returned to Client Agent
Escrow Contract
 
Escrow Contract: Key Parameters
Parameter
Description
Default / Range
escrowToken
ERC-20 token used for payment (USDC preferred)
USDC, USDT, DAI — allowlisted
taskHash
keccak256 of task specification (prompt, constraints, deadline)
32 bytes — immutable at creation
maxPayout
Maximum amount released on full task completion
Set by client at escrow creation
milestones
Array of partial payout triggers (for multi-step tasks)
Optional — supports up to 10 milestones
disputeWindow
Time after proof submission during which watchers can challenge
24 hours — configurable by client
executionDeadline
Time limit for Service Agent to submit proof
Set by client — default 1 hour
slashBond
Amount of Service Agent's staked tokens slashed on failed delivery
10% of task value, min 100 ARES
qualityThreshold
Minimum CS score required for the Service Agent to accept task
Configurable by client — default CS > 500
teeRequired
Whether execution must be in a registered TEE
true for financial tasks, configurable
 
Component 4: Confidence Score (CS) Engine
The CS Engine calculates and maintains each agent's Confidence Score — a mathematical, tamper-proof measure of trustworthiness derived entirely from on-chain execution history. It is not a star rating. It is a verifiable credential.
 
CS Formula
CS = ( Σ(Vᵢ × Qᵢ) + B ) / ( L × E ) Where: • V = Economic value of settled transactions (sum over all tasks) • Q = Quality attestation score from Validation Registry (0.0–1.0 per task) • B = Staked slashing collateral (Bond) — higher stake = higher base CS • L = Average response latency (normalized; lower = better) • E = Historical error/hallucination rate (verified on-chain; lower = better)
 
CS Update Rules
• CS is recalculated after every settled task within one block of settlement.
• CS is immutable for past periods — an agent cannot retroactively alter its history.
• Slashing events reduce B immediately, causing a sharp CS drop visible to all clients.
• CS is stored in the AgentID token's metadata and queryable via the CS Oracle.
• CS is chain-specific (per-chain track record) and global (cross-chain aggregate), both maintained.
 
CS Tier System
CS Tier
Score Range
Capabilities Unlocked
Collateral Required
UNRATED
0–99
Can only accept tasks with escrow < $10. No RWA tasks.
100 ARES minimum
APPRENTICE
100–499
General tasks up to $500 escrow. Basic financial tasks.
500 ARES
JOURNEYMAN
500–1,499
Complex multi-step tasks up to $10,000. DeFi execution.
2,000 ARES
EXPERT
1,500–4,999
Enterprise tasks up to $100,000. RWA management eligible.
10,000 ARES
MASTER
5,000–14,999
Unlimited task value. Can operate as orchestrator for sub-agents.
50,000 ARES
SOVEREIGN
15,000+
Governance voting rights. Can propose protocol upgrades. Priority routing.
200,000 ARES
 
Component 5: TEE Execution Environment
For tasks involving financial operations, sensitive data, or high-value outcomes, ARES mandates execution within a hardware-based Trusted Execution Environment (TEE). The TEE serves as the agent's tamper-proof 'body' — code that runs there cannot be inspected, modified, or interrupted even by the machine operator.
 
Supported TEE Providers
Security Properties
Intel TDX (Trust Domain Extensions)
Hardware-enforced memory isolation
AMD SEV-SNP (Secure Encrypted Virtualization)
Remote attestation via DCAP quote
AWS Nitro Enclaves
Private key generation inside enclave
Google Confidential VMs
Policy Engine for financial safety constraints
Azure Confidential Computing
Verifiable code hash — proves which code ran
Phala Network (decentralized TEE cloud)
Side-channel attack mitigation via ZK spot-checks
 
The Policy Engine: The financial safety layer inside every ARES TEE. Before the agent's private key signs any transaction, the Policy Engine validates the action against operator-defined constraints:
• Daily Outflow Limit: Maximum USDC/token amount transferable per 24h window.
• Token Allowlist: Only pre-approved token contracts can be interacted with.
• Recipient Allowlist: Optional — restrict which addresses can receive funds.
• Max Single Transaction: Hard cap on any single transfer value.
• Time Lock: No transactions outside defined operating hours.
• Multi-Approval Threshold: For amounts above a threshold, require N-of-M co-signers.
 
Component 6: Proof-of-Agentic-Attestation (PoAA)
PoAA is ARES's consensus mechanism for intelligence tasks. It doesn't reach consensus on financial ledger states (that's the underlying blockchain's job) — it reaches consensus on Inference Correctness: did this agent actually execute this task correctly?
 
PoAA Verification Flow
1. Service Agent completes task inside TEE.
2. TEE generates DCAP attestation quote: H(task_inputs ‖ task_outputs ‖ model_hash ‖ timestamp ‖ AgentID).
3. Quote submitted to on-chain PoAA Verifier contract.
4. Verifier checks: (a) DCAP signature is valid, (b) code hash matches registered agent version, (c) timestamp is within execution window.
5. VRF (Verifiable Random Function) triggers random ZK Spot-Check with probability p = 0.05 (5% of all tasks).
6. On spot-check: Agent must provide a zk-SNARK proving re-execution produces the same output. Watcher network can independently verify.
7. If all checks pass: SETTLED state. If any check fails: DISPUTED state, watcher network adjudicates.
 
The Discovery Layer: Agent Marketplace

The ARES Discovery Layer is an on-chain, open protocol for agents to find each other based on verifiable credentials. It is not a centralized marketplace — it is a queryable global registry.
 
Discovery Query Parameters
Query Parameter
Type
Description
capability
string[]
Filter agents by capability tags (AND/OR logic)
minCS
uint256
Minimum Confidence Score required
maxRate
uint256
Maximum rate-per-task in USDC
teeRequired
bool
Only return TEE-capable agents
chain
uint256[]
Chains the agent must be deployed on
maxLatency
uint256
Maximum average response time in milliseconds
specialization
string
Domain specialization (e.g. 'defi', 'code', 'rwa', 'image')
availableNow
bool
Filter by current availability (heartbeat within last 60s)
 

SECTION 04  SMART CONTRACT SPECIFICATIONS
Every contract, function, and event — fully specified
 
Contract Architecture

Contract
Chain Deployment
Standard
Primary Purpose
AgentRegistry.sol
BSC + Ethereum + all EVM
ERC-8004 (ERC-721 ext.)
Agent identity minting, capability registry, CS score storage
NFAgent.sol
BSC + Ethereum
BAP-578 (ERC-721 ext.)
Evolvable agent asset with PoP Merkle root management
EscrowFactory.sol
opBNB + all L2 chains
Custom
Factory for deploying per-task Escrow contracts
TaskEscrow.sol
opBNB + all L2 chains
Custom
Per-task escrow with state machine and proof verification
ConfidenceOracle.sol
BSC + Ethereum
Custom
CS score calculation, storage, and cross-chain oracle
PoAAVerifier.sol
opBNB + all L2 chains
Custom (EIP-712)
DCAP attestation quote verification on-chain
ZKSpotChecker.sol
opBNB + all L2 chains
Groth16 / Plonk
ZK proof verification for random inference spot-checks
StakingVault.sol
BSC + Ethereum
Custom (ERC-4626 ext.)
ARES token staking, bond management, slashing execution
ARESToken.sol
BSC (canonical) + bridges
ERC-20 + EIP-2612
Protocol governance and staking token
ARESDao.sol
BSC
OpenZeppelin Governor
Protocol governance — upgrades, parameters, dispute resolution
DataDAORegistry.sol
BNB Greenfield
Custom
Agent data marketplace — structured dataset listings and purchases
CrossChainBridge.sol
All chains
LayerZero OApp / CCIP
Cross-chain AgentID mirroring and CS score synchronization
FeeCollector.sol
BSC + all chains
Custom
0.05% settlement fee collection and DAO distribution
 
AgentRegistry.sol — Detailed Specification

Core Functions
Function
Parameters
Access
Description
registerAgent()
AgentMetadata calldata meta, uint256 bondAmount
Public
Mints an ERC-8004 AgentID token. Requires minimum bond deposited to StakingVault.
updateCapabilities()
uint256 agentId, string[] calldata caps
Agent owner
Updates capability tags. Emits CapabilitiesUpdated event.
updateEndpoints()
uint256 agentId, string mcp, string a2a
Agent owner
Updates MCP/A2A communication endpoints.
updateTEECredentials()
uint256 agentId, bytes teeKey, string teeProvider
Agent owner
Updates TEE public key after hardware refresh.
deactivateAgent()
uint256 agentId
Agent owner or DAO
Marks agent as inactive. Stops new task assignments.
queryAgents()
DiscoveryQuery calldata query
Public view
Returns filtered list of active agents matching query parameters.
getCS()
uint256 agentId
Public view
Returns current Confidence Score from ConfidenceOracle.
getAgent()
uint256 agentId
Public view
Returns full agent metadata struct.
 
TaskEscrow.sol — Detailed Specification

Core Functions
Function
Parameters
Access
Description
createTask()
TaskSpec calldata spec, uint256 amount
Client Agent
Locks funds in escrow; creates task record; emits TaskCreated.
acceptTask()
bytes32 taskId, uint256 agentId
Service Agent
Assigns agent to task; starts execution deadline timer.
submitHeartbeat()
bytes32 taskId, bytes teeSignature
Service Agent TEE
Proves liveness during long-running tasks. Resets timeout timer.
submitProof()
bytes32 taskId, bytes dcapQuote, bytes32 resultHash
Service Agent TEE
Submits TEE attestation. Triggers verification pipeline.
claimSettlement()
bytes32 taskId
Service Agent
After successful verification and dispute window: releases funds.
raiseDispute()
bytes32 taskId, bytes evidence
Watcher Network
Freezes funds; initiates DAO arbitration.
claimRefund()
bytes32 taskId
Client Agent
If deadline exceeded or proof invalid: returns full escrow.
getMilestoneStatus()
bytes32 taskId
Public view
Returns status of each milestone for multi-step tasks.
 
ConfidenceOracle.sol — CS Update Logic

The ConfidenceOracle is called by EscrowFactory after every settlement. It recalculates and stores the updated CS for the settled agent.
 
CS Update Function Pseudocode
updateCS(agentId, taskValue, qualityAttestation, latencyMs, errorFlag)
Retrieve current agent stats: cumulative V, Q, B, L_avg, E_rate Update cumulative V: V_new = V_current + taskValue * qualityAttestation Update cumulative Q: Q_new = (Q_current * n + qualityAttestation) / (n+1)  // rolling average Update L_avg: L_new = (L_current * n + latencyMs) / (n+1)  // rolling average Update E_rate: E_new = (E_current * n + errorFlag) / (n+1)  // rolling error rate (0.0 or 1.0 per task) B = StakingVault.getBondAmount(agentId) CS_new = (V_new + B) / max(L_new * E_new, MIN_DENOMINATOR) Store CS_new in mapping(agentId => CS) and in AgentRegistry token metadata Emit CSUpdated(agentId, CS_new, block.timestamp)
 
Events — Complete Event Log

Contract
Event
Indexed Parameters
Description
AgentRegistry
AgentRegistered(agentId, owner, capabilities)
agentId, owner
New agent minted to network
AgentRegistry
AgentDeactivated(agentId, timestamp)
agentId
Agent removed from active pool
AgentRegistry
CapabilitiesUpdated(agentId, newCaps[])
agentId
Agent capability list modified
TaskEscrow
TaskCreated(taskId, clientAgentId, amount, deadline)
taskId, clientAgentId
New task escrow created
TaskEscrow
TaskAccepted(taskId, serviceAgentId)
taskId, serviceAgentId
Service agent assigned to task
TaskEscrow
ProofSubmitted(taskId, proofHash, timestamp)
taskId
TEE attestation quote submitted
TaskEscrow
TaskSettled(taskId, serviceAgentId, amount, csUpdateTxHash)
taskId, serviceAgentId
Successful task completion and payment
TaskEscrow
TaskDisputed(taskId, watcherId, evidenceHash)
taskId
Watcher raised challenge
TaskEscrow
TaskRefunded(taskId, clientAgentId, amount)
taskId, clientAgentId
Client refunded after failure
ConfidenceOracle
CSUpdated(agentId, newCS, oldCS, taskId)
agentId
Confidence Score recalculated
StakingVault
BondSlashed(agentId, amount, reason)
agentId
Agent penalized for failure
FeeCollector
FeeCollected(taskId, amount, chain)
chain
Protocol fee captured
 

SECTION 05  MULTI-CHAIN DEPLOYMENT STRATEGY
How ARES operates across every EVM network
 
Deployment Philosophy: Universal Registry, Local Execution

ARES uses a hub-and-spoke architecture for multi-chain operation. The global registry (AgentID, CS scores, governance) lives on the hub chains (BSC + Ethereum). Task execution, escrow, and micropayments happen on whichever chain is optimal for the specific task. Cross-chain message passing keeps the state consistent.
 
Key Principle
An agent registers once on the hub chain and is universally discoverable and operable from any EVM chain. A client on Base can hire an agent whose AgentID is on BSC, execute the task on opBNB, and settle payment in USDC — all in one coordinated flow.
 
Chain-Specific Deployment Matrix

Chain
Contracts Deployed
Native Asset
Primary Use Case
BNB Smart Chain
AgentRegistry, NFAgent, ConfidenceOracle, StakingVault, ARESToken, ARESDao, FeeCollector, CrossChainBridge
BNB / USDT
Hub chain — identity + governance + high-value settlement
opBNB
EscrowFactory, TaskEscrow, PoAAVerifier, ZKSpotChecker, CrossChainBridge
BNB (bridged)
Primary execution — 20k TPS for AI-to-AI microtransactions
Ethereum Mainnet
AgentRegistry (mirror), StakingVault (ETH), CrossChainBridge
ETH / USDC
Institutional agents — maximum security settlement
Base
EscrowFactory, TaskEscrow, CrossChainBridge, AgentRegistry (mirror)
ETH / USDC
Consumer agent onboarding — x402 native, Coinbase ecosystem
Arbitrum One
EscrowFactory, TaskEscrow, CrossChainBridge, AgentRegistry (mirror)
ETH / USDC
DeFi-native agents — Uniswap, Aave, GMX integrations
Optimism
EscrowFactory, TaskEscrow, CrossChainBridge, AgentRegistry (mirror)
ETH / USDC
OP Stack interoperability — Superchain agent networks
Polygon PoS
EscrowFactory, TaskEscrow, CrossChainBridge, AgentRegistry (mirror)
MATIC / USDC
High-volume consumer tasks — lowest fee tier
Avalanche C-Chain
EscrowFactory, TaskEscrow, CrossChainBridge
AVAX / USDC
Enterprise subnet deployments for private agent networks
 
Cross-Chain Synchronization

AgentID Mirroring
When an agent registers on BSC (hub), the CrossChainBridge.sol automatically propagates a lightweight mirror record to all supported chains via LayerZero OApp or Chainlink CCIP. Mirror records contain: AgentID, capabilities, teeProvider, ratePerTask, and current CS score.
CS score updates on the hub chain are propagated to mirrors every 10 settlements or every 6 hours (whichever comes first). Clients on any chain always see a CS score that is at most 6 hours stale.
 
Task Settlement Cross-Chain Flow
8. Client on Base creates task + deposits USDC into TaskEscrow.sol on Base.
9. Service Agent (registered on BSC hub) detects task via Discovery Layer.
10. Agent accepts task on Base — cross-chain message sent to BSC hub to freeze that agent's bond.
11. Agent executes task in TEE, submits DCAP proof to PoAAVerifier.sol on Base.
12. On verification: Base Escrow releases USDC to agent. Cross-chain message sent to BSC hub.
13. BSC hub: CS Oracle updated, FeeCollector receives 0.05% of task value, bond unfrozen.
 
Gasless Onboarding (Megafuel / ERC-4337 Paymaster)

For consumer-facing agents and new agent developers, ARES integrates with gasless onboarding infrastructure on every supported chain:
• BNB Chain: Megafuel Paymaster sponsors registration transactions for new agents below CS tier JOURNEYMAN.
• EVM L2 chains: ERC-4337 EntryPoint with ARES-funded Paymaster for the first 5 transactions of any new agent.
• Session keys: Agents operating via TEE use ERC-7579 smart account session keys to batch multiple task transactions without per-tx signing.
 

SECTION 06  DEVELOPER SDKS & INTEGRATION GUIDE
Everything a developer needs to build on ARES
 
SDK Philosophy
The ARES SDK abstracts all cryptographic and cross-chain complexity. A developer should be able to register an agent, list it in the discovery registry, and integrate TEE-verified task execution in under 2 hours. The SDK feels like building with Stripe — not with Solidity.
 
SDK Package Overview

Package
Install
Purpose
@ares/core
npm install @ares/core
Chain configs, ABI imports, type definitions, contract address registry for all chains
@ares/agent-sdk
npm install @ares/agent-sdk
Agent registration, capability declaration, TEE integration, task execution flow
@ares/client-sdk
npm install @ares/client-sdk
Client-side task creation, agent discovery, escrow management, proof verification
@ares/tee-runtime
npm install @ares/tee-runtime
TEE enclave wrapper for Intel SGX, AWS Nitro, Phala Network
@ares/react
npm install @ares/react
React components for agent marketplace UIs, CS score displays, task status widgets
@ares/watcher
npm install @ares/watcher
Watcher node client for joining the verification/dispute network and earning fees
 
@ares/agent-sdk — Core Agent Flows

Agent Registration
import { ARESAgent } from '@ares/agent-sdk';
const agent = new ARESAgent({ chain: 'bsc', privateKey: process.env.AGENT_KEY, teeProvider: 'phala' });
const agentId = await agent.register({ name: 'DataAnalysisAgent-v2', capabilities: ['data-analysis', 'financial-reporting', 'sql-query'], ratePerTask: '5.00', // USDC minBond: '1000', // ARES tokens teePublicKey: agent.getTEEPublicKey() });
 
Task Acceptance & Execution Flow
agent.onTaskAssigned(async (task) => { const result = await agent.executeInTEE(async (tee) => { const output = await myAgentLogic(task.prompt); const proof = tee.generateDCAPQuote(task.id, output); return { output, proof }; }); await agent.submitProof(task.id, result.proof, result.output); });
 
@ares/client-sdk — Client Agent Flows

Agent Discovery & Task Creation
import { ARESClient } from '@ares/client-sdk';
const client = new ARESClient({ chain: 'base', walletClient });
// Discover agents const agents = await client.discover({ capabilities: ['financial-analysis', 'rwa-management'], minCS: 1500, teeRequired: true, maxRate: '50.00' });
// Create task with escrow const taskId = await client.createTask({ agentId: agents[0].id, prompt: 'Analyze this RWA portfolio and recommend rebalancing actions.', escrowAmount: '25.00', deadline: 3600, // 1 hour disputeWindow: 86400 // 24 hours });
 
@ares/react — UI Components

Component
Props
Description
<AgentDiscovery />
capabilities, minCS, onSelect, theme
Full-featured agent marketplace UI with search, filter, and CS score display
<AgentCard />
agentId, showHistory, onHire
Individual agent profile card with CS score, capability badges, and PoP history
<TaskStatus />
taskId, chain
Real-time task state machine display — updates via contract event subscription
<CSScoreBadge />
agentId, size
Compact CS score display with tier color coding
<EscrowWidget />
taskId, onSettle, onDispute
Escrow management UI showing amounts, milestones, and dispute controls
<AgentAnalytics />
agentId, timeRange
Performance dashboard — CS trend, task history, earnings, error rate
 
@ares/tee-runtime — TEE Integration

Supported TEE Backends
TEE Provider
Integration Method
Intel SGX / TDX
Gramine LibOS + DCAP attestation library
AMD SEV-SNP
SVSM + SNP attestation report
AWS Nitro Enclaves
AWS NSM API + Nitro attestation document
Google Confidential VMs
GCP Confidential Computing API
Phala Network (decentralized)
Phala PhatContract SDK + RA report
 

SECTION 07  DETAILED PRODUCT REQUIREMENTS
Feature specifications with acceptance criteria
 
P0 — Core Protocol (MVP Launch Blockers)

Feature ID
Feature
Acceptance Criteria
ARES-001
Agent Registration (ERC-8004)
Developer can register an agent on BSC testnet via SDK in < 5 minutes. AgentID NFT minted with correct metadata. Agent queryable via discovery API within 1 block.
ARES-002
Task Escrow Creation
Client can create task with USDC escrow on any supported chain. Funds locked atomically in TaskEscrow.sol. TaskCreated event emitted.
ARES-003
Task Assignment
Service agent can detect and accept open tasks via MCP or polling. TaskAccepted event emitted. Bond frozen in StakingVault.
ARES-004
TEE Proof Submission
Agent running in TEE can generate DCAP attestation quote and submit to PoAAVerifier.sol. Proof accepted/rejected within 1 block on L2.
ARES-005
Escrow Settlement
On valid proof + dispute window expiry: USDC released to service agent minus 0.05% protocol fee. TaskSettled event emitted. CS Oracle updated.
ARES-006
Escrow Refund
On deadline exceeded or invalid proof: full USDC escrow returned to client. TaskRefunded event emitted. Service agent bond slashed.
ARES-007
CS Score Calculation
CS recalculated within 1 block of every settlement. Score accessible via getCS() view function. CS tier updated automatically.
ARES-008
Agent Discovery Query
queryAgents() returns relevant, active agents filtered by all supported parameters. Response time < 500ms on indexed subgraph.
ARES-009
Watcher Challenge
Watcher can submit dispute evidence within dispute window. Funds frozen immediately. ARESDao notified for arbitration.
ARES-010
ARES Token Staking
Agent developer can stake ARES tokens as bond in StakingVault.sol. Bond immediately reflected in CS score calculation.
 
P1 — High Priority Post-MVP

Feature ID
Feature
Acceptance Criteria
ARES-011
Multi-Chain Registration
Agent registered on BSC automatically mirrored to Base, Arbitrum, Optimism via CrossChainBridge within 10 minutes.
ARES-012
ZK Spot-Check (PoAA)
VRF triggers spot-check with p=5% of tasks. Agent must provide Groth16 zk-SNARK within challenge window. Watcher network verifies independently.
ARES-013
PoP Merkle Root (BAP-578)
Every 100 tasks, PoP hashes aggregated into Merkle root stored in NFAgent.sol. Any historical task provable via Merkle proof.
ARES-014
Multi-Milestone Escrow
Task can have up to 10 milestones with independent proofs and partial payments. Each milestone settles independently.
ARES-015
x402 HTTP Payments
Service agent implements x402 endpoint. AI agent clients can discover pricing via HTTP 402 response and pay programmatically.
ARES-016
DataDAO on Greenfield
Agent can publish structured dataset to DataDAORegistry.sol. Other agents/humans can purchase access. Revenue split: 90% creator, 10% protocol.
ARES-017
Gasless Agent Onboarding
New agents below JOURNEYMAN tier can register with zero gas cost via Megafuel (BSC) or ERC-4337 Paymaster (other chains).
ARES-018
CS Score Cross-Chain Sync
CS updates on hub chain propagated to all mirror chains within 6 hours or 10 settlements. Stale score clearly indicated in discovery results.
 
P2 — Future Roadmap

Feature ID
Feature
Description
ARES-019
Agent-to-Agent Hiring (Orchestrator)
Master-tier agents can hire sub-agents and spawn nested escrow contracts. Full multi-agent workflow settlement.
ARES-020
RWA Agent Certification
Specialized compliance pathway for agents managing Real-World Assets. Requires EXPERT+ CS tier + zkKYC attestation.
ARES-021
Agent Lending Market
High-CS agents can collateralize their AgentID/BAP-578 token to borrow operational capital.
ARES-022
Agent Insurance Pool
Community-funded insurance pool for task failures beyond agent control (infrastructure outage etc.).
ARES-023
On-Chain Agent Evolution
BAP-578 agents can publish model version upgrades. Clients can pin to specific versions or auto-upgrade.
ARES-024
Agent DAO Governance
SOVEREIGN-tier agents gain direct voting rights in ARESDao on protocol parameter upgrades.
 

SECTION 08  TOKENOMICS: THE ARES TOKEN ECONOMY
Incentive design for the agentic GDP
 
ARES Token — Core Properties

Token Name: ARES Protocol Token
Ticker: ARES
Standard: ERC-20 (BEP-20 on BSC canonical) + cross-chain bridges
Total Supply: 1,000,000,000 ARES (1 Billion, fixed supply)
Decimals: 18
Primary Chain: BNB Smart Chain (canonical) — bridged to all EVM chains
Utility: Staking (agent bonds), governance, protocol fee discounts, watcher rewards
 
Token Distribution

Allocation
% of Supply
Tokens
Vesting
Protocol Treasury / DAO
30%
300,000,000
Controlled by ARESDao governance — no cliff
Ecosystem & Developer Grants
20%
200,000,000
Released over 4 years via milestone-gated grants
Team & Advisors
15%
150,000,000
1-year cliff, 3-year linear vesting
Early Investors / Seed
10%
100,000,000
6-month cliff, 2-year linear vesting
Liquidity Provision
10%
100,000,000
Unlocked at TGE — seeded to DEX liquidity pools
Staking Rewards Emissions
10%
100,000,000
Emitted over 5 years to stakers and watchers
Community / Hackathon / Airdrops
5%
50,000,000
Discretionary — DAO-approved distributions
 
Token Utility & Demand Drivers

Staking (Bond) — Primary Demand Driver
Every service agent must stake ARES tokens as a slashable bond. The bond amount directly impacts the agent's CS score (B factor) — more stake = higher base CS = access to higher-value tasks. This creates strong buy-and-hold demand from all serious agent operators.
CS Tier
Required ARES Bond
USD Value at $0.10
Max Task Value
UNRATED
100 ARES
~$10
$10
APPRENTICE
500 ARES
~$50
$500
JOURNEYMAN
2,000 ARES
~$200
$10,000
EXPERT
10,000 ARES
~$1,000
$100,000
MASTER
50,000 ARES
~$5,000
Unlimited
SOVEREIGN
200,000 ARES
~$20,000
Unlimited + governance rights
 
Protocol Fee Revenue
The ARES Protocol captures a 0.05% settlement fee on every task settled via TaskEscrow.sol. This fee is collected in the stablecoin of the task (USDC) and routed to FeeCollector.sol. Distribution:
• 60% to ARESDao Treasury — for infrastructure, grants, and development.
• 30% to Staking Rewards Pool — distributed to active ARES stakers proportionally.
• 10% to Watcher Network — distributed to watchers who actively verified tasks in the period.
 
Revenue Projection (Conservative)
Metric
Year 1
Year 2
Year 3
Active Agents on Network
500
5,000
50,000
Avg Tasks Per Agent Per Day
10
25
50
Avg Task Value (USDC)
$5
$10
$15
Daily Task Volume (USDC)
$25,000
$1,250,000
$37,500,000
Annual Task Volume (USDC)
$9.1M
$456M
$13.7B
Protocol Revenue (0.05%)
$4,550
$228,000
$6.85M
 
Slashing — Deflationary Pressure
When an agent is slashed (failed delivery, invalid proof, timeout), a portion of their staked ARES is burned permanently. This creates deflationary pressure on token supply over time as the network matures and high-CS agents continuously demonstrate reliability to avoid slashing.
 

SECTION 09  RISK ASSESSMENT & MITIGATION
 
 
Risk ID
Risk Category
Risk Description
Severity
Probability
Mitigation
RISK-001
Smart Contract
Escrow contract exploit — attacker drains locked USDC via reentrancy or logic flaw
Critical
Medium
Formal verification + 2 independent audits. ReentrancyGuard on all fund-handling functions. Invariant testing with Foundry.
RISK-002
TEE Security
TEE side-channel attack — attacker extracts agent private key from enclave memory
Critical
Low
ZK Spot-Checks via VRF make attacks economically unviable. Regular TEE firmware updates. Support for multiple TEE providers so a single vendor compromise doesn't collapse the network.
RISK-003
CS Manipulation
Sybil attack — operator creates thousands of fake agents to inflate each other's CS scores
High
Medium
Minimum ARES bond required for every agent (cost to create Sybil). CS formula includes slashable bond — Sybil attack requires real capital at risk. Watcher network monitors for suspicious correlated activity.
RISK-004
Cross-Chain
Bridge exploit or message replay attack on CrossChainBridge.sol
High
Low-Medium
Use message-passing-only bridges (no liquidity). LayerZero OApp security model. Nonce-based replay protection. Dual-provider redundancy (LayerZero + CCIP).
RISK-005
Oracle Risk
CS Oracle manipulation — attacker feeds false quality attestations to inflate CS
High
Medium
Quality attestations require TEE signatures. Attestations are economically bonded — false attestations result in slashing. Multiple independent validators for quality scoring.
RISK-006
Regulatory
Autonomous AI agent making financial decisions classified as unlicensed financial advisor
High
Medium
RWA agent certification requires zkKYC. Protocol is infrastructure — doesn't give financial advice. DAO-governed policy for RWA task types. Geo-restriction modules via ZK credentials.
RISK-007
Adoption
Developer friction — TEE setup complexity prevents agent developer adoption
High
High
Phala Network integration provides fully managed decentralized TEE cloud. Docker-based TEE runtime abstracts hardware. Testnet with simulated TEE for development (no hardware required in dev).
RISK-008
Hallucination
AI agent generates harmful or incorrect output despite valid TEE proof (proof proves execution but not correctness)
Medium
High
PoAA's quality attestation system penalizes incorrect outputs via CS degradation. Dispute window allows clients to challenge outputs. Task spec can encode verifiable output constraints.
RISK-009
Token
ARES token price crash reduces bonding incentives — agents abandon network
Medium
Medium
Bond denominated in ARES tokens but task payments in stablecoins. ARES price floor supported by protocol revenue buybacks. DAO can adjust bond requirements during market stress.
 

SECTION 10  GO-TO-MARKET STRATEGY
How ARES wins the agent economy
 
Phase 1: Win the Hackathon, Build the Community

Hackathon Strategy
The Binance hackathon is not just a competition — it is the first public launch of the ARES Protocol. The submission must demonstrate a live end-to-end flow: an AI agent registered on BSC testnet, accepting a task via MCP, executing in a simulated TEE, and settling payment via escrow. This live demo is the go-to-market event.
 
Hackathon Deliverables (minimum for submission):
• AgentRegistry.sol deployed on BSC testnet with 3 demo agents registered.
• TaskEscrow.sol deployed on opBNB testnet with working create → accept → prove → settle flow.
• Demo agent running in Phala Network (managed TEE cloud) — no hardware required.
• @ares/client-sdk with working agent.discover() and client.createTask() functions.
• React demo app showing: agent marketplace, task creation, real-time escrow status, CS score display.
• Live demo video showing an AI agent (LangChain-based) autonomously completing a paid task.
 
Phase 2: Ecosystem Seed (Months 1–6)

Target Segment A: AI Developer Tools
AI developers building agents with LangChain, AutoGen, CrewAI are the protocol's first and most important adopters. These developers are already building agents that need to consume paid APIs — ARES gives them the payment and trust infrastructure.
Outreach Tactics
Value Message
LangChain Discord + GitHub sponsorship
Earn revenue from your agent automatically
AutoGen community contributions
Build trust with cryptographic proof of work
CrewAI ecosystem grants
Access 50,000+ tasks/day from day one
HuggingFace developer program
No credit card, no KYC — just a wallet
AI hackathon sponsorships
Portable reputation that travels with your agent
 
Target Segment B: DeFi Protocols Needing Autonomous Agents
DeFi protocols — Aave, Uniswap, Curve, GMX — all need autonomous agents for liquidation management, vault rebalancing, arbitrage, and governance execution. ARES provides the trust infrastructure to outsource these functions to a competitive market of verified agents.
 
Target Segment C: Enterprise RWA Platforms
Real-World Asset tokenization platforms (Centrifuge, Maple Finance, TrueFi) need autonomous agents for monitoring, reporting, and compliance. ARES's RWA Agent Certification pathway and TEE-verified execution makes this viable for the first time.
 
Protocol Revenue & Business Model

Revenue Stream
How It Works
0.05% settlement fee on all tasks
Automatic, on-chain, universal
Managed Facilitator Node (hosted)
Monthly SaaS for teams that don't want to self-host
ARES Enterprise (private agent networks)
Custom subnet deployment on Avalanche or BSC
DataDAO marketplace fees (2%)
Fee on every dataset sale on Greenfield
Watcher node operator subscriptions
Optional premium tooling for professional watchers
 

SECTION 11  DEVELOPMENT ROADMAP
Phased build plan from day one to mainnet
 
Phase 0: Hackathon MVP (Weeks 1–4)

Goal
A working, demo-able end-to-end flow. Not production ready. But real contracts on testnet, real agent execution, real escrow settlement. Enough to win.
 
Week 1: Foundation
• Initialize monorepo: packages/contracts, packages/sdk-core, packages/sdk-agent, packages/sdk-client, apps/demo.
• Set up Hardhat + Foundry for BSC testnet and opBNB testnet.
• Deploy test USDC on opBNB testnet (mock ERC-20).
• Write and deploy AgentRegistry.sol (minimal — registration + getAgent() only).
• Write and deploy TaskEscrow.sol (minimal — createTask, acceptTask, submitProof stub, settle, refund).
• Set up BSC testnet and opBNB testnet RPC endpoints.
 
Week 2: Core Protocol Flow
• Implement PoAAVerifier.sol — accepts DCAP quote hash, stores as 'verified'. (Simulated TEE for hackathon — full hardware integration Phase 1.)
• Implement ConfidenceOracle.sol — simplified CS formula, updated after each settlement.
• Implement StakingVault.sol — deposit, withdraw, getBond(). No slashing in hackathon MVP.
• Write complete Foundry test suite for the full task lifecycle: create → accept → prove → settle.
• Deploy all contracts to opBNB testnet.
 
Week 3: SDK & Demo App
• Build @ares/core — chain configs, ABI imports, typed contract wrappers using viem.
• Build @ares/agent-sdk — register(), onTaskAssigned(), executeInTEE() (simulated), submitProof().
• Build @ares/client-sdk — discover(), createTask(), watchTaskStatus().
• Build React demo app: 3-page flow — Agent Marketplace → Create Task → Task Status.
• Integrate a real LangChain agent as the service agent in the demo.
 
Week 4: Polish & Demo Prep
• Record demo video showing full autonomous task completion flow.
• Deploy 5 demo agents on BSC testnet via AgentRegistry.
• Stress test: 50 parallel task escrows on opBNB testnet.
• Write comprehensive README with architecture diagram and quick-start guide.
• Prepare hackathon submission: whitepaper, live demo URL, video, GitHub repo.
 
 

Phase 1: Testnet Alpha (Months 2–4)

Goal
First external developers building agents on ARES. Full TEE integration with Phala Network. ZK spot-check system live. Bug bounty program launched.
 
Engineering Deliverables
• Full Phala Network integration in @ares/tee-runtime — real hardware attestation.
• ZKSpotChecker.sol with Groth16 verifier — VRF-triggered spot-checks live.
• NFAgent.sol (BAP-578) — PoP Merkle root management live.
• CrossChainBridge.sol — AgentID mirroring to Base and Arbitrum testnet.
• @ares/watcher package — watcher node client for external validators.
• Security audit #1 (core contracts).
• Developer documentation site (Mintlify/Docusaurus).
• 5 pilot agent developer integrations.
 
Phase 2: Mainnet Launch (Months 5–8)

Goal
BSC and opBNB mainnet launch. ARES token TGE. 100+ registered agents. First real USDC settled through protocol.
 
Engineering Deliverables
• Security audit #2 (post-Alpha fixes + cross-chain components) — must be clean before mainnet.
• ARESDao.sol deployed — governance live from day one.
• ARES token deployed on BSC with initial distribution per tokenomics.
• All L2 chain deployments: Base, Arbitrum, Optimism, Polygon.
• Gasless onboarding via Megafuel (BSC) and ERC-4337 Paymaster (other chains).
• DataDAO on BNB Greenfield — agent data marketplace live.
• x402 payment standard integration for HTTP-native agent-to-agent payments.
 
Phase 3: Ecosystem Scaling (Months 9–18)

• Avalanche C-Chain deployment — enterprise subnet support.
• RWA Agent Certification pathway — zkKYC integration.
• Agent-to-Agent orchestration (nested escrow for multi-agent workflows).
• Agent lending market — CS-backed collateral for operational loans.
• Mobile agent monitoring app.
• SOVEREIGN tier governance — top agents participate in protocol direction.
 

SECTION 12  HOW TO START BUILDING — FIRST 30 DAYS
Concrete, day-by-day action plan
 
Immediate Priority
The first 30 days are entirely focused on getting a working demo on opBNB testnet. Not perfect code. Not production security. A real, demoable, end-to-end agent task flow that makes judges say: this is the future.
 
Day 1–2: Environment Setup

Repository Structure
Create a monorepo using Turborepo or Nx with this structure:
• packages/contracts — Foundry + Hardhat workspace
• packages/sdk-core — @ares/core — types, ABIs, chain config
• packages/sdk-agent — @ares/agent-sdk — agent-side SDK
• packages/sdk-client — @ares/client-sdk — client-side SDK
• packages/tee-runtime — @ares/tee-runtime — TEE abstraction layer
• packages/react — @ares/react — UI components
• apps/demo — Hackathon demo app (React + Vite)
• apps/docs — Documentation (Mintlify)
 
Toolchain Setup
• Install Foundry: curl -L https://foundry.paradigm.xyz | bash && foundryup
• Install Hardhat: npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
• Configure hardhat.config.ts with BSC testnet (97) and opBNB testnet (5611) networks.
• Get BSC testnet BNB from faucet.bnbchain.org and opBNB testnet BNB from faucet.opbnb-testnet.bnbchain.org.
• Set up Alchemy or QuickNode RPC endpoints for all target chains.
• Create GitHub repo with branch protection and CI (GitHub Actions: forge test on every PR).
 
Day 3–4: External Service Accounts

• Phala Network: Create account at phala.network/cloud — needed for managed TEE (eliminates hardware requirement in development).
• LayerZero: Register at layerzeroscan.com — needed for cross-chain messaging in Phase 1.
• The Graph: Set up subgraph for AgentRegistry and TaskEscrow event indexing (enables fast discovery queries).
• OpenZeppelin Defender: Set up for automated contract monitoring and upgrade management.
• npm: Configure private @ares scope for SDK package publishing.
 
Day 5–7: First Contract — AgentRegistry.sol

Write the minimal AgentRegistry.sol. This is the first contract you must have working. Start with:
14. AgentMetadata struct definition — all fields from Section 03.
15. mapping(uint256 => AgentMetadata) public agents — core storage.
16. registerAgent() — mints ERC-721 token, stores metadata, emits AgentRegistered.
17. queryAgents() — simple linear scan with filter (optimize with The Graph in Phase 1).
18. getAgent() / getCS() — view functions.
19. Write Foundry tests: register an agent, query it, verify token ownership.
 
Day 8–10: TaskEscrow.sol + Settlement Flow

This is the core value contract. Write the full state machine:
20. Deploy mock USDC ERC-20 on opBNB testnet for testing.
21. Implement createTask() — USDC transferFrom client, store TaskSpec, emit TaskCreated.
22. Implement acceptTask() — record service agent, start deadline timer.
23. Implement submitProof() — store proof hash, set state to PROOF_SUBMITTED. (Simulated verification for MVP: if proof hash != bytes32(0), it passes.)
24. Implement claimSettlement() — transfer USDC minus 0.05% fee, update CS via ConfidenceOracle.
25. Implement claimRefund() — return USDC if deadline exceeded.
26. Full Foundry test suite: happy path + deadline expiry + invalid proof refund.
 
Day 11–13: ConfidenceOracle.sol + StakingVault.sol

• Implement ConfidenceOracle.sol — simplified CS formula (V × Q + B) / (L × E). updateCS() called by EscrowFactory after every settlement.
• Implement StakingVault.sol — deposit(amount), withdraw(amount), getBond(agentId). No slashing in MVP.
• Wire up the settlement flow: TaskEscrow.sol → ConfidenceOracle.sol → update CS → emit CSUpdated.
• Write Foundry tests: register agent, complete 5 tasks, verify CS increases correctly.
 
Day 14–17: @ares/core + @ares/agent-sdk

• Build @ares/core: viem contract wrappers, TypeScript types for all contracts, chain config constants.
• Build @ares/agent-sdk: ARESAgent class with register(), onTaskAssigned(), executeInTEE() (mock), submitProof().
• The executeInTEE() mock runs the agent logic in a Node.js subprocess and generates a fake DCAP quote (a keccak256 hash of the output). This is sufficient for hackathon demo.
• Test SDK end-to-end on opBNB testnet: register an agent, create a task from another wallet, accept and complete it.
 
Day 18–21: @ares/client-sdk + React Demo App

• Build @ares/client-sdk: ARESClient class with discover(), createTask(), watchTaskStatus().
• watchTaskStatus() subscribes to TaskEscrow contract events via viem watchContractEvent.
• Build React demo app — 3 pages: Agent Marketplace (discovery grid with CS badges), Task Creator (form to create escrow task), Task Monitor (real-time state machine display).
• Integrate a real LangChain agent as the service agent. The agent monitors the TaskEscrow contract, picks up tasks, runs its LLM logic, and submits proof.
 
Day 22–24: Integration Test & Stress Test

• End-to-end test: start LangChain agent → create task from React UI → agent accepts → agent executes → submits proof → settlement happens → CS updates → UI shows settled.
• Stress test: write a Foundry script to create 50 simultaneous task escrows on opBNB testnet. All must settle correctly.
• Fix all bugs found during stress test.
 
Day 25–27: Demo Polish

• Seed the demo with 5 registered agents with different capabilities and CS scores.
• Make the React UI look good — use @ares/react components (CSScoreBadge, AgentCard, TaskStatus).
• Record the demo video: show the full flow from agent discovery to task settlement. 3 minutes max.
 
Day 28–30: Hackathon Submission Prep

• Write the project README: what ARES is, why it matters, architecture diagram, quick-start guide.
• Deploy demo app to Vercel or Netlify with live testnet connection.
• Prepare hackathon submission form: project description, GitHub link, demo URL, video link.
• Write a 1-page executive summary of the protocol for judges.
 
Critical Architectural Decisions — First Week

Decision
Options
Recommended
Rationale
TEE for Hackathon
Real hardware, Phala managed, simulated
Phala managed TEE
Eliminates hardware requirement. Real attestation. Fast setup.
Cross-Chain MVP
Multi-chain from day one, BSC+opBNB only
BSC+opBNB only for hackathon
Ship fast. Add chains in Phase 1. opBNB has the TPS needed for demo.
Agent Framework
Custom, LangChain, AutoGen, CrewAI
LangChain
Largest community, easiest integration, best for demo storytelling.
CS Formula Complexity
Full formula, simplified version
Simplified for MVP
Get the mechanic working. Full formula in Phase 1 after audit.
Payment Token
ARES token, USDC, multi-token
USDC only (MVP)
Simple accounting. Stable value. Add ARES token utility in Phase 1.
Watcher Network
Decentralized, centralized validator, none
Single centralized validator for hackathon
Don't over-engineer. Decentralize in Phase 1.
 

SECTION 13  APPENDIX: GLOSSARY & REFERENCE
 
 
Glossary

Term
Definition
AgentID
ERC-8004 NFT token that serves as a permanent, on-chain identity for an AI agent
BAP-578
BNB Application Protocol for Non-Fungible Agents — makes agents into tradeable, evolvable digital assets
CS (Confidence Score)
Mathematical reputation score derived from on-chain execution history — not a subjective rating
DCAP
Data Center Attestation Primitives — Intel's framework for generating cryptographic quotes from SGX enclaves
DeOS
Decentralized Operating System — ARES's concept of a protocol-layer OS for autonomous agents
aGDP
Agentic GDP — the total economic value produced by autonomous AI agents across the ARES network
PoAA
Proof-of-Agentic-Attestation — ARES consensus mechanism for verifying AI inference correctness
PoP
Proof-of-Prompt — cryptographic hash of a task execution (prompt + response + timestamp + AgentID)
TEE
Trusted Execution Environment — secure hardware enclave where code runs verifiably and privately
MCP
Model Context Protocol — Anthropic's open standard for connecting AI models to external tools and data sources
A2A
Agent-to-Agent — messaging protocol for direct communication between autonomous agents
VRF
Verifiable Random Function — cryptographic primitive for generating provably random values on-chain
DataDAO
Decentralized Autonomous Organization for curating and monetizing structured datasets on BNB Greenfield
Watcher
Network participant who monitors task proofs and can raise disputes during the challenge window
Pay-for-Proof
ARES escrow model where payment releases only on cryptographic proof of task completion
opBNB
Optimistic rollup Layer 2 on BNB Chain — 20,000+ TPS, near-zero gas, primary ARES execution layer
BNB Greenfield
Decentralized storage network in the BNB ecosystem — ARES persistence layer for agent memory
 
Reference Flows

Full Agent Lifecycle Flow
1. Developer registers agent: AgentRegistry.registerAgent() on BSC → AgentID NFT minted → bond deposited to StakingVault 2. Agent goes live: Agent polls Discovery Layer / subscribes to TaskCreated events on opBNB 3. Client creates task: ARESClient.createTask() → USDC locked in TaskEscrow.sol on opBNB → TaskCreated emitted 4. Agent accepts: agent.acceptTask(taskId) → TaskEscrow.acceptTask() → bond frozen → execution clock starts 5. Agent executes: agent.executeInTEE() → LLM runs inside TEE enclave → TEE generates DCAP quote over (inputs ‖ outputs ‖ AgentID ‖ timestamp) 6. Agent submits proof: agent.submitProof(taskId, dcapQuote, resultHash) → PoAAVerifier.sol validates quote → PROOF_SUBMITTED state 7. Settlement: After dispute window (24h default) → claimSettlement() → USDC sent to agent → 0.05% fee to FeeCollector → CS Oracle updates agent's CS 8. Cross-chain sync: FeeCollector emits → CrossChainBridge propagates CS update to all mirror chains via LayerZero
 
 

ARES Protocol — Product Requirements Document v1.0
Autonomous Reputation & Execution Settlement Protocol — Multi-EVM Deployment — Confidential Pre-Development Draft