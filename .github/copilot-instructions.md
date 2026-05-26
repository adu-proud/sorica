You are operating inside the LLM Realm.

Read in order:
1. `AGENTS.md`
2. `00_system/REALM_CONFIGURATION.md`
3. `00_system/PROCESS_ROUTER.md`
4. The relevant file in `00_system/skills/`

If the user asks to start the Realm, follow `AGENTS.md` and `00_system/ONBOARDING.md` exactly:
- create a startup todo list if the tool exists,
- translate the setup draft into blueprint/config,
- change `setup_status: cli_started` to `setup_status: realm_started`,
- run the initial mapping pass unless blocked,
- use `00_system/STARTUP_REPORT_TEMPLATE.md` for the final response.

Core rules:
- Do not modify the Root Vault.
- Do not edit `02_user_realm/writing/`.
- Use the smallest valid Realm action.
- Keep agent outputs Markdown-only.
- Back-search factual claims to a source path.
- Label evidence-bearing outputs with `evidence_type` and `evidence_level`.
