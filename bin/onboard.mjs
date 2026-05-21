#!/usr/bin/env node
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const root = process.cwd();
const today = new Date().toISOString().slice(0, 10);

const paths = {
  blueprint: resolve(root, "02_user_realm/RESEARCH_BLUEPRINT.md"),
  config: resolve(root, "00_system/REALM_CONFIGURATION.md"),
  omen: resolve(root, "01_llm_realm/06_research_tendencies/MASTER_OMEN.md"),
  omenTemplate: resolve(root, "01_llm_realm/06_research_tendencies/MASTER_OMEN_TEMPLATE.md")
};

const cliLaunch = {
  "Claude Code": {
    command: "claude",
    prompt: "Read AGENTS.md and continue onboarding."
  },
  Codex: {
    command: "codex",
    prompt: "Read AGENTS.md and continue onboarding."
  },
  OpenCode: {
    command: "opencode",
    prompt: "Read AGENTS.md and continue onboarding."
  },
  Kilo: {
    command: null,
    prompt: "Open this folder in Kilo, then ask: Read AGENTS.md and continue onboarding."
  },
  Other: {
    command: null,
    prompt: "Open this folder with your LLM agent, then ask: Read AGENTS.md and continue onboarding."
  }
};

const title = String.raw`
  ______          __                   
 / ____/________ / /___  ____ _ __  __
/ __/  / ___/ __  / __ \/ __ \`// / / /
/ /___ / /__/ /_/ / /_/ / /_/ // /_/ / 
/_____/ \___/\__,_/\____/\__, / \__, /  
                         /____/ /____/   
        LLM-Researcher Onboarding
`;

function ensureParent(file) {
  mkdirSync(dirname(file), { recursive: true });
}

function splitList(value) {
  return value
    .split(/[,;\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function yamlList(items, fallback = "[not specified]") {
  const list = items.length ? items : [fallback];
  return list.map((item) => `- ${item}`).join("\n");
}

function hasFilledOnboarding() {
  if (!existsSync(paths.blueprint) || !existsSync(paths.config)) return false;
  const blueprint = readFileSync(paths.blueprint, "utf8");
  const config = readFileSync(paths.config, "utf8");
  const placeholders = ["[project name]", "[path]", "[question 1]", "to refine during LLM onboarding"];
  return !placeholders.some((placeholder) => blueprint.includes(placeholder) || config.includes(placeholder));
}

async function ask(rl, label, fallback = "") {
  const suffix = fallback ? ` (${fallback})` : "";
  const answer = (await rl.question(`${label}${suffix}: `)).trim();
  return answer || fallback;
}

async function choose(rl, label, choices, fallback) {
  output.write(`\n${label}\n`);
  choices.forEach((choice, index) => output.write(`  ${index + 1}. ${choice}\n`));
  const raw = await ask(rl, "Choose", String(choices.indexOf(fallback) + 1));
  const idx = Number(raw) - 1;
  return choices[idx] || fallback;
}

async function main() {
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    output.write("Run `npm run llm-onboard` or `npm run llm-realm-onboard` from the LLM Realm root.\n");
    return;
  }

  output.write(`${title}\n`);
  output.write("This collects a minimal project skeleton. The LLM will refine it later.\n\n");

  const rl = readline.createInterface({ input, output });
  if (hasFilledOnboarding() && !process.argv.includes("--force")) {
    const overwrite = (await ask(rl, "Existing onboarding data found. Overwrite? yes/no", "no")).toLowerCase();
    if (!["y", "yes"].includes(overwrite)) {
      await rl.close();
      output.write("Stopped. Existing onboarding files were left unchanged.\n");
      return;
    }
  }

  const projectTitle = await ask(rl, "Project name");
  const researchObject = await ask(rl, "Research object");
  const scope = await ask(rl, "Scope (period/place/cases)", "to refine during LLM onboarding");
  const questions = splitList(await ask(rl, "Current questions (comma-separated)", "to refine during LLM onboarding"));
  const rootVaultPath = await ask(rl, "Root Vault path");
  const sourceTypes = splitList(await ask(rl, "Main source types (comma-separated)", "documents, notes"));
  const incoming = await ask(rl, "Expected incoming sources", "to refine during LLM onboarding");
  const externalPolicy = await choose(
    rl,
    "External source policy",
    ["explicit_request_only", "closed", "logged_monitoring_allowed"],
    "explicit_request_only"
  );
  const preferredCli = await choose(
    rl,
    "Preferred LLM CLI",
    ["Claude Code", "Codex", "OpenCode", "Kilo", "Other"],
    "Codex"
  );
  const outputs = splitList(await ask(rl, "Expected outputs (comma-separated)", "evidence briefs, concept indexes, memos"));
  const preferences = await ask(rl, "Researcher preferences / sensitivities", "to refine during LLM onboarding");
  await rl.close();

  const blueprint = `---
type: research_blueprint
agent: onboarding_cli
created: ${today}
updated: ${today}
onboarding_status: cli_started
---

# Research Blueprint

## Project
- Title: ${projectTitle || "[project name]"}
- Field: [to refine during LLM onboarding]
- Object: ${researchObject || "[what the project studies]"}
- Scope: ${scope}

## Questions
${yamlList(questions, "to refine during LLM onboarding")}

## Sources
- Root Vault path: ${rootVaultPath || "[path]"}
- Main source types: ${sourceTypes.join(", ") || "[source types]"}
- Expected incoming sources: ${incoming}

## Research Vocabulary
- Key actors / institutions / places: [to refine during LLM onboarding]
- Key concepts: [to refine during LLM onboarding]
- Sensitizing concepts, not evidence: [to refine during LLM onboarding]
- Theoretical frames, not forced labels: [to refine during LLM onboarding]

## Method And Evidence
- Methods: [to refine during LLM onboarding]
- Claims require source paths.
- L2 clues require back-search before reporting.
- External sources must stay labeled external unless moved into the Root Vault.
- External source policy: ${externalPolicy}

## Outputs
${yamlList(outputs, "to refine during LLM onboarding")}

## Blind Spots
- [to refine during LLM onboarding]

## Researcher Preferences
${preferences}

## Preferred LLM CLI
${preferredCli}
`;

  const config = `---
type: realm_configuration
agent: onboarding_cli
created: ${today}
updated: ${today}
onboarding_status: cli_started
---

# Realm Configuration

Agents read this before major work.

\`\`\`yaml
realm_type: research_framework
research_mode: evolving_complex_corpus
root_vault_path: "${rootVaultPath || "[path]"}"
root_vault_mode: protected_append_only

source_policy: internal_first
external_sources_allowed: ${externalPolicy}
external_logs:
  - 03_logs/external_queries.md
  - 03_logs/source_intake_log.md

claim_standard: source_link_required
l2_policy: backsearch_required

protected_paths:
  - "${rootVaultPath || "[root_vault_path]"}"
  - 02_user_realm/writing/

archive_path: 01_llm_realm/archive/
stale_after_days: 30
archive_after_days: 60
preferred_llm_cli: "${preferredCli}"
\`\`\`

## Notes
- This file was initialized by the CLI onboarding.
- The LLM onboarding flow should refine any remaining placeholders.
- This file never grants permission to edit the Root Vault.
`;

  ensureParent(paths.blueprint);
  ensureParent(paths.config);
  writeFileSync(paths.blueprint, blueprint);
  writeFileSync(paths.config, config);

  if (!existsSync(paths.omen) && existsSync(paths.omenTemplate)) {
    const omen = readFileSync(paths.omenTemplate, "utf8")
      .replace("created: [date]", `created: ${today}`)
      .replace("updated: [date]", `updated: ${today}`);
    writeFileSync(paths.omen, omen);
  }

  output.write("\nOnboarding skeleton written:\n");
  output.write(`- ${paths.blueprint}\n`);
  output.write(`- ${paths.config}\n`);
  output.write(`- ${paths.omen}\n\n`);
  const launch = cliLaunch[preferredCli] || cliLaunch.Other;
  output.write("Next:\n");
  if (launch.command) {
    output.write(`1. Run \`${launch.command}\` from this folder if that command is available.\n`);
    output.write(`2. Say: ${launch.prompt}\n`);
  } else {
    output.write(`${launch.prompt}\n`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
