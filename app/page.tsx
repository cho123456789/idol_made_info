const downloadUrl = "#install";

const features = [
  { number: "01", title: "멤버를 톡, 눌러보세요", description: "최애 멤버를 선택하면 사진이 랜덤으로 바뀌고, 멤버별 유행어가 반응처럼 나타나요.", image: "/main.gif", alt: "리센느 팬메이드 앱 메인 화면" },
  { number: "02", title: "매일 다른 최애 사진 위젯", description: "마음에 드는 사진을 골라 홈 화면 위젯으로 등록해 보세요. 폰을 열 때마다 최애를 만날 수 있어요.", image: "/widget.gif", alt: "멤버 사진 위젯 선택 화면" },
  { number: "03", title: "배경화면까지 내 취향대로", description: "선택한 멤버 사진을 배경화면으로 적용하고, 나만의 리센느 홈 화면을 완성해 보세요.", image: "/wallpaper.gif", alt: "배경화면 적용 화면" },
];

export default function Home() {
  return <main>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
      <div className="hero-copy">
        <p className="eyebrow">RESCENE FAN PROJECT</p>
        <h1 id="hero-title">리센느 <br />포토 위젯 <span>♡</span></h1>
        <p className="hero-text">최애를 누르면 유행어가 나오고,<br />사진 위젯과 배경화면으로 매일 만나요.</p>
        <div className="hero-actions"><a className="button primary" href={downloadUrl}>Android APK 다운로드 <b>↓</b></a><a className="text-link" href="#features">기능 먼저 보기 <span>↓</span></a></div>
        <p className="tiny-note">Android 전용 · 비공식 팬메이드 앱</p>
      </div>
      <div className="hero-visual"><div className="sticker sticker-star">✦</div><div className="sticker sticker-heart">♡</div><div className="phone-frame"><img src="/main.gif" alt="앱 메인 화면 미리보기" /></div></div>
    </section>
    <section id="features" className="features" aria-labelledby="features-title">
      <div className="section-heading"><p className="eyebrow">WHAT&apos;S INSIDE</p><h2 id="features-title">최애를 폰 안에<br />데려오는 세 가지 방법</h2></div>
      <div className="feature-list">{features.map((feature, index) => <article className={`feature-card feature-${index + 1}`} key={feature.number}><div className="feature-copy"><p className="feature-number">{feature.number}</p><h3>{feature.title}</h3><p>{feature.description}</p></div><div className="feature-media"><img src={feature.image} alt={feature.alt} /></div></article>)}</div>
    </section>
    <section id="install" className="install" aria-labelledby="install-title">
      <div><p className="eyebrow">DOWNLOAD</p><h2 id="install-title">지금, 내 폰을<br />최애 공간으로 꾸며봐요.</h2><p>다운로드 버튼을 누르면 APK 파일을 받을 수 있어요.<br />설치 중 Android의 앱 설치 허용 안내가 표시될 수 있습니다.</p></div>
      <div className="download-card"><span className="android-mark">⌁</span><strong>RESCENE<br />FAN APP</strong><a className="button primary wide" href="https://azujctjnnzvvlccubfmm.supabase.co/storage/v1/object/sign/resence/resence.apk?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTU3YTViZC1mYTJlLTQxNDgtOWE5My1kMDg2YWZiNGUwZjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJyZXNlbmNlL3Jlc2VuY2UuYXBrIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzA1MTM2MiwiZXhwIjoxNzkyMjM1MzYyfQ.IrWetI97UBFvU_SPZMhM1Fu4R-n4SMtnmkycOTow7tI">APK 다운로드 <b>↓</b></a><small>Android 8.0 이상 권장</small></div>
    </section>
    <footer><p>본 앱은 비상업적 비공식 팬메이드 프로젝트입니다.</p><p>리센느 관련 이미지와 상표의 권리는 더뮤즈 엔터테이먼트 및 리센느 그룹 멤버들 한테 있습니다.</p></footer>
  </main>;
}
