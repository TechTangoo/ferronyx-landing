# Ferronyx – Landing Page Spec (Linux + ROS2 + Behavioral Future)

## Brand Positioning
**Ferronyx = Observability for any Linux-based robot fleet → ROS2 native → Behavioral AI intelligence.**  
**Today:** Infra + ROS2 monitoring for production.  
**Future:** Behavioral observability + AI diagnostics (intent vs execution, environment adaptation).

**Tagline:** "Observability for Linux Robot Fleets. ROS2 Native. Behavioral Intelligence Coming."

---

## Hero Section
**Headline:** Observability for Production Robot Fleets  
**Subheadline:** Monitor any Linux robot (ROS2 native). Catch infra + ROS issues before downtime. Debug remotely. Behavioral AI roadmap.

**Visual:**  
Live dashboard:
- Fleet list (robot status: Healthy/Warning/Critical)
- ROS2 graph overlay
- Infra metrics (CPU/GPU spikes)
- Behavioral hint: "Robot #7: Intent (pick) ≠ Execution (stuck)"

**CTAs:**  
**Primary:** "Connect Your First Robot (5 Min)"  
**Secondary:** "Book 20-Min Demo"

---

## Problems We Solve

| Problem | Ferronyx Today | Ferronyx Future |
|---------|----------------|-----------------|
| Infra kills ROS (CPU/GPU spikes) | Unified infra + ROS monitoring | Behavioral correlation |
| Topics/nodes fail silently | Auto-discovery + alerts | AI root cause |
| Deployments break robots | Deployment markers | Regression prediction |
| Fleet-wide patterns missed | Cross-robot correlation | Behavioral anomaly detection |
| Manual SSH debugging | Remote execution | AI-assisted RCA |

---

## Features (Current + Roadmap)

### Today: Linux + ROS2 Foundation
**Infrastructure Monitoring**  
CPU, GPU, memory, network on any Linux robot machine.

**ROS2 Native**  
Zero-config: nodes, topics, actions. Mark key topics/nodes.

**Remote SSH & Execution**  
Commands on any robot/machine. No VPN/SSH hell.

**Threshold Alerts**  
Slack/email on infra + ROS breaches.

**Deployment Markers**  
Correlate failures with releases.

### Coming Soon: Behavioral AI
**AI Root-Cause Pipeline**  
Alert → probable causes (e.g. "GPU + topic drop = compute limit").

**AI-Assisted Debugging**  
Incident timeline: infra → ROS → behavior.

**Fleet AI Assistant**  
"What broke Robot #7?" → Summary + fixes.

**Behavioral Observability**  
Intent vs execution gaps. Environment-specific failures. Canary scoring.

---

## How It Works

Install Linux Agent
docker run ferronyx/agent

Auto-Discover (ROS2 + Infra)
Maps machines, ROS graph, key metrics

Observe + Debug
Alerts → remote fix → behavioral insights (soon)

text

---

## Who It's For
**Linux-based robot teams:**
- ROS2 fleets (humanoids, AMRs)
- Non-ROS Linux robots
- Scaling from 5 → 500 units

**Customers:** thehumanoid.ai • HsmAries

---

## Social Proof
**Metrics:**  
• 50+ robot-hours monitored daily  
• MTTR: 3–4h → 15min

**Quote:**  
“Caught topic drops we never saw.” – thehumanoid.ai

---

## Pricing
Linux robots: $50/machine/month
ROS2 fleets: Same price, deeper insights

Early pilots: $25/mo first 3 months
Free trial available

text

---

## CTA Flow
**Mid:** "Connect Your First Robot"  
**Footer:** "Demo" + "Pricing Call"

---

## UX Directive
**Tone:** Robotics engineers (use "topics/nodes/bags/deployments").  
**Visuals priority:**
1. Fleet health dashboard
2. ROS2 graph + infra overlay
3. Incident timeline
4. Behavioral roadmap teaser (badge: "Beta")

**Differentiation:** Linux agent → ROS2 deep → Behavioral future.