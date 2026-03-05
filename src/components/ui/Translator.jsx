import { useState, useRef, useEffect, useCallback } from "react";

const LANGUAGES = [
  { code: "en", label: "EN", full: "English" },
  { code: "es", label: "ES", full: "Spanish" },
  { code: "fr", label: "FR", full: "French" },
  { code: "de", label: "DE", full: "German" },
  { code: "it", label: "IT", full: "Italian" },
  { code: "pt", label: "PT", full: "Portuguese" },
  { code: "ru", label: "RU", full: "Russian" },
  { code: "zh", label: "ZH", full: "Chinese" },
  { code: "ja", label: "JA", full: "Japanese" },
  { code: "ko", label: "KO", full: "Korean" },
  { code: "ar", label: "AR", full: "Arabic" },
  { code: "hi", label: "HI", full: "Hindi" },
  { code: "tr", label: "TR", full: "Turkish" },
  { code: "nl", label: "NL", full: "Dutch" },
  { code: "pl", label: "PL", full: "Polish" },
  { code: "uk", label: "UK", full: "Ukrainian" },
];

// ---------- Translation engine (MyMemory, free, no key) ----------
async function translateText(text, from, to) {
  if (!text.trim() || from === to) return text;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.responseStatus === 200) return data.responseData.translatedText;
  return text; // fallback: return original
}

// Batch: split long arrays into chunks to stay under the 500-char limit
function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// ---------- DOM walker: collect & restore text nodes ----------
const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "CODE", "PRE"]);

function collectTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(node.parentElement?.tagName)) return NodeFilter.FILTER_REJECT;
      // Skip the translator bar itself
      if (node.parentElement?.closest?.("[data-translator-bar]")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);
  return nodes;
}

// ---------- Component ----------
export default function TranslatorBar() {
  const [activeLang, setActiveLang] = useState("en");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | translating | done | error
  const dropRef = useRef(null);
  // Store originals: Map<TextNode, originalValue>
  const originals = useRef(new Map());
  const originalLang = useRef("en");

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => { if (dropRef.current && !dropRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const restoreOriginals = useCallback(() => {
    originals.current.forEach((original, node) => {
      if (node.isConnected) node.textContent = original;
    });
  }, []);

  const translatePage = useCallback(async (toLang) => {
    if (toLang === activeLang) return;

    // If reverting to original language
    if (toLang === originalLang.current && originals.current.size > 0) {
      restoreOriginals();
      setActiveLang(toLang);
      setStatus("idle");
      return;
    }

    setStatus("translating");
    setOpen(false);

    // Collect text nodes
    const nodes = collectTextNodes(document.body);

    // If we don't have originals saved yet, save them now
    if (originals.current.size === 0) {
      nodes.forEach((n) => originals.current.set(n, n.textContent));
    } else {
      // Restore originals first before re-translating (so we translate from source)
      restoreOriginals();
    }

    // Re-collect after restore (nodes may have changed)
    const freshNodes = collectTextNodes(document.body);
    const texts = freshNodes.map((n) => n.textContent.trim());

    // Translate in batches of 5 nodes at a time
    const batches = chunkArray(
      freshNodes.map((node, i) => ({ node, text: texts[i] })),
      5
    );

    try {
      for (const batch of batches) {
        await Promise.all(
          batch.map(async ({ node, text }) => {
            const translated = await translateText(text, originalLang.current, toLang);
            if (node.isConnected) node.textContent = translated;
          })
        );
      }
      setActiveLang(toLang);
      setStatus("done");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }, [activeLang, restoreOriginals]);

  const currentLang = LANGUAGES.find((l) => l.code === activeLang);

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeDown { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:none; } }
        [data-translator-bar] * { box-sizing: border-box; }
      `}</style>

      <div
        data-translator-bar="true"
        style={{
          width: "100%",
          background: "#f8f8f8",
          borderBottom: "1px solid #e5e5e5",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          height: 36,
          fontFamily: "system-ui, sans-serif",
          fontSize: 13,
          userSelect: "none",
          position: "relative",
          zIndex: 9999,
        }}
      >
        {/* Label */}
        <span style={{ color: "#555", fontWeight: 500, marginRight: 8, letterSpacing: "0.01em" }}>
          Translator
        </span>

        {/* Dropdown trigger */}
        <div ref={dropRef} style={{ position: "relative" }}>
          <button
            onClick={() => setOpen((o) => !o)}
            disabled={status === "translating"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              padding: "3px 8px",
              border: "1px solid #ccc",
              borderRadius: 5,
              background: "#fff",
              cursor: status === "translating" ? "not-allowed" : "pointer",
              fontSize: 13,
              fontWeight: 600,
              color: "#222",
              letterSpacing: "0.05em",
              outline: "none",
              transition: "border-color 0.15s",
              opacity: status === "translating" ? 0.6 : 1,
            }}
          >
            {status === "translating" ? (
              <span
                style={{
                  display: "inline-block",
                  width: 11,
                  height: 11,
                  border: "1.5px solid #aaa",
                  borderTopColor: "#333",
                  borderRadius: "50%",
                  animation: "spin 0.7s linear infinite",
                }}
              />
            ) : (
              currentLang?.label
            )}
            <svg viewBox="0 0 10 10" style={{ width: 9, height: 9, marginLeft: 1 }} fill="none">
              <path d="M2 3.5l3 3 3-3" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {open && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 4px)",
                left: 0,
                background: "#fff",
                border: "1px solid #ddd",
                borderRadius: 8,
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                minWidth: 160,
                zIndex: 10000,
                animation: "fadeDown 0.12s ease-out",
                overflow: "hidden",
              }}
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => translatePage(lang.code)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    width: "100%",
                    padding: "7px 14px",
                    background: lang.code === activeLang ? "#f0f7ff" : "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    color: lang.code === activeLang ? "#1d6fc4" : "#333",
                    fontWeight: lang.code === activeLang ? 600 : 400,
                    textAlign: "left",
                    transition: "background 0.1s",
                  }}
                  onMouseEnter={(e) => { if (lang.code !== activeLang) e.currentTarget.style.background = "#f5f5f5"; }}
                  onMouseLeave={(e) => { if (lang.code !== activeLang) e.currentTarget.style.background = "transparent"; }}
                >
                  <span style={{ fontWeight: 700, minWidth: 28, color: "#888", fontSize: 11, letterSpacing: "0.05em" }}>
                    {lang.label}
                  </span>
                  {lang.full}
                  {lang.code === activeLang && (
                    <svg style={{ marginLeft: "auto", width: 12, height: 12, color: "#1d6fc4" }} viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Status message */}
        {status === "translating" && (
          <span style={{ marginLeft: 10, color: "#888", fontSize: 12 }}>Translating page…</span>
        )}
        {status === "done" && (
          <span style={{ marginLeft: 10, color: "#16a34a", fontSize: 12 }}>✓ Page translated</span>
        )}
        {status === "error" && (
          <span style={{ marginLeft: 10, color: "#dc2626", fontSize: 12 }}>Translation failed, try again</span>
        )}
      </div>
    </>
  );
}