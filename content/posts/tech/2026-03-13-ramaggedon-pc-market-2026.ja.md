---
title: "RAMaggedon（ラムアマゲドン）は現実だ — AIチップ需要がPCメモリを枯渇させている"
date: 2026-03-13T05:55:14+09:00
layout: "post"
description: "IDCが2026年のPC市場予測をまた引き下げました。AIチップメーカーがNvidia GPU向けHBM（高帯域幅メモリ）生産のためにDRAM製造設備を吸収しているためです。経済的な論理はこの構造を維持する方向を強く示しており、今年中の緩和は期待できません。"
categories:
  - テクノロジー
tags:
  - "RAM"
  - "DRAM"
  - "HBM"
  - "PC市場"
  - "IDC"
  - "Nvidia"
  - "SK Hynix"
  - "AIチップ"
  - "半導体"
  - "RAMaggedon"
thumbnail: "https://o.aolcdn.com/images/dims?image_uri=https%3A%2F%2Fd29szjachogqwa.cloudfront.net%2Fimages%2Fuser-uploaded%2Fidc_2026_forecast.png&resize=1400%2C787&client=19f2b5e49a271b2bde77&signature=85aad7df6d26a279c65b303e4efc9e21de0843e4"
---

<mark>2026年</mark>のPC購入者は厳しい現実に直面しています。AIチップメーカーが同じ製造設備をめぐって競争し、RAM価格が急騰。IDCはPC市場予測を再び引き下げ、<span class="hl-red">RAMaggedon</span>は今年中に緩和される気配がないと警告しています。

## 重要ポイント

- IDCは2026年のPC出荷量予測を複数回下方修正。AI向けメモリ生産にDRAM供給が転用されたことによる部品コスト上昇が原因です
- AIチップ用**HBM（High Bandwidth Memory）**は、同容量のPC DRAM比で<mark>10〜20倍</mark>の単価を形成しており、メーカーがAIメモリを優先する圧倒的な経済的インセンティブがあります
- SK Hynix・Micron・Samsungは構造的なジレンマを抱えています：マージンの差が大きすぎて、コンシューマー向けRAMは事実上最低優先度の製品です

![이미지 1](https://o.aolcdn.com/images/dims?image_uri=https%3A%2F%2Fd29szjachogqwa.cloudfront.net%2Fimages%2Fuser-uploaded%2Fidc_2026_forecast.png&resize=1400%2C787&client=19f2b5e49a271b2bde77&signature=85aad7df6d26a279c65b303e4efc9e21de0843e4)
*▲ IDCの2026年PC市場予測修正（出典：[RAMaggedon、今年の緩和は期待できず](https://www.engadget.com/computing/ramaggedon-not-expected-to-ease-this-year-as-idc-cuts-2026-pc-market-forecast-again-200000498.html?src=rss))*

## RAMaggedonとは何か？

コンシューマー向けPCやノートPCに使われる**DRAM（ダイナミックRAM）**の急激な価格上昇現象を指します。従来のメモリサイクルとは異なり、今回は異例の構造的要因があります：**AIチップ**です。

NvidiaのH100やB200 GPUなどの最新AIトレーニングハードウェアは、**HBM（High Bandwidth Memory）**という特殊DRAMを膨大な量必要とします。HBMはGPUパッケージの上にメモリダイを直接積層し、演算コアに超高速帯域幅を提供します。1枚のNvidia B200には複数のHBM3eスタックが必要です。

HBMを製造するメーカー——**SK Hynix**（市場支配的）、**Micron**、**Samsung**——はコンシューマー向けPC RAMを製造する同じ会社です。同じファブが両市場にサービスを提供しています。AIのHBM需要が急増すると、それはコンシューマー向け製品と同じ製造設備をめぐって直接競合します。

> 「経済的な論理は単純です：HBMの1GBはPC DRAMの1GBの約10〜20倍の価格で売れます。合理的なメーカーなら安い製品を優先させません。」

## サプライチェーンの数学

SK HynixはHBMが現在のDRAM売上の<mark>30%以上</mark>を占めると報告しています——物量比ではずっと少ない比率にもかかわらず。このシグナルは複数年の供給契約と市場上回り価格の形でメーカーに伝わり、コンシューマーメモリから離れる構造的な傾きを固定化させています。

| メモリ種類 | 主な用途 | 相対マージン | 2026年トレンド |
|------------|--------|-------------|----------------|
| HBM3e | AIトレーニングGPU | 非常に高い | 急増 |
| DDR5（サーバー）| データセンター | 高い | 成長 |
| DDR5（コンシューマー）| PC、ノートPC | 低い | <span class="hl-red">供給減少</span> |
| LPDDR5x | モバイル | 中程度 | 安定 |

## PC市場が代償を払う理由

HP・Dell・Lenovoなどのメーカーはマージン圧迫か小売価格引き上げかの選択を迫られています。コロナ禍の先行需要が引けた後の回復途上にあるPC市場において、<span class="hl-red">RAM価格上昇は深刻な需要へのマイナス要因です。</span>

PC市場は**AI PC更新サイクル**——オンデバイスAI搭載の新製品——による需要を期待していました。しかし二つの力が衝突しています：

1. AI PC機能の採用が予測より遅い。ほとんどのユーザーはオンデバイスAIのためにアップグレードしない
2. RAMの価格上昇が同じタイミングで到来し、更新サイクルのコストを引き上げている

<span class="hl-red">組み合わせは不利です：</span>市場は更新サイクルの触媒を必要としていましたが、部品コスト上昇がその需要を抑制しています。

## 緩和に必要なこと

コンシューマー向けRAM価格が下落するためには、3つのうちどれかが必要です：

- **HBM需要の軟化** — Nvidiaの受注残とハイパースケーラーのAI増強が続く限り2026年は困難
- **DRAM総製造能力の拡張** — 18〜24ヶ月の資本集約的なファブ建設が必要
- **HBM製造歩留まりの大幅改善** — 手直しから解放された設備が汎用DRAMに転用される余地

<span class="hl-blue">一つのポジティブなシグナル</span>：SamsungがSK HynixとのHBM歩留まりギャップを縮めるために積極投資しています。成功すれば、総HBM供給が増え、2026年後半または2027年にコンシューマーDRAMへの圧力が一部緩和されるかもしれません。ただしIDCの予測修正は、アナリストたちが2026年の出荷量に影響を与えるような近い将来の解消を期待していないことを示しています。

## 参考記事

1. [RAMaggedon、今年の緩和は期待できず — IDCが2026年PC市場予測を再び下方修正](https://www.engadget.com/computing/ramaggedon-not-expected-to-ease-this-year-as-idc-cuts-2026-pc-market-forecast-again-200000498.html?src=rss) — Engadget
