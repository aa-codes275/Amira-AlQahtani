/* مكتب أميرة القحطاني للخدمات العامة */
(function () {
  "use strict";

  var WHATSAPP = "966552824188"; // 0552824188

  var ICONS = {"scale": "<path d=\"M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z\"/>", "family": "<circle cx=\"9\" cy=\"7\" r=\"3\"/><circle cx=\"17\" cy=\"9\" r=\"2.5\"/><path d=\"M3 20a6 6 0 0 1 12 0M14 20a4 4 0 0 1 7-2.6\"/>", "wallet": "<rect x=\"3\" y=\"6\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M3 10h18M16 15h2\"/>", "leaf": "<path d=\"M5 19c0-8 6-14 15-14 0 9-6 15-14 15\"/><path d=\"M5 19l8-8\"/>", "briefcase": "<rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"/><path d=\"M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18\"/>", "shield": "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M9 12l2 2 4-4\"/>", "building": "<path d=\"M4 21V5l8-2v18M12 21V9l8 3v9M2 21h20M7 8h2M7 12h2M7 16h2M15 14h2M15 17h2\"/>", "doc": "<path d=\"M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"/><path d=\"M14 3v6h6M8 13h8M8 17h5\"/>", "badge": "<circle cx=\"12\" cy=\"9\" r=\"6\"/><path d=\"M9 14l-2 7 5-3 5 3-2-7M10 9l1.5 1.5L14 8\"/>", "factory": "<path d=\"M3 21V10l6 4v-4l6 4V5h4v16zM7 17h2M12 17h2\"/>", "receipt": "<path d=\"M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6M9 16h3\"/>", "store": "<path d=\"M4 9l2-5h12l2 5M4 9v11h16V9M4 9a2.7 2.7 0 0 0 5 0 2.7 2.7 0 0 0 6 0 2.7 2.7 0 0 0 5 0M10 20v-5h4v5\"/>", "percent": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M15 9l-6 6\"/><circle cx=\"9\" cy=\"9\" r=\"1\"/><circle cx=\"15\" cy=\"15\" r=\"1\"/>", "plane": "<path d=\"M21 15l-8-4V5a1.5 1.5 0 0 0-3 0v6l-8 4v2l8-2v4l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-4l8 2z\"/>", "idcard": "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"/><circle cx=\"9\" cy=\"11\" r=\"2\"/><path d=\"M6 16a3 3 0 0 1 6 0M14 10h4M14 14h3\"/>", "swap": "<path d=\"M4 8h14l-3-3M20 16H6l3 3\"/>", "pin": "<path d=\"M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z\"/><circle cx=\"12\" cy=\"9\" r=\"2.5\"/>", "fingerprint": "<path d=\"M12 11v4M8 7a6 6 0 0 1 10 4.5V13M6 11a6 6 0 0 1 .7-2.8M6 15v-4M9 19c1.5-2 2-4 2-6a1 1 0 0 1 2 0c0 3-.5 5.5-2 8M16 17c-.3 1.4-.8 2.6-1.4 3.6\"/>", "landmark": "<path d=\"M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10M2 10l10-6 10 6z\"/>", "pen": "<path d=\"M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z\"/><path d=\"M14 6l4 4\"/>", "heart": "<path d=\"M12 20s-8-4.5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 9c0 6.5-8 11-8 11z\"/>", "gavel": "<path d=\"M14 4l6 6M11 7l6 6M12.5 5.5l-6 6 3 3 6-6M8 13l-5 5 2 2 5-5M13 21h8\"/>", "cap": "<path d=\"M2 9l10-5 10 5-10 5z\"/><path d=\"M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6\"/>", "chart": "<path d=\"M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6\"/>", "book": "<path d=\"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M8 7h7\"/>", "home": "<path d=\"M3 11l9-8 9 8M5 9.5V21h14V9.5M10 21v-6h4v6\"/>", "monitor": "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\"/><path d=\"M8 20h8M12 16v4\"/>", "globe": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18\"/>", "camera": "<path d=\"M4 8h3l2-3h6l2 3h3v11H4z\"/><circle cx=\"12\" cy=\"13\" r=\"3.5\"/>", "health": "<path d=\"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z\"/><path d=\"M12 9v6M9 12h6\"/>", "broom": "<path d=\"M14 3l-3 8M7 12h8l2 9H5z\"/><path d=\"M9 16v5M13 16v5\"/>", "coins": "<ellipse cx=\"9\" cy=\"7\" rx=\"6\" ry=\"3\"/><path d=\"M3 7v4c0 1.7 2.7 3 6 3s6-1.3 6-3V7M3 11v4c0 1.7 2.7 3 6 3 1 0 2-.1 2.8-.4\"/><circle cx=\"17\" cy=\"16\" r=\"4\"/>", "woman": "<circle cx=\"12\" cy=\"7\" r=\"4\"/><path d=\"M5 21a7 7 0 0 1 14 0\"/>", "car": "<path d=\"M5 16l1.5-5a2 2 0 0 1 2-1.5h7a2 2 0 0 1 2 1.5L19 16M4 16h16v3H4zM7 19v2M17 19v2\"/>", "register": "<path d=\"M9 4h6v3H9z\"/><path d=\"M15 5h3v16H6V5h3M9 12l2 2 4-4M9 17h6\"/>", "zap": "<path d=\"M13 2L4 14h7l-1 8 9-12h-7z\"/>", "target": "<circle cx=\"12\" cy=\"12\" r=\"9\"/><circle cx=\"12\" cy=\"12\" r=\"5\"/><circle cx=\"12\" cy=\"12\" r=\"1\"/>", "lock": "<rect x=\"5\" y=\"11\" width=\"14\" height=\"10\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"/>", "tag": "<path d=\"M3 12V3h9l9 9-9 9z\"/><circle cx=\"8\" cy=\"8\" r=\"1.5\"/>"};
  function icon(k){ return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[k]||ICONS.monitor) + '</svg>'; }
  var SERVICES = [
    { n: "خدمات منصة أبشر", c: "حكومية", i: "fingerprint", d: "تجديد الإقامة والهوية، رخص القيادة، التأشيرات، أفراد العائلة، نقل الملكية وجميع خدمات أبشر أفراد وأعمال." },
    { n: "رخصة موثوق للإعلاميين", c: "رخص", i: "camera", d: "إصدار رخصة موثوق المعتمدة من الهيئة العامة للإعلام المرئي والمسموع بسرعة وسهولة." },
    { n: "تطوير لغتك (دورات اللغة)", c: "تعليمية", i: "globe", d: "دورات اللغة الإنجليزية و STEP و IELTS بإشراف نخبة من المدربين، حضوري وأونلاين." },
    { n: "فتح السجلات وتأسيس الشركات", c: "تجارية", i: "register", d: "فتح السجل التجاري، تأسيس وتعديل الشركات، إضافة وحذف الأنشطة وإصدار التراخيص." },
    { n: "التراخيص البيئية والصناعية", c: "رخص", i: "factory", d: "إصدار وتجديد التراخيص البيئية والصناعية والاستشارات والدراسات البيئية." },
    { n: "قروض بنك التنمية الاجتماعية", c: "تمويل", i: "landmark", d: "التقديم على قرض العمل الحر وقرض الأسرة وقرض التعليم مع إصدار وثيقة العمل الحر." },
    { n: "خدمات القروض والتمويل", c: "تمويل", i: "coins", d: "قروض شخصية وعقارية وسيارات وأصحاب المشاريع والزواج — تمويل يصل إلى 300,000 ريال." },
    { n: "قرض جنى للنساء", c: "تمويل", i: "woman", d: "تمويل مخصص للنساء لتحقيق طموحاتك ودعم مشاريعك." },
    { n: "فيزا الشنغن", c: "جوازات", i: "plane", d: "تعبئة النموذج، حجز موعد مراكز التأشيرات، تجهيز المستندات وحجز السفر والفنادق." },
    { n: "مجلس الضمان الصحي", c: "صحية", i: "health", d: "ربط فوري مع مجلس الضمان الصحي وإصدار التأمين الطبي للمواطنين والمقيمين والزائرين." },
    { n: "وزارة البلدية والإسكان", c: "رخص", i: "building", d: "التقرير الفني الفوري وغير الفوري، شهادة السلامة، عقد النظافة والرخص البلدية." },
    { n: "الضمان الاجتماعي المطور", c: "دعم", i: "family", d: "التسجيل وتحديث البيانات وإضافة التابعين ودراسة الأهلية والاعتراضات." },
    { n: "حساب المواطن", c: "دعم", i: "wallet", d: "تسجيل جديد وتحديث بيانات وإضافة التابعين ومتابعة حالة الطلب والاعتراض." },
    { n: "منصة ريف", c: "دعم", i: "leaf", d: "التسجيل في ريف وتحديث البيانات ودراسة الأهلية والاعتراضات." },
    { n: "خدمات المنشآت والشركات", c: "تجارية", i: "briefcase", d: "خدمات الأعمال والشركات ومتابعة الإجراءات وتوضيح المتطلبات." },
    { n: "خدمات ناجز", c: "قضائية", i: "scale", d: "جميع خدمات منصة ناجز القضائية." },
    { n: "حافز", c: "توظيف", i: "target", d: "التسجيل في حافز ومتابعة الاستحقاق." },
    { n: "طاقات", c: "توظيف", i: "family", d: "تسجيل باحث عن عمل ومنشآت." },
    { n: "التأمينات الاجتماعية", c: "توظيف", i: "shield", d: "تسجيل واشتراكات وشهادات." },
    { n: "قوى", c: "توظيف", i: "building", d: "خدمات منصة قوى للمنشآت والأفراد." },
    { n: "مدد", c: "توظيف", i: "wallet", d: "حماية الأجور ورفع الملفات." },
    { n: "رخص فال", c: "رخص", i: "badge", d: "إصدار رخصة فال العقارية." },
    { n: "رخص السلامة", c: "رخص", i: "shield", d: "متطلبات الدفاع المدني كاملة." },
    { n: "معروف", c: "تجارية", i: "store", d: "توثيق المتاجر الإلكترونية." },
    { n: "الزكاة والضريبة", c: "تجارية", i: "percent", d: "التسجيل والإقرارات والشهادات." },
    { n: "الإقامات ونقل الكفالة", c: "جوازات", i: "idcard", d: "إصدار وتجديد الإقامة ونقل خدمات العمالة." },
    { n: "العنوان الوطني", c: "حكومية", i: "pin", d: "تسجيل وتحديث العنوان الوطني." },
    { n: "منصة بلدي", c: "رخص", i: "doc", d: "طلبات وخدمات منصة بلدي." },
    { n: "إصدار الوكالات", c: "قضائية", i: "pen", d: "وكالات إلكترونية معتمدة." },
    { n: "حصر الورثة", c: "قضائية", i: "receipt", d: "إجراءات صك حصر الإرث." },
    { n: "الحضانة", c: "قضائية", i: "heart", d: "طلبات الحضانة والزيارة." },
    { n: "تنفيذ الأحكام", c: "قضائية", i: "gavel", d: "رفع طلبات التنفيذ ومتابعتها." },
    { n: "وثيقة العمل الحر", c: "توظيف", i: "idcard", d: "إصدار وثيقة العمل الحر." },
    { n: "التسجيل في الجامعات", c: "تعليمية", i: "cap", d: "تسجيل القبول والمنح." },
    { n: "قياس", c: "تعليمية", i: "chart", d: "تسجيل الاختبارات ومواعيدها." },
    { n: "نور", c: "تعليمية", i: "book", d: "تسجيل الطلاب ومتابعة النتائج." },
    { n: "الإسكان (سكني)", c: "حكومية", i: "home", d: "طلبات الدعم السكني والتمويل." },
    { n: "جميع الخدمات الحكومية والإلكترونية", c: "حكومية", i: "monitor", d: "أي خدمة أخرى تحتاجها ننجزها لك." }
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
        '<div class="top"><div class="ic">' + icon(s.i) + "</div><h3>" + esc(s.n) + "</h3></div>" +
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
