---
title: Accordion Sample
permalink: /psg/am-hrms/accordion-sample/
accordion:
  - title: Simple
    content: This is a simple one line item
  - title: Multi-line Block
    content: |
      This is line 1

      This is line 2<br/>
      This is line 3
  - title: Multi-line Folded
    content: >
      This is all going

      to become just one line\n
      even though there are multiple lines
  - title: Ordered List
    content: |
      1. Item 1
      2. Item 2
      3. Item 3
  - title: Unordered List
    content: |
      * Item 1
      * Item 2
      * Item 3
---

# Accordion Sample

This is the line before accordion

{% include accordion.html %}

This is the line after accordion