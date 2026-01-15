/**
 * lazygitプレゼンスライド作成スクリプト
 * 3枚構成: 導入 → メリット → まとめ
 */
import PptxGenJS from 'pptxgenjs';

const pptx = new PptxGenJS();

// スライド設定
pptx.layout = 'LAYOUT_16x9';
pptx.title = 'lazygit LT';
pptx.author = 'senna';

// カラーパレット（ターミナル風ダークテーマ）
const colors = {
  bg: '1a1a2e',
  accent: '00d9ff',
  green: '00ff88',
  text: 'ffffff',
  subtext: 'b0b0b0'
};

// ========== Slide 1: lazygitとは ==========
const slide1 = pptx.addSlide();
slide1.background = { color: colors.bg };

slide1.addText('lazygit', {
  x: 0.5, y: 1.0, w: '90%', h: 1.2,
  fontSize: 60, bold: true, color: colors.accent,
  fontFace: 'Arial'
});

slide1.addText('TUIのGitクライアント', {
  x: 0.5, y: 2.2, w: '90%', h: 0.6,
  fontSize: 28, color: colors.text,
  fontFace: 'Arial'
});

slide1.addText([
  { text: '使い始めたきっかけ', options: { bold: true, color: colors.green } },
  { text: '\n\n' },
  { text: '• Ghosttyで外部ターミナルデビュー\n', options: { color: colors.text } },
  { text: '• エディタの横にターミナルを並べる運用\n', options: { color: colors.text } },
  { text: '• せっかくなのでTUIツールデビューしよう！', options: { color: colors.text } }
], {
  x: 0.5, y: 3.2, w: '90%', h: 2.0,
  fontSize: 22, fontFace: 'Arial',
  valign: 'top'
});

// ========== Slide 2: 何がいいのか ==========
const slide2 = pptx.addSlide();
slide2.background = { color: colors.bg };

slide2.addText('何がいいのか', {
  x: 0.5, y: 0.8, w: '90%', h: 1.0,
  fontSize: 48, bold: true, color: colors.accent,
  fontFace: 'Arial'
});

// 左カラム: かっこいい
slide2.addShape(pptx.ShapeType.roundRect, {
  x: 0.5, y: 2.0, w: 5.8, h: 2.8,
  fill: { color: '2a2a4e' },
  line: { color: colors.green, pt: 2 }
});

slide2.addText('かっこいい', {
  x: 0.7, y: 2.2, w: 5.4, h: 0.6,
  fontSize: 28, bold: true, color: colors.green,
  fontFace: 'Arial'
});

slide2.addText('ターミナルで動くUI\n= 玄人感がすごい', {
  x: 0.7, y: 2.9, w: 5.4, h: 1.6,
  fontSize: 20, color: colors.text,
  fontFace: 'Arial', valign: 'top'
});

// 右カラム: 1キー操作
slide2.addShape(pptx.ShapeType.roundRect, {
  x: 6.7, y: 2.0, w: 5.8, h: 2.8,
  fill: { color: '2a2a4e' },
  line: { color: colors.accent, pt: 2 }
});

slide2.addText('全操作が1キー', {
  x: 6.9, y: 2.2, w: 5.4, h: 0.6,
  fontSize: 28, bold: true, color: colors.accent,
  fontFace: 'Arial'
});

slide2.addText('c → commit\np → push\ns → stage\n...直感的！', {
  x: 6.9, y: 2.9, w: 5.4, h: 1.6,
  fontSize: 20, color: colors.text,
  fontFace: 'Arial', valign: 'top', fontFace: 'Courier New'
});

// ========== Slide 3: まとめ ==========
const slide3 = pptx.addSlide();
slide3.background = { color: colors.bg };

slide3.addText('まとめ', {
  x: 0.5, y: 0.8, w: '90%', h: 1.0,
  fontSize: 48, bold: true, color: colors.accent,
  fontFace: 'Arial'
});

slide3.addText([
  { text: 'lazygit = TUIのGitクライアント\n\n', options: { fontSize: 26, color: colors.text } },
  { text: '✓ ターミナルでかっこよくGit操作\n', options: { fontSize: 22, color: colors.green } },
  { text: '✓ 1キーで全操作完結\n', options: { fontSize: 22, color: colors.green } },
  { text: '✓ Ghostty + lazygit の組み合わせ最高', options: { fontSize: 22, color: colors.green } }
], {
  x: 0.5, y: 2.0, w: '90%', h: 2.0,
  fontFace: 'Arial', valign: 'top'
});

slide3.addShape(pptx.ShapeType.roundRect, {
  x: 2.5, y: 4.0, w: 8.0, h: 1.2,
  fill: { color: '2a2a4e' },
  line: { color: colors.accent, pt: 2 }
});

slide3.addText('他にもおすすめTUIツールあれば教えてください！', {
  x: 2.5, y: 4.0, w: 8.0, h: 1.2,
  fontSize: 22, bold: true, color: colors.accent,
  fontFace: 'Arial', align: 'center', valign: 'middle'
});

// 出力
pptx.writeFile({ fileName: 'lazygit-lt.pptx' })
  .then(() => console.log('Created: lazygit-lt.pptx'))
  .catch(err => console.error(err));
