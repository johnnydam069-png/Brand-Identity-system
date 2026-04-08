const paletteOptions = [
  { name: "Ocean Pulse", dark: "#0C4A6E", mid: "#0284C7", light: "#BAE6FD" },
  { name: "Emerald Leaf", dark: "#14532D", mid: "#22C55E", light: "#BBF7D0" },
  { name: "Sunset Ember", dark: "#7C2D12", mid: "#EA580C", light: "#FED7AA" },
  { name: "Royal Violet", dark: "#4C1D95", mid: "#7C3AED", light: "#DDD6FE" },
  { name: "Rose Quartz", dark: "#881337", mid: "#E11D48", light: "#FECDD3" },
  { name: "Midnight Gold", dark: "#1F2937", mid: "#D4A017", light: "#FDE68A" },
  { name: "Slate Mint", dark: "#1E293B", mid: "#14B8A6", light: "#CCFBF1" },
  { name: "Coral Sky", dark: "#9A3412", mid: "#F97316", light: "#FFEDD5" }
];

const fontPairs = [
  { name: "Playfair + Inter", heading: "'Playfair Display', serif", body: "Inter, sans-serif" },
  { name: "Montserrat + Inter", heading: "Montserrat, sans-serif", body: "Inter, sans-serif" },
  { name: "Poppins + Source Sans 3", heading: "Poppins, sans-serif", body: "'Source Sans 3', sans-serif" },
  { name: "Lora + Nunito Sans", heading: "Lora, serif", body: "'Nunito Sans', sans-serif" },
  { name: "Space Grotesk + Inter", heading: "'Space Grotesk', sans-serif", body: "Inter, sans-serif" }
];

const logoStyles = [
  { id: "initials", label: "Initials" },
  { id: "geometric", label: "Geometric" },
  { id: "wordmark", label: "Wordmark" }
];

const personalityPool = [
  "Bold", "Minimal", "Premium", "Playful", "Trustworthy",
  "Modern", "Friendly", "Innovative", "Elegant", "Energetic"
];

const state = {
  brandName: "Vvisualize",
  tagline: "Designing identities that resonate.",
  industry: "Creative Studio",
  paletteIndex: 0,
  logoStyle: "initials",
  fontPairIndex: 0,
  personality: new Set(["Bold", "Modern", "Premium"])
};

const el = {
  brandName: document.getElementById("brandName"),
  tagline: document.getElementById("tagline"),
  industry: document.getElementById("industry"),
  paletteSelect: document.getElementById("paletteSelect"),
  logoStyles: document.getElementById("logoStyles"),
  fontPair: document.getElementById("fontPair"),
  personalityTags: document.getElementById("personalityTags"),
  generateBtn: document.getElementById("generateGuidelines"),
  guidelinesDoc: document.getElementById("guidelinesDoc"),
  brandNamePreview: document.getElementById("brandNamePreview"),
  taglinePreview: document.getElementById("taglinePreview"),
  logoMark: document.getElementById("logoMark"),
  swatches: document.getElementById("swatches"),
  swatchLabels: document.getElementById("swatchLabels"),
  bizBrand: document.getElementById("bizBrand"),
  bizTagline: document.getElementById("bizTagline"),
  bizIndustry: document.getElementById("bizIndustry"),
  socialAvatar: document.getElementById("socialAvatar"),
  socialHandle: document.getElementById("socialHandle"),
  socialIndustry: document.getElementById("socialIndustry"),
  socialPill: document.getElementById("socialPill"),
  socialHeadline: document.getElementById("socialHeadline"),
  socialSubtext: document.getElementById("socialSubtext"),
  socialCta: document.getElementById("socialCta"),
  packBrand: document.getElementById("packBrand"),
  packLine: document.getElementById("packLine"),
  packTag: document.getElementById("packTag"),
  packIndustry: document.getElementById("packIndustry"),
  packDescriptor: document.getElementById("packDescriptor"),
  headingSample: document.getElementById("headingSample"),
  bodySample: document.getElementById("bodySample"),
  activeTags: document.getElementById("activeTags")
};

function initialsFromName(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join("") || "BR";
}

function buildSocialHandle(name) {
  const token = (name || "brand")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .slice(0, 14);
  return `@${token || "brandstudio"}`;
}

function createSelectOptions() {
  el.paletteSelect.innerHTML = paletteOptions
    .map((p, i) => `<option value="${i}">${p.name}</option>`)
    .join("");
  el.fontPair.innerHTML = fontPairs
    .map((f, i) => `<option value="${i}">${f.name}</option>`)
    .join("");
}

function createLogoStyleToggles() {
  el.logoStyles.innerHTML = "";
  logoStyles.forEach(style => {
    const btn = document.createElement("button");
    btn.className = "toggle";
    btn.type = "button";
    btn.textContent = style.label;
    btn.dataset.style = style.id;
    btn.addEventListener("click", () => {
      state.logoStyle = style.id;
      render();
    });
    el.logoStyles.appendChild(btn);
  });
}

function createPersonalityTags() {
  el.personalityTags.innerHTML = "";
  personalityPool.forEach(tag => {
    const item = document.createElement("span");
    item.className = "tag-pill";
    item.textContent = tag;
    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    const toggle = () => {
      if (state.personality.has(tag)) {
        state.personality.delete(tag);
      } else {
        state.personality.add(tag);
      }
      render();
    };
    item.addEventListener("click", toggle);
    item.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
    el.personalityTags.appendChild(item);
  });
}

function updateThemeVariables() {
  const palette = paletteOptions[state.paletteIndex];
  document.documentElement.style.setProperty("--brand-dark", palette.dark);
  document.documentElement.style.setProperty("--brand-mid", palette.mid);
  document.documentElement.style.setProperty("--brand-light", palette.light);
}

function renderLogoMark() {
  const name = state.brandName || "Brand";
  if (state.logoStyle === "initials") {
    el.logoMark.textContent = initialsFromName(name);
    el.logoMark.style.borderRadius = "16px";
    el.logoMark.style.background = "var(--brand-mid)";
    el.logoMark.style.fontSize = "26px";
  } else if (state.logoStyle === "geometric") {
    el.logoMark.textContent = "◈";
    el.logoMark.style.borderRadius = "20px";
    el.logoMark.style.background = "linear-gradient(145deg, var(--brand-dark), var(--brand-mid))";
    el.logoMark.style.fontSize = "34px";
  } else {
    el.logoMark.textContent = (state.brandName || "Brand").slice(0, 6);
    el.logoMark.style.borderRadius = "12px";
    el.logoMark.style.background = "var(--brand-dark)";
    el.logoMark.style.fontSize = "16px";
  }
}

function renderPalette() {
  const palette = paletteOptions[state.paletteIndex];
  const colors = [palette.dark, palette.mid, palette.light];
  el.swatches.innerHTML = colors.map(color => `<div class="swatch" style="background:${color}"></div>`).join("");
  el.swatchLabels.innerHTML = ["Dark", "Mid", "Light"]
    .map((name, idx) => `<span>${name}: ${colors[idx]}</span>`)
    .join("");
}

function renderTags() {
  Array.from(el.personalityTags.children).forEach(node => {
    node.classList.toggle("active", state.personality.has(node.textContent));
  });
  el.activeTags.innerHTML = Array.from(state.personality)
    .map(tag => `<span class="badge">${tag}</span>`)
    .join("");
}

function renderTypography() {
  const pair = fontPairs[state.fontPairIndex];
  el.headingSample.style.fontFamily = pair.heading;
  el.bodySample.style.fontFamily = pair.body;
  el.brandNamePreview.style.fontFamily = pair.heading;
  el.bizBrand.style.fontFamily = pair.heading;
  el.socialHeadline.style.fontFamily = pair.heading;
  el.socialSubtext.style.fontFamily = pair.body;
  el.socialHandle.style.fontFamily = pair.body;
  el.packBrand.style.fontFamily = pair.heading;
  el.packDescriptor.style.fontFamily = pair.body;
}

function renderButtons() {
  Array.from(el.logoStyles.children).forEach(btn => {
    btn.classList.toggle("active", btn.dataset.style === state.logoStyle);
  });
}

function renderText() {
  const tags = Array.from(state.personality);
  const primaryTone = tags[0] || "Modern";
  const secondaryTone = tags[1] || "Bold";
  el.brandNamePreview.textContent = state.brandName || "Brand Name";
  el.taglinePreview.textContent = state.tagline || "Brand tagline goes here.";
  el.bizBrand.textContent = state.brandName || "Brand Name";
  el.bizTagline.textContent = state.tagline || "Tagline";
  el.bizIndustry.textContent = state.industry || "Industry";

  el.socialAvatar.textContent = initialsFromName(state.brandName || "Brand");
  el.socialHandle.textContent = buildSocialHandle(state.brandName);
  el.socialIndustry.textContent = state.industry || "Industry";
  el.socialPill.textContent = `${primaryTone} • ${secondaryTone}`;
  el.socialHeadline.textContent = state.tagline || `Design a distinct ${state.industry || "brand"} identity`;
  el.socialSubtext.textContent = `${state.brandName || "Brand"} visual system — consistent, scalable, memorable.`;
  el.socialCta.textContent = `Explore ${state.brandName || "Brand"}`;

  el.packBrand.textContent = state.brandName || "Brand";
  el.packLine.textContent = `${primaryTone} Collection`;
  el.packTag.textContent = secondaryTone.toUpperCase();
  el.packIndustry.textContent = state.industry || "Industry";
  el.packDescriptor.textContent = state.tagline || "Signature packaging direction";
  el.headingSample.textContent = `${state.brandName || "Brand"} Headline Example`;
  el.bodySample.textContent = `${state.industry || "Industry"} brands need clear hierarchy, consistent voice, and scalable design patterns.`;
}

function render() {
  updateThemeVariables();
  renderText();
  renderLogoMark();
  renderPalette();
  renderTags();
  renderTypography();
  renderButtons();
}

function generateGuidelinesDoc() {
  const palette = paletteOptions[state.paletteIndex];
  const pair = fontPairs[state.fontPairIndex];
  const tags = Array.from(state.personality);
  const doc = `# ${state.brandName || "Brand"} — Brand Guidelines

## 1) Discovery Snapshot
- Industry: ${state.industry || "Not specified"}
- Personality: ${tags.length ? tags.join(", ") : "Not specified"}
- Core message: ${state.tagline || "Not specified"}

## 2) Logo System
- Logo style: ${state.logoStyle}
- Primary lockup: ${state.brandName || "Brand"} + tagline
- Clear space: minimum 0.5x logo height on all sides
- Minimum size: 24px digital / 12mm print
- Avoid: stretching, rotation, off-palette colors

## 3) Color Palette
- Primary Dark: ${palette.dark}
- Primary Mid: ${palette.mid}
- Primary Light: ${palette.light}
- Neutrals: #111827, #6B7280, #F3F4F6, #FFFFFF
- Accessibility: use dark text on ${palette.light} and light text on ${palette.dark}

## 4) Typography
- Heading font: ${pair.heading}
- Body font: ${pair.body}
- Hierarchy: H1 48/56, H2 32/40, H3 24/32, Body 16/26
- Recommended emphasis: weight contrast before color contrast

## 5) Voice & Personality
- Tone words: ${tags.length ? tags.join(", ") : "Not selected"}
- Copy style: concise, benefit-led, and audience-aware
- CTA style: action-first verbs with a clear outcome

## 6) Mockup Applications
- Business card
- Social media post template
- Packaging box + label
- Tote bag
- Signage board

## 7) Usage Rules
Do:
- Use approved logo lockups only
- Keep typography pair consistent
- Preserve color contrast for readability

Don't:
- Mix additional typefaces without approval
- Apply gradients to body text
- Place logo on busy backgrounds without a neutral container
`;
  el.guidelinesDoc.textContent = doc;
}

function bindEvents() {
  el.brandName.addEventListener("input", e => {
    state.brandName = e.target.value.trim();
    render();
  });
  el.tagline.addEventListener("input", e => {
    state.tagline = e.target.value.trim();
    render();
  });
  el.industry.addEventListener("input", e => {
    state.industry = e.target.value.trim();
    render();
  });
  el.paletteSelect.addEventListener("change", e => {
    state.paletteIndex = Number(e.target.value);
    render();
  });
  el.fontPair.addEventListener("change", e => {
    state.fontPairIndex = Number(e.target.value);
    render();
  });
  el.generateBtn.addEventListener("click", () => {
    generateGuidelinesDoc();
  });
}

function init() {
  createSelectOptions();
  createLogoStyleToggles();
  createPersonalityTags();
  bindEvents();
  el.paletteSelect.value = String(state.paletteIndex);
  el.fontPair.value = String(state.fontPairIndex);
  render();
}

init();
