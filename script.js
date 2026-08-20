
(function(){
  const key="avaSettings";
  const isEN=document.documentElement.lang==="en" || location.pathname.includes("/en/");
  const SEARCH_DATA=[{"title":"درباره آوا","meta":"درباره آوا | آوا بیات","text":"درباره آوا | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← درباره آوا من کی هستم؟ من آوا بیات، دانش‌آموز پایه هفتم هستم. به برنامه‌نویسی، رباتیک، کتاب، زبان انگلیسی، فیلم، موسیقی، بازی‌های فکری و ورزش علاقه دارم. دوست دارم چیزهای تازه یاد بگیرم و قدم‌به‌قدم برای آینده‌ام مهارت بسازم. علاقه‌های من 🎓 دانش‌آموز 💻 برنامه‌نویسی 🤖 رباتیک 📚 کتاب 🇬🇧 انگلیسی  🎬 فیلم 🧠 بازی فکری آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"about.html"},{"title":"علاءالدین","meta":"علاءالدین | آوا بیات","text":"علاءالدین | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← علاءالدین 🎬 علاءالدین معرفی داستان علاءالدین، چراغ جادو و ماجرایی که زندگی او را تغییر می‌دهد. ▶️ جست‌وجوی نسخه اصلی مشخصات عنوان: علاءالدین سال ساخت: ۲۰۱۹ کارگردان: گای ریچی کشور: ایالات متحده نوع: فیلم سینمایی آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"aladdin.html"},{"title":"Azul","meta":"Azul | آوا بیات","text":"Azul | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← Azul 🟦 Azul درباره بازی یک بازی انتخاب کاشی و ساخت الگو که به برنامه‌ریزی دقیق نیاز دارد. 🔎 جست‌وجوی نسخه اصلی مشخصات نام: Azul نوع: بازی فکری آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"azul.html"},{"title":"پسرک، موش کور، روباه و اسب","meta":"پسرک، موش کور، روباه و اسب | آوا بیات","text":"پسرک، موش کور، روباه و اسب | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← پسرک، موش کور، روباه و اسب 📚 پسرک، موش کور، روباه و اسب معرفی کتاب کتابی تصویری درباره دوستی، مهربانی، امید و شجاعت. 📖 جست‌وجوی نسخه اصلی مشخصات عنوان: پسرک، موش کور، روباه و اسب نویسنده: چارلی مکسی کشور: بریتانیا سال انتشار: ۲۰۱۹ آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"book-boy.html"},{"title":"جنگی که نجاتم داد","meta":"جنگی که نجاتم داد | آوا بیات","text":"جنگی که نجاتم داد | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← جنگی که نجاتم داد 📚 جنگی که نجاتم داد معرفی کتاب رمانی درباره آدا، دختری که در دوران جنگ جهانی دوم با شجاعت مسیر زندگی تازه‌ای را تجربه می‌کند. 📖 جست‌وجوی نسخه اصلی مشخصات عنوان: جنگی که نجاتم داد نویسنده: کیمبرلی بروبیکر بردلی کشور: ایالات متحده سال انتشار: ۲۰۱۵ آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"book-war.html"},{"title":"کتاب‌ها","meta":"کتاب‌ها | آوا بیات","text":"کتاب‌ها | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← کتاب‌ها 📖 جنگی که نجاتم داد کیمبرلی بروبیکر بردلی 🦊 پسرک، موش کور، روباه و اسب چارلی مکسی ⚡ مجموعه هری پاتر جی. کی. رولینگ 🎁 جعبه خاطرات جوآنا رولاند 📚 ماجراهای ریگو رزا جزئیات نسخه دقیق بعداً تکمیل می‌شود آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"books.html"},{"title":"ساختمان پزشکان","meta":"ساختمان پزشکان | آوا بیات","text":"ساختمان پزشکان | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← ساختمان پزشکان 🎬 ساختمان پزشکان معرفی یک مجموعه کمدی درباره نیما افشار و موقعیت‌های طنز زندگی کاری و خانوادگی او. ▶️ جست‌وجوی نسخه اصلی مشخصات عنوان: ساختمان پزشکان سال ساخت: ۱۳۹۰ کارگردان: سروش صحت کشور: ایران نوع: سریال آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"building-doctors.html"},{"title":"ارتباط با من","meta":"ارتباط با من | آوا بیات","text":"ارتباط با من | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← ارتباط با من 💌 اطلاعات تماس بعداً اینجا اضافه می‌شود. آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"contact.html"},{"title":"زبان انگلیسی","meta":"زبان انگلیسی | آوا بیات","text":"زبان انگلیسی | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← زبان انگلیسی 🇬🇧 مسیر زبان انگلیسی من کتاب زبان من Got It 3 است. 📜 مدارک و کارنامه‌های زبان من بعداً اینجا اضافه می‌شوند. مشخصات کتاب: Got It 3 آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"english.html"},{"title":"بازی‌های فکری","meta":"بازی‌های فکری | آوا بیات","text":"بازی‌های فکری | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← بازی‌های فکری 💎 Splendor صفحه بازی 🟦 Azul صفحه بازی 🧩 پاستور صفحه بازی آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"games.html"},{"title":"شناخته شدن","meta":"شناخته شدن | آوا بیات","text":"شناخته شدن | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← شناخته شدن 🌟 شناخته شدن دوست دارم به خاطر چیزهایی که می‌سازم، یاد می‌گیرم و انجام می‌دهم شناخته شوم. آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"goal-known.html"},{"title":"مهاجرت","meta":"مهاجرت | آوا بیات","text":"مهاجرت | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← مهاجرت ✈️ مهاجرت دوست دارم در آینده محیط تازه‌ای را تجربه کنم، بیشتر یاد بگیرم و مسیر خودم را بسازم. آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"goal-migration.html"},{"title":"MISSION: NASA 🚀","meta":"ماموریت: ناسا | آوا بیات","text":"ماموریت: ناسا | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت به هدف‌ها ← FUTURE MISSION // AVA-01 MISSION: NASA 🚀 ساختن دانش، مهارت و تجربه برای تبدیل شدن به یک مهندس در دنیای فضا و فناوری؛ و رسیدن به جایی که بتوانم روی پروژه‌های واقعی فضایی کار کنم. SPACE ENGINEERING TECHNOLOGY NASA DESTINATION MISSION STATUS ACTIVE ماموریت در حال اجراست. DESTINATION NASA فضا و فناوری CURRENT STAGE LEARNING + BUILDING یادگیری و ساختن مهارت‌های اصلی MISSION TYPE ENGINEERING علم، کد، رباتیک و حل مسئله 01 // FINAL GOAL هدف این ماموریت چیست؟ تبدیل شدن به یک مهندس در حوزه فضا و فناوری، ساختن مهارت‌های فنی قوی و رسیدن به سطحی که بتوانم در پروژه‌های واقعی فضایی نقش داشته باشم. 02 // WHY THIS PATH چرا مسیر فضا؟ چون فضا چیزهایی را که بیشتر از همه دوست دارم کنار هم قرار می‌دهد: برنامه‌نویسی، رباتیک، علم، فناوری، خلاقیت و حل مسئله‌های سخت. 03 // CORE SYSTEMS مهارت‌هایی که باید بسازم سیستم‌های اصلی این ماموریت. 💻 برنامه‌نویسی تبدیل ایده‌ها به سیستم‌هایی که واقعاً کار می‌کنند. 🤖 رباتیک ساختن، آزمایش کردن و کنترل ماشین‌ها. 📐 ریاضی زبان پشت مهندسی و محاسبات. ⚛️ فیزیک فهمیدن اینکه دنیا و فضا چطور کار می‌کنند. 🇬🇧 زبان انگلیسی یادگیری و ارتباط در سطح جهانی. 🧠 حل مسئله فکر ک","url":"goal-nasa.html"},{"title":"هدف‌های من","meta":"هدف‌های من | آوا بیات","text":"هدف‌های من | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← هدف‌های من ✈️ مهاجرت یکی از هدف‌های آینده من. 🚀 مهندس ناسا شدن رویای بزرگ من در مهندسی و فضا. 🌟 شناخته شدن ساختن چیزهایی که ارزش دیده شدن داشته باشند. آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"goals.html"},{"title":"مجموعه هری پاتر","meta":"مجموعه هری پاتر | آوا بیات","text":"مجموعه هری پاتر | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← مجموعه هری پاتر ⚡ Harry Potter هفت کتاب مجموعه هری پاتر و سنگ جادو — ۱۹۹۷ هری پاتر و تالار اسرار — ۱۹۹۸ هری پاتر و زندانی آزکابان — ۱۹۹۹ هری پاتر و جام آتش — ۲۰۰۰ هری پاتر و محفل ققنوس — ۲۰۰۳ هری پاتر و شاهزاده دورگه — ۲۰۰۵ هری پاتر و یادگاران مرگ — ۲۰۰۷ 📖 جست‌وجوی نسخه اصلی مشخصات نویسنده: جی. کی. رولینگ کشور: بریتانیا اولین انتشار: ۱۹۹۷ آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"harry-potter-books.html"},{"title":"هری پاتر و سنگ جادو","meta":"هری پاتر و سنگ جادو | آوا بیات","text":"هری پاتر و سنگ جادو | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← هری پاتر و سنگ جادو 🎬 هری پاتر و سنگ جادو معرفی هری می‌فهمد جادوگر است و نخستین سالش را در هاگوارتز آغاز می‌کند. ▶️ جست‌وجوی نسخه اصلی مشخصات عنوان: هری پاتر و سنگ جادو سال ساخت: ۲۰۰۱ کارگردان: کریس کلمبوس کشور: بریتانیا / ایالات متحده نوع: فیلم آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"harry-potter-movie.html"},{"title":"رویای من، بزرگ‌تر از آسمان است. ✨","meta":"آوا بیات | سایت شخصی","text":"آوا بیات | سایت شخصی آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English WELCOME TO AVA'S UNIVERSE ✨ رویای من، بزرگ‌تر از آسمان است. ✨ جایی برای رویاها، یادگیری، علاقه‌ها و مسیر آینده من. درباره آوا پروژه‌ها AVA\'S JOURNEY ✦ ‹ 01 🌍 START از زمین شروع می‌کنم یادگیری، کنجکاوی و ساختن؛ نقطه شروع هر مأموریت بزرگ. 02 🌐 LEARNING زبان و یادگیری هر مهارت تازه، پنجره‌ای جدید به دنیای بزرگ‌تر باز می‌کند. 03 🤖 BUILD برنامه‌نویسی و رباتیک ایده‌ها تبدیل به پروژه، کد و چیزهای واقعی می‌شوند. 04 ✨ DREAM BIG هدف‌های بزرگ‌تر رویاها فقط برای فکر کردن نیستند؛ برای دنبال کردن‌اند. 05 🚀 NEXT STOP NASA رویای من، بزرگ‌تر از آسمان است. ✨ دیدن هدف ناسا › دنیای آوا دنیای من را ببین هر بخش صفحه مخصوص خودش را دارد. 👩🏻‍🚀 درباره آوا من کی هستم و چه چیزهایی دوست دارم. 🎓 دانش‌آموز پایه هفتم و مسیر یادگیری من. 💻 برنامه‌نویسی دوره‌ها، مهارت‌ها و مدارک من. 🤖 رباتیک مقام چهارم رباتیک کشوری. 📚 کتاب‌ها کتاب‌های مورد علاقه‌ام و مشخصات آن‌ها. 🏃🏻‍♀️ ورزش بادی فلکس در . 🇬🇧 زبان انگلیسی Got It 3 و مدارک زبان من.  🎬 فیلم و سریال فیلم‌ها، انیمه‌ها و سریال‌های مورد علاقه‌ام. 🎵 موسیقی آهنگ‌های مورد علاقه من. 🧠 بازی‌های فکری بازی‌های فکری مورد علاقه من. 🎯 هدف‌های من سه","url":"index.html"},{"title":"جعبه خاطرات","meta":"جعبه خاطرات | آوا بیات","text":"جعبه خاطرات | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← جعبه خاطرات 📚 جعبه خاطرات معرفی کتاب داستانی تصویری درباره خاطره‌ها و نگه داشتن یاد کسانی که دوستشان داریم. 📖 جست‌وجوی نسخه اصلی مشخصات عنوان: جعبه خاطرات نویسنده: جوآنا رولاند کشور: ایالات متحده سال انتشار: ۲۰۱۷ آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"memory-box.html"},{"title":"فیلم و سریال","meta":"فیلم و سریال | آوا بیات","text":"فیلم و سریال | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← فیلم و سریال 🎬 ساختمان پزشکان سریال 🎬 پونیو انیمیشن 🎬 علاءالدین فیلم سینمایی ۲۰۱۹ 🎬 هری پاتر و سنگ جادو فیلم 🎬 استرنجر تینگز سریال آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"movies.html"},{"title":"موسیقی","meta":"موسیقی | آوا بیات","text":"موسیقی | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← موسیقی 🎵 خونه ما کوروش · جست‌وجوی نسخه اصلی 🎵 شب زده ابی · جست‌وجوی نسخه اصلی 🎵 ترسیدم ازت ددان · جست‌وجوی نسخه اصلی 🎵 لاله را دیدن شروین · جست‌وجوی نسخه اصلی 🎵 Meet You at Graveyard Cliff · جست‌وجوی نسخه اصلی آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"music.html"},{"title":"پاستور","meta":"پاستور | آوا بیات","text":"پاستور | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← پاستور 🧩 پاستور درباره بازی یکی از بازی‌های فکری مورد علاقه من؛ جزئیات نسخه دقیق بعداً اضافه می‌شود. 🔎 جست‌وجوی نسخه اصلی مشخصات نام: پاستور نوع: بازی فکری آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"pastor.html"},{"title":"پونیو","meta":"پونیو | آوا بیات","text":"پونیو | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← پونیو 🎬 پونیو معرفی داستان ماهی کوچکی به نام پونیو که دوست دارد انسان شود و با پسری به نام سوسکه دوست می‌شود. ▶️ جست‌وجوی نسخه اصلی مشخصات عنوان: پونیو سال ساخت: ۲۰۰۸ کارگردان: هایائو میازاکی کشور: ژاپن نوع: انیمیشن آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"ponyo.html"},{"title":"برنامه‌نویسی","meta":"برنامه‌نویسی | آوا بیات","text":"برنامه‌نویسی | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← برنامه‌نویسی 💻 مسیر برنامه‌نویسی من برنامه‌نویسی یکی از علاقه‌های اصلی من است. چند دوره علوم کامپیوتر را در Code.org گذرانده‌ام و دوست دارم ایده‌ها را به پروژه‌های واقعی تبدیل کنم. 📜 تصاویر مدارک Code.org من در این بخش قرار می‌گیرند. مدارک Course A — Code.org — 2023 Course B — Code.org — 2023 Course C — Code.org — 2023 Course D — Code.org — 2024 آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"programming.html"},{"title":"پروژه‌ها","meta":"پروژه‌ها | آوا بیات","text":"پروژه‌ها | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← پروژه‌ها 💻 برنامه‌نویسی پروژه‌ها و مدارک برنامه‌نویسی من. 🤖 رباتیک دستاورد کشوری من. آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"projects.html"},{"title":"ماجراهای ریگو رزا","meta":"ماجراهای ریگو رزا | آوا بیات","text":"ماجراهای ریگو رزا | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← ماجراهای ریگو رزا 📚 ماجراهای ریگو رزا معرفی کتاب این صفحه برای اضافه کردن مشخصات دقیق همان نسخه‌ای که دوست داری آماده است. 📖 جست‌وجوی نسخه اصلی مشخصات عنوان: ماجراهای ریگو رزا نویسنده: — کشور: — سال انتشار: — آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"rigo-rosa.html"},{"title":"رباتیک","meta":"رباتیک | آوا بیات","text":"رباتیک | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← رباتیک 🏆 مقام چهارم رباتیک کشوری یکی از دستاوردهای مهم من کسب مقام چهارم در مسابقات رباتیک کشوری است. 🤖 مدارک و عکس‌های مسابقه بعداً اینجا اضافه می‌شوند. دستاورد رتبه: چهارم سطح: کشوری آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"robotics.html"},{"title":"⚙️ تنظیمات","meta":"تنظیمات | آوا بیات","text":"تنظیمات | آوا بیات آوا بیات 🇬🇧 English بازگشت ← ⚙️ تنظیمات 🌙 حالت نمایش ظاهر مورد علاقه‌ات را انتخاب کن. ☀️ روشن 🌙 تاریک 🌐 زبان سایت بین نسخه فارسی و انگلیسی جابه‌جا شو. 🇮🇷 فارسی 🇬🇧 English 🔤 اندازه نوشته کوچک متوسط بزرگ 🔔 اعلان‌ها برای قابلیت‌های آینده سایت. 🔔 روشن 🔕 خاموش 💾 ذخیره تنظیمات ذخیره تنظیمات 🧹 بازنشانی تنظیمات تنظیمات نمایش و اندازه نوشته به حالت اولیه برمی‌گردند. بازنشانی تنظیمات آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨","url":"settings.html"},{"title":"Splendor","meta":"Splendor | آوا بیات","text":"Splendor | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← Splendor 💎 Splendor درباره بازی یک بازی استراتژیک درباره جمع‌آوری جواهرات، مدیریت منابع و امتیازگیری. 🔎 جست‌وجوی نسخه اصلی مشخصات نام: Splendor نوع: بازی فکری آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"splendor.html"},{"title":"ورزش","meta":"ورزش | آوا بیات","text":"ورزش | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← ورزش 🏃🏻‍♀️ بادی فلکس من بادی فلکس انجام می‌دهم و در  تمرین می‌کنم. ورزش یکی از بخش‌های مهم فعالیت‌های من است. آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"sports.html"},{"title":"استرنجر تینگز","meta":"استرنجر تینگز | آوا بیات","text":"استرنجر تینگز | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← استرنجر تینگز 🎬 استرنجر تینگز معرفی مجموعه‌ای علمی‌تخیلی و رازآلود درباره گروهی از دوستان و اتفاق‌های عجیب شهر هاوکینز. ▶️ جست‌وجوی نسخه اصلی مشخصات عنوان: استرنجر تینگز سال ساخت: ۲۰۱۶ کارگردان: برادران دافر کشور: ایالات متحده نوع: سریال آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"stranger-things.html"},{"title":"دانش‌آموز","meta":"دانش‌آموز | آوا بیات","text":"دانش‌آموز | آوا بیات آوا بیات ☰ خانه درباره آوا پروژه‌ها ارتباط با من ⚙️ تنظیمات 🇬🇧 English بازگشت ← دانش‌آموز مسیر یادگیری من من دانش‌آموز پایه هفتم هستم. در کنار مدرسه، برنامه‌نویسی و زبان انگلیسی را دنبال می‌کنم و دوست دارم مهارت حل مسئله و خلاقیت را بیشتر کنم. چه چیزهایی یاد می‌گیرم؟ درس‌های مدرسه، زبان انگلیسی، برنامه‌نویسی، پروژه‌ها و مهارت‌هایی که برای آینده‌ام لازم دارم. مشخصات پایه: هفتم علاقه‌ها: برنامه‌نویسی، کتاب، انگلیسی، هنر و ورزش آوا بیات رویای من، بزرگ‌تر از آسمان است. ✨ ©","url":"student.html"}];
  let s={};
  try{s=JSON.parse(localStorage.getItem(key)||"{}")}catch(e){}

  function saveSettings(next){
    s=Object.assign({},s,next);
    localStorage.setItem(key,JSON.stringify(s));
  }
  function applyTheme(theme){
    document.documentElement.classList.toggle("dark",theme==="dark");
    document.body.classList.toggle("dark",theme==="dark");
  }
  function currentTheme(){
    try{return (JSON.parse(localStorage.getItem(key)||"{}").theme)||"light"}catch(e){return "light"}
  }

  applyTheme(s.theme||"light");
  document.documentElement.style.fontSize=s.fontSize==="small"?"14px":s.fontSize==="large"?"18px":"16px";

  const m=document.getElementById("menu"), links=document.getElementById("links");
  if(m&&links)m.onclick=()=>links.classList.toggle("open");
  const y=document.getElementById("year");
  if(y)y.textContent=new Date().getFullYear();

  function normalizeText(t){
    return String(t||"")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u064B-\u065F\u0670]/g,"")
      .replace(/[يى]/g,"ی")
      .replace(/ك/g,"ک")
      .replace(/\s+/g," ")
      .trim();
  }

  function getCurrentFile(){
    const part=location.pathname.split("/").filter(Boolean).pop()||"index.html";
    return part.includes(".")?part:"index.html";
  }

  function ensureQuickActions(){
    const nav=document.querySelector(".nav");
    if(!nav || nav.querySelector(".ava-quick-actions")) return;

    const wrap=document.createElement("div");
    wrap.className="ava-quick-actions";

    const searchBtn=document.createElement("button");
    searchBtn.type="button";
    searchBtn.className="ava-icon-btn ava-search-toggle";
    searchBtn.setAttribute("aria-label",isEN?"Search site":"جست‌وجو در سایت");
    searchBtn.title=isEN?"Search":"جست‌وجو";
    searchBtn.innerHTML="🔍";

    const themeBtn=document.createElement("button");
    themeBtn.type="button";
    themeBtn.className="ava-icon-btn ava-theme-toggle";

    let lang=[...nav.querySelectorAll("a")].find(a=>{
      const t=(a.textContent||"").trim();
      return /English|Persian|فارسی|🇬🇧|🇮🇷/.test(t);
    });
    if(!lang){
      lang=document.createElement("a");
      lang.className="btn";
    }
    lang.classList.add("ava-lang-toggle");
    const file=getCurrentFile();
    lang.href=isEN?"../"+file:"en/"+file;
    lang.textContent=isEN?"🇮🇷 Persian":"🇬🇧 English";

    function refreshThemeButton(){
      const dark=currentTheme()==="dark";
      themeBtn.innerHTML=dark?"☀️":"🌙";
      themeBtn.title=isEN?(dark?"Switch to light":"Switch to dark"):(dark?"حالت روشن":"حالت تاریک");
      themeBtn.setAttribute("aria-label",themeBtn.title);
    }
    refreshThemeButton();

    themeBtn.addEventListener("click",()=>{
      const next=currentTheme()==="dark"?"light":"dark";
      const settingsButton=document.querySelector('[data-theme="'+next+'"]');
      if(settingsButton){
        settingsButton.click();
      }else{
        saveSettings({theme:next});
        applyTheme(next);
      }
      refreshThemeButton();
      document.dispatchEvent(new CustomEvent("avaThemeChanged",{detail:{theme:next}}));
    });

    wrap.append(searchBtn,themeBtn,lang);
    nav.appendChild(wrap);
  }

  function buildSearch(){
    if(document.getElementById("avaSearchOverlay")) return;
    const overlay=document.createElement("div");
    overlay.id="avaSearchOverlay";
    overlay.className="ava-search-overlay";
    overlay.setAttribute("aria-hidden","true");
    overlay.innerHTML=`
      <div class="ava-search-dialog" role="dialog" aria-modal="true" aria-label="${isEN?"Site search":"جست‌وجوی سایت"}">
        <div class="ava-search-top">
          <span class="ava-search-orbit">✦</span>
          <input id="avaSearchInput" type="search" autocomplete="off"
            placeholder="${isEN?"Search Ava's Universe...":"جست‌وجو در دنیای آوا..."}">
          <button type="button" class="ava-search-close" aria-label="${isEN?"Close":"بستن"}">✕</button>
        </div>
        <div class="ava-search-hint">${isEN?"Try: robotics, Harry Potter, NASA, music":"مثلاً: رباتیک، هری پاتر، ناسا، موسیقی"}</div>
        <div id="avaSearchResults" class="ava-search-results"></div>
      </div>`;
    document.body.appendChild(overlay);

    const input=overlay.querySelector("#avaSearchInput");
    const results=overlay.querySelector("#avaSearchResults");
    const close=()=>{overlay.classList.remove("open");overlay.setAttribute("aria-hidden","true");document.body.classList.remove("ava-no-scroll");};
    const open=()=>{
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden","false");
      document.body.classList.add("ava-no-scroll");
      setTimeout(()=>input.focus(),60);
      render("");
    };

    function render(q){
      const nq=normalizeText(q);
      let found;
      if(!nq){
        found=SEARCH_DATA.slice(0,6);
      }else{
        const terms=nq.split(" ").filter(Boolean);
        found=SEARCH_DATA.map(item=>{
          const hay=normalizeText(item.title+" "+item.meta+" "+item.text);
          let score=0;
          for(const t of terms){
            if(normalizeText(item.title).includes(t)) score+=5;
            if(normalizeText(item.meta).includes(t)) score+=3;
            if(hay.includes(t)) score+=1;
          }
          return {item,score};
        }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,10).map(x=>x.item);
      }
      if(!found.length){
        results.innerHTML=`<div class="ava-search-empty">${isEN?"No results found 🚀":"چیزی پیدا نشد 🚀"}</div>`;
        return;
      }
      results.innerHTML=found.map(item=>`
        <a class="ava-search-result" href="${item.url}">
          <span class="ava-result-icon">✦</span>
          <span><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.meta||"")}</small></span>
          <b>${isEN?"Open":"باز کردن"} →</b>
        </a>`).join("");
    }
    function escapeHTML(v){
      return String(v||"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]));
    }

    input.addEventListener("input",e=>render(e.target.value));
    overlay.querySelector(".ava-search-close").addEventListener("click",close);
    overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
    document.addEventListener("keydown",e=>{
      if(e.key==="Escape" && overlay.classList.contains("open")) close();
      if((e.ctrlKey||e.metaKey) && e.key.toLowerCase()==="k"){
        e.preventDefault(); open();
      }
      if(e.key==="/" && !/input|textarea|select/i.test(document.activeElement.tagName)){
        e.preventDefault(); open();
      }
    });
    document.querySelectorAll(".ava-search-toggle").forEach(b=>b.addEventListener("click",open));
    window.avaOpenSearch=open;
  }

  function buildBackToTop(){
    if(document.getElementById("avaBackTop"))return;
    const b=document.createElement("button");
    b.id="avaBackTop";
    b.className="ava-back-top";
    b.type="button";
    b.title=isEN?"Back to top":"بازگشت به بالا";
    b.setAttribute("aria-label",b.title);
    b.innerHTML="↑";
    document.body.appendChild(b);
    const update=()=>b.classList.toggle("show",window.scrollY>55);
    addEventListener("scroll",update,{passive:true});
    update();
    b.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  }

  function addSpaceDecor(){
    if(document.querySelector(".ava-space-decor"))return;
    const d=document.createElement("div");
    d.className="ava-space-decor";
    d.setAttribute("aria-hidden","true");
    d.innerHTML='<i></i><i></i><i></i>';
    document.body.appendChild(d);
  }

  function boot(){
    ensureQuickActions();
    buildSearch();
    buildBackToTop();
    addSpaceDecor();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);
  else boot();
})();


/* =========================================================
   WOW Scroll Experience
   ========================================================= */
(function(){
  const reduceMotion=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function addCursorGlow(){
    if(reduceMotion || matchMedia("(hover:none)").matches || document.querySelector(".ava-cursor-glow")) return;
    const glow=document.createElement("div");
    glow.className="ava-cursor-glow";
    glow.setAttribute("aria-hidden","true");
    document.body.appendChild(glow);
    let x=innerWidth/2,y=innerHeight/2,gx=x,gy=y,raf=0;
    const animate=()=>{
      gx+=(x-gx)*.14; gy+=(y-gy)*.14;
      glow.style.left=gx+"px"; glow.style.top=gy+"px";
      raf=requestAnimationFrame(animate);
    };
    document.addEventListener("mousemove",e=>{
      x=e.clientX;y=e.clientY;document.body.classList.add("ava-mouse-active");
      if(!raf) animate();
    },{passive:true});
    document.addEventListener("mouseleave",()=>document.body.classList.remove("ava-mouse-active"));
  }

  function addProgressRocket(){
    if(document.querySelector(".ava-scroll-progress"))return;
    const el=document.createElement("div");
    el.className="ava-scroll-progress";
    el.setAttribute("aria-hidden","true");
    el.innerHTML='<div class="ava-scroll-progress-fill"></div><div class="ava-scroll-progress-rocket">🚀</div>';
    document.body.appendChild(el);
    const fill=el.querySelector(".ava-scroll-progress-fill");
    const rocket=el.querySelector(".ava-scroll-progress-rocket");
    const update=()=>{
      const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
      const p=Math.max(0,Math.min(1,scrollY/max));
      fill.style.height=(p*100)+"%";
      rocket.style.top=(p*100)+"%";
    };
    update(); addEventListener("scroll",update,{passive:true}); addEventListener("resize",update);
  }

  function addReveal(){
    const els=[...document.querySelectorAll(
      ".section-head,.card,.panel,.setting,.detail,.page-head .container,footer .footer"
    )].filter(el=>!el.closest(".ava-scroll-story"));
    els.forEach(el=>el.classList.add("ava-reveal"));
    if(reduceMotion || !("IntersectionObserver" in window)){
      els.forEach(el=>el.classList.add("ava-visible")); return;
    }
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add("ava-visible");
          io.unobserve(e.target);
        }
      });
    },{threshold:.12,rootMargin:"0px 0px -7% 0px"});
    els.forEach(el=>io.observe(el));
  }

  function addTilt(){
    if(reduceMotion || matchMedia("(hover:none)").matches)return;
    const els=[...document.querySelectorAll(".card,.panel")].filter(el=>!el.closest(".ava-scroll-story"));
    els.forEach(el=>{
      el.classList.add("ava-tilt");
      el.addEventListener("mousemove",e=>{
        const r=el.getBoundingClientRect();
        const px=(e.clientX-r.left)/r.width, py=(e.clientY-r.top)/r.height;
        const ry=(px-.5)*7, rx=(.5-py)*7;
        el.style.setProperty("--mx",(px*100)+"%");
        el.style.setProperty("--my",(py*100)+"%");
        el.style.transform=`perspective(780px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
      });
      el.addEventListener("mouseleave",()=>{
        el.style.transform="";
      });
    });
  }

  function addHeroExit(){
    const hero=document.querySelector(".hero");
    if(!hero || reduceMotion)return;
    hero.classList.add("ava-hero-scroll");
    const update=()=>{
      const r=hero.getBoundingClientRect();
      const total=Math.max(1,hero.offsetHeight);
      const p=Math.max(0,Math.min(1,-r.top/total));
      hero.style.setProperty("--hero-y",(p*-28)+"px");
      hero.style.setProperty("--hero-scale",(1-p*.035).toFixed(3));
      hero.style.setProperty("--hero-opacity",(1-p*.48).toFixed(3));
    };
    update(); addEventListener("scroll",update,{passive:true});
  }

  function addScrollStory(){
    const story=document.querySelector(".ava-scroll-story");
    if(!story)return;
    const sticky=story.querySelector(".ava-story-sticky");
    const title=story.querySelector("#avaStoryTitle");
    const text=story.querySelector("#avaStoryText");
    const steps=[...story.querySelectorAll(".ava-story-steps article")];
    const dots=[...story.querySelectorAll(".ava-story-dots i")];

    let lastIndex=-1, ticking=false;
    function update(){
      ticking=false;
      const rect=story.getBoundingClientRect();
      const scrollable=Math.max(1,story.offsetHeight-innerHeight);
      const p=Math.max(0,Math.min(1,-rect.top/scrollable));
      const idx=Math.min(steps.length-1,Math.floor(p*steps.length));
      if(idx!==lastIndex){
        lastIndex=idx;
        const st=steps[idx];
        if(st){
          title.animate?.([{opacity:.2,transform:"translateY(8px)"},{opacity:1,transform:"none"}],{duration:330,easing:"ease-out"});
          text.animate?.([{opacity:.1},{opacity:1}],{duration:430,easing:"ease-out"});
          title.textContent=st.dataset.title||"";
          text.textContent=st.dataset.text||"";
          dots.forEach((d,i)=>d.classList.toggle("active",i===idx));
        }
      }
      const deep=Math.max(0,(p-.28)/.72);
      sticky.classList.toggle("ava-deep-space",p>.38);
      sticky.style.setProperty("--story-stars",(.08+deep*.88).toFixed(3));
      sticky.style.setProperty("--story-star-y",(-p*130)+"px");
      sticky.style.setProperty("--story-panel",(.76-deep*.14).toFixed(3));
      sticky.style.setProperty("--story-copy-y",((.5-p)*20)+"px");
      sticky.style.setProperty("--story-copy-scale",(1+Math.sin(p*Math.PI)*.018).toFixed(3));
      sticky.style.setProperty("--planet-y",(-p*160)+"px");
      sticky.style.setProperty("--planet-scale",(1-p*.36).toFixed(3));
      sticky.style.setProperty("--orbit-scale",(1+p*.18).toFixed(3));
      sticky.style.setProperty("--orbit-opacity",(.14+p*.30).toFixed(3));

      // Rocket flies diagonally from Earth toward the upper-right.
      const x=14 + p*72;
      const y=74 - p*57;
      const rot=-28 + p*42;
      sticky.style.setProperty("--rocket-x",x+"%");
      sticky.style.setProperty("--rocket-y",y+"%");
      sticky.style.setProperty("--rocket-rot",rot+"deg");
      sticky.style.setProperty("--rocket-scale",(1+p*.22).toFixed(3));
    }
    function requestUpdate(){
      if(!ticking){ticking=true;requestAnimationFrame(update);}
    }
    update();
    addEventListener("scroll",requestUpdate,{passive:true});
    addEventListener("resize",requestUpdate);
  }

  function bootWow(){
    addCursorGlow();
    addProgressRocket();
    addReveal();
    // Tilt disabled: cards stay stable; homepage uses CSS float only.

    addHeroExit();
    addScrollStory();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",bootWow);
  else bootWow();
})();


/* Horizontal WOW Journey controls */
(function(){
  function initHorizontalJourney(){
    const root=document.querySelector(".ava-horizontal-journey");
    if(!root)return;
    const track=root.querySelector(".ava-hj-track");
    const slides=[...root.querySelectorAll(".ava-hj-slide")];
    const dots=[...root.querySelectorAll(".ava-hj-dots i")];
    const prev=root.querySelector(".ava-hj-arrow.prev");
    const next=root.querySelector(".ava-hj-arrow.next");
    if(!track||!slides.length)return;

    let active=0,down=false,startX=0,startScroll=0,moved=false;

    function nearestIndex(){
      const center=track.scrollLeft+track.clientWidth/2;
      let best=0,dist=Infinity;
      slides.forEach((s,i)=>{
        const c=s.offsetLeft+s.offsetWidth/2;
        const d=Math.abs(c-center);
        if(d<dist){dist=d;best=i;}
      });
      return best;
    }
    function update(i=nearestIndex()){
      active=Math.max(0,Math.min(slides.length-1,i));
      slides.forEach((s,j)=>s.classList.toggle("active",j===active));
      dots.forEach((d,j)=>d.classList.toggle("active",j===active));
    }
    function go(i){
      i=Math.max(0,Math.min(slides.length-1,i));
      slides[i].scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"});
      setTimeout(()=>update(i),180);
    }

    prev&&prev.addEventListener("click",()=>go(active-1));
    next&&next.addEventListener("click",()=>go(active+1));

    track.addEventListener("keydown",e=>{
      if(e.key==="ArrowLeft"){e.preventDefault();go(active-1)}
      if(e.key==="ArrowRight"){e.preventDefault();go(active+1)}
    });

    track.addEventListener("pointerdown",e=>{
      if(e.pointerType==="mouse"&&e.button!==0)return;
      down=true;moved=false;startX=e.clientX;startScroll=track.scrollLeft;
      track.classList.add("dragging");
      try{track.setPointerCapture(e.pointerId)}catch(_){}
    });
    track.addEventListener("pointermove",e=>{
      if(!down)return;
      const dx=e.clientX-startX;
      if(Math.abs(dx)>4)moved=true;
      track.scrollLeft=startScroll-dx;
    });
    function finish(e){
      if(!down)return;
      down=false;
      track.classList.remove("dragging");
      try{track.releasePointerCapture(e.pointerId)}catch(_){}
      go(nearestIndex());
    }
    track.addEventListener("pointerup",finish);
    track.addEventListener("pointercancel",finish);
    track.addEventListener("mouseleave",e=>{if(down&&e.pointerType==="mouse")finish(e)});

    track.addEventListener("click",e=>{
      const interactive=e.target.closest("a,button");
      if(interactive && !moved){ return; }
      if(moved){e.preventDefault();e.stopPropagation();moved=false;}
    },true);

    let timer=0;
    track.addEventListener("scroll",()=>{
      clearTimeout(timer);
      timer=setTimeout(()=>update(),80);
    },{passive:true});

    update(0);
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initHorizontalJourney);
  else initHorizontalJourney();
})();


/* STEP 1 — Header active link + compact-on-scroll */
(function(){
  const header=document.querySelector(".header");
  if(header){
    const sync=()=>header.classList.toggle("ava-compact",window.scrollY>24);
    addEventListener("scroll",sync,{passive:true});
    sync();
  }
  const current=(location.pathname.split("/").pop()||"index.html").toLowerCase();
  document.querySelectorAll(".nav-links a").forEach(a=>{
    const href=(a.getAttribute("href")||"").split("#")[0].split("?")[0].split("/").pop().toLowerCase();
    if(href===current)a.classList.add("ava-active");
  });
})();

/* Exact-position navigation restore for Ava site. */
(function(){
  const POS_PREFIX="avaScroll:";
  const RESTORE_KEY="avaRestoreOnce";

  const pageKey=()=>location.pathname+location.search;
  const save=()=>{
    try{ sessionStorage.setItem(POS_PREFIX+pageKey(), String(Math.max(0, Math.round(window.scrollY||0)))); }catch(_){}
  };

  if("scrollRestoration" in history) history.scrollRestoration="manual";

  let scrollTimer=0;
  addEventListener("scroll",()=>{
    clearTimeout(scrollTimer);
    scrollTimer=setTimeout(save,60);
  },{passive:true});
  addEventListener("pagehide",save);
  addEventListener("beforeunload",save);

  // Save the exact position before every same-site navigation.
  document.addEventListener("click",function(e){
    const a=e.target.closest("a[href]");
    if(!a || a.target==="_blank" || a.hasAttribute("download")) return;
    try{
      const u=new URL(a.href,location.href);
      if(u.origin===location.origin) save();
    }catch(_){}
  },true);

  // Back buttons behave like the browser Back button and request exact restoration.
  document.addEventListener("click",function(e){
    const a=e.target.closest("a.smart-back");
    if(!a)return;
    try{
      const ref=document.referrer ? new URL(document.referrer) : null;
      if(ref && ref.origin===location.origin && history.length>1){
        e.preventDefault();
        sessionStorage.setItem(RESTORE_KEY, ref.pathname+ref.search);
        save();
        history.back();
      }
      // If there is no usable same-site history, the link's normal href is the fallback.
    }catch(_){}
  });

  const restoreIfRequested=()=>{
    try{
      const wanted=sessionStorage.getItem(RESTORE_KEY);
      if(wanted!==pageKey()) return;
      const raw=sessionStorage.getItem(POS_PREFIX+pageKey());
      sessionStorage.removeItem(RESTORE_KEY);
      if(raw!==null){
        const y=Math.max(0,Number(raw)||0);
        requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:y,left:0,behavior:"auto"})));
        setTimeout(()=>window.scrollTo(0,y),120);
      }
    }catch(_){}
  };

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",restoreIfRequested,{once:true});
  }else{
    restoreIfRequested();
  }
  addEventListener("pageshow",restoreIfRequested);
})();


/* Rocket drag + remove right-side top button */
(function(){
  const setup = () => {
    const removeBackTop = () => {
      document.getElementById("avaBackTop")?.remove();
      document.querySelectorAll(".ava-back-top").forEach(el=>el.remove());
    };
    removeBackTop();
    if(!document.body.dataset.avaBackTopObserver){
      const observer = new MutationObserver(removeBackTop);
      observer.observe(document.body, {childList:true, subtree:true});
      document.body.dataset.avaBackTopObserver = "1";
    }

    const bar = document.querySelector(".ava-scroll-progress");
    if(!bar || bar.dataset.dragReady==="1") return;
    bar.dataset.dragReady = "1";

    const moveByClientY = (clientY) => {
      const rect = bar.getBoundingClientRect();
      const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
      const ratio = rect.height ? (y / rect.height) : 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo({ top: ratio * maxScroll, behavior: "auto" });
    };

    let dragging = false;

    const startDrag = (clientY) => {
      dragging = true;
      bar.classList.add("dragging");
      moveByClientY(clientY);
    };
    const dragMove = (clientY) => {
      if(!dragging) return;
      moveByClientY(clientY);
    };
    const endDrag = () => {
      dragging = false;
      bar.classList.remove("dragging");
    };

    bar.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      startDrag(e.clientY);
    });
    window.addEventListener("pointermove", (e) => dragMove(e.clientY), {passive:false});
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);

    bar.addEventListener("touchstart", (e) => {
      if(!e.touches.length) return;
      e.preventDefault();
      startDrag(e.touches[0].clientY);
    }, {passive:false});
    window.addEventListener("touchmove", (e) => {
      if(!dragging || !e.touches.length) return;
      e.preventDefault();
      dragMove(e.touches[0].clientY);
    }, {passive:false});
    window.addEventListener("touchend", endDrag);
  };

  const initWhenReady = () => {
    setup();
    setTimeout(setup, 350);
    setTimeout(setup, 1000);
  };

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", initWhenReady, {once:true});
  } else {
    initWhenReady();
  }
  window.addEventListener("pageshow", initWhenReady);
})();


/* Ensure NASA journey CTA always opens the NASA goal page. */
document.addEventListener("click",function(e){
  const a=e.target.closest(".ava-hj-slide.nasa a[href]");
  if(!a)return;
  e.stopPropagation();
  const href=a.getAttribute("href");
  if(href) window.location.href=href;
},false);



/* Instant rocket drag response */
(function(){
  const setupInstantRocket = () => {
    const bar = document.querySelector(".ava-scroll-progress");
    if(!bar || bar.dataset.instantRocket==="1") return;
    bar.dataset.instantRocket="1";

    const go = (clientY) => {
      const rect = bar.getBoundingClientRect();
      const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
      const ratio = rect.height ? y / rect.height : 0;
      const max = Math.max(0, document.documentElement.scrollHeight - innerHeight);
      window.scrollTo(0, ratio * max);
    };

    let active = false;
    bar.addEventListener("pointerdown", e => {
      active = true;
      bar.setPointerCapture?.(e.pointerId);
      e.preventDefault();
      go(e.clientY);
    }, {passive:false});

    bar.addEventListener("pointermove", e => {
      if(!active) return;
      e.preventDefault();
      go(e.clientY);
    }, {passive:false});

    const end = e => {
      active = false;
      try{ bar.releasePointerCapture?.(e.pointerId); }catch(_){}
    };
    bar.addEventListener("pointerup", end);
    bar.addEventListener("pointercancel", end);
  };

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", () => setTimeout(setupInstantRocket,0), {once:true});
  }else{
    setTimeout(setupInstantRocket,0);
  }
  addEventListener("pageshow", () => setTimeout(setupInstantRocket,0));
})();
