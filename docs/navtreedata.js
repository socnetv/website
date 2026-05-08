/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Code Documentation", "index.html", [
    [ "Welcome", "index.html", "index" ],
    [ "Baselines", "md_tools_2baselines_2BASELINES____README.html", [
      [ "1. Schema Versions", "md_tools_2baselines_2BASELINES____README.html#autotoc_md4", null ],
      [ "2. Naming Convention", "md_tools_2baselines_2BASELINES____README.html#autotoc_md6", [
        [ "Distance Kernel (schema v1)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md7", null ],
        [ "Reachability Kernel (schema v2)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md9", null ],
        [ "Walks Kernel (schema v3)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md11", null ],
        [ "Prominence Kernel (schema v4)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md13", null ]
      ] ],
      [ "3. Golden Checklist (Pre-Release)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md15", null ],
      [ "4. How to Add a New Baseline", "md_tools_2baselines_2BASELINES____README.html#autotoc_md17", [
        [ "Step 1 — Generate JSON", "md_tools_2baselines_2BASELINES____README.html#autotoc_md18", [
          [ "Distance (v1)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md19", null ],
          [ "Reachability (v2)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md20", null ],
          [ "Walks (v3)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md21", null ],
          [ "Prominence (v4)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md22", null ]
        ] ],
        [ "Step 2 — Review", "md_tools_2baselines_2BASELINES____README.html#autotoc_md24", null ],
        [ "Step 3 — Commit", "md_tools_2baselines_2BASELINES____README.html#autotoc_md26", null ]
      ] ],
      [ "5. What Is Verified", "md_tools_2baselines_2BASELINES____README.html#autotoc_md28", [
        [ "Distance Kernel (v1)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md29", [
          [ "Graph-Level Metrics", "md_tools_2baselines_2BASELINES____README.html#autotoc_md30", null ],
          [ "Per-Node Metrics (when C=1)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md31", null ]
        ] ],
        [ "Reachability Kernel (v2)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md33", null ],
        [ "Walks Kernel (v3)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md35", null ],
        [ "Prominence Kernel (v4)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md37", [
          [ "Graph-Level", "md_tools_2baselines_2BASELINES____README.html#autotoc_md38", null ],
          [ "Per-Node (deterministic ascending id)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md39", null ]
        ] ]
      ] ],
      [ "6. Exit Codes & CI Integration", "md_tools_2baselines_2BASELINES____README.html#autotoc_md41", null ],
      [ "7. Existing Baselines", "md_tools_2baselines_2BASELINES____README.html#autotoc_md43", [
        [ "Distance (v1)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md44", null ],
        [ "Reachability (v2)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md46", null ],
        [ "Walks (v3)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md48", null ],
        [ "Prominence (v4)", "md_tools_2baselines_2BASELINES____README.html#autotoc_md50", null ]
      ] ],
      [ "8. Notes", "md_tools_2baselines_2BASELINES____README.html#autotoc_md52", null ]
    ] ],
    [ "SocNetV Tools", "md_tools_2README.html", [
      [ "socnetv-cli", "md_tools_2README.html#autotoc_md54", null ]
    ] ],
    [ "SocNetV CLI Regression Tool", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html", [
      [ "Purpose", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md57", null ],
      [ "Architecture", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md59", null ],
      [ "Design Principles", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md61", null ],
      [ "Build", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md63", null ],
      [ "Kernels and JSON Schemas", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md65", [
        [ "Distance / Centrality Kernel", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md67", null ],
        [ "Reachability Kernel", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md69", null ],
        [ "Walks Matrix Kernel", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md71", null ],
        [ "Prominence Kernel", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md73", [
          [ "Centrality", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md74", null ],
          [ "Prestige", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md75", null ]
        ] ],
        [ "IO Roundtrip Kernel", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md77", null ],
        [ "Clustering Kernel", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md79", null ]
      ] ],
      [ "Basic Usage", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md81", [
        [ "Available Parameters", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md82", [
          [ "Input selection", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md83", [
            [ "<tt>-i <path></tt> / <tt>--input <path></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md84", null ],
            [ "<tt>-f <id></tt> / <tt>--format <id></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md85", null ]
          ] ],
          [ "Kernel selection", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md87", [
            [ "<tt>--kernel <name></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md88", null ]
          ] ],
          [ "Run flags (shared semantics)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md90", [
            [ "<tt>-c <0|1></tt> / <tt>--centralities <0|1></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md91", null ],
            [ "<tt>-w <0|1></tt> / <tt>--weights <0|1></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md92", null ],
            [ "<tt>-x <0|1></tt> / <tt>--inverse-weights <0|1></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md93", null ],
            [ "<tt>-k <0|1></tt> / <tt>--drop-isolates <0|1></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md94", null ]
          ] ],
          [ "Walks kernel specific", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md96", [
            [ "<tt>--walks-length <K></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md97", null ]
          ] ],
          [ "Output modes", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md99", [
            [ "<tt>--dump-json <path></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md100", null ],
            [ "<tt>--compare-json <baseline.json></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md101", null ]
          ] ],
          [ "Benchmarking (distance kernel only)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md103", [
            [ "<tt>--bench <runs></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md104", null ]
          ] ]
        ] ],
        [ "Per-kernel constraints summary", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md106", [
          [ "<tt>--kernel distance</tt> (schema v1)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md107", null ],
          [ "<tt>--kernel reachability</tt> (schema v2)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md108", null ],
          [ "<tt>--kernel walks_matrix</tt> (schema v3)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md109", null ],
          [ "<tt>--kernel prominence</tt> (schema v4)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md110", null ],
          [ "<tt>--kernel io_roundtrip</tt> (schema v5)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md111", null ],
          [ "<tt>--kernel clustering</tt> (schema v6)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md113", null ]
        ] ],
        [ "Baseline naming convention (recommended)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md114", null ]
      ] ],
      [ "Golden Output Dump", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md116", [
        [ "Distance (schema v1)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md117", null ],
        [ "Reachability (schema v2)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md119", null ],
        [ "Walks Matrix (schema v3)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md121", null ],
        [ "Prominence (schema v4)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md123", null ],
        [ "IO Roundtrip (schema v5)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md125", null ],
        [ "Clustering (schema v6)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md127", null ]
      ] ],
      [ "Golden Output Compare", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md129", null ],
      [ "What Is Verified", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md131", [
        [ "Distance Kernel (v1)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md132", null ],
        [ "Reachability Kernel (v2)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md134", null ],
        [ "Walks Kernel (v3)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md136", null ],
        [ "Prominence Kernel (v4)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md138", null ],
        [ "IO Roundtrip Kernel (v5)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md140", null ],
        [ "Clustering Kernel (v6)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md142", null ]
      ] ],
      [ "Micro-Benchmarking Mode (Distance Kernel Only)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md144", null ],
      [ "Automated Regression Scripts", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md146", [
        [ "Golden Comparisons", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md147", null ],
        [ "Performance Benchmarks", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md149", null ]
      ] ],
      [ "Baselines", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md151", null ],
      [ "Regression Discipline", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md153", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"classDialogRandRegular.html#a292c0590f69ecf12eae3fbdd291feb01",
"classGraph.html#a0bb4167f5d9d370f0341de65c8e80762",
"classGraph.html#a651b54c88584d3b8498df8985f86a0a9",
"classGraph.html#ad261ae1ff287588b9d0e10adc864afa6aa8de07e5227bff2026d9242e139ba38f",
"classGraphVertex.html#a2f1df0616f1515d38c4b7f8477e14764",
"classGraphicsEdgeLabel.html#a495b7adac91bee93fe755965d2010e3a",
"classMainWindow.html#a06f505769cb30cd136eb54cea7dd3690",
"classMainWindow.html#a728254e563cbaab3cd8c624d189404dd",
"classMainWindow.html#ad5c0bca5eee0faace92f2db301429758",
"classParser.html#a5ba8e3b42b7752a6efa9306d5b08ccc2",
"dialogfilternodesbycentrality_8cpp.html",
"global_8h.html#ac8471c13fec21de0626abe78a6f11142",
"md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md59",
"structParser_1_1ParseConfig.html#a8c501046f042956646300ec055b6424b"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';