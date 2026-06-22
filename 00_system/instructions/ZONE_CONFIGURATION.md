---
type: zone_configuration
agent: setup_cli
created: 2026-06-04
updated: 2026-06-22
setup_status: zone_started
---

# Zone Configuration

Agents read this before major work.

```yaml
zone_type: research_framework
research_mode: evolving_complex_corpus
root_vault_path: "chemin vers le dossier d'entretiens"
root_vault_mode: protected_append_only

source_policy: internal_first
external_sources_allowed: no
external_logs:
  - 03_logs/external_queries.md
  - 03_logs/source_intake_log.md

claim_standard: source_link_required
l2_policy: checker_required

protected_paths:
  - "chemin vers le dossier d'entretiens"
  - 02_user_zone/

stale_after_days: 30
preferred_llm_cli: "Claude Code"
```

## Notes
- This file was initialized by the CLI fast setup.
- The CLI collected: project name, Root Vault path, preferred LLM CLI. Raw copies are transposed into 01_llm_zone/raw/ under the same path.
- During startup, project description and helpful artifact URLs are optional. If absent, the LLM CLI agent records them as not provided, keeps external_sources_allowed at its default , and infers working scope from the raw corpus.
- When setup_status reaches zone_started, the Startup sub-agent has built the master dictionary, generated YAML headers, created folder index.md files, and built concept indexes.
- This file never grants permission to edit the Root Vault.
