const actions = [
  {
    id: "low",
    label: "Low beam",
    carAction: "Turn on / keep low beam",
    chinese: "近光灯",
    icon: "LOW",
    panelClass: "",
  },
  {
    id: "high",
    label: "High beam",
    carAction: "Switch to high beam",
    chinese: "远光灯",
    icon: "HIGH",
    panelClass: "high",
  },
  {
    id: "parking",
    label: "Position + hazard",
    carAction: "Use position lights and hazard warning lights",
    chinese: "示宽灯 + 警示灯",
    icon: "PARK",
    panelClass: "parking",
  },
  {
    id: "flash",
    label: "Alternate high and low",
    carAction: "Flash high and low beams",
    chinese: "远近灯光交替",
    icon: "ALT",
    panelClass: "flash",
  },
  {
    id: "off",
    label: "All lights off",
    carAction: "Turn off all lights",
    chinese: "关闭所有灯光",
    icon: "OFF",
    panelClass: "off",
  },
];

const pictureAudio = "audio/picture-checklist-audio.wav";
const TEST_AUDIO_RATE = 0.86;
const CLIP_SEQUENCE_GAP_MS = 450;

const examIntroClips = [
  { src: pictureAudio, start: 0.0, end: 3.04 },
  { src: pictureAudio, start: 3.26, end: 6.02 },
];

const questions = [
  {
    no: 1,
    zh: "请开启前照灯",
    pinyin: "qing kai qi qian zhao deng",
    en: "Please turn on the headlights",
    breakdown: "请开启 = please turn on · 前照灯 = headlights",
    audioClip: { src: pictureAudio, start: 6.24, end: 7.86 },
    action: "low",
  },
  {
    no: 2,
    zh: "会车",
    pinyin: "hui che",
    en: "Meet an oncoming vehicle",
    breakdown: "会车 = meeting/passing oncoming traffic",
    audioClip: { src: pictureAudio, start: 8.08, end: 9.68 },
    action: "low",
  },
  {
    no: 3,
    zh: "通过有信号灯控制的路口",
    pinyin: "tong guo you xin hao deng kong zhi de lu kou",
    en: "Pass through an intersection controlled by signal lights",
    breakdown: "有信号灯控制 = controlled by signal lights · 路口 = intersection",
    audioClip: { src: pictureAudio, start: 9.9, end: 14.43 },
    action: "low",
  },
  {
    no: 4,
    zh: "夜间同方向近距离跟车行驶",
    pinyin: "ye jian tong fang xiang jin ju li gen che xing shi",
    en: "At night, driving closely behind another vehicle in the same direction",
    breakdown: "夜间 = at night · 同方向 = same direction · 近距离 = close distance · 跟车行驶 = following a car",
    audioClip: { src: pictureAudio, start: 14.65, end: 17.47 },
    action: "low",
  },
  {
    no: 5,
    zh: "在有路灯照明良好的道路行驶",
    pinyin: "zai you lu deng zhao ming liang hao de dao lu xing shi",
    en: "Drive on a road with streetlights and good lighting",
    breakdown: "有路灯 = has streetlights · 照明良好 = well lit · 道路行驶 = driving on the road",
    audioClip: { src: pictureAudio, start: 17.69, end: 24.09 },
    action: "low",
  },
  {
    no: 6,
    zh: "进入无照明或照明不良的道路行驶",
    pinyin: "jin ru wu zhao ming huo zhao ming bu liang de dao lu xing shi",
    en: "Enter a road with no lighting or poor lighting",
    breakdown: "无照明 = no lighting · 照明不良 = poor lighting · 道路行驶 = driving on the road",
    audioClip: { src: pictureAudio, start: 24.31, end: 28.49 },
    action: "high",
  },
  {
    no: 7,
    zh: "在路边临时停车",
    pinyin: "zai lu bian lin shi ting che",
    en: "Temporarily park by the roadside",
    breakdown: "路边 = roadside · 临时 = temporary · 停车 = park/stop",
    audioClip: { src: pictureAudio, start: 28.71, end: 30.17 },
    action: "parking",
  },
  {
    no: 8,
    zh: "超车",
    pinyin: "chao che",
    en: "Overtake",
    breakdown: "超车 = overtake / pass another vehicle",
    audioClip: { src: pictureAudio, start: 30.39, end: 31.39 },
    action: "flash",
  },
  {
    no: 9,
    zh: "通过急弯",
    pinyin: "tong guo ji wan",
    en: "Pass through a sharp bend",
    breakdown: "通过 = pass through · 急弯 = sharp bend",
    audioClip: { src: pictureAudio, start: 31.61, end: 33.74 },
    action: "flash",
  },
  {
    no: 10,
    zh: "通过坡路",
    pinyin: "tong guo po lu",
    en: "Pass through a slope road",
    breakdown: "通过 = pass through · 坡路 = slope road",
    audioClip: { src: pictureAudio, start: 33.96, end: 38.42 },
    action: "flash",
  },
  {
    no: 11,
    zh: "通过拱桥",
    pinyin: "tong guo gong qiao",
    en: "Pass through an arch bridge",
    breakdown: "通过 = pass through · 拱桥 = arch bridge",
    audioClip: { src: pictureAudio, start: 38.64, end: 42.83 },
    action: "flash",
  },
  {
    no: 12,
    zh: "通过没有交通信号灯控制的路口",
    pinyin: "tong guo mei you jiao tong xin hao deng kong zhi de lu kou",
    en: "Pass through an intersection without traffic lights",
    breakdown: "没有交通信号灯控制 = no traffic lights controlling it · 路口 = intersection",
    audioClip: { src: pictureAudio, start: 43.05, end: 48.89 },
    action: "flash",
  },
  {
    no: 13,
    zh: "通过人行横道",
    pinyin: "tong guo ren xing heng dao",
    en: "Pass through a pedestrian crossing",
    breakdown: "通过 = pass through · 人行横道 = pedestrian crossing",
    audioClip: { src: pictureAudio, start: 49.11, end: 51.75 },
    action: "flash",
  },
  {
    no: 99,
    zh: "模拟夜间考试完成，请关闭所有灯光",
    pinyin: "mo ni ye jian kao shi wan cheng, qing guan bi suo you deng guang",
    en: "The simulated night exam is complete. Please turn off all lights",
    breakdown: "考试完成 = test complete · 关闭 = turn off · 所有灯光 = all lights",
    audioClips: [
      { src: pictureAudio, start: 51.97, end: 53.51 },
      { src: pictureAudio, start: 53.73, end: 54.97 },
    ],
    action: "off",
  },
];

const examMiddlePromptNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const state = {
  index: 0,
  score: 0,
  answered: false,
  mode: "exam",
  chineseVisible: false,
  meaningVisible: false,
  voiceReady: false,
  voice: null,
  examFailed: false,
  examIntroPlayed: false,
  pendingPosition: false,
  mistakes: loadMistakes(),
  order: createExamRound(),
};

const elements = {
  answers: document.querySelector("#answers"),
  carPanel: document.querySelector(".car-panel"),
  category: document.querySelector("#category"),
  breakdownHelper: document.querySelector("#breakdown-helper"),
  chinesePrompt: document.querySelector("#chinese-prompt"),
  counter: document.querySelector("#counter"),
  clearMistakesButton: document.querySelector("#clear-mistakes-button"),
  drillMistakesButton: document.querySelector("#drill-mistakes-button"),
  englishHelper: document.querySelector("#english-helper"),
  feedback: document.querySelector("#feedback"),
  failDetail: document.querySelector("#fail-detail"),
  failOverlay: document.querySelector("#fail-overlay"),
  hintButton: document.querySelector("#hint-button"),
  inlineFail: document.querySelector("#inline-fail"),
  inlineFailDetail: document.querySelector("#inline-fail-detail"),
  lessonGrid: document.querySelector("#lesson-grid"),
  mistakeEmpty: document.querySelector("#mistake-empty"),
  mistakeTable: document.querySelector("#mistake-table"),
  mistakeTableWrap: document.querySelector("#mistake-table-wrap"),
  nextButton: document.querySelector("#next-button"),
  promptArea: document.querySelector("#quiz-view"),
  promptLabel: document.querySelector("#prompt-label"),
  pinyinHelper: document.querySelector("#pinyin-helper"),
  replayButton: document.querySelector("#replay-button"),
  retryExamButton: document.querySelector("#retry-exam-button"),
  reviewTable: document.querySelector("#review-table"),
  score: document.querySelector("#score"),
  selectedAction: document.querySelector("#selected-action"),
  showChineseButton: document.querySelector("#show-chinese-button"),
  showMeaningButton: document.querySelector("#show-meaning-button"),
  speakButton: document.querySelector("#speak-button"),
  startVoiceButton: document.querySelector("#start-voice-button"),
  studyAfterFailButton: document.querySelector("#study-after-fail-button"),
  testEnglishButton: document.querySelector("#test-english-button"),
  trainingNote: document.querySelector("#training-note"),
  voiceList: document.querySelector("#voice-list"),
  voiceStatus: document.querySelector("#voice-status"),
  modeButtons: document.querySelectorAll(".mode-button"),
  views: {
    quiz: document.querySelector("#quiz-view"),
    learn: document.querySelector("#learn-view"),
    mistakes: document.querySelector("#mistakes-view"),
    review: document.querySelector("#review-view"),
  },
};

function shuffle(items) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

function getAction(id) {
  return actions.find((action) => action.id === id);
}

function isExamMode() {
  const activeMode = document.querySelector(".mode-button.active")?.dataset.mode;
  return state.mode === "exam" || activeMode === "exam";
}

function loadMistakes() {
  try {
    return JSON.parse(localStorage.getItem("chineseLightsMistakes") || "{}");
  } catch {
    return {};
  }
}

function saveMistakes() {
  try {
    localStorage.setItem("chineseLightsMistakes", JSON.stringify(state.mistakes));
  } catch {
    // Storage is helpful but must never block the exam fail behavior.
  }
}

function getMistakeEntries() {
  return Object.entries(state.mistakes)
    .map(([questionNo, stat]) => {
      const question = questions.find((item) => item.no === Number(questionNo));
      return question ? { question, stat } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.stat.count - a.stat.count || b.stat.lastMissedAt - a.stat.lastMissedAt);
}

function recordMistake(question, selectedActionId) {
  try {
    const current = state.mistakes[question.no] || { count: 0 };
    state.mistakes[question.no] = {
      count: current.count + 1,
      lastWrongAction: selectedActionId,
      lastMissedAt: Date.now(),
    };
    saveMistakes();
    renderMistakeBank();
  } catch {
    // Mistake stats are optional; answering logic should keep working.
  }
}

function clearMistakes() {
  state.mistakes = {};
  saveMistakes();
  renderMistakeBank();
}

function createExamRound() {
  const questionByNumber = new Map(questions.map((question) => [question.no, question]));
  const middlePrompts = shuffle(examMiddlePromptNumbers)
    .slice(0, 6)
    .map((questionNo) => questionByNumber.get(questionNo))
    .filter(Boolean);

  return [
    questionByNumber.get(1),
    ...middlePrompts,
    questionByNumber.get(99),
  ].filter(Boolean);
}

function createPracticeRound() {
  const finalPrompt = questions.find((question) => question.no === 99);
  const practicePrompts = questions.filter((question) => question.no !== 99);
  return finalPrompt ? [...practicePrompts, finalPrompt] : practicePrompts;
}

function createMistakeRound() {
  return getMistakeEntries().map((entry) => entry.question);
}

function resetRound(mode = state.mode) {
  state.index = 0;
  state.score = 0;
  state.examFailed = false;
  state.examIntroPlayed = false;
  if (mode === "exam") {
    state.order = createExamRound();
  } else if (mode === "mistake-drill") {
    state.order = createMistakeRound();
  } else {
    state.order = createPracticeRound();
  }
  elements.score.textContent = "0";
  closeFailOverlay();
  setAnswersDisabled(false);
  if (state.order.length > 0) {
    renderQuestion();
  }
}

function renderAnswers() {
  elements.answers.querySelectorAll(".car-control").forEach((button) => {
    button.addEventListener("click", () => handleCarControl(button));
  });
}

function handleCarControl(button) {
  if (state.examFailed || state.answered) {
    return;
  }

  const control = button.dataset.control;
  const action = button.dataset.action;

  if (control === "position") {
    clearSelected();
    state.pendingPosition = true;
    button.classList.add("selected", "armed");
    elements.selectedAction.textContent = "Position lights selected. Press Hazard for roadside parking.";
    setPanelState("parking");
    return;
  }

  if (control === "hazard") {
    chooseAnswer(state.pendingPosition ? "parking" : "__hazard_only", button);
    return;
  }

  if (action) {
    chooseAnswer(action, button);
  }
}

function renderQuestion() {
  const question = state.order[state.index];
  const action = getAction(question.action);
  const examMode = state.mode === "exam";
  const testMode = state.mode === "exam" || state.mode === "practice" || state.mode === "mistake-drill";

  state.answered = false;
  state.examFailed = false;
  state.pendingPosition = false;
  state.chineseVisible = !examMode;
  state.meaningVisible = false;
  elements.counter.textContent = `${state.index + 1} / ${state.order.length}`;
  elements.category.textContent = testMode ? "Test prompt" : action.label;
  elements.chinesePrompt.textContent = question.zh;
  elements.pinyinHelper.textContent = question.pinyin;
  elements.englishHelper.textContent = question.en;
  elements.breakdownHelper.textContent = question.breakdown;
  elements.feedback.textContent = "Choose the matching light control.";
  elements.feedback.className = "feedback";
  elements.nextButton.disabled = false;
  elements.inlineFail.classList.add("hidden");
  setAnswersDisabled(false);
  elements.selectedAction.textContent = "None yet";
  setPanelState("off");
  clearSelected();
  updateRevealState();

  if (examMode && state.voiceReady) {
    window.setTimeout(speakChinese, 250);
  }
}

function chooseAnswer(actionId, sourceButton = null) {
  if (state.examFailed) {
    return;
  }

  if (state.answered) {
    return;
  }

  const question = state.order[state.index];
  const selected = getAction(actionId) || {
    id: actionId,
    label: "Hazard only",
    carAction: "Hazard without position lights",
    chinese: "警示灯",
    panelClass: "parking",
  };
  const correct = getAction(question.action);
  const isCorrect = actionId === question.action;

  clearSelected();
  const button = sourceButton || elements.answers.querySelector(`[data-action="${actionId}"]`);
  button?.classList.add("selected");
  elements.selectedAction.textContent = selected.carAction;
  setPanelState(selected.panelClass);

  state.answered = true;

  if (isCorrect) {
    state.score += 1;
    elements.score.textContent = state.score;
    elements.feedback.className = "feedback correct";
    elements.feedback.textContent = `Correct: ${question.zh} means ${correct.carAction}.`;
    if (isExamMode()) {
      setAnswersDisabled(true);
    }
  } else {
    if (isExamMode()) {
      failExam(question, selected, correct);
      recordMistake(question, actionId);
      return;
    }

    recordMistake(question, actionId);
    elements.feedback.className = "feedback wrong";
    elements.feedback.textContent = `Try to remember: ${question.zh} needs ${correct.carAction} (${correct.chinese}).`;
  }
}

function failExam(question, selected, correct) {
  state.examFailed = true;
  elements.nextButton.disabled = true;
  setAnswersDisabled(true);
  state.chineseVisible = true;
  state.meaningVisible = true;
  updateRevealState();
  elements.feedback.className = "feedback wrong";
  elements.feedback.textContent = `Exam failed. You chose ${selected.label}; correct action was ${correct.label}.`;
  const detail = `${question.zh} (${question.pinyin}) means ${question.en}. Correct action: ${correct.carAction}.`;
  elements.failDetail.textContent = detail;
  elements.inlineFailDetail.textContent = detail;
  elements.inlineFail.classList.remove("hidden");
  elements.failOverlay.classList.remove("hidden");
  playFailAlarm();
}

function playFailAlarm() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    return;
  }

  const context = new AudioContext();
  const now = context.currentTime;
  const notes = [180, 150, 120];

  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = now + index * 0.18;
    oscillator.type = "sawtooth";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.22, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.16);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.18);
  });

  window.setTimeout(() => context.close(), 900);
}

function closeFailOverlay() {
  elements.failOverlay.classList.add("hidden");
}

function setAnswersDisabled(disabled) {
  elements.answers.querySelectorAll(".car-control").forEach((button) => {
    button.disabled = disabled;
  });
}

function retryExam() {
  state.examFailed = false;
  elements.nextButton.disabled = false;
  setAnswersDisabled(false);
  state.mode = "exam";
  switchMode("exam");
}

function studyFailedPrompt() {
  closeFailOverlay();
  state.chineseVisible = true;
  state.meaningVisible = true;
  setAnswersDisabled(true);
  updateRevealState();
}

function clearSelected() {
  elements.answers.querySelectorAll(".car-control").forEach((button) => {
    button.classList.remove("selected");
    button.classList.remove("armed");
  });
}

function setPanelState(panelClass) {
  elements.carPanel.classList.remove("high", "flash", "parking", "off");
  if (panelClass) {
    elements.carPanel.classList.add(panelClass);
  }
}

function nextQuestion() {
  if (state.examFailed) {
    elements.feedback.className = "feedback wrong";
    elements.feedback.textContent = "Exam failed. Use Retry exam or Study this one.";
    elements.failOverlay.classList.remove("hidden");
    return;
  }

  state.index += 1;

  if (state.index >= state.order.length) {
    const finalScore = state.score;
    resetRound();
    elements.feedback.className = "feedback";
    elements.feedback.textContent = state.mode === "exam"
      ? `Exam simulator complete: ${finalScore} / ${state.order.length}. New real-audio exam round started.`
      : state.mode === "mistake-drill"
        ? `Mistake drill complete: ${finalScore} / ${state.order.length || 1}. Drill restarted.`
      : `Practice test complete: ${finalScore} / ${createPracticeRound().length}. Started again from the top.`;
    return;
  }

  renderQuestion();
}

function speakChinese() {
  const question = state.order[state.index];

  playPromptAudio(question).catch(() => {
    speakWithBrowserVoice(question);
  });
}

async function playPromptAudio(question) {
  if (question.audioClips) {
    for (const [index, clip] of question.audioClips.entries()) {
      if (index > 0) {
        await wait(CLIP_SEQUENCE_GAP_MS);
      }
      await playAudioClip(clip);
    }
    return;
  }

  if (question.audioClip) {
    await playAudioClip(question.audioClip);
    return;
  }

  if (!question.audio) {
    throw new Error("No audio source for prompt");
  }

  const audio = new Audio(question.audio);
  audio.preload = "auto";
  audio.playbackRate = TEST_AUDIO_RATE;
  audio.onplaying = () => setVoiceStatus("Playing Mandarin audio.", "ready");
  audio.onerror = () => setVoiceStatus("Prompt audio is not available. Trying browser speech.", "problem");
  await audio.play();
}

function wait(durationMs) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, durationMs);
  });
}

function playAudioClip(clip) {
  return new Promise((resolve, reject) => {
    const audio = new Audio(clip.src);
    audio.preload = "auto";
    audio.playbackRate = TEST_AUDIO_RATE;
    audio.currentTime = clip.start;

    const cleanup = () => {
      audio.ontimeupdate = null;
      audio.onended = null;
      audio.onerror = null;
    };

    audio.onplaying = () => setVoiceStatus("Playing Shenzhen test audio.", "ready");
    audio.ontimeupdate = () => {
      if (audio.currentTime >= clip.end) {
        audio.pause();
        cleanup();
        resolve();
      }
    };
    audio.onended = () => {
      cleanup();
      resolve();
    };
    audio.onerror = () => {
      cleanup();
      reject(new Error("Audio clip failed"));
    };

    audio.play().catch((error) => {
      cleanup();
      reject(error);
    });
  });
}

function speakWithBrowserVoice(question) {

  if (!("speechSynthesis" in window)) {
    setVoiceStatus("Speech is not available in this browser. Try opening the file in Chrome or Edge.", "problem");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(question.zh);
  const chineseVoice = state.voice || findChineseVoice();
  if (!chineseVoice) {
    setVoiceStatus("No Mandarin voice is installed. Use Test English sound to confirm audio, then install a Chinese speech voice in Windows.", "problem");
  }
  utterance.lang = "zh-CN";
  utterance.rate = 0.78;
  utterance.pitch = 1;
  utterance.volume = 1;
  if (chineseVoice) {
    utterance.voice = chineseVoice;
  }
  utterance.onstart = () => setVoiceStatus(`Speaking with ${chineseVoice?.name || "browser default voice"}.`, "ready");
  utterance.onerror = () => {
    setVoiceStatus("The browser tried to speak but audio failed. Open this app in Chrome or Edge if the in-app browser stays silent.", "problem");
  };
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function testEnglishSound() {
  if (!("speechSynthesis" in window)) {
    setVoiceStatus("Speech is not available in this browser.", "problem");
    return;
  }

  const utterance = new SpeechSynthesisUtterance("Sound test. If you can hear this, audio works, but Mandarin voice is missing.");
  utterance.lang = "en-US";
  utterance.rate = 0.9;
  utterance.volume = 1;
  utterance.onstart = () => setVoiceStatus("English sound test is playing. Audio works.", "ready");
  utterance.onerror = () => setVoiceStatus("Even English speech failed. Check browser sound permissions and system volume.", "problem");
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function findChineseVoice() {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  return (
    voices.find((voice) => voice.lang.toLowerCase() === "zh-cn") ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith("zh")) ||
    voices.find((voice) => voice.name.toLowerCase().includes("chinese")) ||
    voices.find((voice) => voice.name.toLowerCase().includes("mandarin")) ||
    null
  );
}

function setVoiceStatus(message, type = "") {
  elements.voiceStatus.textContent = message;
  elements.voiceStatus.className = `voice-status ${type}`.trim();
}

function refreshVoiceStatus() {
  if (!("speechSynthesis" in window)) {
    setVoiceStatus("Speech is not available in this browser. Try Chrome or Edge.", "problem");
    return;
  }

  const voices = window.speechSynthesis.getVoices();
  state.voice = findChineseVoice();

  if (state.voice) {
    setVoiceStatus(`Mandarin voice found: ${state.voice.name}. Click Start voice once.`, "ready");
  } else if (voices.length > 0) {
    setVoiceStatus("No Mandarin voice found. Install a Chinese speech voice in Windows, then restart Chrome.", "problem");
  } else {
    setVoiceStatus("Loading system voices. If this stays here, open the app in Chrome or Edge.", "");
  }

  elements.voiceList.textContent = voices.length
    ? `Browser voices: ${voices.map((voice) => `${voice.name} (${voice.lang})`).join(", ")}`
    : "Browser voices: none reported yet.";
}

async function startVoice() {
  state.voiceReady = true;
  refreshVoiceStatus();
  if (state.mode === "exam" && !state.examIntroPlayed) {
    state.examIntroPlayed = true;
    try {
      for (const [index, clip] of examIntroClips.entries()) {
        if (index > 0) {
          await wait(CLIP_SEQUENCE_GAP_MS);
        }
        await playAudioClip(clip);
      }
    } catch {
      setVoiceStatus("Could not play the exam intro audio. Playing the prompt instead.", "problem");
    }
  }
  speakChinese();
}

function showHint() {
  const question = state.order[state.index];
  const action = getAction(question.action);
  state.meaningVisible = true;
  updateRevealState();
  elements.feedback.className = "feedback";
  elements.feedback.textContent = `Action hint: this belongs to ${action.chinese}.`;
}

function updateRevealState() {
  const examMode = state.mode === "exam";
  const testMode = state.mode === "exam" || state.mode === "practice" || state.mode === "mistake-drill";
  elements.promptArea.classList.toggle("listening", examMode && !state.chineseVisible);
  elements.chinesePrompt.style.color = state.chineseVisible ? "" : "transparent";
  elements.chinesePrompt.style.textShadow = state.chineseVisible ? "" : "0 0 18px rgba(21, 24, 29, 0.28)";
  elements.pinyinHelper.style.color = state.chineseVisible ? "" : "transparent";
  elements.pinyinHelper.style.textShadow = state.chineseVisible ? "" : "0 0 10px rgba(15, 118, 110, 0.24)";
  elements.englishHelper.style.color = state.meaningVisible ? "" : "transparent";
  elements.englishHelper.style.textShadow = state.meaningVisible ? "" : "0 0 10px rgba(105, 113, 125, 0.24)";
  elements.breakdownHelper.style.color = state.meaningVisible ? "" : "transparent";
  elements.breakdownHelper.style.textShadow = state.meaningVisible ? "" : "0 0 10px rgba(63, 72, 84, 0.2)";
  elements.showChineseButton.hidden = !testMode;
  elements.showMeaningButton.hidden = !testMode;
  elements.replayButton.hidden = !testMode;
  elements.startVoiceButton.hidden = !examMode;
  elements.speakButton.hidden = examMode;
  elements.promptLabel.textContent = examMode
    ? "Listen first. Reveal only when needed."
    : "Work through the full command list in order.";
  elements.trainingNote.textContent = examMode
    ? "Exam mode: start command, 6 separate random prompts, then the closing command. No answer is shown at the top."
    : state.mode === "mistake-drill"
      ? "Mistake drill: practice only the prompts you have missed before."
      : "Practice test: go through all separate picture prompts in order, choose the action, then reveal meaning to check yourself.";
}

function revealChinese() {
  state.chineseVisible = true;
  updateRevealState();
}

function revealMeaning() {
  state.meaningVisible = true;
  updateRevealState();
}

function renderLessons() {
  const studyQuestions = questions.filter((question) => question.no !== 99);
  const groups = actions.map((action) => {
    const groupQuestions = studyQuestions.filter((question) => question.action === action.id);
    return `
      <article class="lesson">
        <h3>${action.chinese}</h3>
        <p>${action.carAction}</p>
        <ul>
          ${groupQuestions.map((question) => `<li>${question.zh}</li>`).join("")}
        </ul>
      </article>
    `;
  });

  elements.lessonGrid.innerHTML = groups.join("");
}

function renderReviewTable() {
  elements.reviewTable.innerHTML = questions
    .filter((question) => question.no !== 99)
    .map((question) => {
      const action = getAction(question.action);
      return `
        <tr>
          <td>${question.no}</td>
          <td>${question.zh}</td>
          <td>${question.pinyin}</td>
          <td>${question.breakdown}</td>
          <td>${action.chinese}<br><span>${action.carAction}</span></td>
        </tr>
      `;
    })
    .join("");
}

function renderMistakeBank() {
  const entries = getMistakeEntries();
  const hasMistakes = entries.length > 0;

  elements.mistakeEmpty.classList.toggle("hidden", hasMistakes);
  elements.mistakeTableWrap.classList.toggle("hidden", !hasMistakes);
  elements.drillMistakesButton.disabled = !hasMistakes;
  elements.clearMistakesButton.disabled = !hasMistakes;

  elements.mistakeTable.innerHTML = entries
    .map(({ question, stat }) => {
      const correct = getAction(question.action);
      const wrong = getAction(stat.lastWrongAction);
      return `
        <tr>
          <td>${stat.count}</td>
          <td>${question.zh}<br><span>${question.en}</span></td>
          <td>${question.pinyin}</td>
          <td>${correct.label}</td>
          <td>${wrong ? wrong.label : "Unknown"}</td>
        </tr>
      `;
    })
    .join("");
}

function startMistakeDrill() {
  const entries = getMistakeEntries();
  if (entries.length === 0) {
    renderMistakeBank();
    return;
  }

  state.mode = "mistake-drill";
  elements.modeButtons.forEach((button) => {
    button.classList.remove("active");
  });
  Object.entries(elements.views).forEach(([name, view]) => {
    view.classList.toggle("hidden", name !== "quiz");
  });
  resetRound("mistake-drill");
  elements.feedback.className = "feedback";
  elements.feedback.textContent = "Mistake drill started. These are the prompts you have missed before.";
}

function switchMode(mode) {
  state.mode = mode;
  elements.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });

  Object.entries(elements.views).forEach(([name, view]) => {
    const visibleName = mode === "exam" || mode === "practice" ? "quiz" : mode;
    view.classList.toggle("hidden", name !== visibleName);
  });

  if (mode === "exam" || mode === "practice") {
    resetRound(mode);
  } else if (mode === "mistakes") {
    renderMistakeBank();
  }
}

elements.nextButton.addEventListener("click", nextQuestion);
elements.hintButton.addEventListener("click", showHint);
elements.replayButton.addEventListener("click", speakChinese);
elements.showChineseButton.addEventListener("click", revealChinese);
elements.showMeaningButton.addEventListener("click", revealMeaning);
elements.speakButton.addEventListener("click", speakChinese);
elements.startVoiceButton.addEventListener("click", startVoice);
elements.retryExamButton.addEventListener("click", retryExam);
elements.studyAfterFailButton.addEventListener("click", studyFailedPrompt);
elements.testEnglishButton.addEventListener("click", testEnglishSound);
elements.drillMistakesButton.addEventListener("click", startMistakeDrill);
elements.clearMistakesButton.addEventListener("click", clearMistakes);
elements.modeButtons.forEach((button) => {
  button.addEventListener("click", () => switchMode(button.dataset.mode));
});

window.speechSynthesis?.addEventListener?.("voiceschanged", refreshVoiceStatus);

renderAnswers();
renderLessons();
renderReviewTable();
renderMistakeBank();
renderQuestion();
refreshVoiceStatus();
