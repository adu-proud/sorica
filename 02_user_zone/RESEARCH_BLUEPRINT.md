---
type: research_blueprint
agent: setup_cli
created: 2026-06-04
updated: 2026-06-22
setup_status: zone_started
connects_to:
  - AGENTS.md
  - 00_system/instructions/ZONE_CONFIGURATION.md
  - 00_system/instructions/STARTUP.md
  - 03_logs/user_requests.md
---

# Research Blueprint

## Project
- Title: Social Research Interactive Categorizer
- Description: not provided during fast setup — inferred from corpus: a data sprint research project investigating how French university students use generative AI tools (primarily ChatGPT) in their academic and personal lives. Based on 9 unique semi-directive interview transcripts (entretiens semi-directifs) conducted by sociology and social science students in 2025-2026 at multiple French universities (Université Gustave Eiffel, Sciences Po Saint-Germain-en-Laye, Paris 1 Panthéon-Sorbonne). The research appears to be part of a course in sociology of the digital, supervised in part by Bilel Benbouzid.

## Project Artifacts
- none provided during fast setup

## Sources
- Root Vault path: /c/Users/m.mercier/OneDrive - Francetelevisions/Bureau/Data Sprint Agent IA/entretiens_data_sprint
- Main source types: semi-directive interview transcripts (txt), with 3 binary files (PDF x2, DOCX x1) not yet transposed
- Expected incoming sources: additional interview transcripts; binary files pending OCR/conversion

## Research Vocabulary
- Key actors / institutions: Université Gustave Eiffel, Sciences Po Saint-Germain-en-Laye, Paris 1 Panthéon-Sorbonne, Bilel Benbouzid; student interviewees (anonymized or pseudonymized)
- Key tools / organizations: ChatGPT, Claude, Gemini, Perplexity, NotebookLM, Copilot, QuillBot, Google
- Key concepts (inferred): usage des IA génératives, prompt, apprentissage, triche/plagiat, dépendance, impact environnemental, autonomie intellectuelle, relation affective à l'IA, norme universitaire, optimisation, données personnelles, inégalités d'accès
- Sensitizing concepts, not evidence: métier d'étudiant, sociologie du numérique, inégalités scolaires numériques
- Theoretical frames: sociologie des pratiques numériques, sociologie de l'éducation

## Method And Evidence
- Methods: semi-directive qualitative interviews; thematic analysis; constant comparison across profiles
- Claims require source paths.
- L2 clues require Checker verification before reporting.
- External sources must stay labeled external unless moved into the Root Vault.
- External source policy: no (default; ask only if external access is needed)

## Outputs
- Start with folder mirror indexes and evidence-grounded answers unless the researcher requests another output.

## Blind Spots
- No audio originals in corpus — transcription quality cannot be verified (inherent limitation)
- Source files in the Root Vault retain their original mixed/Windows-1252 encoding; only the raw copies in 01_llm_zone/raw/ have been normalized to clean UTF-8 (2026-06-08)

## Researcher Preferences
Not stated during fast setup. Inferred: focus on qualitative analysis of student AI practices; sociological framing.

## Preferred LLM CLI
Claude Code
