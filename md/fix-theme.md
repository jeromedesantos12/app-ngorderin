# 🌓 Fixing Hydration Mismatch in Next.js with next-themes

## 📋 Deskripsi Singkat

Proyek ini menggunakan Next.js (App Router) dan Tailwind CSS, dengan fitur dark mode menggunakan library `next-themes`.

Namun, saat implementasi pertama kali, muncul error berikut:

```
Hydration failed because the server rendered HTML didn't match the client.
```

Error ini muncul karena perbedaan hasil render antara Server Side Rendering (SSR) dan Client Side Rendering (CSR) pada elemen yang berubah berdasarkan tema (misalnya ikon 🌞 / 🌙).

## 🚨 Masalah Utama

Saat halaman dirender di server:

1.  Komponen belum tahu apakah user memakai tema `dark` atau `light` (karena tidak bisa akses `window` atau `localStorage`).
2.  Server mungkin merender icon `<Sun />` (tema default = `light`).
3.  Setelah JavaScript client aktif, `next-themes` membaca preferensi dari browser/localStorage dan mengubah ke `<Moon />`.

➡️ **Akibatnya:** HTML dari server ≠ HTML di client → `hydration mismatch`.

Contoh perbedaan yang memicu error:

```diff
+ <Moon class="lucide lucide-moon" />
- <Sun class="lucide lucide-sun" />
```

## ✅ Solusi

Gunakan _hydration guard_ agar komponen baru dirender setelah client siap (_mounted_).

### 💡 Langkah-langkah

1.  **Pasang `next-themes`**

    ```bash
    npm install next-themes
    ```

    atau

    ```bash
    bun add next-themes
    ```

2.  **Tambahkan Provider di Root Layout**

    ```tsx
    // src/app/layout.tsx
    import { ThemeProvider } from "next-themes";
    import "./globals.css";

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en" suppressHydrationWarning>
          <body>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
            </ThemeProvider>
          </body>
        </html>
      );
    }
    ```

    - 🔸 `suppressHydrationWarning` mencegah peringatan kecil pada render awal.
    - 🔸 `attribute="class"` membuat Tailwind bisa mendeteksi class `dark`.

3.  **🧠 Perbaikan pada Komponen Navbar**

    Tambahkan logika `mounted` agar komponen hanya merender ikon setelah client siap:

    ```tsx
    "use client";

    import { Bot, ChevronRight, Menu, Moon, Sun, X } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import paths from "@/data/paths.json";
    import Link from "next/link";
    import { useTheme } from "next-themes";
    import { useEffect, useState } from "react";

    export function Navbar({
      isActive,
      toggleMenu,
    }: {
      isActive: boolean;
      toggleMenu: () => void;
    }) {
      const { theme, setTheme, systemTheme } = useTheme();
      const [mounted, setMounted] = useState(false);

      useEffect(() => setMounted(true), []);

      if (!mounted) {
        return (
          <header className="fixed top-0 w-full bg-background flex justify-center z-30">
            <div className="w-full max-w-7xl flex justify-between items-center p-4">
              <div className="font-bold flex gap-2 items-center justify-center">
                <Bot />
                <p className="font-mono">ngorderin_bot</p>
              </div>
            </div>
          </header>
        );
      }

      const currentTheme = theme === "system" ? systemTheme : theme;

      return (
        <header className="fixed top-0 w-full bg-background flex justify-center z-30">
          <div className="w-full max-w-7xl flex justify-between items-center p-4">
            <div className="font-bold flex gap-2 items-center justify-center">
              <Bot />
              <p className="font-mono">ngorderin_bot</p>
            </div>

            <div className="md:hidden flex items-center gap-5">
              <div
                className="rounded-full cursor-pointer duration-300"
                onClick={() =>
                  setTheme(currentTheme === "dark" ? "light" : "dark")
                }
              >
                {currentTheme === "dark" ? <Moon /> : <Sun />}
              </div>
              <div className="cursor-pointer duration-300" onClick={toggleMenu}>
                {isActive ? <X /> : <Menu />}
              </div>
            </div>

            <ul className="md:flex gap-5 text-sm hidden">
              {paths.map((path) => (
                <Link
                  href={path.path}
                  key={path.id}
                  className="cursor-pointer border-b-3 border-transparent hover:border-primary px-5 duration-300"
                >
                  {path.name}
                </Link>
              ))}
            </ul>

            <div className="md:flex gap-4 items-center justify-center hidden">
              <Button
                className="rounded-full cursor-pointer p-5"
                variant="secondary"
                onClick={() =>
                  setTheme(currentTheme === "dark" ? "light" : "dark")
                }
              >
                {currentTheme === "dark" ? <Moon /> : <Sun />}
              </Button>
              <Link href="https://t.me/ngorderin_bot" target="_blank">
                <Button className="cursor-pointer hover:scale-105 transition-transform flex gap-2 items-center justify-center">
                  <p>Try it now</p>
                  <ChevronRight />
                </Button>
              </Link>
            </div>
          </div>
        </header>
      );
    }
    ```

4.  **⚙️ Konfigurasi Tailwind untuk Dark Mode**

    Pastikan `tailwind.config.js` sudah menggunakan mode `class`:

    ```javascript
    module.exports = {
      darkMode: ["class"],
      content: ["./src/**/*.{ts,tsx}"],
      theme: { extend: {} },
      plugins: [],
    };
    ```

    Tambahkan juga ke CSS global:

    ```css
    html {
      color-scheme: light dark;
    }
    ```

## 🌈 Hasil Akhir

- ✅ Tidak ada lagi error `hydration mismatch`
- ✅ Tema menyesuaikan sistem browser
- ✅ Transisi tema berjalan mulus
- ✅ UI tetap stabil saat _first render_

### ✨ Catatan Tambahan

Jika kamu ingin menambahkan efek transisi saat ganti tema:

```css
* {
  transition: background-color 0.3s ease, color 0.3s ease;
}
```

## 💬 Kesimpulan

Masalah ini umum pada proyek Next.js yang menggunakan `next-themes`.
Solusinya bukan dengan mematikan SSR, tapi dengan menunda render elemen yang bergantung pada data client (misalnya tema, preferensi user, dsb).

Dengan pendekatan `mounted` ini, UI tetap sinkron antara server dan client tanpa error.
