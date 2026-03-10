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
        [ "IO Roundtrip Kernel", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md77", null ]
      ] ],
      [ "Basic Usage", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md79", [
        [ "Available Parameters", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md80", [
          [ "Input selection", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md81", [
            [ "<tt>-i <path></tt> / <tt>--input <path></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md82", null ],
            [ "<tt>-f <id></tt> / <tt>--format <id></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md83", null ]
          ] ],
          [ "Kernel selection", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md85", [
            [ "<tt>--kernel <name></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md86", null ]
          ] ],
          [ "Run flags (shared semantics)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md88", [
            [ "<tt>-c <0|1></tt> / <tt>--centralities <0|1></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md89", null ],
            [ "<tt>-w <0|1></tt> / <tt>--weights <0|1></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md90", null ],
            [ "<tt>-x <0|1></tt> / <tt>--inverse-weights <0|1></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md91", null ],
            [ "<tt>-k <0|1></tt> / <tt>--drop-isolates <0|1></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md92", null ]
          ] ],
          [ "Walks kernel specific", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md94", [
            [ "<tt>--walks-length <K></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md95", null ]
          ] ],
          [ "Output modes", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md97", [
            [ "<tt>--dump-json <path></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md98", null ],
            [ "<tt>--compare-json <baseline.json></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md99", null ]
          ] ],
          [ "Benchmarking (distance kernel only)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md101", [
            [ "<tt>--bench <runs></tt>", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md102", null ]
          ] ]
        ] ],
        [ "Per-kernel constraints summary", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md104", [
          [ "<tt>--kernel distance</tt> (schema v1)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md105", null ],
          [ "<tt>--kernel reachability</tt> (schema v2)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md106", null ],
          [ "<tt>--kernel walks_matrix</tt> (schema v3)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md107", null ],
          [ "<tt>--kernel prominence</tt> (schema v4)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md108", null ],
          [ "<tt>--kernel io_roundtrip</tt> (schema v5)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md109", null ]
        ] ],
        [ "Baseline naming convention (recommended)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md111", null ]
      ] ],
      [ "Golden Output Dump", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md113", [
        [ "Distance (schema v1)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md114", null ],
        [ "Reachability (schema v2)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md116", null ],
        [ "Walks Matrix (schema v3)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md118", null ],
        [ "Prominence (schema v4)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md120", null ],
        [ "IO Roundtrip (schema v5)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md122", null ]
      ] ],
      [ "Golden Output Compare", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md124", null ],
      [ "What Is Verified", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md126", [
        [ "Distance Kernel (v1)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md127", null ],
        [ "Reachability Kernel (v2)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md129", null ],
        [ "Walks Kernel (v3)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md131", null ],
        [ "Prominence Kernel (v4)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md133", null ],
        [ "IO Roundtrip Kernel (v5)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md135", null ]
      ] ],
      [ "Micro-Benchmarking Mode (Distance Kernel Only)", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md137", null ],
      [ "Automated Regression Scripts", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md139", [
        [ "Golden Comparisons", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md140", null ],
        [ "Performance Benchmarks", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md142", null ]
      ] ],
      [ "Baselines", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md144", null ],
      [ "Regression Discipline", "md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md146", null ]
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
"classDialogSettings.html#a1b53610c20ea28224b96c6d10982b16f",
"classGraph.html#a2ba145fdc819722fb94fffb57fc320cb",
"classGraph.html#a8e68318e83f963603d51fb2c3ff91b34",
"classGraph.html#aedef9a39a3f32d815b5b41ea6a580164",
"classGraphVertex.html#ad8af82e0d2415725ece0fea5a193019b",
"classGraphicsWidget.html#a2c62b58d1b0f96a2319548f8b65bd51a",
"classMainWindow.html#a48a3e784e6a986dae9ebb4362693e8a9",
"classMainWindow.html#ab0482be9bf839a35c847fbcce4259fac",
"classMyEdge.html#a2fed2376cadcbd5872b2be5e77f54d58",
"classWebCrawler.html#ac2c92f63a150febc0bd9707d91fcbdf5",
"global_8h.html#a3268ff321549e250990bbb9490fae129",
"md_tools_2SOCNETV__CLI__REGRESSION__TOOL.html#autotoc_md108",
"texteditor_8h_source.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';