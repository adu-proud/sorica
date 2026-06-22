---
type: zone_index
role: zone_master_index
purpose: [map the whole LLM Zone and point to the main retrieval layers]
scope: [all of 01_llm_zone]
connects_to:
  - 00_dictionary.md
  - 01_metadata/HEADER_TEMPLATE.md
  - 03_concept_indexes/
  - 03_logs/research_tendencies/RESEARCH_NEED_AGGREGATOR_TEMPLATE.md
evidence_type: processed
evidence_level: L1
created: 2026-05-26
updated: 2026-05-28
---

# LLM Zone — Master Index

## Structure

```
01_llm_zone/
  00_zone_index.md              This file
  00_dictionary.md               Shared term vocabulary for coherent headers
  raw/                           Markdown raw copies transposed from text-based Root Vault files (folder `index.md` retrieval map in each subfolder)
  01_metadata/                   Shared header guidance
  03_concept_indexes/            Thematic concept indexes
```

## Source Coverage

| Source type | Count | Last updated |
|---|---|---|
| interview (txt) | 9 raw copies | 2026-06-04 |
| binary (pointer-only) | 3 (PDF x2, DOCX x1) | 2026-06-04 |

## Dictionary Status

| Category | Count | Last updated |
|---|---|---|
| Canonical names | 15 | 2026-06-04 |
| Canonical places | 4 | 2026-06-04 |
| Canonical organizations | 15 | 2026-06-04 |
| Canonical concepts | 19 | 2026-06-04 |
| Domain terms | 26 | 2026-06-04 |

## Raw Folder Indexes

| Index file | Scope | Last updated |
|---|---|---|
| 01_llm_zone/raw/index.md | All 9 raw copies in raw/ | 2026-06-04 |

## Active Concept Indexes

| Index name | Tags | Coverage | Last updated |
|---|---|---|---|
| usage_des_IA.md | usage des IA, ChatGPT, pratiques numériques | 9/9 files | 2026-06-04 |
| triche_et_plagiat.md | triche, plagiat, détecteur d'IA | 8/10 files | 2026-06-04 |
| dependance_et_autonomie.md | dépendance, autonomie intellectuelle, flemme | 7/10 files | 2026-06-04 |
| impact_environnemental.md | impact environnemental, data centers | 4/10 files | 2026-06-04 |
| relation_affective_IA.md | relation affective, personnification, confident | 5/10 files | 2026-06-04 |

## Research Tendencies

See `03_logs/research_tendencies/RESEARCH_NEED_AGGREGATOR.md` for aggregated research needs.

## Non-Text Files in Root Vault (pointer-only)

Files that cannot be copied — noted here as pointer-only.

| File | Type | Notes |
|---|---|---|
| Hippolyte Sabolo - Entretien.pdf | PDF | Needs OCR or PDF conversion before transposition |
| Irene.ColasLopez-enquêteIA.docx | DOCX | Needs conversion before transposition |
| Pas_info_VERGNES-Aloïs- INTERVIEW IA.pdf | PDF | Needs OCR or PDF conversion before transposition |

## Source Intake

See `03_logs/source_intake_log.md` for Root Vault batches and retained external sources.

## Ambiguities

- Several files have encoding issues (mojibake) in the body text due to source file encoding. Headers are UTF-8; body text may render incorrectly in some contexts.
- `Entretien_ (48)` was a duplicate of `Entretien_ (1)` (same transcript, Rabia/Lucia Monteiro Paredes) — moved to `.trash/` on 2026-06-04.

## Vault Overview

- Total raw copies: 9
- Total non-text files (pointer-only): 3
- Dictionary status: built (2026-06-04)
- Mapping status: complete (all 9 raw copies have YAML headers; 1 raw folder index; 5 concept indexes)
