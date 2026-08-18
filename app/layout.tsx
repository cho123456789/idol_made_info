import type { Metadata } from "next";
import "./globals.css";
import "./mobile-media.css";

export const metadata: Metadata = {
  title: "RESCENE 팬메이드 앱 | 사진 위젯 & 배경화면",
  description: "리센느 입덕 기념 팬메이드 Android 앱. 최애 사진 위젯과 배경화면으로 홈 화면을 꾸며 보세요.",
  openGraph: { title: "RESCENE 팬메이드 앱", description: "최애 사진 위젯 · 배경화면", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
