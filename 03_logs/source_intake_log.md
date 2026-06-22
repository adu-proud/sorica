---
type: source_intake_log
sub_agent: Navigator
role: source_registration_log
purpose: [track new Root Vault batches and retained external sources before mapping]
scope: [source intake only]
connects_to:
  - 01_llm_zone/00_zone_index.md
  - 01_llm_zone/raw/
  - 03_logs/external_queries.md
created: 2026-05-26
updated: 2026-05-28
---

# Source Intake Log

All new Root Vault batches and retained external sources are registered here before mapping.

| Date | Batch ID | Source type | Location | Origin | Intake status | Notes |
|---|---|---|---|---|---|---|
| 2026-06-04 | batch_001 | interview (txt) | 01_llm_zone/raw/ | /entretiens_data_sprint/ | indexed | 10 files; 9 unique interviews + 1 duplicate (Entretien_ 1 = Entretien_ 48); 3 binary files in Root Vault not copied (1 PDF, 1 DOCX, 1 PDF) |
| 2026-06-04 | batch_001_nontxt | binary (pointer-only) | Root Vault only | /entretiens_data_sprint/ | registered | Hippolyte Sabolo - Entretien.pdf; Irene.ColasLopez-enquêteIA.docx; Pas_info_VERGNES-Aloïs- INTERVIEW IA.pdf — cannot be transposed without OCR/conversion |

## Status Values
- `registered`
- `copied`
- `dictionary_updated`
- `headers_generated`
- `indexed`
- `needs_ocr`
- `needs_transcription`
- `blocked`
