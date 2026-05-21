# Analytic Memo Template

Use when an analytic relation needs internal memory.

```md
---
type: analytic_memo
memo_type: theoretical | comparative | contradiction | memo_on_memos
status: tentative | developing | stable | archived
agent: Cicero | Lucrezio | Tacito | Varro
created: [date]
updated: [date]
evidence_type: interpretive
evidence_level: L2
confidence: low | medium | high
concepts:
  - "[[Concept]]"
category: "[[Category]]"
---

# Memo: [Title]

## Trigger
[source intake, repeated code, contradiction, question, Tacito pass, Varro sorting]

## Observation
[short analytic note]

## Links
- Fragments: [[fragment]]
- Sources: `/root_vault/path`
- Negative cases: [[fragment]]

## Comparison
[what this resembles, contrasts with, reinforces, weakens, or splits]

## Memo-on-Memos
Use only when `memo_type: memo_on_memos`.
- Memos included: [[memo]]
- Emerging category: [[category]]
- Suggested Realm update: [create / update / merge / archive]

## Next Check
[what to verify next]
```
