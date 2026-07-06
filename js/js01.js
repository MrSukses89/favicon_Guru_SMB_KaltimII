// Mengambil element DOM secara presisi
const btnSide = document.getElementById('btn-side');
const dockBottom = document.getElementById('dock-bottom');
const btnBottomTrigger = document.getElementById('btn-bottom-trigger');
const iconCenter = document.getElementById('icon-center');

// Flag penanda state menu (True = Terbuka, False = Tertutup)
let isBottomOpen = false;
let isCenterOpen = false;

// 1. Aksi Klik Tombol Kiri (Side Dock)
btnSide.addEventListener('click', () => {
    isBottomOpen = !isBottomOpen;
    
    if (isBottomOpen) {
        // Tampilkan Dock Bawah
        dockBottom.classList.add('show');
        // Ubah icon jadi tanda silang (X)
        btnSide.innerHTML = '<i class="fa-solid fa-xmark"></i>'; 
        // Ubah warna latar belakang tombol jadi merah via CSS class
        btnSide.classList.add('active-close');
    } else {
        // Jika ditutup, bersihkan semua state menu yang terbuka
        closeAll();
    }
});

// 2. Aksi Klik Tombol Roket (Bottom Trigger)
btnBottomTrigger.addEventListener('click', () => {
    isCenterOpen = !isCenterOpen;

    if (isCenterOpen) {
        // Tampilkan Icon di Tengah Layar
        iconCenter.classList.add('show');
    } else {
        // Sembunyikan kembali
        iconCenter.classList.remove('show');
    }
});

// Fungsi Reset Global untuk menutup semua tingkatan menu
function closeAll() {
    isBottomOpen = false;
    isCenterOpen = false;
    
    // Hapus class show dari element
    dockBottom.classList.remove('show');
    iconCenter.classList.remove('show');
    
    // Kembalikan tombol kiri ke bentuk semula (Garis 3 / Indigo)
    btnSide.innerHTML = '<i class="fa-solid fa-bars"></i>';
    btnSide.classList.remove('active-close');
}