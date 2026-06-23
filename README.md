```txt
███████╗ ██████╗ ██████╗ ██╗ ██████╗ █████╗ 
██╔════╝██╔═══██╗██╔══██╗██║██╔════╝██╔══██╗
███████╗██║   ██║██████╔╝██║██║     ███████║
╚════██║██║   ██║██╔══██╗██║██║     ██╔══██║
███████║╚██████╔╝██║  ██║██║╚██████╗██║  ██║
╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝
```

# SoRICa

**SoRICa** stands for **Social Research Interactive Categorizer**.

**SoRICa** is a modified and independent derivative of the original **Pilosa / Spinosa** framework created by **Tommaso Prinetti**.

This project keeps the general idea of a structured, multi-agent-readable research workspace, while extending and adapting it with new agents, modified orchestration rules, and project-specific workflows.

The goal of this repository is to provide a customized agent-based framework for organizing, indexing, exploring, and querying a protected corpus of research materials.

## Authors 

This project was developed by : 

- Aduni Lawani 
- Alina Tarlapan
- Marion Mercier


## Origin and Attribution

This project is based on the original Pilosa / Spinosa project by Tommaso Prinetti.

Original project: `TommasoPrinetti/pilosa` / `TommasoPrinetti/spinosa`
Original author: Tommaso Prinetti
Original license: PolyForm Noncommercial 1.0.0

The original framework provided the foundation for the workspace structure, the orchestration logic, the agent-based organization, and the research vault workflow.

This repository is not the official Pilosa / Spinosa project. It is an independent derivative version created for our own research and development needs.

## What This Version Adds

This version introduces several modifications and extensions, including:

* new specialist agents;
* adapted orchestration rules;
* modified documentation;
* project-specific research workflows;
* customized setup and usage instructions;
* additional structures for organizing research materials;
* possible future extensions for indexing, reporting, and corpus analysis.
* remove context indexes

The purpose of these changes is to make the framework better suited to our own research practices and methodological needs.

## What the Project Does

**SoRICa** turns a protected folder of source material, called the **Root Vault**, into a structured research workspace that can be read and navigated by LLM-based agents.

The system is organized around a set of specialist agents. Each agent has a specific role in the workflow, such as:

* conceptualizing research material;
* navigating the indexed corpus;
* packing relevant evidence;
* checking answers and interpretations;
* cleaning and maintaining the workspace;
* supporting project startup and indexing.

The orchestrator routes user prompts through the appropriate agents depending on the type of request.

## Quick Start

### 1. Clone this repository

```bash
git clone https://github.com/adu-proud/sorica.git
cd sorica
```

### 2. Create your own project branch

Each research project can live on its own branch. This helps keep the framework separate from project-specific data, configuration files, and indexed materials.

```bash
git checkout -b my-project-name
git push -u origin my-project-name
```

### 3. Run the onboarding script

The onboarding script helps configure the workspace for a specific research project.

```bash
bash .bin/onboard.sh
```

The script may ask for:

* the project name;
* the preferred LLM CLI;
* the path to the Root Vault;
* optional project information;
* setup preferences.

It then prepares the workspace and generates a startup prompt to paste into the selected LLM CLI.

### 4. Start the project with your LLM CLI

Open the chosen LLM CLI inside this folder and paste the generated startup prompt.

The startup process will:

1. read the setup draft;
2. update the project configuration files;
3. copy text-based Root Vault files into the LLM-readable zone;
4. generate headers and indexes;
5. build concept indexes;
6. run a retrieval smoke test;
7. write a startup report.

After startup, the workspace can be used for research questions, evidence retrieval, synthesis, verification, and reporting.

## Project Structure

```txt
[project-name]/
├── AGENTS.md
├── GLOSSARY.md
├── README.md
├── .bin/
│   ├── onboard.sh
│   └── check-startup.sh
├── onboard.command
├── onboard.cmd
├── 00_system/
│   ├── instructions/
│   ├── sub_agents/
│   └── templates/
├── 01_llm_zone/
│   ├── 00_zone_index.md
│   ├── 00_dictionary.md
│   ├── raw/
│   ├── 01_metadata/
│   └── 03_concept_indexes/
├── 02_user_zone/
│   └── RESEARCH_BLUEPRINT.md
├── 03_logs/
└── 05_agent_reports/
```

## Main Principles

This project follows several working principles:

* the Root Vault should never be edited directly;
* research materials should be copied into a separate LLM-readable zone;
* every indexed file should include structured metadata;
* agents should have clearly separated responsibilities;
* answers should be grounded in the available corpus;
* verification should be part of the workflow;
* project-specific changes should remain distinguishable from the original framework.

## Agents

The system is organized around multiple agents. The exact list may evolve over time.

Current or planned agent roles include:

* **Orchestrator**: classifies the user request and routes it to the appropriate workflow.
* **Conceptualizer**: identifies concepts, themes, categories, and theoretical links.
* **Navigator**: finds relevant materials in the indexed corpus.
* **Packer**: gathers useful evidence and prepares it for answer generation.
* **Checker**: verifies consistency, grounding, and possible errors.
* **Cleaner**: helps maintain the workspace and retire outdated files.
* **Startup Agent**: initializes the project and builds the first indexes.
* **Slicer**: segment respondent turns into discrete meaning units.
* **QR_slicer**: segment interview into coherent question/answer pairs.
* **Encoder**: produce active verbal codes from meaning units.
* **interaction_encoder**: identify and encode emotionally or rhetorically significant moments in Q/A pairs.
* **focalizer**: build a running focused coding across interviews, updating iteratively after each new interview pair.
* **challenger**: actively seek counter-examples and weak points in focalizer draft.
* **categorizer**: build grounded theory categories through interactive dialogue with the researcher.


## Differences from the Original Project

This repository differs from the original Pilosa / Spinosa framework in several ways:

| Area              | Original Framework              | This Version                             |
| ----------------- | ------------------------------- | ---------------------------------------- |
| Agents            | Original agent set              | Adds new agents and modified roles       |
| Orchestration     | Original routing logic          | Adapted routing rules                    |
| Documentation     | Original README and setup notes | Rewritten documentation for this project |
| Research workflow | General framework               | Customized for our own research use       |
| Project identity  | Pilosa / Spinosa                | Independent derivative project           |

## Private and Generated Folders 
Some folders are required by the framework but are intentionally not versioned with their contents: 
- `01_llm_zone/raw/` contains local copies of source materials from the user's Root Vault. 
- `05_agent_reports/` contains generated reports produced during startup and agent workflows. For privacy and security reasons, the contents of these folders are ignored by Git. When setting up the project locally, keep these folders in place, but do not commit personal research materials, interview transcripts, generated reports, or private corpus files.


## License

This project is based on software originally licensed under the **PolyForm Noncommercial 1.0.0** license.

The parts of this repository derived from the original Pilosa / Spinosa project remain subject to the original license terms.

Unless otherwise stated, our own modifications and additions are also distributed under the same non-commercial license in order to remain compatible with the original project.

See the `LICENSE` file for details.

## Non-Commercial Use

Because the original project uses the PolyForm Noncommercial license, this derivative project should not be used for commercial purposes unless the original license allows it or explicit permission is obtained from the original author.

## Credits

This project would not exist without the original work of Tommaso Prinetti on Pilosa / Spinosa.

Original author: Tommaso Prinetti
Original repository: `TommasoPrinetti/pilosa` / `TommasoPrinetti/spinosa`
Original license: PolyForm Noncommercial 1.0.0

## Disclaimer

This is an independent derivative project. It is not affiliated with, endorsed by, or maintained by the original author of Pilosa / Spinosa.

All modifications, extensions, and possible errors in this repository are our own.
