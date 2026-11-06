
/*
=====================================================
 DAPUR UMI — JAVASCRIPT WEBSITE
 FILE: assets/js/app.js
=====================================================

 PANDUAN EDIT:
 01. Identitas toko
 02. Jadwal PO dan ongkir
 03. Katalog 23 produk
 04. Fungsi umum
 05. Slider kartu menu
 06. Detail produk dan keranjang
 07. Sistem Pre-Order
 08. Checkout dan WhatsApp
 09. Interaksi tombol
 10. Menjalankan website

 CATATAN:
 - Nama dan harga produk masih contoh.
 - Foto menggunakan 1.JPG sampai 23.JPG.
 - Harga ditulis tanpa titik, contoh 15000.
 - Jangan ubah bagian logika jika tidak diperlukan.
=====================================================
*/

"use strict";

// =====================================================
// BAGIAN 01 & 02 — PENGATURAN TOKO, PO, DAN ONGKIR
// =====================================================

const SETTINGS = {

    // BAGIAN 01 — IDENTITAS TOKO
    // Nomor WhatsApp menggunakan format 628xxxxxxxxxx

    whatsapp: "",
    bank: "",
    accountNumber: "",
    accountName: "",

    // BAGIAN 02 — JADWAL PRE-ORDER
    // Batas pemesanan jam 18.00, minimal H-1

    cutoffHour: 18,
    preorderDays: 1,

    // BAGIAN 02 — ZONA PENGANTARAN
    // fee = ongkir
    // min = minimum pembelian

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
// BAGIAN 03 — KATALOG 23 PRODUK DAPUR UMI
// =====================================================
//
// BAGIAN INI BOLEH KAMU EDIT.
//
// name     = Nama makanan
// desc     = Deskripsi makanan
// photo    = Nama foto di GitHub
// category = Jenis/kemasan makanan
// color    = Warna latar belakang foto
// variants = Pilihan kemasan dan harga
//
// Nama produk dan harga berikut masih CONTOH.
// =====================================================

const PRODUCTS = [

    // PRODUK 01 — FOTO 1.JPG
    {
        id: "p01",
        name: "Kue Manis Umi",
        desc: "Camilan manis rumahan untuk teman santai.",
        photo: "1.JPG",
        category: "Kue • PCS / BOX",
        color: "#f5c5d8",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4000
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 22000
            }
        ]
    },

    // PRODUK 02 — FOTO 2.JPG
    {
        id: "p02",
        name: "Camilan Spesial",
        desc: "Pilihan jajanan favorit keluarga.",
        photo: "2.JPG",
        category: "Camilan • PCS / BOX",
        color: "#f6e690",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5000
            },
            {
                id: "box",
                name: "Kotak (isi 5 pcs)",
                price: 23000
            }
        ]
    },

    // PRODUK 03 — FOTO 3.JPG
    {
        id: "p03",
        name: "Kue Lembut",
        desc: "Cocok untuk teman minum teh di rumah.",
        photo: "3.JPG",
        category: "Kue • PCS / BOX",
        color: "#d5e9c8",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4500
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 25000
            }
        ]
    },

    // PRODUK 04 — FOTO 4.JPG
    {
        id: "p04",
        name: "Jajanan Pilihan",
        desc: "Dibuat untuk menemani waktu berkumpul.",
        photo: "4.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#d7e6ff",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 3500
            },
            {
                id: "box",
                name: "Kotak (isi 8 pcs)",
                price: 26000
            }
        ]
    },

    // PRODUK 05 — FOTO 5.JPG
    {
        id: "p05",
        name: "Menu Favorit",
        desc: "Camilan rumahan dengan rasa istimewa.",
        photo: "5.JPG",
        category: "Camilan • PCS / BOX",
        color: "#e4d6fa",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5000
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 28000
            }
        ]
    },

    // PRODUK 06 — FOTO 6.JPG
    {
        id: "p06",
        name: "Kue Harian",
        desc: "Teman yang pas untuk kumpul bersama.",
        photo: "6.JPG",
        category: "Kue • PCS / BOX",
        color: "#f8d9bd",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4000
            },
            {
                id: "box",
                name: "Kotak (isi 10 pcs)",
                price: 38000
            }
        ]
    },

    // PRODUK 07 — FOTO 7.JPG
    {
        id: "p07",
        name: "Camilan Ceria",
        desc: "Sajian lezat untuk berbagai suasana.",
        photo: "7.JPG",
        category: "Camilan • PCS / BOX",
        color: "#d3eadb",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4500
            },
            {
                id: "box",
                name: "Kotak (isi 5 pcs)",
                price: 21000
            }
        ]
    },

    // PRODUK 08 — FOTO 8.JPG
    {
        id: "p08",
        name: "Kreasi Dapur Umi",
        desc: "Salah satu pilihan jajanan rumahan kami.",
        photo: "8.JPG",
        category: "Kue • PCS / BOX",
        color: "#f5d0ca",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5000
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 28000
            }
        ]
    },

    // PRODUK 09 — FOTO 9.JPG
    {
        id: "p09",
        name: "Jajanan Rumahan 09",
        desc: "Pilihan jajanan yang cocok untuk dinikmati bersama.",
        photo: "9.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#f3cadb",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5500
            },
            {
                id: "box",
                name: "Kotak (isi 5 pcs)",
                price: 26500
            }
        ]
    },

    // PRODUK 10 — FOTO 10.JPG
    {
        id: "p10",
        name: "Kreasi Umi 10",
        desc: "Jajanan rumahan untuk melengkapi hari.",
        photo: "10.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#f7e3a4",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 3500
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 20000
            }
        ]
    },

    // PRODUK 11 — FOTO 11.JPG
    {
        id: "p11",
        name: "Camilan Pilihan 11",
        desc: "Pilihan makanan untuk waktu santai.",
        photo: "11.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#cce9d5",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4000
            },
            {
                id: "box",
                name: "Kotak (isi 7 pcs)",
                price: 27000
            }
        ]
    },

    // PRODUK 12 — FOTO 12.JPG
    {
        id: "p12",
        name: "Kue Spesial 12",
        desc: "Cocok untuk teman minum teh bersama.",
        photo: "12.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#d8e1ff",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4500
            },
            {
                id: "box",
                name: "Kotak (isi 5 pcs)",
                price: 21500
            }
        ]
    },

    // PRODUK 13 — FOTO 13.JPG
    {
        id: "p13",
        name: "Menu Manis 13",
        desc: "Sajian rumahan untuk keluarga.",
        photo: "13.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#e8d6f3",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5000
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 29000
            }
        ]
    },

    // PRODUK 14 — FOTO 14.JPG
    {
        id: "p14",
        name: "Jajanan Favorit 14",
        desc: "Camilan pilihan untuk berbagai suasana.",
        photo: "14.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#fad9c2",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5500
            },
            {
                id: "box",
                name: "Kotak (isi 7 pcs)",
                price: 37500
            }
        ]
    },

    // PRODUK 15 — FOTO 15.JPG
    {
        id: "p15",
        name: "Kue Umi 15",
        desc: "Sajian rumahan yang siap dipesan.",
        photo: "15.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#f3cadb",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 3500
            },
            {
                id: "box",
                name: "Kotak (isi 5 pcs)",
                price: 16500
            }
        ]
    },

    // PRODUK 16 — FOTO 16.JPG
    {
        id: "p16",
        name: "Camilan 16",
        desc: "Pilihan jajanan untuk kumpul keluarga.",
        photo: "16.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#f7e3a4",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4000
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 23000
            }
        ]
    },

    // PRODUK 17 — FOTO 17.JPG
    {
        id: "p17",
        name: "Menu Umi 17",
        desc: "Jajanan rumahan pilihan.",
        photo: "17.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#cce9d5",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4500
            },
            {
                id: "box",
                name: "Kotak (isi 7 pcs)",
                price: 30500
            }
        ]
    },

    // PRODUK 18 — FOTO 18.JPG
    {
        id: "p18",
        name: "Kue Pilihan 18",
        desc: "Cocok menemani waktu istirahat.",
        photo: "18.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#d8e1ff",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5000
            },
            {
                id: "box",
                name: "Kotak (isi 5 pcs)",
                price: 24000
            }
        ]
    },

    // PRODUK 19 — FOTO 19.JPG
    {
        id: "p19",
        name: "Camilan 19",
        desc: "Dibuat untuk dinikmati bersama.",
        photo: "19.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#e8d6f3",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5500
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 32000
            }
        ]
    },

    // PRODUK 20 — FOTO 20.JPG
    {
        id: "p20",
        name: "Jajanan 20",
        desc: "Pilihan menu untuk hari spesial.",
        photo: "20.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#fad9c2",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 3500
            },
            {
                id: "box",
                name: "Kotak (isi 7 pcs)",
                price: 23500
            }
        ]
    },

    // PRODUK 21 — FOTO 21.JPG
    {
        id: "p21",
        name: "Kue Rumahan 21",
        desc: "Camilan untuk keluarga di rumah.",
        photo: "21.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#f3cadb",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4000
            },
            {
                id: "box",
                name: "Kotak (isi 5 pcs)",
                price: 19000
            }
        ]
    },

    // PRODUK 22 — FOTO 22.JPG
    {
        id: "p22",
        name: "Menu Spesial 22",
        desc: "Beragam jajanan rumahan pilihan.",
        photo: "22.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#f7e3a4",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 4500
            },
            {
                id: "box",
                name: "Kotak (isi 6 pcs)",
                price: 26000
            }
        ]
    },

    // PRODUK 23 — FOTO 23.JPG
    {
        id: "p23",
        name: "Kreasi Umi 23",
        desc: "Jajanan pilihan dari Dapur Umi.",
        photo: "23.JPG",
        category: "Jajanan • PCS / BOX",
        color: "#cce9d5",
        variants: [
            {
                id: "pcs",
                name: "Satuan (1 pcs)",
                price: 5000
            },
            {
                id: "box",
                name: "Kotak (isi 7 pcs)",
                price: 34000
            }
        ]
    }
];


// =====================================================
// BAGIAN 04 — FUNGSI UMUM
// JANGAN DIUBAH JIKA TIDAK DIPERLUKAN
// =====================================================

const rupiah = n =>
    "Rp" + Number(n).toLocaleString("id-ID");

const $ = id =>
    document.getElementById(id);

const photoURL = p =>
    "assets/images/" + encodeURIComponent(p.photo);


// Menyimpan keranjang di browser pelanggan
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


// Variabel yang digunakan sistem
let activeProduct = null;
let detailQuantity = 1;
let lastFocused = null;
let currentDrawer = null;
let toastTimer;


// Mencegah teks produk dianggap kode HTML
function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#39;"
    })[c]);
}


// Mengambil pilihan kemasan produk
function getVariant(item) {
    return PRODUCTS
        .find(p => p.id === item.id)
        ?.variants.find(v => v.id === item.variant);
}


// Menghitung subtotal semua produk
function subtotal() {
    return cart.reduce(
        (total, item) =>
            total +
            (getVariant(item)?.price || 0) * item.qty,
        0
    );
}


// Menyimpan dan memperbarui jumlah keranjang
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


// Pesan kecil saat pengguna melakukan tindakan
function toast(message) {
    clearTimeout(toastTimer);

    $("toast").textContent = message;
    $("toast").classList.remove("hidden");

    toastTimer = setTimeout(() => {
        $("toast").classList.add("hidden");
    }, 2800);
}


// =====================================================
// BAGIAN 05 — KATALOG / SLIDER PRODUK
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
                        Math.min(
                            ...p.variants.map(v => v.price)
                        )
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
// BAGIAN 06 — DETAIL PRODUK DAN KERANJANG
// =====================================================

// Membuka panel di samping layar
function openDrawer(name) {
    closeDrawer(false);

    lastFocused = document.activeElement;
    currentDrawer = name;

    $("overlay").classList.remove("hidden");
    $(name).classList.remove("hidden");

    document.body.classList.add("locked");

    $(name).querySelector("[data-close]").focus();
}


// Menutup panel
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


// Membuka detail makanan
function openProduct(id) {
    activeProduct = PRODUCTS.find(p => p.id === id);

    if (!activeProduct) return;

    detailQuantity = 1;

    $("detailPhoto").style.background =
        activeProduct.color;

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


// Memperbarui jumlah dan harga detail produk
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


// Memasukkan makanan ke keranjang
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


// Mengubah jumlah makanan di keranjang
function updateCart(id, variant, delta) {
    const item = cart.find(
        x =>
            x.id === id &&
            x.variant === variant
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


// Menghapus makanan dari keranjang
function removeCart(id, variant) {
    cart = cart.filter(
        x => !(x.id === id && x.variant === variant)
    );

    saveCart();
    renderCart();
}


// Menampilkan isi keranjang
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
            const p = PRODUCTS.find(
                x => x.id === item.id
            );

            const v = getVariant(item);

            return `
                <div class="cart-line">

                    <img
                        src="${photoURL(p)}"
                        alt=""
                    >

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
// BAGIAN 07 — SISTEM PRE-ORDER
// =====================================================

// Mengambil tanggal hari ini
function todayLocal() {
    const now = new Date();

    return new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );
}


// Mengubah tanggal ke format YYYY-MM-DD
function dateISO(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");

    return `${y}-${m}-${d}`;
}


// Menghitung tanggal PO yang diperbolehkan
function firstAllowedDate() {
    const date = todayLocal();
    let offset = SETTINGS.preorderDays;

    if (
        new Date().getHours() >= SETTINGS.cutoffHour
    ) {
        offset++;
    }

    date.setDate(date.getDate() + offset);

    return dateISO(date);
}


// Membuka halaman checkout
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


// Pilihan ambil sendiri atau diantar
function method() {
    return document.querySelector(
        'input[name="method"]:checked'
    ).value;
}


// Pilihan tunai atau transfer
function payment() {
    return document.querySelector(
        'input[name="payment"]:checked'
    ).value;
}


// Wilayah pengantaran yang dipilih
function selectedZone() {
    return SETTINGS.zones.find(
        z => z.id === $("zone").value
    );
}


// Menghitung ongkir dan total checkout
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

    $("ckSubtotal").textContent = rupiah(
        subtotal()
    );

    $("ckDelivery").textContent = delivery
        ? (zone ? rupiah(fee) : "Pilih wilayah")
        : "Gratis";

    $("ckTotal").textContent =
        rupiah(subtotal() + fee);

    $("minHelp").textContent =
        delivery &&
        zone &&
        subtotal() < zone.min
            ? `Minimum belanja ${zone.name}: ${rupiah(zone.min)}. Tambahkan ${rupiah(zone.min - subtotal())} lagi atau pilih Ambil Sendiri.`
            : "";
}


// =====================================================
// BAGIAN 08A — VALIDASI CHECKOUT
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
    } else if (
        method() === "delivery" &&
        !zone
    ) {
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
// BAGIAN 08B — MEMBUAT PESAN WHATSAPP
// =====================================================

function buildMessage() {
    const zone = selectedZone();
    const delivery = method() === "delivery";
    const fee = delivery ? zone.fee : 0;

    const items = cart.map((item, i) => {
        const p = PRODUCTS.find(
            x => x.id === item.id
        );

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
WhatsApp: ${$("6287741854691").value.trim()}
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


// Mengirim pesanan ke WhatsApp
function sendWhatsApp() {
    if (!validateCheckout()) return;

    const wa = SETTINGS.whatsapp.replace(
        /\D/g,
        ""
    );

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


// Menyalin rincian pesanan
async function copyOrder() {
    if (!validateCheckout()) return;

    const msg = buildMessage();

    try {
        await navigator.clipboard.writeText(msg);

        toast("Rincian pesanan berhasil disalin");
    } catch (e) {
        const area = document.createElement(
            "textarea"
        );

        area.value = msg;
        area.style.position = "fixed";
        area.style.opacity = "0";

        document.body.append(area);
        area.select();

        const copied =
            document.execCommand("copy");

        area.remove();

        toast(
            copied
                ? "Rincian berhasil disalin"
                : "Salin manual dari halaman"
        );
    }
}


// =====================================================
// BAGIAN 09 — EVENT LISTENER / INTERAKSI TOMBOL
// =====================================================

// Klik kartu produk
$("carousel").addEventListener("click", e => {
    const button = e.target.closest(
        "[data-product]"
    );

    if (button) {
        openProduct(button.dataset.product);
    }
});


// Geser slider ke kiri
$("prev").addEventListener("click", () => {
    $("carousel").scrollBy({
        left: -320,
        behavior: "smooth"
    });
});


// Geser slider ke kanan
$("next").addEventListener("click", () => {
    $("carousel").scrollBy({
        left: 320,
        behavior: "smooth"
    });
});


// Membuka keranjang
$("openCart").addEventListener("click", () => {
    renderCart();
    openDrawer("cartDrawer");
});


// Ganti pilihan kemasan
$("variantSelect").addEventListener(
    "change",
    updateDetail
);


// Kurangi jumlah produk
$("detailMinus").addEventListener("click", () => {
    detailQuantity = Math.max(
        1,
        detailQuantity - 1
    );

    updateDetail();
});


// Tambah jumlah produk
$("detailPlus").addEventListener("click", () => {
    detailQuantity = Math.min(
        99,
        detailQuantity + 1
    );

    updateDetail();
});


// Tambahkan produk ke keranjang
$("addItem").addEventListener(
    "click",
    addItem
);


// Tombol jumlah dan hapus di keranjang
$("cartBody").addEventListener("click", e => {
    const btn = e.target.closest(
        "[data-cart]"
    );

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


// Buka checkout
$("goCheckout").addEventListener(
    "click",
    prepareCheckout
);


// Ubah metode penerimaan dan pembayaran
document.querySelectorAll(
    'input[name="method"],input[name="payment"]'
).forEach(input => {
    input.addEventListener(
        "change",
        updateCheckout
    );
});


// Ubah wilayah pengantaran
$("zone").addEventListener(
    "change",
    updateCheckout
);


// Tombol kirim WhatsApp
$("sendWa").addEventListener(
    "click",
    sendWhatsApp
);


// Tombol salin pesanan
$("copyOrder").addEventListener(
    "click",
    copyOrder
);


// Tombol tutup panel
document.querySelectorAll(
    "[data-close]"
).forEach(btn => {
    btn.addEventListener("click", () => {
        closeDrawer();
    });
});


// Klik area gelap untuk menutup panel
$("overlay").addEventListener("click", () => {
    closeDrawer();
});


// Tombol Escape dan navigasi keyboard
document.addEventListener("keydown", e => {
    if (
        e.key === "Escape" &&
        currentDrawer
    ) {
        closeDrawer();
    }

    if (
        e.key === "Tab" &&
        currentDrawer
    ) {
        const elements = [
            ...$(currentDrawer).querySelectorAll(
                'button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])'
            )
        ].filter(
            el => el.getClientRects().length
        );

        const first = elements[0];
        const last = elements.at(-1);

        if (
            e.shiftKey &&
            document.activeElement === first
        ) {
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
// BAGIAN 10 — MENJALANKAN WEBSITE
// =====================================================

renderProducts();
saveCart();
