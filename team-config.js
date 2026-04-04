// Team Configuration - Add, remove, or edit team members here
const TEAM_CONFIG = [
  {
    id: "viji",
    name: "Viji Munuswamy",
    role: "Founding Systems Architect",
    shortRole: "Founder & Platform Architect",
    bio: "Leads the system architecture behind Olivine, translating governed AI orchestration and 20+ years of enterprise delivery depth into execution platforms built for scale.",
    photo: "team1-viji.jpg",
    profileUrl: "https://viji.olivine.co.in",
    profileLabel: "View Founder's Profile",
    note: "Core Architecture",
    active: true
  },
  {
    id: "tamil",
    name: "S. Tamilselvan",
    role: "Sales & Digital Marketing Strategist",
    shortRole: "Sales & Market Development",
    bio: "Brings 15+ years of experience in software sales and marketing, strengthening Olivine's market reach through positioning, demand generation, customer engagement, and enterprise growth development.",
    photo: "team2-tamil.jpg",
    profileUrl: null,
    profileLabel: null,
    note: "Growth & Market Development",
    active: true
  },
  {
    id: "raja",
    name: "Raja. A",
    role: "Implementation & Rollout Lead",
    shortRole: "Implementation & Rollout",
    bio: "Brings 13+ years across retail solutions and enterprise ERP implementation, leading Olivine deployment readiness across POS, backend process engineering, inventory synchronization, and scalable rollout execution.",
    photo: "team3-raja.png",
    profileUrl: null,
    profileLabel: null,
    note: "Implementation & Rollout",
    active: true
  },
  {
    id: "m4",
    name: "Member Placeholder 04",
    role: "Placeholder Role",
    shortRole: "Placeholder",
    bio: "Reserved for governance, controls, or enterprise program responsibilities across the platform stack.",
    photo: null,
    profileUrl: null,
    profileLabel: null,
    note: "Profile Pending",
    active: false
  },
  {
    id: "m5",
    name: "Member Placeholder 05",
    role: "Placeholder Role",
    shortRole: "Placeholder",
    bio: "Reserved for product growth, client delivery, or ecosystem responsibilities as the team profile expands.",
    photo: null,
    profileUrl: null,
    profileLabel: null,
    note: "Profile Pending",
    active: false
  },
  {
    id: "m6",
    name: "Member Placeholder 06",
    role: "Placeholder Role",
    shortRole: "Placeholder",
    bio: "Reserved for finance, operations, or strategic support functions that complete the initial team slate.",
    photo: null,
    profileUrl: null,
    profileLabel: null,
    note: "Profile Pending",
    active: false
  }
];

// Render buyer-focused team section (leader-grid)
function renderBuyerTeam() {
  const container = document.querySelector('.leader-grid');
  if (!container) return;

  container.innerHTML = '';

  TEAM_CONFIG.filter(m => m.active).forEach(member => {
    const article = document.createElement('article');
    article.className = 'leader-card';
    article.setAttribute('role', 'listitem');

    const nameHtml = member.profileUrl
      ? `<a class="leader-name" href="${member.profileUrl}" target="_blank" rel="noopener noreferrer">
           ${member.name}
           <span class="leader-link-mark" aria-hidden="true">&rarr;</span>
         </a>`
      : `<div class="leader-name is-static">${member.name}</div>`;

    article.innerHTML = `
      <div class="leader-photo">
        <img src="${member.photo}" alt="${member.name}">
      </div>
      ${nameHtml}
      <div class="leader-title">${member.shortRole}</div>
    `;

    container.appendChild(article);
  });
}

// Render detailed team section (t-grid-team)
function renderDetailedTeam() {
  const container = document.querySelector('.t-grid-team');
  if (!container) return;

  container.innerHTML = '';

  TEAM_CONFIG.forEach(member => {
    const card = document.createElement('div');
    card.className = member.active ? 't-card t-member-card' : 't-card t-placeholder';
    if (!member.active) card.setAttribute('hidden', '');

    const photoHtml = member.photo
      ? `<div class="t-member-photo"><img src="${member.photo}" alt="${member.name}"></div>`
      : `<div class="t-avatar">${member.id.toUpperCase()}</div>`;

    const profileHtml = member.profileUrl
      ? `<a class="t-link" href="${member.profileUrl}" target="_blank" rel="noopener noreferrer">${member.profileLabel || 'View Profile'} &rarr;</a>`
      : '';

    card.innerHTML = `
      ${photoHtml}
      <div class="t-member-content">
        <span class="t-role">${member.role}</span>
        <h3 class="t-name">${member.name}</h3>
        <p class="t-desc">${member.bio}</p>
        ${profileHtml}
        <div class="t-note">${member.note}</div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Initialize both team sections
function renderTeamMembers() {
  renderBuyerTeam();
  renderDetailedTeam();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderTeamMembers);
} else {
  renderTeamMembers();
}
