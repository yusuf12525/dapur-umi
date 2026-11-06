"gunakan secara ketat";
// ===== PENGATURAN PEMILIK TOKO (GANTI DATA CONTOH SEBELUM MENERIMA PESANAN) =====
const PENGATURAN = {
    whatsapp: "", // Nomor WA penjual format 628xxxxxxxxxx. Kosong = fitur kirim WA tidak diaktifkan.
    bank: "", // Contoh: BCA
    AccountNumber: "", // Nomor rekening asli penjual
    AccountName: "", // Nama pemilik rekening
    Batas waktu: 18,
    Hari pemesanan awal: 1,
    zona: [
        { id: "dekat", nama: "Zona Dekat (contoh)", biaya: 5000, min: 15000 },
        { id: "sedang", nama: "Zona Sedang (contoh)", biaya: 8000, min: 30000 },
        { id: "jauh", nama: "Zona Jauh (contoh)", biaya: 12000, min: 50000 }
    ]
};
// KONTOH DATA: 23 foto (1.JPG–23.JPG). Sesuaikan nama, harga, kemasan, dan identitas produk sebelum menerima pesanan.
konstanta PRODUK = [
    { id: "p01", name: "Kue Manis Umi", desc: "Camilan manis rumahan untuk teman santai.", foto: "1.JPG", kategori: "Kue • PCS / BOX", warna: "#f5c5d8", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 22000 }] },
    { id: "p02", nama: "Camilan Spesial", desc: "Pilihan jajanan favorit keluarga.", foto: "2.JPG", kategori: "Camilan • PCS / BOX", warna: "#f6e690", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 5000 }, { id: "box", nama: "Kotak (isi 5 pcs)", harga: 23000 }] },
    { id: "p03", name: "Kue Lembut", desc: "Cocok untuk teman minum teh di rumah.", foto: "3.JPG", kategori: "Kue • PCS / BOX", warna: "#d5e9c8", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4500 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 25000 }] },
    { id: "p04", name: "Jajanan Pilihan", desc: "Dibuat untuk menemani waktu berkumpul.", foto: "4.JPG", kategori: "Jajanan • PCS / BOX", warna: "#d7e6ff", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 3500 }, { id: "box", name: "Kotak (isi 8 pcs)", price: 26000 }] },
    { id: "p05", name: "Menu Favorit", desc: "Camilan rumahan dengan rasa istimewa.", foto: "5.JPG", kategori: "Camilan • PCS / BOX", warna: "#e4d6fa", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 28000 }] },
    { id: "p06", name: "Kue Harian", desc: "Teman yang pas untuk kumpul bersama.", foto: "6.JPG", kategori: "Kue • PCS / BOX", warna: "#f8d9bd", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 10 pcs)", price: 38000 }] },
    { id: "p07", nama: "Camilan Ceria", desc: "Sajian lezat untuk berbagai suasana.", foto: "7.JPG", kategori: "Camilan • PCS / BOX", warna: "#d3eadb", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 4500 }, { id: "box", nama: "Kotak (isi 5 pcs)", harga: 21000 }] },
    { id: "p08", name: "Kreasi Dapur Umi", desc: "Salah satu pilihan jajanan rumahan kami.", foto: "8.JPG", kategori: "Kue • PCS / BOX", warna: "#f5d0ca", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 5000 }, { id: "box", nama: "Kotak (isi 6 pcs)", harga: 28000 }] },
    { id: "p09", name: "Jajanan Rumahan 09", desc: "Pilihan jajanan yang cocok untuk dinikmati bersama.", foto: "9.JPG", kategori: "Jajanan • PCS / BOX", warna: "#f3cadb", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 5500 }, { id: "box", nama: "Kotak (isi 5 pcs)", harga: 26500 }] },
    { id: "p10", name: "Kreasi Umi 10", desc: "Jajanan rumahan untuk melengkapi hari.", foto: "10.JPG", kategori: "Jajanan • PCS / BOX", warna: "#f7e3a4", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 3500 }, { id: "box", name: "Kotak (isi 6) pcs)", harga: 20000 }] },
    { id: "p11", name: "Camilan Pilihan 11", desc: "Pilihan makanan untuk waktu santai.", foto: "11.JPG", kategori: "Jajanan • PCS / BOX", warna: "#cce9d5", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 7 pcs)", price: 27000 }] },
    { id: "p12", name: "Kue Spesial 12", desc: "Cocok untuk teman minum teh bersama.", foto: "12.JPG", kategori: "Jajanan • PCS / BOX", warna: "#d8e1ff", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4500 }, { id: "box", name: "Kotak (isi 5 pcs)", harga: 21500 }] },
    { id: "p13", name: "Menu Manis 13", desc: "Sajian rumahan untuk keluarga.", foto: "13.JPG", kategori: "Jajanan • PCS / BOX", warna: "#e8d6f3", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 6 pcs)", price: 29000 }] },
    { id: "p14", name: "Jajanan Favorit 14", desc: "Camilan pilihan untuk berbagai suasana.", foto: "14.JPG", kategori: "Jajanan • PCS / BOX", warna: "#fad9c2", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 5500 }, { id: "box", nama: "Kotak (isi 7 pcs)", harga: 37500 }] },
    { id: "p15", nama: "Kue Umi 15", desc: "Sajian rumahan yang siap dipesan.", foto: "15.JPG", kategori: "Jajanan • PCS/BOX", warna: "#f3cadb", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 3500 }, { id: "box", nama: "Kotak (isi 5 pcs)", harga: 16500 }] },
    { id: "p16", name: "Camilan 16", desc: "Pilihan jajanan untuk kumpul keluarga.", foto: "16.JPG", kategori: "Jajanan • PCS / BOX", warna: "#f7e3a4", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 6 pcs)", harga: 23000 }] },
    { id: "p17", name: "Menu Umi 17", desc: "Jajanan rumahan pilihan.", foto: "17.JPG", kategori: "Jajanan • PCS/BOX", warna: "#cce9d5", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 4500 }, { id: "box", nama: "Kotak (isi 7 pcs)", harga: 30500 }] },
    { id: "p18", name: "Kue Pilihan 18", desc: "Cocok menemani waktu istirahat.", foto: "18.JPG", kategori: "Jajanan • PCS / BOX", warna: "#d8e1ff", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 5000 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 24000 }] },
    { id: "p19", name: "Camilan 19", desc: "Dibuat untuk dinikmati bersama.", foto: "19.JPG", kategori: "Jajanan • PCS / BOX", warna: "#e8d6f3", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 5500 }, { id: "box", nama: "Kotak (isi 6 pcs)", harga: 32000 }] },
    { id: "p20", name: "Jajanan 20", desc: "Pilihan menu untuk hari spesial.", foto: "20.JPG", kategori: "Jajanan • PCS / BOX", warna: "#fad9c2", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 3500 }, { id: "box", name: "Kotak (isi 7 pcs)", price: 23500 }] },
    { id: "p21", name: "Kue Rumahan 21", desc: "Camilan untuk keluarga di rumah.", foto: "21.JPG", kategori: "Jajanan • PCS / BOX", warna: "#f3cadb", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4000 }, { id: "box", name: "Kotak (isi 5 pcs)", price: 19000 }] },
    { id: "p22", name: "Menu Spesial 22", desc: "Beragam jajanan rumahan pilihan.", foto: "22.JPG", kategori: "Jajanan • PCS / BOX", warna: "#f7e3a4", varian: [{ id: "pcs", name: "Satuan (1 pcs)", price: 4500 }, { id: "box", name: "Kotak (isi 6) pcs)", harga: 26000 }] },
    { id: "p23", nama: "Kreasi Umi 23", desc: "Jajanan pilihan dari Dapur Umi.", foto: "23.JPG", kategori: "Jajanan • PCS/BOX", warna: "#cce9d5", varian: [{ id: "pcs", nama: "Satuan (1 pcs)", harga: 5000 }, { id: "box", nama: "Kotak (isi 7 pcs)", harga: 34000 }] }
];
const rupiah = n => "Rp" + Number(n).toLocaleString("id-ID");
const $ = id => document.getElementById(id);
const photoURL = p => "assets/images/" + encodeURIComponent(p.photo);
biarkan keranjang = [];
mencoba {
    const stored = JSON.parse(localStorage.getItem("dapurUmiCart") || "[]");
    jika (Array.isArray(tersimpan))
        keranjang = tersimpan.filter(item => PRODUK.some(p => p.id === item.id && p.variants.some(v => v.id === item.variant)) && Number.isSafeInteger(item.qty) && item.qty > 0 && item.qty <= 99);
}
tangkap (e) {
    keranjang = [];
}
let activeProduct = null, detailQuantity = 1, lastFocused = null, currentDrawer = null, toastTimer;
fungsi escapeHTML(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&", "<": "<", ">": ">", "\"": """, "'": "'" })[c]); }
fungsi getVariant(item) { return PRODUCTS.find(p => p.id === item.id)?.variants.find(v => v.id === item.variant); }
function subtotal() { return cart.reduce((total, item) => total + (getVariant(item)?.price || 0) * item.qty, 0); }
function saveCart() { localStorage.setItem("dapurUmiCart", JSON.stringify(cart)); $("cartCount").textContent = cart.reduce((s, i) => s + i.qty, 0); }
fungsi toast(pesan) { clearTimeout(toastTimer); $("toast").textContent = pesan; $("toast").classList.remove("hidden"); toastTimer = setTimeout(() => $("toast").classList.add("hidden"), 2800); }
fungsi renderProducts() { const container = $("carousel"); container.innerHTML = PRODUCTS.map(p => `<article class="product-card"><div class="card-content"><div class="card-head"><span class="pill">${escapeHTML(p.category)}</span><button class="card-arrow" data-product="${p.id}" aria-label="Lihat pilihan ${escapeHTML(p.name)}">↗</button></div><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(p.desc)}</p><div class="card-price">Mulai ${rupiah(Math.min(...p.variants.map(v => v.price)))}</div></div><button data-product="${p.id}" style="all:unset;cursor:pointer;display:block" aria-label="Pilih ${escapeHTML(p.name)}"><div class="card-photo" style="background:${p.color}"><img src="${photoURL(p)}" alt="Foto ${escapeHTML(p.name)}" loading="lazy" onerror="this.style.display='none';this.parentElement.insertAdjacentText('afterbegin','Foto belum tersedia')"></div></button></article>`).join(""); }
function openDrawer(name) { closeDrawer(false); lastFocused = document.activeElement; currentDrawer = name; $("overlay").classList.remove("hidden"); $(name).classList.remove("hidden"); document.body.classList.add("locked"); $(name).querySelector("[data-close]").focus(); }
fungsi closeDrawer(restore = true) { ["detailDrawer", "cartDrawer", "checkoutDrawer", "overlay"].forEach(id => $(id).classList.add("hidden")); document.body.classList.remove("locked"); currentDrawer = null; if (restore && lastFocused?.isConnected)
    lastFocused.focus(); }
fungsi openProduct(id) { activeProduct = PRODUCTS.find(p => p.id === id); jika (!activeProduct)
    return; detailQuantity = 1; $("detailPhoto").style.background = activeProduct.color; $("detailPhoto").innerHTML = `<img src="${photoURL(activeProduct)}" alt="${escapeHTML(activeProduct.name)}">`; $("detailTitle").textContent = activeProduct.name; $("detailDesc").textContent = activeProduct.desc; $("variantSelect").innerHTML = activeProduct.variants.map(v => `<option value="${v.id}">${escapeHTML(v.name)} — ${rupiah(v.price)}</option>`).join(""); updateDetail(); openDrawer("detailDrawer"); }
fungsi updateDetail() { jika (!activeProduct)
    return; const v = activeProduct.variants.find(x => x.id === $("variantSelect").value) || activeProduct.variants[0]; $("detailQty").textContent = detailQuantity; $("unitInfo").textContent = `${rupiah(v.price)} untuk ${v.name.toLowerCase()}`; $("detailTotal").textContent = rupiah(v.price * detailQuantity); }
fungsi addItem() { jika (!activeProduct)
    kembalikan; const variant = $("variantSelect").value; const found = cart.find(x => x.id === activeProduct.id && x.variant === variant); jika (found)
    found.qty = Math.min(99, found.qty + detailQuantity);
kalau tidak
    cart.push({ id: activeProduct.id, varian, jumlah: detailQuantity }); simpanKeranjang(); tutupLaci(); toast("Berhasil masuk keranjang 🛒"); }
fungsi updateCart(id, variant, delta) { const item = cart.find(x => x.id === id && x.variant === variant); if (!item)
    kembalikan; item.qty += delta; jika (item.qty <= 0)
    keranjang = keranjang.filter(x => x !== item);
kalau tidak
    item.qty = Math.min(99, item.qty); saveCart(); renderCart(); }
function removeCart(id, variant) { cart = cart.filter(x => !(x.id === id && x.variant === variant)); saveCart(); renderCart(); }
fungsi renderCart() { const body = $("cartBody"); if (!cart.length) {
    body.innerHTML = '<div class="empty"><span>🛒</span>Keranjang masih kosong.<br>Yuk pilih makanan dulu!</div>';
}
kalau tidak {
    body.innerHTML = cart.map(item => { const p = PRODUCTS.find(x => x.id === item.id), v = getVariant(item); return `<div class="cart-line"><img src="${photoURL(p)}" alt=""><div><h3>${escapeHTML(p.name)}</h3><p>${escapeHTML(v.name)}</p><span class="price">${rupiah(v.price * item.qty)}</span><div class="cart-actions"><button class="mini-btn" data-cart="minus" data-id="${p.id}" data-variant="${v.id}" aria-label="Kurangi ${escapeHTML(p.name)}">−</button><strong>${item.qty}</strong><button class="mini-btn" data-cart="plus" data-id="${p.id}" data-variant="${v.id}" aria-label="Tambah ${escapeHTML(p.name)}">+</button><button class="remove" data-cart="remove" data-id="${p.id}" data-variant="${v.id}">Hapus</button></div></div></div>`; }).join("");
$("cartSubtotal").textContent = rupiah(subtotal()); $("goCheckout").disabled = !cart.length; }
fungsi todayLocal() { const now = new Date(); return new Date(now.getFullYear(), now.getMonth(), now.getDate()); }
fungsi dateISO(tanggal) { const y = date.getFullYear(), m = String(date.getMonth() + 1).padStart(2, "0"), d = String(date.getDate()).padStart(2, "0"); return `${y}-${m}-${d}`; }
fungsi firstAllowedDate() { const date = todayLocal(); let offset = SETTINGS.preorderDays; if (new Date().getHours() >= SETTINGS.cutoffHour)
    offset++; date.setDate(date.getDate() + offset); return dateISO(date); }
fungsi prepareCheckout() { jika (!cart.length)
    kembalikan; $("orderDate").min = firstAllowedDate(); jika (!$("orderDate").value || $("orderDate").value < $("orderDate").min)
    $("TanggalPesanan").nilai = $("TanggalPesanan").min; $("zone").innerHTML = '<option value="">Pilih wilayah</option>' + SETTINGS.zones.map(z => `<option value="${z.id}">${escapeHTML(z.name)} — Biaya ${rupiah(z.fee)}</option>`).join(""); $("bankText").textContent = SETTINGS.accountNumber ? `${SETTINGS.bank} — ${SETTINGS.accountNumber} an ${SETTINGS.accountName}` : "Nomor rekening penjual belum diisi. Konfirmasi melalui WhatsApp sebelum transfer."; $("formError").textContent = ""; perbaruiCheckout(); openDrawer("checkoutDrawer"); }
fungsi method() { return document.querySelector('input[name="method"]:checked').value; }
fungsi pembayaran() { return document.querySelector('input[name="payment"]:checked').value; }
fungsi selectedZone() { return SETTINGS.zones.find(z => z.id === $("zone").value); }
function updateCheckout() { const delivery = method() === "delivery", zone = selectedZone(), fee = delivery && zone ? zone.fee : 0; $("deliveryFields").classList.toggle("hidden", !delivery); $("bankInfo").classList.toggle("hidden", payment() !== "Transfer Bank"); $("ckSubtotal").textContent = rupiah(subtotal()); $("ckDelivery").textContent = delivery ? (zone ? rupiah(fee) : "Pilih wilayah") : "Gratis"; $("ckTotal").textContent = rupiah(subtotal() + fee); $("minHelp").textContent = delivery && zone && subtotal() < zone.min ? `Minimum belanja ${zone.name}: ${rupiah(zone.min)}. Tambahkan ${rupiah(zone.min - subtotal())} lagi atau pilih Ambil Sendiri.` : ""; }
fungsi validateCheckout() { const name = $("custName").value.trim(), phone = $("custPhone").value.trim(), date = $("orderDate").value, zone = selectedZone(); let error = ""; if (!cart.length)
    error = "Keranjang masih kosong.";
jika (!nama)
    error = "Mohon isi nama pemesan.";
jika (!/^\+?[\d\s()-]{9,18}$/.test(phone))
    error = "Mohon isi nomor WhatsApp yang benar.";
jika (!tanggal || tanggal < firstAllowedDate())
    error = `Tanggal PO paling cepat ${firstAllowedDate()} (sesuai batas waktu pemesanan).`;
jika (metode() === "pengiriman" && !zona)
    error = "Pilih wilayah pengantaran dulu, ya.";
jika (method() === "delivery" && !$("address").value.trim())
    error = "Isi alamat lengkap untuk pengantaran.";
jika (metode() === "pengiriman" && subtotal() < zona.min)
    error = `Belanja belum mencapai minimum ${rupiah(zone.min)} untuk ${zone.name}.`; $("formError").textContent = kesalahan; kembalikan !kesalahan; }
fungsi buildMessage() { const zone = selectedZone(), delivery = method() === "delivery", fee = delivery ? zone.fee : 0; const items = cart.map((item, i) => { const p = PRODUCTS.find(x => x.id === item.id), v = getVariant(item); return `${i + 1}. ${p.name} — ${v.name}\n ${item.qty} × ${rupiah(v.price)} = ${rupiah(v.price * item.qty)}`; }).join("\n"); const date = $("orderDate").value.split("-").reverse().join("-"); return `Halo Dapur Umi, saya mau PRE-ORDER ya 😊\n\nNama: ${$("custName").value.trim()}\nWhatsApp: ${$("custPhone").value.trim()}\nTanggal diterima: ${date}\nWaktu: ${$("slot").value}\nMetode: ${delivery ? "Diantar ke Rumah" : "Ambil Sendiri"}${delivery ? `\nWilayah: ${zone.name}\nAlamat: ${$("address").value.trim()}` : ""}\nPembayaran: ${pembayaran()}\n\nDAFTAR PESANAN\n${items}\n\nSubtotal: ${rupiah(subtotal())}\nOngkir: ${rupiah(fee)}\nTOTAL: ${rupiah(subtotal() + fee)}\n\nCatatan: ${$("notes").value.trim() || "Tidak ada"}\n\nMohon konfirmasi ketersediaan, jadwal, dan pembayaran. Terima kasih!`; }
fungsi kirimWhatsApp() { jika (!validateCheckout())
    kembali; const wa = SETTINGS.whatsapp.replace(/\D/g, ""); jika (!/^62\d{8,13}$/.test(wa)) {
    toast("Nomor WA toko belum diatur. Gunakan Salin Detail Pesanan terlebih dahulu.");
    kembali;
} window.open(`https://wa.me/${wa}?text=${encodeURIComponent(buildMessage())}`, "_blank", "noopener,noreferrer"); }
fungsi asinkron copyOrder() { jika (!validateCheckout())
    kembali; const msg = buildMessage(); coba {
    tunggu navigator.clipboard.writeText(msg);
    toast("Rincian pesanan berhasil didinginkan");
}
tangkap (e) {
    const area = document.createElement("textarea");
    nilai area = pesan;
    area.style.position = "tetap";
    area.style.opacity = "0";
    dokumen.badan.tambahkan(area);
    area.select();
    const copied = document.execCommand("copy");
    area.hapus();
    toast(copied ? "Rincian berhasil mengkompensasi" : "Salin manual dari halaman");
} }
$("carousel").addEventListener("click", e => { const button = e.target.closest("[data-product]"); if (button)
    openProduct(button.dataset.product); });
$("prev").addEventListener("click", () => $("carousel").scrollBy({ left: -320, behavior: "smooth" }));
$("next").addEventListener("click", () => $("carousel").scrollBy({ left: 320, behavior: "smooth" }));
$("openCart").addEventListener("klik", () => { renderCart(); openDrawer("cartDrawer"); });
$("variantSelect").addEventListener("change", updateDetail);
$("detailMinus").addEventListener("click", () => { detailQuantity = Math.max(1, detailQuantity - 1); updateDetail(); });
$("detailPlus").addEventListener("click", () => { detailQuantity = Math.min(99, detailQuantity + 1); updateDetail(); });
$("addItem").addEventListener("click", addItem);
$("cartBody").addEventListener("click", e => { const btn = e.target.closest("[data-cart]"); if (!btn)
    kembali; const { cart: action, id, variant } = btn.dataset; jika (action === "hapus")
    hapusKeranjang(id, varian);
kalau tidak
    updateCart(id, variant, action === "plus" ? 1 : -1); });
$("goCheckout").addEventListener("click", prepareCheckout);
document.querySelectorAll('input[name="method"],input[name="payment"]').forEach(input => input.addEventListener("change", updateCheckout));
$("zone").addEventListener("change", updateCheckout);
$("sendWa").addEventListener("klik", sendWhatsApp);
$("copyOrder").addEventListener("click", copyOrder);
document.querySelectorAll("[data-close]").forEach(btn => btn.addEventListener("click", () => closeDrawer()));
$("overlay").addEventListener("click", () => closeDrawer());
document.addEventListener("keydown", e => { if (e.key === "Escape" && currentDrawer)
    tutup laci(); jika (e.key === "Tab" && laci saat ini) {
    const elements = [...$(currentDrawer).querySelectorAll('button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled])')].filter(el => el.getClientRects().length);
    konstanta pertama = elemen[0], terakhir = elemen.pada(-1);
    jika (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        terakhir.fokus();
    }
    jika (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        pertama.fokus();
    }
} });
renderProducts();
simpanKeranjang();
