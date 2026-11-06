
"use strict";

// =====================================================
// DAPUR UMI - PENGATURAN TOKO
// =====================================================

const SETTINGS = {
    whatsapp: "",
    bank: "",
    accountNumber: "",
    accountName: "",
    cutoffHour: 18,
    preorderDays: 1,
    zones: [
        {
            id: "dekat",
            name: "Zona Dekat (contoh)",
            fee: 5000,
            min: 15000
        },
        {
            id: "sedang",
            name: "Zona Sedang (contoh)",
            fee: 8000,
            min: 30000
        },
        {
            id: "jauh",
            name: "Zona Jauh (contoh)",
            fee: 12000,
            min: 50000
        }
    ]
};

// =====================================================
// DATA PRODUK - 23 FOTO ASLI DAPUR UMI
// Nama, harga dan kemasan masih contoh.
// =====================================================

const PRODUCTS = [
    { id: "p01", name: "Kue Manis Umi", desc: "Camilan manis rumahan untuk teman santai.", photo: "1.JPG", category: "Kue • PCS / BOX", color: "#f5c5d8", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 22000 }] },
    { id: "p02", name: "Camilan Spesial", desc: "Pilihan jajanan favorit keluarga.", photo: "2.JPG", category: "Camilan • PCS / BOX", color: "#f6e690", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 23000 }] },
    { id: "p03", name: "Kue Lembut", desc: "Cocok untuk teman minum teh di rumah.", photo: "3.JPG", category: "Kue • PCS / BOX", color: "#d5e9c8", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4500 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 25000 }] },
    { id: "p04", name: "Jajanan Pilihan", desc: "Dibuat untuk menemani waktu berkumpul.", photo: "4.JPG", category: "Jajanan • PCS / BOX", color: "#d7e6ff", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 3500 }, { id: "box", name: "Kotak (isi 8 pcs)", price: 26000 }] },
    { id: "p05", name: "Menu Favorit", desc: "Camilan rumahan dengan rasa istimewa.", photo: "5.JPG", category: "Camilan • PCS / BOX", color: "#e4d6fa", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 28000 }] },
    { id: "p06", name: "Kue Harian", desc: "Teman yang pas untuk kumpul bersama.", photo: "6.JPG", category: "Kue • PCS / BOX", color: "#f8d9bd", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 10 pcs)", price: 38000 }] },
    { id: "p07", name: "Camilan Ceria", desc: "Sajian lezat untuk berbagai suasana.", photo: "7.JPG", category: "Camilan • PCS / BOX", color: "#d3eadb", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4500 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 21000 }] },
    { id: "p08", name: "Kreasi Dapur Umi", desc: "Salah satu pilihan jajanan rumahan kami.", photo: "8.JPG", category: "Kue • PCS / BOX", color: "#f5d0ca", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 28000 }] },
    { id: "p09", name: "Jajanan Rumahan 09", desc: "Pilihan jajanan yang cocok untuk dinikmati bersama.", photo: "9.JPG", category: "Jajanan • PCS / BOX", color: "#f3cadb", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5500 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 26500 }] },
    { id: "p10", name: "Kreasi Umi 10", desc: "Jajanan rumahan untuk melengkapi hari.", photo: "10.JPG", category: "Jajanan • PCS / BOX", color: "#f7e3a4", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 3500 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 20000 }] },
    { id: "p11", name: "Camilan Pilihan 11", desc: "Pilihan makanan untuk waktu santai.", photo: "11.JPG", category: "Jajanan • PCS / BOX", color: "#cce9d5", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 7 pcs)", price: 27000 }] },
    { id: "p12", name: "Kue Spesial 12", desc: "Cocok untuk teman minum teh bersama.", photo: "12.JPG", category: "Jajanan • PCS / BOX", color: "#d8e1ff", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4500 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 21500 }] },
    { id: "p13", name: "Menu Manis 13", desc: "Sajian rumahan untuk keluarga.", photo: "13.JPG", category: "Jajanan • PCS / BOX", color: "#e8d6f3", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 29000 }] },
    { id: "p14", name: "Jajanan Favorit 14", desc: "Camilan pilihan untuk berbagai suasana.", photo: "14.JPG", category: "Jajanan • PCS / BOX", color: "#fad9c2", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5500 }, { id: "box", name: "Kotak (isi 7 pcs)", price: 37500 }] },
    { id: "p15", name: "Kue Umi 15", desc: "Sajian rumahan yang siap dipesan.", photo: "15.JPG", category: "Jajanan • PCS / BOX", color: "#f3cadb", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 3500 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 16500 }] },
    { id: "p16", name: "Camilan 16", desc: "Pilihan jajanan untuk kumpul keluarga.", photo: "16.JPG", category: "Jajanan • PCS / BOX", color: "#f7e3a4", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 23000 }] },
    { id: "p17", name: "Menu Umi 17", desc: "Jajanan rumahan pilihan.", photo: "17.JPG", category: "Jajanan • PCS / BOX", color: "#cce9d5", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4500 }, { id: "box", name: "Kotak (isi 7 pcs)", price: 30500 }] },
    { id: "p18", name: "Kue Pilihan 18", desc: "Cocok menemani waktu istirahat.", photo: "18.JPG", category: "Jajanan • PCS / BOX", color: "#d8e1ff", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 24000 }] },
    { id: "p19", name: "Camilan 19", desc: "Dibuat untuk dinikmati bersama.", photo: "19.JPG", category: "Jajanan • PCS / BOX", color: "#e8d6f3", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5500 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 32000 }] },
    { id: "p20", name: "Jajanan 20", desc: "Pilihan menu untuk hari spesial.", photo: "20.JPG", category: "Jajanan • PCS / BOX", color: "#fad9c2", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 3500 }, { id: "box", name: "Kotak (isi 7 pcs)", price: 23500 }] },
    { id: "p21", name: "Kue Rumahan 21", desc: "Camilan untuk keluarga di rumah.", photo: "21.JPG", category: "Jajanan • PCS / BOX", color: "#f3cadb", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 19000 }] },
    { id: "p22", name: "Menu Spesial 22", desc: "Beragam jajanan rumahan pilihan.", photo: "22.JPG", category: "Jajanan • PCS / BOX", color: "#f7e3a4", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4500 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 26000 }] },
    { id: "p23", name: "Kreasi Umi 23", desc: "Jajanan pilihan dari Dapur Umi.", photo: "23.JPG", category: "Jajanan • PCS / BOX", color: "#cce9d5", variants: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 7 pcs)", price: 34000 }] }
];

// =====================================================
// FUNGSI UMUM
// =====================================================

const rupiah = n => "Rp" + Number(n).toLocaleString("id-ID");

const $ = id => document.getElementById(id);

const photoURL = p =>
    "assets/images/" + encodeURIComponent(p.photo);

let cart = [];

try {
    const stored = JSON.parse(
        localStorage.getItem("dapurUmiCart") || "[]"
    );

    if (Array.isArray(stored)) {
        cart = stored.filter(item =>
            PRODUCTS.some(p =>
                p.id === item.id &&
                p.variants.some(v => v.id === item.variant)
            ) &&
            Number.isSafeInteger(item.qty) &&
            item.qty > 0 &&
            item.qty <= 99
        );
    }
} catch (e) {
    cart = [];
}

let activeProduct = null;
let detailQuantity = 1;
let lastFocused = null;
let currentDrawer = null;
let toastTimer;

function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    })[c]);
}

function getVariant(item) {
    return PRODUCTS
        .find(p => p.id === item.id)
        ?.variants.find(v => v.id === item.variant);
}

function subtotal() {
    return cart.reduce(
        (total, item) =>
            total + (getVariant(item)?.price || 0) * item.qty,
        0
    );
}

function saveCart() {
    localStorage.setItem(
        "dapurUmiCart",
        JSON.stringify(cart)
    );

    $("cartCount").textContent = cart.reduce(
        (s, i) => s + i.qty,
        0
    );
}

function toast(message) {
    clearTimeout(toastTimer);

    $("toast").textContent = message;
    $("toast").classList.remove("hidden");

    toastTimer = setTimeout(() => {
        $("toast").classList.add("hidden");
    }, 2800);
}

// =====================================================
// KATALOG PRODUK - SLIDER INTERAKTIF
// =====================================================

function renderProducts() {
    const container = $("carousel");

    container.innerHTML = PRODUCTS.map(p => `
        <article class="product-card">
            <div class="card-content">
                <div class="card-head">
                    <span class="pill">
                        ${escapeHTML(p.category)}
                    </span>

                    <button
                        class="card-arrow"
                        data-product="${p.id}"
                        aria-label="Lihat pilihan ${escapeHTML(p.name)}"
                    >
                        ↗
                    </button>
                </div>

                <h3>${escapeHTML(p.name)}</h3>

                <p>${escapeHTML(p.desc)}</p>

                <div class="card-price">
                    Mulai ${rupiah(
                        Math.min(...p.variants.map(v => v.price))
                    )}
                </div>
            </div>

            <button
                data-product="${p.id}"
                style="all:unset;cursor:pointer;display:block"
                aria-label="Pilih ${escapeHTML(p.name)}"
            >
                <div
                    class="card-photo"
                    style="background:${p.color}"
                >
                    <img
                        src="${photoURL(p)}"
                        alt="Foto ${escapeHTML(p.name)}"
                        loading="lazy"
                        onerror="this.style.display='none';this.parentElement.insertAdjacentText('afterbegin','Foto belum tersedia')"
                    >
                </div>
            </button>
        </article>
    `).join("");
}

// =====================================================
// PANEL DETAIL, KERANJANG DAN CHECKOUT
// =====================================================

function openDrawer(name) {
    closeDrawer(false);

    lastFocused = document.activeElement;
    currentDrawer = name;

    $("overlay").classList.remove("hidden");
    $(name).classList.remove("hidden");

    document.body.classList.add("locked");

    $(name).querySelector("[data-close]").focus();
}

function closeDrawer(restore = true) {
    [
        "detailDrawer",
        "cartDrawer",
        "checkoutDrawer",
        "overlay"
    ].forEach(id => $(id).classList.add("hidden"));

    document.body.classList.remove("locked");
    currentDrawer = null;

    if (restore && lastFocused?.isConnected) {
        lastFocused.focus();
    }
}

function openProduct(id) {
    activeProduct = PRODUCTS.find(p => p.id === id);

    if (!activeProduct) return;

    detailQuantity = 1;

    $("detailPhoto").style.background = activeProduct.color;

    $("detailPhoto").innerHTML = `
        <img
            src="${photoURL(activeProduct)}"
            alt="${escapeHTML(activeProduct.name)}"
        >
    `;

    $("detailTitle").textContent = activeProduct.name;
    $("detailDesc").textContent = activeProduct.desc;

    $("variantSelect").innerHTML =
        activeProduct.variants.map(v => `
            <option value="${v.id}">
                ${escapeHTML(v.name)} — ${rupiah(v.price)}
            </option>
        `).join("");

    updateDetail();
    openDrawer("detailDrawer");
}

function updateDetail() {
    if (!activeProduct) return;

    const v = activeProduct.variants.find(
        x => x.id === $("variantSelect").value
    ) || activeProduct.variants[0];

    $("detailQty").textContent = detailQuantity;

    $("unitInfo").textContent =
        `${rupiah(v.price)} untuk ${v.name.toLowerCase()}`;

    $("detailTotal").textContent =
        rupiah(v.price * detailQuantity);
}

function addItem() {
    if (!activeProduct) return;

    const variant = $("variantSelect").value;

    const found = cart.find(
        x =>
            x.id === activeProduct.id &&
            x.variant === variant
    );

    if (found) {
        found.qty = Math.min(
            99,
            found.qty + detailQuantity
        );
    } else {
        cart.push({
            id: activeProduct.id,
            variant,
            qty: detailQuantity
        });
    }

    saveCart();
    closeDrawer();
    toast("Berhasil masuk keranjang 🛒");
}

function updateCart(id, variant, delta) {
    const item = cart.find(
        x => x.id === id && x.variant === variant
    );

    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        cart = cart.filter(x => x !== item);
    } else {
        item.qty = Math.min(99, item.qty);
    }

    saveCart();
    renderCart();
}

function removeCart(id, variant) {
    cart = cart.filter(
        x => !(x.id === id && x.variant === variant)
    );

    saveCart();
    renderCart();
}

function renderCart() {
    const body = $("cartBody");

    if (!cart.length) {
        body.innerHTML = `
            <div class="empty">
                <span>🛒</span>
                Keranjang masih kosong.<br>
                Yuk pilih makanan dulu!
            </div>
        `;
    } else {
        body.innerHTML = cart.map(item => {
            const p = PRODUCTS.find(x => x.id === item.id);
            const v = getVariant(item);

            return `
                <div class="cart-line">
                    <img src="${photoURL(p)}" alt="">

                    <div>
                        <h3>${escapeHTML(p.name)}</h3>
                        <p>${escapeHTML(v.name)}</p>

                        <span class="price">
                            ${rupiah(v.price * item.qty)}
                        </span>

                        <div class="cart-actions">
                            <button
                                class="mini-btn"
                                data-cart="minus"
                                data-id="${p.id}"
                                data-variant="${v.id}"
                                aria-label="Kurangi ${escapeHTML(p.name)}"
                            >−</button>

                            <strong>${item.qty}</strong>

                            <button
                                class="mini-btn"
                                data-cart="plus"
                                data-id="${p.id}"
                                data-variant="${v.id}"
                                aria-label="Tambah ${escapeHTML(p.name)}"
                            >+</button>

                            <button
                                class="remove"
                                data-cart="remove"
                                data-id="${p.id}"
                                data-variant="${v.id}"
                            >Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        }).join("");
    }

    $("cartSubtotal").textContent = rupiah(subtotal());
    $("goCheckout").disabled = !cart.length;
}

// =====================================================
// SISTEM PRE-ORDER
// =====================================================

function todayLocal() {
    const now = new Date();

    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );
}

function dateISO(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${d}`;
}

function firstAllowedDate() {
    const date = todayLocal();
    let offset = SETTINGS.preorderDays;

    if (new Date().getHours() >= SETTINGS.cutoffHour) {
        offset++;
    }

    date.setDate(date.getDate() + offset);

    return dateISO(date);
}

function prepareCheckout() {
    if (!cart.length) return;

    $("orderDate").min = firstAllowedDate();

    if (
        !$("orderDate").value ||
        $("orderDate").value < $("orderDate").min
    ) {
        $("orderDate").value = $("orderDate").min;
    }

    $("zone").innerHTML =
        '<option value="">Pilih wilayah</option>' +
        SETTINGS.zones.map(z => `
            <option value="${z.id}">
                ${escapeHTML(z.name)} —
                Ongkir ${rupiah(z.fee)}
            </option>
        `).join("");

    $("bankText").textContent =
        SETTINGS.accountNumber
            ? `${SETTINGS.bank} — ${SETTINGS.accountNumber} a.n. ${SETTINGS.accountName}`
            : "Nomor rekening penjual belum diisi. Konfirmasi melalui WhatsApp sebelum transfer.";

    $("formError").textContent = "";

    updateCheckout();
    openDrawer("checkoutDrawer");
}

function method() {
    return document.querySelector(
        'input[name="method"]:checked'
    ).value;
}

function payment() {
    return document.querySelector(
        'input[name="payment"]:checked'
    ).value;
}

function selectedZone() {
    return SETTINGS.zones.find(
        z => z.id === $("zone").value
    );
}

function updateCheckout() {
    const delivery = method() === "delivery";
    const zone = selectedZone();

    const fee =
        delivery && zone ? zone.fee : 0;

    $("deliveryFields").classList.toggle(
        "hidden",
        !delivery
    );

    $("bankInfo").classList.toggle(
        "hidden",
        payment() !== "Transfer Bank"
    );

    $("ckSubtotal").textContent = rupiah(subtotal());

    $("ckDelivery").textContent = delivery
        ? (zone ? rupiah(fee) : "Pilih wilayah")
        : "Gratis";

    $("ckTotal").textContent =
        rupiah(subtotal() + fee);

    $("minHelp").textContent =
        delivery && zone && subtotal() < zone.min
            ? `Minimum belanja ${zone.name}: ${rupiah(zone.min)}. Tambahkan ${rupiah(zone.min - subtotal())} lagi atau pilih Ambil Sendiri.`
            : "";
}

// =====================================================
// VALIDASI PESANAN
// =====================================================

function validateCheckout() {
    const name = $("custName").value.trim();
    const phone = $("custPhone").value.trim();
    const date = $("orderDate").value;
    const zone = selectedZone();

    let error = "";

    if (!cart.length) {
        error = "Keranjang masih kosong.";
    } else if (!name) {
        error = "Mohon isi nama pemesan.";
    } else if (!/^\+?[\d\s()-]{9,18}$/.test(phone)) {
        error = "Mohon isi nomor WhatsApp yang benar.";
    } else if (!date || date < firstAllowedDate()) {
        error =
            `Tanggal PO paling cepat ${firstAllowedDate()} (sesuai batas waktu pemesanan).`;
    } else if (method() === "delivery" && !zone) {
        error = "Pilih wilayah pengantaran dulu, ya.";
    } else if (
        method() === "delivery" &&
        !$("address").value.trim()
    ) {
        error = "Isi alamat lengkap untuk pengantaran.";
    } else if (
        method() === "delivery" &&
        subtotal() < zone.min
    ) {
        error =
            `Belanja belum mencapai minimum ${rupiah(zone.min)} untuk ${zone.name}.`;
    }

    $("formError").textContent = error;

    return !error;
}

// =====================================================
// MEMBUAT PESAN WHATSAPP
// =====================================================

function buildMessage() {
    const zone = selectedZone();
    const delivery = method() === "delivery";
    const fee = delivery ? zone.fee : 0;

    const items = cart.map((item, i) => {
        const p = PRODUCTS.find(x => x.id === item.id);
        const v = getVariant(item);

        return `${i + 1}. ${p.name} — ${v.name}\n   ${item.qty} × ${rupiah(v.price)} = ${rupiah(v.price * item.qty)}`;
    }).join("\n");

    const date = $("orderDate")
        .value
        .split("-")
        .reverse()
        .join("-");

    return `Halo Dapur Umi, saya mau PRE-ORDER ya 😊

Nama: ${$("custName").value.trim()}
WhatsApp: ${$("custPhone").value.trim()}
Tanggal diterima: ${date}
Waktu: ${$("slot").value}
Metode: ${delivery ? "Diantar ke Rumah" : "Ambil Sendiri"}${delivery ? `\nWilayah: ${zone.name}\nAlamat: ${$("address").value.trim()}` : ""}
Pembayaran: ${payment()}

DAFTAR PESANAN
${items}

Subtotal: ${rupiah(subtotal())}
Ongkir: ${rupiah(fee)}
TOTAL: ${rupiah(subtotal() + fee)}

Catatan: ${$("notes").value.trim() || "Tidak ada"}

Mohon konfirmasi ketersediaan, jadwal, dan pembayaran. Terima kasih!`;
}

function sendWhatsApp() {
    if (!validateCheckout()) return;

    const wa = SETTINGS.whatsapp.replace(/\D/g, "");

    if (!/^62\d{8,13}$/.test(wa)) {
        toast(
            "Nomor WA toko belum diatur. Gunakan Salin Rincian Pesanan dahulu."
        );
        return;
    }

    window.open(
        `https://wa.me/${wa}?text=${encodeURIComponent(buildMessage())}`,
        "_blank",
        "noopener,noreferrer"
    );
}

async function copyOrder() {
    if (!validateCheckout()) return;

    const msg = buildMessage();

    try {
        await navigator.clipboard.writeText(msg);

        toast("Rincian pesanan berhasil disalin");
    } catch (e) {
        const area = document.createElement("textarea");

        area.value = msg;
        area.style.position = "fixed";
        area.style.opacity = "0";

        document.body.append(area);
        area.select();

        const copied = document.execCommand("copy");

        area.remove();

        toast(
            copied
                ? "Rincian berhasil disalin"
                : "Salin manual dari halaman"
        );
    }
}

// =====================================================
// EVENT LISTENER - INTERAKSI PENGGUNA
// =====================================================

$("carousel").addEventListener("click", e => {
    const button = e.target.closest("[data-product]");

    if (button) {
        openProduct(button.dataset.product);
    }
});

$("prev").addEventListener("click", () => {
    $("carousel").scrollBy({
        left: -320,
        behavior: "smooth"
    });
});

$("next").addEventListener("click", () => {
    $("carousel").scrollBy({
        left: 320,
        behavior: "smooth"
    });
});

$("openCart").addEventListener("click", () => {
    renderCart();
    openDrawer("cartDrawer");
});

$("variantSelect").addEventListener(
    "change",
    updateDetail
);

$("detailMinus").addEventListener("click", () => {
    detailQuantity = Math.max(
        1,
        detailQuantity - 1
    );

    updateDetail();
});

$("detailPlus").addEventListener("click", () => {
    detailQuantity = Math.min(
        99,
        detailQuantity + 1
    );

    updateDetail();
});

$("addItem").addEventListener(
    "click",
    addItem
);

$("cartBody").addEventListener("click", e => {
    const btn = e.target.closest("[data-cart]");

    if (!btn) return;

    const {
        cart: action,
        id,
        variant
    } = btn.dataset;

    if (action === "remove") {
        removeCart(id, variant);
    } else {
        updateCart(
            id,
            variant,
            action === "plus" ? 1 : -1
        );
    }
});

$("goCheckout").addEventListener(
    "click",
    prepareCheckout
);

document.querySelectorAll(
    'input[name="method"],input[name="payment"]'
).forEach(input => {
    input.addEventListener(
        "change",
        updateCheckout
    );
});

$("zone").addEventListener(
    "change",
    updateCheckout
);

$("sendWa").addEventListener(
    "click",
    sendWhatsApp
);

$("copyOrder").addEventListener(
    "click",
    copyOrder
);

document.querySelectorAll(
    "[data-close]"
).forEach(btn => {
    btn.addEventListener("click", () => {
        closeDrawer();
    });
});

$("overlay").addEventListener("click", () => {
    closeDrawer();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape" && currentDrawer) {
        closeDrawer();
    }

    if (e.key === "Tab" && currentDrawer) {
        const elements = [
            ...$(currentDrawer).querySelectorAll(
                'button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])'
            )
        ].filter(el => el.getClientRects().length);

        const first = elements[0];
        const last = elements.at(-1);

        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (
            !e.shiftKey &&
            document.activeElement === last
        ) {
            e.preventDefault();
            first.focus();
        }
    }
});

// =====================================================
// INISIALISASI WEBSITE
// =====================================================

renderProducts();
saveCart();
