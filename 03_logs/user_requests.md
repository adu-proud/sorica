---
type: request_log
role: request_routing_log
purpose: record user prompts and the file or route outcome
scope: framework_and_research_requests
connects_to:
  - AGENTS.md
  - 05_agent_reports/
created: 2026-05-26
updated: 2026-06-02
---

# User Requests

Short routing log for user prompts. Log the request before deciding whether to answer directly or route through sub-agents.

| Date | Request summary | Route | Status | Output |
|---|---|---|---|---|
| 2026-06-02 | Generate copyable/runnable CLI launch command with startup prompt embedded | fast_path | done | Onboarding now previews a terminal command and lets the user copy it or run Codex/OpenCode directly with the prompt loaded |
| 2026-06-02 | Make onboarding clipboard confirmation accept Enter/Y/yes variants explicitly | fast_path | done | Confirmation prompts now use default on blank input, accept case-insensitive yes/no, and reprompt on unclear input |
| 2026-06-02 | Shorten onboarding startup prompt display and add CLI launch instructions | fast_path | done | Startup prompt is previewed, clipboard copy is confirmed, and selected CLI launch commands are shown |
| 2026-06-02 | Improve onboarding Root Vault visibility with scan summary, current-file progress, and completion box | fast_path | done | Onboarding now shows text/non-text/ignored counts, current file during copy, and a transposition summary box |
| 2026-06-02 | Add onboarding transposition count and Unicode progress bar | fast_path | done | Root Vault scan reports transposable file count; copy phase updates a Unicode processed-files bar |
| 2026-06-02 | Fix onboarding arrow picker redraw corruption | fast_path | done | Redraw now returns to column 0 before clearing and rewriting option rows |
| 2026-06-02 | Fix onboarding arrow-key CLI selection and align test/dev branches | fast_path | done | Arrow picker reads escape sequences reliably, q cancels onboarding, numbered fallback still works |
| 2026-06-02 | Diagnose onboarding Root Vault path not found | fast_path | done | Path exists; onboarding now strips wrapping quotes |
| 2026-06-02 | Fix onboarding quoted-path handling and push | fast_path | done | Onboarding accepts quoted paths and preserves success after copy summary |
| 2026-06-02 | Turn README into operational development TODO | fast_path | done | README replaced with checked branch-status checklist |
| 2026-06-02 | Rename onboarding copy destination to raw folder | fast_path | done | Onboarding now writes initial copies to 01_llm_zone/raw/ |
| 2026-06-02 | Add raw folder index.md requirement to onboarding | fast_path | done | Startup now requires index.md in every raw folder with file summaries |
| 2026-06-02 | Refactor framework: thin AGENTS.md routing, eliminate PROCESS_ROUTER/ONBOARDING/TODO, SOUL Core Contract split, Cleaner research-tendency staleness | index_maintenance | done | AGENTS.md 383→241 lines; AGENTS.md is now the single routing file; SOUL.md files split into ## Core Contract + ## Detail |
| 2026-06-02 | Convert inline bare paths in framework body to short-form wikilinks; frontmatter `connects_to:` stays bare | index_maintenance | done | 200+ conversions across 13 files; bracket-explosion fix via idempotent regex; convention documented in OBSIDIAN_CONSTRAINTS.md |
| 2026-06-02 | Rename "realm" → "zone": folder renames, file renames, terminology, free-zone restructure, archive removal | index_maintenance | done | 168 text replacements + 9 follow-up fixes; folders renamed with git mv (01_llm_realm→01_llm_zone, 02_user_realm→02_user_zone, 00_realm_index.md→00_zone_index.md, REALM_CONFIGURATION.md→ZONE_CONFIGURATION.md); archive/ and writing/ folders removed; 02_user_zone/ is now a flat free zone |
| 2026-06-04 | Start the Zone — execute full startup workflow (Phase 1.2 onwards): fill blueprint/config, build dictionary, generate YAML headers, create raw folder indexes, build concept indexes, update zone index, run smoke test | startup | done | 05_agent_reports/startup_report_2026-06-04.md |
| 2026-06-04 | Trouver des verbatims d'enquêtés qui expriment leur sensation de tricher | evidence_answer | done | 05_agent_reports/verbatims_sensation_tricher_2026-06-04.md |
| 2026-06-08 | Encoder l'entretien Aurélien Clotilde | index_maintenance | blocked | Aucun fichier slicé produit — session interrompue |
| 2026-06-08 | Encoder les 30 premières lignes de l'entretien Hippolyte Sabolo | index_maintenance | done | 05_agent_reports/sliced_Hippolyte_Sabolo_01.md |
| 2026-06-08 | Encoder les 100 lignes suivantes de l'entretien Hippolyte Sabolo (lignes 81–180) | index_maintenance | done | 05_agent_reports/sliced_Hippolyte_Sabolo_02.md |
| 2026-06-08 | Encoder l'entretien Hippolyte Sabolo (lignes 181–994, phases 1 fin, 2, 3, 4) | index_maintenance | done | 05_agent_reports/sliced_Hippolyte_Sabolo_03.md, _04.md |
| 2026-06-08 | Encoder l'entretien Hippolyte Sabolo — session complète (lignes 616–994, phases 3 fin, 4) | index_maintenance | done | 05_agent_reports/sliced_Hippolyte_Sabolo_05.md |
| 2026-06-08 | Rassembler l'encodage Hippolyte Sabolo en un seul fichier | index_maintenance | done | 05_agent_reports/encoded_Hippolyte_Sabolo.md |
| 2026-06-09 | Encoder l'entretien Irène Colas Lopez (Léo, 18 ans, 1A Sciences Po SGEL) | index_maintenance | in_progress | 05_agent_reports/encoded_Leo_IreneColasLopez.md |
| 2026-06-09 | Encoder entretiens Amine (initial + suivi) et Hippolyte, produire codage focalisé | focalizer | done | 05_agent_reports/focused_coding_2026-06-09.md |
| 2026-06-09 | Encoder entretien Aurélien Clotilde (Enquêtée Bardinet) — pipeline complet (Slicer → QR_slicer → Encoder → Interaction_encoder → Focalizer) | encoding | done | 05_agent_reports/focused_coding_2026-06-09_full.md |
| 2026-06-09 | Ajouter Cheriet Housna et Gaelle Scoazec au focalizer — pipeline complet puis rapport v2 | encoding | done | 05_agent_reports/focused_coding_2026-06-09_v2.md |
| 2026-06-10 | Challenger pass — challenger focalizer v4 (Tier 1 themes) contre 24 fichiers d'encodage | challenger (focused_coding) | done | 05_agent_reports/challenger_report_2026-06-10.md |
