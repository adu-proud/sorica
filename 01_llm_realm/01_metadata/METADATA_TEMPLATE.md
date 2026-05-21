# Metadata Template

Create one metadata entry per Root Vault folder, source batch, or retained external source.

```
---
type: metadata
evidence_type: processed
evidence_level: L1
source_type: [from SOURCE_TYPE_TAXONOMY.md]
agent: Cicero
created: [date]
updated: [date]
---

## Source: [name]

### Provenance
| Field | Value |
|---|---|
| Root Vault / source path | /root_vault/source_batch_NNN/ |
| Source type | [from SOURCE_TYPE_TAXONOMY.md] |
| Date range | [start date] - [end date] |
| Creator / author / institution | [name] |
| Researcher / collector | [name] |
| Intake date | [date] |
| External status | [internal / external_logged / external_pending] |

### Modalities present
| Type | Count | Format | Transcription confidence |
|---|---|---|---|
| photos | | | N/A |
| scans | | | N/A |
| OCR markdowns | | | high / medium / low |
| audio | | | N/A |
| transcriptions | | | high / medium / low |
| video | | | N/A |
| researcher notes | | | N/A |
| datasets | | | N/A |

### Processing notes
[any notes about quality, missing files, transcription issues, etc.]

### Cicero metadata
| Field | Value |
|---|---|
| Mapped by | Cicero |
| Map file | 02_source_maps/source_batch_NNN_map.md |
| Concept indexes | [linked indexes] |
| Fragment count | [number] |
| Last updated | [date] |
```
