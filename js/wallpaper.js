// 1. Daftar Koleksi
const koleksiWallpaper = [
    "https://images.pexels.com/photos/1252814/pexels-photo-1252814.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    "https://images.pexels.com/photos/1933881/pexels-photo-1933881.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1504333631150-c85028969628?auto=format&fit=crop&w=1920&q=80",
    "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1920",
    "https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1920"
];

let currentIndex = 0;
let autoInterval = null;

// 2. Fungsi Klik Manual
function nextWallpaper() {
    currentIndex++;
    if (currentIndex >= koleksiWallpaper.length) {
        currentIndex = 0;
    }
    const targetWall = koleksiWallpaper[currentIndex];
    document.body.style.backgroundImage = `url('${targetWall}')`;
    console.log("Wallpaper: " + targetWall);
}

// 3. Fungsi Auto (10 Menit)
function toggleAutoWallpaper() {
    const isChecked = document.getElementById('autoWallpaperCheck').checked;
    if (isChecked) {
        autoInterval = setInterval(nextWallpaper, 600000); // 10 menit = 600000 milidetik
        console.log("Auto ON");
    } else {
        clearInterval(autoInterval);
        autoInterval = null;
        console.log("Auto OFF");
    }
}

// 4. Jalankan saat Start
document.addEventListener('DOMContentLoaded', () => {
    // Load wallpaper pertama
    document.body.style.backgroundImage = `url('${koleksiWallpaper[0]}')`;
    
    // Jalankan jam (pastikan fungsi tick() sudah ada di bawah atau file lain)
    if (typeof tick === "function") {
        tick();
        setInterval(tick, 1000);
    }
    
    if (typeof renderCalendar === "function") {
        renderCalendar();
    }
});