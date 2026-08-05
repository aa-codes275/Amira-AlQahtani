/* مكتب أميرة القحطاني للخدمات العامة */
(function () {
  "use strict";

  var WHATSAPP = "966552824188"; // 0552824188

  var SERVICES = [
    { n: "خدمات ناجز", c: "قضائية", i: "⚖️", d: "جميع خدمات منصة ناجز القضائية." },
    { n: "الضمان الاجتماعي", c: "دعم", i: "👨‍👩‍👧", d: "التسجيل والتحديث والاعتراض." },
    { n: "حساب المواطن", c: "دعم", i: "💠", d: "تسجيل جديد وتحديث بيانات ودراسة الأهلية." },
    { n: "ريف", c: "دعم", i: "🌾", d: "التسجيل في برنامج ريف ومتابعة الطلب." },
    { n: "حافز", c: "توظيف", i: "🅷", d: "التسجيل في حافز ومتابعة الاستحقاق." },
    { n: "طاقات", c: "توظيف", i: "👥", d: "تسجيل باحث عن عمل ومنشآت." },
    { n: "التأمينات الاجتماعية", c: "توظيف", i: "🛡️", d: "تسجيل واشتراكات وشهادات." },
    { n: "قوى", c: "توظيف", i: "🏢", d: "خدمات منصة قوى للمنشآت والأفراد." },
    { n: "مدد", c: "توظيف", i: "💳", d: "حماية الأجور ورفع الملفات." },
    { n: "إصدار وتجديد الرخص البلدية", c: "رخص", i: "📄", d: "إصدار وتجديد رخصة نشاطك." },
    { n: "رخص فال", c: "رخص", i: "🔖", d: "إصدار شهادة فال للسلامة." },
    { n: "رخص السلامة", c: "رخص", i: "✅", d: "متطلبات الدفاع المدني كاملة." },
    { n: "الرخص البيئية", c: "رخص", i: "🌿", d: "تراخيص المركز الوطني للبيئة." },
    { n: "الرخص الصناعية", c: "رخص", i: "🏭", d: "إصدار وتجديد الترخيص الصناعي." },
    { n: "السجل التجاري", c: "تجارية", i: "🧾", d: "إصدار وتجديد وتعديل السجل." },
    { n: "معروف", c: "تجارية", i: "🌀", d: "توثيق المتاجر الإلكترونية." },
    { n: "الزكاة والضريبة", c: "تجارية", i: "🌴", d: "التسجيل والإقرارات والشهادات." },
    { n: "التأشيرات", c: "جوازات", i: "🌐", d: "إصدار تأشيرات الزيارة والعمل." },
    { n: "الإقامات", c: "جوازات", i: "🪪", d: "إصدار وتجديد الإقامة." },
    { n: "نقل الكفالة", c: "جوازات", i: "🔁", d: "نقل خدمات العمالة." },
    { n: "العنوان الوطني", c: "حكومية", i: "📍", d: "تسجيل وتحديث العنوان الوطني." },
    { n: "أبشر", c: "حكومية", i: "🔷", d: "جميع خدمات أبشر أفراد وأعمال." },
    { n: "منصة بلدي", c: "رخص", i: "🏛️", d: "طلبات وخدمات منصة بلدي." },
    { n: "إصدار الوكالات", c: "قضائية", i: "📝", d: "وكالات إلكترونية معتمدة." },
    { n: "حصر الورثة", c: "قضائية", i: "👪", d: "إجراءات صك حصر الإرث." },
    { n: "الحضانة", c: "قضائية", i: "🤱", d: "طلبات الحضانة والزيارة." },
    { n: "تنفيذ الأحكام", c: "قضائية", i: "🔨", d: "رفع طلبات التنفيذ ومتابعتها." },
    { n: "وثيقة العمل الحر", c: "توظيف", i: "🗂️", d: "إصدار وثيقة العمل الحر." },
    { n: "التسجيل في الجامعات", c: "تعليمية", i: "🎓", d: "تسجيل القبول والمنح." },
    { n: "قياس", c: "تعليمية", i: "📊", d: "تسجيل الاختبارات ومواعيدها." },
    { n: "نور", c: "تعليمية", i: "🕊️", d: "تسجيل الطلاب ومتابعة النتائج." },
    { n: "الإسكان (سكني)", c: "حكومية", i: "🏠", d: "طلبات الدعم السكني والتمويل." },
    { n: "جميع الخدمات الحكومية والإلكترونية", c: "حكومية", i: "🖥️", d: "أي خدمة أخرى تحتاجها ننجزها لك." }
  ];

  var $ = function (s) { return document.querySelector(s); };
  var grid = $("#servicesGrid");
  var chipsBox = $("#chips");
  var cartList = $("#cartList");
  var cart = [];
  var filter = "الكل";
  var query = "";

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (m) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
    });
  }

  function toast(msg) {
    var t = $("#toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  /* Categories */
  var cats = ["الكل"];
  SERVICES.forEach(function (s) { if (cats.indexOf(s.c) === -1) cats.push(s.c); });
  cats.forEach(function (c) {
    var b = document.createElement("button");
    b.className = "chip" + (c === "الكل" ? " active" : "");
    b.type = "button";
    b.textContent = c;
    b.addEventListener("click", function () {
      filter = c;
      Array.prototype.forEach.call(chipsBox.children, function (x) { x.classList.remove("active"); });
      b.classList.add("active");
      render();
    });
    chipsBox.appendChild(b);
  });

  function render() {
    var list = SERVICES.filter(function (s) {
      var okCat = filter === "الكل" || s.c === filter;
      var okQ = !query || (s.n + " " + s.d + " " + s.c).toLowerCase().indexOf(query) > -1;
      return okCat && okQ;
    });
    grid.innerHTML = list.map(function (s) {
      var added = cart.indexOf(s.n) > -1;
      return '<article class="scard reveal in">' +
        '<div class="top"><div class="ic">' + s.i + "</div><h3>" + esc(s.n) + "</h3></div>" +
        "<p>" + esc(s.d) + "</p>" +
        '<button type="button" class="' + (added ? "added" : "") + '" data-name="' + esc(s.n) + '">' +
        (added ? "✓ تمت الإضافة" : "احجز الخدمة") + "</button></article>";
    }).join("");
    $("#emptyState").hidden = list.length > 0;
  }

  grid.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-name]");
    if (!btn) return;
    var name = btn.getAttribute("data-name");
    if (cart.indexOf(name) === -1) {
      cart.push(name);
      toast("تمت إضافة: " + name);
    } else {
      cart.splice(cart.indexOf(name), 1);
      toast("تم حذف: " + name);
    }
    renderCart();
    render();
  });

  function renderCart() {
    $("#cartCount").textContent = cart.length;
    $("#cartEmpty").hidden = cart.length > 0;
    cartList.innerHTML = cart.map(function (n, idx) {
      return "<li><span>" + esc(n) + '</span><button type="button" aria-label="حذف" data-i="' + idx + '">✕</button></li>';
    }).join("");
  }

  cartList.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-i]");
    if (!b) return;
    cart.splice(Number(b.getAttribute("data-i")), 1);
    renderCart();
    render();
  });

  $("#search").addEventListener("input", function (e) {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  /* Form -> WhatsApp */
  function setErr(id, msg) {
    var el = document.querySelector('.err[data-for="' + id + '"]');
    if (el) el.textContent = msg || "";
  }

  $("#orderForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = $("#name").value.trim();
    var phone = $("#phone").value.trim();
    var city = $("#city").value.trim();
    var details = $("#details").value.trim();
    var ok = true;

    setErr("name"); setErr("phone"); setErr("details");
    if (name.length < 3 || name.length > 60) { setErr("name", "اكتب اسمك بشكل صحيح."); ok = false; }
    if (!/^0?5\d{8}$|^\+?9665\d{8}$/.test(phone.replace(/[\s-]/g, ""))) { setErr("phone", "رقم جوال غير صحيح (مثال: 0512345678)."); ok = false; }
    if (details.length < 5 || details.length > 800) { setErr("details", "اكتب تفاصيل الطلب."); ok = false; }
    if (!ok) return;

    var lines = [
      "*طلب خدمة جديد*",
      "مكتب أميرة القحطاني للخدمات العامة",
      "",
      "الاسم: " + name,
      "الجوال: " + phone
    ];
    if (city) lines.push("المدينة: " + city);
    lines.push("");
    lines.push("الخدمات المطلوبة:");
    if (cart.length) {
      cart.forEach(function (s, i) { lines.push((i + 1) + "- " + s); });
    } else {
      lines.push("- (لم يتم اختيار خدمة من القائمة)");
    }
    lines.push("");
    lines.push("التفاصيل: " + details);

    var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(lines.join("\n"));
    window.open(url, "_blank", "noopener");
    toast("جاري فتح واتساب لإرسال طلبك…");
  });

  /* Nav */
  var burger = $("#burger"), links = $("#navLinks");
  burger.addEventListener("click", function () {
    links.classList.toggle("open");
    burger.classList.toggle("open");
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { links.classList.remove("open"); burger.classList.remove("open"); }
  });

  /* Reveal on scroll */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: .12 });
  document.querySelectorAll(".feat,.card,.ccard,.sec-head").forEach(function (el) {
    el.classList.add("reveal"); io.observe(el);
  });

  $("#year").textContent = new Date().getFullYear();
  render();
  renderCart();
})();
