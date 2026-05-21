# Evidence Fragment Template

Use for reusable evidence only.

```md
---
type: evidence_fragment
agent: Cicero
created: [date]
updated: [date]
source: /root_vault/source_batch_NNN/[file]
source_type: [source type]
evidence_type: primary | processed | interpretive | external
evidence_level: L1 | L2
confidence: high | medium | low
tags: [tag1, tag2]
codes:
  - [optional descriptive code]
concepts:
  - "[[Optional Concept]]"
category: "[[Optional Category]]"
---

## Fragment
[quote, claim, observation, data point, or precise paraphrase]

## Context
[minimal context needed to interpret the fragment]

## Coding
- Codes: [optional]
- Concept: [[optional]]
- Category: [[optional]]

## Comparison
- Similar: [[optional]]
- Contrasting: [[optional]]
- Note: [what this reinforces, weakens, or complicates]

## Serendipity
- Type: none / anomaly / metaphor / contradiction / weak_signal / adjacent_case / negative_space
- Relation: direct / adjacent / oppositional / speculative
- Requires back-search: true / false

## Back-search
[pending / partial / verified]
```

Omit optional fields when they do not help retrieval or analysis.
