# Header Template

Use only the fields needed for the file. Do not fill empty analytic fields just because they exist here.

## Required For Every Agent File

```yaml
---
type: [file_type]
agent: [Cicero | Lucrezio | Tacito | Varro]
created: [date]
updated: [date]
---
```

## Add For Evidence-Bearing Files

```yaml
source: /root_vault/source_batch_NNN/[subfolder]/[file]
source_type: [from SOURCE_TYPE_TAXONOMY.md]
evidence_type: [primary | processed | interpretive | external]
evidence_level: [L1 | L2]
confidence: [high | medium | low]
tags: [tag1, tag2]
```

## Add For Coded Fragments Or Indexes

```yaml
codes:
  - [descriptive code]
concepts:
  - "[[Concept Name]]"
category: "[[Category Name]]"
coding_status: uncoded | open_coded | focused_coded | categorized
```

## Add Only When Relevant

```yaml
negative_case_status: none_found | partial | present | needs_search
constant_comparison:
  similar_fragments:
    - "[[Fragment]]"
  contrasting_fragments:
    - "[[Fragment]]"
  comparison_status: not_compared | partial | compared
sensitizing_concepts:
  - [attention guide, not evidence]
theoretical_frames:
  - [frame to consider later]
serendipity_type: none | anomaly | metaphor | contradiction | weak_signal | adjacent_case | negative_space
relation_to_query: direct | adjacent | oppositional | speculative
requires_backsearch: true | false
```

## Rule
Frontmatter is for routing and retrieval. The body is for interpretation, comparison, and context.
