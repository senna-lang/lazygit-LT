---
theme: default
background: "#1a1a2e"
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: lazygit LT
---

# lazygit 始めました

<div class="text-2xl text-cyan-400 mt-8 mb-4">TUIのGitクライアント</div>

<div class="text-gray-300 text-lg mb-8">"A simple terminal UI for git commands"</div>

<div class="grid grid-cols-3 gap-4 text-sm">
  <div class="bg-slate-800/50 rounded-lg p-3">
    <div class="text-yellow-400 text-2xl font-bold">70.7k</div>
    <div class="text-gray-400">GitHub Stars</div>
  </div>
  <div class="bg-slate-800/50 rounded-lg p-3">
    <div class="text-green-400 text-2xl font-bold">Go製</div>
    <div class="text-gray-400">軽量・高速</div>
  </div>
  <div class="bg-slate-800/50 rounded-lg p-3">
    <div class="text-cyan-400 text-2xl font-bold">OSS</div>
    <div class="text-gray-400">MIT License</div>
  </div>
</div>

<style>
h1 {
  color: #00d9ff;
  font-size: 3.5rem !important;
}
</style>

---

# なぜ使い始めたのか

<div class="grid grid-cols-2 gap-8 mt-4">
  <div class="text-left space-y-4 mt-8">
    <div class="flex items-start gap-3">
      <div>
        <div v-click="1" class="font-black text-3xl">かっこいいからです。</div>
        <div v-click="2" class="text-blue-300">圧倒的玄人感</div>
      </div>
    </div>
    <div v-click="3" class="flex flex-col gap-2 pt-4">
      <div class="flex items-start gap-3">
        <div class="text-xl">👻</div>
        <div>
          <div class="text-cyan-400 font-semibold">Ghosttyを使い始めた</div>
          <div class="text-gray-400 text-sm">Claude Codeをターミナルエミュレータで動かしたい</div>
        </div>
      </div>
      <div class="text-center text-xl text-gray-400">↓</div>
      <div class="flex items-start gap-3">
        <div class="text-xl">🚀</div>
        <div>
          <div class="text-green-400 font-semibold">TUIツール試してみたい！</div>
        </div>
      </div>
    </div>
  </div>
  <div v-click="1" class="flex items-center justify-center">
    <img src="/image/lazygit-screenshot.png" class="rounded-lg shadow-2xl h-100" />
  </div>
</div>

<style>
h1 {
  color: #00d9ff;
}
</style>

---

# 何がいいのか

<div class="grid grid-cols-2 gap-6 mt-4">
  <div v-click="1" class="border-2 border-green-400 rounded-xl p-4 bg-slate-800/50">
    <h3 class="text-green-400 text-xl font-bold mb-3">見た目がかっこいい</h3>
    <p class="text-gray-300 text-sm">ターミナルで動くリッチなUI<br/>→ 玄人感、視覚的なわかりやすさ</p>
  </div>
  <div v-click="2" class="border-2 border-cyan-400 rounded-xl p-4 bg-slate-800/50">
    <h3 class="text-cyan-400 text-xl font-bold mb-3">全操作が1キー</h3>
    <div class="text-gray-300 font-mono text-sm">
      <span class="text-yellow-400">c</span> commit / <span class="text-yellow-400">p</span> push / <span class="text-yellow-400">s</span> stage<br/>
      <span class="text-yellow-400">z</span> undo / <span class="text-yellow-400">Space</span> 選択
    </div>
  </div>
  <div v-click="3" class="border-2 border-purple-400 rounded-xl p-4 bg-slate-800/50">
    <h4 class="text-purple-400 text-lg font-bold mb-3">ちょっと面倒な操作もコマンドで簡単に</h4>
    <p class="text-gray-300 text-sm">行単位のステージング：spaceキーで選択<br/>cherry-pick：ctrl + c → ctrl + v</p>
  </div>
  <div v-click="4" class="border-2 border-yellow-400 rounded-xl p-4 bg-slate-800/50">
    <h3 class="text-yellow-400 text-xl font-bold mb-3">コマンド暗記不要！</h3>
    <p class="text-gray-300 text-sm">?でコマンド一覧<br/>画面下部にサジェスト</p>
  </div>
</div>

<div v-click="5" class="border-2 border-cyan-400 rounded-lg p-2 bg-slate-800/50 text-cyan-400 font-bold mt-4">
  おすすめTUIツールあれば教えてください！
</div>

<style>
h1 {
  color: #00d9ff;
}
</style>
