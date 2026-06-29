// =============================================================
// 1. Datos iniciales: edita aqui equipos y cruces iniciales
// =============================================================

const STORAGE_KEY = "porra-mundial-2026";
const BRACKET_VERSION = "world-cup-2026-official-v2";

const rounds = [
  { id: "r32", name: "Dieciseisavos" },
  { id: "r16", name: "Octavos" },
  { id: "qf", name: "Cuartos" },
  { id: "sf", name: "Semifinales" },
  { id: "final", name: "Final" }
];

const teams = {
  rsa: { id: "rsa", name: "Sudáfrica", code: "RSA", flag: "🇿🇦" },
  can: { id: "can", name: "Canadá", code: "CAN", flag: "🇨🇦" },
  ger: { id: "ger", name: "Alemania", code: "GER", flag: "🇩🇪" },
  par: { id: "par", name: "Paraguay", code: "PAR", flag: "🇵🇾" },
  ned: { id: "ned", name: "Países Bajos", code: "NED", flag: "🇳🇱" },
  mar: { id: "mar", name: "Marruecos", code: "MAR", flag: "🇲🇦" },
  bra: { id: "bra", name: "Brasil", code: "BRA", flag: "🇧🇷" },
  jpn: { id: "jpn", name: "Japón", code: "JPN", flag: "🇯🇵" },
  fra: { id: "fra", name: "Francia", code: "FRA", flag: "🇫🇷" },
  swe: { id: "swe", name: "Suecia", code: "SWE", flag: "🇸🇪" },
  civ: { id: "civ", name: "Costa de Marfil", code: "CIV", flag: "🇨🇮" },
  nor: { id: "nor", name: "Noruega", code: "NOR", flag: "🇳🇴" },
  mex: { id: "mex", name: "México", code: "MEX", flag: "🇲🇽" },
  ecu: { id: "ecu", name: "Ecuador", code: "ECU", flag: "🇪🇨" },
  eng: { id: "eng", name: "Inglaterra", code: "ENG", flag: "🏴" },
  cod: { id: "cod", name: "RD Congo", code: "COD", flag: "🇨🇩" },
  usa: { id: "usa", name: "Estados Unidos", code: "USA", flag: "🇺🇸" },
  bih: { id: "bih", name: "Bosnia y H.", code: "BIH", flag: "🇧🇦" },
  bel: { id: "bel", name: "Bélgica", code: "BEL", flag: "🇧🇪" },
  sen: { id: "sen", name: "Senegal", code: "SEN", flag: "🇸🇳" },
  por: { id: "por", name: "Portugal", code: "POR", flag: "🇵🇹" },
  cro: { id: "cro", name: "Croacia", code: "CRO", flag: "🇭🇷" },
  esp: { id: "esp", name: "España", code: "ESP", flag: "🇪🇸" },
  aut: { id: "aut", name: "Austria", code: "AUT", flag: "🇦🇹" },
  sui: { id: "sui", name: "Suiza", code: "SUI", flag: "🇨🇭" },
  alg: { id: "alg", name: "Argelia", code: "ALG", flag: "🇩🇿" },
  arg: { id: "arg", name: "Argentina", code: "ARG", flag: "🇦🇷" },
  cpv: { id: "cpv", name: "Cabo Verde", code: "CPV", flag: "🇨🇻" },
  col: { id: "col", name: "Colombia", code: "COL", flag: "🇨🇴" },
  gha: { id: "gha", name: "Ghana", code: "GHA", flag: "🇬🇭" },
  aus: { id: "aus", name: "Australia", code: "AUS", flag: "🇦🇺" },
  egy: { id: "egy", name: "Egipto", code: "EGY", flag: "🇪🇬" }
};

const initialMatches = [
  { id: "r32-1", round: "r32", teamA: "ger", teamB: "par", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-1", nextSlot: "A" },
  { id: "r32-2", round: "r32", teamA: "fra", teamB: "swe", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-1", nextSlot: "B" },
  { id: "r32-3", round: "r32", teamA: "rsa", teamB: "can", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-2", nextSlot: "A" },
  { id: "r32-4", round: "r32", teamA: "ned", teamB: "mar", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-2", nextSlot: "B" },
  { id: "r32-5", round: "r32", teamA: "por", teamB: "cro", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-5", nextSlot: "A" },
  { id: "r32-6", round: "r32", teamA: "esp", teamB: "aut", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-5", nextSlot: "B" },
  { id: "r32-7", round: "r32", teamA: "usa", teamB: "bih", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-6", nextSlot: "A" },
  { id: "r32-8", round: "r32", teamA: "bel", teamB: "sen", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-6", nextSlot: "B" },
  { id: "r32-9", round: "r32", teamA: "bra", teamB: "jpn", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-3", nextSlot: "A" },
  { id: "r32-10", round: "r32", teamA: "civ", teamB: "nor", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-3", nextSlot: "B" },
  { id: "r32-11", round: "r32", teamA: "mex", teamB: "ecu", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-4", nextSlot: "A" },
  { id: "r32-12", round: "r32", teamA: "eng", teamB: "cod", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-4", nextSlot: "B" },
  { id: "r32-13", round: "r32", teamA: "arg", teamB: "cpv", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-7", nextSlot: "A" },
  { id: "r32-14", round: "r32", teamA: "aus", teamB: "egy", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-7", nextSlot: "B" },
  { id: "r32-15", round: "r32", teamA: "sui", teamB: "alg", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-8", nextSlot: "A" },
  { id: "r32-16", round: "r32", teamA: "col", teamB: "gha", scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "r16-8", nextSlot: "B" },
  { id: "r16-1", round: "r16", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "qf-1", nextSlot: "A" },
  { id: "r16-2", round: "r16", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "qf-1", nextSlot: "B" },
  { id: "r16-5", round: "r16", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "qf-2", nextSlot: "A" },
  { id: "r16-6", round: "r16", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "qf-2", nextSlot: "B" },
  { id: "r16-3", round: "r16", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "qf-3", nextSlot: "A" },
  { id: "r16-4", round: "r16", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "qf-3", nextSlot: "B" },
  { id: "r16-7", round: "r16", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "qf-4", nextSlot: "A" },
  { id: "r16-8", round: "r16", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "qf-4", nextSlot: "B" },
  { id: "qf-1", round: "qf", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "sf-1", nextSlot: "A" },
  { id: "qf-2", round: "qf", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "sf-1", nextSlot: "B" },
  { id: "qf-3", round: "qf", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "sf-2", nextSlot: "A" },
  { id: "qf-4", round: "qf", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "sf-2", nextSlot: "B" },
  { id: "sf-1", round: "sf", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "final-1", nextSlot: "A" },
  { id: "sf-2", round: "sf", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: "final-1", nextSlot: "B" },
  { id: "final-1", round: "final", teamA: null, teamB: null, scoreA: null, scoreB: null, winner: null, penaltyWinner: null, nextMatchId: null, nextSlot: null }
];

// =============================================================
// 2. Estado de la aplicacion
// =============================================================

let state = createInitialState();
let loadedFromSharedUrl = false;

const els = {};

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  els.participantName = document.getElementById("participantName");
  els.statusBadge = document.getElementById("statusBadge");
  els.sourceMessage = document.getElementById("sourceMessage");
  els.appMessage = document.getElementById("appMessage");
  els.bracket = document.getElementById("bracket");
  els.championSection = document.getElementById("championSection");
  els.saveBtn = document.getElementById("saveBtn");
  els.loadBtn = document.getElementById("loadBtn");
  els.finalizeBtn = document.getElementById("finalizeBtn");
  els.copyLinkBtn = document.getElementById("copyLinkBtn");
  els.copySummaryBtn = document.getElementById("copySummaryBtn");
  els.whatsappBtn = document.getElementById("whatsappBtn");
  els.emailBtn = document.getElementById("emailBtn");
  els.newBtn = document.getElementById("newBtn");
  els.summarySection = document.getElementById("summarySection");

  const urlState = loadStateFromUrl();
  if (urlState) {
    state = urlState;
    loadedFromSharedUrl = true;
    showSourceMessage("Porra cargada desde enlace compartido");
  } else {
    const saved = readLocalStorageState();
    if (saved) state = saved;
  }

  recalculateBracket();
  bindEvents();
  renderApp();
}

function createInitialState() {
  return {
    participantName: "",
    bracketVersion: BRACKET_VERSION,
    matches: cloneMatches(initialMatches),
    finalized: false,
    readonly: false,
    champion: null
  };
}

function cloneMatches(matches) {
  return matches.map((match) => ({ ...match }));
}

function bindEvents() {
  els.participantName.addEventListener("input", () => {
    state.participantName = els.participantName.value;
    autoSaveIfAllowed();
    renderHeader();
  });

  els.saveBtn.addEventListener("click", saveToLocalStorage);
  els.loadBtn.addEventListener("click", loadFromLocalStorage);
  els.finalizeBtn.addEventListener("click", finalizePrediction);
  els.copyLinkBtn.addEventListener("click", copyShareLink);
  els.copySummaryBtn.addEventListener("click", copyPredictionSummary);
  els.whatsappBtn.addEventListener("click", sendByWhatsApp);
  els.emailBtn.addEventListener("click", sendByEmail);
  els.newBtn.addEventListener("click", createNewPrediction);
}

// =============================================================
// 3. Renderizado
// =============================================================

function renderApp() {
  renderHeader();
  renderSummary();
  renderChampion();
  renderBracket();
}

function renderHeader() {
  els.participantName.value = state.participantName || "";
  els.participantName.disabled = state.readonly;

  if (state.readonly) {
    els.statusBadge.textContent = state.finalized ? "Finalizada · Solo lectura" : "Solo lectura";
    els.statusBadge.classList.add("readonly");
  } else {
    els.statusBadge.textContent = "Editable";
    els.statusBadge.classList.remove("readonly");
  }

  const canShare = state.readonly || state.finalized;
  els.finalizeBtn.hidden = canShare;
  els.copyLinkBtn.hidden = false;
  els.copySummaryBtn.hidden = false;
  els.whatsappBtn.hidden = false;
  els.emailBtn.hidden = false;
  els.copyLinkBtn.disabled = !canShare;
  els.copySummaryBtn.disabled = !canShare;
  els.whatsappBtn.disabled = !canShare;
  els.emailBtn.disabled = !canShare;
  els.saveBtn.disabled = false;
}

function renderSummary() {
  const canShowSummary = state.readonly || state.finalized;
  els.summarySection.hidden = !canShowSummary;
  if (!canShowSummary) {
    els.summarySection.innerHTML = "";
    return;
  }

  const shareLink = createShareLink();
  els.summarySection.innerHTML = `
    <div class="summary-head">
      <div>
        <h2>Resumen para verificar</h2>
        <p>Abre el enlace en cualquier navegador para cargar esta porra en modo solo lectura.</p>
      </div>
    </div>
    <label class="share-link-field">
      <span>Enlace de esta porra</span>
      <input type="text" value="${escapeHtml(shareLink)}" readonly onclick="this.select()">
    </label>
    <pre class="summary-text">${escapeHtml(getPredictionSummary())}</pre>
  `;
}

function renderBracket() {
  els.bracket.innerHTML = rounds.map(renderRound).join("");
}

function renderRound(round) {
  const roundMatches = state.matches.filter((match) => match.round === round.id);
  return `
    <section class="round-column" aria-labelledby="round-${round.id}">
      <h2 id="round-${round.id}" class="round-title">${round.name}<small>${roundMatches.length} partido${roundMatches.length === 1 ? "" : "s"}</small></h2>
      <div class="round-matches">
        ${roundMatches.map(renderMatch).join("")}
      </div>
    </section>
  `;
}

function renderMatch(match) {
  const round = rounds.find((item) => item.id === match.round);
  const matchNumber = Number(match.id.split("-")[1]);
  const roundMatches = state.matches.filter((item) => item.round === match.round);
  const matchIndex = roundMatches.findIndex((item) => item.id === match.id);
  const hasTeams = Boolean(match.teamA && match.teamB);
  const winner = getMatchWinner(match);
  const isComplete = Boolean(winner);
  const disabled = state.readonly || !hasTeams;
  const hasPenalties = shouldShowPenaltyChoice(match);
  const penaltyHtml = hasPenalties ? renderPenaltyChoice(match) : "";

  return `
    <article class="match-card round-${match.round} ${isComplete ? "complete" : "pending"} ${hasPenalties ? "has-penalties" : ""}" id="match-${match.id}" style="${getMatchGridPosition(match, matchIndex)}">
      <div class="match-header">
        <span>${round.name} ${matchNumber}</span>
        <span>${hasTeams ? "En juego" : "Pendiente"}</span>
      </div>
      ${renderTeamRow(match, "A", disabled)}
      ${renderTeamRow(match, "B", disabled)}
      <div class="match-status ${isComplete ? "winner" : ""}">${getMatchStatus(match)}</div>
      ${penaltyHtml}
    </article>
  `;
}

function getMatchGridPosition(match, index) {
  const rowSizeByRound = {
    r32: 2,
    r16: 4,
    qf: 8,
    sf: 16,
    final: 32
  };
  const baseRowSize = rowSizeByRound[match.round] || 2;

  const roundMatches = state.matches.filter((item) => item.round === match.round);
  let tieOffset = 0;
  for (let i = 0; i < index; i += 1) {
    const prev = roundMatches[i];
    if (prev && isMatchTied(prev)) tieOffset += 1;
  }

  const rowStart = (index * baseRowSize) + Math.max(1, baseRowSize / 2) + tieOffset;
  const span = 2 + (isMatchTied(match) ? 1 : 0);

  return `--match-row: ${rowStart}; --match-span: ${span};`;
}

function isMatchTied(match) {
  return (
    match.scoreA !== null &&
    match.scoreB !== null &&
    match.scoreA === match.scoreB
  );
}

function renderTeamRow(match, side, disabled) {
  const teamId = side === "A" ? match.teamA : match.teamB;
  const score = side === "A" ? match.scoreA : match.scoreB;
  const teamName = teamId && teams[teamId] ? teams[teamId].name : "equipo pendiente";

  return `
    <label class="team-row">
      ${renderTeam(teamId)}
      <input
        class="score-input"
        type="number"
        inputmode="numeric"
        min="0"
        max="30"
        value="${score === null || score === undefined ? "" : score}"
        aria-label="Goles de ${teamName} en ${match.id}"
        ${disabled ? "disabled" : ""}
        oninput="handleScoreChange('${match.id}', '${side}', this.value)"
      >
    </label>
  `;
}

function renderTeam(teamId) {
  if (!teamId) return '<span class="empty-team">Pendiente</span>';
  const team = teams[teamId];
  if (!team) return `<span class="empty-team">${escapeHtml(teamId)}</span>`;
  return `
    <span class="team">
      <span class="flag" aria-hidden="true">${team.flag}</span>
      <span class="code">${team.code}</span>
    </span>
  `;
}

function renderPenaltyChoice(match) {
  const teamA = teams[match.teamA];
  const teamB = teams[match.teamB];
  const disabled = state.readonly ? "disabled" : "";

  return `
    <div class="penalties">
      <p>Empate. Elige ganador por penaltis:</p>
      <div class="penalty-actions">
        <button type="button" class="${match.penaltyWinner === match.teamA ? "selected" : ""}" ${disabled} onclick="handlePenaltyWinner('${match.id}', '${match.teamA}')">Pasa ${teamA.name}</button>
        <button type="button" class="${match.penaltyWinner === match.teamB ? "selected" : ""}" ${disabled} onclick="handlePenaltyWinner('${match.id}', '${match.teamB}')">Pasa ${teamB.name}</button>
      </div>
    </div>
  `;
}

function renderChampion() {
  const champion = getChampion();
  if (!champion) {
    els.championSection.innerHTML = "";
    return;
  }

  const finalizedText = state.finalized
    ? `<p class="finalized-note">Porra finalizada de: ${escapeHtml(state.participantName)}</p>`
    : "";

  els.championSection.innerHTML = `
    <div class="champion-title">🏆 Campeón de la porra</div>
    <div class="champion-team">${renderTeam(champion)}</div>
    ${finalizedText}
  `;
}

function getMatchStatus(match) {
  if (!match.teamA || !match.teamB) return "Pendiente: faltan equipos";
  if (match.scoreA === null || match.scoreB === null) return "Pendiente: faltan resultados";
  if (match.scoreA === match.scoreB && !match.penaltyWinner) return "Falta elegir ganador por penaltis";

  const winner = getMatchWinner(match);
  if (!winner) return "Pendiente";

  const team = teams[winner];
  if (match.scoreA === match.scoreB) return `${team.name} gana por penaltis`;
  return `Ganador: ${team.name}`;
}

// =============================================================
// 4. Logica del bracket
// =============================================================

function getMatchWinner(match) {
  if (!match.teamA || !match.teamB) return null;
  if (match.scoreA === null || match.scoreB === null) return null;
  if (match.scoreA > match.scoreB) return match.teamA;
  if (match.scoreB > match.scoreA) return match.teamB;
  return match.penaltyWinner || null;
}

function handleScoreChange(matchId, teamSide, value) {
  if (state.readonly) return;

  const match = getMatch(matchId);
  if (!match || !match.teamA || !match.teamB) return;

  const parsedValue = value === "" ? null : Number(value);
  if (parsedValue !== null && (!Number.isInteger(parsedValue) || parsedValue < 0 || parsedValue > 30)) {
    showMessage("Los goles deben ser numeros entre 0 y 30.", true);
    renderApp();
    return;
  }

  if (teamSide === "A") match.scoreA = parsedValue;
  if (teamSide === "B") match.scoreB = parsedValue;

  if (match.scoreA !== null && match.scoreB !== null && match.scoreA !== match.scoreB) {
    match.penaltyWinner = null;
  }

  recalculateBracket();
  autoSaveIfAllowed();
  renderApp();
}

function handlePenaltyWinner(matchId, teamId) {
  if (state.readonly) return;

  const match = getMatch(matchId);
  if (!match || !match.teamA || !match.teamB) return;
  if (match.scoreA === null || match.scoreB === null || match.scoreA !== match.scoreB) return;
  if (![match.teamA, match.teamB].includes(teamId)) return;

  match.penaltyWinner = teamId;
  recalculateBracket();
  autoSaveIfAllowed();
  renderApp();
}

function advanceWinner(matchId, winnerTeamId) {
  const match = getMatch(matchId);
  if (!match || !match.nextMatchId || !winnerTeamId) return;

  const nextMatch = getMatch(match.nextMatchId);
  if (!nextMatch) return;

  if (match.nextSlot === "A") nextMatch.teamA = winnerTeamId;
  if (match.nextSlot === "B") nextMatch.teamB = winnerTeamId;
}

function recalculateBracket() {
  const previousScores = new Map(state.matches.map((match) => [match.id, {
    teamA: match.teamA,
    teamB: match.teamB,
    scoreA: match.scoreA,
    scoreB: match.scoreB,
    penaltyWinner: match.penaltyWinner
  }]));

  const baseTeamSlots = new Map(initialMatches.map((match) => [match.id, { teamA: match.teamA, teamB: match.teamB }]));

  state.matches.forEach((match) => {
    const base = baseTeamSlots.get(match.id);
    match.teamA = base.teamA;
    match.teamB = base.teamB;
    match.winner = null;
  });

  rounds.forEach((round) => {
    state.matches
      .filter((match) => match.round === round.id)
      .forEach((match) => {
        const saved = previousScores.get(match.id);
        const invalidTeams = !match.teamA || !match.teamB;
        const teamsChanged = saved && (saved.teamA !== match.teamA || saved.teamB !== match.teamB);

        if (invalidTeams || teamsChanged) {
          match.scoreA = null;
          match.scoreB = null;
          match.penaltyWinner = null;
        } else if (saved) {
          match.scoreA = saved.scoreA;
          match.scoreB = saved.scoreB;
          match.penaltyWinner = saved.penaltyWinner;
        }

        if (match.scoreA !== null && match.scoreB !== null && match.scoreA !== match.scoreB) {
          match.penaltyWinner = null;
        }

        if (match.penaltyWinner && ![match.teamA, match.teamB].includes(match.penaltyWinner)) {
          match.penaltyWinner = null;
        }

        match.winner = getMatchWinner(match);
        if (match.winner) advanceWinner(match.id, match.winner);
      });
  });

  state.champion = getChampion();
}

function clearDownstreamMatches(matchId) {
  const match = getMatch(matchId);
  if (!match || !match.nextMatchId) return;

  const nextMatch = getMatch(match.nextMatchId);
  if (!nextMatch) return;

  nextMatch.scoreA = null;
  nextMatch.scoreB = null;
  nextMatch.winner = null;
  nextMatch.penaltyWinner = null;
  clearDownstreamMatches(nextMatch.id);
}

function isBracketComplete() {
  return state.matches.every((match) => Boolean(getMatchWinner(match))) && Boolean(getChampion());
}

function getChampion() {
  const finalMatch = getMatch("final-1");
  return finalMatch ? getMatchWinner(finalMatch) : null;
}

function getMatch(matchId) {
  return state.matches.find((match) => match.id === matchId);
}

function shouldShowPenaltyChoice(match) {
  return Boolean(match.teamA && match.teamB && match.scoreA !== null && match.scoreB !== null && match.scoreA === match.scoreB);
}

// =============================================================
// 5. Persistencia
// =============================================================

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getShareableState({ readonly: state.readonly })));
  showMessage("Porra guardada en este dispositivo.");
}

function autoSaveIfAllowed() {
  if (loadedFromSharedUrl && state.readonly) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getShareableState({ readonly: state.readonly })));
}

function loadFromLocalStorage() {
  const saved = readLocalStorageState();
  if (!saved) {
    showMessage("No hay ninguna porra guardada en este dispositivo.", true);
    return;
  }

  state = saved;
  loadedFromSharedUrl = false;
  hideSourceMessage();
  recalculateBracket();
  renderApp();
  showMessage("Porra cargada desde este dispositivo.");
}

function readLocalStorageState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    return normalizeState(JSON.parse(raw));
  } catch (error) {
    return null;
  }
}

// =============================================================
// 6. Compartir
// =============================================================

function getShareableState(options = {}) {
  return {
    participantName: state.participantName,
    bracketVersion: BRACKET_VERSION,
    matches: cloneMatches(state.matches),
    finalized: Boolean(state.finalized),
    readonly: Boolean(options.readonly ?? state.readonly),
    champion: getChampion()
  };
}

function loadStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const data = params.get("data");
  if (!data) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(escape(atob(toBase64(data)))));
    const loadedState = normalizeState(parsed);
    loadedState.readonly = params.get("readonly") === "1" || loadedState.readonly;
    return loadedState;
  } catch (error) {
    showMessage("No se pudo cargar la porra compartida.", true);
    return null;
  }
}

function createShareLink() {
  const shareState = getShareableState({ readonly: true });
  shareState.finalized = true;
  const json = JSON.stringify(shareState);
  const encoded = fromBase64(btoa(unescape(encodeURIComponent(json))));
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("readonly", "1");
  url.searchParams.set("data", encoded);
  return url.toString();
}

async function copyShareLink() {
  const link = createShareLink();

  try {
    await navigator.clipboard.writeText(link);
    showMessage("Enlace final copiado al portapapeles.");
  } catch (error) {
    window.prompt("Copia este enlace:", link);
  }
}

async function copyPredictionSummary() {
  const summary = `${getPredictionSummary()}\n\nEnlace:\n${createShareLink()}`;

  try {
    await navigator.clipboard.writeText(summary);
    showMessage("Resumen de la porra copiado al portapapeles.");
  } catch (error) {
    window.prompt("Copia este resumen:", summary);
  }
}

function getPredictionSummary() {
  const lines = [
    `Porra Mundial 2026`,
    `Participante: ${state.participantName || "Sin nombre"}`,
    `Campeón: ${getTeamLabel(getChampion()) || "Pendiente"}`,
    "",
    "Resultados:"
  ];

  rounds.forEach((round) => {
    lines.push("", round.name.toUpperCase());
    state.matches
      .filter((match) => match.round === round.id)
      .forEach((match) => {
        const teamA = getTeamLabel(match.teamA) || "Pendiente";
        const teamB = getTeamLabel(match.teamB) || "Pendiente";
        const scoreA = match.scoreA === null ? "-" : match.scoreA;
        const scoreB = match.scoreB === null ? "-" : match.scoreB;
        const winner = getTeamLabel(getMatchWinner(match)) || "Pendiente";
        const penalties = match.penaltyWinner ? `, penaltis: ${getTeamLabel(match.penaltyWinner)}` : "";
        lines.push(`${match.id}: ${teamA} ${scoreA}-${scoreB} ${teamB} | Ganador: ${winner}${penalties}`);
      });
  });

  return lines.join("\n");
}

function getTeamLabel(teamId) {
  if (!teamId || !teams[teamId]) return "";
  const team = teams[teamId];
  return `${team.flag} ${team.code}`;
}

function sendByWhatsApp() {
  const link = createShareLink();
  const name = state.participantName.trim();
  const text = name
    ? `Esta es la porra del Mundial 2026 de ${name}: ${link}`
    : `Esta es mi porra del Mundial 2026: ${link}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
}

function sendByEmail() {
  const link = createShareLink();
  const name = state.participantName.trim() || "Participante";
  const subject = `Porra Mundial 2026 - ${name}`;
  const body = `Esta es mi porra del Mundial 2026:\n${link}\n\nResumen:\n${getPredictionSummary()}`;
  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function toBase64(value) {
  const padding = value.length % 4;
  return (value + (padding ? "=".repeat(4 - padding) : "")).replace(/-/g, "+").replace(/_/g, "/");
}

function fromBase64(value) {
  return value.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

// =============================================================
// 7. Finalizacion y modo solo lectura
// =============================================================

function finalizePrediction() {
  if (!state.participantName.trim()) {
    showMessage("Introduce tu nombre antes de finalizar la porra.", true);
    return;
  }

  recalculateBracket();
  if (!isBracketComplete()) {
    showMessage("Todavia faltan partidos por completar antes de enviar la porra.", true);
    renderApp();
    return;
  }

  const confirmed = window.confirm("Una vez finalizada, la porra quedara bloqueada en este dispositivo. ¿Quieres continuar?");
  if (!confirmed) return;

  state.finalized = true;
  setReadonlyMode(true);
  saveToLocalStorage();
  renderApp();
  showMessage("Porra finalizada. Ya puedes copiar el enlace, enviarla por WhatsApp o enviarla por email.");
}

function setReadonlyMode(isReadonly) {
  state.readonly = Boolean(isReadonly);
}

function resetBracket() {
  state = createInitialState();
  loadedFromSharedUrl = false;
  hideSourceMessage();
  renderApp();
}

function createNewPrediction() {
  const confirmed = window.confirm("Esto borrara la porra guardada en este dispositivo. ¿Quieres continuar?");
  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);
  const url = new URL(window.location.href);
  url.searchParams.delete("data");
  url.searchParams.delete("readonly");
  window.history.replaceState({}, "", url.pathname + url.search + url.hash);
  resetBracket();
  showMessage("Nueva porra creada. Puedes empezar a editar.");
}

// =============================================================
// Utilidades
// =============================================================

function normalizeState(rawState) {
  const clean = createInitialState();

  if (rawState.bracketVersion !== BRACKET_VERSION) {
    return clean;
  }

  clean.participantName = String(rawState.participantName || "");
  clean.finalized = Boolean(rawState.finalized);
  clean.readonly = Boolean(rawState.readonly || rawState.finalized);

  const rawMatches = Array.isArray(rawState.matches) ? rawState.matches : [];
  clean.matches = initialMatches.map((initialMatch) => {
    const saved = rawMatches.find((match) => match.id === initialMatch.id) || {};
    return {
      ...initialMatch,
      teamA: typeof saved.teamA === "string" ? saved.teamA : initialMatch.teamA,
      teamB: typeof saved.teamB === "string" ? saved.teamB : initialMatch.teamB,
      scoreA: normalizeScore(saved.scoreA),
      scoreB: normalizeScore(saved.scoreB),
      winner: typeof saved.winner === "string" ? saved.winner : null,
      penaltyWinner: typeof saved.penaltyWinner === "string" ? saved.penaltyWinner : null
    };
  });

  clean.champion = typeof rawState.champion === "string" ? rawState.champion : null;
  return clean;
}

function normalizeScore(score) {
  if (score === null || score === undefined || score === "") return null;
  const parsed = Number(score);
  if (!Number.isInteger(parsed) || parsed < 0 || parsed > 30) return null;
  return parsed;
}

function showMessage(message, isError = false) {
  if (!els.appMessage) return;
  els.appMessage.textContent = message;
  els.appMessage.classList.toggle("is-error", isError);
}

function showSourceMessage(message) {
  if (!els.sourceMessage) return;
  els.sourceMessage.textContent = message;
  els.sourceMessage.hidden = false;
}

function hideSourceMessage() {
  if (!els.sourceMessage) return;
  els.sourceMessage.textContent = "";
  els.sourceMessage.hidden = true;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
