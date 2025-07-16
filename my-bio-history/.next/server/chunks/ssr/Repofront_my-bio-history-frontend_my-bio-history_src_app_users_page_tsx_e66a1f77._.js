module.exports = {

"[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>provausers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Repofront/my-bio-history-frontend/node_modules/.pnpm/next@15.4.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Repofront/my-bio-history-frontend/node_modules/.pnpm/next@15.4.1_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function provausers() {
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]); // Stato per memorizzare gli utente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetch('http://localhost:3001/api/users') // Chiamata all'API per ottenere gli utenti nel mio DB
        .then((response)=>response.json()) // Le api rispondono con un json
        .then((data)=>setUsers(data)) // Aggiorno lo stato con dati ricevuti
        .catch((error)=>console.error('Errore nel recuperare i dati :', error)); // Gestione degli error<
    }, []);
    console.log('Stato users:', users);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm",
                children: [
                    "Lista Utenti",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 mx-auto",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "2",
                            d: "M19 13l-7 7-7-7m14-8l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "bg-gray-100 rounded-lg p-4",
                children: Array.isArray(users) && users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "mb-2 p-2 rounded bg-blue-100 text-blue-900 hover:bg-blue-200 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inset-shadow-sm inset-shadow-indigo-500/50 shadow-xl/30 font-mono",
                                children: "Username:"
                            }, void 0, false, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: user.username
                            }, void 0, false, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 49,
                                columnNumber: 123
                            }, this),
                            "| Nome: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: [
                                    user.firstName,
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 50,
                                columnNumber: 30
                            }, this),
                            "| Cognome: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: user.lastName
                            }, void 0, false, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 51,
                                columnNumber: 33
                            }, this),
                            "| Email: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: user.email
                            }, void 0, false, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 52,
                                columnNumber: 31
                            }, this),
                            "| Anno di nascita: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: [
                                    " ",
                                    new Date(user.birthday).toISOString().slice(0, 10)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 53,
                                columnNumber: 41
                            }, this),
                            "| Luogo di nascita: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: user.birthday_place
                            }, void 0, false, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 54,
                                columnNumber: 42
                            }, this),
                            "| Provincia: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: user.province
                            }, void 0, false, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 55,
                                columnNumber: 35
                            }, this),
                            "| Sesso: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: user.sex
                            }, void 0, false, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 56,
                                columnNumber: 31
                            }, this),
                            "| Telefono: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Repofront$2f$my$2d$bio$2d$history$2d$frontend$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$4$2e$1_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: user.phoneNumber
                            }, void 0, false, {
                                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                                lineNumber: 57,
                                columnNumber: 34
                            }, this)
                        ]
                    }, user.id, true, {
                        fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Repofront/my-bio-history-frontend/my-bio-history/src/app/users/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=Repofront_my-bio-history-frontend_my-bio-history_src_app_users_page_tsx_e66a1f77._.js.map