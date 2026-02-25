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
    [ "Baselines", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html", [
      [ "1. Schema Versions", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md4", null ],
      [ "2. Naming Convention", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md6", [
        [ "Distance Kernel (schema v1)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md7", null ],
        [ "Reachability Kernel (schema v2)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md9", null ],
        [ "Walks Kernel (schema v3)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md11", null ],
        [ "Prominence Kernel (schema v4)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md13", null ]
      ] ],
      [ "3. Golden Checklist (Pre-Release)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md15", null ],
      [ "4. How to Add a New Baseline", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md17", [
        [ "Step 1 — Generate JSON", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md18", [
          [ "Distance (v1)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md19", null ],
          [ "Reachability (v2)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md20", null ],
          [ "Walks (v3)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md21", null ],
          [ "Prominence (v4)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md22", null ]
        ] ],
        [ "Step 2 — Review", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md24", null ],
        [ "Step 3 — Commit", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md26", null ]
      ] ],
      [ "5. What Is Verified", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md28", [
        [ "Distance Kernel (v1)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md29", [
          [ "Graph-Level Metrics", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md30", null ],
          [ "Per-Node Metrics (when C=1)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md31", null ]
        ] ],
        [ "Reachability Kernel (v2)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md33", null ],
        [ "Walks Kernel (v3)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md35", null ],
        [ "Prominence Kernel (v4)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md37", [
          [ "Graph-Level", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md38", null ],
          [ "Per-Node (deterministic ascending id)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md39", null ]
        ] ]
      ] ],
      [ "6. Exit Codes &amp; CI Integration", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md41", null ],
      [ "7. Existing Baselines", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md43", [
        [ "Distance (v1)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md44", null ],
        [ "Reachability (v2)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md46", null ],
        [ "Walks (v3)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md48", null ],
        [ "Prominence (v4)", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md50", null ]
      ] ],
      [ "8. Notes", "md_tools_2baselines_2_b_a_s_e_l_i_n_e_s_____r_e_a_d_m_e.html#autotoc_md52", null ]
    ] ],
    [ "SocNetV CLI Regression Tool", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html", [
      [ "Purpose", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md57", null ],
      [ "Architecture", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md59", null ],
      [ "Design Principles", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md61", null ],
      [ "Build", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md63", null ],
      [ "Kernels and JSON Schemas", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md65", [
        [ "Distance / Centrality Kernel", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md67", null ],
        [ "Reachability Kernel", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md69", null ],
        [ "Walks Matrix Kernel", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md71", null ],
        [ "Prominence Kernel", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md73", [
          [ "Centrality", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md74", null ],
          [ "Prestige", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md75", null ]
        ] ]
      ] ],
      [ "Basic Usage", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md77", null ],
      [ "Golden Output Dump", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md79", [
        [ "Distance (schema v1)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md80", null ],
        [ "Reachability (schema v2)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md82", null ],
        [ "Walks Matrix (schema v3)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md84", null ],
        [ "Prominence (schema v4)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md86", null ]
      ] ],
      [ "Golden Output Compare", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md88", null ],
      [ "What Is Verified", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md90", [
        [ "Distance Kernel (v1)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md91", null ],
        [ "Reachability Kernel (v2)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md93", null ],
        [ "Walks Kernel (v3)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md95", null ],
        [ "Prominence Kernel (v4)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md97", null ]
      ] ],
      [ "Micro-Benchmarking Mode (Distance Kernel Only)", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md99", null ],
      [ "Automated Regression Scripts", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md101", [
        [ "Golden Comparisons", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md102", null ],
        [ "Performance Benchmarks", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md104", null ]
      ] ],
      [ "Baselines", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md106", null ],
      [ "Regression Discipline", "md_tools_2_s_o_c_n_e_t_v___c_l_i___r_e_g_r_e_s_s_i_o_n___t_o_o_l.html#autotoc_md108", null ]
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
"class_dialog_settings.html#a1b53610c20ea28224b96c6d10982b16f",
"class_graph.html#a2ba145fdc819722fb94fffb57fc320cb",
"class_graph.html#a8fec77893a012778ad433e3cc54ddbc4",
"class_graph.html#aedaad09314385ecb0b4282988a3802b8",
"class_graph_vertex.html#ad69f8cf682c1b6e9c2eaa5ddfd1d30f8",
"class_graphics_widget.html#a2acd2b27f0d2264a3318c79fb58e3153",
"class_main_window.html#a477f20629a4486c0e0434ed9cfdc212d",
"class_main_window.html#aaf277e787a93cee641a1b5c50769a9cd",
"class_my_edge.html",
"dialognodefind_8h.html",
"graph_8h.html#ac58bb8330f028b6b77c3dee117f6467a",
"struct_actor.html#a8df2091bdf14edccdda648165c94f69d"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';