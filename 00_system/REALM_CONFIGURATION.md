---
type: realm_configuration
agent: setup_cli
created: 2026-05-26
updated: 2026-05-26
setup_status: cli_started
---

# Realm Configuration

Agents read this before major work.

```yaml
realm_type: research_framework
research_mode: evolving_complex_corpus
root_vault_path: "'/Users/tommasoprinetti/Library/CloudStorage/GoogleDrive-tommaso.prinetti@sciencespo.fr/.shortcut-targets-by-id/1P14RD4yjJ7e6dP5xt71IVDEtfZiQuukc/EL2MP/EVOLUTION - ROOTVAULT'"
root_vault_mode: protected_append_only

source_policy: internal_first
external_sources_allowed: no
external_logs:
  - 03_logs/external_queries.md
  - 03_logs/source_intake_log.md

claim_standard: source_link_required
l2_policy: backsearch_required

protected_paths:
  - "'/Users/tommasoprinetti/Library/CloudStorage/GoogleDrive-tommaso.prinetti@sciencespo.fr/.shortcut-targets-by-id/1P14RD4yjJ7e6dP5xt71IVDEtfZiQuukc/EL2MP/EVOLUTION - ROOTVAULT'"
  - 02_user_realm/writing/

archive_path: 01_llm_realm/archive/
stale_after_days: 30
archive_after_days: 60
preferred_llm_cli: "OpenCode"
```

## Notes
- This file was initialized by the CLI setup.
- When an agent sees setup_status: cli_started, it should start the Realm from the setup draft, mark translated setup as setup_status: realm_started, and run initial mapping unless blocked.
- The startup agent must not stop after only creating a source map; it must translate the setup draft first and complete the startup checklist.
- The Realm startup flow should avoid asking for scope, object, questions, methods, or outputs unless the researcher requests that detail or the missing answer blocks immediate mapping.
- This file never grants permission to edit the Root Vault.
