export default `:host(.scrollable){overflow:auto;}:host(.scrollable-vertical){overflow-y:auto;}:host(.scrollable-horizontal){overflow-x:auto;}.scroll-button{position:sticky;left:calc(100% - 45px);top:calc(100% - 45px);cursor:pointer;visibility:hidden;font-size:18px;border-radius:50%;background-color:rgba(0, 0, 0, 0.25);color:white;width:36px;min-height:0;display:flex;align-items:center;justify-content:center;z-index:9999;opacity:0;height:0;transition:min-height 0s,
    visibility 0s,
    opacity 0.2s ease-in-out;}.visible{height:unset;min-height:36px;visibility:visible;opacity:1;}.scroll-button.visible:before{content:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWFycm93LWJpZy1kb3duLWZpbGxlZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgIDxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSI+PC9wYXRoPgogICA8cGF0aCBkPSJNMTAgMmwtLjE1IC4wMDVhMiAyIDAgMCAwIC0xLjg1IDEuOTk1djYuOTk5bC0yLjU4NiAuMDAxYTIgMiAwIDAgMCAtMS40MTQgMy40MTRsNi41ODYgNi41ODZhMiAyIDAgMCAwIDIuODI4IDBsNi41ODYgLTYuNTg2YTIgMiAwIDAgMCAuNDM0IC0yLjE4bC0uMDY4IC0uMTQ1YTIgMiAwIDAgMCAtMS43OCAtMS4wODlsLTIuNTg2IC0uMDAxdi02Ljk5OWEyIDIgMCAwIDAgLTIgLTJoLTR6IiBzdHJva2Utd2lkdGg9IjAiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPgo8L3N2Zz4=');margin-top:10px;filter:invert();}`
