// ---- Content from the one-pagers. p = indices of linked priorities (links are my best guess) ----
const AREAS = {
  "Education": {
    icon: "🎓",
    what: "Early childhood through postsecondary systems that prepare Central Florida residents for lifelong learning, economic opportunity, and civic participation.",
    char: "Children entering kindergarten ready to learn, students graduating prepared for college or career, and affordable pathways for skill and degree attainment.",
    issues: [["Child Care Deserts", "🧒", [0]], ["Teacher Shortages", "👩‍🏫", [1]], ["Youth Disengagement", "😟", [3]], ["Achievement Gaps", "🔗", [1, 3]], ["Postsecondary Barriers", "🎓", [2]], ["Workforce Misalignment", "💼", [2, 3]]],
    priorities: [
      ["Expanding ECE Infrastructure & Capacity", "🌱", [
        ["Shared-services pilot for small providers", ["Centralized back-office support", "Wage supplements", "Paid internships (CareerSource/Valencia/UCF)"]],
        ["Advocate state policy changes", ["Raise School Readiness eligibility to 55%+ State Median Income", "Increase reimbursement rates", "Refundable Child/Dependent Care Tax Credit", "County zoning reform allowing childcare everywhere"]],
        ["Pilot birth-to-five programs", ["Abecedarian/CARE model"]]]],
      ["Strengthening K-12 Teacher Recruitment & Retention", "🍎", [
        ["Advocate competitive pay", ["Salaries comparable to neighboring states and other bachelor's-degree professions"]],
        ["Retention bonuses", ["For high-need schools, subjects and areas"]],
        ["“Grow Your Own” pipelines", ["Recruit paraprofessionals, substitutes and community members", "Scholarship-supported degree completion"]]]],
      ["Fighting Postsecondary Affordability Barriers", "💲", [
        ["FAFSA completion drive", ["CF-wide, built into graduation checklists", "Support hubs to help families navigate applications"]],
        ["Regional emergency aid fund", ["Sub-72-hour disbursement for rent, utilities, groceries, textbooks, transportation"]],
        ["Student Basic Needs Network", ["Link campuses to SNAP/WIC/TANF with embedded navigators", "Peer navigators for parenting students"]]]],
      ["Increasing Access to Accelerated Coursework", "📖", [
        ["Microgrants & teacher incentives", ["$5K-15K per school so high-need schools can offer AP/dual enrollment"]],
        ["Cost coverage", ["Subsidies for exam fees, tuition, textbooks for low-income students"]],
        ["Expand access & awareness", ["Online/hybrid options for rural/underserved schools", "Campaigns for first-generation, immigrant and low-income families"]]]]]
  },
  "Healthcare": {
    icon: "🩺",
    what: "Systems, services, and resources that allow Central Florida residents to achieve optimal physical and mental health, including medical care, behavioral health, preventive services, insurance coverage, and the social determinants shaping outcomes.",
    char: "Equal access to informed, affordable, high-quality care regardless of income, race, or zip code; integrated physical, behavioral, and social services.",
    issues: [["Insurance & Coverage Gaps", "🛡️", [0]], ["Provider Shortages", "🧑‍⚕️", [1]], ["Youth Mental Health Crisis", "🧠", [3]], ["Maternal Mortality", "🤰", [1]], ["Chronic Disease Burdens", "❤️‍🩹", [2]], ["Silo-ing of Systems", "🧩", [3]]],
    priorities: [
      ["Expanding Access for the Uninsured & Underinsured", "🏥", [
        ["Community health navigators", ["No-cost navigators in libraries, schools and community centers", "Help residents enroll in ACA/Medicaid"]],
        ["Direct Primary Care Co-Ops", ["Employer-sponsored pilot", "$50-75/month flat fee for unlimited primary care"]]]],
      ["Tackling Maternal/Child Health Barriers", "👶", [
        ["Scale nurse home visiting", ["Serve 500+ first-time low-income mothers"]],
        ["Community doula programs", ["Add programs for a set number of women"]],
        ["Workforce incentives", ["Scholarships for local students committed to maternal health in marginalized communities"]]]],
      ["Chronic Disease Prevention", "🥦", [
        ["“Produce prescription”", ["2,000+ patients with diabetes, hypertension or food insecurity"]],
        ["CDC Diabetes Prevention Program", ["Certify and promote community organizations", "Enroll 1,000+ adults"]],
        ["“Complete Streets” projects", ["10+ in underserved neighborhoods (sidewalks, crosswalks, bike lanes)"]]]],
      ["Integrating Behavioral Health into Primary Care", "💬", [
        ["Collaborative Care Model", ["10+ practices with embedded behavioral health consultants"]],
        ["School-based care", ["Therapists or telehealth in high-need schools", "Universal screening"]],
        ["Mobile crisis teams", ["Two to three teams: clinician + peer specialist + EMT"]]]]]
  },
  "Economic Stability": {
    icon: "💵",
    what: "The financial security, employment opportunities, asset-building capacity, and basic needs access that enable residents to meet household expenses, weather economic shocks, and build intergenerational wealth.",
    char: "Prosperity where opportunity is widely accessible and outcomes are not predetermined by immutable characteristics, ZIP code, or family circumstances; housing security, food access, health, education and community wellbeing.",
    issues: [["Cost of Living Crisis", "📈", [0, 1, 2]], ["Unaffordable Housing", "🏠", []], ["Food Insecurity", "🍎", [1]], ["Low-Wage Employment", "💼", [0]], ["Benefits Cliffs", "📉", [0, 2]], ["System Complexity", "🌀", [1]]],
    priorities: [
      ["Creating Sustainable Pathways to Jobs That Will Last", "🛠️", [
        ["Awareness & career exposure", ["Campaigns promoting certificates/apprenticeships", "Career preview events in growth industries"]],
        ["“Jobs That Matter”-like task force", ["Co-design skills-based training with stackable credentials and apprenticeships", "Skills-based hiring that drops unnecessary degree requirements"]],
        ["Training-gap microgrants", ["$500-2K for childcare, transportation, uniforms, tools"]]]],
      ["Produce Prescriptions & Food Insecurity", "🥕", [
        ["“Food is Health” clinics", ["Food banks + healthcare: produce prescriptions, SNAP enrollment, diabetes-friendly groceries"]],
        ["Screening & referral", ["Food insecurity screening at ERs, clinics and schools"]],
        ["School meals & SNAP", ["Eliminate meal debt, advocate universal free meals", "SNAP drives with navigators; expand SNAP matching at farmers markets"]]]],
      ["Childcare Access for Working Parents", "🧸", [
        ["Flexible-hour childcare pilots", ["Employer partners (hospitals, logistics hubs, universities, Publix, hospitality)", "Evening, weekend and overnight care for shift workers"]],
        ["Childcare Sponsorship Match Fund", ["Philanthropic dollars match employer contributions", "Recruit construction, healthcare, hospitality, manufacturing employers"]]]]]
  },
  "Community & Social Connection": {
    icon: "🤝",
    what: "The social infrastructure, civic networks, and relational capital that enable Central Florida residents to participate meaningfully in community life.",
    char: "Civic engagement, “third spaces,” cultural preservation, consistent democratic participation, connectedness across income levels, and responsible resource planning.",
    issues: [["Social Isolation", "🫥", [0]], ["Economic Segregation", "🧱", [0]], ["Low Civic Engagement", "🗳️", [1]], ["Declining Institutional Trust", "🏛️", [1]], ["Fragmented Systems", "🧩", [2]], ["Service Gaps", "🕳️", [2]]],
    priorities: [
      ["Building Cross-Class Economic Connectedness & Friendships", "🧑‍🤝‍🧑", [
        ["Mixed-income schools & colleges", ["Scheduling and club models keeping diverse students together", "Cross-class roommate assignments"]],
        ["Income-mixing public spaces", ["Parks, libraries, community centers with accessible locations and diverse programming"]],
        ["Cross-class mentorship", ["Big Brothers Big Sisters, YMCA, Boys & Girls Clubs", "Track connectedness metrics annually"]]]],
      ["Strengthening Civic Engagement & Democratic Participation", "🗳️", [
        ["Voter registration campaigns", ["Targeting Latinos (1 in 3 not registered)"]],
        ["Support local journalism", ["Community news funds for nonprofit newsrooms"]],
        ["Participatory budgeting", ["Residents decide how $50-200K is used"]]]],
      ["Supporting IPV Survivors with Cash Assistance", "💜", [
        ["Unrestricted cash programs", ["$3K-10K via local government", "Nonprofit programs modeled on FreeFrom's Safety Fund"]],
        ["“Trust survivors” principle", ["Embed survivor voice and leadership"]],
        ["Debt & utility relief", ["Partner with financial institutions and utilities", "DV risk assessments in women's economic empowerment programs"]]]]]
  },
  "Livability": {
    icon: "🏙️",
    what: "When and where all Central Floridians live in healthy, safe, sustainable, vibrant, and connected communities.",
    char: "Equal access to quality housing, green spaces, arts and culture, clean environments, effective public safety, and infrastructure that supports health, mobility, and connection.",
    issues: [["Public Safety", "🚓", [1]], ["Housing", "🏠", [0]], ["Climate Challenges", "🌡️", [2]], ["Transportation", "🚌", [1]], ["Public Recreation", "🌳", [3]], ["Arts & Culture Infrastructure", "🎭", [4]]],
    priorities: [
      ["Expanding Affordable Housing & Preventing Displacement", "🏘️", [
        ["Preservation Compact", ["Save 15% of at-risk assisted housing with new subsidies and rehab funds"]],
        ["Mixed-income developments", ["Modeled on Houston's Robins Landing, with climate resilience features"]],
        ["Community Land Trusts", ["Parramore, Pine Hills, Eatonville"]]]],
      ["Implementing Complete Streets & Vision Zero", "🚸", [
        ["Ten Complete Streets pilots", ["Walk audits, then sidewalks, crosswalks, traffic calming, bike lanes"]],
        ["Vision Zero", ["Lower arterial speeds (e.g. 45 to 35 mph)", "Road diets and automated enforcement"]]]],
      ["Climate Resilience Hubs", "☀️", [
        ["Three co-designed pilot hubs", ["In historically disinvested neighborhoods", "Solar+battery, resilient communications, water, cooling/heating"]],
        ["Funding & planning", ["Integrate into hazard mitigation plans", "FEMA/DOE/HUD grants"]],
        ["Year-round programming", ["Cultural events, health screenings, food distribution, disaster protocols"]]]],
      ["Expanding Park Access & Community Programming", "🌳", [
        ["Eliminate park deserts", ["Map need; five to seven new parks via participatory design"]],
        ["Upgrade existing parks", ["$5-10M in low-income communities (playgrounds, sports, trails, lighting)"]],
        ["Free programming", ["Fitness, sports, movies, festivals, arts with Parks & Rec"]]]],
      ["Arts & Culture Passes", "🎟️", [
        ["Integrated discount card", ["Like NYC's Culture Pass: free/reduced admission to 20+ venues"]],
        ["Distribution", ["Through libraries, schools, social service agencies"]]]]]
  }
};

const $ = id => document.getElementById(id);
const esc = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
let area = "Education", selIssue = null, selPri = null;

const sel = $("area");
Object.keys(AREAS).forEach(k => sel.add(new Option(AREAS[k].icon + "  " + k, k)));
sel.onchange = () => { area = sel.value; selIssue = selPri = null; render(); };

function render() {
  const A = AREAS[area];
  $("what").textContent = A.what; $("char").textContent = A.char;
  $("issues").innerHTML = A.issues.map((it, i) =>
    `<button class="card ${selIssue === i ? "on" : ""} ${selIssue !== null && selIssue !== i ? "dim" : ""}" data-i="${i}" aria-pressed="${selIssue === i}">
     <span class="ic">${it[1]}</span><span class="t">${esc(it[0])}</span><span class="go">&rarr;</span></button>`).join("");
  const active = selIssue !== null ? A.issues[selIssue][2] : selPri !== null ? [selPri] : [];
  const filtering = selIssue !== null || selPri !== null;
  $("priorities").innerHTML = A.priorities.map((p, j) =>
    `<button class="card ${active.includes(j) ? "on" : ""} ${filtering && !active.includes(j) ? "dim" : ""}" data-j="${j}" aria-pressed="${active.includes(j)}">
     <span class="ic">${p[1]}</span><span class="t">${esc(p[0])}</span><span class="go">&rarr;</span></button>`).join("");
  let html = "";
  if (!filtering) html = `<div class="empty">Choose a challenge or a priority to see the matching interventions.</div>`;
  else if (!active.length) html = `<div class="empty">No strategic priority is linked to this challenge in this area's one-pager yet. Try another THRIVE area or search the library.</div>`;
  else html = active.map(j => A.priorities[j][2].map((v, k) =>
    `<div class="card iv ${k === 0 ? "open" : ""}"><div class="row"><span class="chk">✓</span><span class="t"><b>${esc(v[0])}</b></span></div>
     <ul>${v[1].map(b => `<li>${esc(b)}</li>`).join("")}</ul>
     <button class="cta" data-q="${esc(v[0])}">Find related articles</button></div>`).join("")).join("");
  $("interventions").innerHTML = html;
}
$("issues").onclick = e => {
  const b = e.target.closest("[data-i]"); if (!b) return;
  const i = +b.dataset.i; selIssue = selIssue === i ? null : i; selPri = null; render();
};
$("priorities").onclick = e => {
  const b = e.target.closest("[data-j]"); if (!b) return;
  const j = +b.dataset.j; selPri = (selPri === j && selIssue === null) ? null : j; selIssue = null; render();
};
$("interventions").onclick = e => {
  const b = e.target.closest(".cta"); if (!b) return;
  alert("Prototype: this would open the library filtered by \"" + b.dataset.q + "\".");
};
render();

// ---- Cosmetic search bar (prototype only: shows a message instead of searching) ----
const q = $("q"), res = $("results");
function showSearchMessage() {
  const t = q.value.trim();
  if (t.length < 2) { res.hidden = true; return; }
  res.innerHTML = `<div class="none"><b>Prototype only.</b> On the live site, this would search the full library of 400+ articles for “${esc(t)}” and show matching results.</div>`;
  res.hidden = false;
}
q.oninput = showSearchMessage;
q.onkeydown = e => { if (e.key === "Escape") res.hidden = true; if (e.key === "Enter") showSearchMessage(); };
document.addEventListener("click", e => { if (!e.target.closest(".search")) res.hidden = true; });