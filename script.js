// --- Feedback & Messages Pool ---
const restMessages = [
    "เก่งมาก อย่าลืมพักสายตาบ้างนะครับ",
    "เก่งมากกกก! เดินผ่อนคลายหน่อยไหมครับ?",
    "ล้าแล้วมั้งครับ ดื่มน้ำสักแก้วแล้วค่อยลุยต่อนะ ฮึบๆ",
    "เบรกสักนิดไหมครับ แล้วค่อยมาสู้กันต่อเนอะ",
    "พยายามได้ดีมากครับ ผมเชื่อในตัวคุณนะ เก่งมากเลย",
    "สุ้สุ้ - จากเพื่อนๆ วิศวะคอม",
    "ความตั้งใจไม่ทำร้ายใคร - จากเพื่อนๆ วิศวะคอม",
    "สุ้เขา - จากเพื่อนๆ วิศวะคอม",
    "สู้ไปด้วยกันนะฮึบๆหล่ะ✌️ - จากเพื่อนๆ วิศวะคอม",
];

const feedbackPool = {
    90: [ // 90-100%
        { msg: "เก่งมากกกกก ไม่มีคำไหนจะเหมาะไปมากกว่า เริ่ด", advice: "เข้าใจหมดแล้วสินะ ขอให้วันสอบจริงเป็นแบบนี้นะครับ" },
        { msg: "เริ่ด", advice: "คงพยายามมามากสินะครับ เก่งสุดๆ ไปเลย" },
        { msg: "ทำมาขนาดไหนกันเนี่ยสุดยอดดดด FABULOUS!", advice: "เก่งมากแล้วครับ สอนผมหน่อยยย" },
    ],
    80: [ // 80-89%
        { msg: "อีกนิดจะเต็มแล้ว ถ้าไหวก็ไปกันต่อออ", advice: "พลาดไปแค่นิดเดียวเอง ลองใจเย็นๆ คิดดีๆ ดูหน่อยไหมครับ" },
        { msg: "เกือบ Top แล้วนะเนี่ย กะเอา A เลยสินะครับ", advice: "ทบทวนจุดอ่อนอีกนิดหน่อย จะได้คะแนนเต็มแล้ว" },
    ],
    70: [ // 70-79%
        { msg: "ทำได้ดีเลยครับ พื้นฐานแน่นมากเลยนะเนี่ย", advice: "ทบทวนอีกสักนิดน่าจะคะแนนดีขึ้นแน่นอน สู้ๆ น้า" },
        { msg: "เกือบหัวแถวแล้วนะเนี่ย เก่งจัง", advice: "อย่ากดดันตัวเองเกินไปนะครับ พักให้หายเหนื่อยบ้าง เก่งมากแล้ว" },
    ],
    60: [ // 60-69%
        { msg: "เลยครึ่งแล้วนึงแล้วนะ", advice: "เข้าใจเนื้อหาพอสมควรเลยนะเนี่ย ลองอ่านทบทวนข้อที่ผิดดูน่าจะช่วยนะครับ" },
        { msg: "เกือบหัวแถวแล้วนะเนี่ย", advice: "ลองอ่านเอกสารอีกสักรอบแล้วทวนดูนะครับ" },
    ],
    50: [ // 50-59%
        { msg: "มาได้ครึ่งทางแล้ว! มาพยายามไปด้วยกันอีกสักนิดเนอะ", advice: "เริ่มจับจุดได้แล้วสินะ แนะนำให้อ่านเฉลยด้านล่างอย่างละเอียดเลยนะ" },
        { msg: "พยายามกันต่อเนอะ", advice: "ทำแบบข้อน้อยๆ ก่อนน่าจะดีกว่านะครับ" },
    ],
    40: [ // 40-49%
        { msg: "เกือบผ่านแล้ว! ฮึบอีกนิดเดียว", advice: "อย่าเพิ่งท้อ ลองเน้นทำความเข้าใจทีละบท ไม่ต้องรีบครับ ฮึบๆ" },
        { msg: "ฮึบๆ นิดหน่อยปล่อยผ่าน แล้วไปกันต่อออ", advice: "พักสักนิดแล้วกลับมาทำน่าจะช่วยได้เยอะครับผม" },
    ],
    30: [ // 30-39%
        { msg: "อย่าเพิ่งท้อนะ เชื่อมั่นในตัวเองไว้ I trust that you could do it krub!", advice: "ลองกลับไปอ่านเนื้อหาบทที่อ่อนดูไหมครับ" },
    ],
    20: [ // 20-29%
        { msg: "ใจเย็นๆ นะครับ อย่าเพิ่งซิ่ง", advice: "อย่าเพิ่งท้อนะ ลองทบทวนดูครับ ช้าแต่ชัวร์นะ" },
        { msg: "ท้อได้แต่อย่าเพิ่งถอยนะครับ ฮึบๆ", advice: "ยังพอมีเวลา เก็บเท่าที่ไหวดูก่อนก็ได้ครับ สู้ๆ นะครับ" },
    ],
    10: [ // 10-19%
        { msg: "ถือว่าเช็คจุดอ่อนกันก่อนเนอะ ไม่มีใครเก่งมาตั้งแต่เริ่มหรอก สู้ๆ", advice: "คิดในแง่ดีเราได้รู้จุดอ่อนตัวเองแล้วเนอะ" },
        { msg: "อย่าเพิ่งท้อนะ มาลองอีกสักครั้งกันเถอะ", advice: "ลองแบบ 10 ข้อเก็บทีละนิดๆ ไปก่อนน่าจะดีกว่านะครับ สู้ๆ นะผมเชื่อว่าคุณทำได้" },
    ],
    0: [ // 0-9%
        { msg: "ดีกว่าไม่เริ่มนะครับ ลองดูอีกสักครั้งครับ เพราะข้อสอบผมทำแบบยากไว้เยอะมากกก", advice: "คนที่เริ่มจากก้น มันมีแรงถีบเยอะกว่าคนที่อยู่ด้านบนอีกนะครับ" },
        { msg: "ให้ผมช่วยไหมครับ ทักมาได้นะผมไม่กัด", advice: "ฮึบๆ พยายามให้เต็ม ผมเชื่อว่าคุณทำได้" },
    ]
};

// ดึงคำชมแบบสุ่มตามช่วงเปอร์เซ็นต์
function getRandomFeedback(percent) {
    let tier = Math.floor(percent / 10) * 10;
    if (tier === 100) tier = 90; // ใช้ชุดเดียวกับ 90 แต่คะแนนจะโชว์ 100%
    const pool = feedbackPool[tier];
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
}

// --- State Variables ---
let selectedQuestions = [];
let currentQuestionIndex = 0;
let initialTime = 0;
let score = 0;
let hintsLeft = 3;
let timerInterval;
let timeRemaining = 0;
let chapterScores = {}; 
let chapterTotals = {};
let chapterWrongs = {};
let missedQuestions = [];
let userSelectedIndex = null;

// --- ระบบจัดการสีของป้ายไฟ (Streak Theme) ---
function updateStreakBadge(badgeId, streak, isResultScreen = false) {
    const badge = document.getElementById(badgeId);
    if (!badge || streak <= 0) return;

    // กำหนดธีมสีตามจำนวนวัน (Level Up)
    let theme = {};
    if (streak >= 15) {
        theme = {
            bg: "bg-gradient-to-r from-emerald-400 to-teal-500",
            shadow: "shadow-teal-500/40",
            fireFilter: "filter: hue-rotate(90deg) brightness(1.2);", // ไฟสีเขียว
            text: "ปรมาจารย์!"
        };
    } else if (streak >= 7) {
        theme = {
            bg: "bg-gradient-to-r from-blue-500 to-indigo-500",
            shadow: "shadow-blue-500/40",
            fireFilter: "filter: hue-rotate(180deg) brightness(1.2);", // ไฟสีฟ้า
            text: "ร้อนแรงสุดๆ!"
        };
    } else if (streak >= 3) {
        theme = {
            bg: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
            shadow: "shadow-purple-500/40",
            fireFilter: "filter: hue-rotate(250deg) brightness(1.2);", // ไฟสีม่วง
            text: "กำลังมาแรง!"
        };
    } else {
        theme = {
            bg: "bg-gradient-to-r from-orange-400 to-red-500",
            shadow: "shadow-orange-500/40",
            fireFilter: "", // ไฟสีส้มปกติ
            text: "เริ่มต้นได้ดี!"
        };
    }

    // กำหนดรูปแบบกล่อง (หน้าแรก กับ หน้าผลลัพธ์ จะเด้งต่างกันนิดโหน่ย)
    const baseClass = isResultScreen 
        ? "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-extrabold shadow-lg transform scale-105 mb-2 transition-all duration-500 text-white w-full sm:w-auto" 
        : "inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full font-extrabold shadow-md transform hover:scale-105 transition-all duration-500 cursor-default text-white";
    
    badge.className = `${baseClass} ${theme.bg} ${theme.shadow}`;
    badge.classList.remove('hidden');
    
    const animation = isResultScreen ? "animate-bounce" : "animate-pulse";
    
    // ยัด HTML และสีไฟเข้าไปในกล่อง
    badge.innerHTML = `
        <span class="text-3xl drop-shadow-md ${animation}" style="${theme.fireFilter}">🔥</span> 
        <span class="tracking-wide">Streak: <span class="text-2xl text-yellow-200">${streak}</span> วันติด! 
        <span class="text-sm font-normal opacity-90 ml-1 hidden sm:inline">(${theme.text})</span></span>
    `;
}

const POINTS_PER_QUESTION = 0.2857142857142857;

// --- Initialize Setup Screen ---
document.getElementById('quiz-title').innerText = quizData.quiz_title;
document.getElementById('quiz-desc').innerText = quizData.description;

const chapterContainer = document.getElementById('chapter-selection');
quizData.chapters.forEach(ch => {
    const div = document.createElement('div');
    div.innerHTML = `
        <label class="flex items-center space-x-2 cursor-pointer bg-white border border-orange-100 p-2 rounded-lg hover:bg-orange-50 transition">
            <input type="checkbox" value="${ch.chapter_id}" class="chapter-cb w-4 h-4 text-orange-500 rounded focus:ring-orange-400">
            <span class="text-gray-700">${ch.chapter_name}</span>
        </label>
    `;
    chapterContainer.appendChild(div);
});

// Update Estimated Time
document.getElementById('question-count').addEventListener('change', (e) => {
    const Q = parseInt(e.target.value);
    const T = Math.round((180 / 105) * Q);
    document.getElementById('est-time').innerText = T;
});

// --- Start Quiz Logic ---
document.getElementById('start-btn').addEventListener('click', () => {
    const Q = parseInt(document.getElementById('question-count').value);
    const T_minutes = (180 / 105) * Q;
    timeRemaining = Math.floor(T_minutes * 60); 
    initialTime = timeRemaining;

    const selectedCbs = document.querySelectorAll('.chapter-cb:checked');
    const focusedChapterIds = Array.from(selectedCbs).map(cb => cb.value);

    let allQuestions = [];
    quizData.chapters.forEach(ch => {
        chapterScores[ch.chapter_name] = 0;
        chapterTotals[ch.chapter_name] = 0;
        chapterWrongs[ch.chapter_name] = 0;
        ch.questions.forEach(q => {
            allQuestions.push({...q, chapter_name: ch.chapter_name, chapter_id: ch.chapter_id});
        });
    });

    // Weighting Logic (70% Focus, 30% Other)
    if (focusedChapterIds.length > 0) {
        const focusedPool = allQuestions.filter(q => focusedChapterIds.includes(q.chapter_id)).sort(() => 0.5 - Math.random());
        const otherPool = allQuestions.filter(q => !focusedChapterIds.includes(q.chapter_id)).sort(() => 0.5 - Math.random());
        
        let targetFocused = Math.round(Q * 0.7);
        let actualFocused = Math.min(targetFocused, focusedPool.length);
        let actualOther = Math.min(Q - actualFocused, otherPool.length);

        if (actualFocused + actualOther < Q && focusedPool.length > actualFocused) {
            actualFocused = Math.min(focusedPool.length, Q - actualOther);
        }

        selectedQuestions = [...focusedPool.slice(0, actualFocused), ...otherPool.slice(0, actualOther)].sort(() => 0.5 - Math.random());
    } else {
        selectedQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, Q);
    }

    if(selectedQuestions.length === 0) return alert("ไม่พบข้อสอบในระบบ");
    selectedQuestions.forEach(q => chapterTotals[q.chapter_name]++);

    document.getElementById('setup-screen').classList.add('hidden-step');
    document.getElementById('quiz-screen').classList.remove('hidden-step');
    startTimer();
    renderQuestion();
});

function startTimer() {
    timerInterval = setInterval(() => {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endQuiz();
            return;
        }
        timeRemaining--;
        const m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
        const s = (timeRemaining % 60).toString().padStart(2, '0');
        document.getElementById('timer-text').innerText = `${m}:${s}`;
    }, 1000);
}

// --- Render Interactive Question ---
function renderQuestion() {
    userSelectedIndex = null;
    const q = selectedQuestions[currentQuestionIndex];
    
    document.getElementById('progress-text').innerText = `${currentQuestionIndex + 1} / ${selectedQuestions.length}`;
    
    const qText = document.getElementById('question-text');
    qText.classList.remove('fade-in');
    void qText.offsetWidth; 
    qText.innerText = q.question;
    qText.classList.add('fade-in');
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        // เพิ่ม disabled:cursor-not-allowed เพื่อให้รู้ว่าล็อกแล้วห้ามกดซ้ำ
        btn.className = "option-btn w-full text-left p-4 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 font-medium text-gray-700 fade-in disabled:cursor-not-allowed";
        btn.style.animationDelay = `${index * 0.05}s`;
        btn.innerText = opt;
        btn.onclick = () => selectOption(btn, index);
        optionsContainer.appendChild(btn);
    });

    // รีเซ็ตกล่องคำอธิบายให้กลับไปซ่อน และเป็นสีเหลือง
    const hintDisplay = document.getElementById('hint-display');
    hintDisplay.className = "text-sm bg-yellow-50 border border-yellow-200 p-3 rounded-lg text-yellow-800 hidden fade-in";
    hintDisplay.innerText = "";
    
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    nextBtn.className = "bg-gray-200 text-gray-400 font-bold py-3 px-8 rounded-xl cursor-not-allowed transition";
}

function selectOption(selectedBtn, index) {
    // ป้องกันการคลิกเปลี่ยนชอยส์ หลังจากเฉลยไปแล้ว
    if (userSelectedIndex !== null) return; 

    userSelectedIndex = index;
    const q = selectedQuestions[currentQuestionIndex];
    const isCorrect = (index === q.correct_index);

    // 1. ล็อกปุ่มทั้งหมดและไฮไลท์สีเฉลย
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach((btn, i) => {
        btn.disabled = true; // ล็อกปุ่ม
        btn.classList.remove('hover:bg-gray-50', 'bg-white');
        
        if (i === q.correct_index) {
            // ข้อที่ถูก -> เปลี่ยนเป็นสีเขียว
            btn.classList.add('bg-green-100', 'border-green-500', 'text-green-800', 'shadow-sm');
            btn.innerHTML = `✅ ${btn.innerText}`;
        } else if (i === index && !isCorrect) {
            // ข้อที่ผู้ใช้เลือกแล้วผิด -> เปลี่ยนเป็นสีแดง
            btn.classList.add('bg-red-100', 'border-red-500', 'text-red-800');
            btn.innerHTML = `❌ ${btn.innerText}`;
        } else {
            // ข้ออื่นๆ ที่ไม่ได้เลือก -> ทำให้สีจางลง ไม่แย่งซีน
            btn.classList.add('opacity-40', 'bg-gray-50');
        }
    });

    // 2. คิดคะแนนทันทีที่นี่
    if (isCorrect) {
        score++;
        chapterScores[q.chapter_name]++;
    } else {
        chapterWrongs[q.chapter_name]++;
        missedQuestions.push({
            question: q.question,
            userAns: q.options[index],
            correctAns: q.options[q.correct_index],
            explanation: q.explanation
        });
    }

    // 3. แสดงคำอธิบาย (Explanation) ดันขึ้นมาทันที
    const hintDisplay = document.getElementById('hint-display');
    hintDisplay.classList.remove('hidden', 'bg-yellow-50', 'border-yellow-200', 'text-yellow-800');
    if (isCorrect) {
        hintDisplay.classList.add('bg-green-50', 'border-green-200', 'text-green-800');
        hintDisplay.innerHTML = `<span class="font-bold text-green-700 text-base">🎉 ยอดเยี่ยม! ตอบถูกครับ</span><br><span class="text-green-700 mt-1 block">💡 <b>อธิบายเพิ่ม:</b> ${q.explanation}</span>`;
    } else {
        hintDisplay.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        hintDisplay.innerHTML = `<span class="font-bold text-red-700 text-base">❌ ตอบผิดครับ!</span><br><span class="text-red-700 mt-1 block">💡 <b>คำอธิบาย:</b> ${q.explanation}</span>`;
    }

    // 4. เปิดปุ่ม "ข้อถัดไป" ให้กดไปต่อได้
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = false;
    nextBtn.className = "bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl shadow-md transition transform hover:scale-105";
}

document.getElementById('next-btn').addEventListener('click', () => {
    if (userSelectedIndex === null) return;

    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        renderQuestion();
    } else {
        endQuiz();
    }
});

// --- Hint System ---
document.getElementById('hint-btn').addEventListener('click', () => {
    // เช็คว่ากดดูคำใบ้ได้ ก็ต่อเมื่อยังไม่ได้เลือกคำตอบ (ถ้าตอบไปแล้วปุ่มนี้จะกดไม่ติด)
    if (hintsLeft > 0 && userSelectedIndex === null) {
        hintsLeft--;
        document.getElementById('hints-left').innerText = hintsLeft;
        
        const q = selectedQuestions[currentQuestionIndex];
        const display = document.getElementById('hint-display');
        display.innerText = "💡 คำใบ้: " + q.explanation;
        display.classList.remove('hidden');

        if (hintsLeft === 0) {
            document.getElementById('hint-btn').classList.add('opacity-50', 'cursor-not-allowed');
        }
    }
});

// --- End Quiz & Analytics ---
function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById('quiz-screen').classList.add('hidden-step');
    document.getElementById('result-screen').classList.remove('hidden-step');
    
    const total = selectedQuestions.length;
    const percent = Math.round((score / total) * 100);
    const actualScore = (score * POINTS_PER_QUESTION).toFixed(2);

    const timeSpentSeconds = initialTime - Math.max(0, timeRemaining);
    const mSpent = Math.floor(timeSpentSeconds / 60).toString().padStart(2, '0');
    const sSpent = (timeSpentSeconds % 60).toString().padStart(2, '0');

    document.getElementById('correct-count').innerText = score;
    document.getElementById('total-count').innerText = total;
    document.getElementById('percentage-score').innerText = percent;
    document.getElementById('actual-score').innerText = actualScore;
    document.getElementById('time-spent-text').innerText = `${mSpent}:${sSpent} นาที`;

    // --- Session Storage Logic (จำข้อมูลข้ามการกด Reload) ---
    let attemptCount = parseInt(sessionStorage.getItem('quizAttemptCount')) || 0;
    let previousPercent = sessionStorage.getItem('quizPreviousPercent');
    
    attemptCount++; 
    sessionStorage.setItem('quizAttemptCount', attemptCount);
    sessionStorage.setItem('quizPreviousPercent', percent);

    // แสดงผลความก้าวหน้า
    if (attemptCount > 1 && previousPercent !== null) {
        document.getElementById('session-alerts').classList.remove('hidden');
        const diff = percent - parseInt(previousPercent);
        const alertBox = document.getElementById('improvement-alert');
        
        if (diff > 0) {
            alertBox.innerHTML = `📈 <b>รอบที่ ${attemptCount}:</b> เก่งมาก! คุณทำคะแนน <span class="text-green-600 font-bold">เพิ่มขึ้น ${diff}%</span> จากรอบที่แล้ว`;
            alertBox.className = "bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl font-medium text-center shadow-sm";
        } else if (diff < 0) {
            alertBox.innerHTML = `📉 <b>รอบที่ ${attemptCount}:</b> คะแนน <span class="text-red-600 font-bold">ลดลง ${Math.abs(diff)}%</span> จากรอบที่แล้ว ไม่เป็นไรนะ ลองใหม่!`;
            alertBox.className = "bg-orange-50 border border-orange-200 text-orange-800 px-4 py-3 rounded-xl font-medium text-center shadow-sm";
        } else {
            alertBox.innerHTML = `⚖️ <b>รอบที่ ${attemptCount}:</b> คะแนน <span class="text-blue-600 font-bold">เท่ากับรอบที่แล้วเป๊ะ!</span> รักษามาตรฐานได้ดีครับ`;
        }

        if (attemptCount >= 3) {
            const restBox = document.getElementById('rest-alert');
            restBox.classList.remove('hidden');
            const randomRestMsg = restMessages[Math.floor(Math.random() * restMessages.length)];
            restBox.innerHTML = `<b>ข้อความใหม่:</b> ${randomRestMsg}`;
        }
    }

    // สุ่ม Feedback ตามช่วงคะแนน
    const feedback = getRandomFeedback(percent);
    const feedbackMsg = document.getElementById('feedback-message');
    const adviceTxt = document.getElementById('actionable-advice');

    feedbackMsg.innerText = feedback.msg;
    adviceTxt.innerText = feedback.advice;

    if (percent >= 80) feedbackMsg.className = "text-xl font-medium text-green-600";
    else if (percent >= 50) feedbackMsg.className = "text-xl font-medium text-blue-600";
    else if (percent >= 30) feedbackMsg.className = "text-xl font-medium text-orange-500";
    else feedbackMsg.className = "text-xl font-medium text-red-500";

    // Find Strongest and Weakest Chapter
    let weakestChapter = "ไม่มี (ตอบถูกหมด!)";
    let strongestChapter = "ยังไม่มีข้อมูลที่ชัดเจน";
    let maxWrong = -1;
    let maxAccuracy = -1;

    for (const [chapter, totalQs] of Object.entries(chapterTotals)) {
        if (totalQs > 0) {
            const wrongs = chapterWrongs[chapter] || 0;
            const accuracy = ((totalQs - wrongs) / totalQs) * 100;

            if (wrongs > maxWrong && wrongs > 0) {
                maxWrong = wrongs;
                weakestChapter = `${chapter} (พลาดไป ${wrongs} ข้อ)`;
            }

            if (accuracy > maxAccuracy) {
                maxAccuracy = accuracy;
                strongestChapter = `${chapter} (ความแม่นยำ ${Math.round(accuracy)}%)`;
            }
        }
    }
    
    document.getElementById('weakest-chapter').innerText = maxWrong > 0 ? weakestChapter : "ยอดเยี่ยม! ไม่มีบทที่พลาดเลย";
    document.getElementById('strongest-chapter').innerText = strongestChapter;

    // Render Missed Questions (Anki-style 3D Flip Card)
    const reviewContainer = document.getElementById('review-container');
    if (missedQuestions.length === 0) {
        reviewContainer.innerHTML = "<div class='bg-green-50 p-4 rounded-xl text-green-700 text-center font-medium'>สุดยอดมากครับ คุณไม่พลาดเลยสักข้อ! 🎉</div>";
    } else {
        reviewContainer.innerHTML = ""; 
        
        missedQuestions.forEach((mq, idx) => {
            const card = document.createElement('div');
            card.className = "flip-card w-full mb-4"; 
            card.innerHTML = `
                <div class="flip-card-inner">
                    <div class="flip-card-front flex flex-col justify-center">
                        <div class="flex justify-between items-start mb-2">
                            <span class="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">ทบทวนข้อที่ ${idx + 1}</span>
                            <span class="text-gray-400 text-xs flex items-center gap-1 animate-pulse">
                                🔄 ชี้เพื่อพลิก
                            </span>
                        </div>
                        <p class="font-semibold text-gray-800 text-lg mb-4">${mq.question}</p>
                        <p class="text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-100 mt-auto">
                            <span class="font-bold">❌ คุณตอบ:</span> ${mq.userAns}
                        </p>
                    </div>
                    
                    <div class="flip-card-back flex flex-col justify-center">
                        <p class="text-sm text-green-700 bg-green-50 p-3 rounded-lg border border-green-200 mb-3">
                            <span class="font-bold">✅ เฉลยที่ถูกต้อง:</span> ${mq.correctAns}
                        </p>
                        <div class="bg-white/60 p-3 rounded-lg border border-amber-200 text-gray-700 text-sm flex-grow">
                            <span class="font-bold text-amber-600">💡 คำอธิบาย:</span> ${mq.explanation}
                        </div>
                    </div>
                </div>
            `;
            reviewContainer.appendChild(card); 
        });
    }

    // --- อัปเดต Study Streak เมื่อทำข้อสอบเสร็จ ---
    let currentStreak = parseInt(localStorage.getItem('ecoQuiz_streak')) || 0;
    let lastDate = localStorage.getItem('ecoQuiz_lastDate');
    let todayDate = new Date();
    todayDate.setHours(0,0,0,0);
    
    if (!lastDate) {
        currentStreak = 1; 
    } else {
        let lastPlay = new Date(lastDate);
        lastPlay.setHours(0,0,0,0);
        
        let yesterdayDate = new Date(todayDate);
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        
        if (lastPlay.getTime() === yesterdayDate.getTime()) {
            currentStreak++; 
        } else if (lastPlay.getTime() < yesterdayDate.getTime()) {
            currentStreak = 1; 
        }
    }
    
    localStorage.setItem('ecoQuiz_streak', currentStreak);
    localStorage.setItem('ecoQuiz_lastDate', todayDate.toISOString());
    
    // เรียกใช้งานฟังก์ชันพ่นสีไฟ (หน้าผลลัพธ์)
    updateStreakBadge('streak-result-badge', currentStreak, true);

    // --- ระบบยิงพลุฉลองความสำเร็จเมื่อคะแนนดีกว่ารอบก่อน ---
    let isImproved = false;
    if (attemptCount > 1 && previousPercent !== null) {
        if (percent - parseInt(previousPercent) > 0) isImproved = true;
    }
    
    if (percent >= 80 || isImproved) {
        triggerConfetti();
    }
    
    // --- แสดงกราฟ ---
    renderRadarChart();
}

// --- Chart.js ---
let myRadarChart = null;

function renderRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    const labels = [];
    const currentData = [];
    const currentAccuracyMap = {}; // เก็บข้อมูลรอบนี้ไว้เซฟลง Session

    // คำนวณความแม่นยำรอบนี้
    for (const [chapter, total] of Object.entries(chapterTotals)) {
        if (total > 0) {
            const accuracy = Math.round((chapterScores[chapter] / total) * 100);
            labels.push(chapter.replace("บทที่ ", ""));
            currentData.push(accuracy);
            currentAccuracyMap[chapter] = accuracy;
        }
    }

    const prevAccuracyStr = sessionStorage.getItem('quizPrevChapterAccuracy');
    const prevAccuracyMap = prevAccuracyStr ? JSON.parse(prevAccuracyStr) : null;
    
    // บันทึกข้อมูลรอบนี้ทับลงไป เพื่อใช้เป็น "รอบที่แล้ว" ในการทำข้อสอบครั้งถัดไป
    sessionStorage.setItem('quizPrevChapterAccuracy', JSON.stringify(currentAccuracyMap));

    // ตั้งค่าเส้นกราฟรอบปัจจุบัน (สีส้ม)
    const datasets = [{
        label: 'รอบนี้ (%)',
        data: currentData,
        backgroundColor: 'rgba(249, 115, 22, 0.3)', // ส้มโปร่งแสง
        borderColor: 'rgba(249, 115, 22, 1)',
        pointBackgroundColor: 'rgba(249, 115, 22, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(249, 115, 22, 1)',
        borderWidth: 2,
        fill: true
    }];

    // ถ้ามีข้อมูลรอบที่แล้ว ให้เพิ่มเส้นกราฟเส้นที่ 2 (สีเทาเส้นประ)
    if (prevAccuracyMap) {
        const prevData = [];
        for (const [chapter, total] of Object.entries(chapterTotals)) {
            if (total > 0) {
                prevData.push(prevAccuracyMap[chapter] || 0); 
            }
        }
        datasets.push({
            label: 'รอบที่แล้ว (%)',
            data: prevData,
            backgroundColor: 'rgba(156, 163, 175, 0.1)', // เทาใสๆ
            borderColor: 'rgba(156, 163, 175, 0.8)',
            borderDash: [5, 5], // ทำให้เป็นเส้นประ
            pointBackgroundColor: 'rgba(156, 163, 175, 1)',
            borderWidth: 2,
            fill: true
        });
    }

    // ล้างกราฟเก่าทิ้งก่อนวาดใหม่ (แก้บั๊กเวลาเอาเมาส์ชี้แล้วกราฟกระพริบสลับกับอันเก่า งมนานจ้าดดดดดดดด)
    if (myRadarChart != null) {
        myRadarChart.destroy();
    }

    // วาดกราฟใหม่
    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            scales: { 
                r: { 
                    min: 0, 
                    max: 100, 
                    ticks: { stepSize: 20, backdropColor: 'transparent' },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    angleLines: { color: 'rgba(0, 0, 0, 0.05)' }
                } 
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: { usePointStyle: true, padding: 20, font: { family: 'Prompt' } }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleFont: { family: 'Prompt' },
                    bodyFont: { family: 'Prompt' }
                }
            },
            responsive: true,
        }
    });
}

function triggerConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, { particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);
}

// --- สคริปต์แชร์คะแนน (คัดลอกลง Clipboard) ---
function shareScore() {
    const percent = document.getElementById('percentage-score').innerText;
    const attemptCount = sessionStorage.getItem('quizAttemptCount') || 1;
    let strongest = document.getElementById('strongest-chapter').innerText;
    
    // ตัดข้อความเอาแค่ชื่อบทสั้นๆ ไม่เอาตัวเลขเปอร์เซ็นต์มาโชว์ตอนแชร์
    if (strongest.includes("(")) {
        strongest = strongest.split("(")[0].trim();
    }

    // ข้อความที่จะถูกคัดลอก
    const shareText = `Mocktest เราได้ ${percent}% (รอบที่ ${attemptCount})\n⭐ บทที่แน่นสุด: ${strongest}\n\n เจ๋งกว่าป่าว มาลองดูดิ๊`;
    
    // คำสั่งคัดลอกลง Clipboard
    navigator.clipboard.writeText(shareText).then(() => {
        const btn = document.getElementById('share-btn');
        const originalHTML = btn.innerHTML;
        
        btn.innerHTML = `✅ คัดลอกข้อความสำเร็จ!`;
        btn.classList.replace('bg-blue-500', 'bg-green-500');
        btn.classList.replace('hover:bg-blue-600', 'hover:bg-green-600');
        
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.replace('bg-green-500', 'bg-blue-500');
            btn.classList.replace('hover:bg-green-600', 'hover:bg-blue-600');
        }, 3000);
    }).catch(err => {
        alert('ระบบไม่สามารถคัดลอกข้อความได้ครับ กรุณาลองใหม่อีกครั้ง');
    });
}

// --- Study Streak System (ระบบนับวันต่อเนื่องแบบ Duolingo) ---
function initStreak() {
    let streak = parseInt(localStorage.getItem('ecoQuiz_streak')) || 0;
    let lastDate = localStorage.getItem('ecoQuiz_lastDate');
    
    let today = new Date();
    today.setHours(0,0,0,0);
    
    // เช็คว่าสตรีคขาดหรือยัง (ถ้าหายไปเกิน 1 วัน)
    if (lastDate) {
        let lastPlay = new Date(lastDate);
        lastPlay.setHours(0,0,0,0);
        
        let yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        if (lastPlay.getTime() < yesterday.getTime()) {
            streak = 0; // ไฟดับแล้ว! สตรีคขาด ไม่มีรีไฟแบบ ตต นะ
            localStorage.setItem('ecoQuiz_streak', 0);
        }
    }
    
        updateStreakBadge('streak-setup-badge', streak, false);

    initStreak(); // เรียกใช้งานทันทีตอนเปิดเว็บ
}