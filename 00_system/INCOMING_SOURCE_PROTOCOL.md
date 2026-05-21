---
type: intake_protocol
agent: Cicero
created: 2026-05-21
updated: 2026-05-21
---

# Incoming Source Protocol

Use when new material has been placed in the Root Vault by the researcher, or an approved external source is retained.

## Steps
1. Register the batch in `03_logs/source_intake_log.md`.
2. Classify source type using `01_llm_realm/01_metadata/SOURCE_TYPE_TAXONOMY.md`.
3. Create/update one source map if navigation is needed.
4. Create/update metadata if provenance or machine-readability matters.
5. Extract only reusable evidence fragments.
6. Link to existing concept indexes where possible.
7. Create a new concept index only if the batch introduces a repeated concept that does not fit existing indexes.
8. Update `01_llm_realm/00_realm_index.md`.
9. Write one intake report if files or indexes changed.

## External Sources
If the batch came from outside the Root Vault:
- Log the query in `03_logs/external_queries.md`.
- Keep `evidence_type: external` until the researcher moves it into the Root Vault.

## Do Not
- Duplicate existing maps or indexes.
- Create fragments for material that will not be reused, compared, contradicted, or cited.
- Modify, reorganize, or delete files in the Root Vault. Only the researcher places material there.
